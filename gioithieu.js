let previewThanhVien = document.querySelector('.product-pre');
let previewBox = previewThanhVien.querySelectorAll('.pre');
document.querySelectorAll('.Product_ThanhVien .product').forEach(product => {
    product.onclick = () => {
        previewThanhVien.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(pre => {
            let target = pre.getAttribute('data-target');
            if (name == target) {
                pre.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick=()=>{
        close.classList.remove('active');
        previewThanhVien.style.display = 'none';
    }
})
var container=document.getElementById('container');
        var borderArray=['80%','0'];
        var blursArray=['0','5px'];
        var colorsArray=['#015C92','#2D82B5','#53A6D8','#88CDF6','#BCE6FF'];
        var width=document.documentElement.clientWidth;
        var height=document.documentElement.clientHeight;
        var count=70;

        function createElementRandom(){
            for (var i=0;i<count;i++){
                var randomLeft=Math.floor(Math.random()*width);
                var randomTop=Math.floor(Math.random()*height);
                var color=Math.floor(Math.random()*3);
                var border=Math.floor(Math.random()*2);
                var blur=Math.floor(Math.random()*2);
                var widthElement=Math.floor(Math.random()*5)+5;
                var timeAnimation=Math.floor(Math.random()*12)+8;

                var div=document.createElement("div");
                div.style.backgroundColor=colorsArray[color];
                div.style.position='absolute';
                div.style.width=widthElement +'px';
                div.style.height=widthElement +'px';
                div.style.marginLeft=randomLeft +'px';
                div.style.marginTop=randomTop + 'px';
                div.style.borderRadius= borderArray[border];
                div.style.filter= 'blur(' + blursArray[blur] +')';
                div.style.animation='move '+timeAnimation +'s ease-in infinite';
                container.appendChild(div);
            }
        }
        createElementRandom();