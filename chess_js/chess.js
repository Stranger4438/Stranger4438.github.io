var i, j, clas;
for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        clas = '';

        if (j === 0) clas = 'first ';
        else if (j === 7) clas = 'last ';
        clas += (i % 2 == j % 2) ? 'white' : 'black';

        var field = document.createElement('div');
        field.className = clas;
        document.body.appendChild(field);
    }
}

function add0(value) {
    return (value.toString().length < 2) ? "0" + value : value;
}

setInterval(function() {
    var d = new Date();
    var h = add0(d.getHours());
    var m = add0(d.getMinutes());
    var s = add0(d.getSeconds());
    console.log(h + ":" + m + ":" + s);
}, 1000);
