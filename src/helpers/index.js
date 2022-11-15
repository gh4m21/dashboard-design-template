// import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

/*
export async function modifyPdf() {
  const existingPdf = fetch('questions.pdf').then((response) => {
    console.log('response', response);
    return response;
  });

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdf);

  // Embed the Helvetica font
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  // eslint-disable-next-line no-unused-vars
  const { width, height } = firstPage.getSize();

  // Draw a string of text diagonally across the first page
  firstPage.drawText('This text was added with JavaScript!', {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save('original-test');

  return pdfBytes;
}
*/
export async function fetchAsset(asset) {
  fetch(asset)
    .then((res) => res.arrayBuffer())
    .then((res) => new Uint8Array(res));

  // eslint-disable-next-line no-unused-vars
  const renderInIframe = (pdfBytes) => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    console.log(blobUrl);
    return blobUrl;
    // document.getElementById('iframe').src = blobUrl;
  };

  return renderInIframe;
}
