let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttontext=e.target.innerText;
        if(buttontext=='X'){
            buttontext='*';
            
            screenValue+=buttontext;
            screen.value = screenValue;
        }else if(buttontext=='='){
            screen.value=eval(screenValue)

        }else if(buttontext=='C'){
            screen.value='';
            screenValue='';
        }else{
            screenValue+=buttontext;
            screen.value = screenValue;

        }
    })
}