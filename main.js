{/* .btn2를 찾고 그것을 클릭하면 아래 이벤트가 일어나게 하라 */}
document.querySelector('.btn1').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(0vw)';
});

document.querySelector('.btn2').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-100vw)';
});

document.querySelector('.btn3').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-200vw)';
});

document.querySelector('.btn4').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-300vw)';
});

document.querySelector('.btn5').addEventListener('click', function(){
    document.querySelector('.container').style.transform = 'translate(-400vw)';
});