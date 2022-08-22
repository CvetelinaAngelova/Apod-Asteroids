import React, { useState, useEffect } from "react";
import DateSelect from "../../components/DateSelect/index";
import Video from "../../components/Video/index";
import axios from "axios";
import { format } from "date-fns";
import "./style.css";

const printDate = (date) => date.split("-").reverse().join("-");

const PATH = "https://api.nasa.gov/planetary/apod?api_key=";
const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const ApodContainer = () => {
  // Apod data to be returned Nasa
  const [apodData, setapodData] = useState({
    copyright: "",
    date: "",
    explanation: "",
    title: "",
    mediaUrl: "",
    mediaType: "",
  });
  // Set the default date to current date
  const [startDate, setStartDate] = useState(new Date());
  const [dropDown, setDropDown] = useState(false);
  const searchDate = format(startDate, "yyyy-MM-dd");

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get(
          PATH + REACT_APP_API_URL + `&date=${searchDate}`
        );

        const { copyright, date, explanation, title, url, media_type } =
          response.data;

        setapodData({
          copyright,
          date,
          explanation,
          title,
          mediaUrl: url,
          mediaType: media_type,
        });
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
    fetchApodData();
  }, [searchDate]);

  const { copyright, date, explanation, title, mediaUrl, mediaType } = apodData;

  const handleClick = () => {
    setDropDown(!dropDown);
  };
  const arrowPosition = dropDown ? "open" : "closed";
  const descriptionActive = dropDown ? "open" : "";
  const isVideo = (mediaType === "video") ? "video" :"image" ;

  return (
    <main className={`astronomy ${isVideo}`}>
      <div className="slide-container">
        {mediaType === "video" ? (
          <Video videoSrcURL={mediaUrl} videoTitle={title} />
        ) : (
          <img
            className="astronomy__image"
            src={mediaUrl}
            alt={title}
          />
        )}

        <div className="wrapper">
          <div className="article">
            <h1>
              <a href="#">{title}</a>
              <span
                className={`arrow ${arrowPosition}`}
                onClick={handleClick}
              ></span>
            </h1>
            <div className={`description ${descriptionActive}`}>
              {explanation}
            </div>
          </div>
        </div>
      </div>
      <section className="dashboard">
        <div className="slide_container">
          <DateSelect
            startDate={startDate}
            selectDate={(newDate) => setStartDate(newDate)}
          />

          <h3 className="astronomy__copyright">
            <span>{copyright}</span>
            {` `}
            <span>{printDate(date)}</span>
          </h3>
        </div>
      </section>
    </main>
  );
}

export default ApodContainer;