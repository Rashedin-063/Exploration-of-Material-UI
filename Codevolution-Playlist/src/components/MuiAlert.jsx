import { Alert, AlertTitle, Button, Stack } from '@mui/material';

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity='error'>This is an error alert</Alert>
      <Alert severity='success'>This is an success alert</Alert>
      <Alert severity='info'>This is an info alert</Alert>
      <Alert severity='warning'>This is an warning alert</Alert>

      <Alert variant='outlined' severity='error' onClose={() => alert('close alert')}>
        This is an error alert
      </Alert>
      <Alert variant='outlined' severity='success'
        action={
          <Button color='inherit'>
            UNDO
        </Button>
      }
      >
        This is an success alert
      </Alert>
      <Alert variant='outlined' severity='info'>
        This is an info alert
      </Alert>
      <Alert variant='outlined' severity='warning'>
        This is an warning alert
      </Alert>

      <Alert variant='filled' severity='error'>
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant='filled' severity='success'>
        <AlertTitle>Success</AlertTitle>
        This is an success alert
      </Alert>
      <Alert variant='filled' severity='info'>
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant='filled'
        severity='warning'
      >
        <AlertTitle>Warning</AlertTitle>
        This is an warning alert
      </Alert>
    </Stack>
  );
};
export default MuiAlert;
