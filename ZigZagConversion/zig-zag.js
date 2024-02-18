var convert = function (s, numRows) {
    const zigzag = new Array(numRows).fill("");
    let direction = false;
    let column = 0;

    if (numRows === 1 || s.length < numRows) {
        return s;
    }

    for (x of s) {
        zigzag[column] += x;
        if (column === 0 || column >= numRows - 1) {
            direction = !direction;
        }
        if (direction) {
            column++;
        }
        else {
            column--;
        }
    }

    return zigzag.join("");
};

console.log(convert("HelloWorld", 3));