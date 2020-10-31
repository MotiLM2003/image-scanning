const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;

const image1 = new Image();
image1.src = 'image1.jpg';

image1.addEventListener('load', () => {
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

  const scannedData = scannedImage.data;
  for (let i = 0; i < scannedData.length; i += 4) {
    const total = scannedData[i] + scannedData[i + 1] + scannedData[i + 2];
    const avarage = total / 3;
    scannedData[i] = avarage;
    scannedData[i + 1] = avarage;
    scannedData[i + 2] = avarage;
  }

  scannedImage.data = scannedData;
  ctx.putImageData(scannedImage, 0, 0);
  console.log('done');
});
