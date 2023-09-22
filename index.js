const toss=function(){
    const no=Math.floor(Math.random() * 10);
    let toss;
    if(no%2==0)
    {
        toss="HEAD";
    }else{
        toss="TAIL";
    }
    return toss;
   
}

let show=document.querySelector('h1');
show.style.marginLeft='180px'

let intervalid;
const start = document.querySelector('#start');
start.style.cssText = 'background-color:#20ff00; height:2em; width:10em; margin-right:10px';
const sound=document.querySelector('audio');
start.addEventListener('click',()=>{
    sound.play();
    intervalid= setInterval(() => {
        show.innerHTML=toss();

    }, 0);

    setTimeout(() => {
        clearInterval(intervalid);
    }, 3000);
})


const reset = document.querySelector('#reset');
reset.style.cssText = 'background-color:red; height:2em; width:10em; margin-left:150px';
reset.addEventListener('click',()=>{
    clearInterval(intervalid);
    show.innerHTML='0000';
    sound.pause();
    
})