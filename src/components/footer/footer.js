import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.scss";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import guy from "../../assets/images/guy.png";
import kayle from "../../assets/images/kayle.png";
import luna from "../../assets/images/luna.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <div className="footer__nav--title">
            <Link smooth to="/#explore-planets">
              <h4 className="footer__nav--title--link">Planets</h4>
            </Link>
            <Link smooth to="/#fun-facts">
              <h4 className="footer__nav--title--link">Fun Facts</h4>
            </Link>
            <Link smooth to="/#resources">
              <h4 className="footer__nav--title--link">Resources</h4>
            </Link>
          </div>
          <div className="footer__nav--name">
            <RocketLaunchIcon
              sx={{
                mr: 1,
                fill: "$color-light-1",
              }}
            />
            <h3 className="footer__nav--title--link"> TEAM INTERGALACTIC</h3>
          </div>
        </div>
        <div className="footer__team">
          <Link smooth to="https://github.com/guyfarley" target={"_blank"}>
            <div className="footer__team--mem">
              <img className="footer__team--mem--img" src={guy} alt={"guy"} />
            </div>
          </Link>
          <Link smooth to="https://github.com/revyrob" target={"_blank"}>
            <div className="footer__team--mem">
              <img
                className="footer__team--mem--img"
                src={kayle}
                alt={"kayle"}
              />
            </div>
          </Link>
          <Link smooth to="https://github.com/madxb98" target={"_blank"}>
            <div className="footer__team--mem">
              <img className="footer__team--mem--img" src={luna} alt={"luna"} />
            </div>
          </Link>
        </div>
      </div>
      <div className="footer__copyright">©️ Team Intergalactic 2023</div>
    </section>
  );
};

export default Footer;
