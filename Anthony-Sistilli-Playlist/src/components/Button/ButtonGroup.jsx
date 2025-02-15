import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <div style={{display: 'flex', gap: '3rem'}}>
      <ButtonGroup size='small' variant='contained' aria-label='Basic button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup  color='secondary' variant='text' aria-label='Basic button group'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup size='large' variant='outlined' aria-label='Basic button group'>
        <Button loading loadingPosition='start'>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
   
    </div>
  );
}
