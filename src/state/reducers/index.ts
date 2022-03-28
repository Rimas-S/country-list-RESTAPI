import { combineReducers } from "redux";
import {
  countriesReducer,
  filteredCountriesReducer,
  addCountryReducer,
  addThemeMode,
} from "./countriesRuducer";

const reducers = combineReducers({
  countries: countriesReducer,
  filteredCountries: filteredCountriesReducer,
  addedCountries: addCountryReducer,
  themeMode: addThemeMode
});

export default reducers;
