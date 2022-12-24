var pls = null
function getAns(){
    localStorage.setItem("ans",document.getElementById('ans').value)
    // if(pls == null){
    //     pls = [localStorage.getItem("ans")]
    //     alert("ok")
    // }
    // let arr = JSON.parse(pls)
    document.getElementById("ans").innerHTML = ""
}
// var pls = 0;  
// const fs = require('fs')
// function getAns(){
//     pls = document.getElementById("ans")
//     fs.writeFile(ans.txt, pls, err =>{
//         if(err){
//             console.err;
//             return;
//         }
//         else{
//             console.log("ok");
//         }
//     })
// }