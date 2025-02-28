import { Stack } from "@mui/material"
import StandardImageList from "./StandardImageList"
import WovenImageList from "./WovenImageList"
import MasonryImageList from "./MasonryImageList"
import CustomImageList from "./CustomImageList"
import TitlebarImageList from "./TitlebarImageList"

const ImageListContainer = () => {
  return (
    <Stack spacing={4}>
      <TitlebarImageList/>
      <CustomImageList/>
      <StandardImageList />
      <WovenImageList />
      <MasonryImageList/>
   </Stack>
  )
}
export default ImageListContainer