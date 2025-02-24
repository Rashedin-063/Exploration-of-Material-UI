import { Stack } from "@mui/material"
import BasicTooltip from "./BasicTooltip"
import PositionedTooltips from "./PositionedTooltip"
import TriggersTooltips from "./TrigersTooltip"

const TooltipContainer = () => {
  return (
    <Stack spacing={4}>
      <BasicTooltip />
      <PositionedTooltips />
      <TriggersTooltips/>
    </Stack>
  )
}
export default TooltipContainer