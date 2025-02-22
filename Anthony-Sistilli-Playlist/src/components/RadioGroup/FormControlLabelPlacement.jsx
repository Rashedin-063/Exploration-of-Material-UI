import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPlacement() {
  return (
    <FormControl>
      <FormLabel id='demo-form-control-label-placement'>
        Label placement
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby='demo-form-control-label-placement'
        name='position'
        defaultValue='top'
      >
        <FormControlLabel
          value='bottom'
          control={<Radio />}
          label='Bottom'
          labelPlacement='bottom'
        />
        <FormControlLabel value='end' control={<Radio />} label='End' />
        <FormControlLabel value='start' control={<Radio />} label='Start' labelPlacement='start' />
        <FormControlLabel value='top' control={<Radio />} label='top' labelPlacement='top' />
      </RadioGroup>
    </FormControl>
  );
}
