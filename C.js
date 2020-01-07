let fs = require('fs');
fs.rmdir('./js',err=>{
    console.log(err);
    if (err!==null) {
    }
})

    function remove(){
        fs.rmdir('./js',err=>{
            console.log(err);
        })
    }


// let err=null;
// try {
//     fs.copyFile('./text.txt','./tex.txt',err=>{})
// } catch (error) {
//     err = error;
// }
// if (err !== null) {
//     console.log("执行报错~~");
//     // console.log(err);
    
// } 