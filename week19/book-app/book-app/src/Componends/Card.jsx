import * as React from "react";
import Box from "@mui/material/Box";

export default function BoxSystemProps({ item }) {
  return (
    <>
      <Box height={300} width={300} p={2} sx={{ border: "2px solid grey" }}>
        <div>
          <h2>{item?.volumeInfo.title}</h2>
        </div>
        <img src={item?.volumeInfo.imageLinks.smallThumbnail}></img>
        {item?.volumeInfo.authors &&
          item?.volumeInfo.authors.map((item) => {
            return <h4>{item}</h4>;
          })}
        <h5>
          {item?.volumeInfo.publishedDate
            ? new Date(item?.volumeInfo.publishedDate).getFullYear()
            : null}
        </h5>
      </Box>
    </>
  );
}
