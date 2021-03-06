import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { AboutCardProps } from '../../../utils/types';

const cardStyle = {
  width: 350,
  margin: '10px 0 10px 0',
  padding: '10px',
};

const AboutCard = ({ info }: AboutCardProps): JSX.Element => {
  return (
    <Card sx={cardStyle}>
      <Box display="flex" justifyContent="center">
        <Image src={info.image} alt={info.title} width={150} height={150} />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {info.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {info.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
