function toggleText(){
    const textBlock = document.getElementById("hiddenText");

    if(textBlock.style.display === "none"){
        textBlock.style.display = "block";
    }   else {
        textBlock.style.display = "none";
    }
}