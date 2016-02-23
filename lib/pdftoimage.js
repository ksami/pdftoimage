var path = require('path'),
    child_process = require('child_process');

function pdftoimage(file, opts){
  opts = opts || {};
  opts.format = opts.format || 'png';  //png, jpeg, tiff, svg
  opts.prefix = opts.prefix || path.parse(file).name;
  opts.outdir = opts.outdir || '.';

  var bin = 'pdftocairo';
  var args = [
    `-${opts.format}`,
    file,
    path.join(opts.outdir, opts.prefix)
  ];

  return new Promise((resolve, reject)=>{
    child_process.execFile(bin, args, (error, stdout, stderr)=>{
      if(error){
        reject(error);
      }
      else{
        resolve(stdout);
      }
    });
  });

}

module.exports = pdftoimage;