const fs = require('fs');

function writePage (info) {
    fs.writeFile('./dist/index.html', info, err =>{
        if(err){
            throw err
        }
        console.log("index.html Page generated")
        // copyCSS()
    })
}


module.exports = writePage
