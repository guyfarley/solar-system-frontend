import * as React from 'react';
import { useRef } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './carousel.scss';

const Carousel = ({ data }) => {

  const listRef = useRef(null);

  const scrollLeft = () => {

    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -370,
        behavior: "smooth"
      });
    }
  }

  const scrollRight = () => {

    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 370,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="slide-container">
      <ChevronLeftIcon fontSize="large" onClick={scrollLeft}></ChevronLeftIcon>

      <div className="items-container" ref={listRef}>

        {data.map((planet) => {
          return (
            <div className="single-item-container">

              <Card sx={{ width: 330 }}>
                <CardMedia
                  component="img"
                  alt={planet}
                  height="330"
                  image="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {planet}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </div>
          )
        })}
      </div>

      <ChevronRightIcon fontSize="large" onClick={scrollRight}></ChevronRightIcon>
    </div>
  )
}

export default Carousel;