import { Box, Divider, Stack } from "@mui/material"
import AccordionExpandIcon from "./AccordionExpandIcon"
import AccordionUsage from "./AccordionUsage"
import ControlledAccordions from "./ControlledAccordion";

const AccordionContainer = () => {
  return (
    <Stack spacing={4}>
      <AccordionUsage />
      <Box>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </Box>
      <AccordionExpandIcon />
      <Box>
        <Divider />
        <Divider />
        <Divider />
        <Divider />
        <Divider />
      </Box>
      <ControlledAccordions/>
    </Stack>
  );
}
export default AccordionContainer