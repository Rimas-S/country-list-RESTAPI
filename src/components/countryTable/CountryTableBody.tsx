import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCountryToCart } from "../../state/action";
import { CountryTableType, MyCountry } from "../../types/types";

function CountryTableBody({ countries }: CountryTableType) {
  const dispatch = useDispatch();

  const addedCountries = useSelector(
    (state: RootStateOrAny) => state.addedCountries
  );
  function checkCountry(a: string) {
    return addedCountries.find((el: string) => el === a) ? true : false;
  }
  return (
    <tbody className="table-body">
      {countries.map((country: MyCountry) => (
        <tr key={country.name.common}>
          <td>
            <img src={country.flags.png} alt="" height="30px" width="60px" />
          </td>
          <td>
            <Link
              to={`/detail/${country.name.common}`}
              style={{ textDecoration: "none", color: "var(--primary-color)" }}
            >
              {country.name.common}
            </Link>
          </td>
          <td>{new Intl.NumberFormat().format(country.population)}</td>
          <td>{new Intl.NumberFormat().format(country.area)} km2</td>
          <td>{country.region}</td>
          <td>
            <Button
              variant="success"
              onClick={() => {
                dispatch(addCountryToCart(country.name.common));
              }}
              disabled={checkCountry(country.name.common)}
            >
              Add to Cart
              <AiOutlineShoppingCart className="table-body_icon" />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default CountryTableBody;
