module.exports.getDate=getDate;

function getDate(){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var dayFormat=today.toLocaleDateString("en-US", options);
    return dayFormat;  
}

module.exports.getDay=getDay;
function getDay(){
    var options = { weekday: 'long'};
    let today=new Date();
    var dayFormat=today.toLocaleDateString("en-US", options);
    return dayFormat;
}