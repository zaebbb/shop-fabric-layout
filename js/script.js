let span = document.querySelectorAll('span');

span.forEach(e => {
    e.addEventListener("click", () => {
        for(let i = 0; i < span.length; i++){
            span.forEach(e => {
                e.classList.remove("active");
            })
        }
        e.classList.add("active");
    })
})