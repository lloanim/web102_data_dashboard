import { useEffect, useState } from "react"
import { useParams } from "react-router"

const PokemonDetail = () => {
    const { id } = useParams();
    const [fullDetails, setFullDetails] = useState(null)

    useEffect (() => {
        const getPokemonDetail = async () => {
            const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
            
            const data = await response.json();
            setFullDetails(data);
        }
        getPokemonDetail();

    }, [id]);

    return (
        <>
            {fullDetails && (
                <div className="box">
                    <div className="section">
                        <div className="section-one">
                            <div className="detail-name">{fullDetails.name}</div>
                            <br></br>
                            <div className="basic-info">
                                
                                <div className="detail-height"><b>Height:</b> {fullDetails.height}</div>
                                <div className="detail-weight"><b>Weight:</b> {fullDetails.weight}</div>
                                <div className="detail-type"><b>Type: </b> {fullDetails.types[0].type.name}</div>
                                <div className="detail-moves"><b>Moves:</b> {fullDetails.moves[0].move.name}, {fullDetails.moves[1].move.name}, {fullDetails.moves[2].move.name}</div>
                            </div>
                        </div>

                        <img className="detail-img" src={fullDetails.sprites.other["official-artwork"].front_default} alt={fullDetails.name} />
                    </div>

                    <div className="stats-name">Basic Stats</div>
                    <div className="detail-stats">
                        {fullDetails.stats.map((s) => (
                            <div className="stats-card" key={s.stat.name}> 
                                <div className="card-title"> {s.stat.name} </div>
                                <div className="stat"> {s.base_stat} </div>
                            </div>
                        ))}
                    </div>

                </div>
            )}
        
        </>
    )

}

export default PokemonDetail

