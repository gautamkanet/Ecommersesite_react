import "../App.css";

const Header = (props) => {
    return (
        <div className="flex shopping-card">
            <div onClick={() => props.handleShow(false)}>Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}>
                Cart<sup>{props.count}</sup>
            </div>
        </div>
    );
}

export default Header; 