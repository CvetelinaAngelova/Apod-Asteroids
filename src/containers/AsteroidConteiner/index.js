import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import AsteroidCard from "../../components/AsteroidCard/index";

const AsteroidContainer = ({ data }) => {
  console.log(data);
  return (
    <div>
      {Object.keys(data).map((itemData, index) => (
        <div key="{itemData.index}">  
          <div className="asteroidTableTitle">For Date {itemData}</div>
          <Table  striped hover variant="dark" responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Estimated Diameter (feet)</th>
                <th>Date of Closest Approach</th>
                <th>Distance (miles)</th>
                <th>Velocity (mph)</th>
              </tr>
            </thead>
            <tbody>
              {data[itemData].map((item) => (
                <AsteroidCard astData={item} />
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};
export default AsteroidContainer;
