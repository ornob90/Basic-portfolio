const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }
        else {
            description.style.height = '0px';
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");

        }
        removeOpen(index);
    })

    console.log(item)
})

function removeOpen(index){
    accordionContent.forEach((item2, index2) => {
        if(index != index2) {
            item2.classList.remove("open");
        }
    })
}