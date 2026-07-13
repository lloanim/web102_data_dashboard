const About = () => {
    return(
        <div className="about">
            <div className="about-title">About Pokemon Explorer</div>
            <div className="description">
                Welcome to Pokémon Explorer! This dashboard allows you to explore 
                Pokémon data and discover patterns between different Pokémon.

                <br /><br />

                Use the search bar and filters to find Pokémon by name, type, or 
                experience range. Clicking on a Pokémon will show additional details 
                including its abilities, moves, and stats.

                <br /><br />

                The summary cards provide an overview of the dataset, including the 
                total number of Pokémon displayed, average base experience, and the 
                most common Pokémon type.

                <br /><br />

                The charts help visualize interesting trends in the data. The first 
                chart shows the distribution of Pokémon types, allowing you to see 
                which types appear most frequently. The second chart compares height 
                and weight, showing how Pokémon size varies across the dataset.
            </div>
        </div>
    )
}

export default About