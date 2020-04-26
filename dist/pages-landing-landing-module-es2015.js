(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js ***!
  \********************************************************************************************************/
/*! exports provided: ScrollToDirective, ScrollToModule, ScrollToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToModule", function() { return ScrollToModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToService", function() { return ScrollToService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values for Component Input
 * @type {?}
 */

const DEFAULTS = {
    target: null,
    action: 'click',
    duration: 650,
    easing: 'easeInOutQuad',
    offset: 0,
    offsetMap: new Map()
};
const ɵ0 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time;
}, ɵ1 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * (2 - time);
}, ɵ2 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
}, ɵ3 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time;
}, ɵ4 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return (--time) * time * time + 1;
}, ɵ5 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
}, ɵ6 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time * time;
}, ɵ7 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return 1 - (--time) * time * time * time;
}, ɵ8 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time;
}, ɵ9 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time * time * time * time * time;
}, ɵ10 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return 1 + (--time) * time * time * time * time;
}, ɵ11 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time;
}, ɵ12 = /**
 * @param {?} time
 * @return {?}
 */
(time) => {
    return Math.pow(2, -10 * time) * Math.sin((time - 1 / 4) * (2 * Math.PI) / 1) + 1;
};
/**
 * Easing Colleciton
 * @type {?}
 */
const EASING = {
    easeInQuad: (ɵ0),
    easeOutQuad: (ɵ1),
    easeInOutQuad: (ɵ2),
    easeInCubic: (ɵ3),
    easeOutCubic: (ɵ4),
    easeInOutCubic: (ɵ5),
    easeInQuart: (ɵ6),
    easeOutQuart: (ɵ7),
    easeInOutQuart: (ɵ8),
    easeInQuint: (ɵ9),
    easeOutQuint: (ɵ10),
    easeInOutQuint: (ɵ11),
    easeOutElastic: (ɵ12)
};
/**
 * Set of allowed events as triggers
 * for the Animation to start.
 * @type {?}
 */
const EVENTS = [
    'click',
    'mouseenter',
    'mouseover',
    'mousedown',
    'mouseup',
    'dblclick',
    'contextmenu',
    'wheel',
    'mouseleave',
    'mouseout'
];
/**
 * Strip hash (#) from value.
 *
 * @param {?} value 				The given string value
 * @return {?} 					The stripped string value
 */
function stripHash(value) {
    return value.substring(0, 1) === '#' ? value.substring(1) : value;
}
/**
 * Test if a given value is a string.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a string
 */
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
/**
 * Test if a given Element is the Window.
 *
 * @param {?} container 				The given Element
 * @return {?} 						Whether the given Element is Window
 */
function isWindow(container) {
    return container === window;
}
/**
 * Test if a given value is of type ElementRef.
 *
 * @param {?} value 					The given value
 * @return {?} Whether the given value is a number
 */
function isElementRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"];
}
/**
 * Whether or not the given value is a Native Element.
 *
 * @param {?} value           The given value
 * @return {?} Whether or not the value is a Native Element
 */
function isNativeElement(value) {
    return value instanceof HTMLElement;
}
/**
 * Test if a given value is type number.
 *
 * @param {?} value 					The given value
 * @return {?} 						Whether the given value is a number
 */
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Animation
 */
class ScrollToAnimation {
    /**
     * Class Constructor.
     *
     * @param {?} _container            The Container
     * @param {?} _listenerTarget       The Element that listens for DOM Events
     * @param {?} _isWindow             Whether or not the listener is the Window
     * @param {?} _to                   Position to scroll to
     * @param {?} _options              Additional options for scrolling
     * @param {?} _isBrowser            Whether or not execution runs in the browser
     *                              (as opposed to the server)
     */
    constructor(_container, _listenerTarget, _isWindow, _to, _options, _isBrowser) {
        this._container = _container;
        this._listenerTarget = _listenerTarget;
        this._isWindow = _isWindow;
        this._to = _to;
        this._options = _options;
        this._isBrowser = _isBrowser;
        /**
         * Recursively loop over the Scroll Animation
         */
        this._loop = (/**
         * @return {?}
         */
        () => {
            this._timeLapsed += this._tick;
            this._percentage = (this._timeLapsed / this._options.duration);
            this._percentage = (this._percentage > 1) ? 1 : this._percentage;
            // Position Update
            this._position = this._startPosition +
                ((this._startPosition - this._to <= 0 ? 1 : -1) *
                    this._distance *
                    EASING[this._options.easing](this._percentage));
            if (this._lastPosition !== null && this._position === this._lastPosition) {
                this.stop();
            }
            else {
                this._source$.next(this._position);
                this._isWindow
                    ? this._listenerTarget.scrollTo(0, Math.floor(this._position))
                    : this._container.scrollTop = Math.floor(this._position);
                this._lastPosition = this._position;
            }
        });
        this._tick = 16;
        this._interval = null;
        this._lastPosition = null;
        this._timeLapsed = 0;
        this._windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!this._container) {
            this._startPosition = this._windowScrollTop;
        }
        else {
            this._startPosition = this._isWindow ? this._windowScrollTop : this._container.scrollTop;
        }
        // Correction for Starting Position of nested HTML Elements
        if (this._container && !this._isWindow) {
            this._to = this._to - this._container.getBoundingClientRect().top + this._startPosition;
        }
        // Set Distance
        /** @type {?} */
        const directionalDistance = this._startPosition - this._to;
        this._distance = this._container ? Math.abs(this._startPosition - this._to) : this._to;
        this._mappedOffset = this._options.offset;
        // Set offset from Offset Map
        if (this._isBrowser) {
            this._options
                .offsetMap
                .forEach((/**
             * @param {?} value
             * @param {?} key
             * @return {?}
             */
            (value, key) => this._mappedOffset = window.innerWidth > key ? value : this._mappedOffset));
        }
        this._distance += this._mappedOffset * (directionalDistance <= 0 ? 1 : -1);
        this._source$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    /**
     * Start the new Scroll Animation.
     *
     * @return {?} Observable containing a number
     */
    start() {
        clearInterval(this._interval);
        this._interval = setInterval(this._loop, this._tick);
        return this._source$.asObservable();
    }
    /**
     * Stop the current Scroll Animation Loop.
     *
     * @return {?} Void
     */
    stop() {
        clearInterval(this._interval);
        this._interval = null;
        this._source$.complete();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The Scroll To Service handles starting, interrupting
 * and ending the actual Scroll Animation. It provides
 * some utilities to find the proper HTML Element on a
 * given page to setup Event Listeners and calculate
 * distances for the Animation.
 */
class ScrollToService {
    /**
     * Construct and setup required paratemeters.
     *
     * @param {?} _document         A Reference to the Document
     * @param {?} _platformId       Angular Platform ID
     */
    constructor(_document, _platformId) {
        this._document = _document;
        this._platformId = _platformId;
        this._interruptiveEvents = ['mousewheel', 'DOMMouseScroll', 'touchstart'];
    }
    /**
     * Target an Element to scroll to. Notice that the `TimeOut` decorator
     * ensures the executing to take place in the next Angular lifecycle.
     * This allows for scrolling to elements that are e.g. initially hidden
     * by means of `*ngIf`, but ought to be scrolled to eventually.
     *
     * \@todo type 'any' in Observable should become custom type like 'ScrollToEvent' (base class), see issue comment:
     * 	- https://github.com/nicky-lenaers/ngx-scroll-to/issues/10#issuecomment-317198481
     *
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    scrollTo(options) {
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId))
            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]().asObservable();
        return this._start(options);
    }
    /**
     * Start a new Animation.
     *
     * \@todo Emit proper events from subscription
     *
     * @private
     * @param {?} options         Configuration Object
     * @return {?} Observable
     */
    _start(options) {
        // Merge config with default values
        /** @type {?} */
        const mergedConfigOptions = (/** @type {?} */ (Object.assign({}, (/** @type {?} */ (DEFAULTS)), options)));
        if (this._animation)
            this._animation.stop();
        /** @type {?} */
        const targetNode = this._getNode(mergedConfigOptions.target);
        if (mergedConfigOptions.target && !targetNode)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Target Element');
        /** @type {?} */
        const container = this._getContainer(mergedConfigOptions, targetNode);
        if (mergedConfigOptions.container && !container)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Unable to find Container Element');
        /** @type {?} */
        const listenerTarget = this._getListenerTarget(container) || window;
        /** @type {?} */
        let to = container ? container.getBoundingClientRect().top : 0;
        if (targetNode) {
            to = isWindow(listenerTarget) ? targetNode.offsetTop : targetNode.getBoundingClientRect().top;
        }
        // Create Animation
        this._animation = new ScrollToAnimation(container, listenerTarget, isWindow(listenerTarget), to, mergedConfigOptions, Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId));
        /** @type {?} */
        const onInterrupt = (/**
         * @return {?}
         */
        () => this._animation.stop());
        this._addInterruptiveEventListeners(listenerTarget, onInterrupt);
        // Start Animation
        /** @type {?} */
        const animation$ = this._animation.start();
        this._subscribeToAnimation(animation$, listenerTarget, onInterrupt);
        return animation$;
    }
    /**
     * Subscribe to the events emitted from the Scrolling
     * Animation. Events might be used for e.g. unsubscribing
     * once finished.
     *
     * @private
     * @param {?} animation$              The Animation Observable
     * @param {?} listenerTarget          The Listener Target for events
     * @param {?} onInterrupt             The handler for Interruptive Events
     * @return {?} Void
     */
    _subscribeToAnimation(animation$, listenerTarget, onInterrupt) {
        /** @type {?} */
        const subscription = animation$
            .subscribe((/**
         * @return {?}
         */
        () => { }), (/**
         * @return {?}
         */
        () => { }), (/**
         * @return {?}
         */
        () => {
            this._removeInterruptiveEventListeners(this._interruptiveEvents, listenerTarget, onInterrupt);
            subscription.unsubscribe();
        }));
    }
    /**
     * Get the container HTML Element in which
     * the scrolling should happen.
     *
     * @private
     * @param {?} options         The Merged Configuration Object
     * @param {?} targetNode    the targeted HTMLElement
     * @return {?}
     */
    _getContainer(options, targetNode) {
        /** @type {?} */
        let container = null;
        if (options.container) {
            container = this._getNode(options.container, true);
        }
        else if (targetNode) {
            container = this._getFirstScrollableParent(targetNode);
        }
        return container;
    }
    /**
     * Add listeners for the Animation Interruptive Events
     * to the Listener Target.
     *
     * @private
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    _addInterruptiveEventListeners(listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        this._interruptiveEvents
            .forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => listenerTarget
            .addEventListener(event, handler, this._supportPassive() ? { passive: true } : false)));
    }
    /**
     * Feature-detect support for passive event listeners.
     *
     * @private
     * @return {?} Whether or not passive event listeners are supported
     */
    _supportPassive() {
        /** @type {?} */
        let supportsPassive = false;
        try {
            /** @type {?} */
            const opts = Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                function () {
                    supportsPassive = true;
                })
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        }
        catch (e) { }
        return supportsPassive;
    }
    /**
     * Remove listeners for the Animation Interrupt Event from
     * the Listener Target. Specifying the correct handler prevents
     * memory leaks and makes the allocated memory available for
     * Garbage Collection.
     *
     * @private
     * @param {?} events            List of Interruptive Events to remove
     * @param {?} listenerTarget    Target to attach the listener on
     * @param {?} handler           Handler for when the listener fires
     * @return {?} Void
     */
    _removeInterruptiveEventListeners(events, listenerTarget, handler) {
        if (!listenerTarget)
            listenerTarget = window;
        events.forEach((/**
         * @param {?} event
         * @return {?}
         */
        event => listenerTarget.removeEventListener(event, handler)));
    }
    /**
     * Find the first scrollable parent Node of a given
     * Element. The DOM Tree gets searched upwards
     * to find this first scrollable parent. Parents might
     * be ignored by CSS styles applied to the HTML Element.
     *
     * @private
     * @param {?} nativeElement     The Element to search the DOM Tree upwards from
     * @return {?} The first scrollable parent HTML Element
     */
    _getFirstScrollableParent(nativeElement) {
        /** @type {?} */
        let style = window.getComputedStyle(nativeElement);
        /** @type {?} */
        const overflowRegex = /(auto|scroll|overlay)/;
        if (style.position === 'fixed')
            return null;
        for (let parent = nativeElement; parent = parent.parentElement; null) {
            style = window.getComputedStyle(parent);
            if (style.position === 'absolute'
                || style.overflow === 'hidden'
                || style.overflowY === 'hidden')
                continue;
            if (overflowRegex.test(style.overflow + style.overflowY)
                || parent.tagName === 'BODY')
                return parent;
        }
        return null;
    }
    /**
     * Get the Target Node to scroll to.
     *
     * @private
     * @param {?} id              The given ID of the node, either a string or
     *                        an element reference
     * @param {?=} allowBodyTag    Indicate whether or not the Document Body is
     *                        considered a valid Target Node
     * @return {?} The Target Node to scroll to
     */
    _getNode(id, allowBodyTag = false) {
        /** @type {?} */
        let targetNode;
        if (isString(id)) {
            if (allowBodyTag && (id === 'body' || id === 'BODY')) {
                targetNode = this._document.body;
            }
            else {
                targetNode = this._document.getElementById(stripHash(id));
            }
        }
        else if (isNumber(id)) {
            targetNode = this._document.getElementById(String(id));
        }
        else if (isElementRef(id)) {
            targetNode = id.nativeElement;
        }
        else if (isNativeElement(id)) {
            targetNode = id;
        }
        return targetNode;
    }
    /**
     * Retrieve the Listener target. This Listener Target is used
     * to attach Event Listeners on. In case of the target being
     * the Document Body, we need the actual `window` to listen
     * for events.
     *
     * @private
     * @param {?} container           The HTML Container element
     * @return {?} The Listener Target to attach events on
     */
    _getListenerTarget(container) {
        if (!container)
            return null;
        return this._isDocumentBody(container) ? window : container;
    }
    /**
     * Test if a given HTML Element is the Document Body.
     *
     * @private
     * @param {?} element             The given HTML Element
     * @return {?} Whether or not the Element is the
     *                            Document Body Element
     */
    _isDocumentBody(element) {
        return element.tagName.toUpperCase() === 'BODY';
    }
}
ScrollToService.ɵfac = function ScrollToService_Factory(t) { return new (t || ScrollToService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])); };
ScrollToService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ScrollToService, factory: ScrollToService.ɵfac });
/** @nocollapse */
ScrollToService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScrollToService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
class ScrollToDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _scrollToService
     * @param {?} _renderer2
     */
    constructor(_elementRef, _scrollToService, _renderer2) {
        this._elementRef = _elementRef;
        this._scrollToService = _scrollToService;
        this._renderer2 = _renderer2;
        this.ngxScrollTo = DEFAULTS.target;
        this.ngxScrollToEvent = DEFAULTS.action;
        this.ngxScrollToDuration = DEFAULTS.duration;
        this.ngxScrollToEasing = DEFAULTS.easing;
        this.ngxScrollToOffset = DEFAULTS.offset;
        this.ngxScrollToOffsetMap = DEFAULTS.offsetMap;
    }
    /**
     * Angular Lifecycle Hook - After View Init
     *
     * \@todo Implement Subscription for Events
     *
     * @return {?} void
     */
    ngAfterViewInit() {
        // Test Event Support
        if (EVENTS.indexOf(this.ngxScrollToEvent) === -1)
            throw new Error(`Unsupported Event '${this.ngxScrollToEvent}'`);
        // Listen for the trigger...
        this._renderer2.listen(this._elementRef.nativeElement, this.ngxScrollToEvent, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._options = {
                target: this.ngxScrollTo,
                duration: this.ngxScrollToDuration,
                easing: this.ngxScrollToEasing,
                offset: this.ngxScrollToOffset,
                offsetMap: this.ngxScrollToOffsetMap
            };
            this._scrollToService.scrollTo(this._options);
        }));
    }
}
ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) { return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ScrollToService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ScrollToDirective, selectors: [["", "ngx-scroll-to", ""]], inputs: { ngxScrollTo: ["ngx-scroll-to", "ngxScrollTo"], ngxScrollToEvent: ["ngx-scroll-to-event", "ngxScrollToEvent"], ngxScrollToDuration: ["ngx-scroll-to-duration", "ngxScrollToDuration"], ngxScrollToEasing: ["ngx-scroll-to-easing", "ngxScrollToEasing"], ngxScrollToOffset: ["ngx-scroll-to-offset", "ngxScrollToOffset"], ngxScrollToOffsetMap: ["ngx-scroll-to-offset-map", "ngxScrollToOffsetMap"] } });
/** @nocollapse */
ScrollToDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ScrollToService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
ScrollToDirective.propDecorators = {
    ngxScrollTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to',] }],
    ngxScrollToEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-event',] }],
    ngxScrollToDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-duration',] }],
    ngxScrollToEasing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-easing',] }],
    ngxScrollToOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-offset',] }],
    ngxScrollToOffsetMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['ngx-scroll-to-offset-map',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScrollToDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngx-scroll-to]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: ScrollToService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }]; }, { ngxScrollTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to']
        }], ngxScrollToEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to-event']
        }], ngxScrollToDuration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to-duration']
        }], ngxScrollToEasing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to-easing']
        }], ngxScrollToOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to-offset']
        }], ngxScrollToOffsetMap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngx-scroll-to-offset-map']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Scroll To Module
 */
class ScrollToModule {
    /**
     * Guaranteed singletons for provided Services across App.
     *
     * @return {?} An Angular Module with Providers
     */
    static forRoot() {
        return {
            ngModule: ScrollToModule,
            providers: [
                ScrollToService
            ]
        };
    }
}
ScrollToModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ScrollToModule });
ScrollToModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ScrollToModule_Factory(t) { return new (t || ScrollToModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScrollToModule, { declarations: [ScrollToDirective], exports: [ScrollToDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ScrollToModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    ScrollToDirective
                ],
                exports: [
                    ScrollToDirective
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=nicky-lenaers-ngx-scroll-to.js.map

/***/ }),

/***/ "./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js ***!
  \******************************************************************************************/
/*! exports provided: NguCarousel, NguCarouselConfig, NguCarouselModule, NguCarouselStore, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return NguCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselConfig", function() { return NguCarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return NguCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return NguCarouselStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NguButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return NguCarouselPointDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return NguCarouselDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return NguCarouselOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NguItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return NguTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








const _c0 = ["ngucarousel"];
const _c1 = ["nguItemsContainer"];
const _c2 = ["touchContainer"];
const _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
const _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
const _c5 = ["*"];
class NguCarouselStore {
    constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
}
class ItemsControl {
}
class Vertical {
}
class NguButton {
}
class Touch {
}
class Transfrom {
    constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
    }
}
class NguCarouselConfig {
}
class NguCarouselOutletContext {
    constructor(data) {
        this.$implicit = data;
    }
}

let NguCarouselItemDirective = class NguCarouselItemDirective {
};
NguCarouselItemDirective.ɵfac = function NguCarouselItemDirective_Factory(t) { return new (t || NguCarouselItemDirective)(); };
NguCarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselItemDirective, selectors: [["", "NguCarouselItem", ""]] });
let NguCarouselNextDirective = class NguCarouselNextDirective {
};
NguCarouselNextDirective.ɵfac = function NguCarouselNextDirective_Factory(t) { return new (t || NguCarouselNextDirective)(); };
NguCarouselNextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselNextDirective, selectors: [["", "NguCarouselNext", ""]] });
let NguCarouselPrevDirective = class NguCarouselPrevDirective {
};
NguCarouselPrevDirective.ɵfac = function NguCarouselPrevDirective_Factory(t) { return new (t || NguCarouselPrevDirective)(); };
NguCarouselPrevDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselPrevDirective, selectors: [["", "NguCarouselPrev", ""]] });
let NguCarouselPointDirective = class NguCarouselPointDirective {
};
NguCarouselPointDirective.ɵfac = function NguCarouselPointDirective_Factory(t) { return new (t || NguCarouselPointDirective)(); };
NguCarouselPointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselPointDirective, selectors: [["", "NguCarouselPoint", ""]] });
let NguCarouselDefDirective = class NguCarouselDefDirective {
    constructor(template) {
        this.template = template;
    }
};
NguCarouselDefDirective.ɵfac = function NguCarouselDefDirective_Factory(t) { return new (t || NguCarouselDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
NguCarouselDefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselDefDirective, selectors: [["", "nguCarouselDef", ""]] });
NguCarouselDefDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
];
let NguCarouselOutlet = 
// tslint:disable-next-line:directive-class-suffix
class NguCarouselOutlet {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
};
NguCarouselOutlet.ɵfac = function NguCarouselOutlet_Factory(t) { return new (t || NguCarouselOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
NguCarouselOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NguCarouselOutlet, selectors: [["", "nguCarouselOutlet", ""]] });
NguCarouselOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];

let NguCarousel = 
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.withAnim = true;
        this.isHovered = false;
        this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._intervalController$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pointNumbers = [];
    }
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(data) {
        if (data) {
            // console.log(data, this.dataSource);
            // this.isFirstss++;
            this._switchDataSource(data);
        }
    }
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(1));
        }
    }
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(0));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["isDevMode"])() &&
            fn != null &&
            typeof fn !== 'function' &&
            console &&
            console.warn) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    ngOnInit() {
        this._dataDiffer = this._differs
            .find([])
            .create((_i, item) => {
            return this.trackBy ? this.trackBy(item.dataIndex, item.data) : item;
        });
    }
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            // console.log('Changes detected!');
            this._observeRenderChanges();
        }
    }
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    _observeRenderChanges() {
        let dataStream;
        if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._intervalController$))
                .subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            });
        }
    }
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            // const node = this._defDirec.find(items => item.item);
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
        // console.log(this.dataSource);
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateItemIndexContext() {
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    _getNodeDef(data, i) {
        // console.log(this._defDirec);
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        const nodeDef = this._defDirec.find(def => def.when && def.when(i, data)) ||
            this._defaultNodeDef;
        return nodeDef;
    }
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        // this._buttonControl();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', event => {
                this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    }
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    _inputValidation() {
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity =
            typeof this.inputs.velocity === 'number'
                ? this.inputs.velocity
                : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    }
    ngOnDestroy() {
        // clearInterval(this.carouselInt);
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        for (let i = 1; i <= 4; i++) {
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout(() => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }, 500);
    }
    /** Get Touch input */
    _touch() {
        if (this.inputs.touch) {
            const hammertime = new Hammer(this.touchContainer.nativeElement);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', (ev) => {
                this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                this.touchTransform = this.transform[this.deviceType];
                this.dexVal = 0;
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
            });
            if (this.vertical.enabled) {
                hammertime.on('panup', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('pandown', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', (ev) => {
                    this._touchHandling('panleft', ev);
                });
                hammertime.on('panright', (ev) => {
                    this._touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', (ev) => {
                if (Math.abs(ev.velocity) >= this.velocity) {
                    this.touch.velocity = ev.velocity;
                    let direc = 0;
                    if (!this.RTL) {
                        direc = this.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = this.touch.swipe === 'panright' ? 1 : 0;
                    }
                    this._carouselScrollOne(direc);
                }
                else {
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    }
    /** handle touch input */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        let valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    }
    _setTouchTransfrom(e, valt) {
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform =
            e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        const type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /** this fn used to disable the interval when it is not on the viewport */
    _onWindowScrolling() {
        const top = this.carousel.offsetTop;
        const scrollY = window.scrollY;
        const heightt = window.innerHeight;
        const carouselHeight = this.carousel.offsetHeight;
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /** store data based on width of the screen for the carousel */
    _storeCarouselData() {
        this.deviceWidth = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)
            ? window.innerWidth
            : 1200;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= 1200
                    ? 'lg'
                    : this.deviceWidth >= 992
                        ? 'md'
                        : this.deviceWidth >= 768
                            ? 'sm'
                            : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items
            ? this.inputs.slide
            : this.items);
        this.load =
            this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed =
            this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    }
    /** Used to reset the carousel */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /** Init carousel point */
    _carouselPoint() {
        // debugger;
        // if (this.userData.point.visible === true) {
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        // console.log(this.pointNumbers);
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
        // }
    }
    /** change the active point in carousel */
    _carouselPointActiver() {
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        // console.log(this.data);
        this.cdr.markForCheck();
    }
    /** this function is used to scoll the carousel when point is clicked */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            let slideremains;
            const btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    }
    /** set the style of the carousel based the inputs data */
    _carouselSize() {
        this.token = this._generateID();
        let dism = '';
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        let itemStyle = '';
        if (this.vertical.enabled) {
            const itemWidth_xs = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.xs}px}`;
            const itemWidth_sm = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.sm}px}`;
            const itemWidth_md = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.md}px}`;
            const itemWidth_lg = `${this.styleid} > .item {height: ${this.vertical
                .height / +this.inputs.grid.lg}px}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else if (this.type === 'responsive') {
            const itemWidth_xs = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 /
                    +this.inputs.grid.xs}%; width: ${95 / +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 /
                    +this.inputs.grid.xs}%; width: ${100 / +this.inputs.grid.xs}%;}`;
            const itemWidth_sm = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            const itemWidth_md = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            const itemWidth_lg = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            itemStyle = `@media (max-width:767px){${itemWidth_xs}}
                    @media (min-width:768px){${itemWidth_sm}}
                    @media (min-width:992px){${itemWidth_md}}
                    @media (min-width:1200px){${itemWidth_lg}}`;
        }
        else {
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL &&
            !this.vertical.enabled &&
            this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /** logic to scroll the carousel step 1 */
    _carouselScrollOne(Btn) {
        let itemSpeed = this.speed;
        let translateXval, currentSlide = 0;
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            const slide = this.slideItems * this.pointIndex;
            const currentSlideD = this.currentSlide - this.slideItems;
            const MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <=
                this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide =
                        this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    }
    /** logic to scroll the carousel step 2 */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            const val = Math.abs(this.touch.velocity);
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        // console.log(this.dataSource);
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
        // if (currentSlide === 12) {
        //   this._switchDataSource(this.dataSource);
        // }
    }
    /** boolean function for making isFirst and isLast */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    _transformString(grid, slide) {
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] =
                (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /** set the transform style to scroll the carousel  */
    _transformStyle(slide) {
        let slideCss = '';
        if (this.type === 'responsive') {
            slideCss = `@media (max-width: 767px) {${this._transformString('xs', slide)}}
      @media (min-width: 768px) {${this._transformString('sm', slide)} }
      @media (min-width: 992px) {${this._transformString('md', slide)} }
      @media (min-width: 1200px) {${this._transformString('lg', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.innerHTML = slideCss;
    }
    /** this will trigger the carousel to load the items */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /** generate Class for each carousel to set specific style */
    _generateID() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /** handle the auto slide */
    _carouselInterval() {
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout(() => {
                    this._onWindowScrolling();
                }, 600);
            });
            const play$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(container, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(1));
            const pause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(container, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(0));
            const touchPlay$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(container, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(1));
            const touchPause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(container, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(0));
            const interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.inputs.interval.timing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(1));
            setTimeout(() => {
                this.carouselInt = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
                }))
                    .subscribe(res => {
                    this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    }
    _updateItemIndexContextAni() {
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /** animate the carousel items */
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                const viewRef = viewContainer.get(i);
                const context = viewRef.context;
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                const viewRef = viewContainer.get(i);
                const context = viewRef.context;
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(() => {
            this._removeAnimations(collectIndex);
        }, speed * 0.7);
    }
    _removeAnimations(indexs) {
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(i => {
            const viewRef = viewContainer.get(i);
            const context = viewRef.context;
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    }
    /** Short form for setElementStyle */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /** For generating style tag */
    _createStyleElem(datas) {
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
};
NguCarousel.ɵfac = function NguCarousel_Factory(t) { return new (t || NguCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NguCarousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NguCarousel, selectors: [["ngu-carousel"]], contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NguCarouselNextDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NguCarouselPrevDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NguCarouselDefDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._defDirec = _t);
    } }, viewQuery: function NguCarousel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](NguCarouselOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carouselMain1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nguItemsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.touchContainer = _t.first);
    } }, inputs: { dataSource: "dataSource", trackBy: "trackBy", inputs: "inputs" }, outputs: { carouselLoad: "carouselLoad", onMove: "onMove" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 11, vars: 0, consts: [[1, "ngucarousel"], ["ngucarousel", ""], [1, "ngu-touch-container"], ["touchContainer", ""], [1, "ngucarousel-items"], ["nguItemsContainer", ""], ["nguCarouselOutlet", ""], [1, "nguclearFix"]], template: function NguCarousel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10, 2);
    } }, directives: [NguCarouselOutlet], styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex;height:100%}.nguvertical[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{position:absolute;width:100%;bottom:20px}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(255,255,255,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;-webkit-transition:.4s;transition:.4s}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"], changeDetection: 0 });
NguCarousel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('inputs')
], NguCarousel.prototype, "inputs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('carouselLoad')
], NguCarousel.prototype, "carouselLoad", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('onMove')
], NguCarousel.prototype, "onMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('dataSource')
], NguCarousel.prototype, "dataSource", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(NguCarouselDefDirective)
], NguCarousel.prototype, "_defDirec", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(NguCarouselOutlet, { static: true })
], NguCarousel.prototype, "_nodeOutlet", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"])(NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] })
], NguCarousel.prototype, "nextBtn", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"])(NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] })
], NguCarousel.prototype, "prevBtn", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true })
], NguCarousel.prototype, "carouselMain1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true })
], NguCarousel.prototype, "nguItemsContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true })
], NguCarousel.prototype, "touchContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], NguCarousel.prototype, "trackBy", null);
NguCarousel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]))
], NguCarousel);

let NguItemComponent = class NguItemComponent {
    constructor() {
        this.classes = true;
    }
};
NguItemComponent.ɵfac = function NguItemComponent_Factory(t) { return new (t || NguItemComponent)(); };
NguItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NguItemComponent, selectors: [["ngu-item"]], hostVars: 2, hostBindings: function NguItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function NguItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
    } }, styles: [""] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.item')
], NguItemComponent.prototype, "classes", void 0);

let NguTileComponent = class NguTileComponent {
    constructor() {
        this.classes = true;
    }
};
NguTileComponent.ɵfac = function NguTileComponent_Factory(t) { return new (t || NguTileComponent)(); };
NguTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NguTileComponent, selectors: [["ngu-tile"]], hostVars: 2, hostBindings: function NguTileComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 2, vars: 0, consts: [[1, "tile"]], template: function NguTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{padding:10px;box-sizing:border-box}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class.item')
], NguTileComponent.prototype, "classes", void 0);

let NguCarouselModule = class NguCarouselModule {
};
NguCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NguCarouselModule });
NguCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NguCarouselModule_Factory(t) { return new (t || NguCarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselNextDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselPrevDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselPointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselDefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarousel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-carousel',
                template: "<div #ngucarousel class=\"ngucarousel\">\n  <div #touchContainer class=\"ngu-touch-container\">\n    <div #nguItemsContainer class=\"ngucarousel-items\">\n      <ng-container nguCarouselOutlet></ng-container>\n    </div>\n  </div>\n  <div class=\"nguclearFix\"></div>\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\n</div>\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{position:relative;overflow:hidden;height:100%}.ngucarousel .ngucarousel-items{position:relative;display:-webkit-box;display:flex;height:100%}.nguvertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{position:absolute;width:100%;bottom:20px}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:rgba(255,255,255,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{list-style-type:none;text-align:center;padding:12px;margin:0;white-space:nowrap;overflow:auto;box-sizing:border-box}.ngucarouselPointDefault .ngucarouselPoint li{display:inline-block;border-radius:50%;background:rgba(0,0,0,.55);padding:4px;margin:0 4px;-webkit-transition:.4s;transition:.4s}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;-webkit-transform:scale(1.8);transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { carouselLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['carouselLoad']
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['onMove']
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['dataSource']
        }], nextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]
        }], prevBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]
        }], trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['inputs']
        }], _defDirec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NguCarouselDefDirective]
        }], _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [NguCarouselOutlet, { static: true }]
        }], carouselMain1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], nguItemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], touchContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-item',
                template: "<ng-content></ng-content>\n",
                styles: [""]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.item']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngu-tile',
                template: "<div class=\"tile\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host{padding:10px;box-sizing:border-box}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ['class.item']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NguCarouselModule, { declarations: function () { return [NguCarousel,
        NguItemComponent,
        NguTileComponent,
        NguCarouselPointDirective,
        NguCarouselItemDirective,
        NguCarouselNextDirective,
        NguCarouselPrevDirective,
        NguCarouselDefDirective,
        NguCarouselOutlet]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NguCarousel,
        NguItemComponent,
        NguTileComponent,
        NguCarouselPointDirective,
        NguCarouselItemDirective,
        NguCarouselNextDirective,
        NguCarouselPrevDirective,
        NguCarouselDefDirective,
        NguCarouselOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NguCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ],
                declarations: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of carousel
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=stockopedia-carousel.js.map

/***/ }),

/***/ "./src/app/pages/landing/contact-us/contact-us.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/landing/contact-us/contact-us.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");













function ContactUsComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactUsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 59, vars: 14, consts: [["id", "contact", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"], [1, "secondary-text-color"], ["fxLayout", "row wrap", "fxLayoutAlign", "center"], ["fxFlex", "100", "fxFlex.gt-xs", "50", 1, "p-2"], [1, "contact-form", "p-4"], [1, "secondary-text-color", "title"], ["fxLayout", "row wrap", 3, "formGroup", "ngSubmit"], ["fxFlex", "100", 1, "mt-2"], [1, "w-100"], ["matInput", "", "placeholder", "Name", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Email", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Phone", "formControlName", "phone", "required", ""], ["matInput", "", "placeholder", "Message", "formControlName", "message", "required", ""], [1, "w-100", "py-4", "text-center"], ["mat-raised-button", "", "color", "accent", "type", "submit", 1, "send"], [1, "mr-2"], [1, "p-0"], [1, "secondary-text-color", "p-4"], ["fxLayout", "row", 1, "py-2"], ["viewBox", "0 0 24 24", 1, "mat-icon", "mr-2"], ["d", "M18,6C20.07,8.04 20.85,10.89 20.36,13.55C20.77,14.27 21,15.11 21,16A5,5 0 0,1 16,21C15.11,21 14.27,20.77 13.55,20.36C10.89,20.85 8.04,20.07 6,18C3.93,15.96 3.15,13.11 3.64,10.45C3.23,9.73 3,8.89 3,8A5,5 0 0,1 8,3C8.89,3 9.73,3.23 10.45,3.64C13.11,3.15 15.96,3.93 18,6M12.04,17.16C14.91,17.16 16.34,15.78 16.34,13.92C16.34,12.73 15.78,11.46 13.61,10.97L11.62,10.53C10.86,10.36 10,10.13 10,9.42C10,8.7 10.6,8.2 11.7,8.2C13.93,8.2 13.72,9.73 14.83,9.73C15.41,9.73 15.91,9.39 15.91,8.8C15.91,7.43 13.72,6.4 11.86,6.4C9.85,6.4 7.7,7.26 7.7,9.54C7.7,10.64 8.09,11.81 10.25,12.35L12.94,13.03C13.75,13.23 13.95,13.68 13.95,14.1C13.95,14.78 13.27,15.45 12.04,15.45C9.63,15.45 9.96,13.6 8.67,13.6C8.09,13.6 7.67,14 7.67,14.57C7.67,15.68 9,17.16 12.04,17.16Z"], [3, "latitude", "longitude", "zoom", "mapTypeControl", "fullscreenControl"], [3, "latitude", "longitude", "markerDraggable"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Feel free to drop us a line and We'll get back to you in 24 hours min!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send us an email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_11_listener($event) { return ctx.onContactFormSubmit(ctx.contactForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactUsComponent_mat_error_15_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactUsComponent_mat_error_19_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactUsComponent_mat_error_20_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactUsComponent_mat_error_24_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContactUsComponent_mat_error_28_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "mail_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "emilio.verdines@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(212) 457-2308");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "emilio.verdines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2903 Avenue Z, Brooklyn, NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "agm-map", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "agm-marker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.name.errors == null ? null : ctx.contactForm.controls.name.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.email.errors == null ? null : ctx.contactForm.controls.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.email.hasError("invalidEmail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.phone.errors == null ? null : ctx.contactForm.controls.phone.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.controls.message.errors == null ? null : ctx.contactForm.controls.message.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", ctx.zoom)("mapTypeControl", true)("fullscreenControl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("markerDraggable", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmMarker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".contact-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 500;\n}\n.contact-form[_ngcontent-%COMP%]   button.send[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\nagm-map[_ngcontent-%COMP%] {\n  height: 225px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9jb250YWN0LXVzL0Q6XFxwYXJybGVsIHBvcnRmb2xpb1xcdGhlbWVmb3Jlc3QtMVp2cmtBTkstYW5udWxhci1hbmd1bGFyLW1hdGVyaWFsLWRlc2lnbi1hZG1pbi10ZW1wbGF0ZVxcYW5udWxhclxcYW5udWxhci9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSx5QkFBQTtBQ0FSO0FESUE7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWZvcm17ICAgIFxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLnNlbmR7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgaGVpZ2h0OiAyMjVweDtcclxufSIsIi5jb250YWN0LWZvcm0gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbnRhY3QtZm9ybSBidXR0b24uc2VuZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDIyNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/features/features.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing/features/features.component.ts ***!
  \**************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






class FeaturesComponent {
    constructor(landingService) {
        this.landingService = landingService;
    }
    ngOnInit() {
        this.features = this.landingService.getFeatures();
    }
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) { return new (t || FeaturesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_1__["LandingService"])); };
FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturesComponent, selectors: [["app-features"]], decls: 55, vars: 0, consts: [["id", "features", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100"], ["fxFlex", "120", "fxFlex.gt-md", "25", "fxFlex.md", "33.3", "fxFlex.sm", "50", 1, "p-2"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-100", "positionLeft"], ["src", "assets/icons/explore3.svg"], [1, "block-title", "my-3", 2, "text-align", "center"], [1, "text-center", "text"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-100", "middle"], ["src", "assets/icons/graph.svg"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-100", "positionRight"], ["src", "assets/icons/arena.svg"], ["src", "assets/icons/idea.svg"], ["src", "assets/icons/rec.svg"], ["src", "assets/icons/micro.svg"]], template: function FeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OUR SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Explore Trading Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Be part of an interactive trading community. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "FUNDAMENTALS & CHARTING TOOLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Do you fundamental and technical analysis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Trading Arena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Prove your skills by competing against other traders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Trading Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Create your own chat room to present your trading ideas that other traders can subscribe to. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Recruitment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Utilise recruitment facilities to plan your future ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Vlogs & Podcasts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Watch what other traders are getting up to. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], styles: [".positionLeft[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  place-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: 0px;\n  height: 45vh;\n}\n\n.positionRight[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  place-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 45vh;\n}\n\n.middle[_ngcontent-%COMP%] {\n  height: 45vh;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  margin-bottom: 16px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9mZWF0dXJlcy9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxmZWF0dXJlc1xcZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsWUFBQTtBQ0FKOztBREVBO0VBQ0ksNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFFQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb25MZWZ0e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgLy8gcmlnaHQ6IDV2dztcclxuICAgIGhlaWdodDogNDV2aDtcclxufVxyXG4ucG9zaXRpb25SaWdodHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG59XHJcbi5taWRkbGV7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbn1cclxuLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn0iLCIucG9zaXRpb25MZWZ0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiA0NXZoO1xufVxuXG4ucG9zaXRpb25SaWdodCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0NXZoO1xufVxuXG4ubWlkZGxlIHtcbiAgaGVpZ2h0OiA0NXZoO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-features',
                templateUrl: './features.component.html',
                styleUrls: ['./features.component.scss']
            }]
    }], function () { return [{ type: _landing_service__WEBPACK_IMPORTED_MODULE_1__["LandingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/features.component */ "./src/app/pages/landing/features/features.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/landing/pricing/pricing.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/pages/landing/contact-us/contact-us.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");


















function LandingComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r433 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngx-scroll-to", item_r433)("ngx-scroll-to-duration", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r433);
} }
function LandingComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_button_18_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r436); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r431.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r434 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngx-scroll-to", item_r434)("ngx-scroll-to-duration", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r434);
} }
class LandingComponent {
    constructor(appSettings, landingService) {
        this.appSettings = appSettings;
        this.landingService = landingService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.menuItems = this.landingService.getMenuItems();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.settings.loadingSpinner = false;
        });
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 40, vars: 2, consts: [[1, "landing-toolbar", "mat-elevation-z4"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["routerLink", "/", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "logo"], ["src", "assets/img/logo.png", "alt", "logo"], [1, "mx-2"], ["fxShow", "false", "fxShow.gt-sm", ""], ["mat-button", "", "class", "mx-1", 3, "ngx-scroll-to", "ngx-scroll-to-duration", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "fxHide", "false", "fxHide.gt-sm", "", 1, "mx-3", 3, "click"], ["mat-raised-button", "", "color", "accent", "href", "https://themeforest.net/item/annular-angular-material-design-admin-template/22537089", "target", "blank"], [1, "landing-container", "h-100"], ["mode", "over", "autoFocus", "false", 1, "landing-sidenav", "mat-elevation-z6", "p-2"], ["sidenav", ""], ["mat-button", "", "class", "w-100", 3, "ngx-scroll-to", "ngx-scroll-to-duration", "click", 4, "ngFor", "ngForOf"], [1, "firstSection"], [2, "color", "white", "padding-top", "13vh"], [2, "color", "white"], [1, "button"], [2, "font-size", "1.5rem", "font-weight", "600"], [1, "p-2"], ["color", "primary", 1, "landing-footer", "mt-5"], ["fxLayout.xs", "column", "fxLayout.gt-xs", "row wrap", "fxLayoutAlign", "space-between center", 1, "w-100"], ["mat-button", "", "href", "https://themeforest.net/user/theme_season/portfolio", "target", "blank"], ["mat-button", "", 1, "mx-1", 3, "ngx-scroll-to", "ngx-scroll-to-duration"], ["mat-button", "", 1, "w-100", 3, "ngx-scroll-to", "ngx-scroll-to-duration", "click"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r437 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ANNULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LandingComponent_button_9_Template, 2, 3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r437); const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r431.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-drawer-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-drawer", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LandingComponent_button_18_Template, 2, 3, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "NEED FUNDS FOR TRADING?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "LOOK NO FURTHER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Join Parallel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-toolbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Copyright \u00A92018 All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "made by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "ThemeSeason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatDrawerContent"], _features_features_component__WEBPACK_IMPORTED_MODULE_11__["FeaturesComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"], _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["ContactUsComponent"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__["ScrollToDirective"]], styles: [".landing-toolbar {\n  position: fixed;\n  top: 0;\n  height: 56px !important;\n  z-index: 2;\n}\n.landing-toolbar button {\n  text-transform: capitalize;\n  font-weight: 400;\n}\n.landing-toolbar .logo {\n  min-width: 160px !important;\n}\n.landing-container {\n  margin-top: 56px;\n  padding-bottom: 56px;\n}\n.landing-container .landing-sidenav {\n  width: 200px;\n}\n.landing-container .landing-sidenav button {\n  text-transform: capitalize;\n}\n.landing-container .title-section {\n  font-size: 16px;\n  text-align: center;\n}\n.landing-container .block-title {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.landing-container .client-item {\n  height: 80px;\n  text-align: center;\n}\n.landing-container .client-item img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.landing-container .testimonial-item {\n  margin-top: 50px;\n  text-align: center;\n  overflow: visible;\n}\n.landing-container .testimonial-item .text {\n  font-style: italic;\n}\n.landing-container .testimonial-item img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin-top: -76px;\n}\n.landing-container #pricing {\n  min-height: 10px;\n}\n.landing-container .pricing-tabs.mat-tab-group .mat-tab-header {\n  width: 320px;\n  margin: 0 auto;\n  border-bottom: none !important;\n  margin-bottom: 16px;\n}\n.landing-container .pricing-card.mat-card {\n  padding: 0;\n  overflow: hidden;\n}\n.landing-container .pricing-card.mat-card .pricing-title {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.landing-container .pricing-card.mat-card .pricing-header {\n  min-height: 126px;\n}\n.landing-container .pricing-card.mat-card .pricing-header p.desc, .landing-container .pricing-card.mat-card .pricing-header small {\n  font-weight: 300;\n}\n.landing-container .pricing-card.mat-card .del {\n  text-decoration: line-through;\n}\n.landing-container .landing-footer {\n  width: 100%;\n  font-size: 14px;\n  font-weight: 400;\n  height: 68px !important;\n}\n.arrow-btn.mat-mini-fab {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n}\n.arrow-btn.mat-mini-fab.prev {\n  left: 12px;\n}\n.arrow-btn.mat-mini-fab.next {\n  right: 12px;\n}\n.arrow-btn.mat-mini-fab.hidden {\n  display: none !important;\n}\n.pricingCardText {\n  font-size: 17px;\n  font-weight: 500;\n  color: black;\n}\n.pricingBtn {\n  background: #3fe7ef !important;\n  padding-left: 30px !important;\n  padding-right: 30px !important;\n  padding-top: 3px !important;\n  padding-bottom: 3px !important;\n  font-size: 1.1rem !important;\n  color: white;\n}\n.firstSection {\n  text-align: center;\n  height: 50vh;\n  background: #3fe7ef;\n}\n.button {\n  background-color: white;\n  border: none;\n  color: black;\n  padding: 14px 45px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 30px;\n}\n@media screen and (max-width: 599px) {\n  .pricing-tabs.mat-tab-group .mat-tab-header {\n    width: 210px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9EOlxccGFycmxlbCBwb3J0Zm9saW9cXHRoZW1lZm9yZXN0LTFadnJrQU5LLWFubnVsYXItYW5ndWxhci1tYXRlcmlhbC1kZXNpZ24tYWRtaW4tdGVtcGxhdGVcXGFubnVsYXJcXGFubnVsYXIvc3JjXFxhcHBcXHBhZ2VzXFxsYW5kaW5nXFxsYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQUk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURBSTtFQUNJLDJCQUFBO0FDRVI7QURFQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERFE7RUFDSSwwQkFBQTtBQ0daO0FEQUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNFUjtBREFJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDR1o7QURBSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FERFE7RUFDSSxrQkFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHWjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREFJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERFE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDR1o7QUREUTtFQUNJLGlCQUFBO0FDR1o7QURGWTtFQUNJLGdCQUFBO0FDSWhCO0FERFE7RUFDSSw2QkFBQTtBQ0daO0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtBQ0VSO0FEQUk7RUFDSSxXQUFBO0FDRVI7QURBSTtFQUNJLHdCQUFBO0FDRVI7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNFSjtBREFBO0VBQ0ksOEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREE7RUFDSSxrQkFBQTtFQUFvQixZQUFBO0VBQWMsbUJBQUE7QUNNdEM7QURKQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNPSjtBREpBO0VBQ0k7SUFDSSxZQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXRvb2xiYXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICAgIC5sb2dve1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmxhbmRpbmctY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1NnB4O1xyXG4gICAgLmxhbmRpbmctc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICAgIC50aXRsZS1zZWN0aW9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYmxvY2stdGl0bGV7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmNsaWVudC1pdGVte1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRlc3RpbW9uaWFsLWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAgICAgICBcclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNzZweDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgI3ByaWNpbmd7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTBweDsgLy9mb3IgcHJldmVudCBzY3JvbGwgb24gdGFiIGNoYW5nZVxyXG4gICAgfVxyXG4gICAgLnByaWNpbmctdGFicy5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2luZy1jYXJkLm1hdC1jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAucHJpY2luZy10aXRsZXtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNpbmctaGVhZGVye1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjZweDtcclxuICAgICAgICAgICAgcC5kZXNjLCBzbWFsbHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfSBcclxuICAgIC5sYW5kaW5nLWZvb3RlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBoZWlnaHQ6IDY4cHggIWltcG9ydGFudDtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5hcnJvdy1idG4ubWF0LW1pbmktZmFie1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgJi5wcmV2e1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmLm5leHR7XHJcbiAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAmLmhpZGRlbntcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnByaWNpbmdDYXJkVGV4dHtcclxuICAgIGZvbnQtc2l6ZToxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnByaWNpbmdCdG57XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig2MywyMzEsMjM5KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcbi5maXJzdFNlY3Rpb257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogNTB2aDsgYmFja2dyb3VuZDogcmdiKDYzLDIzMSwyMzkpO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxuICBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHsgXHJcbiAgICAucHJpY2luZy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgIH0gIFxyXG59IiwiLmxhbmRpbmctdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgei1pbmRleDogMjtcbn1cbi5sYW5kaW5nLXRvb2xiYXIgYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubGFuZGluZy10b29sYmFyIC5sb2dvIHtcbiAgbWluLXdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFuZGluZy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubGFuZGluZy1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5sYW5kaW5nLXNpZGVuYXYgYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubGFuZGluZy1jb250YWluZXIgLnRpdGxlLXNlY3Rpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAuYmxvY2stdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5jbGllbnQtaXRlbSB7XG4gIGhlaWdodDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5jbGllbnQtaXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ubGFuZGluZy1jb250YWluZXIgLnRlc3RpbW9uaWFsLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC50ZXN0aW1vbmlhbC1pdGVtIC50ZXh0IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmxhbmRpbmctY29udGFpbmVyIC50ZXN0aW1vbmlhbC1pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAtNzZweDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAjcHJpY2luZyB7XG4gIG1pbi1oZWlnaHQ6IDEwcHg7XG59XG4ubGFuZGluZy1jb250YWluZXIgLnByaWNpbmctdGFicy5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWhlYWRlciB7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAucHJpY2luZy1jYXJkLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAucHJpY2luZy1jYXJkLm1hdC1jYXJkIC5wcmljaW5nLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAucHJpY2luZy1jYXJkLm1hdC1jYXJkIC5wcmljaW5nLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDEyNnB4O1xufVxuLmxhbmRpbmctY29udGFpbmVyIC5wcmljaW5nLWNhcmQubWF0LWNhcmQgLnByaWNpbmctaGVhZGVyIHAuZGVzYywgLmxhbmRpbmctY29udGFpbmVyIC5wcmljaW5nLWNhcmQubWF0LWNhcmQgLnByaWNpbmctaGVhZGVyIHNtYWxsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAucHJpY2luZy1jYXJkLm1hdC1jYXJkIC5kZWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5sYW5kaW5nLWNvbnRhaW5lciAubGFuZGluZy1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDY4cHggIWltcG9ydGFudDtcbn1cblxuLmFycm93LWJ0bi5tYXQtbWluaS1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4uYXJyb3ctYnRuLm1hdC1taW5pLWZhYi5wcmV2IHtcbiAgbGVmdDogMTJweDtcbn1cbi5hcnJvdy1idG4ubWF0LW1pbmktZmFiLm5leHQge1xuICByaWdodDogMTJweDtcbn1cbi5hcnJvdy1idG4ubWF0LW1pbmktZmFiLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnByaWNpbmdDYXJkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucHJpY2luZ0J0biB7XG4gIGJhY2tncm91bmQ6ICMzZmU3ZWYgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpcnN0U2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kOiAjM2ZlN2VmO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxNHB4IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAucHJpY2luZy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHtcbiAgICB3aWR0aDogMjEwcHg7XG4gIH1cbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/__ivy_ngcc__/fesm2015/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stockopedia/carousel */ "./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./monthly/monthly.component */ "./src/app/pages/landing/monthly/monthly.component.ts");
/* harmony import */ var _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./yearly/yearly.component */ "./src/app/pages/landing/yearly/yearly.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/landing/pricing/pricing.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/pages/landing/testimonials/testimonials.component.ts");
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./our-services/our-services.component */ "./src/app/pages/landing/our-services/our-services.component.ts");
/* harmony import */ var _our_works_our_works_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./our-works/our-works.component */ "./src/app/pages/landing/our-works/our-works.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/features.component */ "./src/app/pages/landing/features/features.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/pages/landing/contact-us/contact-us.component.ts");







// import { NguCarouselModule } from '@ngu/carousel';














const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], pathMatch: 'full' }
];
class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, providers: [
        _landing_service__WEBPACK_IMPORTED_MODULE_8__["LandingService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot(),
            _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_7__["NguCarouselModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
        _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_10__["MonthlyComponent"],
        _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_11__["YearlyComponent"],
        _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"],
        _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsComponent"],
        _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_14__["OurServicesComponent"],
        _our_works_our_works_component__WEBPACK_IMPORTED_MODULE_15__["OurWorksComponent"],
        _features_features_component__WEBPACK_IMPORTED_MODULE_16__["FeaturesComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_7__["NguCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
                    _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot(),
                    _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_7__["NguCarouselModule"]
                ],
                declarations: [
                    _landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"],
                    _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_10__["MonthlyComponent"],
                    _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_11__["YearlyComponent"],
                    _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"],
                    _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__["TestimonialsComponent"],
                    _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_14__["OurServicesComponent"],
                    _our_works_our_works_component__WEBPACK_IMPORTED_MODULE_15__["OurWorksComponent"],
                    _features_features_component__WEBPACK_IMPORTED_MODULE_16__["FeaturesComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]
                ],
                providers: [
                    _landing_service__WEBPACK_IMPORTED_MODULE_8__["LandingService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/landing/landing.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/landing/landing.service.ts ***!
  \**************************************************/
/*! exports provided: LandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingService", function() { return LandingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LandingService {
    constructor() {
    }
    getMenuItems() {
        return ['home', 'features', 'works', 'services', 'testimonials', 'pricing', 'contact'];
    }
    getFeatures() {
        return [
            {
                icon: 'cloud_upload',
                title: 'Instant Cloud',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'thumb_up',
                title: 'Better Ideas',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'trending_up',
                title: 'Performace',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'access_time',
                title: 'Time Tracker',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'desktop_windows',
                title: 'Desktop app',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'card_giftcard',
                title: 'Gift Voucher',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'report',
                title: 'Weekly Reports',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'add_shopping_cart',
                title: 'E-commerce',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            }
        ];
    }
    getServices() {
        return [
            {
                icon: 'computer',
                title: 'Web Development',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'palette',
                title: 'Web Design',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'photo_camera',
                title: 'Photography',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'queue_music',
                title: 'Music Writting',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'volume_up',
                title: 'Advertising',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            {
                icon: 'contact_support',
                title: '24/7 Support',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            }
        ];
    }
    getWorks() {
        return [
            { name: 'Project 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1522199670076-2852f80289c3?w=650' },
            { name: 'Project 2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=650' },
            { name: 'Project 3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=650' },
            { name: 'Project 4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=650' },
            { name: 'Project 5', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1422480041422-130238c67fe2?w=650' },
            { name: 'Project 6', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?w=650' }
        ];
    }
    getClients() {
        return [
            'assets/img/clients/dream.png',
            'assets/img/clients/congrats.png',
            'assets/img/clients/best.png',
            'assets/img/clients/original.png',
            'assets/img/clients/king.png',
            'assets/img/clients/love.png',
            'assets/img/clients/the.png',
            'assets/img/clients/easter.png',
            'assets/img/clients/with.png',
            'assets/img/clients/special.png',
            'assets/img/clients/bravo.png'
        ];
    }
    getTestimonials() {
        return [
            {
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
                author: 'Mr. Adam Sandler',
                company: 'General Electric',
                image: 'assets/img/profile/adam.jpg'
            },
            {
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
                author: 'Mrs. Ashley Ahlberg',
                company: 'Dell EMC',
                image: 'assets/img/profile/ashley.jpg'
            },
            {
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
                author: 'Mr. Bruno Vespa',
                company: 'Southwest Airlines',
                image: 'assets/img/profile/bruno.jpg'
            },
            {
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.',
                author: 'Mrs. Julia Aniston',
                company: 'Apple Co',
                image: 'assets/img/profile/julia.jpg'
            }
        ];
    }
}
LandingService.ɵfac = function LandingService_Factory(t) { return new (t || LandingService)(); };
LandingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LandingService, factory: LandingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/monthly/monthly.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/landing/monthly/monthly.component.ts ***!
  \************************************************************/
/*! exports provided: MonthlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthlyComponent", function() { return MonthlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function MonthlyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Starting Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Expeted Return");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Max Draw-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Max Cumulative Lots");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "3 Months Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pay Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r439 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.startingPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.expectedReturn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.maxDrawDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r439.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r439.threeMonths, " ");
} }
class MonthlyComponent {
    constructor() {
        this.items = [
            { name: 'BASIC', price: 'R2 750', startingPrice: 'R50 000', expectedReturn: 'R5 000', maxDrawDown: 'R2 250', max: '0.5 lots', threeMonths: 'R250' },
            { name: 'INTERMEDIATE', price: 'R5 250', startingPrice: 'R100 000', expectedReturn: 'R10 000', maxDrawDown: 'R4 500', max: '1.0 lots', threeMonths: 'R250' },
            { name: 'PRO', price: 'R7 750', startingPrice: 'R150 000', expectedReturn: 'R15 000', maxDrawDown: 'R6 750', max: '1.5 lots', threeMonths: 'R250' },
        ];
    }
    ngOnInit() {
    }
}
MonthlyComponent.ɵfac = function MonthlyComponent_Factory(t) { return new (t || MonthlyComponent)(); };
MonthlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonthlyComponent, selectors: [["app-monthly"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", "class", "p-2", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", 1, "p-2"], [1, "pricing-card", "text-center", "p-0", 2, "border-top", "4px solid rgb(63,231,239)"], [1, "pricing-title", "my-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-accent", "pricing-header", "p-3", 2, "background", "rgb(63,231,239)"], [2, "color", "black"], [1, "secondary-text-color", "p-3"], [1, "row"], [1, "col-md-6", "col-sm-6", 2, "float", "left", "text-align", "start", "width", "70%"], [1, "py-2", "pricingCardText"], [1, "col-md-6", "col-sm-6", 2, "float", "right", "text-align", "start", "width", "30%"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", 1, "mt-3", "pricingBtn"]], template: function MonthlyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MonthlyComponent_div_1_Template, 34, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonthlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monthly',
                templateUrl: './monthly.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/our-services/our-services.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/our-services/our-services.component.ts ***!
  \**********************************************************************/
/*! exports provided: OurServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function() { return OurServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stockopedia/carousel */ "./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function OurServicesComponent_ngu_tile_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "READ MORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const service_r456 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r456.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r456.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", service_r456.desc, " ");
} }
function OurServicesComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OurServicesComponent_li_10_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r460); const i_r458 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r453.moveTo(i_r458); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r458 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r458 == _r453.activePoint);
} }
class OurServicesComponent {
    constructor(appSettings, landingService) {
        this.appSettings = appSettings;
        this.landingService = landingService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.services = this.landingService.getServices();
        this.servicesCarouselConfig = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            slide: 1,
            speed: 500,
            interval: {
                timing: 4000
            },
            point: {
                visible: true
            },
            loop: true,
            touch: true,
            custom: 'banner',
            RTL: this.settings.rtl
        };
    }
}
OurServicesComponent.ɵfac = function OurServicesComponent_Factory(t) { return new (t || OurServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"])); };
OurServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurServicesComponent, selectors: [["app-our-services"]], decls: 11, vars: 3, consts: [["id", "services", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"], [1, "secondary-text-color"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["NguCarouselPoint", "", 1, "nguCarouselPoints"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-100"], [1, "mat-icon-xlg", "secondary-text-color"], [1, "block-title", "my-3"], [1, "text-center", "secondary-text-color"], ["mat-raised-button", "", "color", "accent", 1, "mt-3"], [3, "click"]], template: function OurServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Trusted, reliable and professional services. Trust us the work you can't do yourself.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngu-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurServicesComponent_ngu_tile_8_Template, 10, 3, "ngu-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OurServicesComponent_li_10_Template, 1, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.servicesCarouselConfig)("dataSource", ctx.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r453.pointNumbers);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarousel"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵg"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵj"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-services',
                templateUrl: './our-services.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/our-works/our-works.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing/our-works/our-works.component.ts ***!
  \****************************************************************/
/*! exports provided: OurWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurWorksComponent", function() { return OurWorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stockopedia/carousel */ "./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");












function OurWorksComponent_ngu_tile_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r463 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", work_r463.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r463.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r463.desc);
} }
class OurWorksComponent {
    constructor(appSettings, landingService) {
        this.appSettings = appSettings;
        this.landingService = landingService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.works = this.landingService.getWorks();
        this.worksCarouselConfig = {
            grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
            slide: 1,
            speed: 400,
            interval: {
                timing: 4000
            },
            point: {
                visible: false
            },
            loop: true,
            touch: true,
            custom: 'banner',
            RTL: this.settings.rtl
        };
    }
}
OurWorksComponent.ɵfac = function OurWorksComponent_Factory(t) { return new (t || OurWorksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"])); };
OurWorksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurWorksComponent, selectors: [["app-our-works"]], decls: 15, vars: 2, consts: [["id", "works", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"], [1, "secondary-text-color"], [3, "inputs", "dataSource"], ["myCarousel", ""], [4, "nguCarouselDef"], ["mat-mini-fab", "", "NguCarouselPrev", "", 1, "arrow-btn", "prev"], ["mat-mini-fab", "", "NguCarouselNext", "", 1, "arrow-btn", "next"], ["mat-card-image", "", "alt", "image", 3, "src"], [1, "secondary-text-color", "mt-2"], ["fxLayoutAlign", "end center", 1, "secondary-text-color"], ["mat-icon-button", ""]], template: function OurWorksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Recent Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit mauris euismod, consequat ipsum nec, egestas est.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngu-carousel", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OurWorksComponent_ngu_tile_8_Template, 16, 3, "ngu-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.worksCarouselConfig)("dataSource", ctx.works);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarousel"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵg"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵe"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵd"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_4__["ɵj"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurWorksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-works',
                templateUrl: './our-works.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/pricing/pricing.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/landing/pricing/pricing.component.ts ***!
  \************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../monthly/monthly.component */ "./src/app/pages/landing/monthly/monthly.component.ts");
/* harmony import */ var _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../yearly/yearly.component */ "./src/app/pages/landing/yearly/yearly.component.ts");





class PricingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PricingComponent.ɵfac = function PricingComponent_Factory(t) { return new (t || PricingComponent)(); };
PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingComponent, selectors: [["app-pricing"]], decls: 9, vars: 0, consts: [["id", "pricing", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"]], template: function PricingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plans and Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-monthly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profit Splits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-yearly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _monthly_monthly_component__WEBPACK_IMPORTED_MODULE_2__["MonthlyComponent"], _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_3__["YearlyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricing',
                templateUrl: './pricing.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/testimonials/testimonials.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/landing/testimonials/testimonials.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../landing.service */ "./src/app/pages/landing/landing.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stockopedia/carousel */ "./node_modules/@stockopedia/carousel/__ivy_ngcc__/fesm2015/stockopedia-carousel.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function TestimonialsComponent_ngu_tile_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const client_r446 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", client_r446, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TestimonialsComponent_ngu_tile_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngu-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testimonial_r448 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", testimonial_r448.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", testimonial_r448.text, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" - ", testimonial_r448.author, ", ", testimonial_r448.company, "");
} }
function TestimonialsComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonialsComponent_li_20_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r452); const i_r450 = ctx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return _r443.moveTo(i_r450); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r450 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r450 == _r443.activePoint);
} }
class TestimonialsComponent {
    constructor(appSettings, landingService) {
        this.appSettings = appSettings;
        this.landingService = landingService;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.clients = this.landingService.getClients();
        this.testimonials = this.landingService.getTestimonials();
        this.clientsCarouselConfig = {
            grid: { xs: 3, sm: 4, md: 5, lg: 6, all: 0 },
            slide: 1,
            speed: 500,
            interval: {
                timing: 4000
            },
            point: {
                visible: false
            },
            loop: true,
            touch: true,
            custom: 'banner',
            RTL: this.settings.rtl
        };
        this.testimonialsCarouselConfig = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 1,
            speed: 500,
            interval: {
                timing: 4000
            },
            point: {
                visible: true
            },
            loop: true,
            touch: true,
            custom: 'banner',
            RTL: this.settings.rtl
        };
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"])); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], decls: 21, vars: 5, consts: [["id", "testimonials", 1, "mt-2", "pt-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "title-section", "p-2", "mb-2"], [1, "secondary-text-color"], [1, "px-2", "pb-4"], [1, "px-0"], [3, "inputs", "dataSource"], [4, "nguCarouselDef"], ["mat-mini-fab", "", "NguCarouselPrev", "", 1, "arrow-btn", "prev"], ["mat-mini-fab", "", "NguCarouselNext", "", 1, "arrow-btn", "next"], ["testimonialsCarousel", ""], ["NguCarouselPoint", "", 1, "nguCarouselPoints"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "client-item"], ["alt", "image", 3, "src"], [1, "testimonial-item"], ["alt", "image", 1, "mat-elevation-z2", 3, "src"], [1, "text", "secondary-text-color", "my-3"], [3, "click"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our clients and what people are saying");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sed magna ipsum, ultricies sed sagittis nec, scelerisque eu libero. Donec at metus ac eros accumsan semper.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngu-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestimonialsComponent_ngu_tile_9_Template, 3, 1, "ngu-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngu-carousel", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TestimonialsComponent_ngu_tile_18_Template, 7, 4, "ngu-tile", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TestimonialsComponent_li_20_Template, 1, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.clientsCarouselConfig)("dataSource", ctx.clients);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputs", ctx.testimonialsCarouselConfig)("dataSource", ctx.testimonials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r443.pointNumbers);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["NguCarousel"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["ɵg"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["ɵe"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["ɵd"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["ɵf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _stockopedia_carousel__WEBPACK_IMPORTED_MODULE_5__["ɵj"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonials',
                templateUrl: './testimonials.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] }, { type: _landing_service__WEBPACK_IMPORTED_MODULE_2__["LandingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/landing/yearly/yearly.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/landing/yearly/yearly.component.ts ***!
  \**********************************************************/
/*! exports provided: YearlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlyComponent", function() { return YearlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");





function YearlyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Traders Profit Split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Parallel Traders Profit Split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r441 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r441.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r441.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r441.tradeProfit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r441.parrlelTradeProfit);
} }
class YearlyComponent {
    constructor() {
        this.items = [
            { name: 'Portfolio Return', price: '10% - 19%', tradeProfit: '55%', parrlelTradeProfit: '45%' },
            { name: 'Portfolio Return', price: '20% - 49%', tradeProfit: '60%', parrlelTradeProfit: '40%' },
            { name: 'Portfolio Return', price: '50% <', tradeProfit: '70%', parrlelTradeProfit: '30%' },
        ];
    }
    ngOnInit() {
    }
}
YearlyComponent.ɵfac = function YearlyComponent_Factory(t) { return new (t || YearlyComponent)(); };
YearlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YearlyComponent, selectors: [["app-yearly"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", "class", "p-2", 4, "ngFor", "ngForOf"], ["fxFlex", "100", "fxFlex.gt-sm", "25", "fxFlex.sm", "50", 1, "p-2"], [1, "pricing-card", "text-center", "p-0", 2, "border-top", "4px solid rgb(63,231,239)"], [1, "pricing-title", "my-3"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "bg-accent", "pricing-header", "p-3", 2, "background", "rgb(63,231,239)"], [2, "color", "black"], [1, "secondary-text-color", "p-3"], [1, "row"], [1, "col-md-6", "col-sm-6", 2, "float", "left", "text-align", "start", "width", "80%"], [1, "py-2", "pricingCardText"], [1, "col-md-6", "col-sm-6", 2, "float", "right", "text-align", "start", "width", "20%"]], template: function YearlyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, YearlyComponent_div_1_Template, 19, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YearlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-yearly',
                templateUrl: './yearly.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map