const PokemonInfo = ({id, name, height, weight, base_experience}) => {
    return (
        <div className="row">
            <div className="item">{id}</div>
            <div className="item">{name}</div>
            <div className="item">{height}</div>
            <div className="item">{weight}</div>
            <div className="item">{base_experience}</div>
        </div>
    )
}

export default PokemonInfo