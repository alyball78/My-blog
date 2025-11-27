import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateArticlePage() {
const [newArticle, setNewArticle]= useState({title: "", content: ""});
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
const navigate= useNavigate()
function handleSubmit(event) { 
event.preventDefault(); 
setIsLoading(true); 
setError(null); 
fetch("http://localhost:3001/articles", { 
method: "POST", 
body: JSON.stringify(newArticle), 
headers: { 
"Content-Type": "application/json", 
}, 
}) 
.then((res) => { 
if (!res.ok) throw new Error("Erreur serveur"); 
return res.json(); 
}) 
.then((data) => { 
navigate("/"); 
// redirection ou reset du formulaire 
}) 
.catch((err) => setError(err.messa$ge)) 
.finally(() => setIsLoading(false)); 
} 
  
  return (
    <>
    <div>CreateArticlePage</div>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder = "titre de l'article" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} /> 
        <textarea placeholder ="Contenu de l'article" value={newArticle.content} onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })} /> 
        <button type="submit">Créer l’article</button> 
      </form> 
    </>
    
  )
}   
    