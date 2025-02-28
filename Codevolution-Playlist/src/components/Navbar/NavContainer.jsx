import { Stack } from "@mui/material"
import ButtonAppBar from "./ButtonApbar"
import MenuAppBar from "./MenuAppBar"
import ResponsiveAppBar from "./ResponsiveAppBar"
import TemporaryDrawer from "./DrawerList"
import AnchorTemporaryDrawer from "./AnchorTempDrawer"

const NavContainer = () => {
  return (
    <Stack spacing={4}>
      <ButtonAppBar />
      <MenuAppBar />
      <ResponsiveAppBar />

      <Stack direction='row' spacing={4}>
        <TemporaryDrawer />
        <AnchorTemporaryDrawer/>
      </Stack>
    </Stack>
  );
}
export default NavContainer