import * as React from "react";
import Box from "@mui/material/Box";
import { WeatherComponent } from "../utils/weatherName.jsx";

export default function BoxSystemPropsWea({ item }) {
  return (
    <>
      <Box height={250} width={300} p={2} sx={{ border: "2px solid grey" }}>
        <h1>{WeatherComponent(item?.Date)}</h1>
        <h3>
          {item?.Temperature.Maximum.Value}
          {item?.Temperature.Maximum.Unit}
        </h3>
        <h3>
          {item?.Temperature.Minimum.Value} {item?.Temperature.Minimum.Unit}
        </h3>
      </Box>
    </>
  );
}
