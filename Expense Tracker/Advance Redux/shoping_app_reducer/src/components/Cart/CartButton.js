import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch(); 
  const cartItems = useSelector((state) => state.cart.items)
  let quantity = 0;
  cartItems.forEach((item) =>{
    quantity = quantity + Number(item.quantity)
  })

  const cartOpenHandler = () => {
    dispatch(cartActions.cartOpenToggle());
  };
  return (
    <button className={classes.button} onClick={cartOpenHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
