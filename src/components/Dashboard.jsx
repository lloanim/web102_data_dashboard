import PokemonInfo from "./pokemonInfo"

const Dashboard = ({ pokemon }) => {
    if (!pokemon || pokemon.length === 0)
        return <div className="error-dashboard">Pokemon not found...</div>

    return (
        <div className="dashboard">
            <div className="row header-row">
                <div className="item">ID</div>
                <div className="item">Name</div>
                <div className="item">Height</div>
                <div className="item">Weight</div>
                <div className="item">Base Experience</div>
            </div>

            {pokemon.map((p) => (
                <PokemonInfo
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    height={p.height}
                    weight={p.weight}
                    base_experience={p.base_experience}
                />
            ))}
        </div>
    )
}

export default Dashboard