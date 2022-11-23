import { Link } from "react-router-dom";
import ".//items.css";

export function Item(props) {
    return (
        <div className="item">
            <img src={props.item.image}/>
            <h2>{props.item.name}</h2>
            <div className="info">
                <b>price: {props.item.price}$</b>
                <Link className="link-button" to={`/toy/${props.item.id}`}><button className="button-toy">View more</button></Link>
            </div>
        </div>
    )
}

export default Item;
