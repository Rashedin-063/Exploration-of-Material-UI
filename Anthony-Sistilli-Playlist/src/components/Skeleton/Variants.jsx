import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant='text' sx={{ fontSize: '2rem' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant='circular' width={60} height={60} />
      <Skeleton variant='rectangular' width={280} height={90} />
      <Skeleton variant='rounded' width={280} height={90} />
    </Stack>
  );
}
