import React, { useEffect } from "react";
import "./solarSystem.scss";
import { useState, useRef, useContext } from "react";
import { PlanetsContext } from "../../context/context";

function SolarSystem() {
  const { clickedPlanets } = useContext(PlanetsContext);
  // console.log(clickedPlanets);
  //const [value, setValue] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  // forces solar system to re-render when clickecPlanets changes
  // useEffect(() => {
  //   // console.log('re-rendered solar system');
  //   return () => setValue((value) => value + 1);
  // }, [clickedPlanets]);

  //handles mouse down and up for moving the universe so the
  //user can see the entire universe within the div
  const handleMouseDown = (e) => {
    setDragging(true);
    const container = containerRef.current;
    const offsetX = container.offsetLeft - e.clientX;
    const offsetY = container.offsetTop - e.clientY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    function handleMouseMove(e) {
      setPosition({
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
      });
    }

    function handleMouseUp() {
      setDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  };

  //handle move from mobile move
  //doesn"t work
  const handleTouchMove = (e) => {
    e.preventDefault();
    setDragging(true);
    const container = containerRef.current;
    //here is the new code
    //const touch = e.touches[0];
    const offsetX = container.offsetLeft - e.changedTouches[0].clientX;
    const offsetY = container.offsetTop - e.changedTouches[0].clientY;

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    function handleTouchMove(e) {
      setPosition({
        x: e.changedTouches[0].clientX + offsetX,
        y: e.changedTouches[0].clientY + offsetY,
      });
    }

    function handleTouchEnd() {
      setDragging(false);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  };

  return (
    <div ref={containerRef} className="universe" id="uni">
      <div
        className="solarSystem"
        style={{
          left: position.x + "px",
          top: position.y + "px",
          cursor: "move",
        }}
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
      >
        <div className="sun"></div>

        {clickedPlanets.Mercury === true ? (
          <>
            <div className="orbit orbit__mecury">
              <div className="orbit__inner">
                <div className="planet-me--label">Mercury</div>
                <div className="planet-me"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__mecury">
            <div className="orbit__inner">
              <div className="planet-me"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Venus === true ? (
          <>
            <div className=" orbit orbit__venus">
              <div className="orbit__inner">
                <div className="planet-ve--label">Venus</div>
                <div className="planet-ve"></div>
              </div>
            </div>
          </>
        ) : (
          <div className=" orbit orbit__venus">
            <div className="orbit__inner">
              <div className="planet-ve"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Earth === true ? (
          <>
            <div className="orbit orbit__earth">
              <div className="orbit__inner">
                <div className="planet-ea--label">Earth</div>
                <div className="planet-ea">
                  <div className="planet-ea--l1"></div>
                  <div className="planet-ea--l2"></div>
                  <div className="planet-ea--l3"></div>
                  <div className="planet-ea--l4"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__earth">
            <div className="orbit__inner">
              <div className="planet-ea">
                <div className="planet-ea--l1"></div>
                <div className="planet-ea--l2"></div>
                <div className="planet-ea--l3"></div>
                <div className="planet-ea--l4"></div>
              </div>
            </div>
          </div>
        )}

        {clickedPlanets.Mars === true ? (
          <>
            <div className="orbit orbit__mars">
              <div className="orbit__innerQuarter">
                <div className="planet-ma--label">Mars</div>
                <div className="planet-ma"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__mars">
            <div className="orbit__innerQuarter">
              <div className="planet-ma"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Jupiter === true ? (
          <>
            <div className="orbit orbit__jupiter">
              <div className="orbit__innerMid">
                <div className="planet-ju--label">Jupiter</div>

                <div className="planet-ju">
                  <div className="planet-ju--l1"></div>
                  <div className="planet-ju--l2"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__jupiter">
            <div className="orbit__innerMid">
              <div className="planet-ju">
                <div className="planet-ju--l1"></div>
                <div className="planet-ju--l2"></div>
              </div>
            </div>
          </div>
        )}

        {clickedPlanets.Saturn === true ? (
          <>
            <div className="orbit orbit__saturn">
              <div className="orbit__innerMid">
                <div className="planet-sa--label">Saturn</div>
                <div className="planet-sa"></div>
                <div className="planet-sa--l1"></div>
                <div className="planet-sa--l2"></div>
                <div className="planet-sa--l3"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__saturn">
            <div className="orbit__innerMid">
              <div className="planet-sa"></div>
              <div className="planet-sa--l1"></div>
              <div className="planet-sa--l2"></div>
              <div className="planet-sa--l3"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Uranus === true ? (
          <>
            <div className="orbit orbit__uranus">
              <div className="orbit__innerQuarter">
                <div className="planet-ur--label">Uranus</div>
                <div className="planet-ur"></div>
                <div className="planet-ur--l1"></div>
                <div className="planet-ur--l2"></div>
                <div className="planet-ur--l3"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__uranus">
            <div className="orbit__innerQuarter">
              <div className="planet-ur"></div>
              <div className="planet-ur--l1"></div>
              <div className="planet-ur--l2"></div>
              <div className="planet-ur--l3"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Neptune === true ? (
          <>
            <div className="orbit orbit__neptune">
              <div className="orbit__innerQuarter">
                <div className="planet-ne--label">Neptune</div>
                <div className="planet-ne"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__neptune">
            <div className="orbit__innerQuarter">
              <div className="planet-ne"></div>
            </div>
          </div>
        )}

        {clickedPlanets.Pluto === true ? (
          <>
            <div className="orbit orbit__pluto">
              <div className="orbit__innerPluto">
                <div className="planet-pl--label">Pluto</div>
                <div className="planet-pl"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="orbit orbit__pluto">
            <div className="orbit__innerPluto">
              <div className="planet-pl"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolarSystem;
