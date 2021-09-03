(function() {
    let loadedEvents = [];
    let loaded = false;

    function doOnLoaded(func) {
        if (loaded) func();
        loadedEvents.push(func);
    }

    function getElement(selector) {
        return document.querySelector(selector);
    }

    function getValue(selector) {
        return getElement(selector).value;
    }

    window.addEventListener('load', function() {
        for (const event of loadedEvents) {
            event();
        }
    });

    window.doOnLoaded = doOnLoaded;
    window.getElement = getElement;
    window.getValue = getValue;

    // extern
    HTMLElement.prototype.visible = function(a) {
        this.style.display = a ? 'block' : 'none';
    }

    // polyfill
    if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function(r, a) {
            return this.replace(new RegExp(r, 'gm'), a);
        }
    }
})();