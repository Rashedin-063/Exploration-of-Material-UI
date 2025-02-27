import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component='form'
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-basic'
        label='Outlined'
        variant='outlined'
        size='small'
      />
      <TextField
        id='filled-basic'
        label='Filled'
        variant='filled'
        color='secondary'
        disabled
      />
      <TextField
        id='standard-basic'
        label='Standard'
        variant='standard'
        color='success'
        required
        helperText='do not share your password'
      />
      <TextField
        id='standard-basic'
        label='Password'
        variant='standard'
        color='success'
        type='password'
        required
        helperText='do not share your password'
      />
      <TextField
        id='outlined-read-only-input'
        label='Read Only'
        defaultValue='Hello World'
        slotProps={{
          input: {
            readOnly: true,
          },
        }}
      />
    </Box>
  );
}
