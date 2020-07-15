var arr = [1, 2, 3, 4, 5];

function arrVis(arr) {
    console.log(arr.shift());
    if (arr.length > 0) {
        arrVis(arr);
    }
}

arrVis(arr);