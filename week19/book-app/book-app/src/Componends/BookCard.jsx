import BasicCard from "./Card";
import BoxSystemProps from "../Componends/Card.jsx";
import Grid from "@mui/material/Grid";
const BookCard = (props) => {
  const { item } = props;
  return (
    <>
      <Grid
        gap={4}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <BoxSystemProps item={item}></BoxSystemProps>
      </Grid>
    </>
  );
};

export default BookCard;
