import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.scss";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <div className="footer__nav--title">
            <Link smooth to="/#explore-planets">
              <h4>Planets</h4>
            </Link>
            <Link smooth to="/#fun-facts">
              <h4>Fun Facts</h4>
            </Link>
            <Link smooth to="/#resources">
              <h4>Resources</h4>
            </Link>
          </div>
          <div className="footer__nav--name">
            <RocketLaunchIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                fill: "white",
              }}
            />
            <h4>TEAM PLUTO</h4>
          </div>
        </div>
        <div className="footer__team">
          <div className="footer__team--mem"></div>
          <div className="footer__team--mem"></div>
          <div className="footer__team--mem"></div>
        </div>
      </div>
      <div className="footer__copyright">©️ Team Pluto 2023</div>

      {/* nav bar: planets, resources, fun facts, team */}
    </section>
  );
};

export default Footer;
