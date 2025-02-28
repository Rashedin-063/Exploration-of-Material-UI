import { Stack } from "@mui/material"
import BasicSpeedDial from "./BasicSpeedDial"
import OpenIconSpeedDial from "./OpenIconSpeedDial"

const SpeedDialContainer = () => {
  return (
    <Stack spacing={2} sx={{position: 'relative'}}>
      <BasicSpeedDial />
      <OpenIconSpeedDial/>
  </Stack>
  )
}
export default SpeedDialContainer