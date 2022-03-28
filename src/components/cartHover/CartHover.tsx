import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { deleteCountry, deleteAll } from "../../state/action";
import Button from "react-bootstrap/Button";

import "./CartHover.css";
import { MyCountry } from "../../types/types";
import { Dispatch } from "redux";
import { useNavigate } from "react-router-dom";

function CartHover() {
  const dispatch: Dispatch = useDispatch();
  const countries = useSelector((state: RootStateOrAny) => state.countries);
  const addedCountries = useSelector(
    (state: RootStateOrAny) => state.addedCountries
  );

  const addedToCartCountries = countries.filter((item: MyCountry) =>
    addedCountries.includes(item.name.common)
  );

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  let navigate = useNavigate();
  const goBack = () => {
    navigate("/cartPage");
  };

  if (addedToCartCountries.length === 0) {
    return (
      <div className="cartHover">
        <h3>Cart is empty</h3>
      </div>
    );
  } else {
    return (
      <div className="cartHover">
        <div>
          {addedToCartCountries.map((item: MyCountry) => (
            <div className="cartHover_item" key={item.name.common}>
              <h3>{item.name.common}</h3>
              <button
                className="cartHover_item--btn"
                onClick={() => dispatch(deleteCountry(item.name.common))}
              >
                -
              </button>
            </div>
          ))}
        </div>
        <Button onClick={handleDeleteAll} size="sm" variant="dark">
          Delete All
        </Button>
        <Button onClick={goBack} size="sm" variant="dark">
          More...
        </Button>
      </div>
    );
  }
}

export default CartHover;
