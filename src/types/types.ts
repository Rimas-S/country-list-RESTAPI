export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_FILTERED_COUNTRIES = "GET_FILTERED_COUNTRIES";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const DELETE_ALL = "DELETE_ALL";
export const SWITCH_MODE = "SWITCH_MODE";

export type MyCountry = {
  name: {
    common: string;
  };
  population: number;
  area: number;
  region: string;
  flags: {
    png: string;
  };
  capital: string;
  languages: {
    [key: string]: string;
  };
};

export type MyCountries = MyCountry[];

// Action types
export type getCountriesType = {
  type: typeof GET_COUNTRIES;
  payload: {
    countries: MyCountries;
  };
};

export type getFilteredCountriesType = {
  type: typeof GET_FILTERED_COUNTRIES;
  payload: {
    keyword: string;
    countries: MyCountries;
  };
};

// Cart
export type addCountryToCartType = {
  type: typeof ADD_COUNTRY;
  payload: string;
};

// Cart Page
export type deleteCountryType = {
  type: typeof DELETE_COUNTRY;
  payload: string;
};

export type deleteAllType = {
  type: typeof DELETE_ALL;
};

// Union

export type countryActionType =
  | addCountryToCartType
  | deleteCountryType
  | deleteAllType;

// Country Table

export type CountryTableType = {
  countries: MyCountry[];
};

//   Detail Card
export type PropsDetailCart = {
  country: MyCountry;
  className: string;
};

//   Cart type
export type PropsCart = {
  className: string;
};

//    Search
export type SearchType = {
  handleChange: any;
  className: string;
};

// Switch mode
export type addThemeModeType = {
  type: typeof SWITCH_MODE;
};
