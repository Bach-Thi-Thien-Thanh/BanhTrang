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
        var timeAnimation = Math.floor(Math.random() * 8) + 5;

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