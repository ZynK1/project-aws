var slideIndex, slides, dots, captionText;

function initGallery(){
    slideIndex = 0;
    slides = document.getElementsByClassName("imageHolder");
    slides[slideIndex].style.opacity = 1;

    captionText = document.querySelector(".captionHolder .captionText");
    captionText.innerHTML = slides[slideIndex].querySelector(".captionText").innerHTML;

    dots=[];
    var dotsContainer = document.getElementById("dotsContainer");

    for(var i=0;i<slides.length;i++){
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onClick","moveSlide("+i+")");
        dotsContainer.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");

}
initGallery();

function plusSlide(n) {
    moveSlide(slideIndex + n);
}

function moveSlide(n){
    var i, current, next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    }
    var slideTextAnimClass;
    if(n > slideIndex){
        if(n>=slides.length){
            n=0;
        }
        moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
        moveSlideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }
    else if(n<slideIndex){
        if(n<0) {
            n = slides.length - 1;
        }
            moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
            moveSlideAnimClass.forNext = "moveRightNextSlide";
            slideTextAnimClass="slideTextFromBottom";
    }
    if(n!=slideIndex){
        next = slides[n];
        current = slides[slideIndex];
        for(i=0;i<slides.length;i++){
            slides[i].className="imageHolder";
            slides[i].style.opacity = 0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);

        dots[n].classList.add("active");
        slideIndex=n;
    }
    captionText.style.display='none';
    captionText.className="captionText "+slideTextAnimClass;
    captionText.innerText = slides[n].querySelector(".captionText").innerText;
    captionText.style.display = "block";
}
var timer = null;
function setTimer() {
    timer = setInterval(function () {
        plusSlide(1);
    },3000)
}
setTimer()



