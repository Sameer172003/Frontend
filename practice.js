let smallImg=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImg.length;i++){
    console.dir(smallImg[i]);
}
let link=document.querySelectorAll(".box a");
for(let i=0;i<link.length;i++){
    link[i].style.color="green";
}