import { useState, useEffect, useContext } from "react";
import jsonCities from "../assets/cities.json";
import jsonDaily from "../assets/5Daily.json";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import BoxSystemPropsWea from "./BoxWea";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Weather = (props) => {
  const [cities, setCities] = useState([]);
  const [WehtherName, setWehtherName] = useState();
  const { nameCity, setCityName, setFavorite, favorite } =
    useContext(AppContext);
  const [dailyForecasts, setDailyForecasts] = useState([]);

  const city = async () => {
    if (!nameCity) return;
    // const res = await fetch(
    //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=1JqqEZNWCnGJBmfFW0zudh0aHUivCdSJ&q=${nameCity}`
    // );
    // const data = await res.json();
    console.log(jsonCities);
    setCities(jsonCities);
  };
  // const forcast = (key) => {
  //   setKeyCity(key);
  // };
  const daily = async (key, LocalizedName) => {
    setCityName(LocalizedName);
    favorite.push({ key, city: LocalizedName });
    setFavorite([...favorite]);

    // const daily = await fetch(
    //   `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=1JqqEZNWCnGJBmfFW0zudh0aHUivCdSJ&metric=true`
    // );
    // const dataDaily = await daily.json();
    // setDailyForecasts(dataDaily.DailyForecasts);
    setDailyForecasts(jsonDaily.DailyForecasts);
  };

  useEffect(() => {
    city();
  }, [nameCity]);

  return (
    <div>
      <h1>search city</h1>
      {/* <Autocomplete
        getOptionLabel={(option) => option.LocalizedName}
        options={jsonCities.sort(
          (a, b) => -b.LocalizedName.localeCompare(a.LocalizedName)
        )}
        sx={{ width: 300 }}
        renderOption={(props, option) => (
          <li {...props}>{option.LocalizedName}</li>
        )}
        onChange={(event, newValue) => {
          daily(newValue.Key, newValue.LocalizedName);
        }}
        renderInput={(params) => <TextField {...params} label="Cities" />}
      /> */}

      {/* {dailyForecasts.map((item, index) => {
        return (
          <div key={index}>
            <BoxSystemPropsWea item={item} />
          </div>
        );
      })} */}

      <Link to={`/Favorite`}>Favorite</Link>
    </div>
  );
};

export default Weather;
