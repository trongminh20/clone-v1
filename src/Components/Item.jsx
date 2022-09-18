export default function Item (props) {
    return (
        <div className="item">
            <img className = "itemImage" src={props.itemImage} alt="" />
            <p className="hastag">{props.hastag}</p>
        </div>
    )
}