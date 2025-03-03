import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function SizeCheckboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked size='small' />
      <Checkbox {...label} defaultChecked />
      <Checkbox
        {...label}
        defaultChecked
        color='success'
        // sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        sx={{'& .MuiSvgIcon-root': {fontSize: 28 } }}
      />
    </div>
  );
}
