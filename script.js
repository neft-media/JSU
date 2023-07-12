let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

function clbFun(entries, observer) {
    entries.forEach(entry => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("anim_type-appearance")) {
                anime({
                    targets: entry.target,
                    translateY: [
                        { value: 400, duration: 0 },
                        { value: -10, duration: 600},
                        { value: 0, duration: 500 }
                    ],
                    easing: 'easeOutQuart',
                    scaleZ: [
                        { value: 1.2, duration: 0},
                        { value: 1, duration: 1000}
                    ],
                    scaleY: [
                        { value: 1.2, duration: 0},
                        { value: 1, duration: 1000}
                    ]
                });
            }

            if (entry.target.classList.contains("anim_type-blur")) {
                anime({
                    targets: entry.target,
                    duration: 1000,
                    update: function(anim){
                        entry.target.style.backdropFilter = 'blur(' + (20 - 20 * anim.progress / 100) + 'px)';
                    }
                });
            }

            if (entry.target.classList.contains("anim_type-from-left")) {
                anime({
                    targets: entry.target,
                    translateX: [
                        { value: -1000, duration: 0},
                        { value: 0, duration: 1000 }
                    ],
                    easing: 'easeOutQuart'
                });
            }

            if (entry.target.classList.contains("anim_type-from-right")) {
                anime({
                    targets: entry.target,
                    translateX: [
                        { value: 1000, duration: 0},
                        { value: 0, duration: 1000 }
                    ],
                    easing: 'easeOutQuart'
                });
            }

            if(entry.target.classList.contains("anim_type-counter")) {
                anime({
                    targets: entry.target,
                    innerHTML: [0, entry.target.innerHTML],
                    round: 1,
                    duration: 1500,
                    easing: 'easeInOutExpo'
                });
            }
            // прекращаем наблюдение
            observer.unobserve(entry.target);
        }
    });
}
  
let observer = new IntersectionObserver(clbFun, options);

let targets = document.querySelectorAll('.anim');
targets.forEach(target => {
    observer.observe(target)
});



// Закрытие меню при нажатии на пункт
const tocBtbs = document.querySelectorAll(".toc-button");
tocBtbs.forEach(tocBtn => {
    tocBtn.addEventListener("click", () => {
        document.querySelector("#menu-check").checked = false;
    });
});

const menuBtn = document.querySelector("#menu-check");
menuBtn.addEventListener("click", () => {
    const menu = document.querySelector("#menu-list");
    menu.classList.toggle("menu-list_hidden");
});