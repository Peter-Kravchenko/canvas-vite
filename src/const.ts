export const STROKE_WIDTH = 2;

export const rectangle = {
  x: 50,
  y: 50,
  width: 100,
  height: 50,
  fill: 'red',
} as const;

export const circle = {
  x: 150,
  y: 150,
  radius: 50,
  fill: 'green',
} as const;

export const polygon = {
  x: 250,
  y: 150,
  sides: 3,
  radius: 50,
  fill: 'blue',
} as const;
