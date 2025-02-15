import { Stack } from "@mui/material"
import ImageAvatars from "./ImageAvatar"
import VariantAvatars from "./VariantAvatar"
import GroupAvatars from "./GroupAvatars"

const AvatarContainer = () => {
  return (
    <Stack spacing={2}>
      <ImageAvatars />
      <VariantAvatars />
      <GroupAvatars/>
    </Stack>
  )
}
export default AvatarContainer