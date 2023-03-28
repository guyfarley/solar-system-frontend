import React from "react";
import "./funFacts.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import planet from "../../assets/images/david-menidrey.jpg";

const FunFacts = () => {
  return (
    <section className="funFacts">
      <div className="funFacts__header">
        <h1 className="funFacts__title">Fun Facts</h1>
        <h3 className="funFacts__subtitle">About the Solar System</h3>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={planet}
            alt="david menidrey planet photo unsplash"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What is a Planet?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>1. It must orbit a star.</p>
              <p>
                2. It must be big enough to have enough gravity to force it into
                a spherical shape.
              </p>
              <p>
                3. It must be big enough that its gravity cleared away any other
                objects of a similar size near its orbit around the Sun.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://solarsystem.nasa.gov/planets/in-depth/">
            <Button size="small" color="primary">
              Resource
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={planet}
            alt="david menidrey planet photo unsplash"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What is a Planet?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>1. It must orbit a star.</p>
              <p>
                2. It must be big enough to have enough gravity to force it into
                a spherical shape.
              </p>
              <p>
                3. It must be big enough that its gravity cleared away any other
                objects of a similar size near its orbit around the Sun.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://solarsystem.nasa.gov/planets/in-depth/">
            <Button size="small" color="primary">
              Resource
            </Button>
          </a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={planet}
            alt="david menidrey planet photo unsplash"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What is a Planet?
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>1. It must orbit a star.</p>
              <p>
                2. It must be big enough to have enough gravity to force it into
                a spherical shape.
              </p>
              <p>
                3. It must be big enough that its gravity cleared away any other
                objects of a similar size near its orbit around the Sun.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://solarsystem.nasa.gov/planets/in-depth/">
            <Button size="small" color="primary">
              Resource
            </Button>
          </a>
        </CardActions>
      </Card>
    </section>
  );
};

export default FunFacts;
