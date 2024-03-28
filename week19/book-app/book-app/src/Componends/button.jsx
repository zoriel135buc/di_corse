import * as React from "react";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { AppContext } from "../App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function BasicButtons() {
  const { setSearchTerm, input } = useContext(AppContext);
  return (
    <>
      <Stack direction="row" color="primary" justifyContent="flex">
        <Button
          onClick={() => setSearchTerm(input)}
          variant="contained"
          sx={{
            margin: "3px",
            bgcolor: "black",
            width: "100%",
            height: "20px",
          }}
        >
          search
        </Button>
      </Stack>
    </>
  );
}
