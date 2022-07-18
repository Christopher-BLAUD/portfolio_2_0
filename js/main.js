//  Animation de saisie de texte 

let typedHello = new Typed(".home_title_hello", {
    strings: ["Hello,"],
    typeSpeed: 60,
    startDelay: 1000,
    showCursor: false
})

let typedName = new Typed(".home_title_name", {
    strings: ["Christopher Blaud"],
    typeSpeed: 60,
    startDelay: 2000,
    showCursor: false
})

let typedJob = new Typed(".home_title_job", {
    strings: ["je suis"],
    typeSpeed: 60,
    startDelay: 3800,
    showCursor: false
})

let typed = new Typed(".auto-type", {
    strings: ["Développeur web."],
    typeSpeed: 60,
    startDelay: 4400,
    showCursor: false,
    shuffle: false,
})

//  Affichage de la barre de navigation

$('.navbar_icon').on('click', () => {
    $('.navbar_icon').toggleClass('active')
    $('.navbar').toggleClass('reveal')
})

$('.navbar li a').on('click', () => {
    $('.navbar_icon').toggleClass('active')
    $('.navbar').toggleClass('reveal')
})
