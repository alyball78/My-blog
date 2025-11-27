import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export default function UpdateArticlePage() {
    const {id} = useParams()
    const [article, setArticle] =useState(null)
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate() 

    useEffect(() => { 
        setIsLoading(true); 
        setError(null); 
        fetch("http://localhost:3001/articles/"+ id) 
        .then((res) => { 
            if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`); 
            return res.json(); 
        }) 
        .then((data) => setArticle(data)) 
        .catch((err) => setError(err.message)) 
        .finally(() => setIsLoading(false)); 
    }, []); 

    function handleSubmit(event){
        event.preventDefault(); 
        setIsLoading(true); 
        setError(null); 
        fetch("http://localhost:3001/articles/"+id, { 
            method: "PUT", 
            body: JSON.stringify(article), 
            headers: { 
                "Content-Type": "application/json", 
            }, 
        }) 
        .then((res) => { 
            if (!res.ok) throw new Error("Erreur serveur"); 
            return res.json(); 
        }) 
        .then(() => { 
            navigate("/articles/"+id); 
// redirection ou reset du formulaire 
        }) 
        .catch((err) => setError(err.messa$ge)) 
        .finally(() => setIsLoading(false)); 
    } 


    if (article)    return (
        <div>UpdateArticlePage {article.title}
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder = "titre de l'article" value={article.title} onChange={(e) => setArticle({ ...article, title: e.target.value })} /> 
                <textarea placeholder ="Contenu de l'article" value={article.content} onChange={(e) => setArticle({ ...article, content: e.target.value })} /> 
                <button type="submit">Modifier l’article</button> 
            </form> 

        </div>
    )
}
