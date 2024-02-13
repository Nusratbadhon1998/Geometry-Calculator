function calculateTriangle() {

    let baseValue = getInputById("triangleBase");
    let heightValue = getInputById("triangleHeight");
    console.log(baseValue)
    console.log(heightValue)


    let area = 0.5 * baseValue * heightValue


    let result= getResult('box-result','display',area)


}
function calculateRectangle() {

    let width = getInputById("rectangleWidth");
    let length = getInputById("rectangleLength");
    console.log(width)
    console.log(length)


    let area = length * width


    let result= getResult('rectangle-box-result','display',area)


}
function calculateParallelogram() {

    let base = getInputById("parallelogramBase");
    let height = getInputById("parallelogramHeight");
    console.log(base)
    console.log(height)


    let area = base * height


    let result= getResult('parallelogram-box-result','display',area)


}

function calculateRhombus() {

    let d1 = getInputById("rhombusD1");
    let d2 = getInputById("rhombusD2");
    console.log(d1)
    console.log(d2)


    let area = 0.5 * d1 * d2


    let result= getResult('rhombus-box-result','display',area)


}
function calculatePentagon() {

    let p = getInputById("pentagonP");
    let b = getInputById("pentagonP");
    console.log(p)
    console.log(b)


    let area = 0.5 * p * b


    let result= getResult('pentagon-box-result','display',area)


}
function calculateEllipse() {

    let a = getInputById("ellipseA");
    let b = getInputById("ellipseA");
    console.log(a)
    console.log(b)


    let area = 3.1416 * a * b


    let result= getResult('ellipse-box-result','display',area)


}


function getInputById(x) {
    let inputText = document.getElementById(x);
    return parseFloat(inputText.value);
}

function getResult(boxResult, display, area) {

    let innerBox = document.getElementById(boxResult)
    innerBox.innerText = area
    let outerDisplay = document.getElementById(display)

    outerDisplay.innerText= `The area is ${area}`


}