var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// I think this will console.log undefined
// It is because of hoisting(hoisting is a just a concept not real thing!)

