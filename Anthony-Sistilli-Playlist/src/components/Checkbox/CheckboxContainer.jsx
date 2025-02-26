import { Stack } from "@mui/material";
import Checkboxes from "./Checkboxes";
import CheckboxLabels from "./CheckboxLabels";
import IconCheckboxes from "./IconCheckboxes";
import ControlledCheckbox from "./ControledCheckbox";
import SizeCheckboxes from "./SizedCheckbox";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const CheckboxContainer = () => {
  return <Stack spacing={2}>
    <Checkboxes />
    <CheckboxLabels />
    <IconCheckboxes />
    <ControlledCheckbox />
    <SizeCheckboxes />
    <IndeterminateCheckbox/>
  </Stack>;
}
export default CheckboxContainer