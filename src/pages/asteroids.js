import React, { useState, useEffect } from "react";
import AsteroidConteiner from "../containers/AsteroidConteiner/index";
import Footer from "../partials/footer";
import axios from "axios";
import { format } from "date-fns";

// const REACT_APP_API_URL = process.env.REACT_APP_API_URL; //if we use an .env aproach
const REACT_APP_API_URL = "PMoZLSOMRLlk2ccceT77mW0jyfsgUlsznGTLvAQi";

export default function Asteroids() {
  const [data, setData] = useState({});

  const [startDate, setStartDate] = useState(new Date());
  const searchDate = format(startDate, "yyyy-MM-dd");
  // const api_key = "PMoZLSOMRLlk2ccceT77mW0jyfsgUlsznGTLvAQi";
  const path = "https://api.nasa.gov/neo/rest/v1/feed?api_key=";

  useEffect(() => {
    const fetchMediaAst = async () => {
      try {
        const response = await axios.get(
          path + REACT_APP_API_URL + `&start_date=${searchDate}`
        );

        const neoData = response.data.near_earth_objects;

        setData(neoData);
      } catch (error) {
        console.log("error");
      }
    };
    fetchMediaAst();
  }, [searchDate]);

  return (
    <>
      <div className="Asteroids">
        <div className="meteorTable">
          <h3>Closest Asteroids to Earth</h3>
          {Object.keys(data).length == 0 ? null:<AsteroidConteiner data={data} />}
        </div>
      </div>
      {<Footer />}
    </>
  );
}
