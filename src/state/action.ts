import { Dispatch } from "redux";
import {
  addCountryToCartType,
  ADD_COUNTRY,
  deleteAllType,
  deleteCountryType,
  DELETE_ALL,
  DELETE_COUNTRY,
  getCountriesType,
  getFilteredCountriesType,
  GET_COUNTRIES,
  GET_FILTERED_COUNTRIES,
  MyCountries,
  SWITCH_MODE,
} from "../types/types";

// fetch date from API

export function getCountries(countries: MyCountries): getCountriesType {
  return {
    type: GET_COUNTRIES,
    payload: {
      countries,
    },
  };
}

export function getFilteredCountries(
  keyword: string,
  countries: MyCountries
): getFilteredCountriesType {
  return {
    type: GET_FILTERED_COUNTRIES,
    payload: {
      keyword,
      countries,
    },
  };
}

export function fetchCounties() {
  return (dispatch: Dispatch) => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCountries(data));
        dispatch(getFilteredCountries("", data));
      });
  };
}

// Cart
export function addCountryToCart(country: string): addCountryToCartType {
  return {
    type: ADD_COUNTRY,
    payload: country,
  };
}

// Cart Page
export function deleteCountry(country: string): deleteCountryType {
  return {
    type: DELETE_COUNTRY,
    payload: country,
  };
}

export function deleteAll(): deleteAllType {
  return {
    type: DELETE_ALL,
  };
}

export function setThemeMode() {
  return {
    type: SWITCH_MODE,
  };
}
