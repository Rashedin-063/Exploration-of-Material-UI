import { Stack } from "@mui/material"
import ControlledRadioButtonsGroup from "./ControlledRadioButtons"
import RadioButtonsGroup from "./RadioButtons"
import FormControlLabelPlacement from "./FormControlLabelPlacement"
import ErrorRadios from "./ErrorRadios"

const RadioButtonsContainer = () => {
  return (
    <Stack spacing={4}>
      <RadioButtonsGroup />
      <ControlledRadioButtonsGroup />
      <FormControlLabelPlacement />
      <ErrorRadios/>
    </Stack>
  )
}
export default RadioButtonsContainer