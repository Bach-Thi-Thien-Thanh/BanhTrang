var container = document.getElementById('container');
var borderArray = ['80%', '0'];
var blursArray = ['0', '5px'];
var colorsArray = ['#015C92', '#2D82B5', '#53A6D8', '#88CDF6', '#BCE6FF'];
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 70;

function createElementRandom() {
    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height);
        var color = Math.floor(Math.random() * 3);
        var border = Math.floor(Math.random() * 2);
        var blur = Math.floor(Math.random() * 2);
        var widthElement = Math.floor(Math.random() * 5) + 5;
        var timeAnimation = Math.floor(Math.random() * 12) + 8;

        var div = document.createElement("div");
        div.style.backgroundColor = colorsArray[color];
        div.style.position = 'absolute';
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomLeft + 'px';
        div.style.marginTop = randomTop + 'px';
        div.style.borderRadius = borderArray[border];
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = 'move ' + timeAnimation + 's ease-in infinite';
        container.appendChild(div);
    }
}
createElementRandom();

// Chạy của Trợ giảng
let next = document.getElementById('next');
document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
let refresh = setInterval(() => { next.click() }, 2000);
// Chạy của Seminar
let nextSer = document.querySelector('.nextSer');
let prevSer = document.querySelector('.prevSer');
nextSer.addEventListener('click', function () {
    let items = document.querySelectorAll('.itemSer');
    document.querySelector('.slideSer').appendChild(items[0]);
})
prevSer.addEventListener('click', function () {
    let items = document.querySelectorAll('.itemSer');
    document.querySelector('.slideSer').prepend(items[items.length - 1]);
})
let refreshSer = setInterval(() => { nextSer.click() }, 5000);
//Chạy Ngoại Khóa
let listNK=document.querySelector('.slideNgoaiKhoa .listNgoaiKhoa');
let itemNK=document.querySelectorAll('.slideNgoaiKhoa .listNgoaiKhoa .itemNgoaiKhoa');
let dots=document.querySelectorAll('.slideNgoaiKhoa .dots li');
let prevNK=document.getElementById('prevNgoaiKhoa');
let nextNK=document.getElementById('nextNgoaiKhoa');

let active=0;
let lengthitemNK=itemNK.length -1;
nextNK.onclick = function(){
    if (active + 1 >lengthitemNK){
        active=0;
    }
    else{
        active = active + 1;
    }
    reloadSliderNgoaiKhoa();
}
function reloadSliderNgoaiKhoa(){
    let checkLeft=itemNK[active].offsetLeft;
    listNK.style.left= -checkLeft + 'px';

    let lastActiveDot=document.querySelector('.slideNgoaiKhoa .dots li.activedots');
    lastActiveDot.classList.remove('activedots');
    dots[active].classList.add('activedots');
    clearInterval(refreshNK);
    refreshNK = setInterval(() => {nextNK.click()},5000);
}
prevNK.onclick = function(){
    if (active==0){
        active=lengthitemNK;
    }
    else{
        active = active - 1;
    }
    reloadSliderNgoaiKhoa();
}
dots.forEach((li,key) => {
    li.addEventListener('click', function(){
        active=key;
        reloadSliderNgoaiKhoa();
    })
})
let refreshNK =setInterval(() => {nextNK.click()},5000);