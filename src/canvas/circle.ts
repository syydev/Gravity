const drawCircle = (canvas: HTMLCanvasElement, x: number, y: number, r: number) => {
  const context = canvas.getContext('2d');
  if (context) {
    context.fillStyle = 'black';

    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
}

export default drawCircle;