import React from "react";
import "./solarSystem.scss";
import { useState, useRef } from "react";

function SolarSystem() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

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
  //doesn't work
  const handleTouchMove = (e) => {
    setDragging(true);
    const container = containerRef.current;
    const offsetX = container.offsetLeft - e.clientX;
    const offsetY = container.offsetTop - e.clientY;

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    function handleTouchMove(e) {
      setPosition({
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
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

        <div className="orbit orbit__mecury">
          <div className="orbit__inner">
            <div className="planet__mecury"></div>
          </div>
        </div>

        <div className="orbit orbit__venus">
          <div className="orbit__inner">
            <div className="planet__venus"></div>
          </div>
        </div>

        <div className="orbit orbit__earth">
          <div className="orbit__inner">
            <div className="planet__earth"></div>
          </div>
        </div>

        <div className="orbit orbit__mars">
          <div className="orbit__innerQuarter">
            <div className="planet__mars"></div>
          </div>
        </div>

        <div className="orbit orbit__jupiter">
          <div className="orbit__innerMid">
            <div className="planet__jupiter"></div>
          </div>
        </div>

        <div className="orbit orbit__saturn">
          <div className="orbit__innerMid">
            <div className="planet__saturn"></div>
          </div>
        </div>

        <div className="orbit orbit__uranus">
          <div className="orbit__innerQuarter">
            <div className="planet__uranus"></div>
          </div>
        </div>

        <div className="orbit orbit__neptune">
          <div className="orbit__innerQuarter">
            <div className="planet__neptune"></div>
          </div>
        </div>

        <div className="orbit orbit__pluto">
          <div className="orbit__innerPluto">
            <div className="planet__pluto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
