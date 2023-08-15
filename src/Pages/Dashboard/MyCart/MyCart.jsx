import useCart from "../../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <h1>Total Items {cart.length}</h1>
            <h1>Total Items {total}</h1>
        </div>
    );
};

export default MyCart;