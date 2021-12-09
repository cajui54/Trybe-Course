window.onload = function(){
    let colorBg = document.getElementById('colorBg');
    let $colorFont = document.getElementById('colorFont');
    let $article = document.querySelectorAll('.article');
    let $paragraph = document.querySelectorAll('.paragraph');
    let $inputFontSize = document.getElementById('inputFontSize');
    let $inputLineHeight = document.getElementById('inputLineHeight');
    let $cmbFont = document.getElementById('cmbFont');
    //events
    colorBg.addEventListener('change', changeColorBg);
    $colorFont.addEventListener('change', changeColorFont);
    $inputFontSize.addEventListener('change', changeSizeFont);
    $inputLineHeight.addEventListener('change', changeLineHeight);
    $cmbFont.addEventListener('change',selectTypeFont);
    function changeColorBg(event){
       $article.forEach((element)=>{
           element.style.backgroundColor = event.target.value;
       })
    }
    function changeColorFont(event){
        $paragraph.forEach((element)=>{
            element.style.color = event.target.value;
        })
    }
    function changeSizeFont(event){
        $paragraph.forEach((element)=>{
            element.style.fontSize = $inputFontSize.value+'px';
        })
    }
    function changeLineHeight(){
        $paragraph.forEach((element)=>{
            element.style.lineHeight = $inputLineHeight.value;
        })
    }
    function selectTypeFont(){
        $paragraph.forEach((element)=>{
            element.style.fontFamily = $cmbFont.value;
        })
    }
    

}