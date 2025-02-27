import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const MuiToggleButton = () => {

  const [formats, setFormats] = useState([])

  const handleFormatChange = (_event, updatedFormats) => {
    setFormats(updatedFormats);
    console.log("Updated formats: ", updatedFormats);
  }

  return (
    <Stack direction='row'>
      <ToggleButtonGroup aria-label='text-formatting' value={formats} onChange={handleFormatChange} exclusive>
        <ToggleButton value='bold' aria-label='bold'>
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value='italic' aria-label='italic'>
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value='underlined' aria-label='underlined'>
          <FormatUnderlinedIcon />
        </ToggleButton>
        <ToggleButton value='color' aria-label='color' disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
export default MuiToggleButton