import {
  addThemeModeType,
  ADD_COUNTRY,
  countryActionType,
  DELETE_ALL,
  DELETE_COUNTRY,
  getCountriesType,
  getFilteredCountriesType,
  GET_COUNTRIES,
  GET_FILTERED_COUNTRIES,
  MyCountries,
  MyCountry,
  SWITCH_MODE,
} from "../../types/types";

export const countriesReducer = (
  state: MyCountries = [],
  action: getCountriesType
) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return (state = action.payload.countries);
    default:
      return state;
  }
};

export const filteredCountriesReducer = (
  state = [],
  action: getFilteredCountriesType
) => {
  switch (action.type) {
    case GET_FILTERED_COUNTRIES:
      return action.payload.countries.filter(
        (item: MyCountry) =>
          item.name.common
            .toLowerCase()
            .search(action.payload.keyword.toLowerCase()) !== -1
      );
    default:
      return state;
  }
};

export const addCountryReducer = (state = [], action: countryActionType) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return [...state, action.payload];
    case DELETE_COUNTRY:
      return (state = state.filter((item) => item !== action.payload));
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};

// Switch mode
const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
export const addThemeMode = (state = defaultDark, action: addThemeModeType) => {
  switch (action.type) {
    case SWITCH_MODE:
      return (state = state === "dark" ? "light" : "dark");
    default:
      return state;
  }
};
