const fs=require("fs");
const path=require("path");
const express=require("express");
const app=express();

app.use('/', express.static('/'));
app.use("/png",express.static('png'));
///////-------directory----------////////////
const data=fs.readdirSync("C:")
app.get("/",(req,res)=>{
    data.forEach(element => {
        console.log(element);
        if(element.includes(".sys")){
        res.write(
            `<div style=font-size:20px;><img src="./png/sys.png" style=width:100px ></img>${element}</div>`
        )
        }
        else if(element.includes(".Bin")){
            res.write(
                `<div style=font-size:20px;><img src="./png/bin.png" style=width:100px ></img>${element}</div>`
            )
        }
        else if(element.includes(".dat")){
            res.write(
                `<div style=font-size:20px;><img src="./png/dat.png" style=width:150px ></img>${element}</div>`
            )
        }
        else{
            res.write(
                `<div style=font-size:20px><img src="./png/dir.png" style=width:100px ></img>${element}</div>`
            )
        }
    });
})
app.listen(5000,()=>{
    console.log("server running");
})

