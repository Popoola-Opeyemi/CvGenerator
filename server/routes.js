const express = require('express')
const hbs = require('hbs');
const showdown = require('showdown');
var fs = require('fs');
const pdf = require('html-pdf');


const router = new express.Router()

const { cvHtml, genfileName } = require("./utils")
const converter = new showdown.Converter();

router.post("/api/generate", async (req, res) => {
  const userData = req.body


  let cvTemplate

  try {
    cvTemplate = cvHtml(converter, userData)

  } catch (error) {
    return res.status(400).send({ errors: true, data: { "message": "cannot find fields" } })
  }



  //setting options for PDF
  var options = { format: 'A4' };

  //Reads the Base Template from the Views Folder
  var template = hbs.compile(fs.readFileSync('./server/views/generate.hbs', 'utf8'));

  //Proccessing the base template with the content
  var html = template({ content: cvTemplate })

  // generate the pdf filename
  var filename = genfileName(userData);

  //create PDF from the above generated html
  pdf.create(html, options).toFile(`./server/public/${filename}.pdf`, function (err, resp) {
    if (resp) return res.json({
      data: {
        filename: `/static/${filename}.pdf`
      }, errors: false
    })
    if (err) return res.status(500).send({ errors: true, })
  });


})

module.exports = router