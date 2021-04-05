const anchors = document.querySelectorAll('a[href*="#]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' +blockID).scrollIntoView({
        behavior: 'smooth',
      block: 'start'
    })

    })
}

//jquery smooth scroll
$("#top-scroll").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $("#home").offset().top  // класс объекта к которому приезжаем
    }, 900); // Скорость прокрутки
});
//jquery smooth scroll
$(".header-scroll").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".footer").offset().top  // класс объекта к которому приезжаем
    }, 900); // Скорость прокрутки
});