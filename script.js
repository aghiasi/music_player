var checker = false;
const play =()=>{
    if(checker === false){
    document.getElementById('rot').setAttribute('class','rotating')
    document.getElementById('bar').setAttribute('class','bar bar-animation')
    checker = true;
    }else{
        document.getElementById('rot').setAttribute('class',' rotating animation-pause')
        document.getElementById('bar').setAttribute('class','bar bar-animation animation-pause')
        checker = false ;
    }
}
