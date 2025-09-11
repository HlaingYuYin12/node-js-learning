const fs = require('fs');

//read files
fs.readFile('./docs/sf.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');


//write files
fs.writeFile('./docs/sf.txt' , 'hello, world', () => { //callback fun
    console.log('file was written');
})

fs.writeFile('./docs/sf2.txt' , 'hello, again', () => { //create auto file when run
    console.log('file was written');
})


//directories
if( !fs.existsSync('./assets')){ //exist then not create
    fs.mkdir('./assets', (err) => { //can create one time
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}



//delete files
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}