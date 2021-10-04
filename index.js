function intersectObs(args) {
    const observer = new IntersectionObserver((entries, observer) => {

        for (let index = 0; index < entries.length; index++) {
            const entry = entries[index];
            let kiaName = entry.target.getAttribute("data-kia");

            if (entry.isIntersecting) {
                entry.target.classList.add(kiaName)
                observer.unobserve(entry.target)
            }
        }
    }, args);

    return observer;
}


/**
 * @param {String} qName - Query name DOM
 * @param {{treshold:number,rootMargin:string}} args - Options
 * @param {String} args.rootMargin - rootMargin in 'px' or '%'. default is 20%. defines the offsets of each side of the root's bounding box. In other words, positive values reduce the root bounding box and negative values increase it.
 * @param {String} args.treshold - The threshold is a number between 0 and 1.0. 0 meaning as soon as one pixel is visible, the callback will be run. 1.0 means every pixel needs to be visible before calling the callback. default is 0.1.
 */
export default function kia(qName, args) {
    let el = document.querySelector(qName);

    if (el) {
        args = args || {};
        args.root = el;
        args.threshold = args.threshold || 0.2;
        args.rootMargin = args.rootMargin || "20%";

        const dataAttrs = document.querySelectorAll("[data-kia]");
        const observer = intersectObs(args);

        for (let index = 0; index < dataAttrs.length; index++) {
            let element = dataAttrs[index];
            observer.observe(element);
        }

    } else {
        console.warn(`DOM ${qName} Not Found`);
    }
}