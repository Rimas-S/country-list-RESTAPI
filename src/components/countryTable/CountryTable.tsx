import Table from "react-bootstrap/Table";

import { CountryTableType } from "../../types/types";
import CountryTableBody from "./CountryTableBody";
import CountryTableHeader from "./CountryTableHeader";

import "./CountryTable.css";
import { RootStateOrAny, useSelector } from "react-redux";

function CountryTable({ countries }: CountryTableType) {
  const theme = useSelector((state: RootStateOrAny) => state.themeMode);

  return (
    <div className="country-table">
      <Table striped bordered hover variant={theme}>
        <CountryTableHeader countries={countries} />
        <CountryTableBody countries={countries} />
      </Table>
    </div>
  );
}

export default CountryTable;
