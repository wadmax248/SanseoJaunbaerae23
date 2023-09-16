var mainScript=document.getElementById('mainScript');
var mainAnswer;

function handleEnter(event){
    if (event.key=="Enter"){
        mainAnswer=document.getElementById("mainAnswer");
        if (mainAnswer.value=="asdf")
            mainScript.textContent="ASDF";
        else
            mainScript.textContent=mainAnswer.value;
    }
}






            
    
            