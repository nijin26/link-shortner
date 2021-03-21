import React, { useRef } from "react";

import QRCode from "react-qr-code";

const QRCodeGen = ({ target }) => {
  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div>
      <QRCode
        id="QRCode"
        value={target}
        size={180}
        bgColor={"#ffffff"}
        fgColor={"#1f1e1e"}
        level={"L"}
      />
      <input type="button" value="Download QR" onClick={download} />
    </div>
  );
};

export default QRCodeGen;

// const downloadQR = () => {
//   const canvas = document.getElementById("123456");
//   let pngUrl = new Image();
//   pngUrl.crossOrigin = "anonymous";
//   pngUrl.src = "http://localhost:3000/image/png";
//   let downloadLink = document.createElement("a");
//   downloadLink.href = pngUrl;
//   downloadLink.download = "qrcode.png";
//   document.body.appendChild(downloadLink);
//   downloadLink.click();
//   document.body.removeChild(downloadLink);
// };
