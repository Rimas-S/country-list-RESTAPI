import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { deleteCountry, deleteAll } from "../../state/action";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./CartPage.css";
import { MyCountry } from "../../types/types";
import { Dispatch } from "redux";

function CartPage() {
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

  // useNavigation
  let navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (addedToCartCountries.length === 0) {
    return (
      <div className="cartPage">
        <h2>Country Basket</h2>
        <h3 className="h3_empty-basket">Cart is empty</h3>
        <Button size="lg" type="button" variant="primary" onClick={goBack}>
          Go Back
        </Button>{" "}
        <Button onClick={handleDeleteAll} size="lg" variant="dark">
          Delete All
        </Button>
      </div>
    );
  } else {
    return (
      <div className="cartPage">
        <h2>Country Basket</h2>
        <div>
          {addedToCartCountries.map((item: MyCountry) => (
            <div className="cartPage_item" key={item.name.common}>
              <img
                style={{ borderRadius: "50%", width: "100px" }}
                src={item.flags.png}
                alt=""
              />
              <h3>{item.name.common}</h3>
              <section>
                <h5>
                  Population - {new Intl.NumberFormat().format(item.population)}
                </h5>
                <h5>Area - {new Intl.NumberFormat().format(item.area)} km2</h5>
              </section>
              <Button
                onClick={() => dispatch(deleteCountry(item.name.common))}
                variant="danger"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <Button size="lg" type="button" variant="primary" onClick={goBack}>
          Go Back
        </Button>{" "}
        <Button onClick={handleDeleteAll} size="lg" variant="dark">
          Delete All
        </Button>
      </div>
    );
  }
}

export default CartPage;
