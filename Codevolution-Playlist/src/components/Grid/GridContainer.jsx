import { Stack } from "@mui/material"
import BasicGrid from "./BasicGrid"
import FullWidthGrid from "./FullWidthGrid"
import ResponsiveGrid from "./ResponsiveGrid"

const GridContainer = () => {
  return (
    <Stack spacing={10} bgcolor='secondary.dark'>
      <BasicGrid />
      <FullWidthGrid />
      <ResponsiveGrid/>
    </Stack>
  )
}
export default GridContainer