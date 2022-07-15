/* ======================================================================================================================
ローディングjs
====================================================================================================================== */
$(window).on('load', function () {
    $('.load .logo span').animate({
        'width': '96%'
    }, 1400, 'easeInOutQuart');
    setTimeout(function () {
        $('.load').addClass('show');
    }, 1800);

    $('.load .logo').delay(2600).animate({
        'opacity': '0'
    }, 100, 'easeInOutQuart');

    $('.load').delay(2200).animate({
        'width': '0'
    }, 1200, 'easeInOutQuart');

    setTimeout(function () {
        $('.load').addClass('hidden');
    }, 3800);
});


/* ======================================================================================================================
メインビジュアル タイトル出現
====================================================================================================================== */
(function () {
    ("use strict");

    const access = sessionStorage.getItem("access");

    let timer = 0;
    if (access) {
        timer = 0;
    }

    const load = function () {
        window.addEventListener("load", () => {
            document.documentElement.classList.add("is-loaded");
            setTimeout(() => {
                document.documentElement.classList.add("is-start");

                setTimeout(() => {
                    document.documentElement.classList.add("is-over");
                    sessionStorage.setItem("access", true);
                }, 1000);
            }, 3000);
        });
    };
    load();

    const drawer = function () {
        const elem = document.querySelector(".js-drawer");
        elem.addEventListener("click", function (e) {
            const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
            e.currentTarget.setAttribute("aria-expanded", !isExpanded);

            document.documentElement.classList.toggle(`is-drawerActive`);
        });

        const nav = document.querySelectorAll("#globalNav a[href^='#']");
        for (let i = 0; i < nav.length; i++) {
            nav[i].addEventListener("click", function (e) {
                document.documentElement.classList.remove(`is-drawerActive`);
                elem.setAttribute("aria-expanded", false);
            });
        }
    };
    drawer();
})();


/* ======================================================================================================================
Lottie
====================================================================================================================== */
// const params = {
//     container: document.querySelector('#js-lottie'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: true,
//     path: '/data/animation.json'
// };
// const anim = lottie.loadAnimation(params);


/* ======================================================================================================================
パララックス
====================================================================================================================== */
const targetFactor = 0.25;
const windowHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);

const parallax = document.getElementsByClassName('parallax');
const targets = Array.prototype.slice.call(parallax);

window.addEventListener("scroll", () => {
    const scrollY = Math.max(window.pageYOffset, document.documentElement.scrollTop);

    for (const target of targets) {
        const targetOffsetTop = target.offsetTop;
        const scrollYStart = targetOffsetTop - windowHeight;
        target.style.backgroundPositionY = (scrollY > scrollYStart) ? `${(scrollY - targetOffsetTop) * targetFactor}px` : 'top';
    }
});

new WOW().init();

function handleTickInit(tick) {
    var counter = Tick.count.down('2022-08-04T00:00:00+01:00');
    counter.onupdate = function (value) {
        tick.value = value;
    };
    counter.onended = function () {
        // redirect, uncomment the next line
        // window.location = 'my-location.html'
        // hide counter, uncomment the next line
        // tick.root.style.display = 'none';
        // show message, uncomment the next line
        // document.querySelector('.tick-onended-message').style.display = '';
    };
}
