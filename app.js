
const express = require('express');
const nodemailer = require('nodemailer');
const PdfMaker = require('pdfmake');
const PORT = 3000;
const app = express ();
app.use(express.json());


app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

//the fonts used in the pdf ()
const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Regular.ttf',
    italics: 'fonts/Roboto-Regular.ttf',
    bolditalics: 'fonts/Roboto-Regular.ttf'
  }
};
const pdfGenerator = new PdfMaker(fonts);
function customLayout(currentRow, node) {
  if (currentRow === 0) {
    return {
      borderBottom: true,
      borderColor: '#dbdbdb',
      fillColor: '#B0C4DE'
    };
  } else {
    return {
      borderBottom: (i, node) => i < node.table.body.length - 1,
      borderColor: '#dbdbdb',
      fillColor: false
    };
  }
}
//sample data to be used in the pdf
const reportTitle = 'Vehicle Report';
const fileName = 'vehicleReport.pdf';
const reportData=[
  {
    "id": 'DPY802MP999999999',
    'date': 'Wed 10 May 2023',
    'records':[
      { 
        start: '8:00 am', 
        duration: '1h 51min', 
        distance: '3km', 
        maxSpeed: '7km/h', 
        fuel: '6L', 
        totalIdle: '4h2min', 
        maxRPM: '0', 
        destination: 'NewYork', 
        driver:'John Doet hegreat testlling' 
      },
    ]
  },
  {
    "id": 'PPY802M222222222P',
    'date': 'Wed 10 May 2023',
    records:[
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' }
    ]
  },
  {
    "id": 'PPdffddfdfY802MP',
    'date': 'Wed 10 May 2023',
    records:[
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
  { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' }
    ]
  },
  {
    "id": 'PPdffddfdfY802MP',
    'date': 'Wed 10 May 2023',
    records:[
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' }
    ]
  },
  {
    "id": 'PPdffddfdfY802MP',
    'date': 'Wed 10 May 2023',
    records:[
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' },
      { start: '8:00 am', duration: '1h 51min', distance: '3km', maxSpeed: '7km/h', fuel: '6L', totalIdle: '4h2min', maxRPM: '0', destination: 'NewYork', driver:'John Doethegreat' }
    ]
  },
]
//the pdf template
const PDF_TEMPLATE = {
    info: {
      title: 'Vehicle Report',
      author: 'Rikatec',
      subject: 'Vehicle Report',
    },
    content: [
      {
        image: 'logo.png',//path to the logo
        width: 60,
        alignment: 'center'
      },
      { text: `${reportTitle}`, style: 'header', alignment: 'center' },
      { text: '\n' }, // Add space
      ...reportData.flatMap(vehicleData => [
        { text: `Vehicle ID: ${vehicleData.id}`, style: 'header', fontSize: 12 },
        { text: `Report Date: ${vehicleData.date}`, style: 'header', fontSize: 10 },
        { text: '\n' },
        {
          table: {
            headerRows: 1,
            widths: ['10%', '10%', '10%', '10%', '5%', '10%', '10%', '20%', '15%'],
            body: [
              [
                { text: 'Start',  style: 'record_header'  , border: [false, false, false, true]},
                { text: 'Duration',  style: 'record_header' , border: [false, false, false, true]},
                { text: 'Distance',  style: 'record_header' , border: [false, false, false, true] },
                { text: 'Max Speed',  style: 'record_header' , border: [false, false, false, true] },
                { text: 'Fuel',  style: 'record_header', border: [false, false, false, true]},
                { text: 'Total Idle',  style: 'record_header' , border: [false, false, false, true]},
                { text: 'Max RPM',  style: 'record_header', border: [false, false, false, true]},
                { text: 'Driver',  style: 'record_header', border: [false, false, false, true]},
                { text: 'Destination',  style: 'record_header', border: [false, false, false, true]}
              ],
              ...vehicleData.records.map(record => [
                { text: record.start.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.duration.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.distance.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.maxSpeed.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.fuel.toString(), style: 'recordStyle' ,border: [false, false, false, true]},
                { text: record.totalIdle.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.maxRPM.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.driver.toString(), style: 'recordStyle',border: [false, false, false, true]},
                { text: record.destination.toString(), style: 'recordStyle',border: [false, false, false, true] }
              ])
            ]
          },
          layout: customLayout
        },
        { text: '\n\n' } // Add space between reports
      ])],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
        },
        recordStyle: {
          fontSize: 10,
          border: [false, false, false, true]
        },
        record_header: {
          fontSize: 8,
          border: [false, false, false, true],
          fillColor: '#B0C4DE'
        }
      }
};


app.post('/generate-vehicle-report', async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'your_email@gmail.com',
        pass: '---your---pass---from---google--app--password---',
      },
    });

    const pdfDocGenerator = pdfGenerator.createPdfKitDocument(PDF_TEMPLATE,{});

    const pdfBuffer = await new Promise((resolve, reject) => {
      const chunks = [];
      pdfDocGenerator.on('data', chunk => chunks.push(chunk));
      pdfDocGenerator.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDocGenerator.on('error', reject);
      pdfDocGenerator.end();
    });

      const mailOptions = {
        from: 'your_email@gmail.com',
        to: 'your_email@gmail.com',
        subject: 'Generated PDF',
        text: 'Here is your generated PDF.',
        attachments: [
              {
                filename: fileName,
                content: pdfBuffer,
              },
            ],
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          res.status(500).json({ error: 'Error sending email' });
        } else {
          console.log('Email sent:', info.response);
          res.status(200).json({ message: 'Email sent successfully' });
        }
      });
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ error: 'Error generating PDF' });
  }
});
 