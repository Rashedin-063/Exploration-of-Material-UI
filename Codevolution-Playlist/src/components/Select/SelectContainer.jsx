import { Stack } from "@mui/material"
import BasicSelect from "./BasicSelect"
import SelectLabels from "./SelectLabels"
import MultipleSelect from "./MultipleSelect"
import MultipleSelectChip from "./MultipleSelectorChip"

const SelectContainer = () => {
  return (
    <Stack spacing={4}>
      <BasicSelect />
      <SelectLabels />
      <MultipleSelect />
      <MultipleSelectChip/>
    </Stack>
  )
}
export default SelectContainer