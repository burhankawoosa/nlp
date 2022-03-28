const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors'); 
const multer = require('multer');
var mammoth = require("mammoth");
const app = express();
const port = 3000;



app.use(cors({ origin: "*" }));

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
  const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads')
    },
    filename: (req, file, callBack) => {
        callBack(null, `Nlplvl1_${file.originalname}`)
    }
  })

  const upload = multer({ storage: storage })

  app.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    mammoth.extractRawText({path: "uploads/Nlplvl1_tool sample document.docx"})
    .then(function(result){
        var text = result.value; // The raw text
        console.log(text);
        res.send(text);
        var messages = result.messages;
    })
    .done();
    
    if (!file) {
      const error = new Error('No File')
      error.httpStatusCode = 400
      return next(error)
    }
      
  })