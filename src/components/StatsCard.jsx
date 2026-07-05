const StatsCard = ({title, stat}) => {

    return(
        <div className="card">
            <div className="card-title">{title}</div>
            <div className="stat">{stat}</div>
        </div>
    )
}

export default StatsCard