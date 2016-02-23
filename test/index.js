var assert = require('assert'),
    fs = require('fs');

var pdftoimage = require('../index');
var samplefile = 'test/sample.pdf';

describe('Pass', ()=>{
  before(()=>{
    fs.mkdirSync('out');
  });
  it('should create without options', ()=>{
    return pdftoimage(samplefile);
  });
  it('should create with options', ()=>{
    return pdftoimage(samplefile, {
      format: 'jpeg',
      prefix: 'image',
      outdir: 'out'
    });
  });
});

describe('Fail', ()=>{
  it('should fail to create when file does not exist', ()=>{
    return pdftoimage('doesnotexist.pdf')
    .then(()=>assert.ok(false))
    .catch(err=>assert.ok(err.code));
  });
  it('should fail to create when format is not valid', ()=>{
    return pdftoimage(samplefile, {format: 'invalid'})
    .then(()=>assert.ok(false))
    .catch(err=>assert.ok(err.code));
  });
  it('should fail to create when outdir does not exist', ()=>{
    return pdftoimage(samplefile, {outdir: 'doesnotexist'})
    .then(()=>assert.ok(false))
    .catch(err=>assert.ok(err.code));
  });
});