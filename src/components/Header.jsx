import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

function Header() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const totalItems = cartItems.reduce(
        (acc, item) => acc + item.quantity, 0
    );

    return (
        <header className="">

            <h1>ShoppyGlobe</h1>

            <nav>

                <Link to="/">Home</Link>

                <Link to="/cart">
                    Cart ({totalItems})
                </Link>
            </nav>
        </header>
    )
}

export default Header