// const fs = require('fs');


// const createReader = fs.createReadStream('file');
// const writer = fs.createWriteStream("copy")
// createReader.on('data', (data) => {
//   writer.write(data)
// });



const writer = fs.createWriteStream('copy');

const reader = fs.createReadStream('file');

reader.pipe(writer);


