import { isUtf8 } from 'buffer';
import { log } from 'console';
import fs from 'fs';

const datafile='emp.json';
const datafile2='emp2.json';
fs.readFile(datafile,"Utf8",(err,data)=>{
    if(err){
        console.log("file not exist");
    }
    else{
        //console.log(data); gives buffer data
        console.log(JSON.parse(data));

    } 
});

const contectToWrite=`{
    "eid":102,
    "firstName": "Monu",
    "Salary": 20.24

}`

// fs.writeFile(datafile2,contectToWrite,"utf-8",(err,data)=>{
//     if(err){
//         console.log("file not exist");
//     }
//     else{
//         //console.log(data); gives buffer data
//         console.log(`${data} Writttten Successfuly`);

//     } 
//});

fs.writeFile(datafile2,contectToWrite,"utf-8",(err)=>{
    if(err){
        console.log("file not exist");
    }
    else{
        //console.log(data); gives buffer data
        console.log(`Writttten Successfuly`);

    } 
});

