import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({data}) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Category :  {data?.categary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Ratting : {data?.ratting}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price : {data?.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          description :  {data?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}