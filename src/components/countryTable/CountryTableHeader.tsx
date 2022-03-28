import { useState } from "react";

import { useDispatch } from "react-redux";
import { CountryTableType, MyCountry } from "../../types/types";
import { getFilteredCountries } from "../../state/action";
import {
  BsSortAlphaDown,
  BsSortAlphaDownAlt,
  BsSortNumericDown,
  BsSortNumericDownAlt,
} from "react-icons/bs";

function CountryTableHeader({ countries }: CountryTableType) {
  const dispatch = useDispatch();

  // useStates
  const [countryKey, setCountryKey] = useState(true);
  const [populationKey, setPopulationKey] = useState(true);
  const [areaKey, setAreaKey] = useState(true);
  const [regionKey, setRegionKey] = useState(true);
  const [activeIcon, setActiveIcon] = useState(0);

  // filter handlers
  // country
  const handleCountryFilter = () => {
    if (countryKey) {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.name.common > b.name.common ? 1 : -1
      );
      setCountryKey(false);
    } else {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.name.common < b.name.common ? 1 : -1
      );
      setCountryKey(true);
    }
    dispatch(getFilteredCountries("", countries));
    setActiveIcon(1);
  };
  // population
  const handlePopulationFilter = () => {
    if (populationKey) {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.population > b.population ? 1 : -1
      );
      setPopulationKey(false);
    } else {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.population < b.population ? 1 : -1
      );
      setPopulationKey(true);
    }
    dispatch(getFilteredCountries("", countries));
    setActiveIcon(2);
  };
  // Area
  const handleAreaFilter = () => {
    if (areaKey) {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.area > b.area ? 1 : -1
      );
      setAreaKey(false);
    } else {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.area < b.area ? 1 : -1
      );
      setAreaKey(true);
    }
    dispatch(getFilteredCountries("", countries));
    setActiveIcon(3);
  };
  // Region
  const handleRegionFilter = () => {
    if (regionKey) {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.region > b.region ? 1 : -1
      );
      setRegionKey(false);
    } else {
      countries.sort((a: MyCountry, b: MyCountry) =>
        a.region < b.region ? 1 : -1
      );
      setRegionKey(true);
    }
    dispatch(getFilteredCountries("", countries));
    setActiveIcon(4);
  };
  return (
    <thead>
      <tr>
        <th>Flag</th>
        <th>
          <div className="table-header">
            <p>Country</p>
            <button onClick={handleCountryFilter}>
              {countryKey ? (
                <BsSortAlphaDownAlt
                  className={
                    activeIcon === 1
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              ) : (
                <BsSortAlphaDown
                  className={
                    activeIcon === 1
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              )}
            </button>
          </div>
        </th>
        <th>
          <div className="table-header">
            <p>Population</p>
            <button onClick={handlePopulationFilter}>
              {populationKey ? (
                <BsSortNumericDownAlt
                  className={
                    activeIcon === 2
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              ) : (
                <BsSortNumericDown
                  className={
                    activeIcon === 2
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              )}
            </button>
          </div>
        </th>
        <th>
          <div className="table-header">
            <p>Area</p>
            <button onClick={handleAreaFilter}>
              {areaKey ? (
                <BsSortNumericDownAlt
                  className={
                    activeIcon === 3
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              ) : (
                <BsSortNumericDown
                  className={
                    activeIcon === 3
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              )}
            </button>
          </div>
        </th>
        <th>
          <div className="table-header">
            <p>Region</p>
            <button onClick={handleRegionFilter}>
              {regionKey ? (
                <BsSortAlphaDownAlt
                  className={
                    activeIcon === 4
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              ) : (
                <BsSortAlphaDown
                  className={
                    activeIcon === 4
                      ? "table-header_icon-active"
                      : "table-header_icon"
                  }
                />
              )}
            </button>
          </div>
        </th>
        <th>Action</th>
      </tr>
    </thead>
  );
}

export default CountryTableHeader;
