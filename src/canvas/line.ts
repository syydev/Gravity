const drawLine = (canvas: HTMLCanvasElement, x1: number, y1: number, x2: number, y2: number) => {
  const context = canvas.getContext('2d');
  if (context) {
    context.strokeStyle = 'blue';
    context.lineJoin = 'round';
    context.lineWidth = 5;

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
  }
}

export default drawLine;