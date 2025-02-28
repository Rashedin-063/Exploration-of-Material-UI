import { Stack } from "@mui/material"
import ButtonAppBar from "./ButtonApbar"
import MenuAppBar from "./MenuAppBar"
import ResponsiveAppBar from "./ResponsiveAppBar"

const NavContainer = () => {
  return (
    <Stack spacing={4}>
      <ButtonAppBar />
      <MenuAppBar />
      <ResponsiveAppBar/>
 </Stack>
  )
}
export default NavContainer