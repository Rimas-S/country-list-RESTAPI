import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { fetchCounties, getFilteredCountries } from "../../state/action";
import Cart from "../cart/Cart";
import "./Home.css";

import CountryTable from "../countryTable/CountryTable";
import Search from "../search/Search";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCounties());
  }, [dispatch]);

  const countries = useSelector((state: RootStateOrAny) => state.countries);
  const filteredCountries = useSelector(
    (state: RootStateOrAny) => state.filteredCountries
  );

  return (
    <div>
      <header className="main-header">
        <Search
          className={"main-header_search"}
          handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(getFilteredCountries(event.target.value, countries))
          }
        />
        <Cart className={"main-header_cart"} />
      </header>
      <CountryTable countries={filteredCountries} />
    </div>
  );
}

export default Home;
