var allIn=document.getElementsByTagName("input");
console.log(allIn);

allIn[1].addEventListener("click",function(){
    var name=allIn[0].value;
    var namelen=name.length;
    if(namelen%2==0){
        open("https://www.instagram.com")
    }
    else{
        open("https://www.facebook.com")
    }
})

allIn[0].addEventListener("input",bgCol)
function bgCol(){
    var name=allIn[0].value;
    var namelen=name.length;
    if(namelen%2==0){
        document.body.style.backgroundImage="linear-gradient(75deg,hotpink,deeppink)"
    }
    else{
        document.body.style.backgroundImage="linear-gradient(75deg,skyblue,darkblue)"
    }
}