const $humburger = document.querySelector('.top-bar__burger');
const $menu = document.querySelector('.top-bar__menu');

$humburger.addEventListener('click', () => {
    $humburger.classList.toggle('active');
    $menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

$menu.addEventListener('click', event => {
    if (event.target.closest('.top-bar__link')) {
        $menu.classList.remove('active')
        $humburger.classList.remove('active')
    }
});

const $accordion = document.querySelectorAll('.services-accordion__item');
const $accordionHead = document.querySelectorAll('.services-accordion__head');

$accordionHead.forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if (parent.classList.contains('services-accordion--active')) {
            parent.classList.remove('services-accordion--active');
        } else {
            $accordion.forEach((child) =>
                child.classList.remove('services-accordion--active')
            );
            parent.classList.add('services-accordion--active');

        }
    }))

const $prew = document.querySelector('#prew');
const $next = document.querySelector('#next');
const $slides = document.querySelectorAll('.slider-item');

let index = 0;

const activeSlide = n => {
    for (slide of $slides) {
        slide.classList.remove('active-slide');
        slide.classList.remove('slider-item--zoomIn');
    }
    $slides[n].classList.add('active-slide');
    $slides[n].classList.add('slider-item--zoomIn');
}

const nextSlide = () => {
    if (index === $slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prewSlide = () => {
    if (index === 0) {
        index = $slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

$next.addEventListener('click', () => {
    clearInterval(interval);
    nextSlide();
});
$prew.addEventListener('click', () => {
    clearInterval(interval);
    prewSlide();
});

const interval = setInterval(nextSlide, 3500);


const $persons = document.querySelectorAll('.team-bottom__img');
const $aboutPersons = document.querySelectorAll('.team-bottom__about-person');

const activePerson = n => {
    for (person of $persons) {
        person.classList.remove('team-bottom__img--active');
    }
    $persons[n].classList.add('team-bottom__img--active');
}

$persons.forEach((item, indexPerson) => {
    item.addEventListener('click', () => {
        index = indexPerson;

        if (indexPerson === 0) {
            item.style.order = '2';
            $persons[1].style.order = '1';
            $persons[2].style.order = '3';

            activePerson(indexPerson);

            $aboutPersons[0].classList.add('team-bottom__about-person--active');
            $aboutPersons[1].classList.remove('team-bottom__about-person--active');
            $aboutPersons[2].classList.remove('team-bottom__about-person--active');
        }
        if (indexPerson === 1) {
            item.style.order = '2';
            $persons[0].style.order = '1';
            $persons[2].style.order = '3';

            activePerson(indexPerson);

            $aboutPersons[1].classList.add('team-bottom__about-person--active');
            $aboutPersons[0].classList.remove('team-bottom__about-person--active');
            $aboutPersons[2].classList.remove('team-bottom__about-person--active');
        }
        if (indexPerson === 2) {
            item.style.order = '2';
            $persons[1].style.order = '3';
            $persons[0].style.order = '1';

            activePerson(indexPerson);

            $aboutPersons[2].classList.add('team-bottom__about-person--active');
            $aboutPersons[1].classList.remove('team-bottom__about-person--active');
            $aboutPersons[0].classList.remove('team-bottom__about-person--active');
        }

    });
})


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};