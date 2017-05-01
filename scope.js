var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

//I think it will console.log undefined