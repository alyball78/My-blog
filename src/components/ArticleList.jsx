import { useEffect, useState } from "react";
import ArticleThumbnail from "./ArticleThumbnail";

function ArticleList() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm]= useState("")

    function handleChange(event) {
        console.log(event.target.value);
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch("http://localhost:3001/articles")
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP : ${res.status}`);
                return res.json();
            })
            .then((data) => setArticles(data))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);

    const filtered= articles.filter(article => article.title.includes(searchTerm))

    if (isLoading) return <p>chargement en cours</p>;
    if (error) return <p>erreurs: {error}</p>;
    if (!articles) return <p>aucune donnée trouvée: </p>;


    return (
        <div>
            <input type="text" placeholder="Tapes le titre de l'article souhaité" value={searchTerm} onChange={handleChange} />

            {
                filtered.map(article => (
                    <ArticleThumbnail key={article.title} article={article} />)
                )
            }



        </div>

    )
}
export default ArticleList;