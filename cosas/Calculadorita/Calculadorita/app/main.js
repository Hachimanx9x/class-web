var nuNumber1 = 0;
var nuNumber2 = 0;
var nuResult;
var strOption ="1";


function handleInput(stInput){
    var nuValue = parseInt(document.getElementById(stInput).value);
    nuNumber1 = stInput=="text_number_1"?nuValue : nuNumber1;
    nuNumber2 = stInput=="text_number_2"?nuValue : nuNumber2;
    execute();
}

function handleSelect(){
    strOption = document.getElementById("select_operation").value;
    execute();
}

function execute(){
    switch(strOption){
        case "1":
        nuResult = (nuNumber1 + nuNumber2).toFixed(2);
        break;
        case "2":
        nuResult = (nuNumber1 - nuNumber2).toFixed(2);
        break;  
        case "3": 
        nuResult = (nuNumber1 * nuNumber2).toFixed(2);
        break;   
        case "4": 
        nuResult = (nuNumber1 / nuNumber2).toFixed(2);
        break;  
        case "5": 
        nuResult = (Math.pow(nuNumber1,nuNumber2)).toFixed(2);
        break;
        
    }
    document.getElementById("result_number").value = nuResult;
}
function calculate(){
  
    switch(strOption){
        case "0":
        nuResult = (nuNumber1 + nuNumber2).toFixed(2);
        break;
        case "1":
        nuResult = (nuNumber1 - nuNumber2).toFixed(2);
        break;  
        case "2": 
        nuResult = (nuNumber1 * nuNumber2).toFixed(2);
        break;   
        case "3": 
        nuResult = (nuNumber1 / nuNumber2).toFixed(2);
        break;  
        case "4": 
        nuResult = (Math.pow(nuNumber1,nuNumber2)).toFixed(2);
        break;
        
    }
    
  
    document.getElementById("result_number").innerHTML = nuResult;
}