import PokemonInfo from "./pokemonInfo"

const Dashboard = ({ pokemon }) => {
    if (!pokemon || pokemon.length === 0)
        return <div className="dashboard">Loading...</div>

    return (
        <div className="dashboard">
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