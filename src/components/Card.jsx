function Card(props) {
    return (
        <div className="card">

            <div className="card-text">
                <h1 className="card-name">{props.name}</h1>
                <p>Вселенная: {props.universe}</p>
                <p>Альтер эго: {props.alterego}</p>
                <p>Род деятельности: {props.occupation}</p>
                <p>Друзья: {props.friends}</p>
                <p>Суперсилы: {props.superpowers}</p>
            </div>
            <div className="card-image">
                <img src={props.imgLink} alt={props.name} className="image"/>
            </div>
            <div className="card-footer">
            <div className="rating">
                <span className="star" data-index="1">&#9733;</span>
                <span className="star" data-index="2">&#9733;</span>
                <span className="star" data-index="3">&#9733;</span>
                <span className="star" data-index="4">&#9733;</span>
                <span className="star" data-index="5">&#9733;</span>
            </div>
            </div>
        </div>
    );
}

export default Card;