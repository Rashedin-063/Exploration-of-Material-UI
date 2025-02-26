import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel
        filled
        control={<Checkbox defaultChecked />}
        label='Label'
      />
      <FormControlLabel
        labelPlacement='top'
        focused
        required
        control={<Checkbox />}
        label='Required'
      />
      <FormControlLabel labelPlacement='start' disabled control={<Checkbox />} label='Disabled' />
    </FormGroup>
  );
}
