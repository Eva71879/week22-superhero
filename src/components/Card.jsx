import RatingComponent from './RatingComponent';

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-name">{props.name}</h1>
            </div>
            <div className="card-text">
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
                <RatingComponent/>
            </div>
        </div>
    );
}

export default Card;