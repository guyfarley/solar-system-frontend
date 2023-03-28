import React from "react";
import "./funFacts.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import planet from "../../assets/images/david-menidrey.jpg";
import charon from "../../assets/images/charon.jpg";
import uranus from "../../assets/images/uranus.jpg";

const FunFacts = () => {
  return (
    <section className="funFacts">
      <div className="funFacts__header">
        <h1 className="funFacts__title">Fun Facts</h1>
        <h3 className="funFacts__subtitle">About the Solar System</h3>
      </div>
      <div className="funFacts__card-wrapper">
        <Card className="funFacts__card" sx={{ maxWidth: 345 }}>
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
                  2. It must be big enough to have enough gravity to force it
                  into a spherical shape.
                </p>
                <p>
                  3. It must be big enough that its gravity cleared away any
                  other objects of a similar size near its orbit around the Sun.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://solarsystem.nasa.gov/planets/in-depth/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="funFacts__btn-bot">Resource</button>
            </a>
          </CardActions>
        </Card>

        <Card className="funFacts__card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={charon}
              alt="NASA's New Horizons capture or Charon"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What is a double planetary system?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Both objects are planets, or planetary-mass objects, that
                  orbit around a common center of mass, rather than one object
                  orbiting around the other. Pluto and it's largest moon,
                  Charon, are the only double planetary system in our solar
                  system. The same surfaces of Charon and Pluto always face each
                  other, a phenomenon called mutual tidal locking.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://solarsystem.nasa.gov/moons/pluto-moons/charon/in-depth/#:~:text=At%20half%20the%20size%20of,phenomenon%20called%20mutual%20tidal%20locking."
              target="_blank"
              rel="noreferrer"
            >
              <button className="funFacts__btn-bot">Resource</button>
            </a>
          </CardActions>
        </Card>

        <Card className="funFacts__card" sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={uranus}
              alt="planet uranus from hubble telescope"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Planet on it's side for 21 Earth years!
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Uranus has an unusual orientation, it is about 90 degrees
                  sideways compared to other planets. This tilt causes the most
                  extreme weather conditions because during half of Uranus' year
                  (21 Earth years) the sun shines directly over the north or
                  south pole of the planet.
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a
              href="https://www.space.com/35695-weirdest-solar-system-facts.html"
              target="_blank"
              rel="noreferrer"
            >
              <button className="funFacts__btn-bot">Resource</button>
            </a>
          </CardActions>
        </Card>
      </div>
    </section>
  );
};

export default FunFacts;
