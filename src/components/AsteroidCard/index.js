import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const AsteroidCard = ({ astData }) => {
  console.log(astData, "asteroid Card");

  return (
    <tr key={astData.neo_reference_id}>
      <td>{astData.name}</td>
      <td>
        {astData.estimated_diameter.feet.estimated_diameter_min.toFixed(0)} -{" "}
        {astData.estimated_diameter.feet.estimated_diameter_max.toFixed(0)}
      </td>
      <td>{astData.close_approach_data[0].close_approach_date}</td>
      <td>{astData.close_approach_data[0].miss_distance.miles}</td>
      <td>
        {parseFloat(
          astData.close_approach_data[0].relative_velocity.miles_per_hour
        ).toFixed(0)}
      </td>
    </tr>
  );
};

export default AsteroidCard;
