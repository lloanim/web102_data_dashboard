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
                    <div className="detail-name">{fullDetails.name}</div>
                    <img className="detail-img" src={fullDetails.sprites.front_default} alt={fullDetails.name} />

                    <div className="basic-info">
                        {fullDetails.height} {fullDetails.weight}
                    </div>

                </div>
            )}
        
        </>
    )

}

export default PokemonDetail

