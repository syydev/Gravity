import React, { useEffect, useRef, useState } from 'react';
import drawCircle from './circle';
import drawLine from './line';
import { Circle, Line } from '../engine/object';
import { gravity, tension, centripetalForce } from '../engine/engine';

interface CanvasProps {
  width: number;
  height: number;
}

const circles = Array<Circle>();
const lines = Array<Line>();

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(true);
  const [counter, setCounter] = useState(Number);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      circles.push(new Circle(10, 100*i + 500, 500, 50));
    }
    circles[0].p.x = 100;
    circles[0].p.y = 100;
    circles.forEach((circle, i) => lines.push(new Line(0, 100*i + 500, 100, circle.p.x, circle.p.y, 98)));
  }, []);

useEffect(() => {
    if (!canvasRef.current) { return; }
    canvasRef.current.getContext('2d')?.clearRect(0, 0, width, height);
    canvasRef.current.addEventListener('mousedown', () => { setActive(!active) });

    for (let i in circles) {
      circles[i].init();
      gravity(circles[i]);
      tension(lines[i], circles[i]);
      centripetalForce(lines[i], circles[i]);
      circles[i].update();
      drawCircle(canvasRef.current, circles[i].p.x, circles[i].p.y, circles[i].r);
      drawLine(canvasRef.current, lines[i].p.x, lines[i].p.y, circles[i].p.x, circles[i].p.y);
    }

    if (active) { setCounter(counter + 1); }
  }, [active, counter]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;