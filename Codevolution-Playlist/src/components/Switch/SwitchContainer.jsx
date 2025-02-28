import { Stack } from "@mui/material"
import BasicSwitches from "./BasicSwitch"
import SwitchesGroup from "./SwitchesGroup"

const SwitchContainer = () => {
  return (
    <Stack spacing={2}>
      <BasicSwitches />
      <SwitchesGroup/>
    </Stack>
  )
}
export default SwitchContainer