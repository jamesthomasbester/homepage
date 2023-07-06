import { useEffect, useState } from "react"
import '../styles/projects.css'
import image from '../assets/cocktail.png'

const Projects = () => {
    const [repo, setRepo] = useState([])
    const style = {
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0), url("${image}")`
    }
    useEffect(() =>{
        const repoData = async () => {
            await fetch("https://api.github.com/users/jamesthomasbester/repos")
            .then(response => response.json())
            .then(result => setRepo(result))
        }
        repoData()
    }, [])
    let imagemap = {
        CocktailApp : image,
        DailyTaskScheduler: "../assets/dailyTask.png"
    };

    return(
        <div className="project-container">
            {repo.map(repo => (
                <div className="card-container" style={{ style }}>
                    <div className={repo.language}>
                        <h2>{repo.language}</h2>
                    </div>
                    <div className="card-body">
                        <h3>{repo.name}</h3>
                        <h5>{repo.description}</h5>
                        <a href={repo.html_url}>{repo.html_url}</a>
                        <div className="details">
                            <p className="card-text">last updated: {repo.updated_at}</p>
                            <p className="card-text">created: {repo.created_at}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects