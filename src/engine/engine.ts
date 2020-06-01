import { g } from './data';
import { Circle, Line } from './object';

export const gravity = (circle: Circle) => {
  circle.a.y += g;
}

export const tension = (line: Line, circle: Circle) => {
  if (line.T >= circle.m * g * ((circle.p.y - line.p.y) / line.length) || 1) {
    // const dl = line.length - Math.sqrt(Math.pow(line.p.x - circle.p.x, 2) + Math.pow(line.p.y - circle.p.y, 2));
    // circle.a.x += -line.T * dl * ((line.p.x - circle.p.x) / (line.length, 1)) / circle.m;
    // circle.a.y += -line.T * dl * ((line.p.y - circle.p.y) / (line.length, 1)) / circle.m;

    circle.a.x += -(g * ((circle.p.y - line.p.y) / line.length)) * ((circle.p.x - line.p.x) / line.length);
    circle.a.y += -(g * ((circle.p.y - line.p.y) / line.length)) * ((circle.p.y - line.p.y) / line.length);
  }
}

export const centripetalForce = (line: Line, circle: Circle) => {
  circle.a.x += -((Math.pow(circle.v.x, 2) + Math.pow(circle.v.y, 2)) / line.length) * ((circle.p.x - line.p.x) / line.length);
  circle.a.y += -((Math.pow(circle.v.x, 2) + Math.pow(circle.v.y, 2)) / line.length) * ((circle.p.y - line.p.y) / line.length);
}