import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-contex";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext);
  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
  //   return curNumber + item.amount
  // },0)

  const cartcntx = useContext(CartContext);
  let quantity = 0;
  cartcntx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span>{cartcntx.message}</span> */}
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
