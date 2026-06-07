import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalItems = cartItems.reduce(
        (acc, item) => acc + item.quantity, 0
    );

    return (
        <header className="header">

            <h1 className="logo">ShoppyGlobe</h1>

            <SearchBar/>

            <nav>

                <Link to="/" className="nav-links">
                    <FaHome/>
                    Home
                </Link>

                <Link to="/cart" className="nav-links">
                    <FaShoppingCart/>
                    Cart <span className="cartCount">{totalItems}</span>
                </Link>
            </nav>
        </header>
    )
}

export default Header