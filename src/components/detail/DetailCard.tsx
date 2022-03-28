import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
import "./Detail.css";
import { PropsDetailCart } from "../../types/types";

function DetailCard(props: PropsDetailCart) {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="detail_card">
      <Card
        bsPrefix="card card_detail_country"
        border="dark"
        key={props.country?.name.common}
        style={{ width: "25rem" }}
      >
        <Card.Img variant="top" src={props.country?.flags.png} />
        <Card.Title as="h1">{props.country?.name.common}</Card.Title>
        <Card.Body as="h5">
          <Card.Text>Capital: {props.country?.capital}</Card.Text>
          <Card.Text>
            Population:{" "}
            {new Intl.NumberFormat().format(props.country?.population)}
          </Card.Text>
          <Card.Text>Region: {props.country?.region}</Card.Text>
          <Card.Text>
            Area: {new Intl.NumberFormat().format(props.country?.area)} km2
          </Card.Text>
          <Card.Text>
            Language:
            {props.country?.languages ? (
              Object.entries(props.country?.languages).map(([key]) => (
                <li key={key} style={{ listStyleType: "none" }}>
                  {props.country?.languages[key]}
                </li>
              ))
            ) : (
              <li style={{ listStyleType: "none" }}>NO Languages</li>
            )}
          </Card.Text>
          <Button
            size="lg"
            type="button"
            variant="outline-success"
            onClick={goBack}
          >
            Go Back
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DetailCard;
