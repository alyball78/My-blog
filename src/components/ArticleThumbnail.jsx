import { useState } from "react";
import { Link } from "react-router-dom";

function ArticleThumbnail({article}){
const [isLike, setIsLike] = useState(false)
    function handleClick(){
setIsLike(!isLike)

    }
    return (
<div>
<h3>{article.title}</h3>
<p>{article.content}</p>
<p>{isLike ? "J'aime" : "J'aime pas"}</p>
<button onClick = {handleClick}>click</button>
<Link to={`/articles/${article.id}`}> Lire l’article </Link> 

</div>

    )
}
export default ArticleThumbnail;
