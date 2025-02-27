import { Stack } from "@mui/material"
import BasicTextFields from "./BasicTextfield"
import FormPropsTextFields from "./FormPropsTextField"
import InputAdornments from "./InputAdornment"
// import InputWithIcon from "./InputWithIcon"

const TextFieldContainer = () => {
  return (
    <Stack spacing={4}>
      <BasicTextFields />
      <FormPropsTextFields />
      {/* <InputWithIcon/> */}
      <InputAdornments/>
    </Stack>
  )
}
export default TextFieldContainer