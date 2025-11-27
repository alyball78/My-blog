import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

export default function ArticlePage() {
  const {id} = useParams();

  const [article, setArticle] =useState([])
  const [isLoading, setIsLoading]= useState(false)
  const [error, setError] = useState(null)
const navigate = useNavigate(); 

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

function deleteArticle() { 
  fetch(`http://localhost:3001/articles/${id}`, { 
  method: "DELETE", }) 
  .then((response) => { 
    if (!response.ok) { 
      throw new Error("Impossible de supprimer l’article"); } 
      navigate("/articles"); 
    }) 
      .catch((err) => { 
        console.error(err); setError( err.message || "Une erreur est survenue lors de la suppression" );
       })
       }

    return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    <Link to={`/articles/${article.id}/edit`}>Modifier l’article </Link> 
    <button onClick={deleteArticle}>Supprimer</button> 
    </div>
  )

}