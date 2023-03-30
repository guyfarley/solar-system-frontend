const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <div className="footer__nav">
          <a href="#explore-planets">
            <h4>Planets</h4>
          </a>
          <a href="#fun-facts">
            <h4>Fun Facts</h4>
          </a>
          <a href="#resources">
            <h4>Resources</h4>
          </a>
        </div>
        <div className="footer__team"></div>
        <div className="footer__copyright"></div>
      </div>
      <p>footer</p>
      {/* nav bar: planets, resources, fun facts, team */}
    </section>
  );
};

export default Footer;
