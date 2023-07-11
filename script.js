let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

function clbFun(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.target)
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("anim_type-0")) {
                entry.target.style.animationName = `appear`;
            }

            if (entry.target.classList.contains("anim_type-1")) {
                entry.target.style.animationName = `fromLeft`;
            }
            if (entry.target.classList.contains("anim_type-2")) {
                entry.target.style.animationName = `fromRight`;
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
