import "../Style/item.scss";

export default function Item (props) {
    return (
        <div className="item">
            <img className = "itemImage" src={props.itemImage} alt="" />
            <h4 className="names">{props.name}</h4>
            <div className="categories">
                <p>Categories: {props.category}</p></div>
            <p className="desc">{props.description}</p>
            <p className="prices"> ${props.price}</p>
        </div>
    )
}