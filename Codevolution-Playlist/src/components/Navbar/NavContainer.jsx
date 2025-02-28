import { Stack } from "@mui/material"
import ButtonAppBar from "./ButtonApbar"
import MenuAppBar from "./MenuAppBar"
import ResponsiveAppBar from "./ResponsiveAppBar"
import TemporaryDrawer from "./DrawerList"
import AnchorTemporaryDrawer from "./AnchorTempDrawer"
// import MiniDrawer from "./MiniDrawer"
import ResponsiveDrawer from "./ResponsiveDrawer"

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

      {/* <MiniDrawer/> */}
      <ResponsiveDrawer/>
    </Stack>
  );
}
export default NavContainer