import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/base/FormControl";
import { AppContext } from "../App";
import BasicButtons from "./button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const Book = () => {
  const { setSortUse, input, setInput } = useContext(AppContext);
  const commonWidth = "200px";

  return (
    <div>
      <Stack direction="row" justifyContent={"center"}>
        <Box
          sx={{
            width: commonWidth,
          }}
        >
          {
            <input
              type="text"
              style={{ width: "100%" }}
              placeholder="Enter search term"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          }
        </Box>
        <Box>
          <BasicButtons></BasicButtons>
        </Box>
        <Box sx={{ width: commonWidth }}>
          <select
            style={{
              width: `100%`,
              backgroundColor: "black",
              color: "white",
            }}
            onChange={(e) => setSortUse(e.target.value)}
          >
            <option value="">sort</option>
            <option value="new"> newest</option>
            <option value="old"> oldest</option>
          </select>
        </Box>
      </Stack>
    </div>
  );
};

export default Book;
