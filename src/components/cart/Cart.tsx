import { RootStateOrAny, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PropsCart } from "../../types/types";
import CartHover from "../cartHover/CartHover";

function Cart(props: PropsCart) {
  const addedCountries = useSelector(
    (state: RootStateOrAny) => state.addedCountries
  );
  return (
    <div className={props.className}>
      <AiOutlineShoppingCart fontSize={30} /> {addedCountries.length}
      <CartHover />
    </div>
  );
}

export default Cart;
