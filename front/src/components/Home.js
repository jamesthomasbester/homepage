import React from "react"
import '../styles/home.css'

const Home = () => {

    return(
        <div>
            <div class='HeroSection'>
                <h1>Future Awaits</h1>
                <p>For everything tech related</p>
            </div>

            <div class="UpdatesSection">
                <h1>Lastest Updates</h1>
                <div class="UpdatesWrapper" id="updates">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cocktail App</h5>
                            <p className="card-text">As a cocktail lover, I want to be able to search the cocktail recipes based on the different alcohol ingridents and cocktail name. and see the popular cocktail recipe recommendation based on the weather of the day in Melbourne.</p>
                            <a target="_blank" href="https://jamesthomasbester.github.io/CocktailApp/index.html">Check it out</a>
                            <p className="card-text"><small className="text-muted">James Bester</small></p>
                        </div>
                        <img src="./Untitled.png" className="card-img-bottom" alt="cocktails"></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home