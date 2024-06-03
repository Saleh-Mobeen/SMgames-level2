
const buttons = document.querySelectorAll('.button');
const vid = document.getElementById('mainvid')

buttons.forEach(button => {
    button.addEventListener('mouseover', function () {
        button.style.transform = 'rotateZ(-5deg)';
        setTimeout(() => { button.style.transform = 'translateY(-5px)'; }, 100)
        button.style.boxShadow = '0px 0px 10px #20B2AA'
    })

    button.addEventListener('mouseout', function () {
        button.style.transform = 'rotateZ(5deg)';
        setTimeout(() => { button.style.transform = 'translateY(5px)'; }, 100)
        button.style.boxShadow = 'none'
    });
});



function good(entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
            entry.target.style.animation = 'comein 2s ease'
            entry.target.style.opacity = 1
            observer.unobserve(entry.target); 
        }
    });
}


const observer = new IntersectionObserver(good, { threshold: 0.5 });



const game = document.querySelectorAll('.game');
game.forEach((ele) => {
    observer.observe(ele);
});



