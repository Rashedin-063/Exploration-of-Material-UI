import { Stack } from "@mui/material"
import Links from "./Links"
import UnderlineLink from "./UnderlineLinks"

const LinkContainer = () => {
  return (
    <Stack spacing={2}>
      <Links />
      <UnderlineLink/>
    </Stack>
  )
}
export default LinkContainer