# pdftoimage

npm module for converting a pdf file to an image (png, jpeg, tiff, svg) using pdftocairo from [Poppler](https://poppler.freedesktop.org/).

## Installation
```
npm install pdftoimage
```

## Usage
```javascript
var pdftoimage = require('pdftoimage');
var file = 'sample.pdf';

// Returns a Promise
pdftoimage(file, {
  format: 'png',  // png, jpeg, tiff or svg, defaults to png
  prefix: 'img',  // prefix for each image except svg, defaults to input filename
  outdir: 'out'   // path to output directory, defaults to current directory
})
.then(function(){
  console.log('Conversion done');
})
.catch(function(err){
  console.log(err);
});
```

## Test
Make sure `mocha` is installed, then run
```
npm test
```

## License
MIT