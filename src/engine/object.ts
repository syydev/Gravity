import { dt } from './data';

class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Object {
  a: Vector;
  m: number;
  p: Point;
  v: Vector;

  constructor(m: number, x: number, y: number) {
    this.a = new Vector(0, 0);
    this.v = new Vector(0, 0);
    this.p = new Point(x, y);
    this.m = m;
  }
}

export class Circle extends Object {
  r: number;

  constructor(m: number, x: number, y: number, r: number) {
    super(m, x, y);
    this.r = r;
  }

  public init() {
    this.a.x = 0;
    this.a.y = 0;
  }

  public update() {
    this.v.x += this.a.x * dt;
    this.v.y += this.a.y * dt;
    this.p.x += this.v.x;
    this.p.y += this.v.y;
  }
}

export class Line extends Object {
  T: number;
  length: number;

  constructor(m: number, x: number, y: number, xc: number, yc: number, T: number) {
    super(m, x, y);
    this.T = T;
    this.length = Math.sqrt(Math.pow(x - xc, 2) + Math.pow(y - yc, 2));
  }
}