import { Box, Container, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Fingerprint from '@mui/icons-material/Fingerprint';
import LoadingButtonsTransition from './LoadingButton';
import BasicButtonGroup from './ButtonGroup';
import SplitButton from './SplitButton';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const ButtonContainer = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <BasicButtonGroup />
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant='outlined'>Outlined Button</Button>
        <Button variant='contained' size='small'>
          Contained Small Button
        </Button>
        <Button variant='outlined' size='large'>
          Small
        </Button>
      </Box>
      <Box marginY={2}>
        <Button color='success' size='small' variant='contained'>
          Small
        </Button>
        <Button
          color='secondary'
          size='medium'
          variant='contained'
          href='/home'
        >
          Medium
        </Button>
        <Button color='error' size='large' variant='contained' href='/'>
          Large
        </Button>
      </Box>
      <Box my={4}>
        <IconButton disabled aria-label='delete'>
          <DeleteIcon />
        </IconButton>
        <Button href='/delete' variant='outlined' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant='contained' endIcon={<SendIcon />}>
          Send
        </Button>
      </Box>
      <Box>
        <Button
          component='label'
          role={undefined}
          variant='contained'
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type='file'
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </Box>
      <div style={{ marginTop: '8px', marginBottom: '1rem' }}>
        <Button disableElevation variant='contained' color='primary'>
          Small
        </Button>
        <IconButton aria-label='fingerprint' color='secondary'>
          <Fingerprint />
        </IconButton>
        <IconButton aria-label='fingerprint' color='success'>
          <Fingerprint />
        </IconButton>
      </div>
      <LoadingButtonsTransition />
      <div style={{marginTop: '3rem', marginBottom: '5rem'}}>
        <SplitButton />
      </div>
    </Container>
  );
};
export default ButtonContainer;
