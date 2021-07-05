const bodyParser=require("body-parser");
const express=require("express");
const date=require(__dirname+"/date.js");
const app=express();
console.log(date.getDay());
var items=["Eat!","Sleep!"];
var workItems=[];
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    // var date=new Date();
    // var curday=date.getDay();
    // var today="";
    // if(curday==0){
    //     today="Sunday!";
    // }
    // else if(curday==1){
    //     today="Monday!";
    // }
    // else if(curday==2){
    //     today="Tuesday!";
    // }
    // else if(curday==3){
    //     today="Wednesday!";
    // }
    // else if(curday==4){
    //     today="Thursday!";
    // }
    // else if(curday==5){
    //     today="Friday!";
    // }
    // else if(curday==6){
    //     today="Saturday!";
    // }
    // res.render("list",{kindOfDay:today});
    
    // res.send("hello!");
    var dayFormat=date.getDate();
    res.render("list",{pageTitle:dayFormat, newlists:items});
})

app.post("/",function(req,res){
    console.log(req.body);
    if(req.body.workList=="Work"){
        var item=req.body.todo;
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        var task=req.body.todo;
        items.push(task);
        res.redirect("/");
    }
        // res.send("Thanks for Submitting!");
})

app.get("/work",function(req,res){  
    res.render("list",{pageTitle:"Work Day",newlists:workItems});
})

app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log(("server connected to port 3000!"));
})