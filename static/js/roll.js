/* ======================================================================================================================
rollOver
====================================================================================================================== */
const roll = (function() {
    const items = document.querySelectorAll(".roll");

    const options = {
        root: null,
        rootMargin: "0% 0% -160px",
        threshold: [0, 0.5, 1.0],
    };

    function isIntersect(entries) {
        for (let i = 0; i < entries.length; i++) {
            const e = entries[i];

            if (e.isIntersecting) {
                e.target.classList.add("is-rollActive");
                e.target.classList.remove("is-rollOver", "is-rollReady");
            } else {
                e.target.classList.remove("is-rollActive");
                if (e.boundingClientRect.y < e.rootBounds.y) {
                    e.target.classList.add("is-rollOver");
                }
            }
        }
    }

    const observer = new IntersectionObserver(isIntersect, options);

    // Polyfill を使わない場合は下記を削除
    // observer.POLL_INTERVAL = 100;

    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("is-rollReady");
        observer.observe(items[i]);
    }
})();