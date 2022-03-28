import React, { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchCounties } from "../../state/action";
import DetailCard from "./DetailCard";

import "./Detail.css";
import { MyCountry } from "../../types/types";

function Detail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCounties());
  }, [dispatch]);

  const { country } = useParams();
  const countries = useSelector((state: RootStateOrAny) => state.countries);
  const countryMached = countries.find(
    (item: MyCountry) => item.name.common === country
  );

  return <DetailCard country={countryMached} className={""} />;
}

export default Detail;
