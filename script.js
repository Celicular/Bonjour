window.onload = function() {
    const welcome = document.querySelector(".welcome"); // or querySelector
    setTimeout(() => {
            welcome.classList.add('hide');
            
            welcome.addEventListener('transitionend', () => {
                welcome.style.scale = '0';
                welcome.remove()
                document.body.style.overflowY = 'auto';

            }, { once: true });

        }, 300);

};

const bg = document.querySelector('.main');

function jumpAndContinue(el, percent, totalDuration) {
  const seconds = (percent / 100) * totalDuration;
  el.style.animation = `background ${totalDuration}s linear infinite`;
  el.style.animationDelay = `-${seconds}s`;
  el.style.animationPlayState = 'running';
}

const imgs = [0, 33.3, 66.6];
current = 0;

document.querySelector(".acont:last-of-type").addEventListener("click", function() {
    current>1? current=0 : current = (current + 1) % imgs.length;
    console.log(current);
    jumpAndContinue(bg, imgs[current], 30);
});
document.querySelector(".acont:first-of-type").addEventListener("click", function() {
    current<1? current=2 : current = (current - 1) % imgs.length;
    console.log(current);
    jumpAndContinue(bg, imgs[current], 30);
});

var lastScrolling = "0"

window.onscroll = function(){
    console.log(window.scrollY);
    const navbar = document.querySelector(".navbar");
    const mainnavbar = document.querySelector(".mainnav");
    if(window.scrollY > 50){
        navbar.style.top = "-48.125px";
        mainnavbar.style.backgroundColor = "rgba(0,0,0, 0.7)";
        mainnavbar.style.backdropFilter = "blur(10px)";
        mainnavbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        mainnavbar.style.height = "55%";
        mainnavbar.style.marginBottom = "auto";
        if(window.scrollY > 150){
            navbar.style.top = "-175px";
        }
    }else if(window.scrollY <= 50){
        navbar.style.top = "0";
        mainnavbar.style.backgroundColor = "transparent";
        mainnavbar.style.backdropFilter = "none";
        mainnavbar.style.boxShadow = "none";
        mainnavbar.style.height = "70%";
        mainnavbar.style.marginBottom = "20px";
    }

    if(lastScrolling > window.scrollY){
        navbar.style.top = "-48.125px";
        if(window.scrollY < 50){
            navbar.style.top = "0";
        }
    }
    lastScrolling = window.scrollY;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));