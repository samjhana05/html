var startIndex=0;

function AutoImageSlider(){
    var imageIndex= document.getElementsByClassName('imageBox')
    for ( var x=0; x< imageIndex.length; x++){
        imageIndex[x].style.display='none'
    }
    startIndex++;

    if (startIndex>imageIndex.length){
        startIndex=1;
    }
    imageIndex[startIndex-1].style.display='block';

    setInterval(AutoImageSlider, 3000)
}

AutoImageSlider();