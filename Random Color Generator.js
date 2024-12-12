let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

function changeColor() {
    let color = bgColorsArray.pop()
    document.getElementById("bgContainer").style.backgroundColor = color;
}