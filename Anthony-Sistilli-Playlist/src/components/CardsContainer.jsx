import { Box, Container } from "@mui/material"
import BasicCard from "./Cards/BasicCard"
import OutlinedCard from "./Cards/OutlinedCard"
import RecipeReviewCard from "./Cards/ComplexCard";

const CardsContainer = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <BasicCard />
        <OutlinedCard />
        <RecipeReviewCard/>
      </Box>
    </Container>
  );
}
export default CardsContainer