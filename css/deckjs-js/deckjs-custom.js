/*
  This is a packed deck.js with some extensions and styles.
  It has been generated from version d8c74bcc860ba175ab020fd69656abee3fc057f3 .
  It includes:
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck/extensions/includedeck/load.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//jquery.min.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//modernizr.custom.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//core/deck.core.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/smarkdown/markdown.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/smarkdown/deck.smarkdown.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/fit/deck.fit.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//libs/display-latex2.user.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/simplemath/deck.simplemath.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/clone/deck.clone.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/goto/deck.goto.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/progress/deck.progress.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/navigation/deck.navigation.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/menu/deck.menu.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/step/deck.step.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/events/deck.events.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/anim/deck.anim.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//libs/jquerysvg/jquery.svg.min.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//libs/jquerysvg/jquery.svganim.min.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/svg/deck.svg.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/metadata/deck.metadata.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/attribution/deck.attribution.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/container-styling/deck.container-styling.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/timekeeper/deck.timekeeper.js
     browsercast/popcorn.js
     browsercast/deck.browsercast.js
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/style-chunks/core.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/fit/deck.fit-fs.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/clone/deck.clone.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/goto/deck.goto.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/progress/deck.progress.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/navigation/deck.navigation.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/menu/deck.menu.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/attribution/deck.attribution.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/timekeeper/deck.timekeeper.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/style-chunks/simple.css
     /home/twilight/projects/deck.browsercast.js-demo/tmpdeck//extensions/style-chunks/comments.css
     browsercast/deck.browsercast.css
     browsercast/player.css
*/


/*!
 * Includedeck.
 *
 * Copyright (c) 2013-2014 Rémi Emonet.
 * Licensed under the MIT license.
 * https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
 *
 * The goal of this extension is to simplify include of deck.js,
 * its profiles/themes and the extensions.
 *
 * The first goal is not performance of loading (still it should
 * allow the display of a message while loading) but on ease of
 * use and extensibility (i.e., includedeck does not need to know
 * about all existing extensions, even if by default it does know
 * some of them).
 *
 */



var head_conf = {
    
};

if (typeof ACTUALLY_EXPORT_A_LIST_OF_FILES == 'undefined')
// this is head.load.min.js (v1.0.3) from http://headjs.com/site/download.html
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
//# sourceMappingURL=head.load.min.js.map


// this is the actual includedeck
function includedeck(m, c) {
    var maybe = function(f) { return f || (function(){}); }
    var modules = m || [];
    var conf = c || {};
    var initDelay = conf.INITDELAY;
    var cb = {
        beforeLoad: maybe(conf.BEFORELOAD),
        beforeDelay: maybe(conf.BEFOREDELAY), // useful only if INITDELAY is set, else, just like BEFOREINIT
        beforeInit: maybe(conf.BEFOREINIT),
        afterInit: maybe(conf.AFTERINIT),
        atExit: maybe(conf.ATEXIT), // for backward compatibility (same as AFTERINIT)
        hasGeneric: conf.GENERIC ? true : false,
        generic: maybe(conf.GENERIC) // will receive calls like GENERIC("AFTER", "svg"), one of each BEFORE/AFTER for each file group (svg, simplemath, ...)
    };
    var prefix = conf.PREFIX || "deck.js";

    if (typeof(modules) == "string") {
        modules = modules.split(/ +/);
    }
    
    // todo: make this externally extensible
    // todo: maybe have a mechanism to load a list of dependency (e.g., mymodule-files.js)

    var info = {
        //
        // core (differerent possible cores)
        "deck-core-dependencies": [
            prefix + "/jquery.min.js",
            prefix + "/modernizr.custom.js"
	    //prefix + "/extensions/includedeck/___after___core___.js"
        ],
        "deck": [
            "@_deck-core-dependencies",
	    prefix + "/core/deck.core.css",
            prefix + "/core/deck.core.js"
        ],
        "newdeck": [
            "@_deck-core-dependencies",
	    prefix + "/extensions/style-chunks/core.css",
            prefix + "/core/deck.core.js"
        ],
        //
        // extensions
        "fit": [ prefix + "/extensions/fit/deck.fit.js" ],
        "fit-fs": [
            prefix + "/extensions/fit/deck.fit-fs.css",
            "@_fit"
        ],
        "simplemath": [
            prefix + "/libs/display-latex2.user.js",
            prefix + "/extensions/simplemath/deck.simplemath.js"
        ],
        "smartsyntax": [ prefix + "/extensions/smartsyntax/deck.smartsyntax.js" ],
        "smarkdown": [
            prefix + "/extensions/smarkdown/markdown.js",
            prefix + "/extensions/smarkdown/deck.smarkdown.js"
        ],
        "clone": [
            prefix + "/extensions/clone/deck.clone.css",
            prefix + "/extensions/clone/deck.clone.js"
        ],
        "timekeeper": [
            prefix + "/extensions/timekeeper/deck.timekeeper.css",
            prefix + "/extensions/timekeeper/deck.timekeeper.js"
        ],
        "goto": [
            prefix + "/extensions/goto/deck.goto.css",
            prefix + "/extensions/goto/deck.goto.js"
        ],
        "status": [
            prefix + "/extensions/status/deck.status.css",
            prefix + "/extensions/status/deck.status.js"
        ],
        "progress": [
            prefix + "/extensions/progress/deck.progress.css",
            prefix + "/extensions/progress/deck.progress.js"
        ],
        "navigation": [
            prefix + "/extensions/navigation/deck.navigation.css",
            prefix + "/extensions/navigation/deck.navigation.js"
        ],
        "menu": [
            prefix + "/extensions/menu/deck.menu.css",
            prefix + "/extensions/menu/deck.menu.js"
        ],
        "step": [ prefix + "/extensions/step/deck.step.js" ],
        "events": [ prefix + "/extensions/events/deck.events.js" ],
        "anim": [ prefix + "/extensions/anim/deck.anim.js" ],
        "svg": [
            prefix + "/libs/jquerysvg/jquery.svg.min.js" ,
            prefix + "/libs/jquerysvg/jquery.svganim.min.js",
            prefix + "/extensions/svg/deck.svg.js"
        ],
        "metadata": [ prefix + "/extensions/metadata/deck.metadata.js" ],
        "attribution": [
            prefix + "/extensions/attribution/deck.attribution.css",
            prefix + "/extensions/attribution/deck.attribution.js"
        ],
        "container-styling": [ prefix + "/extensions/container-styling/deck.container-styling.js" ],
        // Style extensions
        "style-chunks": [
	    prefix + "/extensions/style-chunks/simple.css",
	    prefix + "/extensions/style-chunks/comments.css"
        ],
        //
        // Themes
        // // by convention, "theme:blabla" will load the default blabla theme
        //
        // Some default profiles
        //
        /// profile-1: default deck with most extensions and no theme
        "profile-1": ["@_deck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        "profile-1-fitnofs": ["@_deck", "@_smartsyntax", "@_fit", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        /// profile-2: new deck (cleaner css) with most extensions and no theme
        "profile-2": ["@_newdeck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        "profile-2-fitnofs": ["@_newdeck", "@_smartsyntax", "@_fit", "@_simplemath", "@_clone", "@_goto", "@_status", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg"],
        /// profile-3: big profile = profile-2 / with new status (progress) + all good bundled extensions
        "profile-3": ["@_newdeck", "@_smartsyntax", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper"],
        /// profile-4: big profile (as profile 3) but with the smarkdown instead of the smartsyntax
        "profile-4": ["@_newdeck", "@_smarkdown", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper"],
        /// profile-5: use smarkdown and include more useful things (CSS: simple, comments)
        "profile-5": ["@_newdeck", "@_smarkdown", "@_fit-fs", "@_simplemath", "@_clone", "@_goto", "@_progress", "@_navigation", "@_menu", "@_step", "@_events", "@_anim", "@_svg",
                      "@_metadata", "@_attribution", "@_container-styling", "@_timekeeper", "@_style-chunks"],
        dummy: {}
    };

    var endsInJsOrCss = /\.(css|js)$/;

    // Defensive check that there are no *.js/*.css in the info (as they won't be useable anyways)
    for (k in info) {
        if (endsInJsOrCss.test(k)) {
            alert("Internal problem detected in includedeck: '" + k + "' won't be useable.");
        }
    }

    // TODO?: handle default extensions (deck.js/extensions/N/deck.N.{js,css}
    // TODO?: some should come before others, e.g. anim before svg, (or before any (deck) or before most (loading...))

    // if there are two '#' in the url, take everything after the second as a theme name
    var forceTheme = null;
    if ((typeof ACTUALLY_EXPORT_A_LIST_OF_FILES == 'undefined') && (window.location.hash.replace(/[^#]/gi, '').length == 2)) {
        var theme = window.location.hash.replace(/^.*#/gi, '')
        var base = window.location.hash.replace(/#[^#]*$/gi, '')
        forceTheme = theme;
        window.location.hash = base;
    }

    var toLoad = [];
    var addInfo = function(k) {
        if (k.substring(0, 6) == "theme:") {
            k = k.substring(6)
            if (forceTheme) { // replace by the url forced theme (works only with default themes...
                k = forceTheme
            }
            if (k.substring(0, 2) == "x:") {
                k = k.substring(2)
                toLoad = toLoad.concat(prefix + "/deck.js-theme-builder/" + k + ".css");
            } else {
                toLoad = toLoad.concat(prefix + "/themes/style/" + k + ".css");
            }
            return;
        }
        if (k.substring(0, 10) == "extension:") {
            toLoad = toLoad.concat(prefix + "/extensions/" + k.substring(10));
            return;
        }
        if (endsInJsOrCss.test(k)) {
            toLoad = toLoad.concat(k);
            return;
        }
        var closure = function(wh, e) { return function () { cb.generic(wh, e); } };
        for (i in info[k]) {
            if (info[k][i].substring(0,2) == "@_") {
                var e = info[k][i].substring(2);
                if (cb.hasGeneric) toLoad = toLoad.concat(closure("BEFORE", e));
                addInfo(e);
                if (cb.hasGeneric) toLoad = toLoad.concat(closure("AFTER", e));
            } else {
                toLoad = toLoad.concat(info[k][i]);
            }
        }
    }

    for (i in modules) {
        addInfo(modules[i]);
    }

    if (typeof ACTUALLY_EXPORT_A_LIST_OF_FILES !== 'undefined') {
        return toLoad;
    }

    { // First insert a CSS, just to fit modernizr
        var c = document.createElement("style");
        c.type = "text/css";
        if (typeof ACTUALLY_FILL_CSS !== 'undefined') {
            ACTUALLY_FILL_CSS(c);
        }
        document.getElementsByTagName("head")[0].appendChild(c);
    }
    
    // custom adapter function to split the load list at each function and call by head.js by block (need to end with a function)
    // in the end, for IE9 compat, we load everything one by one... maybe switching to lazyload.js would avoid needing this.
    var loadsAndCalls = function(l, stack) {
        stack = stack || [];
        if (l.length == 0) return;
        if ("string" !== typeof l[0]) {
            l[0]();
            loadsAndCalls(l.slice(1));
        } else {
            head.js(l[0], function() {
                loadsAndCalls(l.slice(1));
            });
        }
    }
    cb.beforeLoad();
    loadsAndCalls(toLoad.concat(function() {
        $(function() {
            var doIt = function() {
                cb.beforeInit();
                $.deck(conf);
                cb.afterInit();
                cb.atExit();
            };
            // delay and callback logic
            cb.beforeDelay();
            if (initDelay) {
                setTimeout(doIt, initDelay);
            } else {
                doIt();
            }
        });
    }));
}


/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Contains: fontface | backgroundsize | borderimage | borderradius | boxshadow | flexbox | hsla | multiplebgs | opacity | rgba | textshadow | cssanimations | csscolumns | generatedcontent | cssgradients | cssreflections | csstransforms | csstransforms3d | csstransitions | applicationcache | canvas | canvastext | draganddrop | hashchange | history | audio | video | indexeddb | input | inputtypes | localstorage | postmessage | sessionstorage | websockets | websqldatabase | webworkers | geolocation | inlinesvg | smil | svg | svgclippaths | touch | webgl | iepp | cssclasses | addtest | teststyles | testprop | testallprops | hasevent | prefixes | domprefixes | load
 */
;window.Modernizr=function(a,b,c){function H(){e.input=function(a){for(var b=0,c=a.length;b<c;b++)t[a[b]]=a[b]in l;return t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)l.setAttribute("type",f=a[d]),e=l.type!=="text",e&&(l.value=m,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&l.style.WebkitAppearance!==c?(g.appendChild(l),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(l,null).WebkitAppearance!=="textfield"&&l.offsetHeight!==0,g.removeChild(l)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=l.checkValidity&&l.checkValidity()===!1:/^color$/.test(f)?(g.appendChild(l),g.offsetWidth,e=l.value!=m,g.removeChild(l)):e=l.value!=m)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(c,d){var f=c.join(""),g=d.length;v(f,function(c,d){var f=b.styleSheets[b.styleSheets.length-1],h=f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"",i=c.childNodes,j={};while(g--)j[i[g].id]=i[g];e.touch="ontouchstart"in a||j.touch.offsetTop===9,e.csstransforms3d=j.csstransforms3d.offsetLeft===9,e.generatedcontent=j.generatedcontent.offsetHeight>=1,e.fontface=/src/i.test(h)&&h.indexOf(d.split(" ")[0])===0},g,d)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",o.join("touch-enabled),("),i,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",o.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',m,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);r.flexbox=function(){function c(a,b,c,d){a.style.cssText=o.join(b+":"+c+";")+(d||"")}function a(a,b,c,d){b+=":",a.style.cssText=(b+o.join(c+";"+b)).slice(0,-b.length)+(d||"")}var d=b.createElement("div"),e=b.createElement("div");a(d,"display","box","width:42px;padding:0;"),c(e,"box-flex","1","width:10px;"),d.appendChild(e),g.appendChild(d);var f=e.offsetWidth===42;d.removeChild(e),g.removeChild(d);return f},r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.webgl=function(){return!!a.WebGLRenderingContext},r.touch=function(){return e.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!a.postMessage},r.websqldatabase=function(){var b=!!a.openDatabase;return b},r.indexedDB=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b].toLowerCase()+"IndexedDB"])return!0;return!!a.indexedDB},r.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.history=function(){return!!a.history&&!!history.pushState},r.draganddrop=function(){return w("dragstart")&&w("drop")},r.websockets=function(){for(var b=-1,c=p.length;++b<c;)if(a[p[b]+"WebSocket"])return!0;return"WebSocket"in a},r.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},r.hsla=function(){A("background-color:hsla(120,40%,100%,.5)");return D(k.backgroundColor,"rgba")||D(k.backgroundColor,"hsla")},r.multiplebgs=function(){A("background:url(https://),url(https://),red url(https://)");return/(url\s*\(.*?){3}/.test(k.background)},r.backgroundsize=function(){return F("backgroundSize")},r.borderimage=function(){return F("borderImage")},r.borderradius=function(){return F("borderRadius")},r.boxshadow=function(){return F("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){B("opacity:.55");return/^0.55$/.test(k.opacity)},r.cssanimations=function(){return F("animationName")},r.csscolumns=function(){return F("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";A((a+o.join(b+a)+o.join(c+a)).slice(0,-a.length));return D(k.backgroundImage,"gradient")},r.cssreflections=function(){return F("boxReflect")},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},r.csstransitions=function(){return F("transitionProperty")},r.fontface=function(){return e.fontface},r.generatedcontent=function(){return e.generatedcontent},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType){c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"');var d='video/mp4; codecs="avc1.42E01E';c.h264=a.canPlayType(d+'"')||a.canPlayType(d+', mp4a.40.2"'),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}}catch(e){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"'),c.mp3=a.canPlayType("audio/mpeg;"),c.wav=a.canPlayType('audio/wav; codecs="1"'),c.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}catch(d){}return c},r.localstorage=function(){try{return!!localStorage.getItem}catch(a){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(a){return!1}},r.webworkers=function(){return!!a.Worker},r.applicationcache=function(){return!!a.applicationCache},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==q.svg},r.smil=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"animate")))},r.svgclippaths=function(){return!!b.createElementNS&&/SVG/.test(n.call(b.createElementNS(q.svg,"clipPath")))};for(var I in r)z(r,I)&&(x=I.toLowerCase(),e[x]=r[I](),u.push((e[x]?"":"no-")+x));e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return;b=typeof b=="boolean"?b:!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b}return e},A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=o,e._domPrefixes=p,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=v,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+u.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*!
Deck JS - deck.core
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
The deck.core module provides all the basic functionality for creating and
moving through a deck.  It does so by applying classes to indicate the state of
the deck and its slides, allowing CSS to take care of the visual representation
of each state.  It also provides methods for navigating the deck and inspecting
its state, as well as basic key bindings for going to the next and previous
slides.  More functionality is provided by wholly separate extension modules
that use the API provided by core.
*/
(function($, undefined) {
  var slides, currentIndex, $container, $fragmentLinks;

  var events = {
    /*
    This event fires at the beginning of a slide change, before the actual
    change occurs. Its purpose is to give extension authors a way to prevent
    the slide change from occuring. This is done by calling preventDefault
    on the event object within this event. If that is done, the deck.change
    event will never be fired and the slide will not change.
    */
    beforeChange: 'deck.beforeChange',

    /*
    This event fires whenever the current slide changes, whether by way of
    next, prev, or go. The callback function is passed two parameters, from
    and to, equal to the indices of the old slide and the new slide
    respectively. If preventDefault is called on the event within this handler
    the slide change does not occur.

    $(document).bind('deck.change', function(event, from, to) {
       alert('Moving from slide ' + from + ' to ' + to);
    });
    */
    change: 'deck.change',

    /*
    This event fires at the beginning of deck initialization. This event makes
    a good hook for preprocessing extensions looking to modify the DOM before
    the deck is fully initialized. It is also possible to halt the deck.init
    event from firing while you do things in beforeInit. This can be done by
    calling lockInit on the event object passed to this event. The init can be
    released by calling releaseInit.

    $(document).bind('deck.beforeInit', function(event) {
      event.lockInit(); // halts deck.init event
      window.setTimeout(function() {
        event.releaseInit(); // deck.init will now fire 2 seconds later
      }, 2000);
    });

    The init event will be fired regardless of locks after
    options.initLockTimeout milliseconds.
    */
    beforeInitialize: 'deck.beforeInit',

    /*
    This event fires at the end of deck initialization. Extensions should
    implement any code that relies on user extensible options (key bindings,
    element selectors, classes) within a handler for this event. Native
    events associated with Deck JS should be scoped under a .deck event
    namespace, as with the example below:

    var $d = $(document);
    $.deck.defaults.keys.myExtensionKeycode = 70; // 'h'
    $d.bind('deck.init', function() {
       $d.bind('keydown.deck', function(event) {
          if (event.which === $.deck.getOptions().keys.myExtensionKeycode) {
             // Rock out
          }
       });
    });
    */
    initialize: 'deck.init'
  };

  var options = {};
  var $document = $(document);
  var $window = $(window);
  var stopPropagation = function(event) {
    event.stopPropagation();
  };

  var updateContainerState = function() {
    var oldIndex = $container.data('onSlide');
    $container.removeClass(options.classes.onPrefix + oldIndex);
    $container.addClass(options.classes.onPrefix + currentIndex);
    $container.data('onSlide', currentIndex);
  };

  var updateChildCurrent = function() {
    var $oldCurrent = $('.' + options.classes.current);
    var $oldParents = $oldCurrent.parentsUntil(options.selectors.container);
    var $newCurrent = slides[currentIndex];
    var $newParents = $newCurrent.parentsUntil(options.selectors.container);
    $oldParents.removeClass(options.classes.childCurrent);
    $newParents.addClass(options.classes.childCurrent);
  };

  var removeOldSlideStates = function() {
    var $all = $();
    $.each(slides, function(i, el) {
      $all = $all.add(el);
    });
    $all.removeClass([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ].join(' '));
  };

  var addNewSlideStates = function() {
    slides[currentIndex].addClass(options.classes.current);
    if (currentIndex > 0) {
      slides[currentIndex-1].addClass(options.classes.previous);
    }
    if (currentIndex + 1 < slides.length) {
      slides[currentIndex+1].addClass(options.classes.next);
    }
    if (currentIndex > 1) {
      $.each(slides.slice(0, currentIndex - 1), function(i, $slide) {
        $slide.addClass(options.classes.before);
      });
    }
    if (currentIndex + 2 < slides.length) {
      $.each(slides.slice(currentIndex+2), function(i, $slide) {
        $slide.addClass(options.classes.after);
      });
    }
  };

  var setAriaHiddens = function() {
    $(options.selectors.slides).each(function() {
      var $slide = $(this);
      var isSub = $slide.closest('.' + options.classes.childCurrent).length;
      var isBefore = $slide.hasClass(options.classes.before) && !isSub;
      var isPrevious = $slide.hasClass(options.classes.previous) && !isSub;
      var isNext = $slide.hasClass(options.classes.next);
      var isAfter = $slide.hasClass(options.classes.after);
      var ariaHiddenValue = isBefore || isPrevious || isNext || isAfter;
      $slide.attr('aria-hidden', ariaHiddenValue);
    });
  };

  var updateStates = function() {
    updateContainerState();
    updateChildCurrent();
    removeOldSlideStates();
    addNewSlideStates();
    if (options.setAriaHiddens) {
      setAriaHiddens();
    }
  };

  var initSlidesArray = function(elements) {
    if ($.isArray(elements)) {
      $.each(elements, function(i, element) {
        slides.push($(element));
      });
    }
    else {
      $(elements).each(function(i, element) {
        slides.push($(element));
      });
    }
  };

  var bindKeyEvents = function() {
    var editables = [
      'input',
      'textarea',
      'select',
      'button',
      'meter',
      'progress',
      '[contentEditable]'
    ].join(', ');

    $document.unbind('keydown.deck').bind('keydown.deck', function(event) {
      var isNext = event.which === options.keys.next;
      var isPrev = event.which === options.keys.previous;
      isNext = isNext || $.inArray(event.which, options.keys.next) > -1;
      isPrev = isPrev || $.inArray(event.which, options.keys.previous) > -1;

      if (isNext) {
        methods.next();
        event.preventDefault();
      }
      else if (isPrev) {
        methods.prev();
        event.preventDefault();
      }
    });

    $document.undelegate(editables, 'keydown.deck', stopPropagation);
    $document.delegate(editables, 'keydown.deck', stopPropagation);
  };

  var bindTouchEvents = function() {
    var startTouch;
    var direction = options.touch.swipeDirection;
    var tolerance = options.touch.swipeTolerance;
    var listenToHorizontal = ({ both: true, horizontal: true })[direction];
    var listenToVertical = ({ both: true, vertical: true })[direction];

    $container.unbind('touchstart.deck');
    $container.bind('touchstart.deck', function(event) {
      if (!startTouch) {
        startTouch = $.extend({}, event.originalEvent.targetTouches[0]);
      }
    });

    $container.unbind('touchmove.deck');
    $container.bind('touchmove.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (!startTouch || touch.identifier !== startTouch.identifier) {
          return true;
        }
        var xDistance = touch.screenX - startTouch.screenX;
        var yDistance = touch.screenY - startTouch.screenY;
        var leftToRight = xDistance > tolerance && listenToHorizontal;
        var rightToLeft = xDistance < -tolerance && listenToHorizontal;
        var topToBottom = yDistance > tolerance && listenToVertical;
        var bottomToTop = yDistance < -tolerance && listenToVertical;

        if (leftToRight || topToBottom) {
          $.deck('prev');
          startTouch = undefined;
        }
        else if (rightToLeft || bottomToTop) {
          $.deck('next');
          startTouch = undefined;
        }
        return false;
      });

      if (listenToVertical) {
        event.preventDefault();
      }
    });

    $container.unbind('touchend.deck');
    $container.bind('touchend.deck', function(event) {
      $.each(event.originalEvent.changedTouches, function(i, touch) {
        if (startTouch && touch.identifier === startTouch.identifier) {
          startTouch = undefined;
        }
      });
    });
  };

  var indexInBounds = function(index) {
    return typeof index === 'number' && index >=0 && index < slides.length;
  };

  var createBeforeInitEvent = function() {
    var event = $.Event(events.beforeInitialize);
    event.locks = 0;
    event.done = $.noop;
    event.lockInit = function() {
      ++event.locks;
    };
    event.releaseInit = function() {
      --event.locks;
      if (!event.locks) {
        event.done();
      }
    };
    return event;
  };

  var goByHash = function(str) {
    var id = str.substr(str.indexOf("#") + 1);

    $.each(slides, function(i, $slide) {
      if ($slide.attr('id') === id) {
        $.deck('go', i);
        return false;
      }
    });

    // If we don't set these to 0 the container scrolls due to hashchange
    if (options.preventFragmentScroll) {
      $.deck('getContainer').scrollLeft(0).scrollTop(0);
    }
  };

  var assignSlideId = function(i, $slide) {
    var currentId = $slide.attr('id');
    var previouslyAssigned = $slide.data('deckAssignedId') === currentId;
    if (!currentId || previouslyAssigned) {
      $slide.attr('id', options.hashPrefix + i);
      $slide.data('deckAssignedId', options.hashPrefix + i);
    }
  };

  var removeContainerHashClass = function(id) {
    $container.removeClass(options.classes.onPrefix + id);
  };

  var addContainerHashClass = function(id) {
    $container.addClass(options.classes.onPrefix + id);
  };

  var setupHashBehaviors = function() {
    $fragmentLinks = $();
    $.each(slides, function(i, $slide) {
      var hash;

      assignSlideId(i, $slide);
      hash = '#' + $slide.attr('id');
      if (hash === window.location.hash) {
        setTimeout(function() {
          $.deck('go', i);
        }, 1);
      }
      $fragmentLinks = $fragmentLinks.add('a[href="' + hash + '"]');
    });

    if (slides.length) {
      addContainerHashClass($.deck('getSlide').attr('id'));
    };
  };

  var changeHash = function(from, to) {
    var hash = '#' + $.deck('getSlide', to).attr('id');
    var hashPath = window.location.href.replace(/#.*/, '') + hash;

    removeContainerHashClass($.deck('getSlide', from).attr('id'));
    addContainerHashClass($.deck('getSlide', to).attr('id'));
    if (Modernizr.history) {
      window.history.replaceState({}, "", hashPath);
    }
  };

  /* Methods exposed in the jQuery.deck namespace */
  var methods = {

    /*
    jQuery.deck(selector, options)

    selector: string | jQuery | array
    options: object, optional

    Initializes the deck, using each element matched by selector as a slide.
    May also be passed an array of string selectors or jQuery objects, in
    which case each selector in the array is considered a slide. The second
    parameter is an optional options object which will extend the default
    values.

    Users may also pass only an options object to init. In this case the slide
    selector will be options.selectors.slides which defaults to .slide.

    $.deck('.slide');

    or

    $.deck([
       '#first-slide',
       '#second-slide',
       '#etc'
    ]);
    */
    init: function(opts) {
      var beforeInitEvent = createBeforeInitEvent();
      var overrides = opts;

      if (!$.isPlainObject(opts)) {
        overrides = arguments[1] || {};
        $.extend(true, overrides, {
          selectors: {
            slides: arguments[0]
          }
        });
      }

      options = $.extend(true, {}, $.deck.defaults, overrides);
      slides = [];
      currentIndex = 0;
      $container = $(options.selectors.container);

      // Hide the deck while states are being applied to kill transitions
      $container.addClass(options.classes.loading);

      // populate the array of slides for pre-init
      initSlidesArray(options.selectors.slides);
      // Pre init event for preprocessing hooks
      beforeInitEvent.done = function() {
        // reInitSlidesArray is meant only for beforeInit
        methods['reInitSlidesArray'] = function() {
            alert('Deck.js method "reInitSlidesArray" is meant to be called in the beforeInit phase only.');
        }
        // re-populate the array of slides
        slides = [];
        initSlidesArray(options.selectors.slides);
        setupHashBehaviors();
        bindKeyEvents();
        bindTouchEvents();
        $container.scrollLeft(0).scrollTop(0);

        if (slides.length) {
          updateStates();
        }

        // Show deck again now that slides are in place
        $container.removeClass(options.classes.loading);
        $document.trigger(events.initialize);
      };

      beforeInitEvent.lockInit();
      $document.trigger(beforeInitEvent);
      beforeInitEvent.releaseInit();
      window.setTimeout(function() {
        if (beforeInitEvent.locks) {
          if (window.console) {
            window.console.warn('Something locked deck initialization\
              without releasing it before the timeout. Proceeding with\
              initialization anyway.');
          }
          beforeInitEvent.done();
        }
      }, options.initLockTimeout);
    },

    /*
    jQuery.deck('reInitSlidesArray')
    
    Force a recomputation of the "slides" array. This method is meant
    to be used by extensions that generate new slides in the
    beforeInit phase.
    */

    reInitSlidesArray: function() {
        slides = [];
        initSlidesArray(options.selectors.slides);
    },

    /*
    jQuery.deck('go', index)

    index: integer | string

    Moves to the slide at the specified index if index is a number. Index is
    0-based, so $.deck('go', 0); will move to the first slide. If index is a
    string this will move to the slide with the specified id. If index is out
    of bounds or doesn't match a slide id the call is ignored.
    */
    go: function(indexOrId) {
      var beforeChangeEvent = $.Event(events.beforeChange);
      var index;

      /* Number index, easy. */
      if (indexInBounds(indexOrId)) {
        index = indexOrId;
      }
      /* Id string index, search for it and set integer index */
      else if (typeof indexOrId === 'string') {
        $.each(slides, function(i, $slide) {
          if ($slide.attr('id') === indexOrId) {
            index = i;
            return false;
          }
        });
      }
      if (typeof index === 'undefined') {
        return;
      }

      /* Trigger beforeChange. If nothing prevents the change, trigger
      the slide change. */
      $document.trigger(beforeChangeEvent, [currentIndex, index]);
      if (!beforeChangeEvent.isDefaultPrevented()) {
        $document.trigger(events.change, [currentIndex, index]);
        changeHash(currentIndex, index);
        currentIndex = index;
        updateStates();
      }
    },

    /*
    jQuery.deck('next')

    Moves to the next slide. If the last slide is already active, the call
    is ignored.
    */
    next: function() {
      methods.go(currentIndex+1);
    },

    /*
    jQuery.deck('prev')

    Moves to the previous slide. If the first slide is already active, the
    call is ignored.
    */
    prev: function() {
      methods.go(currentIndex-1);
    },

    /*
    jQuery.deck('getSlide', index)

    index: integer, optional

    Returns a jQuery object containing the slide at index. If index is not
    specified, the current slide is returned.
    */
    getSlide: function(index) {
      index = typeof index !== 'undefined' ? index : currentIndex;
      if (!indexInBounds(index)) {
        return null;
      }
      return slides[index];
    },

    /*
    jQuery.deck('getSlides')

    Returns all slides as an array of jQuery objects.
    */
    getSlides: function() {
      return slides;
    },

    /*
    jQuery.deck('getTopLevelSlides')

    Returns all slides that are not subslides.
    */
    getTopLevelSlides: function() {
      var topLevelSlides = [];
      var slideSelector = options.selectors.slides;
      var subSelector = [slideSelector, slideSelector].join(' ');
      $.each(slides, function(i, $slide) {
        if (!$slide.is(subSelector)) {
          topLevelSlides.push($slide);
        }
      });
      return topLevelSlides;
    },

    /*
    jQuery.deck('getNestedSlides', index)

    index: integer, optional

    Returns all the nested slides of the current slide. If index is
    specified it returns the nested slides of the slide at that index.
    If there are no nested slides this will return an empty array.
    */
    getNestedSlides: function(index) {
      var targetIndex = index == null ? currentIndex : index;
      var $targetSlide = $.deck('getSlide', targetIndex);
      var $nesteds = $targetSlide.find(options.selectors.slides);
      var nesteds = $nesteds.get();
      return $.map(nesteds, function(slide, i) {
        return $(slide);
      });
    },


    /*
    jQuery.deck('getContainer')

    Returns a jQuery object containing the deck container as defined by the
    container option.
    */
    getContainer: function() {
      return $container;
    },

    /*
    jQuery.deck('getOptions')

    Returns the options object for the deck, including any overrides that
    were defined at initialization.
    */
    getOptions: function() {
      return options;
    },

    /*
    jQuery.deck('extend', name, method)

    name: string
    method: function

    Adds method to the deck namespace with the key of name. This doesn’t
    give access to any private member data — public methods must still be
    used within method — but lets extension authors piggyback on the deck
    namespace rather than pollute jQuery.

    $.deck('extend', 'alert', function(msg) {
       alert(msg);
    });

    // Alerts 'boom'
    $.deck('alert', 'boom');
    */
    extend: function(name, method) {
      methods[name] = method;
    }
  };

  /* jQuery extension */
  $.deck = function(method, arg) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (methods[method]) {
      return methods[method].apply(this, args);
    }
    else {
      return methods.init(method, arg);
    }
  };

  /*
  The default settings object for a deck. All deck extensions should extend
  this object to add defaults for any of their options.

  options.classes.after
    This class is added to all slides that appear after the 'next' slide.

  options.classes.before
    This class is added to all slides that appear before the 'previous'
    slide.

  options.classes.childCurrent
    This class is added to all elements in the DOM tree between the
    'current' slide and the deck container. For standard slides, this is
    mostly seen and used for nested slides.

  options.classes.current
    This class is added to the current slide.

  options.classes.loading
    This class is applied to the deck container during loading phases and is
    primarily used as a way to short circuit transitions between states
    where such transitions are distracting or unwanted.  For example, this
    class is applied during deck initialization and then removed to prevent
    all the slides from appearing stacked and transitioning into place
    on load.

  options.classes.next
    This class is added to the slide immediately following the 'current'
    slide.

  options.classes.onPrefix
    This prefix, concatenated with the current slide index, is added to the
    deck container as you change slides.

  options.classes.previous
    This class is added to the slide immediately preceding the 'current'
    slide.

  options.selectors.container
    Elements matched by this CSS selector will be considered the deck
    container. The deck container is used to scope certain states of the
    deck, as with the onPrefix option, or with extensions such as deck.goto
    and deck.menu.

  options.selectors.slides
    Elements matched by this selector make up the individual deck slides.
    If a user chooses to pass the slide selector as the first argument to
    $.deck() on initialization it does the same thing as passing in this
    option and this option value will be set to the value of that parameter.

  options.keys.next
    The numeric keycode used to go to the next slide.

  options.keys.previous
    The numeric keycode used to go to the previous slide.

  options.touch.swipeDirection
    The direction swipes occur to cause slide changes. Can be 'horizontal',
    'vertical', or 'both'. Any other value or a falsy value will disable
    swipe gestures for navigation.

  options.touch.swipeTolerance
    The number of pixels the users finger must travel to produce a swipe
    gesture.

  options.initLockTimeout
    The number of milliseconds the init event will wait for BeforeInit event
    locks to be released before firing the init event regardless.

  options.hashPrefix
    Every slide that does not have an id is assigned one at initialization.
    Assigned ids take the form of hashPrefix + slideIndex, e.g., slide-0,
    slide-12, etc.

  options.preventFragmentScroll
    When deep linking to a hash of a nested slide, this scrolls the deck
    container to the top, undoing the natural browser behavior of scrolling
    to the document fragment on load.

  options.setAriaHiddens
    When set to true, deck.js will set aria hidden attributes for slides
    that do not appear onscreen according to a typical heirarchical
    deck structure. You may want to turn this off if you are using a theme
    where slides besides the current slide are visible on screen and should
    be accessible to screenreaders.
  */
  $.deck.defaults = {
    classes: {
      after: 'deck-after',
      before: 'deck-before',
      childCurrent: 'deck-child-current',
      current: 'deck-current',
      loading: 'deck-loading',
      next: 'deck-next',
      onPrefix: 'on-slide-',
      previous: 'deck-previous'
    },

    selectors: {
      container: '.deck-container',
      slides: '.slide'
    },

    keys: {
      // enter, space, page down, right arrow, down arrow,
      next: [13, 32, 34, 39, 40],
      // backspace, page up, left arrow, up arrow
      previous: [8, 33, 37, 38]
    },

    touch: {
      swipeDirection: 'horizontal',
      swipeTolerance: 60
    },

    initLockTimeout: 10000,
    hashPrefix: 'slide-',
    preventFragmentScroll: true,
    setAriaHiddens: true
  };

  $document.ready(function() {
    $('html').addClass('ready');
  });

  $window.bind('hashchange.deck', function(event) {
    if (event.originalEvent && event.originalEvent.newURL) {
      goByHash(event.originalEvent.newURL);
    }
    else {
      goByHash(window.location.hash);
    }
  });

  $window.bind('load.deck', function() {
    if (options.preventFragmentScroll) {
      $container.scrollLeft(0).scrollTop(0);
    }
  });
})(jQuery);

// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = require("util");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
}

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml; // modified for deck.smarkdown.js
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );

/*!
Deck JS - deck.smarkdown
Copyright (c) 2014-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for a shorter syntax for slides, with a syntax that is closer to plain markdown.
TODO:
- configurize the .smark and the default duration also
- have a shortcut for {slide}?

*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};
    var endsWith = function(longStr, part) {return longStr.indexOf(part, longStr.length - part.length) !== -1;}
    var REST = null;
    var startsWith = function(longStr, part) {
        if (part == "%+class:") alert(":::"+longStr+":::");
        var res = longStr.substr(0, part.length) == part;
        REST = res ? longStr.slice(part.length) : null;
        RESTRIM = res ? REST.replace(/^ */, "") : null;
        return res;
    }
    var startsWithIgnoreCase = function(longStr, part) {
        var res = longStr.substr(0, part.length).toUpperCase() == part.toUpperCase();
        REST = res ? longStr.slice(part.length) : null;
        RESTRIM = res ? REST.replace(/^ */, "") : null;
        return res;
    }
    var isArray = Array.isArray || $.isArray; // there is also an alternative in markdownjs

    // the animation duration is stateful across the smarkdown sections
    var animationDurationDefault = 400;
    var animationDuration = animationDurationDefault;

    function clone(a) { return JSON.parse(JSON.stringify(a)) }
    function findTag(tree, regexp, startAt) {
        var i = startAt || 0;
        while (i < tree.length) {
            if (isArray(tree[i]) && tree[i][0].match(regexp)) {
                return i;
            }
            i++;
        }
        return -1;
    }
    function addSpaceSeparatedAttr(o, a, c) {
        ensureHasAttributes(o);
        if (o[1][a])
            o[1][a] += " " + c;
        else
            o[1][a] = c;
    }
    function addClass(o, c) {
        addSpaceSeparatedAttr(o, 'class', c);
    }
    function hasClass(o, c) {
        if (!isObject(o[1]) || !o[1]['class']) {
            return false;
        } else {
            return o[1]['class'].match(new RegExp("\\b"+c+"\\b"));
        }
    }
    function isObject(o) {
        return !isArray(o) && typeof(o) === 'object';
    }
    function ensureHasAttributes(tree) {
        if (!isObject(tree[1])) {
            tree.splice(1, 0, {});
            return true;
        }
        return false;
    }
    function lazyGetAttributes(tree) {
        if (isObject(tree[1])) {
            return tree[1];
        } else {
            return {};
        }
    }
    function lazyUnsetAttributes(tree) {
        if (isObject(tree[1])) {
            tree.splice(1, 1);
        }
    }
    function hasIDOrClassDecoration(s) {
        return s.match(/^(.*)\{([^{}<>]*)\}$/);
    }
    function maybeProcessCopySlide(tree, index) {
        var slide = tree[index];
        ensureHasAttributes(slide);
        if (slide.length != 3) return false;
        if (slide[2][0] != "h1") return false;
        ensureHasAttributes(slide[2]);
        if (startsWithIgnoreCase(slide[2][2], "@COPY:#")) {
            var main = RESTRIM.split(/:/);
            var idOfBase = main[0];
            var animPart = main.slice(1).join(":");
            var hasAnim = ! animPart.match(/^\s*$/);
            var base = null;
            for (i in tree) {
                if (i == 0 || (i==1 && isObject(tree[1]))) continue;
                ensureHasAttributes(tree[i]);
                if (tree[i][1].id == idOfBase) {
                    base = tree[i];
                    break;
                }
            }
            if (base == null) { alert("pb"); return false; } // TODO should alert based on options
            var content = [["div", {}, "@anim:" + animPart]];
            content = content.concat(clone(base.slice(2)));
            slide[1] = clone(base[1]);
            delete slide[1].id;
            if (hasAnim) addClass(slide, "anim-continue");
            slide.splice.apply(slide, [2, 1].concat(content)); // replace the h1 with content
            return true;
        }
        return false;
    }
    function processIDOrClassDecoration(tree, index) {
        var matched = hasIDOrClassDecoration(tree[index]); // make sure the group is set
        if (!matched) { alert("should call processIDOrClassDecoration() only if hasIDOrClassDecoration is true"); return; }
        var returnValue = false; // whether we added the attributes
        var base = RegExp.$1;
        var decorations = RegExp.$2.split(/ +/);
        if (ensureHasAttributes(tree)) {
            if (index>0) index++;
            returnValue = true;
        }
        tree[index] = base;
        for (d in decorations) {
            // allow .class and class notations
            if (startsWith(decorations[d], ".")) decorations[d] = decorations[d].slice(1);

            if (startsWith(decorations[d], "#")) {
                tree[1].id = decorations[d].slice(1);
            } else {
                if (startsWith(decorations[d], "*") | startsWith(decorations[d], "/")) {
                    addSpaceSeparatedAttr(tree, "data-container-class", decorations[d].slice(1));
                } else {
                    addClass(tree, decorations[d]);
                }
            }                
        }
        return returnValue;
    }
    function possiblyHideIfEmpty(tree) { // if it contains only anim stuf etc
        var hide = false;
        var i = isObject(tree[1]) ? 2 : 1;
        function onlyDivAnims(tt) {
            var only = true;
            var start = isObject(tt[1]) ? 2 : 1;
            tt.slice(start).forEach(function(e) {
                if (!isArray(e) || !isObject(e[1]) || (" "+e[1]["class"]).indexOf(" anim-") == -1) {
                    only = false;
                }
            });
            return only;
        }

        if (onlyDivAnims(tree)) hide = true;
        else if (tree.length == i+1 && isArray(tree[i]) && tree[i][0] == "p"
                 && onlyDivAnims(tree[i])) hide = true;
        if (hide) {
            ensureHasAttributes(tree);
            tree[1].style = "display: none";
        }
    }
    function maybeProcessComment(tree, index) {
        var line = tree[index];
        var clean = function(s) { return s;}; //return s.replace(/\/\\\//g, '//'); };
        if (line.match(/^(.*?)[\n\s]*\/\/ +(.*)/)) {
            var obj = ["div", {
                'class': "comment"
            }, clean(RegExp.$2)];
            tree.splice(index, 1, RegExp.$1, obj);
            return true;
        }
        tree[index] = clean(tree[index]);
        return false;
    }
    function maybeProcessAtSomething(tree, index) {
        var line = tree[index];
        if (startsWithIgnoreCase(line, "@SVG:")) {
            var content = RESTRIM
            var parts = content.split(/ +/);
            if (hasIDOrClassDecoration(content) || parts.length == 3) {
                // new version
                var obj = ["div", {
                    'data-src': parts[0],
                    'data-width': parts[1],
                    'data-height': parts[2],
                    'class': "svg-object"
                }, parts.slice(3).join(" ")];
                // TODO: alert when wrong number of args
                if (hasIDOrClassDecoration(content)) processIDOrClassDecoration(obj, 2);
                tree[index] = obj;
            } else {
                // TODO allow this only when an option is set option
                // old, smartsyntax version
                var obj = ["div", {
                    'data-src': parts[1],
                    'data-width': parts[2],
                    'data-height': parts[3],
                    'class': "svg-object"
                }, ""];
                parts[0].split(/,/).forEach(function (p) { addClass(obj, p); });
                tree[index] = obj;
            }
        } else if (startsWithIgnoreCase(line, "@ANIM:")) {
            line = RESTRIM.replace(/%[+]/i, "%%"); // protect the "%+class" from being split
            var allToAdd = [];
            var parts = line.split(/ *\| */); // TODO: configurize + reconsider all separators?
            for (i in parts) {
                // process each group of simultaneous animations
                var subparts = parts[i].split(/ *\+ */);
                for (ii in subparts) {
                    var what = subparts[ii];
                    if (what == "") continue; // as a good side effect, this allows to set a "anim-continue" on all elements (e.g., put a + at the end of the line) 
                    var continuating  = ii != subparts.length-1;
                    var toAdd = ["div", {}, ""];
                    addClass(toAdd, "slide");
                    // process the individual element (reminder: animationDuration is global)
                    function dw() { addSpaceSeparatedAttr(toAdd, "data-what", REST); }
                    function dd() { addSpaceSeparatedAttr(toAdd, "data-dur", ""+animationDuration); }
                    if (startsWithIgnoreCase(what, "%duration:")) {
                        animationDuration = RESTRIM == "" ? animationDurationDefault : RESTRIM;
                        continue;
                    } else if (startsWithIgnoreCase(what, "%dur:")) {
                        animationDuration = RESTRIM == "" ? animationDurationDefault : RESTRIM;
                        continue;
                    } else if (startsWithIgnoreCase(what, "%play:")) {
                        addClass(toAdd, "anim-play");
                        dw();
                    } else if (startsWithIgnoreCase(what, "%pause:")) {
                        addClass(toAdd, "anim-pause");
                        dw();
                    } else if (startsWith(what, "%viewbox:")) {
                        addClass(toAdd, "anim-viewboxas");
                        // TODO: if REST contains ':', two params (then the target is specified, else it is just all SVGs root elements)
                        addSpaceSeparatedAttr(toAdd, "data-as", REST);
                        addSpaceSeparatedAttr(toAdd, "data-what", "svg");
                        dd();
                    } else if (startsWith(what, "%attr:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-attribute");
                        addSpaceSeparatedAttr(toAdd, "data-what", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-attr", main.slice(1).join(":"));
                        dd();
                    } else if (startsWith(what, "%along:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-along");
                        if (startsWith(main[0], "-")) {
                            main[0] = RESTRIM;
                            addSpaceSeparatedAttr(toAdd, "data-reverse", "true");
                        }
                        addSpaceSeparatedAttr(toAdd, "data-path", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                        dd();
                    } else if (startsWith(what, "%%class:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-addclass");
                        addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                    } else if (startsWith(what, "%-class:")) {
                        var main = RESTRIM.split(/ *: */);
                        addClass(toAdd, "anim-removeclass");
                        addSpaceSeparatedAttr(toAdd, "data-class", main[0]);
                        addSpaceSeparatedAttr(toAdd, "data-what", main.slice(1).join(":"));
                    } else if (startsWith(what, "+")) {
                        addClass(toAdd, "anim-show");
                        dw();
                    } else if (startsWith(what, "-")) {
                        addClass(toAdd, "anim-hide");
                        dw(); dd();
                    } else {
                        addClass(toAdd, "anim-show");
                        addSpaceSeparatedAttr(toAdd, "data-what", what);
                        dd();
                    }
                    if (continuating) addClass(toAdd, "anim-continue");
                    allToAdd.push(toAdd);
                }
            }
            tree.splice.apply(tree, [index, 1].concat(allToAdd)); // just replacing the text with allToAdd elements
        } else {
            return false;
        }
        // TODO? handle the decorations for comments
        return true;
    }
    function processMath(content) {
        return content.replace(/\$([^$][^$]*)\$/g, '<span class="latex">\\displaystyle $1</span>').replace(/\$\$/, '$');
    }

    var interpretationOfSmartLanguage = function(smark, doc) {
        var jstree = markdown.toHTMLTree(smark);
        
        // split at each h2 or h1
        (function makeTopLevelDivs(jsTree) {
            var firstIndex = findTag(jsTree, /^(h1|h2)$/);
            if (firstIndex == -1) return;
            var secondIndex = findTag(jsTree, /^(h1|h2)$/, firstIndex+1);
            if (secondIndex == -1) secondIndex = jsTree.length;
            var slide = ["section"].concat( // we will add the 'slide' class later below
                jsTree.splice(firstIndex, secondIndex - firstIndex));
            jsTree.splice(firstIndex, 0, slide);
            makeTopLevelDivs(jsTree);
        })(jstree);

        // process:
        // - the class and id decorations like    {#first hightlight slide}
        // - the @... custom notations
        // - the // for comments
        for (s in jstree) {
            if (s == 0 || (s==1 && isObject(jstree[1]))) continue;
            var slide = jstree[s];
            ensureHasAttributes(slide);
            if (maybeProcessCopySlide(jstree, s)) {
                //continue;
                // actually we want to apply anims to it
            }
            // cleanup: first, remove first "p" in a "li" (happens when one put an empty line in a bullet list, but it would break the decorations)
            (function patch(tree){ // tree is slide or a subelement
                var i = 1;
                while (i < tree.length) {
                    if (isArray(tree[i])) {
                        if (tree[i][0] === "li") {
                            var li = tree[i];
                            if (isArray(li[1]) && li[1][0] === "p") {
                                li.splice.apply(li, [1, 1].concat(li[1].slice(1)));
                                continue;
                            }
                        }
                        patch(tree[i]);
                    }
                    i++;
                }
            })(slide);
            // process @anim... and {} decoration
            (function patch(tree){ // tree is slide or a subelement
                var i = 1;
                while (i < tree.length) {
                    if (isArray(tree[i])) patch(tree[i]);
                    else if (typeof(tree[i]) == 'string') {
                        if (maybeProcessComment(tree, i)) continue;
                        else if (maybeProcessAtSomething(tree, i)) continue;
                        else if (hasIDOrClassDecoration(tree[i])) {
                            if (processIDOrClassDecoration(tree, i)) {
                                i++; // avoid processing the same element twice
                            }
                        }
                    }
                    i++;
                }
            })(slide);
            // cleanup: hide empty "li" after @anim processing
            (function patch(tree){ // tree is slide or a subelement
                var i = 1;
                while (i < tree.length) {
                    if (isArray(tree[i])) {
                        if (tree[i][0] === "li" && possiblyHideIfEmpty(tree[i])) continue;
                        else patch(tree[i]);
                    }
                    i++;
                }
            })(slide);
            // process the $math$
            (function patch(tree){ // tree is slide or a subelement
                if (hasClass(tree, "smark-nomath")) return;
                var i = 1;
                while (i < tree.length) {
                    if (isArray(tree[i])) patch(tree[i]);
                    else if (typeof(tree[i]) == 'string') {
                        tree[i] = processMath(tree[i]);
                    }
                    i++;
                }
            })(slide);
            // change things to textarea (to help with codemirror) https://github.com/iros/deck.js-codemirror/issues/19
            (function patch(tree){ // tree is slide or a subelement
                if (hasClass(tree, "smark-textarea")) {
                    tree[3][0] = "textarea";
                }
                var i = 1;
                while (i < tree.length) {
                    if (isArray(tree[i])) patch(tree[i]);
                    i++;
                }
            })(slide);
            // now propagate to the slide
            var hAttributes = lazyGetAttributes(slide[2]);
            if (slide[1]['class']) {
                var cl = slide[1]['class'];
                slide[1] = clone(hAttributes);
                addClass(slide, cl);
            } else {
                slide[1] = clone(hAttributes);
            }
            lazyUnsetAttributes(slide[2]);
            addClass(slide, 'slide');
        }

        return markdown.renderJsonML(jstree);
    }

    // this have to be executed before the deck init
    $d.bind('deck.beforeInit', function() {
        $('.smark').each(function() { // TODO make it configurable
            var it = this;
            var slides = interpretationOfSmartLanguage(it.innerHTML, document);
            $(it).after(slides);
            // remove the smart node (to avoid having an empty non-slide sibling (e.g., in the presenter view))
            $(it).remove();
        });
        var opts = $[deck]('getOptions');
        var maybe = function(f) { return f || (function(){}); }
        maybe(opts.AFTERSMARKDOWN)();
        $[deck]('reInitSlidesArray')
    });

})(jQuery, 'deck');

/*!
  Deck JS - deck.fit
  Copyright (c) 2012 Rémi Emonet
  Licensed under the MIT license.
  https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
  This extension provides a way of scaling the slides to fit the slide container.
  A "design size" is used to do global scaling of all slides in the same way.
  The default design size is 800x600.
*/
(function($, deck, window, undefined) {
    var $d = $(document),
    $w = $(window),
    timer, // Timeout id for debouncing
    rootSlides,
    
    /*
      Internal function to do all the dirty work of scaling the slides.
    */
    scaleDeck = function() {
        var opts = $[deck]('getOptions');
        var addMarginX = opts.fitMarginX * 2;
        var addMarginY = opts.fitMarginY * 2;
        var fitMode = opts.fitMode;
        var sdw = opts.designWidth;
        var sdh = opts.designHeight;
        var $container = $[deck]('getContainer');
        var scaleX = $container.hasClass(opts.classes.globalscale) ? $container.innerWidth() / (sdw+addMarginX) : 1;
        var scaleY = $container.hasClass(opts.classes.globalscale) ? $container.innerHeight() / (sdh+addMarginY) : 1;
        //var truescaleX = $container.hasClass(opts.classes.globalscale) ? $container.innerWidth() / (sdw) : 1;
        //var truescaleY = $container.hasClass(opts.classes.globalscale) ? $container.innerHeight() / (sdh) : 1;
        var scale = scaleX < scaleY ? scaleX : scaleY;
        var rootSlides = [];
        var slideTest = $.map([opts.classes.before, opts.classes.previous, opts.classes.current, opts.classes.next, opts.classes.after],
                              function(el, i) {return '.' + el;}).join(', ');

        $.each($[deck]('getSlides'), function(i, $el) {
            if (!$el.parentsUntil(opts.selectors.container).length) {
                rootSlides.push($el);
            }
        });
        $.each(rootSlides, function(i, $slide) {
            $slide.css('width', sdw);
            $slide.css('height', sdh);
            $.each('Webkit Moz O ms Khtml'.split(' '), function(i, prefix) {
                if (scale == 1) {
                    $slide.css(prefix + 'Transform', '');
                } else {
                    if (fitMode == "left top" || fitMode == "top left") {
                        // ok align left/top (ok with the percents)
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%,50%) translate('+(addMarginX/2)+'px,'+(addMarginY/2)+'px)');
                    } else if (fitMode == "center middle") {
                        // ok align center/middle
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%, 50%) translate('+($container.innerWidth()/2/scale - sdw/2)+'px,'+($container.innerHeight()/2/scale - sdh/2)+'px)');
                    } else if (fitMode == "right bottom" || fitMode == "bottom right") {
                        // ok align right/bottom
                        $slide.css(prefix + 'Transform', 'translate(-50%,-50%) scale(' + scale + ' , ' + scale + ') translate(50%, 50%) translate('+($container.innerWidth()/scale - sdw - addMarginX/2)+'px,'+($container.innerHeight()/scale - sdh - addMarginY/2)+'px)');
                    } else if (fitMode == "stretched") {
                        // ok stretched (with respect of the margin, i.e., it is center/middle)
                        $slide.css(prefix + 'Transform', 'scale(' + scaleX + ' , ' + scaleY + ') translate('+(($container.innerWidth()-sdw)/2/scaleX)+'px,'+(($container.innerHeight()-sdh)/2/scaleY)+'px)');
                    }
                }
            });
        });
        
    }
    
    /*
      Extends defaults/options.
      
      options.designWidth
      Defaults to 800. You may instead specify a width as a number
      of px and all slides will be scaled in the same way, considering their
      size is the provided one.
      
      options.designHeight
      Defaults to 600. You may instead specify a height as a number
      of px and all slides will be scaled in the same way, considering their
      size is the provided one.
      
      options.fitMode
      How to adapt the slide to the container.
      Only the following combinations are available for now:
      "center middle", "top left", "bottom right", "stretched"
    
      options.fitMarginX
      options.fitMarginY
      Defaults to 5. Adds some margin in design space units.
      E.g., if the designe width is 800 and the margin is 5, the slide will be
      810 pixel wide before rescaling.
    
      options.scaleDebounce
      Scaling on the browser resize event is debounced. This number is the
      threshold in milliseconds. You can learn more about debouncing here:
      http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
      
    */
    $.extend(true, $[deck].defaults, {
        classes: {
            globalscale: 'deck-globalscale'
        },
        keys: {
            scale: 83 // s
        },
        
        designWidth: 800,
        designHeight: 600,
        fitMode: "center middle",
        fitMarginX: 0,
        fitMarginY: 0,
        scaleDebounce: 200
    });
    
    /*
      jQuery.deck('disableScale')
      
      Disables scaling and removes the scale class from the deck container.
    */
    $[deck]('extend', 'disableScale', function() {
        $[deck]('getContainer').removeClass($[deck]('getOptions').classes.globalscale);
        scaleDeck();
    });
    
    /*
      jQuery.deck('enableScale')
      
      Enables scaling and adds the scale class to the deck container.
    */
    $[deck]('extend', 'enableScale', function() {
        $[deck]('getContainer').addClass($[deck]('getOptions').classes.globalscale);
        scaleDeck();
    });
    
    /*
      jQuery.deck('toggleScale')
      
      Toggles between enabling and disabling scaling.
    */
    $[deck]('extend', 'toggleScale', function() {
        var $c = $[deck]('getContainer');
        $[deck]($c.hasClass($[deck]('getOptions').classes.globalscale) ?
                'disableScale' : 'enableScale');
    });
    
    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        
        // Debounce the resize scaling
        $w.unbind('resize.deckscale').bind('resize.deckscale', function() {
            window.clearTimeout(timer);
            timer = window.setTimeout(scaleDeck, opts.scaleDebounce);
        })
        // Scale once on load, in case images or something change layout
            .unbind('load.deckscale').bind('load.deckscale', scaleDeck);
        
        // Bind key events
        $d.unbind('keydown.deckscale').bind('keydown.deckscale', function(e) {
            if (e.which === opts.keys.scale || $.inArray(e.which, opts.keys.scale) > -1) {
                $[deck]('toggleScale');
                e.preventDefault();
            }
        });
        
        // Enable scale on init
        $[deck]('enableScale');
    });
})(jQuery, 'deck', this);


// This script was automatically generated from a literate source.  
// Do not edit this file; look at the literate source instead!
//
// Greasemonkey user script to 
// Display LaTeX in Web pages by transforming to MathML
// --------------------------------------------------------------------

// Original script by
// Copyright (C) 2006 Steve Cheng <stevecheng@users.sourceforge.net>
// Home page: http://gold-saucer.afraid.org/mathml/greasemonkey/
//
// Modified by
// Copyright (C) 2010 Valery Alexeev <va.email.tex@gmail.com>
// Version 1.15, May 7, 2010
// as follows:
//
// Added arxiv.org, front.math.ucdavis.edu, *mathscinet*, mail.google.com
// Changed char_map to fix the display for \mathcal, \mathbb, \mathfrak
// Fixed the displayed formulas with $$...$$ and \[...\]
// Added \scr, \germ, \roman, etc used by Mathscinet.
// Added miscellaneous symbols and arrows 

// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHOR(S) BE LIABLE FOR ANY CLAIM, DAMAGES OR
// OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
// ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALNGS IN THE SOFTWARE.


function latex2mml() {


    function GM_log() {}


// First, find out where we are
var va_loc = window.location.href;
var va_view = 'web';

//alert( 'va_view=' + va_view );

// The script itself begins

var/*const*/ mmlns = 'http://www.w3.org/1998/Math/MathML';

/*
// VA: Fix displayed equations first.
if( va_view == 'web' ){
    document.body.innerHTML=
	document.body.innerHTML.replace(/\n/g," "); // remove end-of-lines
    document.body.innerHTML=
	document.body.innerHTML.replace(/(\$\$|\\\[)([^$]+)(\$\$|\\\])/g,
					"<p style=\"text-indent: 20px;\"> \$ $2 \$ </p>");
// VA: Experimental: may lead to slow down. \spcheck is used on MathSciNet
// document.body.innerHTML=
// document.body.innerHTML.replace(/\\spcheck/g,"^{\\vee}");
}
*/


function result_element(tag, num_attrs)
{
  var node = document.createElementNS(mmlns, tag);

  var k = 2;
  while(--num_attrs >= 0) {
    if(arguments[k+1] != null) {
      node.setAttribute(arguments[k], arguments[k+1]);
    }
    k += 2;
  }
    
  for(; k < arguments.length; k++) {
    if(arguments[k] != null) {
      if(typeof(arguments[k]) == 'string')
        node.appendChild(document.createTextNode(arguments[k]));
      else
        node.appendChild(arguments[k]);
    }
  }

  return node;
}


function result_element_append(parent, child)
{
  if(parent != null && child != null) {
    if(typeof(child) == 'string')
      parent.appendChild(document.createTextNode(child));
    else
      parent.appendChild(child);
  }
}


function result_element_prepend(parent, child, next)
{
  if(next == null)
    result_element_append(parent, child);
  else if (parent != null && child != null)
    parent.insertBefore(child, next);
}


function result_set_attr(elem, attr, value)
{
  if(elem != null && attr != null) {
    if(value != null)
      elem.setAttribute(attr, value);
    else
      elem.removeAttribute(attr);
  }
}


function result_append_attr(elem, attr, value)
{
  if(elem != null && attr != null) {
    var old_value = elem.getAttribute(elem, attr);
    if(old_value == null)
      elem.setAttribute(attr, value);
    else
      elem.setAttribute(attr, old_value + value);
  }
}

/*
if( va_view == 'web' ){
    if(!this.GM_getValue) {
	this.GM_getValue = function(key, value) { return value; }
	this.GM_log = function() {}
    }
    
    
    if(this.GM_registerMenuCommand) {
	GM_registerMenuCommand("Enable native display of math images", 
			       function() {
				   GM_setValue("patch-images", true);
				   do_patch_images = true;
				   patch_element(document.documentElement);
			       });
	GM_registerMenuCommand("Disable native display of math images",
			       function() {
				   GM_setValue("patch-images", false);
			       });
    }
}
*/

// VA: changed char_map
var/*const*/ char_map = {
  'script': [
	     '\uD835\uDC9C', '\u212C', '\uD835\uDC9E', //abc
	     '\uD835\uDC9F', '\u2130', '\u2131', //def
	     '\uD835\uDCA2', '\u210B', '\u2110', //ghi
	     '\uD835\uDCA5', '\uD835\uDCA6', '\u2112', //jkl
	     '\u2133', '\uD835\uDCA9', '\uD835\uDCAA', //mno
	     '\uD835\uDCAB', '\uD835\uDCAC', '\u211B', //pqr
	     '\uD835\uDCAE', '\uD835\uDCAF', '\uD835\uDCB0', //stu
	     '\uD835\uDCB1', '\uD835\uDCB2', '\uD835\uDCB3', //vwx
	     '\uD835\uDCB4', '\uD835\uDCB5' ], //yz

  'fraktur': [
	      '\uD835\uDD04', '\uD835\uDD05', '\u212D', //abc
	      '\uD835\uDD07', '\uD835\uDD08', '\uD835\uDD09', //def
	      '\uD835\uDD0A', '\u210C', '\u2111', //ghi
	      '\uD835\uDD0D', '\uD835\uDD0E', '\uD835\uDD0F', //jkl
	      '\uD835\uDD10', '\uD835\uDD11', '\uD835\uDD12', //mno
	      '\uD835\uDD13', '\uD835\uDD14', '\u211C', //pqr
	      '\uD835\uDD16', '\uD835\uDD17', '\uD835\uDD18', //stu
	      '\uD835\uDD19', '\uD835\uDD1A', '\uD835\uDD1B', //vwx
	      '\uD835\uDD1C', '\u2128' ], //yz

  'double-struck': [
		    '\uD835\uDD38', '\uD835\uDD39', '\u2102', //abc
		    '\uD835\uDD3B', '\uD835\uDD3C', '\uD835\uDD3D', //def
		    '\uD835\uDD3E', '\u210D', '\uD835\uDD40', //ghi
		    '\uD835\uDD41', '\uD835\uDD42', '\uD835\uDD43', //jkl
		    '\uD835\uDD44', '\u2115', '\uD835\uDD46', //mno
		    '\u2119', '\u211A', '\u211D', //pqr
		    '\uD835\uDD4A', '\uD835\uDD4B', '\uD835\uDD4C', //stu
		    '\uD835\uDD4D', '\uD835\uDD4E', '\uD835\uDD4F', //vwx
		    '\uD835\uDD50', '\u2124', ], //yz
};

var/*const*/ uppercase_re = /[A-Z]/;

function fix_mathvariant(node, style)
{
  if(node.nodeType == node.TEXT_NODE) {
    if(style != null && style != '' && style in char_map) {
      node.data = node.data.replace(uppercase_re,
        function(s) {return char_map[style][s.charCodeAt(0)-65]});
    }
  } else if(node.nodeType == node.ELEMENT_NODE) {
    var new_style = node.getAttribute('mathvariant');
    if(new_style != null && new_style != '')
      style = new_style;

    for(var i=0; i < node.childNodes.length; i++)
      fix_mathvariant(node.childNodes.item(i), style);
  }
}

var g_punct_and_space
= {"\\quad" : "\u2003" ,
"\\qquad" : "\u2003\u2003" ,
"\\thickspace" : "\u2002" ,
"\\;" : "\u2002" ,
"\\medspace" : "\u2005" ,
"\\:" : "\u2005" ,
"\\thinspace" : "\u2004" ,
"\\," : "\u2004" ,
"\\!" : "\u200b" ,
"." : "." ,
";" : ";" ,
"?" : "?" ,
"\\qedsymbol" : "\u25a0" ,
}
;
var g_left_delimiters
= {"(" : "(" ,
"[" : "[" ,
"\\{" : "{" ,
"\\lgroup" : "(" ,
"\\lbrace" : "{" ,
"\\lvert" : "|" ,
"\\lVert" : "\u2016" ,
"\\lceil" : "\u2308" ,
"\\lfloor" : "\u230a" ,
"\\lmoustache" : "\u23b0" ,
"\\langle" : "\u2329" ,
}
;
var g_right_delimiters
= {")" : ")" ,
"]" : "]" ,
"\\}" : "}" ,
"\\rbrace" : "}" ,
"\\rgroup" : ")" ,
"\\rvert" : "|" ,
"\\rVert" : "\u2016" ,
"\\rceil" : "\u2309" ,
"\\rfloor" : "\u230b" ,
"\\rmoustache" : "\u23b1" ,
"\\rangle" : "\u232a" ,
}
;
var g_operator_symbols
= {"\\amalg" : "\u2a3f" ,
"\\ast" : "*" ,
"\\ast" : "\u2217" ,
"\\barwedge" : "\u22bc" ,
"\\barwedge" : "\u2305" ,
"\\bigcirc" : "\u25cb" ,
"\\bigtriangledown" : "\u25bd" ,
"\\bigtriangleup" : "\u25b3" ,
"\\boxdot" : "\u22a1" ,
"\\boxminus" : "\u229f" ,
"\\boxplus" : "\u229e" ,
"\\boxtimes" : "\u22a0" ,
"\\bullet" : "\u2022" ,
"\\bullet" : "\u2219" ,
"\\cap" : "\u2229" ,
"\\Cap" : "\u22d2" ,
"\\cdot" : "\u22c5" ,
"\\centerdot" : "\u00b7" ,
"\\circ" : "\u2218" ,
"\\circledast" : "\u229b" ,
"\\circledcirc" : "\u229a" ,
"\\circleddash" : "\u229d" ,
"\\cup" : "\u222a" ,
"\\Cup" : "\u22d3" ,
"\\curlyvee" : "\u22ce" ,
"\\curlywedge" : "\u22cf" ,
"\\dagger" : "\u2020" ,
"\\ddagger" : "\u2021" ,
"\\diamond" : "\u22c4" ,
"\\div" : "\u00f7" ,
"\\divideontimes" : "\u22c7" ,
"\\dotplus" : "\u2214" ,
"\\doublebarwedge" : "\u2306" ,
"\\doublecap" : "\u22d2" ,
"\\doublecup" : "\u22d3" ,
"\\gtrdot" : "\u22d7" ,
"\\intercal" : "\u22ba" ,
"\\land" : "\u2227" ,
"\\leftthreetimes" : "\u22cb" ,
"\\lessdot" : "\u22d6" ,
"\\lor" : "\u2228" ,
"\\ltimes" : "\u22c9" ,
"\\mp" : "\u2213" ,
"\\odot" : "\u2299" ,
"\\ominus" : "\u2296" ,
"\\oplus" : "\u2295" ,
"\\oslash" : "\u2298" ,
"\\otimes" : "\u2297" ,
"\\pm" : "\u00b1" ,
"\\rightthreetimes" : "\u22cc" ,
"\\rtimes" : "\u22ca" ,
"\\setminus" : "\u2216" ,
"\\smallsetminus" : "\u2216" ,
"\\sqcap" : "\u2293" ,
"\\sqcup" : "\u2294" ,
"\\star" : "\u22c6" ,
"\\times" : "\u00d7" ,
"\\triangleleft" : "\u25c1" ,
"\\triangleright" : "\u25b7" ,
"\\uplus" : "\u228e" ,
"\\vee" : "\u2228" ,
"\\spcheck" : "\u207a" , // has to be ^{\vee} instead but that's hard
			 // to code
    //"\\spcheck" : "\u002a" , 
"\\veebar" : "\u22bb" ,
"\\veebar" : "\u2a61" ,
"\\wedge" : "\u2227" ,
"\\wr" : "\u2240" ,
"+" : "+" ,
"-" : "\u2212" ,
"*" : "*" ,
"," : "," ,
"/" : "\u2215" ,
":" : ":" ,
"\\colon" : ":" ,
"|" : "|" ,
"\\vert" : "|" ,
"\\Vert" : "\u2016" ,
"\\|" : "\u2016" ,
"\\backslash" : "\\" ,
"'" : "\u2032" ,
"\\#" : "#" ,
"\\bmod" : "mod" ,
"\\mod" : "mod" ,
"\\downarrow" : "\u2193" ,
"\\Downarrow" : "\u21d3" ,
"\\uparrow" : "\u2191" ,
"\\Uparrow" : "\u21d1" ,
"\\updownarrow" : "\u2195" ,
"\\Updownarrow" : "\u21d5" ,
"\\bigcap" : "\u22c2" ,
"\\bigcup" : "\u22c3" ,
"\\bigodot" : "\u2a00" ,
"\\bigoplus" : "\u2a01" ,
"\\bigotimes" : "\u2a02" ,
"\\bigsqcup" : "\u2a06" ,
"\\biguplus" : "\u2a04" ,
"\\bigvee" : "\u22c1" ,
"\\bigwedge" : "\u22c0" ,
"\\coprod" : "\u2210" ,
"\\prod" : "\u220f" ,
"\\sum" : "\u2211" ,
"\\int" : "\u222b" ,
"\\smallint" : "\u222b" ,
"\\oint" : "\u222e" ,
"\\angle" : "\u2220" ,
"\\backprime" : "\u2035" ,
"\\bigstar" : "\u2605" ,
"\\blacklozenge" : "\u29eb" ,
"\\blacksquare" : "\u25a0" ,
"\\blacktriangle" : "\u25b4" ,
"\\blacktriangledown" : "\u25be" ,
"\\bot" : "\u22a5" ,
"\\clubsuit" : "\u2663" ,
"\\diagdown" : "\u2572" ,
"\\diagup" : "\u2571" ,
"\\diamondsuit" : "\u2662" ,
"\\emptyset" : "\u2205" ,
"\\exists" : "\u2203" ,
"\\flat" : "\u266d" ,
"\\forall" : "\u2200" ,
"\\heartsuit" : "\u2661" ,
"\\infty" : "\u221e" ,
"\\lnot" : "\u00ac" ,
"\\lozenge" : "\u25ca" ,
"\\measuredangle" : "\u2221" ,
"\\nabla" : "\u2207" ,
"\\natural" : "\u266e" ,
"\\neg" : "\u00ac" ,
"\\nexists" : "\u2204" ,
"\\prime" : "\u2032" ,
"\\sharp" : "\u266f" ,
"\\spadesuit" : "\u2660" ,
"\\sphericalangle" : "\u2222" ,
"\\square" : "\u25a1" ,
"\\surd" : "\u221a" ,
"\\top" : "\u22a4" ,
"\\triangle" : "\u25b5" ,
"\\triangledown" : "\u25bf" ,
"\\varnothing" : "\u2205" ,
"\\aleph" : "\u2135" ,
"\\Bbbk" : "\u1d55C" ,
"\\beth" : "\u2136" ,
"\\circledS" : "\u24c8" ,
"\\complement" : "\u2201" ,
"\\daleth" : "\u2138" ,
"\\ell" : "\u2113" ,
"\\eth" : "\u00f0" ,
"\\Finv" : "\u2132" ,
"\\Game" : "\u2141" ,
"\\gimel" : "\u2137" ,
"\\hbar" : "\u210f" ,
"\\hslash" : "\u210f" ,
"\\Im" : "\u2111" ,
"\\mho" : "\u2127" ,
"\\partial" : "\u2202" ,
"\\Re" : "\u211c" ,
"\\wp" : "\u2118" ,
}
;
var g_relation_symbols
= {"=" : "=" ,
"<" : "<" ,
">" : ">" ,
"\\approx" : "\u2248" ,
"\\approxeq" : "\u224a" ,
"\\asymp" : "\u2248" ,
"\\backsim" : "\u223d" ,
"\\backsimeq" : "\u22cd" ,
"\\bumpeq" : "\u224f" ,
"\\Bumpeq" : "\u224e" ,
"\\circeq" : "\u2257" ,
"\\cong" : "\u2245" ,
"\\curlyeqprec" : "\u22de" ,
"\\curlyeqsucc" : "\u22df" ,
"\\doteq" : "\u2250" ,
"\\doteqdot" : "\u2251" ,
"\\eqcirc" : "\u2256" ,
"\\eqsim" : "\u2242" ,
"\\eqslantgtr" : "\u2a96" ,
"\\eqslantless" : "\u2a95" ,
"\\equiv" : "\u2261" ,
"\\fallingdotseq" : "\u2252" ,
"\\ge" : "\u2265" ,
"\\geq" : "\u2265" ,
"\\geqq" : "\u2267" ,
"\\geqslant" : "\u2a7e" ,
"\\gg" : "\u226b" ,
"\\gg" : "\u2aa2" ,
"\\ggg" : "\u22d9" ,
"\\gggtr" : "\u22d9" ,
"\\gnapprox" : "\u2a8a" ,
"\\gneq" : "\u2a88" ,
"\\gneqq" : "\u2269" ,
"\\gnsim" : "\u22e7" ,
"\\gtrapprox" : "\u2a86" ,
"\\gtreqless" : "\u22db" ,
"\\gtreqqless" : "\u2a8c" ,
"\\gtrless" : "\u2277" ,
"\\gtrsim" : "\u2273" ,
"\\gvertneqq" : "\u2269" ,
"\\le" : "\u2264" ,
"\\leq" : "\u2264" ,
"\\leqq" : "\u2266" ,
"\\leqslant" : "\u2a7d" ,
"\\lessapprox" : "\u2a85" ,
"\\lesseqgtr" : "\u22da" ,
"\\lesseqqgtr" : "\u2a8b" ,
"\\lessgtr" : "\u2276" ,
"\\lesssim" : "\u2272" ,
"\\ll" : "\u226a" ,
"\\llless" : "\u22d8" ,
"\\lnapprox" : "\u2a89" ,
"\\lneq" : "\u2a87" ,
"\\lneqq" : "\u2268" ,
"\\lnsim" : "\u22e6" ,
"\\lvertneqq" : "\u2268" ,
"\\ncong" : "\u2247" ,
"\\ne" : "\u2260" ,
"\\neq" : "\u2260" ,
"\\ngeq" : "\u2271" ,
"\\ngeqq" : "\u2267" ,
"\\ngeqslant" : "\u2a7e" ,
"\\ngtr" : "\u226f" ,
"\\nleq" : "\u2270" ,
"\\nleqq" : "\u2266" ,
"\\nleqslant" : "\u2a7d" ,
"\\nless" : "\u226e" ,
"\\nprec" : "\u2280" ,
"\\npreceq" : "\u2aaf" ,
"\\nsim" : "\u2241" ,
"\\nsucc" : "\u2281" ,
"\\nsucceq" : "\u2ab0" ,
"\\prec" : "\u227a" ,
"\\precapprox" : "\u2ab7" ,
"\\preccurlyeq" : "\u227c" ,
"\\preceq" : "\u2aaf" ,
"\\precnapprox" : "\u2ab9" ,
"\\precneqq" : "\u2ab5" ,
"\\precnsim" : "\u22e8" ,
"\\precsim" : "\u227e" ,
"\\risingdotseq" : "\u2253" ,
"\\sim" : "\u223c" ,
"\\simeq" : "\u2243" ,
"\\succ" : "\u227b" ,
"\\succapprox" : "\u2ab8" ,
"\\succcurlyeq" : "\u227d" ,
"\\succeq" : "\u2ab0" ,
"\\succnapprox" : "\u2aba" ,
"\\succneqq" : "\u2ab6" ,
"\\succnsim" : "\u22e9" ,
"\\succsim" : "\u227f" ,
"\\thickapprox" : "\u2248" ,
"\\thicksim" : "\u223c" ,
"\\triangleq" : "\u225c" ,
"\\longrightarrow" : "\u27F6" ,
"\\curvearrowleft" : "\u21b6" ,
"\\curvearrowright" : "\u21b7" ,
"\\downdownarrows" : "\u21ca" ,
"\\downharpoonleft" : "\u21c3" ,
"\\downharpoonright" : "\u21c2" ,
"\\gets" : "\u2190" ,
"\\hookleftarrow" : "\u21a9" ,
"\\hookrightarrow" : "\u21aa" ,
"\\leftarrow" : "\u2190" ,
"\\Leftarrow" : "\u21d0" ,
"\\leftarrowtail" : "\u21a2" ,
"\\leftharpoondown" : "\u21bd" ,
"\\leftharpoonup" : "\u21bc" ,
"\\leftleftarrows" : "\u21c7" ,
"\\leftrightarrow" : "\u2194" ,
"\\leftrightarrows" : "\u21c6" ,
"\\leftrightharpoons" : "\u21cb" ,
"\\leftrightsquigarrow" : "\u21ad" ,
"\\Lleftarrow" : "\u21da" ,
"\\longleftarrow" : "\u27f5" ,
"\\Longleftarrow" : "\u27f8" ,
"\\longleftrightarrow" : "\u27f7" ,
"\\Longleftrightarrow" : "\u27fa" ,
"\\looparrowleft" : "\u21ab" ,
"\\looparrowright" : "\u21ac" ,
"\\Lsh" : "\u21b0" ,
"\\mapsto" : "\u21a6" ,
"\\multimap" : "\u22b8" ,
"\\nearrow" : "\u2197" ,
"\\nleftarrow" : "\u219a" ,
"\\nLeftarrow" : "\u21cd" ,
"\\nleftrightarrow" : "\u21ae" ,
"\\nLeftrightarrow" : "\u21ce" ,
"\\nrightarrow" : "\u219b" ,
"\\nRightarrow" : "\u21cf" ,
"\\nwarrow" : "\u2196" ,
"\\restriction" : "\u21be" ,
"\\rightarrow" : "\u2192" ,
"\\Rightarrow" : "\u21d2" ,
"\\rightarrowtail" : "\u21a3" ,
"\\rightharpoondown" : "\u21c1" ,
"\\rightharpoonup" : "\u21c0" ,
"\\rightleftarrows" : "\u21c4" ,
"\\rightleftharpoons" : "\u21cc" ,
"\\rightrightarrows" : "\u21c9" ,
"\\rightsquigarrow" : "\u219d" ,
"\\Rrightarrow" : "\u21db" ,
"\\Rsh" : "\u21b1" ,
"\\searrow" : "\u2198" ,
"\\swarrow" : "\u2199" ,
"\\to" : "\u2192" ,
"\\twoheadleftarrow" : "\u219e" ,
"\\twoheadrightarrow" : "\u21a0" ,
"\\upharpoonleft" : "\u21bf" ,
"\\upharpoonright" : "\u21be" ,
"\\upuparrows" : "\u21c8" ,
"\\backepsilon" : "\u03f6" ,
"\\because" : "\u2235" ,
"\\between" : "\u226c" ,
"\\blacktriangleleft" : "\u25c0" ,
"\\blacktriangleright" : "\u25b6" ,
"\\bowtie" : "\u22c8" ,
"\\dashv" : "\u22a3" ,
"\\frown" : "\u2323" ,
"\\in" : "\u220a" ,
"\\mid" : "\u2223" ,
"\\models" : "\u22a7" ,
"\\ni" : "\u220b" ,
"\\ni" : "\u220d" ,
"\\nmid" : "\u2224" ,
"\\notin" : "\u2209" ,
"\\nparallel" : "\u2226" ,
"\\nshortmid" : "\u2224" ,
"\\nshortparallel" : "\u2226" ,
"\\nsubseteq" : "\u2286" ,
"\\nsubseteq" : "\u2288" ,
"\\nsubseteqq" : "\u2ac5" ,
"\\nsupseteq" : "\u2287" ,
"\\nsupseteq" : "\u2289" ,
"\\nsupseteqq" : "\u2ac6" ,
"\\ntriangleleft" : "\u22ea" ,
"\\ntrianglelefteq" : "\u22ec" ,
"\\ntriangleright" : "\u22eb" ,
"\\ntrianglerighteq" : "\u22ed" ,
"\\nvdash" : "\u22ac" ,
"\\nvDash" : "\u22ad" ,
"\\nVdash" : "\u22ae" ,
"\\nVDash" : "\u22af" ,
"\\owns" : "\u220d" ,
"\\parallel" : "\u2225" ,
"\\perp" : "\u22a5" ,
"\\pitchfork" : "\u22d4" ,
"\\propto" : "\u221d" ,
"\\shortmid" : "\u2223" ,
"\\shortparallel" : "\u2225" ,
"\\smallfrown" : "\u2322" ,
"\\smallsmile" : "\u2323" ,
"\\smile" : "\u2323" ,
"\\sqsubset" : "\u228f" ,
"\\sqsubseteq" : "\u2291" ,
"\\sqsupset" : "\u2290" ,
"\\sqsupseteq" : "\u2292" ,
"\\subset" : "\u2282" ,
"\\Subset" : "\u22d0" ,
"\\subseteq" : "\u2286" ,
"\\subseteqq" : "\u2ac5" ,
"\\subsetneq" : "\u228a" ,
"\\subsetneqq" : "\u2acb" ,
"\\supset" : "\u2283" ,
"\\Supset" : "\u22d1" ,
"\\supseteq" : "\u2287" ,
"\\supseteqq" : "\u2ac6" ,
"\\supsetneq" : "\u228b" ,
"\\supsetneqq" : "\u2acc" ,
"\\therefore" : "\u2234" ,
"\\trianglelefteq" : "\u22b4" ,
"\\trianglerighteq" : "\u22b5" ,
"\\varpropto" : "\u221d" ,
"\\varsubsetneq" : "\u228a" ,
"\\varsubsetneqq" : "\u2acb" ,
"\\varsupsetneq" : "\u228b" ,
"\\varsupsetneqq" : "\u2acc" ,
"\\vartriangle" : "\u25b5" ,
"\\vartriangleleft" : "\u22b2" ,
"\\vartriangleright" : "\u22b3" ,
"\\vdash" : "\u22a2" ,
"\\vDash" : "\u22a8" ,
"\\Vdash" : "\u22a9" ,
"\\Vvdash" : "\u22aa" ,
// AMS Arrows
"\\dashleftarrow" : "\u21e0" ,
"\\dashrightarrow" : "\u21e2" ,
}
;
var g_named_identifiers
= {"\\arccos" : "arccos" ,
"\\arcsin" : "arcsin" ,
"\\arctan" : "arctan" ,
"\\arg" : "arg" ,
"\\cos" : "cos" ,
"\\cosh" : "cosh" ,
"\\cot" : "cot" ,
"\\coth" : "coth" ,
"\\csc" : "csc" ,
"\\deg" : "deg" ,
"\\det" : "det" ,
"\\dim" : "dim" ,
"\\exp" : "exp" ,
"\\gcd" : "gcd" ,
"\\hom" : "hom" ,
"\\ker" : "ker" ,
"\\lg" : "lg" ,
"\\ln" : "ln" ,
"\\log" : "log" ,
"\\Pr" : "Pr" ,
"\\sec" : "sec" ,
"\\sin" : "sin" ,
"\\sinh" : "sinh" ,
"\\tan" : "tan" ,
"\\tanh" : "tanh" ,
"\\inf" : "inf" ,
"\\injlim" : "inj lim" ,
"\\lim" : "lim" ,
"\\liminf" : "lim inf" ,
"\\limsup" : "lum sup" ,
"\\max" : "max" ,
"\\min" : "min" ,
"\\projlim" : "proj lim" ,
"\\sup" : "sup" ,
"\\alpha" : "\u03b1" ,
"\\beta" : "\u03b2" ,
"\\chi" : "\u03c7" ,
"\\delta" : "\u03b4" ,
"\\Delta" : "\u0394" ,
"\\digamma" : "\u03dd" ,
"\\epsilon" : "\u03f5" ,
"\\eta" : "\u03b7" ,
"\\gamma" : "\u03b3" ,
"\\Gamma" : "\u0393" ,
"\\iota" : "\u03b9" ,
"\\kappa" : "\u03ba" ,
"\\lambda" : "\u03bb" ,
"\\Lambda" : "\u039b" ,
"\\mu" : "\u03bc" ,
"\\nu" : "\u03bd" ,
"\\omega" : "\u03c9" ,
"\\Omega" : "\u03a9" ,
"\\phi" : "\u03c6" ,
"\\Phi" : "\u03a6" ,
"\\pi" : "\u03c0" ,
"\\Pi" : "\u03a0" ,
"\\psi" : "\u03c8" ,
"\\Psi" : "\u03a8" ,
"\\rho" : "\u03c1" ,
"\\sigma" : "\u03c3" ,
"\\Sigma" : "\u03a3" ,
"\\tau" : "\u03c4" ,
"\\theta" : "\u03b8" ,
"\\Theta" : "\u0398" ,
"\\upsilon" : "\u03c5" ,
"\\Upsilon" : "\u03d2" ,
"\\varepsilon" : "\u03b5" ,
"\\varkappa" : "\u03f0" ,
"\\varphi" : "\u03d5" ,
"\\varpi" : "\u03d6" ,
"\\varrho" : "\u03f1" ,
"\\varsigma" : "\u03c2" ,
"\\vartheta" : "\u03d1" ,
"\\xi" : "\u03be" ,
"\\Xi" : "\u039e" ,
"\\zeta" : "\u03b6" ,
"a" : "a" ,
"b" : "b" ,
"c" : "c" ,
"d" : "d" ,
"e" : "e" ,
"f" : "f" ,
"g" : "g" ,
"h" : "h" ,
"i" : "i" ,
"j" : "j" ,
"k" : "k" ,
"l" : "l" ,
"m" : "m" ,
"n" : "n" ,
"o" : "o" ,
"p" : "p" ,
"q" : "q" ,
"r" : "r" ,
"s" : "s" ,
"t" : "t" ,
"u" : "u" ,
"v" : "v" ,
"w" : "w" ,
"x" : "x" ,
"y" : "y" ,
"z" : "z" ,
"A" : "A" ,
"B" : "B" ,
"C" : "C" ,
"D" : "D" ,
"E" : "E" ,
"F" : "F" ,
"G" : "G" ,
"H" : "H" ,
"I" : "I" ,
"J" : "J" ,
"K" : "K" ,
"L" : "L" ,
"M" : "M" ,
"N" : "N" ,
"O" : "O" ,
"P" : "P" ,
"Q" : "Q" ,
"R" : "R" ,
"S" : "S" ,
"T" : "T" ,
"U" : "U" ,
"V" : "V" ,
"W" : "W" ,
"X" : "X" ,
"Y" : "Y" ,
"Z" : "Z" ,
"\\vdots" : "\u22ee" ,
"\\hdots" : "\u2026" ,
"\\ldots" : "\u2026" ,
"\\dots" : "\u2026" ,
"\\cdots" : "\u00b7\u00b7\u00b7" ,
"\\dotsb" : "\u00b7\u00b7\u00b7" ,
"\\dotsc" : "\u2026" ,
"\\dotsi" : "\u22c5\u22c5\u22c5" ,
"\\dotsm" : "\u22c5\u22c5\u22c5" ,
"\\dotso" : "\u2026" ,
"\\ddots" : "\u22f1" ,
    // Common abbreviation for \mathbb letters
"\\A" : "\uD835\uDD38" ,
"\\bA" : "\uD835\uDD38" ,
"\\B" : "\uD835\uDD39" ,
"\\bB" : "\uD835\uDD39" ,
"\\C" : "\u2102" ,
"\\bC" : "\u2102" ,
"\\D" : "\uD835\uDD3B" ,
"\\bD" : "\uD835\uDD3B" ,
"\\E" : "\uD835\uDD3C" ,
"\\bE" : "\uD835\uDD3C" ,
"\\F" : "\uD835\uDD3D" ,
"\\bF" : "\uD835\uDD3D" ,
"\\G" : "\uD835\uDD3E" ,
"\\bG" : "\uD835\uDD3E" ,
"\\H" : "\u210D" ,
"\\bH" : "\u210D" ,
"\\I" : "\uD835\uDD40" ,
"\\bI" : "\uD835\uDD40" ,
"\\J" : "\uD835\uDD41" ,
"\\bJ" : "\uD835\uDD41" ,
"\\K" : "\uD835\uDD42" ,
"\\bK" : "\uD835\uDD42" ,
"\\L" : "\uD835\uDD43" ,
"\\bL" : "\uD835\uDD43" ,
"\\M" : "\uD835\uDD44" ,
"\\bM" : "\uD835\uDD44" ,
"\\N" : "\u2115" ,
"\\bN" : "\u2115" ,
"\\O" : "\uD835\uDD46" ,
"\\bO" : "\uD835\uDD46" ,
"\\P" : "\u2119" ,
"\\bP" : "\u2119" ,
"\\Q" : "\u211A" ,
"\\bQ" : "\u211A" ,
"\\R" : "\u211D" ,
"\\bR" : "\u211D" ,
"\\S" : "\uD835\uDD4A" ,
"\\bS" : "\uD835\uDD4A" ,
"\\T" : "\uD835\uDD4B" ,
"\\bT" : "\uD835\uDD4B" ,
"\\U" : "\uD835\uDD4C" ,
"\\bU" : "\uD835\uDD4C" ,
"\\V" : "\uD835\uDD4D" ,
"\\bV" : "\uD835\uDD4D" ,
"\\W" : "\uD835\uDD4E" ,
"\\bW" : "\uD835\uDD4E" ,
"\\X" : "\uD835\uDD4F" ,
"\\bX" : "\uD835\uDD4F" ,
"\\Y" : "\uD835\uDD50" ,
"\\bY" : "\uD835\uDD50" ,
"\\Z" : "\u2124" ,
"\\bZ" : "\u2124" ,
    // Common abbreviations for \mathcal letters
"\\cA" : "\uD835\uDC9C" ,
"\\cB" : "\u212C" ,
"\\cC" : "\uD835\uDC9E" ,
"\\cD" : "\uD835\uDC9F" ,
"\\cE" : "\u2130" ,
"\\cF" : "\u2131" ,
"\\cG" : "\uD835\uDCA2" ,
"\\cH" : "\u210B" ,
"\\cI" : "\u2110" ,
"\\cJ" : "\uD835\uDCA5" ,
"\\cK" : "\uD835\uDCA6" ,
"\\cL" : "\u2112" ,
"\\cM" : "\u2133" ,
"\\cN" : "\uD835\uDCA9" ,
"\\cO" : "\uD835\uDCAA" ,
"\\OO" : "\uD835\uDCAA" ,
"\\cP" : "\uD835\uDCAB" ,
"\\cQ" : "\uD835\uDCAC" ,
"\\cR" : "\u211B" ,
"\\cS" : "\uD835\uDCAE" ,
"\\cT" : "\uD835\uDCAF" ,
"\\cU" : "\uD835\uDCB0" ,
"\\cV" : "\uD835\uDCB1" ,
"\\cW" : "\uD835\uDCB2" ,
"\\cX" : "\uD835\uDCB3" ,
"\\cY" : "\uD835\uDCB4" ,
"\\cZ" : "\uD835\uDCB5" ,
    // Common operators
    "\\Pic" : "Pic" ,
    "\\Spec" : "Spec" ,
    "\\Proj" : "Proj" ,
    // Misc
"\\eps" : "\u03f5" ,
}
;
var g_word_operators
= {"\\arccos" : "arccos" ,
"\\arcsin" : "arcsin" ,
"\\arctan" : "arctan" ,
"\\arg" : "arg" ,
"\\cos" : "cos" ,
"\\cosh" : "cosh" ,
"\\cot" : "cot" ,
"\\coth" : "coth" ,
"\\csc" : "csc" ,
"\\deg" : "deg" ,
"\\det" : "det" ,
"\\dim" : "dim" ,
"\\exp" : "exp" ,
"\\gcd" : "gcd" ,
"\\hom" : "hom" ,
"\\ker" : "ker" ,
"\\lg" : "lg" ,
"\\ln" : "ln" ,
"\\log" : "log" ,
"\\Pr" : "Pr" ,
"\\sec" : "sec" ,
"\\sin" : "sin" ,
"\\sinh" : "sinh" ,
"\\tan" : "tan" ,
"\\tanh" : "tanh" ,
}
;
var g_big_word_operators
= {"\\inf" : "inf" ,
"\\injlim" : "inj lim" ,
"\\lim" : "lim" ,
"\\liminf" : "lim inf" ,
"\\limsup" : "lum sup" ,
"\\max" : "max" ,
"\\min" : "min" ,
"\\projlim" : "proj lim" ,
"\\sup" : "sup" ,
}
;
var g_greek_letters
= {"\\alpha" : "\u03b1" ,
"\\beta" : "\u03b2" ,
"\\chi" : "\u03c7" ,
"\\delta" : "\u03b4" ,
"\\Delta" : "\u0394" ,
"\\digamma" : "\u03dd" ,
"\\epsilon" : "\u03f5" ,
"\\eta" : "\u03b7" ,
"\\gamma" : "\u03b3" ,
"\\Gamma" : "\u0393" ,
"\\iota" : "\u03b9" ,
"\\kappa" : "\u03ba" ,
"\\lambda" : "\u03bb" ,
"\\Lambda" : "\u039b" ,
"\\mu" : "\u03bc" ,
"\\nu" : "\u03bd" ,
"\\omega" : "\u03c9" ,
"\\Omega" : "\u03a9" ,
"\\phi" : "\u03c6" ,
"\\Phi" : "\u03a6" ,
"\\pi" : "\u03c0" ,
"\\Pi" : "\u03a0" ,
"\\psi" : "\u03c8" ,
"\\Psi" : "\u03a8" ,
"\\rho" : "\u03c1" ,
"\\sigma" : "\u03c3" ,
"\\Sigma" : "\u03a3" ,
"\\tau" : "\u03c4" ,
"\\theta" : "\u03b8" ,
"\\Theta" : "\u0398" ,
"\\upsilon" : "\u03c5" ,
"\\Upsilon" : "\u03d2" ,
"\\varepsilon" : "\u03b5" ,
"\\varkappa" : "\u03f0" ,
"\\varphi" : "\u03d5" ,
"\\varpi" : "\u03d6" ,
"\\varrho" : "\u03f1" ,
"\\varsigma" : "\u03c2" ,
"\\vartheta" : "\u03d1" ,
"\\xi" : "\u03be" ,
"\\Xi" : "\u039e" ,
"\\zeta" : "\u03b6" ,
}
;
function v_fraction_to_mathml (tokens ) {
 var v_numerator = v_piece_to_mathml (tokens ) ;
 var v_denominator = v_piece_to_mathml (tokens ) ;
 return result_element( "mfrac" ,0 , v_numerator , v_denominator ) ;
}
function v_binom_to_mathml (tokens ) {
 var v_top = v_piece_to_mathml (tokens ) ;
 var v_bottom = v_piece_to_mathml (tokens ) ;
 return result_element( "mrow" ,0 , result_element( "mo" ,0 , "(" ) , result_element( "mfrac" , 1
, "linethickness" , "0" , v_top , v_bottom ) , result_element( "mo" ,0 , ")" ) ) ;
}
function v_sqrt_to_mathml (tokens ) {
 var v_index = v_optional_arg_to_mathml (tokens ) ;
 var v_object = v_piece_to_mathml (tokens ) ;
 if( ( v_index != null ) ) {
  return result_element( "mroot" ,0 , v_object , v_index ) ;
 }
 else {
  return result_element( "msqrt" ,0 , v_object ) ;
 }
}
function v_parenthesized_operator (tokens , v_word ) {
 var v_object = v_piece_to_mathml (tokens ) ;
 if( ( v_word != null ) ) {
  return result_element( "mrow" ,0 , result_element( "mo" ,0 , "(" ) , result_element( "mo" ,0 , v_word ) , v_object , result_element( "mo" ,0 , ")" ) ) ;
 }
 else {
  return result_element( "mrow" ,0 , result_element( "mo" ,0 , "(" ) , v_object , result_element( "mo" ,0 , ")" ) ) ;
 }
}
function v_operatorname_to_mathml (tokens ) {
 var v_result = result_element( "mo" ,0 , tokens.list[tokens.index] ) ;
 tokens.index++;
 return v_result ;
}
function v_displaystyle_to_mathml (tokens ) {
 var v_result = v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) ;
 return result_element( "mstyle" , 2
, "displaystyle" , "true" , "scriptlevel" , "0" , v_result ) ;
}
function v_displaymath_to_mathml (tokens ) {
 var v_result = v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) ;
  v_finish_latex_block (tokens );
 return result_element( "mstyle" , 2
, "displaystyle" , "true" , "scriptlevel" , "0" , v_result ) ;
}
function v_font_to_mathml (tokens , v_font_name ) {
 if( ( tokens.list[tokens.index] != "{" ) ) {
  var v_result = result_element( "mi" , 1
, "mathvariant" , v_font_name , tokens.list[tokens.index] ) ;
  if( ( v_font_name == "normal" ) ) {
   result_set_attr(
v_result , "fontstyle" , "normal" );
  }
  tokens.index++;
  return v_result ;
 }
 else {
  var v_result = v_piece_to_mathml (tokens ) ;
  result_set_attr(
v_result , "mathvariant" , v_font_name );
  if( ( v_font_name == "normal" ) ) {
   result_set_attr(
v_result , "fontstyle" , "normal" );
  }
  return v_result ;
 }
}
function v_old_font_to_mathml (tokens , v_font_name ) {
 return result_element( "mstyle" , 2
, "mathvariant" , v_font_name , "fontstyle" , ( ( v_font_name == "normal" ) ? "normal" : null ) , v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) ) ;
}
function v_size_to_mathml (tokens , v_min_size , v_max_size ) {
 var v_result = v_piece_to_mathml (tokens ) ;
 result_set_attr(
v_result , "minsize" , v_min_size );
 result_set_attr(
v_result , "maxsize" , v_max_size );
 return v_result ;
}
function v_accent_to_mathml (tokens , v_char ) {
 return result_element( "mover" , 1
, "accent" , "true" , v_piece_to_mathml (tokens ) , result_element( "mo" ,0 , v_char ) ) ;
}
function v_matrix_to_mathml (tokens , v_open_delim , v_close_delim ) {
 var v_mtable = v_matrix_to_mtable (tokens , result_element( "mtable" ,0) ) ;
 if( ( ( v_open_delim != null )  ||  ( v_close_delim != null ) ) ) {
  var v_mrow = result_element( "mrow" ,0) ;
  if( ( v_open_delim != null ) ) {
   result_element_append( v_mrow , result_element( "mo" ,0 , v_open_delim ) );
  }
  result_element_append( v_mrow , v_mtable );
  if( ( v_close_delim != null ) ) {
   result_element_append( v_mrow , result_element( "mo" ,0 , v_close_delim ) );
  }
  return v_mrow ;
 }
 else {
  return v_mtable ;
 }
}
function v_array_to_mathml (tokens ) {
 var v_mtable = result_element( "mtable" ,0) ;
 if( ( tokens.list[tokens.index] == "{" ) ) {
  tokens.index++;
  while( ( ( tokens.list[tokens.index] != null )  &&  ( tokens.list[tokens.index] != "}" ) ) ) {
   if( ( tokens.list[tokens.index] == "c" ) ) {
    result_append_attr(
v_mtable , "columnalign" , "center " );
   }
   else if( ( tokens.list[tokens.index] == "l" ) ) {
    result_append_attr(
v_mtable , "columnalign" , "left " );
   }
   else if( ( tokens.list[tokens.index] == "r" ) ) {
    result_append_attr(
v_mtable , "columnalign" , "right " );
   }
   tokens.index++;
  }
  if( ( tokens.list[tokens.index] != null ) ) {
   tokens.index++;
  }
 }
 return v_matrix_to_mtable (tokens , v_mtable ) ;
}
function v_matrix_to_mtable (tokens , v_mtable ) {
 var v_mtr = result_element( "mtr" ,0) ;
 var v_mtd = result_element( "mtd" ,0) ;
 var v_token = tokens.list[tokens.index] ;
 result_element_append( v_mtable , v_mtr );
 result_element_append( v_mtr , v_mtd );
 while( ( ( v_token != null )  &&  ( v_token != "\\end" ) ) ) {
  if( ( v_token == "\\\\" ) ) {
    v_mtr = result_element( "mtr" ,0) ;
    v_mtd = result_element( "mtd" ,0) ;
   result_element_append( v_mtable , v_mtr );
   result_element_append( v_mtr , v_mtd );
   tokens.index++;
  }
  else if( ( v_token == "&" ) ) {
    v_mtd = result_element( "mtd" ,0) ;
   result_element_append( v_mtr , v_mtd );
   tokens.index++;
  }
  else {
   result_element_append( v_mtd , v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) );
  }
   v_token = tokens.list[tokens.index] ;
 }
  v_finish_latex_block (tokens );
 return v_mtable ;
}
function v_over_to_mathml (tokens , v_char ) {
 return result_element( "mover" ,0 , v_piece_to_mathml (tokens ) , result_element( "mo" ,0 , v_char ) ) ;
}
function v_under_to_mathml (tokens , v_char ) {
 return result_element( "munder" ,0 , v_piece_to_mathml (tokens ) , result_element( "mo" ,0 , v_char ) ) ;
}
function v_delimiter_to_mathml (tokens , v_end_command , v_min_size , v_max_size ) {
 var v_mrow = result_element( "mrow" ,0) ;
 result_element_append( v_mrow , result_element( "mo" , 2
, "minsize" , v_min_size , "maxsize" , v_max_size , v_read_delimiter (tokens ) ) );
 result_element_append( v_mrow , v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) );
 if( ( tokens.list[tokens.index] != v_end_command ) ) {
  return v_mrow ;
 }
 tokens.index++;
 result_element_append( v_mrow , result_element( "mo" , 2
, "minsize" , v_min_size , "maxsize" , v_max_size , v_read_delimiter (tokens ) ) );
 return v_mrow ;
}
function v_read_delimiter (tokens ) {
 var v_token = tokens.list[tokens.index] ;
 if( ( v_token == null ) ) {
  throw "unexpected eof" ;
 }
 else if( ( v_token == "." ) ) {
  tokens.index++;
  return "" ;
 }
 else if( ( v_token == "<" ) ) {
  tokens.index++;
  return "\u2329" ;
 }
 else if( ( v_token == ">" ) ) {
  tokens.index++;
  return "\u232a" ;
 }
 else if( ( v_token in g_punct_and_space
) ) {
  tokens.index++;
  return g_punct_and_space
[ v_token ] ;
 }
 else if( ( v_token in g_left_delimiters
) ) {
  tokens.index++;
  return g_left_delimiters
[ v_token ] ;
 }
 else if( ( v_token in g_right_delimiters
) ) {
  tokens.index++;
  return g_right_delimiters
[ v_token ] ;
 }
 else if( ( v_token in g_operator_symbols
) ) {
  tokens.index++;
  return g_operator_symbols
[ v_token ] ;
 }
 else {
  throw "invalid delimiter" ;
 }
}
function v_latex_block_to_mathml (tokens ) {
  v_cmd = tokens.list[tokens.index] ;
 if( ( v_cmd in g_tex_environments
) ) {
  tokens.index++;
  return g_tex_environments
[ v_cmd ] (tokens ) ;
 }
 else {
  throw "unknown command" ;
 }
}
function v_finish_latex_block (tokens ) {
 if( ( tokens.list[tokens.index] == null ) ) {
  throw "unexpected eof" ;
 }
 tokens.index++;
 tokens.index++;
}
function v_combining_to_mathml (tokens , v_char ) {
 var v_base = tokens.list[tokens.index] ;
 tokens.index++;
 return result_element( "mo" ,0 , v_base , v_char ) ;
}
var g_char_escape_codes
= {"93" : "#" ,
}
;
function v_char_escape_to_mathml (tokens ) {
 var v_result = null ;
 if( ( tokens.list[tokens.index] in g_char_escape_codes
) ) {
   v_result = result_element( "mtext" ,0 , g_char_escape_codes
[ tokens.list[tokens.index] ] ) ;
 }
 else {
   v_result = result_element( "merror" ,0 , "\\char" , tokens.list[tokens.index] ) ;
 }
 tokens.index++;
 return v_result ;
}
function v_text_to_mathml (tokens ) {
 if( ( tokens.list[tokens.index] != "{" ) ) {
  var v_result = result_element( "mtext" ,0 , tokens.list[tokens.index] ) ;
  tokens.index++;
  return v_result ;
 }
 tokens.index++;
 var v_result = null ;
 var v_mrow = null ;
 var v_node = null ;
 while( ( tokens.list[tokens.index] != null ) ) {
  if( ( tokens.list[tokens.index] == "}" ) ) {
   tokens.index++;
   return v_result ;
  }
  else if( ( tokens.list[tokens.index] == "$" ) ) {
   tokens.index++;
    v_node = v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) ;
   tokens.index++;
  }
  else {
    v_node = result_element( "mtext" ,0 , tokens.list[tokens.index] ) ;
   tokens.index++;
  }
  if( ( v_mrow != null ) ) {
   result_element_append( v_mrow , v_node );
  }
  else if( ( v_result != null ) ) {
    v_mrow = result_element( "mrow" ,0 , v_result , v_node ) ;
    v_result = v_mrow ;
  }
  else {
    v_result = v_node ;
  }
 }
 return v_result ;
}
var g_tex_commands
= {
"\\frac" : v_fraction_to_mathml ,
"\\dfrac" : v_fraction_to_mathml ,
"\\tfrac" : v_fraction_to_mathml ,
"\\binom" : v_binom_to_mathml ,
"\\sqrt" : v_sqrt_to_mathml ,
"\\operatorname" : v_operatorname_to_mathml ,
"\\displaystyle" : v_displaystyle_to_mathml ,
"\\pod" : function(tokens ) {return v_parenthesized_operator (tokens , null ) ;} ,
"\\pmod" : function(tokens ) {return v_parenthesized_operator (tokens , "mod" ) ;} ,
"\\boldsymbol" : function(tokens ) {return v_font_to_mathml (tokens , "bold" ) ;} ,
"\\bold" : function(tokens ) {return v_font_to_mathml (tokens , "bold" ) ;} ,
"\\Bbb" : function(tokens ) {return v_font_to_mathml (tokens , "double-struck" ) ;} ,
"\\mathbb" : function(tokens ) {return v_font_to_mathml (tokens , "double-struck" ) ;} ,
"\\mathbbmss" : function(tokens ) {return v_font_to_mathml (tokens , "double-struck" ) ;} ,
"\\mathbf" : function(tokens ) {return v_font_to_mathml (tokens , "bold" ) ;} ,
"\\mathop" : function(tokens ) {return v_font_to_mathml (tokens , "normal" ) ;} ,
"\\mathopen" : function(tokens ) {return v_font_to_mathml (tokens , "normal" ) ;} ,
"\\mathclose" : function(tokens ) {return v_font_to_mathml (tokens , "normal" ) ;} ,
"\\mathrm" : function(tokens ) {return v_font_to_mathml (tokens , "normal" ) ;} ,
"\\mathfrak" : function(tokens ) {return v_font_to_mathml (tokens , "fraktur" ) ;} ,
"\\germ" : function(tokens ) {return v_font_to_mathml (tokens , "fraktur" ) ;} ,
"\\mathit" : function(tokens ) {return v_font_to_mathml (tokens , "italic" ) ;} ,
"\\mathscr" : function(tokens ) {return v_font_to_mathml (tokens , "script" ) ;} ,
"\\scr" : function(tokens ) {return v_font_to_mathml (tokens , "script" ) ;} ,
"\\mathcal" : function(tokens ) {return v_font_to_mathml (tokens , "script" ) ;} ,
"\\mathsf" : function(tokens ) {return v_font_to_mathml (tokens , "sans-serif" ) ;} ,
"\\mathtt" : function(tokens ) {return v_font_to_mathml (tokens , "monospace" ) ;} ,
"\\EuScript" : function(tokens ) {return v_font_to_mathml (tokens , "script" ) ;} ,
"\\bf" : function(tokens ) {return v_old_font_to_mathml (tokens , "bold" ) ;} ,
"\\rm" : function(tokens ) {return v_old_font_to_mathml (tokens , "normal" ) ;} ,
"\\roman" : function(tokens ) {return v_old_font_to_mathml (tokens , "normal" ) ;} ,
"\\tag" : function(tokens ) {return v_old_font_to_mathml (tokens , "bold" ) ;} ,
"\\big" : function(tokens ) {return v_size_to_mathml (tokens , "2" , "2" ) ;} ,
"\\Big" : function(tokens ) {return v_size_to_mathml (tokens , "3" , "3" ) ;} ,
"\\bigg" : function(tokens ) {return v_size_to_mathml (tokens , "4" , "4" ) ;} ,
"\\Bigg" : function(tokens ) {return v_size_to_mathml (tokens , "5" , "5" ) ;} ,
"\\acute" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0301" ) ;} ,
"\\grave" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0300" ) ;} ,
"\\tilde" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0303" ) ;} ,
"\\bar" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0304" ) ;} ,
"\\breve" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0306" ) ;} ,
"\\check" : function(tokens ) {return v_accent_to_mathml (tokens , "\u030c" ) ;} ,
"\\hat" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0302" ) ;} ,
"\\vec" : function(tokens ) {return v_accent_to_mathml (tokens , "\u20d7" ) ;} ,
"\\dot" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0307" ) ;} ,
"\\ddot" : function(tokens ) {return v_accent_to_mathml (tokens , "\u0308" ) ;} ,
"\\dddot" : function(tokens ) {return v_accent_to_mathml (tokens , "\u20db" ) ;} ,
"\\underbrace" : function(tokens ) {return v_under_to_mathml (tokens , "\ufe38" ) ;} ,
"\\overbrace" : function(tokens ) {return v_over_to_mathml (tokens , "\ufe37" ) ;} ,
"\\underline" : function(tokens ) {return v_under_to_mathml (tokens , "\u0332" ) ;} ,
"\\overline" : function(tokens ) {return v_over_to_mathml (tokens , "\u00af" ) ;} ,
"\\widetilde" : function(tokens ) {return v_over_to_mathml (tokens , "\u0303" ) ;} ,
"\\widehat" : function(tokens ) {return v_over_to_mathml (tokens , "\u0302" ) ;} ,
"\\not" : function(tokens ) {return v_combining_to_mathml (tokens , "\u0338" ) ;} ,
"\\left" : function(tokens ) {return v_delimiter_to_mathml (tokens , "\\right" , "1" , null ) ;} ,
"\\bigl" : function(tokens ) {return v_delimiter_to_mathml (tokens , "\\bigr" , "2" , "2" ) ;} ,
"\\Bigl" : function(tokens ) {return v_delimiter_to_mathml (tokens , "\\Bigr" , "3" , "3" ) ;} ,
"\\biggl" : function(tokens ) {return v_delimiter_to_mathml (tokens , "\\biggr" , "4" , "4" ) ;} ,
"\\Biggl" : function(tokens ) {return v_delimiter_to_mathml (tokens , "\\Biggr" , "5" , "5" ) ;} ,
"\\char" : v_char_escape_to_mathml ,
"\\!" : function(tokens ) {return null ;} ,
"\\text" : v_text_to_mathml ,
"\\textnormal" : v_text_to_mathml ,
"\\textrm" : v_text_to_mathml ,
"\\textsl" : v_text_to_mathml ,
"\\textit" : v_text_to_mathml ,
"\\texttt" : v_text_to_mathml ,
"\\textbf" : v_text_to_mathml ,
"\\hbox" : v_text_to_mathml ,
"\\mbox" : v_text_to_mathml ,
"\\begin" : v_latex_block_to_mathml ,
}
;
var g_tex_environments
= {"smallmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "(" , ")" ) ;} ,
"pmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "(" , ")" ) ;} ,
"bmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "[" , "]" ) ;} ,
"Bmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "{" , "}" ) ;} ,
"vmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "|" , "|" ) ;} ,
"Vmatrix" : function(tokens ) {return v_matrix_to_mathml (tokens , "\u2016" , "\u2016" ) ;} ,
"cases" : function(tokens ) {return v_matrix_to_mathml (tokens , "{" , null ) ;} ,
"array" : v_array_to_mathml ,
"displaymath" : v_displaymath_to_mathml ,
}
;
var g_limit_commands
= {"\\bigcap" : "\u22c2" ,
"\\bigcup" : "\u22c3" ,
"\\bigodot" : "\u2a00" ,
"\\bigoplus" : "\u2a01" ,
"\\bigotimes" : "\u2a02" ,
"\\bigsqcup" : "\u2a06" ,
"\\biguplus" : "\u2a04" ,
"\\bigvee" : "\u22c1" ,
"\\bigwedge" : "\u22c0" ,
"\\coprod" : "\u2210" ,
"\\prod" : "\u220f" ,
"\\sum" : "\u2211" ,
"\\inf" : "inf" ,
"\\injlim" : "inj lim" ,
"\\lim" : "lim" ,
"\\liminf" : "lim inf" ,
"\\limsup" : "lum sup" ,
"\\max" : "max" ,
"\\min" : "min" ,
"\\projlim" : "proj lim" ,
"\\sup" : "sup" ,
"\\underbrace" : null ,
"\\overbrace" : null ,
"\\underline" : null ,
"\\overline" : null ,
}
;
function v_piece_to_mathml (tokens ) {
 var v_token = tokens.list[tokens.index] ;
 var v_result = null ;
 if( ( v_token == "{" ) ) {
  tokens.index++;
   v_result = v_subexpr_chain_to_mathml (tokens , g_hard_stop_tokens
) ;
  if( ( tokens.list[tokens.index] == "}" ) ) {
   tokens.index++;
  }
 }
 else if( ( v_token in g_relation_symbols
) ) {
   v_result = result_element( "mo" ,0 , g_relation_symbols
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_operator_symbols
) ) {
   v_result = result_element( "mo" ,0 , g_operator_symbols
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_left_delimiters
) ) {
   v_result = result_element( "mo" ,0 , g_left_delimiters
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_right_delimiters
) ) {
   v_result = result_element( "mo" ,0 , g_right_delimiters
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_word_operators
) ) {
   v_result = result_element( "mi" , 1
, "mathvariant" , "normal" , g_word_operators
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_greek_letters
) ) {
   v_result = result_element( "mi" , 1
, "fontstyle" , "normal" , g_greek_letters
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_named_identifiers
) ) {
   v_result = result_element( "mi" ,0 , g_named_identifiers
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_punct_and_space
) ) {
   v_result = result_element( "mtext" ,0 , g_punct_and_space
[ v_token ] ) ;
  tokens.index++;
 }
 else if( ( v_token in g_tex_commands
) ) {
  tokens.index++;
   v_result = g_tex_commands
[ v_token ] (tokens ) ;
 }
 else {
   v_result = result_element( "mn" ,0 , v_token ) ;
  tokens.index++;
 }
 return v_result ;
}
function v_subexpr_to_mathml (tokens ) {
 var v_result = null ;
 var v_mmultiscripts = null ;
 var v_mprescripts = null ;
 if( ( ( tokens.list[tokens.length<=tokens.index+ 0 ? tokens.length-1 : tokens.index+ 0 ]
== "{" )  &&  ( tokens.list[tokens.length<=tokens.index+ 1 ? tokens.length-1 : tokens.index+ 1 ]
== "}" )  &&  ( ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "_" )  ||  ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "^" ) ) ) ) {
   v_mmultiscripts = result_element( "mmultiscripts" ,0) ;
   v_mprescripts = result_element( "mprescripts" ,0) ;
  result_element_append( v_mmultiscripts , v_mprescripts );
  while( ( ( tokens.list[tokens.length<=tokens.index+ 0 ? tokens.length-1 : tokens.index+ 0 ]
== "{" )  &&  ( tokens.list[tokens.length<=tokens.index+ 1 ? tokens.length-1 : tokens.index+ 1 ]
== "}" )  &&  ( ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "_" )  ||  ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "^" ) ) ) ) {
   var v_subscript = null ;
   var v_superscript = null ;
   tokens.index++;
   tokens.index++;
   if( ( tokens.list[tokens.index] == "_" ) ) {
    tokens.index++;
     v_subscript = v_piece_to_mathml (tokens ) ;
   }
   else if( ( tokens.list[tokens.index] == "^" ) ) {
    tokens.index++;
     v_superscript = v_piece_to_mathml (tokens ) ;
   }
   if( ( tokens.list[tokens.index] == "_" ) ) {
    tokens.index++;
     v_subscript = v_piece_to_mathml (tokens ) ;
   }
   else if( ( tokens.list[tokens.index] == "^" ) ) {
    tokens.index++;
     v_superscript = v_piece_to_mathml (tokens ) ;
   }
   result_element_append( v_mmultiscripts , ( ( v_subscript != null ) ? v_subscript : result_element( "none" ,0) ) );
   result_element_append( v_mmultiscripts , ( ( v_superscript != null ) ? v_superscript : result_element( "none" ,0) ) );
  }
 }
 var v_limit_style = ( tokens.list[tokens.index] in g_limit_commands
) ;
 if( ( tokens.list[tokens.index] == null ) ) {
  if( ( v_mmultiscripts != null ) ) {
   result_element_prepend( v_mmultiscripts , result_element( "mrow" ,0) , v_mprescripts );
   return v_mmultiscripts ;
  }
  else {
   return result_element( "mrow" ,0) ;
  }
 }
 else if( ( tokens.list[tokens.index] in g_left_delimiters
) ) {
   v_result = v_heuristic_subexpression (tokens ) ;
 }
 else {
   v_result = v_piece_to_mathml (tokens ) ;
 }
 var v_base = v_result ;
 var v_subscript = null ;
 var v_superscript = null ;
 if( ( tokens.list[tokens.index] == "_" ) ) {
  tokens.index++;
   v_subscript = v_piece_to_mathml (tokens ) ;
 }
 else if( ( tokens.list[tokens.index] == "^" ) ) {
  tokens.index++;
   v_superscript = v_piece_to_mathml (tokens ) ;
 }
 if( ( tokens.list[tokens.index] == "_" ) ) {
  tokens.index++;
   v_subscript = v_piece_to_mathml (tokens ) ;
 }
 else if( ( tokens.list[tokens.index] == "^" ) ) {
  tokens.index++;
   v_superscript = v_piece_to_mathml (tokens ) ;
 }
 if( ( v_mmultiscripts != null ) ) {
  result_element_prepend( v_mmultiscripts , v_base , v_mprescripts );
  result_element_prepend( v_mmultiscripts , ( ( v_subscript != null ) ? v_subscript : result_element( "none" ,0) ) , v_mprescripts );
  result_element_prepend( v_mmultiscripts , ( ( v_superscript != null ) ? v_superscript : result_element( "none" ,0) ) , v_mprescripts );
 }
 while( ( ( tokens.list[tokens.length<=tokens.index+ 0 ? tokens.length-1 : tokens.index+ 0 ]
== "{" )  &&  ( tokens.list[tokens.length<=tokens.index+ 1 ? tokens.length-1 : tokens.index+ 1 ]
== "}" )  &&  ( ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "_" )  ||  ( tokens.list[tokens.length<=tokens.index+ 2 ? tokens.length-1 : tokens.index+ 2 ]
== "^" ) ) ) ) {
  if( ( v_mmultiscripts == null ) ) {
    v_mmultiscripts = result_element( "mmultiscripts" ,0 , v_base ) ;
    v_mprescripts = null ;
   if( ( ( v_superscript != null )  ||  ( v_subscript != null ) ) ) {
    result_element_append( v_mmultiscripts , ( ( v_subscript != null ) ? v_subscript : result_element( "none" ,0) ) );
    result_element_append( v_mmultiscripts , ( ( v_superscript != null ) ? v_superscript : result_element( "none" ,0) ) );
   }
  }
  var v_subscript = null ;
  var v_superscript = null ;
  tokens.index++;
  tokens.index++;
  if( ( tokens.list[tokens.index] == "_" ) ) {
   tokens.index++;
    v_subscript = v_piece_to_mathml (tokens ) ;
  }
  else if( ( tokens.list[tokens.index] == "^" ) ) {
   tokens.index++;
    v_superscript = v_piece_to_mathml (tokens ) ;
  }
  if( ( tokens.list[tokens.index] == "_" ) ) {
   tokens.index++;
    v_subscript = v_piece_to_mathml (tokens ) ;
  }
  else if( ( tokens.list[tokens.index] == "^" ) ) {
   tokens.index++;
    v_superscript = v_piece_to_mathml (tokens ) ;
  }
  result_element_prepend( v_mmultiscripts , ( ( v_subscript != null ) ? v_subscript : result_element( "none" ,0) ) , v_mprescripts );
  result_element_prepend( v_mmultiscripts , ( ( v_superscript != null ) ? v_superscript : result_element( "none" ,0) ) , v_mprescripts );
 }
 if( ( v_mmultiscripts != null ) ) {
   v_result = v_mmultiscripts ;
 }
 else if( ( ( v_subscript != null )  &&  ( v_superscript != null ) ) ) {
   v_result = result_element( ( v_limit_style ? "munderover" : "msubsup" ) ,0 , v_base , v_subscript , v_superscript ) ;
 }
 else if( ( v_subscript != null ) ) {
   v_result = result_element( ( v_limit_style ? "munder" : "msub" ) ,0 , v_base , v_subscript ) ;
 }
 else if( ( v_superscript != null ) ) {
   v_result = result_element( ( v_limit_style ? "mover" : "msup" ) ,0 , v_base , v_superscript ) ;
 }
 return v_result ;
}
function v_subexpr_chain_to_mathml (tokens , v_stop_tokens ) {
 var v_result = null ;
 var v_mrow = null ;
 var v_mfrac = null ;
 var v_wrapped_result = null ;
 while( ( ( tokens.list[tokens.index] != null )  &&  !( ( tokens.list[tokens.index] in v_stop_tokens ) ) ) ) {
  if( ( tokens.list[tokens.index] == "\\over" ) ) {
   tokens.index++;
    v_mfrac = result_element( "mfrac" ,0 , v_result ) ;
    v_wrapped_result = v_mfrac ;
    v_mrow = null ;
    v_result = null ;
  }
  else if( ( tokens.list[tokens.index] == "\\choose" ) ) {
   tokens.index++;
    v_mfrac = result_element( "mfrac" , 1
, "linethickness" , "0" , v_result ) ;
    v_wrapped_result = result_element( "mrow" ,0 , result_element( "mo" ,0 , "(" ) , v_mfrac , result_element( "mo" ,0 , ")" ) ) ;
    v_mrow = null ;
    v_result = null ;
  }
  else {
   var v_node = v_collect_precedence_group (tokens , g_relations_precedence_group
, v_stop_tokens , function(tokens , v_stop_tokens ) {return v_collect_precedence_group (tokens , g_addition_precedence_group
, v_stop_tokens , function(tokens , v_stop_tokens ) {return v_collect_precedence_group (tokens , g_multiplication_precedence_group
, v_stop_tokens , v_collect_invisible_group ) ;} ) ;} ) ;
   if( ( v_mrow != null ) ) {
    result_element_append( v_mrow , v_node );
   }
   else if( ( v_result != null ) ) {
     v_mrow = result_element( "mrow" ,0 , v_result , v_node ) ;
     v_result = v_mrow ;
   }
   else {
     v_result = v_node ;
   }
  }
 }
 if( ( v_mfrac != null ) ) {
  result_element_append( v_mfrac , v_result );
  return v_wrapped_result ;
 }
 else {
  return v_result ;
 }
}
var g_optional_arg_stop_tokens
= {"&" : null ,
"\\\\" : null ,
"}" : null ,
"$" : null ,
"\\end" : null ,
"\\right" : null ,
"\\bigr" : null ,
"\\Bigr" : null ,
"\\biggr" : null ,
"\\Biggr" : null ,
"\\choose" : null ,
"\\over" : null ,
"]" : null ,
}
;
function v_optional_arg_to_mathml (tokens ) {
 if( ( tokens.list[tokens.index] != "[" ) ) {
  return null ;
 }
 tokens.index++;
 var v_result = v_subexpr_chain_to_mathml (tokens , g_optional_arg_stop_tokens
) ;
 if( ( tokens.list[tokens.index] == "]" ) ) {
  tokens.index++;
 }
 return v_result ;
}
var g_hard_stop_tokens
= {"&" : null ,
"\\\\" : null ,
"}" : null ,
"$" : null ,
"\\end" : null ,
"\\right" : null ,
"\\bigr" : null ,
"\\Bigr" : null ,
"\\biggr" : null ,
"\\Biggr" : null ,
"\\choose" : null ,
"\\over" : null ,
}
;
var g_right_delimiter_stop_tokens
= {"&" : null ,
"\\\\" : null ,
"}" : null ,
"$" : null ,
"\\end" : null ,
"\\right" : null ,
"\\bigr" : null ,
"\\Bigr" : null ,
"\\biggr" : null ,
"\\Biggr" : null ,
"\\choose" : null ,
"\\over" : null ,
")" : ")" ,
"]" : "]" ,
"\\}" : "}" ,
"\\rbrace" : "}" ,
"\\rgroup" : ")" ,
"\\rvert" : "|" ,
"\\rVert" : "\u2016" ,
"\\rceil" : "\u2309" ,
"\\rfloor" : "\u230b" ,
"\\rmoustache" : "\u23b1" ,
"\\rangle" : "\u232a" ,
}
;
function v_heuristic_subexpression (tokens ) {
 var v_result = result_element( "mrow" ,0) ;
 result_element_append( v_result , v_piece_to_mathml (tokens ) );
 result_element_append( v_result , v_subexpr_chain_to_mathml (tokens , g_right_delimiter_stop_tokens
) );
 if( ( ( tokens.list[tokens.index] != null )  &&  !( ( tokens.list[tokens.index] in g_hard_stop_tokens
) ) ) ) {
  result_element_append( v_result , v_piece_to_mathml (tokens ) );
 }
 return v_result ;
}
var g_relations_precedence_group
= g_relation_symbols
;
var g_addition_precedence_group
= {"+" : null ,
"-" : null ,
"\\oplus" : null ,
}
;
var g_multiplication_precedence_group
= {"*" : null ,
"\\times" : null ,
"\\cdot" : null ,
"/" : null ,
}
;
function v_collect_precedence_group (tokens , v_operators , v_stop_tokens , v_reader ) {
 var v_result = v_reader (tokens , v_stop_tokens ) ;
 var v_mrow = null ;
 while( ( ( tokens.list[tokens.index] != null )  &&  !( ( tokens.list[tokens.index] in v_stop_tokens ) )  &&  ( tokens.list[tokens.index] in v_operators ) ) ) {
  if( ( v_mrow == null ) ) {
    v_mrow = result_element( "mrow" ,0 , v_result ) ;
    v_result = v_mrow ;
  }
  result_element_append( v_mrow , v_piece_to_mathml (tokens ) );
  if( ( ( tokens.list[tokens.index] != null )  &&  ( tokens.list[tokens.index] in v_stop_tokens ) ) ) {
   return v_result ;
  }
  else {
   result_element_append( v_mrow , v_reader (tokens , v_stop_tokens ) );
  }
 }
 return v_result ;
}
function v_collect_invisible_group (tokens , v_stop_tokens ) {
 var v_result = v_subexpr_to_mathml (tokens ) ;
 var v_mrow = null ;
 while( ( ( tokens.list[tokens.index] != null )  &&  !( ( tokens.list[tokens.index] in v_stop_tokens ) )  &&  ( ( tokens.list[tokens.index] in g_named_identifiers
)  ||  ( tokens.list[tokens.index] in g_left_delimiters
) ) ) ) {
  if( ( v_mrow == null ) ) {
    v_mrow = result_element( "mrow" ,0 , v_result ) ;
    v_result = v_mrow ;
  }
  result_element_append( v_mrow , result_element( "mo" ,0 , "\u2062" ) );
  if( ( ( tokens.list[tokens.index] != null )  &&  ( tokens.list[tokens.index] in v_stop_tokens ) ) ) {
   return v_result ;
  }
  else {
   result_element_append( v_mrow , v_subexpr_to_mathml (tokens ) );
  }
 }
 return v_result ;
}


var/*const*/ tokenize_re = /(\\begin|\\operatorname|\\mathrm|\\mathop|\\end)\s*\{\s*([A-Z a-z]+)\s*\}|(\\[a-zA-Z]+|\\[\\#\{\},:;!])|(\s+)|([0-9\.]+)|([\$!"#%&'()*+,-.\/:;<=>?\[\]^_`\{\|\}~])|([a-zA-Z])/g;

var/*const*/ tokenize_text_re = /[\${}\\]|\\[a-zA-Z]+|[^{}\$]+/g;

var/*const*/ tokenize_text_commands = {
  '\\textrm': 1,
  '\\textsl': 1,
  '\\textit': 1,
  '\\texttt': 1,
  '\\textbf': 1,
  '\\textnormal': 1,
  '\\text': 1,
  '\\hbox': 1,
  '\\mbox': 1
};

function tokenize_latex_math(input)
{
  var result = new Array();
  var in_text_mode = 0;
  var brace_level = [];
  var pos = 0;

  if(input.charAt(0) == '$' && 
     input.charAt(input.length-1) == '$')
    input = input.slice(1, input.length-1);

  while(1) {
    if(!in_text_mode) {
      tokenize_re.lastIndex = pos;
      var m = tokenize_re.exec(input);
      pos = tokenize_re.lastIndex;

      if(m == null) {
        return result;
      } else if(m[1] != null) {
        result.push(m[1], m[2]);
      } else if(m[3] == '\\sp') {
        result.push('^');
      } else if(m[3] == '\\sb') {
        result.push('_');
      } else {
        if(m[0] == '$') {
          in_text_mode = 1;
        } else if(m[4] != null) {
          continue;
        } else if(m[3] != null && m[3] in tokenize_text_commands) {
          in_text_mode = 2;
          brace_level.push(0);
        } 

        result.push(m[0]);
      }
    } else {
      tokenize_text_re.lastIndex = pos;
      var m = tokenize_text_re.exec(input);
      pos = tokenize_text_re.lastIndex;
      
      if(m == null) {
        return result;
      } else if(m[0] == '$') {
        in_text_mode = 0;
      } else if(m[0] == '{') {
        brace_level[brace_level.length-1]++;
      } else if(m[0] == '}') {
        if(--brace_level[brace_level.length-1] <= 0) {
          in_text_mode = 0;
          brace_level.pop();
        }
      }
      result.push(m[0]);
    }
  }
}

/*
function post_process_mathml(event)
{
  var url = GM_getValue('click-post-url', null);
  if(url == null)
    return;

  var ser = new XMLSerializer();
  var xhr = GM_xmlhttpRequest({ 
    method: 'POST',
    url: url,
    headers: { 'Content-Type': 'text/xml; charset=utf-8',
               'Content-Location': document.location },
    data: ser.serializeToString(event.currentTarget),
    onerror: function(details) {
      alert("There was an error processing the request. " +
            "HTTP status code " + details.status + ' ' + details.statusText);
    },
    onload: function(details) {
      window.status = "Successfully posted MathML.  Status: " 
            + details.status + ' ' + details.statusText;
    }});

  window.status = "Posting MathML to " + url + "...";
}
*/

function patch_img(node)
{

    if(node.currentTarget)
    node = node.currentTarget;

  var alt = node.getAttribute('alt');

  if(alt == null || 
     /^\\includegraphics|^\$\\displaystyle \\xymatrix/.test(alt))
    return;

  var latex_string = null;
  
  

  
  if((node.parentNode.tagName == 'DIV' && 
      node.parentNode.getAttribute('CLASS') == 'mathdisplay')
     || (node.parentNode.tagName == 'SPAN' &&
         node.parentNode.getAttribute('CLASS') == 'MATH'))
  {
    var parent = node.parentNode;
    var previous = parent.previousSibling;
    var/*const*/ non_whitespace = /[^\s]/;

        if(previous &&
       previous.nodeType == node.TEXT_NODE &&
       !non_whitespace.test(previous.data))
      previous = previous.previousSibling;

        if(previous &&
       previous.nodeType == node.ELEMENT_NODE &&
       previous.tagName == 'P' &&
       previous.lastChild) 
    {
      previous = previous.lastChild;
      if(previous &&
         previous.nodeType == node.TEXT_NODE &&
         !non_whitespace.test(previous.data))
        previous = previous.previousSibling;
    }

        if(previous &&
       previous.nodeType == node.COMMENT_NODE) {
      latex_string = previous.data.replace(/^\s*MATH\s*/, '')
                                  .replace(/\s+$/, '');
    }
  }


  if(!latex_string && /^\$.+\$$/.test(alt)
     && !(/\.{3} \.{3}/.test(alt)))
  {
    latex_string = alt;
  }

  if(latex_string == null)
    return;

  
  tokens = new Object();
  tokens.list = tokenize_latex_math(latex_string);
  tokens.list.push(null);
  tokens.index = 0;

  var mathml = null;
  try {
    var mrow = v_subexpr_chain_to_mathml(tokens, {});
    fix_mathvariant(mrow, null);

    mathml = document.createElementNS(mmlns, 'math');
    mathml.setAttribute("latex", latex_string);
    mathml.setAttribute("mathvariant", "normal");
    mathml.appendChild(mrow);

    mathml.addEventListener("click", post_process_mathml, false);

  } catch(e) {
    GM_log("Display LaTeX failed with error " + e + " on " + latex_string);
  }

  
  if(mathml == null)
    return;

  node.parentNode.replaceChild(mathml, node);
}


function patch_text(node0) 
{
  var text = node0.nodeValue;
  var results = /\$[^$]+\$|\[tex\](.+?)\[\/tex\]/.exec(text);

  if(results) {
    var latex_string = (results[1] == null ? results[0] : '$'+results[1]+'$');

    
  tokens = new Object();
  tokens.list = tokenize_latex_math(latex_string);
  tokens.list.push(null);
  tokens.index = 0;

  var mathml = null;
  try {
    var mrow = v_subexpr_chain_to_mathml(tokens, {});
    fix_mathvariant(mrow, null);

    mathml = document.createElementNS(mmlns, 'math');
    mathml.setAttribute("latex", latex_string);
    mathml.setAttribute("mathvariant", "normal");
    mathml.appendChild(mrow);

    mathml.addEventListener("click", post_process_mathml, false);

  } catch(e) {
    GM_log("Display LaTeX failed with error " + e + " on " + latex_string);
  }


    if(mathml == null)
      return;

    var node2 = node0.splitText(results.index);
    node2.deleteData(0, results[0].length);
    
    node2.parentNode.insertBefore(mathml, node2);


    patch_text(node2);
  }
}



function patch_element(node)
{
  if(node.nodeType == node.TEXT_NODE)
    patch_text(node);
  else if(node.nodeType == node.ELEMENT_NODE) {if(node.tagName == 'TEXTAREA' || node.tagName == 'textarea' || 
       node.tagName == 'INPUT' || node.tagName == 'input' || 
       node.tagName == 'SCRIPT' || node.tagName == 'script')
      return;


    if(do_patch_images && (node.tagName == 'IMG' || node.tagName == 'img')) {
      if(!delayed_patch)
        patch_img(node);
      else
        node.addEventListener("click", patch_img, false);

      return;
    }

    var child = node.firstChild;
    while(child) {
      var next = child.nextSibling;
      if (child.className == 'stopLatex2mml') {
          break;
      }
      patch_element(child);
      child = next;
    }
  }
}
this.patch_element = patch_element;

/*
var do_patch_images = GM_getValue("patch-images", false);
var delayed_patch = GM_getValue("delayed-patch", false);
*/
var do_patch_images = true;
var delayed_patch = false;

/*
if( va_view == 'web' ){
    patch_element(document.documentElement);
}
*/
};



/*!
Deck JS - deck.simplemath
Copyright (c) 2012 Rémi Emonet,
using a modified version of the script from http://gold-saucer.afraid.org/mathml/greasemonkey/ by Steve Cheng
*/

/*
This module provides a support for latex equation syntax.
*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};
    
    $d.bind('deck.init', function() {
        var container = $[deck]('getContainer');
        $('.latex', container).each(function() {
            var it = this;
            var v = $(it).text();
            it.innerHTML = "$\\displaystyle "+v+"$";
            new latex2mml().patch_element(it);
        });
    });

})(jQuery, 'deck');

/*!
Deck JS - deck.clone
Copyright (c) 2011-2014 Rémi Emonet, original version from Rémi BARRAQUAND
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for cloning the deck and enabling a presenter view.
It also provides the behavior that copies the current "notes" to a "notes-target", to be used in the presenter view.
*/

(function($, deck, undefined) {
    var $d = $(document);
    var clones = new Array();
        
    $.extend(true, $[deck].defaults, {	
        selectors: {
            clonepointer: '.clonepointer',
            cloneNotes: '.notes',
            cloneNotesTarget: '.notes-target'
        },
        classes: {
            isClone: 'is-clone',
            hasClones: 'has-clones',
            pointerClick: 'pointer-click'
        },
        snippets: {
            clone: true
        },
        keys: {
            clone: 67 // c
        },
        fitFollowsClone: true
    });

    var hadClones = false;
    var cleanClones = function() {
        var opts = $[deck]('getOptions');
        // remove closed windows
        $.each(clones, function(index, clone) {
            if (clone.closed()) {
                clones.splice(index, 1); // remove element "index"
            }
        });
        // tag/untag the current container depending on the presence of clones
        if (clones.length > 0) {
            $("body").addClass(opts.classes.hasClones);
            if (opts.fitFollowsClone && !hadClones) $[deck]('disableScale');
            hadClones = true;
        } else {
            $("body").removeClass(opts.classes.hasClones);
            if (opts.fitFollowsClone && hadClones) $[deck]('enableScale');
            hadClones = false;
        }
    };

    /*
      jQuery.deck('addClone')
      Create a clone of this window and add it to the clones list.
    */
    $[deck]('extend', 'addClone', function() {
        clone = new DeckClone();
        clones.push(clone);
        cleanClones();
        return clone;
    });
    $[deck]('extend', 'cleanClones', function() { // to be triggered by the closing of a clone window
        setTimeout(cleanClones, 1);
    });
    $[deck]('extend', 'pointerAt', function(rx, ry) {
        var pos = {left: (rx*100)+"%", top: (ry*100)+"%"};
        var opts = $[deck]('getOptions');
        var current = $[deck]('getToplevelSlideOf', $[deck]('getSlide')).node; // actually uses the step extension
        var pointers = $(opts.selectors.clonepointer);
        if (!current.is(pointers.parent())) { // move them within the new slide if it changed
            pointers.show().appendTo(current);
        }
        pointers.css(pos);
        // using % position instead of ".offset" as there are jitter/glitches with it
    });
    $[deck]('extend', 'pointerDown', function() {
        var opts = $[deck]('getOptions');
        var pointers = $(opts.selectors.clonepointer);
        pointers.addClass(opts.classes.pointerClick);
    });
    $[deck]('extend', 'pointerUp', function() {
        var opts = $[deck]('getOptions');
        var pointers = $(opts.selectors.clonepointer);
        pointers.removeClass(opts.classes.pointerClick);
    });
    
    var isClone = false;
    var parentDeck = null;
    /*
      jQuery.deck('Init')
    */
    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');
        
        if (opts.snippets.clone) {
            var d = function() {return $('<div/>');}
            d().addClass("clonepointer scale-on-click").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -11px 0 0 -11px; width:20px; height:20px; opacity: .5;")
                ).appendTo(container);
            d().addClass("clonepointer scale-on-click").append(
                d().attr("style", "border: 2px solid red; border-radius: 50%; z-index:10;"
                         +"margin: -16px 0 0 -16px; width:30px; height:30px;")
                ).appendTo(container);
            d().addClass(opts.selectors.cloneNotesTarget.replace(/\./, ''))
                .appendTo(container);
        }

        $(opts.selectors.clonepointer).hide();

        function safeIsClone(w) {
            try {
                return w.opener && w.opener.___iscloner___;
            } catch(e) {
                // when linked from another origin, there is an opener
                // but accessing its properties throws a security exception
                return false;
            }
        }

        isClone = safeIsClone(window);

        if (isClone) { // it's a clone!
            $("body").addClass(opts.classes.isClone);
            $(".anim-continue", container).removeClass("anim-continue"); // friend with anim extension
            window.___fromparent___ = false;
            parentDeck = function() {
                if (! window.___fromparent___) {
                    window.opener.$.deck.apply(window.opener.$, arguments);
                }
            }
            $(window).on('unload', function() {
                parentDeck('cleanClones');
            });
        } else { // it is a normal window
            /* bind clone key events */
            $d.unbind('keydown.deckclone').bind('keydown.deckclone', function(e) {
                if (e.which === opts.keys.clone || $.inArray(e.which, opts.keys.clone) > -1) {
                    if (e.ctrlKey) return; // do not trigger on Ctrl+C (by default)
                    $[deck]('addClone');
                    window.___iscloner___ = true;
                    e.preventDefault();
                }
            });
        }
    })
    /* Update current slide number with each change event */
    .bind('deck.change', function(e, from, to) {
        if (isClone) {
            parentDeck('go', to);
        } else {
            cleanClones();
            $.each(clones, function(index, clone) {
                clone.deck('go', to);
            });
            
            var opts = $[deck]('getOptions');
            var currentTopLevel = $[deck]('getToplevelSlideOf', $[deck]('getSlide', to)).node;
            var notes = $(opts.selectors.cloneNotes, currentTopLevel).html();
            if (notes === undefined) {
                $(opts.selectors.cloneNotesTarget).html("");
            } else {
                $(opts.selectors.cloneNotesTarget).html(notes);
            }
        }
    })
    /* Replicate mouse cursor */
    .bind('mousemove', function(e) {
        if (isClone) return;
        var current = $[deck]('getToplevelSlideOf', $[deck]('getSlide')).node; // actually uses the step extension (dependency can be removed if needed)
        var r = current.get(0).getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        cleanClones();
        if (x < 0 || y < 0 || x > 1 || y > 1) return;
        $.each(clones, function(index, clone) {
            clone.deck('pointerAt', x, y);
        });
    })
    .bind('mousedown', function(e) {
        if (isClone) return;
        cleanClones();
        $.each(clones, function(index, clone) {
            clone.deck('pointerDown');
        });
    })
    .bind('mouseup', function(e) {
        if (isClone) return;
        cleanClones();
        $.each(clones, function(index, clone) {
            clone.deck('pointerUp');
        });
    });
    
    /*
        Simple Clone manager (must be improved, by for instance adding cloning
        option e.g. propagate change, etc.)
        */
    var DeckClone = function() {
        var clone = window.open(window.location);
        this.closed = function() {return clone.closed;}
        this.deck = function() {
            if (clone.closed) return;
            if (clone.$) {
                clone.___fromparent___ = true;
                clone.$.deck.apply(clone.$, arguments);
                clone.___fromparent___ = false;
            }
        }
    }
})(jQuery, 'deck');


/*!
Deck JS - deck.goto
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the necessary methods and key bindings to show and hide a form
for jumping to any slide number/id in the deck (and processes that form
accordingly). The form-showing state is indicated by the presence of a class on
the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var rootCounter;

  var maybeAddSnippet = function() {
    var options = $.deck('getOptions');
    if (options.snippets.goto) {
      if ($(options.selectors.gotoForm).size() > 0 && options.alert.goto) {
        alert("'options.snippets.goto' is true but a "+options.selectors.gotoForm+" has been found."
              +"\nThis might cause interaction glitches."
              +"\n"
              +"\nSuggestion: remove your html snippet or pass the {snippets: {goto: false}} option."
             );
      }
      $('<form/>').addClass('goto-form').attr('action', '.').attr('method', 'get')
        .append($('<label/>').attr('for', 'goto-slide').text('Go to slide:'))
        .append($('<input/>').attr('type', 'text').attr('id', 'goto-slide').attr('name', 'slidenum').attr('list', 'goto-datalist'))
        .append($('<datalist/>').attr('id', 'goto-datalist'))
        .append($('<input/>').attr('type', 'submit').attr('value', 'Go'))
      .appendTo($.deck('getContainer'));
    }
  };

  var bindKeyEvents = function() {
    $document.unbind('keydown.deckgoto');
    $document.bind('keydown.deckgoto', function(event) {
      var key = $.deck('getOptions').keys.goto;
      if (event.which === key || $.inArray(event.which, key) > -1) {
        event.preventDefault();
        $.deck('toggleGoTo');
      }
    });
  };

  var populateDatalist = function() {
    var options = $.deck('getOptions');
    var $datalist = $(options.selectors.gotoDatalist);

    $.each($.deck('getSlides'), function(i, $slide) {
      var id = $slide.attr('id');
      if (id) {
        $datalist.append('<option value="' + id + '">');
      }
    });
  };

  var markRootSlides = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootCounter = 0;
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );

      if ($parentSlides.length) {
        $slide.removeData('rootIndex');
      }
      else if (!options.countNested) {
        ++rootCounter;
        $slide.data('rootIndex', rootCounter);
      }
    });
  };

  var handleFormSubmit = function() {
    var options = $.deck('getOptions');
    var $form = $(options.selectors.gotoForm);

    $form.unbind('submit.deckgoto');
    $form.bind('submit.deckgoto', function(event) {
      var $field = $(options.selectors.gotoInput);
      var indexOrId = $field.val();
      var index = parseInt(indexOrId, 10);

      if (!options.countNested) {
        if (!isNaN(index) && (index > rootCounter || index <= 0)) {
          return false;
        }
        $.each($.deck('getSlides'), function(i, $slide) {
          if ($slide.data('rootIndex') === index) {
            index = i + 1;
            return false;
          }
        });
      }

      $.deck('go', isNaN(index) ? indexOrId : index - 1);
      $.deck('hideGoTo');
      $field.val('');
      event.preventDefault();
    });
  };

  /*
  Extends defaults/options.

  options.classes.goto
    This class is added to the deck container when showing the Go To Slide
    form.

  options.selectors.gotoDatalist
    The element that matches this selector is the datalist element that will
    be populated with options for each of the slide ids.  In browsers that
    support the datalist element, this provides a drop list of slide ids to
    aid the user in selecting a slide.

  options.selectors.gotoForm
    The element that matches this selector is the form that is submitted
    when a user hits enter after typing a slide number/id in the gotoInput
    element.

  options.selectors.gotoInput
    The element that matches this selector is the text input field for
    entering a slide number/id in the Go To Slide form.

  options.keys.goto
    The numeric keycode used to show the Go To Slide form.

  options.countNested
    If false, only top level slides will be counted when entering a
    slide number.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      goto: 'deck-goto'
    },

    selectors: {
      gotoDatalist: '#goto-datalist',
      gotoForm: '.goto-form',
      gotoInput: '#goto-slide'
    },

    snippets: {
      goto: true
    },

    alert: {
      goto: true
    },

    keys: {
      goto: 71 // g
    },

    countNested: true
  });

  /*
  jQuery.deck('showGoTo')

  Shows the Go To Slide form by adding the class specified by the goto class
  option to the deck container.
  */
  $.deck('extend', 'showGoTo', function() {
    var options = $.deck('getOptions');
    $.deck('getContainer').addClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', false);
    $(options.selectors.gotoInput).focus();
  });

  /*
  jQuery.deck('hideGoTo')

  Hides the Go To Slide form by removing the class specified by the goto class
  option from the deck container.
  */
  $.deck('extend', 'hideGoTo', function() {
    var options = $.deck('getOptions');
    $(options.selectors.gotoInput).blur();
    $.deck('getContainer').removeClass(options.classes.goto);
    $(options.selectors.gotoForm).attr('aria-hidden', true);
  });

  /*
  jQuery.deck('toggleGoTo')

  Toggles between showing and hiding the Go To Slide form.
  */
  $.deck('extend', 'toggleGoTo', function() {
    var options = $.deck('getOptions');
    var hasGotoClass = $.deck('getContainer').hasClass(options.classes.goto);
    $.deck(hasGotoClass ? 'hideGoTo' : 'showGoTo');
  });

  $document.bind('deck.init', function() {
    maybeAddSnippet();
    bindKeyEvents();
    populateDatalist();
    markRootSlides();
    handleFormSubmit();
  });
})(jQuery);


/*!
Deck JS - deck.progress
Copyright (c) 2014 Rémi Emonet
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds a (current)/(total) style status indicator to the deck.

It is designed to be a drop-in replacement of deck.status, but on steroïds.
Note however, that it does not handle the countNested=true case.
*/
(function($, undefined) {
    var $document = $(document);
    var rootCounter;
    var INITEVENT = "dummyinit";
    var SIZEEVENT = "dummysize";
    
    var updateCurrent = function(event, from, to) {
        var opts = $.deck('getOptions');
        var currentSlideNumber = to + 1;
        var $container = $.deck('getContainer');
        currentSlideNumber = $.deck('getSlide', to).data('rootSlide');
        $(opts.selectors.statusCurrent).text(currentSlideNumber);

        var icur = 0;
        for (; icur < $.deck('getSlides').length; icur++) {
            var top = $.deck('getSlide', icur).data('rootSlide');
            if (top == currentSlideNumber) {
                break;
            }
        }
        var last = null;
        var currentDetail = to;
        var lastDetail = icur;
        for (; icur < $.deck('getSlides').length; icur++) {
            last = $.deck('getSlide', icur).data('rootSlide');
            lastDetail = icur+1;
            if ($.deck('getSlide', icur).filter(opts.selectors.statusFakeEnd).size() > 0) break;
        }
	$(opts.selectors.statusTotal).text(last);

        // handle the data-progress
        var progresses = $('*['+opts.dataProgress+'], *['+opts.dataProgressOnce+'], *['+opts.dataProgressSize+']');
        if (progresses.size() > 0) {
            var visibleSlide = $.deck('getSlide').parentsUntil(opts.selectors.container).addBack().filter(opts.selectors.slides);
            // the eval context
            var slide = visibleSlide.get(0).getBoundingClientRect();
            var screen = {width: $container.innerWidth(), height: $container.innerHeight()};
            var n = currentSlideNumber;
            var N = last;
            var fullTotal = $.deck('getTopLevelSlides').length;
            var detail = {n: currentDetail+1, N: lastDetail, fullTotal: $.deck('getSlides').length};
            var designRatio = Math.max(slide.width / opts.designWidth, slide.height / opts.designHeight);
            var o = opts;
            var p = n/N;
            var pFull = n/fullTotal;
            detail.p = detail.n/detail.N;
            detail.pFull = detail.n/detail.fullTotal;
            // 
            progresses.each(function(i, el) {
                var spe = {
                    bottom: function(fontSize, botByRatio, botFixed) {
                        botFixed = botFixed || 0;
                        $(el).css('font-size', (fontSize * designRatio)+"px");
                        $(el).css('top', (slide.bottom - botFixed - botByRatio*designRatio)+'px');
                    },
                    top: function(fontSize, topByRatio, topFixed) {
                        topFixed = topFixed || 0;
                        $(el).css('font-size', (fontSize * designRatio)+"px");
                        $(el).css('top', (slide.top + topFixed + topByRatio*designRatio)+'px');
                    }
                };
                var att = $(el).attr(event == INITEVENT ? opts.dataProgressOnce : event == SIZEEVENT ? opts.dataProgressSize : opts.dataProgress);
                if (att == null || att.length == 0) return;
                var tasks = att.split(/ *; */);
                for (t in tasks) {
                    var parts = tasks[t].split(/ *: */);
                    if (parts.length != 2) {
                        if (opts.alert.wrongDataProgress) alert(
                            "There seem to be a problem with the following data-progress of\n   '" +tasks[t]+ "'\n");
                    } else {
                        var what = parts[0];
                        var expr = parts[1];
                        var val = eval(expr);
                        if (what == "") {
                            // skip: expected to be some "magic", e.g. custom code or call to helpers
                        } else if (what.substring(0,1) == "@") {
                            // special attribute setting, not css
                            what = what.substring(1);
                            $(el).attr(what, val);
                        } else if (what == "$text") {
                            $(el).text(val);
                        } else if (what == "$html") {
                            $(el).html(val);
                        } else {
                            $(el).css(what, val);
                        }
                    }
                }
            });
        }
    };
    
    var markRootSlides = function() {
        var opts = $.deck('getOptions');
        var slideTest = $.map([
            opts.classes.before,
            opts.classes.previous,
            opts.classes.current,
            opts.classes.next,
            opts.classes.after
        ], function(el, i) {
            return '.' + el;
        }).join(', ');
        
        rootCounter = 0;
        $.each($.deck('getSlides'), function(i, $slide) {
            var $parentSlides = $slide.parentsUntil(
                opts.selectors.container,
                slideTest
            );
            
            if ($parentSlides.length) {
                $slide.data('rootSlide', $parentSlides.last().data('rootSlide'));
            }
            else {
                ++rootCounter;
                $slide.data('rootSlide', rootCounter);
            }
        });
    };
    
    var fireEventOnCurrentSlide = function(ev) {
        var slides = $.deck('getSlides');
        var $currentSlide = $.deck('getSlide');
        var index;
        
        $.each(slides, function(i, $slide) {
            if ($slide === $currentSlide) {
                index = i;
                return false;
            }
        });
        updateCurrent(ev, index, index);
    };
    
    var setTotalSlideNumber = function() {
        var opts = $.deck('getOptions');
        var slides = $.deck('getSlides');
        
        var nSlides = $.deck('getTopLevelSlides').length;
	$(opts.selectors.statusFullTotal).text(nSlides);

    };
    
    /*
      Extends defaults/options.
      
      opts.selectors.statusCurrent
      The element matching this selector displays the current slide number.
      
      opts.selectors.statusTotal
      The element matching this selector displays the total number of slides.
      
      opts.countNested
      If false, only top level slides will be counted in the current and
      total numbers.
    */
    $.extend(true, $.deck.defaults, {
        selectors: {
            statusCurrent: '.deck-status-current',
	    statusTotal: '.deck-status-total',
	    statusFakeEnd: '.deck-status-fake-end',
	    statusFullTotal: '.deck-status-full-total',
	    progress10: '.deck-progress-10'
        },
        alert: {
            wrongDataProgress: true,
            possibleDebounceProblem: true
        },
        dataProgress: "data-progress",
        dataProgressOnce: "data-progress-once",
        dataProgressSize: "data-progress-size",
        progressSizeDebounce: 201 /* somewhat, it should be bigger that the fit debounce */
    });
    
    $document.bind('deck.init', function() {
        var opts = $.deck('getOptions');
        $(opts.selectors.progress10).attr(opts.dataProgressSize, ':spe.bottom(10, 12)')
        markRootSlides();
        fireEventOnCurrentSlide(INITEVENT);
        fireEventOnCurrentSlide(SIZEEVENT);
        setTotalSlideNumber();
    });
    var timer = -1;
    $(window).unbind('resize.deckprogress').bind('resize.deckprogress', function() {
        var opts = $.deck('getOptions');
        if (opts.alert.possibleDebounceProblem && opts.progressSizeDebounce < opts.scaleDebounce + 1) {
            alert(
                "There might be a problem with the respective debounce value:\n   progressSizeDebounce: "+opts.progressSizeDebounce+"\n   scaleDebounce: "+opts.scaleDebounce);

        }
        window.clearTimeout(timer);
        timer = window.setTimeout( function() {
            fireEventOnCurrentSlide(SIZEEVENT);
            fireEventOnCurrentSlide("fire also the update event as some things might also need resizing");
        }, opts.progressSizeDebounce);
    });
    $document.bind('deck.change', updateCurrent);
})(jQuery, 'deck');


/*!
Deck JS - deck.navigation
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds clickable previous and next links to the deck.
*/
(function($, undefined) {
  var $document = $(document);

  /* Updates link hrefs, and disabled states if last/first slide */
  var updateButtons = function(event, from, to) {
    var options = $.deck('getOptions');
    var lastIndex = $.deck('getSlides').length - 1;
    var $prevSlide = $.deck('getSlide', to - 1);
    var $nextSlide = $.deck('getSlide', to + 1);
    var hrefBase = window.location.href.replace(/#.*/, '');
    var prevId = $prevSlide ? $prevSlide.attr('id') : undefined;
    var nextId = $nextSlide ? $nextSlide.attr('id') : undefined;
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);

    $prevButton.toggleClass(options.classes.navDisabled, to === 0);
    $prevButton.attr('aria-disabled', to === 0);
    $prevButton.attr('href', hrefBase + '#' + (prevId ? prevId : ''));
    $nextButton.toggleClass(options.classes.navDisabled, to === lastIndex);
    $nextButton.attr('aria-disabled', to === lastIndex);
    $nextButton.attr('href', hrefBase + '#' + (nextId ? nextId : ''));
  };

  /*
  Extends defaults/options.

  options.classes.navDisabled
    This class is added to a navigation link when that action is disabled.
    It is added to the previous link when on the first slide, and to the
    next link when on the last slide.

  options.selectors.nextLink
    The elements that match this selector will move the deck to the next
    slide when clicked.

  options.selectors.previousLink
    The elements that match this selector will move to deck to the previous
    slide when clicked.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      navDisabled: 'deck-nav-disabled'
    },

    selectors: {
      nextLink: '.deck-next-link',
      previousLink: '.deck-prev-link'
    }
  });

  $document.bind('deck.init', function() {
    var options = $.deck('getOptions');
    var slides = $.deck('getSlides');
    var $current = $.deck('getSlide');
    var $prevButton = $(options.selectors.previousLink);
    var $nextButton = $(options.selectors.nextLink);
    var index;

    // Setup prev/next link events
    $prevButton.unbind('click.decknavigation');
    $prevButton.bind('click.decknavigation', function(event) {
      $.deck('prev');
      event.preventDefault();
    });

    $nextButton.unbind('click.decknavigation');
    $nextButton.bind('click.decknavigation', function(event) {
      $.deck('next');
      event.preventDefault();
    });

    // Find where we started in the deck and set initial states
    $.each(slides, function(i, $slide) {
      if ($slide === $current) {
        index = i;
        return false;
      }
    });
    updateButtons(null, index, index);
  });

  $document.bind('deck.change', updateButtons);
})(jQuery);


/*!
Deck JS - deck.menu
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module adds the methods and key binding to show and hide a menu of all
slides in the deck. The deck menu state is indicated by the presence of a class
on the deck container.
*/
(function($, undefined) {
  var $document = $(document);
  var $html = $('html');
  var rootSlides;

  var populateRootSlidesArray = function() {
    var options = $.deck('getOptions');
    var slideTest = $.map([
      options.classes.before,
      options.classes.previous,
      options.classes.current,
      options.classes.next,
      options.classes.after
    ], function(el, i) {
      return '.' + el;
    }).join(', ');

    rootSlides = [];
    $.each($.deck('getSlides'), function(i, $slide) {
      var $parentSlides = $slide.parentsUntil(
        options.selectors.container,
        slideTest
      );
      if (!$parentSlides.length) {
        rootSlides.push($slide);
      }
    });
  };

  var bindKeyEvents = function() {
    var options = $.deck('getOptions');
    $document.unbind('keydown.deckmenu');
    $document.bind('keydown.deckmenu', function(event) {
      var isMenuKey = event.which === options.keys.menu;
      isMenuKey = isMenuKey || $.inArray(event.which, options.keys.menu) > -1;
      if (isMenuKey && !event.ctrlKey) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
    });
  };

  var bindTouchEvents = function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');
    var touchEndTime = 0;
    var currentSlide;

    $container.unbind('touchstart.deckmenu');
    $container.bind('touchstart.deckmenu', function() {
      currentSlide = $.deck('getSlide');
    });
    $container.unbind('touchend.deckmenu');
    $container.bind('touchend.deckmenu', function(event) {
      var now = Date.now();
      var isDoubletap = now - touchEndTime < options.touch.doubletapWindow;

      // Ignore this touch event if it caused a nav change (swipe)
      if (currentSlide !== $.deck('getSlide')) {
        return;
      }
      if (isDoubletap) {
        $.deck('toggleMenu');
        event.preventDefault();
      }
      touchEndTime = now;
    });
  };

  var setupMenuSlideSelection = function() {
    var options = $.deck('getOptions');

    $.each($.deck('getSlides'), function(i, $slide) {
      $slide.unbind('click.deckmenu');
      $slide.bind('click.deckmenu', function(event) {
        if (!$.deck('getContainer').hasClass(options.classes.menu)) {
          return;
        }
        $.deck('go', i);
        $.deck('hideMenu');
        event.stopPropagation();
        event.preventDefault();
      });
    });
  };

  /*
  Extends defaults/options.

  options.classes.menu
    This class is added to the deck container when showing the slide menu.

  options.keys.menu
    The numeric keycode used to toggle between showing and hiding the slide
    menu.

  options.touch.doubletapWindow
    Two consecutive touch events within this number of milliseconds will
    be considered a double tap, and will toggle the menu on touch devices.
  */
  $.extend(true, $.deck.defaults, {
    classes: {
      menu: 'deck-menu'
    },

    keys: {
      menu: 77 // m
    },

    touch: {
      doubletapWindow: 400
    }
  });

  /*
  jQuery.deck('showMenu')

  Shows the slide menu by adding the class specified by the menu class option
  to the deck container.
  */
  $.deck('extend', 'showMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if ($container.hasClass(options.classes.menu)) {
      return;
    }

    // Hide through loading class to short-circuit transitions (perf)
    $container.addClass([
      options.classes.loading,
      options.classes.menu
    ].join(' '));

    /* Forced to do this in JS until CSS learns second-grade math. Save old
    style value for restoration when menu is hidden. */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        $slide.data('oldStyle', $slide.attr('style'));
        $slide.css({
          'position': 'absolute',
          'left': ((i % 4) * 25) + '%',
          'top': (Math.floor(i / 4) * 25) + '%'
        });
      });
    }

    // Need to ensure the loading class renders first, then remove
    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop($.deck('getSlide').position().top);
    }, 0);
  });

  /*
  jQuery.deck('hideMenu')

  Hides the slide menu by removing the class specified by the menu class
  option from the deck container.
  */
  $.deck('extend', 'hideMenu', function() {
    var $container = $.deck('getContainer');
    var options = $.deck('getOptions');

    if (!$container.hasClass(options.classes.menu)) {
      return;
    }

    $container.removeClass(options.classes.menu);
    $container.addClass(options.classes.loading);

    /* Restore old style value */
    if (Modernizr.csstransforms) {
      $.each(rootSlides, function(i, $slide) {
        var oldStyle = $slide.data('oldStyle');
        $slide.attr('style', oldStyle ? oldStyle : '');
      });
    }

    window.setTimeout(function() {
      $container.removeClass(options.classes.loading);
      $container.scrollTop(0);
    }, 0);
  });

  /*
  jQuery.deck('toggleMenu')

  Toggles between showing and hiding the slide menu.
  */
  $.deck('extend', 'toggleMenu', function() {
    $.deck('getContainer').hasClass($.deck('getOptions').classes.menu) ?
    $.deck('hideMenu') : $.deck('showMenu');
  });

  $document.bind('deck.init', function() {
    populateRootSlidesArray();
    bindKeyEvents();
    bindTouchEvents();
    setupMenuSlideSelection();
  });

  $document.bind('deck.change', function(event, from, to) {
    var $container = $.deck('getContainer');
    var containerScroll, slideTop;

    if ($container.hasClass($.deck('getOptions').classes.menu)) {
      containerScroll = $container.scrollTop();
      slideTop = $.deck('getSlide', to).position().top;
      $container.scrollTop(containerScroll + slideTop);
    }
  });
})(jQuery);

/*!
Deck JS - deck.step
Copyright (c) 2011-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides new methods for stepping without considering sub-slides, together with tools for finding toplevel slides etc.
It also overrides the defaults keybinding and countNested value (so it is better to include it after "goto" and "status" extensions).
*/

(function($, deck, undefined) {
    var $d = $(document);
    // undo the defaults (to be sure jquery behaves properly when overriding it)
    $.extend(true, $[deck].defaults, { keys: {next:null, previous:null}});
    // and go on
    $.extend(true, $[deck].defaults, {
        selectors: {
            subslidesToNotify: ".slide,.onshowtoplevel"
        },
        // Here we redefined the defaults:
        //  - we avoid counting nested slides
        //  - we keep up/down for top-level slides
        //  - we still use pgup/pgdown for inner slides as they are sent by some pluggable remote controls
        keys: {
            // backspace, left arrow, page down
            previous: [8, 37, 33],
            // enter, space, right arrow, page up
            next: [13, 32, 39, 34],
            // up arrow
            previousTopLevel: [38],
            // down arrow,
            nextTopLevel: [40],
            // key 'z'
            nextEndOfTopLevel: [90]
        },
        countNested: false
    });
    var myInArray = function(el, arr) {
        for (i in arr) if (arr[i].is(el)) return i*1; // cast to int
        return -1;
    };
    $[deck]('extend', 'getSlideIndex', function(node) {
        var slides = $[deck]('getSlides');
        var ind = myInArray(node, slides);
        return ind;
    });
    $[deck]('extend', 'getToplevelSlideOf', function(node) {
        var opts = $[deck]('getOptions');
        var slides = $[deck]('getSlides');
        var last = {node: $(node), index: myInArray(node, slides)};
        $(node).parentsUntil(opts.selectors.container).each( function(ii, v) {
            var ind = myInArray(v, slides);
            if (ind != -1) {
                last = {node: $(v), index: ind};
            }
        });
        return last;
    });
    $[deck]('extend', 'getToplevelSlideOfIndex', function(ind) {
        return $[deck]('getToplevelSlideOf', $[deck]('getSlide', ind));
    });
    $[deck]('extend', 'previousTopLevelSlide', function() {
        /* Find the real previous parent */
        var current = $[deck]('getSlide');
        var currentParent = $[deck]('getToplevelSlideOf', current);
        var toGo = currentParent.index;
        if (current.is(currentParent.node) && toGo > 0) {
            // This is already toplevel slide, just go to the previous toplevel one (parent of the previous one)
            toGo = $[deck]('getToplevelSlideOfIndex', toGo-1).index;
        }
        $[deck]('go', toGo);
        
    });
    $[deck]('extend', 'nextTopLevelSlide', function() {
        /* Find the real next parent */
        var current = $[deck]('getSlide');
        var currentParent = $[deck]('getToplevelSlideOf', current);
        var icur = currentParent.index;
        for (; icur < $[deck]('getSlides').length; icur++) {
            var cursorParent = $[deck]('getToplevelSlideOfIndex', icur).node;
            if (!cursorParent.is(currentParent.node)) {
                $[deck]('go', icur);
                break;
            }
        }
    });
    $[deck]('extend', 'nextEndOfTopLevelSlide', function() {
        /* Find the real next parent */
        var current = $[deck]('getSlideIndex', $[deck]('getSlide'));
        var nextParent = $[deck]('getToplevelSlideOfIndex', current + 1);
        var icur = nextParent.index;
        for (; icur < $[deck]('getSlides').length; icur++) {
            var cursorParent = $[deck]('getToplevelSlideOfIndex', icur).node;
            if (!cursorParent.is(nextParent.node)) {
                $[deck]('go', icur-1);
                break;
            }
        }
        if (icur == $[deck]('getSlides').length) {
            $[deck]('go', icur-1);            
        }
    });
    $d.bind('deck.init', function() {
        $d.unbind('keydown.decknexttoplevel').bind('keydown.decknexttoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.nextTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('nextTopLevelSlide');
            }
        });
        $d.unbind('keydown.decknextendoftoplevel').bind('keydown.decknextendoftoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.nextEndOfTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('nextEndOfTopLevelSlide');
            }
        });
        $d.unbind('keydown.deckprevioustoplevel').bind('keydown.deckprevioustoplevel', function(e) {
            var $opts = $[deck]('getOptions');
            var key = $opts.keys.previousTopLevel;
            if (e.which === key || $.inArray(e.which, key) > -1) {
                e.preventDefault();
                $[deck]('previousTopLevelSlide');
            }
        });
    });
    // When jumping (not steping), we will init the subslides (in case they are animations), in a backward order, and then fast forward necessary animations
    var bigJump = function(from, to) {
        var direction = "forward";
        if (from > to){
            direction = "reverse";
        }
        var opts = $[deck]('getOptions');
        $($[deck]('getToplevelSlideOfIndex', to).node.find(opts.selectors.subslidesToNotify).get().reverse()).each(function(ind, el) {$(el).triggerHandler('deck.toplevelBecameCurrent', direction)});
        for (icur = $[deck]('getToplevelSlideOfIndex', to).index + 1; icur < to+1; icur++) {
            $[deck]('getSlides')[icur].triggerHandler('deck.afterToplevelBecameCurrent', 'forward');
        }
    }
    $d.bind('deck.change', function(e, from, to) {
        if (  Math.abs(from - to) > 1 || ! $[deck]('getToplevelSlideOfIndex', to).node.is($[deck]('getToplevelSlideOfIndex', from).node)) {
            // consider natural jumps and the case where we actually changed (top level) slide (even with a step)
            bigJump(from, to);
        }
    });
})(jQuery, 'deck');

(function($, deck, undefined) {
   $(document).bind('deck.change', function(e, from, to) {
      var $prev = $[deck]('getSlide', to-1),
      $next = $[deck]('getSlide', to+1),
      $oldprev = $[deck]('getSlide', from-1),
      $oldnext = $[deck]('getSlide', from+1);
      
      var direction = "forward";
      if(from > to){
        direction = "reverse";
      }

      $[deck]('getSlide', from).triggerHandler('deck.lostCurrent', [direction, from, to]);
      $[deck]('getSlide', to).triggerHandler('deck.becameCurrent', [direction, from, to]);

      $oldprev && $oldprev.triggerHandler('deck.lostPrevious', [direction, from, to]);
      $oldnext && $oldnext.triggerHandler('deck.lostNext', [direction, from, to]);

      $prev && $prev.triggerHandler('deck.becamePrevious', [direction, from, to]);
      $next && $next.triggerHandler('deck.becameNext', [direction, from, to]);
   });
})(jQuery, 'deck');


/*!
Deck JS - deck.anim
Copyright (c) 2012-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/


(function($, deck, undefined) {
    // The next two lines are the color plugin from jquery
    /*! jQuery Color v@2.1.2 http://github.com/jquery/jquery-color | jquery.org/license */
    (function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[];d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,h===0?l=0:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(d!=="transparent"&&(a.type(d)!=="string"||(e=n(d)))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(j){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);

    var $d = $(document);
    var may = function(o,f) {return f ? f.bind(o) : function() {}};

    $.extend(true, $[deck].defaults, {
        selectors: {
            animShow: ".anim-show",
            animHide: ".anim-hide",
            animAddClass: ".anim-addclass",
            animRemoveClass: ".anim-removeclass",
            animAttribute: ".anim-attribute",
            animWait: ".anim-wait",
            // specific ones
            animPlay: ".anim-play",
            animPause: ".anim-pause",
            animViewboxAs: ".anim-viewboxas",
            animAlong: ".anim-along",
            //
            animContinue: ".anim-continue"
        },
        classes: {
            animReady: "deck-anim-ready"
        },
        anim: {
            duration: 400
        }
    });

    var doInit = function() {
        // first we define some tools and grab some info from deck.js
        var o = $[deck]('getOptions');
        var context = function(el) {
            return {
                what: function() {return $(el).attr("data-what")},
                dur: function() {return $(el).attr("data-dur")*1 || o.anim.duration},
                delay: function() {return $(el).attr("data-delay")*1 || 0},
                classs: function() {return $(el).attr("data-class")},
                attribute: function() {return $(el).attr("data-attr").split(':')[0]},
                as: function() {return $(el).attr("data-as")},
                path: function() {return $(el).attr("data-path")},
                reverse: function() {var r = $(el).attr("data-reverse"); return r && r.toUpperCase() == "TRUE";},
                value: function() {return $(el).attr("data-attr").split(':')[1]},
                toplevel: function() {return $[deck]('getToplevelSlideOf', el).node},
                all: function() {return $(this.what(),this.toplevel())}
            }
        };
        var globalHasAnimContinue = false;
        var classical = function(selector, methods) {
            $(selector).each(function(i, el) {
                var c = context(el);
                may(methods, methods.create)(c);
                $(el).bind('deck.toplevelBecameCurrent', function(_, direction) {
                    may(methods, methods.init)(c);
                }).bind('deck.afterToplevelBecameCurrent', function(_, direction) {
                    may(methods, methods.fast)(c);
                }).bind('deck.lostCurrent', function(_, direction, from, to) {
                    if (direction == 'forward' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    may(methods, methods.undo)(c);
                }).bind('deck.becameCurrent', function(_, direction, from, to) {
                    if (direction == 'reverse' || Math.abs(from - to)>1 ) return; // if a big step, let the "step" extension do its job
                    if (c.delay()>0) {
                        setTimeout(function() {
                            may(methods, methods.doit)(c);
                        }, c.delay());
                    } else {
                        may(methods, methods.doit)(c);
                    }
                });
            });
        };
        
        // here come the real animations
        classical(o.selectors.animShow, {
            init: function(c) {c.all().animate({'opacity': 0.}, 0)},
            undo: function(c) {c.all().animate({'opacity': 0.}, c.dur()/100)},
            doit: function(c) {c.all().animate({'opacity': 1.}, c.dur())},
            fast: function(c) {c.all().animate({'opacity': 1.}, 0)}
        });
        classical(o.selectors.animHide, {
            init: function(c) {c.all().animate({'opacity': 1.}, 0)},
            undo: function(c) {c.all().animate({'opacity': 1.}, c.dur()/100)},
            doit: function(c) {c.all().animate({'opacity': 0.}, c.dur())},
            fast: function(c) {c.all().animate({'opacity': 0.}, 0)}
        });
        classical(o.selectors.animAddClass, {
            init: function(c) {c.all().removeClass(c.classs())},
            undo: function(c) {c.all().removeClass(c.classs())},
            doit: function(c) {c.all().addClass(c.classs())},
            fast: function(c) {c.all().addClass(c.classs())}
        });
        classical(o.selectors.animRemoveClass, {
            init: function(c) {c.all().addClass(c.classs())},
            undo: function(c) {c.all().addClass(c.classs())},
            doit: function(c) {c.all().removeClass(c.classs())},
            fast: function(c) {c.all().removeClass(c.classs())}
        });
        function svgRealAttrName(a) {
            if (startsWith(a, "svg")) {
                return REST.substr(0, 1).toLowerCase() + REST.slice(1);
            }
            return null;
        }
        function startsWith(longStr, part) {
            var res = longStr.substr(0, part.length) == part;
            REST = res ? longStr.slice(part.length) : null;
            return res;
        }
        classical(o.selectors.animAttribute, {
            init: function(c) {
                this.undo(c);
            },
            undo: function(c) {
                // TODO: [feature] could allow multiple attributes to be passed and animated simultaneously
                var k = c.attribute()
                for (i in c.previousElement) { // use the saved list of elements and values
                    var whatTo = {};
                    whatTo[k] = c.previousCss[i];
                    $(c.previousElement[i]).finish();
                    if (c.previousElement[i] instanceof SVGElement) {
                        if (whatTo[k] != null) {
	                    var realAttrName = svgRealAttrName(k) || k;
                            c.previousElement[i].attributes.getNamedItem(realAttrName).value = whatTo[k];
                        } else {
	                    var realAttrName = svgRealAttrName(k) || k;
                            c.previousElement[i].attributes.removeNamedItem(realAttrName);
                        }
                    } else {
                        $(c.previousElement[i]).animate(whatTo, 0);
                    }
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var k = c.attribute()
                c.previousCss = []
                c.previousElement = []
                c.all().each( function(){
                    c.previousElement.push(this);
                    var v = $(this).css(k);
                    if (v == null && this instanceof SVGElement) {
	                var realAttrName = svgRealAttrName(k) || k;
                        var attr = this.attributes.getNamedItem(realAttrName);
                        c.previousCss.push(attr ? attr.value : null);
                    } else {
                        c.previousCss.push(v);
                    }
                }); // save a list of elements and values
                var whatTo = {}
                whatTo[c.attribute()] = c.value()
                c.all().animate(whatTo, c.dur()*factor)
            },
            fast: function(c) {this.doit(c,0)}
        });
        classical(o.selectors.animViewboxAs, {
            create: function(c) {
                c.attribute = function() {return "svgViewBox"};
                c.value = function() {
                    var asWhat = $(c.as());
                    var a = function (i) {return asWhat.attr(i)}
                    var toViewBox = a('x')+" "+a('y')+" "+a('width')+" "+a('height');
                    return toViewBox;
                };
            },
            init: function(c) {this.undo(c)},
            undo: function(c) {
                var k = c.attribute()
                for (i in c.previousElement) { // use the saved list of elements and values
                    var whatTo = {}
                    whatTo[k] = c.previousValue[i]
                    $(c.previousElement[i]).finish();
                    $(c.previousElement[i]).animate(whatTo, 0)
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var k = c.attribute()
                c.previousValue = []
                c.previousElement = []
                c.all().each( function() {
                    c.previousElement.push(this);
                    c.previousValue.push(this.attributes.getNamedItem('viewBox').value);
                }); // save a list of elements and values
                var whatTo = {}
                whatTo[k] = c.value()
                c.all().animate(whatTo, c.dur()*factor)
            },
            fast: function(c) {this.doit(c,0)}
        });
        classical(o.selectors.animAlong, {
            init: function(c) {this.undo(c)},
            undo: function(c) {
                for (i in c.previousElement) { // use the saved list of elements and values
                    var prev = c.previousValue[i];
                    $(c.previousElement[i]).finish();
                    $(c.previousElement[i]).attr("transform", prev);
                }
            },
            doit: function(c, factor) {
                if (factor === undefined) factor = 1;
                c.all().each( function() {
                    // finish all previous animations
                    if (!globalHasAnimContinue && $(this).queue().length) {
                        $(this).finish();
                    }
                });
                var path = $(c.path()).get(0);
                var rev = c.reverse();
                var len = path.getTotalLength()
                var s = path.getPointAtLength(rev?len:0);
                c.previousValue = [];
                c.previousElement = [];
                c.all().each( function() {
                    var base = "";
                    if ($(this).attr("transform") != null) {
                        base = $(this).attr("transform"); // TODO maybe can use attr also above (anim-attr)
                        c.previousValue.push(base);
                    } else {
                        c.previousValue.push(null);
                    }
                    c.previousElement.push(this);
                    $(this).css({svgDeckAnim: 0.});
                    $(this).animate({svgDeckAnim: 1.}, {
                        duration: c.dur()*factor,
                        step: function(v) {
                            if (rev) v = 1-v;
                            var p = path.getPointAtLength(v * len);
                            $(this).attr("transform", 'translate('+(p.x-s.x)+','+(p.y-s.y)+')' + base);
                        }
                    });
                });
            },
            fast: function(c) {this.doit(c, 0);}
        });
        classical(o.selectors.animPlay, {
            init: function(c) {c.all().each(function(){this.pause(); try{this.currentTime=0}catch(e){} })},
            undo: function(c) {c.all().each(function(){this.pause()})},
            doit: function(c) {c.all().each(function(){this.play()})},
            fast: function(c) {c.all().each(function(){this.play()})}
        });
        classical(o.selectors.animPause, {
            undo: function(c) {c.all().each(function(){this.play()})},
            doit: function(c) {c.all().each(function(){this.pause()})},
            fast: function(c) {c.all().each(function(){this.pause()})}
        });
        classical(o.selectors.animContinue, {
            doit: function(c) {setTimeout(function(){ globalHasAnimContinue = true; $[deck]('next') ; globalHasAnimContinue = false; }, 1)}
            // do not do it in fast mode
        });
        classical(o.selectors.animWait, {
            doit: function(c) {setTimeout(function(){ globalHasAnimContinue = true; $[deck]('next') ; globalHasAnimContinue = false; }, c.dur())}
        });
        // handle the chained undo for "anim-continue"
        $(o.selectors.animContinue + "," + o.selectors.animWait).each(function(i, curSlide) {
            $(curSlide).bind('deck.becameCurrent', function(_, direction) {
                if (direction == 'forward') return;
                setTimeout(function(){$[deck]('prev')}, 1)
            });

        });

        // finally force "refresh" (notification of slide change)
        var current = $[deck]('getSlide')
        var icur = 0
        for (; icur < $[deck]('getSlides').length; icur++) {
            if ($[deck]('getSlides')[icur] == current) break;                
        }
	$d.trigger("deck.change", [icur, 0]);
	$d.trigger("deck.change", [0, icur]);

        var container = $[deck]('getContainer');
        $(container).addClass(o.classes.animReady)
    }
    $(document).bind('deck.init', function() {
        doInit();
    });
        
})(jQuery, 'deck');


(function(e){function d(){this._settings=[];this._extensions=[];this.regional=[];this.regional[""]={errorLoadingText:"Error loading",notSupportedText:"This browser does not support SVG"};this.local=this.regional[""];this._uuid=new Date().getTime();this._renesis=c("RenesisX.RenesisCtrl")}function c(i){try{return !!(window.ActiveXObject&&new ActiveXObject(i))}catch(j){return false}}var g="svgwrapper";e.extend(d.prototype,{markerClassName:"hasSVG",svgNS:"http://www.w3.org/2000/svg",xlinkNS:"http://www.w3.org/1999/xlink",_wrapperClass:b,_attrNames:{class_:"class",in_:"in",alignmentBaseline:"alignment-baseline",baselineShift:"baseline-shift",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",vertAdvY:"vert-adv-y",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode"},_attachSVG:function(i,k){var j=(i.namespaceURI==this.svgNS?i:null);var i=(j?null:i);if(e(i||j).hasClass(this.markerClassName)){return}if(typeof k=="string"){k={loadURL:k}}else{if(typeof k=="function"){k={onLoad:k}}}e(i||j).addClass(this.markerClassName);try{if(!j){j=document.createElementNS(this.svgNS,"svg");j.setAttribute("version","1.1");if(i.clientWidth>0){j.setAttribute("width",i.clientWidth)}if(i.clientHeight>0){j.setAttribute("height",i.clientHeight)}i.appendChild(j)}this._afterLoad(i,j,k||{})}catch(l){if(!e.support.noCloneChecked){if(!i.id){i.id="svg"+(this._uuid++)}this._settings[i.id]=k;i.innerHTML='<embed type="image/svg+xml" width="100%" height="100%" src="'+(k.initPath||"")+'blank.svg" pluginspage="http://www.adobe.com/svg/viewer/install/main.html"/>'}else{i.innerHTML='<p class="svg_error">'+this.local.notSupportedText+"</p>"}}},_registerSVG:function(){for(var l=0;l<document.embeds.length;l++){var j=document.embeds[l].parentNode;if(!e(j).hasClass(e.svg.markerClassName)||e.data(j,g)){continue}var k=null;try{k=document.embeds[l].getSVGDocument()}catch(m){setTimeout(e.svg._registerSVG,250);return}k=(k?k.documentElement:null);if(k){e.svg._afterLoad(j,k)}}},_afterLoad:function(i,j,k){var k=k||this._settings[i.id];this._settings[i?i.id:""]=null;var m=new this._wrapperClass(j,i);e.data(i||j,g,m);try{if(k.loadURL){m.load(k.loadURL,k)}if(k.settings){m.configure(k.settings)}if(k.onLoad&&!k.loadURL){k.onLoad.apply(i||j,[m])}}catch(l){alert(l)}},_getSVG:function(i){i=(typeof i=="string"?e(i)[0]:(i.jquery?i[0]:i));return e.data(i,g)},_destroySVG:function(i){var j=e(i);if(!j.hasClass(this.markerClassName)){return}j.removeClass(this.markerClassName);if(i.namespaceURI!=this.svgNS){j.empty()}e.removeData(i,g)},addExtension:function(j,i){this._extensions.push([j,i])},isSVGElem:function(i){return(i.nodeType==1&&i.namespaceURI==e.svg.svgNS)}});function b(k,j){this._svg=k;this._container=j;for(var l=0;l<e.svg._extensions.length;l++){var m=e.svg._extensions[l];this[m[0]]=new m[1](this)}}e.extend(b.prototype,{_width:function(){return(this._container?this._container.clientWidth:this._svg.width)},_height:function(){return(this._container?this._container.clientHeight:this._svg.height)},root:function(){return this._svg},configure:function(o,n,k){if(!o.nodeName){k=n;n=o;o=this._svg}if(k){for(var m=o.attributes.length-1;m>=0;m--){var j=o.attributes.item(m);if(!(j.nodeName=="onload"||j.nodeName=="version"||j.nodeName.substring(0,5)=="xmlns")){o.attributes.removeNamedItem(j.nodeName)}}}for(var l in n){o.setAttribute(e.svg._attrNames[l]||l,n[l])}return this},getElementById:function(i){return this._svg.ownerDocument.getElementById(i)},change:function(j,k){if(j){for(var i in k){if(k[i]==null){j.removeAttribute(e.svg._attrNames[i]||i)}else{j.setAttribute(e.svg._attrNames[i]||i,k[i])}}}return this},_args:function(k,n,j){n.splice(0,0,"parent");n.splice(n.length,0,"settings");var l={};var o=0;if(k[0]!=null&&k[0].jquery){k[0]=k[0][0]}if(k[0]!=null&&!(typeof k[0]=="object"&&k[0].nodeName)){l.parent=null;o=1}for(var m=0;m<k.length;m++){l[n[m+o]]=k[m]}if(j){e.each(j,function(p,q){if(typeof l[q]=="object"){l.settings=l[q];l[q]=null}})}return l},title:function(k,m,j){var i=this._args(arguments,["text"]);var l=this._makeNode(i.parent,"title",i.settings||{});l.appendChild(this._svg.ownerDocument.createTextNode(i.text));return l},describe:function(k,m,j){var i=this._args(arguments,["text"]);var l=this._makeNode(i.parent,"desc",i.settings||{});l.appendChild(this._svg.ownerDocument.createTextNode(i.text));return l},defs:function(k,l,j){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"defs",e.extend((i.id?{id:i.id}:{}),i.settings||{}))},symbol:function(o,p,k,n,m,i,l){var j=this._args(arguments,["id","x1","y1","width","height"]);return this._makeNode(j.parent,"symbol",e.extend({id:j.id,viewBox:j.x1+" "+j.y1+" "+j.width+" "+j.height},j.settings||{}))},marker:function(o,i,q,p,l,j,m,k){var n=this._args(arguments,["id","refX","refY","mWidth","mHeight","orient"],["orient"]);return this._makeNode(n.parent,"marker",e.extend({id:n.id,refX:n.refX,refY:n.refY,markerWidth:n.mWidth,markerHeight:n.mHeight,orient:n.orient||"auto"},n.settings||{}))},style:function(k,m,j){var i=this._args(arguments,["styles"]);var l=this._makeNode(i.parent,"style",e.extend({type:"text/css"},i.settings||{}));l.appendChild(this._svg.ownerDocument.createTextNode(i.styles));return l},script:function(m,i,l,k){var j=this._args(arguments,["script","type"],["type"]);var n=this._makeNode(j.parent,"script",e.extend({type:j.type||"text/javascript"},j.settings||{}));n.appendChild(this._svg.ownerDocument.createTextNode(j.script));return n},linearGradient:function(q,j,r,k,p,i,o,l){var n=this._args(arguments,["id","stops","x1","y1","x2","y2"],["x1"]);var m=e.extend({id:n.id},(n.x1!=null?{x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2}:{}));return this._gradient(n.parent,"linearGradient",e.extend(m,n.settings||{}),n.stops)},radialGradient:function(s,j,t,o,m,i,n,k,l){var q=this._args(arguments,["id","stops","cx","cy","r","fx","fy"],["cx"]);var p=e.extend({id:q.id},(q.cx!=null?{cx:q.cx,cy:q.cy,r:q.r,fx:q.fx,fy:q.fy}:{}));return this._gradient(q.parent,"radialGradient",e.extend(p,q.settings||{}),q.stops)},_gradient:function(n,j,m,p){var o=this._makeNode(n,j,m);for(var l=0;l<p.length;l++){var k=p[l];this._makeNode(o,"stop",e.extend({offset:k[0],stopColor:k[1]},(k[2]!=null?{stopOpacity:k[2]}:{})))}return o},pattern:function(s,i,r,p,j,t,q,o,l,u,k){var n=this._args(arguments,["id","x","y","width","height","vx","vy","vwidth","vheight"],["vx"]);var m=e.extend({id:n.id,x:n.x,y:n.y,width:n.width,height:n.height},(n.vx!=null?{viewBox:n.vx+" "+n.vy+" "+n.vwidth+" "+n.vheight}:{}));return this._makeNode(n.parent,"pattern",e.extend(m,n.settings||{}))},clipPath:function(l,m,i,k){var j=this._args(arguments,["id","units"]);j.units=j.units||"userSpaceOnUse";return this._makeNode(j.parent,"clipPath",e.extend({id:j.id,clipPathUnits:j.units},j.settings||{}))},mask:function(n,p,j,o,m,i,l){var k=this._args(arguments,["id","x","y","width","height"]);return this._makeNode(k.parent,"mask",e.extend({id:k.id,x:k.x,y:k.y,width:k.width,height:k.height},k.settings||{}))},createPath:function(){return new f()},createText:function(){return new h()},svg:function(r,q,o,i,s,p,n,k,t,j){var m=this._args(arguments,["x","y","width","height","vx","vy","vwidth","vheight"],["vx"]);var l=e.extend({x:m.x,y:m.y,width:m.width,height:m.height},(m.vx!=null?{viewBox:m.vx+" "+m.vy+" "+m.vwidth+" "+m.vheight}:{}));return this._makeNode(m.parent,"svg",e.extend(l,m.settings||{}))},group:function(k,l,j){var i=this._args(arguments,["id"],["id"]);return this._makeNode(i.parent,"g",e.extend({id:i.id},i.settings||{}))},use:function(p,o,n,i,q,j,l){var m=this._args(arguments,["x","y","width","height","ref"]);if(typeof m.x=="string"){m.ref=m.x;m.settings=m.y;m.x=m.y=m.width=m.height=null}var k=this._makeNode(m.parent,"use",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},m.settings||{}));k.setAttributeNS(e.svg.xlinkNS,"href",m.ref);return k},link:function(k,m,j){var i=this._args(arguments,["ref"]);var l=this._makeNode(i.parent,"a",i.settings);l.setAttributeNS(e.svg.xlinkNS,"href",i.ref);return l},image:function(p,o,n,i,q,j,l){var m=this._args(arguments,["x","y","width","height","ref"]);var k=this._makeNode(m.parent,"image",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},m.settings||{}));k.setAttributeNS(e.svg.xlinkNS,"href",m.ref);return k},path:function(k,l,j){var i=this._args(arguments,["path"]);return this._makeNode(i.parent,"path",e.extend({d:(i.path.path?i.path.path():i.path)},i.settings||{}))},rect:function(p,o,n,k,q,j,i,l){var m=this._args(arguments,["x","y","width","height","rx","ry"],["rx"]);return this._makeNode(m.parent,"rect",e.extend({x:m.x,y:m.y,width:m.width,height:m.height},(m.rx?{rx:m.rx,ry:m.ry}:{}),m.settings||{}))},circle:function(l,i,n,m,k){var j=this._args(arguments,["cx","cy","r"]);return this._makeNode(j.parent,"circle",e.extend({cx:j.cx,cy:j.cy,r:j.r},j.settings||{}))},ellipse:function(l,i,o,n,m,k){var j=this._args(arguments,["cx","cy","rx","ry"]);return this._makeNode(j.parent,"ellipse",e.extend({cx:j.cx,cy:j.cy,rx:j.rx,ry:j.ry},j.settings||{}))},line:function(o,k,n,i,l,m){var j=this._args(arguments,["x1","y1","x2","y2"]);return this._makeNode(j.parent,"line",e.extend({x1:j.x1,y1:j.y1,x2:j.x2,y2:j.y2},j.settings||{}))},polyline:function(l,k,j){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polyline",i.points,i.settings)},polygon:function(l,k,j){var i=this._args(arguments,["points"]);return this._poly(i.parent,"polygon",i.points,i.settings)},_poly:function(n,j,m,l){var o="";for(var k=0;k<m.length;k++){o+=m[k].join()+" "}return this._makeNode(n,j,e.extend({points:e.trim(o)},l||{}))},text:function(l,i,n,m,k){var j=this._args(arguments,["x","y","value"]);if(typeof j.x=="string"&&arguments.length<4){j.value=j.x;j.settings=j.y;j.x=j.y=null}return this._text(j.parent,"text",j.value,e.extend({x:(j.x&&a(j.x)?j.x.join(" "):j.x),y:(j.y&&a(j.y)?j.y.join(" "):j.y)},j.settings||{}))},textpath:function(k,n,m,j){var i=this._args(arguments,["path","value"]);var l=this._text(i.parent,"textPath",i.value,i.settings||{});l.setAttributeNS(e.svg.xlinkNS,"href",i.path);return l},_text:function(r,j,q,n){var m=this._makeNode(r,j,n);if(typeof q=="string"){m.appendChild(m.ownerDocument.createTextNode(q))}else{for(var o=0;o<q._parts.length;o++){var l=q._parts[o];if(l[0]=="tspan"){var k=this._makeNode(m,l[0],l[2]);k.appendChild(m.ownerDocument.createTextNode(l[1]));m.appendChild(k)}else{if(l[0]=="tref"){var k=this._makeNode(m,l[0],l[2]);k.setAttributeNS(e.svg.xlinkNS,"href",l[1]);m.appendChild(k)}else{if(l[0]=="textpath"){var p=e.extend({},l[2]);p.href=null;var k=this._makeNode(m,l[0],p);k.setAttributeNS(e.svg.xlinkNS,"href",l[2].href);k.appendChild(m.ownerDocument.createTextNode(l[1]));m.appendChild(k)}else{m.appendChild(m.ownerDocument.createTextNode(l[1]))}}}}}return m},other:function(l,j,k){var i=this._args(arguments,["name"]);return this._makeNode(i.parent,i.name,i.settings||{})},_makeNode:function(k,i,j){k=k||this._svg;var l=this._svg.ownerDocument.createElementNS(e.svg.svgNS,i);for(var i in j){var m=j[i];if(m!=null&&m!=null&&(typeof m!="string"||m!="")){l.setAttribute(e.svg._attrNames[i]||i,m)}}k.appendChild(l);return l},add:function(k,l){var j=this._args((arguments.length==1?[null,k]:arguments),["node"]);var i=this;j.parent=j.parent||this._svg;j.node=(j.node.jquery?j.node:e(j.node));try{if(e.svg._renesis){throw"Force traversal"}j.parent.appendChild(j.node.cloneNode(true))}catch(m){j.node.each(function(){var n=i._cloneAsSVG(this);if(n){j.parent.appendChild(n)}})}return this},clone:function(l,m){var i=this;var k=this._args((arguments.length==1?[null,l]:arguments),["node"]);k.parent=k.parent||this._svg;k.node=(k.node.jquery?k.node:e(k.node));var j=[];k.node.each(function(){var n=i._cloneAsSVG(this);if(n){n.id="";k.parent.appendChild(n);j.push(n)}});return j},_cloneAsSVG:function(m){var l=null;if(m.nodeType==1){l=this._svg.ownerDocument.createElementNS(e.svg.svgNS,this._checkName(m.nodeName));for(var k=0;k<m.attributes.length;k++){var j=m.attributes.item(k);if(j.nodeName!="xmlns"&&j.nodeValue){if(j.prefix=="xlink"){l.setAttributeNS(e.svg.xlinkNS,j.localName||j.baseName,j.nodeValue)}else{l.setAttribute(this._checkName(j.nodeName),j.nodeValue)}}}for(var k=0;k<m.childNodes.length;k++){var o=this._cloneAsSVG(m.childNodes[k]);if(o){l.appendChild(o)}}}else{if(m.nodeType==3){if(e.trim(m.nodeValue)){l=this._svg.ownerDocument.createTextNode(m.nodeValue)}}else{if(m.nodeType==4){if(e.trim(m.nodeValue)){try{l=this._svg.ownerDocument.createCDATASection(m.nodeValue)}catch(n){l=this._svg.ownerDocument.createTextNode(m.nodeValue.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"))}}}}}return l},_checkName:function(i){i=(i.substring(0,1)>="A"&&i.substring(0,1)<="Z"?i.toLowerCase():i);return(i.substring(0,4)=="svg:"?i.substring(4):i)},load:function(i,l){l=(typeof l=="boolean"?{addTo:l}:(typeof l=="function"?{onLoad:l}:(typeof l=="string"?{parent:l}:(typeof l=="object"&&l.nodeName?{parent:l}:(typeof l=="object"&&l.jquery?{parent:l}:l||{})))));if(!l.parent&&!l.addTo){this.clear(false)}var j=[this._svg.getAttribute("width"),this._svg.getAttribute("height")];var o=this;var n=function(p){p=e.svg.local.errorLoadingText+": "+p;if(l.onLoad){l.onLoad.apply(o._container||o._svg,[o,p])}else{o.text(null,10,20,p)}};var m=function(q){var p=new ActiveXObject("Microsoft.XMLDOM");p.validateOnParse=false;p.resolveExternals=false;p.async=false;p.loadXML(q);if(p.parseError.errorCode!=0){n(p.parseError.reason);return null}return p};var k=function(s){if(!s){return}if(s.documentElement.nodeName!="svg"){var z=s.getElementsByTagName("parsererror");var r=(z.length?z[0].getElementsByTagName("div"):[]);n(!z.length?"???":(r.length?r[0]:z[0]).firstChild.nodeValue);return}if(!l.forceKeepRelativePath&&i.search(/\//)!=-1){var q=i.replace(/\/[^\/]*$/,"/");e("*[xlink\\:href]",s.documentElement).each(function(C,D){var w=e(D).attr("xlink:href")+"";if(!w.match(/(^[a-z]([-a-z0-9+.])*:.*$)|(^\/.*$)/i)&&w[0]!="#"){e(D).attr("xlink:href",q+e(D).attr("xlink:href"))}})}var A=(l.parent?e(l.parent)[0]:o._svg);var B={};for(var t=0;t<s.documentElement.attributes.length;t++){var x=s.documentElement.attributes.item(t);if(!(x.nodeName=="version"||x.nodeName.substring(0,5)=="xmlns")){B[x.nodeName]=x.nodeValue}}o.configure(A,B,!l.parent);var p=s.documentElement.childNodes;for(var t=0;t<p.length;t++){try{if(e.svg._renesis){throw"Force traversal"}A.appendChild(o._svg.ownerDocument.importNode(p[t],true));if(p[t].nodeName=="script"){e.globalEval(p[t].textContent)}}catch(v){o.add(A,p[t])}}if(!l.changeSize){o.configure(A,{width:j[0],height:j[1]})}if(l.onLoad){var y=s.documentElement.getAttribute("width");var u=s.documentElement.getAttribute("height");l.onLoad.apply(o._container||o._svg,[o,y,u])}};if(i.match("<svg")){k(!e.support.noCloneChecked?m(i):new DOMParser().parseFromString(i,"text/xml"))}else{e.ajax({url:i,dataType:(!e.support.noCloneChecked?"text":"xml"),success:function(p){k(!e.support.noCloneChecked?m(p):p)},error:function(q,r,p){n(r+(p?" "+p.message:""))}})}return this},remove:function(i){i=(i.jquery?i[0]:i);i.parentNode.removeChild(i);return this},clear:function(i){if(i){this.configure({},true)}while(this._svg.firstChild){this._svg.removeChild(this._svg.firstChild)}return this},toSVG:function(i){i=i||this._svg;return(typeof XMLSerializer=="undefined"?this._toSVG(i):new XMLSerializer().serializeToString(i))},_toSVG:function(m){var l="";if(!m){return l}if(m.nodeType==3){l=m.nodeValue}else{if(m.nodeType==4){l="<![CDATA["+m.nodeValue+"]]>"}else{l="<"+m.nodeName;if(m.attributes){for(var k=0;k<m.attributes.length;k++){var j=m.attributes.item(k);if(!(e.trim(j.nodeValue)==""||j.nodeValue.match(/^\[object/)||j.nodeValue.match(/^function/))){l+=" "+(j.namespaceURI==e.svg.xlinkNS?"xlink:":"")+j.nodeName+'="'+j.nodeValue+'"'}}}if(m.firstChild){l+=">";var n=m.firstChild;while(n){l+=this._toSVG(n);n=n.nextSibling}l+="</"+m.nodeName+">"}else{l+="/>"}}}return l}});function f(){this._path=""}e.extend(f.prototype,{reset:function(){this._path="";return this},move:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"m":"M"),i,k)},line:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"l":"L"),i,k)},horiz:function(i,j){this._path+=(j?"h":"H")+(a(i)?i.join(" "):i);return this},vert:function(j,i){this._path+=(i?"v":"V")+(a(j)?j.join(" "):j);return this},curveC:function(k,m,j,l,i,o,n){n=(a(k)?m:n);return this._coords((n?"c":"C"),k,m,j,l,i,o)},smoothC:function(j,k,i,m,l){l=(a(j)?k:l);return this._coords((l?"s":"S"),j,k,i,m)},curveQ:function(j,k,i,m,l){l=(a(j)?k:l);return this._coords((l?"q":"Q"),j,k,i,m)},smoothQ:function(i,k,j){j=(a(i)?k:j);return this._coords((j?"t":"T"),i,k)},_coords:function(m,l,r,k,q,j,p){if(a(l)){for(var n=0;n<l.length;n++){var o=l[n];this._path+=(n==0?m:" ")+o[0]+","+o[1]+(o.length<4?"":" "+o[2]+","+o[3]+(o.length<6?"":" "+o[4]+","+o[5]))}}else{this._path+=m+l+","+r+(k==null?"":" "+k+","+q+(j==null?"":" "+j+","+p))}return this},arc:function(m,j,p,s,l,r,q,k){k=(a(m)?j:k);this._path+=(k?"a":"A");if(a(m)){for(var n=0;n<m.length;n++){var o=m[n];this._path+=(n==0?"":" ")+o[0]+","+o[1]+" "+o[2]+" "+(o[3]?"1":"0")+","+(o[4]?"1":"0")+" "+o[5]+","+o[6]}}else{this._path+=m+","+j+" "+p+" "+(s?"1":"0")+","+(l?"1":"0")+" "+r+","+q}return this},close:function(){this._path+="z";return this},path:function(){return this._path}});f.prototype.moveTo=f.prototype.move;f.prototype.lineTo=f.prototype.line;f.prototype.horizTo=f.prototype.horiz;f.prototype.vertTo=f.prototype.vert;f.prototype.curveCTo=f.prototype.curveC;f.prototype.smoothCTo=f.prototype.smoothC;f.prototype.curveQTo=f.prototype.curveQ;f.prototype.smoothQTo=f.prototype.smoothQ;f.prototype.arcTo=f.prototype.arc;function h(){this._parts=[]}e.extend(h.prototype,{reset:function(){this._parts=[];return this},string:function(i){this._parts[this._parts.length]=["text",i];return this},span:function(j,i){this._parts[this._parts.length]=["tspan",j,i];return this},ref:function(j,i){this._parts[this._parts.length]=["tref",j,i];return this},path:function(k,j,i){this._parts[this._parts.length]=["textpath",j,e.extend({href:k},i||{})];return this}});e.fn.svg=function(j){var i=Array.prototype.slice.call(arguments,1);if(typeof j=="string"&&j=="get"){return e.svg["_"+j+"SVG"].apply(e.svg,[this[0]].concat(i))}return this.each(function(){if(typeof j=="string"){e.svg["_"+j+"SVG"].apply(e.svg,[this].concat(i))}else{e.svg._attachSVG(this,j||{})}})};function a(i){return(i&&i.constructor==Array)}e.svg=new d()})(jQuery);
(function(a){a.each(["x","y","width","height","rx","ry","cx","cy","r","x1","y1","x2","y2","stroke-width","strokeWidth","opacity","fill-opacity","fillOpacity","stroke-opacity","strokeOpacity","stroke-dashoffset","strokeDashOffset","font-size","fontSize","font-weight","fontWeight","letter-spacing","letterSpacing","word-spacing","wordSpacing"],function(h,g){var f=g.charAt(0).toUpperCase()+g.substr(1);if(a.cssProps){a.cssProps["svg"+f]=a.cssProps["svg-"+g]=g}a.fx.step["svg"+f]=a.fx.step["svg-"+g]=function(k){var j=a.svg._attrNames[g]||g;var i=k.elem.attributes.getNamedItem(j);if(!k.set){k.start=(i?parseFloat(i.value):0);var m="";if(/^[+-]=/.exec(m)){k.end=k.start+parseFloat(m.replace(/=/,""))}a(k.elem).css(j,"");k.set=true}var l=(k.pos*(k.end-k.start)+k.start)+(k.unit=="%"?"%":"");(i?i.value=l:k.elem.setAttribute(j,l))}});a.fx.step.svgStrokeDashArray=a.fx.step["svg-strokeDashArray"]=a.fx.step["svgStroke-dasharray"]=a.fx.step["svg-stroke-dasharray"]=function(j){var g=j.elem.attributes.getNamedItem("stroke-dasharray");if(!j.set){j.start=c(g?g.value:"");var l=j.end;j.end=c(l);if(/^[+-]=/.exec(l)){l=l.split(/[, ]+/);if(l.length%2==1){var f=l.length;for(var h=0;h<f;h++){l.push(l[h])}}for(var h=0;h<l.length;h++){if(/^[+-]=/.exec(l[h])){j.end[h]=j.start[h]+parseFloat(l[h].replace(/=/,""))}}}j.set=true}var k=a.map(j.start,function(o,m){return(j.pos*(j.end[m]-o)+o)}).join(",");(g?g.value=k:j.elem.setAttribute("stroke-dasharray",k))};function c(j){var g=j.split(/[, ]+/);for(var h=0;h<g.length;h++){g[h]=parseFloat(g[h]);if(isNaN(g[h])){g[h]=0}}if(g.length%2==1){var f=g.length;for(var h=0;h<f;h++){g.push(g[h])}}return g}a.fx.step.svgViewBox=a.fx.step["svg-viewBox"]=function(h){var f=h.elem.attributes.getNamedItem("viewBox");if(!h.set){h.start=b(f?f.value:"");var k=h.end;h.end=b(k);if(/^[+-]=/.exec(k)){k=k.split(/[, ]+/);while(k.length<4){k.push("0")}for(var g=0;g<4;g++){if(/^[+-]=/.exec(k[g])){h.end[g]=h.start[g]+parseFloat(k[g].replace(/=/,""))}}}h.set=true}var j=a.map(h.start,function(m,l){return(h.pos*(h.end[l]-m)+m)}).join(" ");(f?f.value=j:h.elem.setAttribute("viewBox",j))};function b(g){var h=g.split(/[, ]+/);for(var f=0;f<h.length;f++){h[f]=parseFloat(h[f]);if(isNaN(h[f])){h[f]=0}}while(h.length<4){h.push(0)}return h}a.fx.step.svgTransform=a.fx.step["svg-transform"]=function(m){var f=m.elem.attributes.getNamedItem("transform");if(!m.set){m.start=e(f?f.value:"");m.end=e(m.end,m.start);m.set=true}var k="";for(var l=0;l<m.end.order.length;l++){switch(m.end.order.charAt(l)){case"t":k+=" translate("+(m.pos*(m.end.translateX-m.start.translateX)+m.start.translateX)+","+(m.pos*(m.end.translateY-m.start.translateY)+m.start.translateY)+")";break;case"s":k+=" scale("+(m.pos*(m.end.scaleX-m.start.scaleX)+m.start.scaleX)+","+(m.pos*(m.end.scaleY-m.start.scaleY)+m.start.scaleY)+")";break;case"r":k+=" rotate("+(m.pos*(m.end.rotateA-m.start.rotateA)+m.start.rotateA)+","+(m.pos*(m.end.rotateX-m.start.rotateX)+m.start.rotateX)+","+(m.pos*(m.end.rotateY-m.start.rotateY)+m.start.rotateY)+")";break;case"x":k+=" skewX("+(m.pos*(m.end.skewX-m.start.skewX)+m.start.skewX)+")";case"y":k+=" skewY("+(m.pos*(m.end.skewY-m.start.skewY)+m.start.skewY)+")";break;case"m":var g="";for(var h=0;h<6;h++){g+=","+(m.pos*(m.end.matrix[h]-m.start.matrix[h])+m.start.matrix[h])}k+=" matrix("+g.substr(1)+")";break}}(f?f.value=k:m.elem.setAttribute("transform",k))};function e(j,h){j=j||"";if(typeof j=="object"){j=j.value}var g=a.extend({translateX:0,translateY:0,scaleX:0,scaleY:0,rotateA:0,rotateX:0,rotateY:0,skewX:0,skewY:0,matrix:[0,0,0,0,0,0]},h||{});g.order="";var i=/([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;var f=i.exec(j);while(f){switch(f[1]){case"translate":g.order+="t";g.translateX=parseFloat(f[2]);g.translateY=(f[3]?parseFloat(f[3]):0);break;case"scale":g.order+="s";g.scaleX=parseFloat(f[2]);g.scaleY=(f[3]?parseFloat(f[3]):g.scaleX);break;case"rotate":g.order+="r";g.rotateA=parseFloat(f[2]);g.rotateX=(f[3]?parseFloat(f[3]):0);g.rotateY=(f[4]?parseFloat(f[4]):0);break;case"skewX":g.order+="x";g.skewX=parseFloat(f[2]);break;case"skewY":g.order+="y";g.skewY=parseFloat(f[2]);break;case"matrix":g.order+="m";g.matrix=[parseFloat(f[2]),parseFloat(f[3]),parseFloat(f[4]),parseFloat(f[5]),parseFloat(f[6]),parseFloat(f[7])];break}f=i.exec(j)}if(g.order=="m"&&Math.abs(g.matrix[0])==Math.abs(g.matrix[3])&&g.matrix[1]!=0&&Math.abs(g.matrix[1])==Math.abs(g.matrix[2])){var k=Math.acos(g.matrix[0])*180/Math.PI;k=(g.matrix[1]<0?360-k:k);g.order="rt";g.rotateA=k;g.rotateX=g.rotateY=0;g.translateX=g.matrix[4];g.translateY=g.matrix[5]}return g}a.each(["fill","stroke"],function(h,g){var f=g.charAt(0).toUpperCase()+g.substr(1);a.fx.step["svg"+f]=a.fx.step["svg-"+g]=function(k){if(!k.set){k.start=a.svg._getColour(k.elem,g);var j=(k.end=="none");k.end=(j?a.svg._getColour(k.elem.parentNode,g):a.svg._getRGB(k.end));k.end[3]=j;a(k.elem).css(g,"");k.set=true}var i=k.elem.attributes.getNamedItem(g);var l="rgb("+[Math.min(Math.max(parseInt((k.pos*(k.end[0]-k.start[0]))+k.start[0],10),0),255),Math.min(Math.max(parseInt((k.pos*(k.end[1]-k.start[1]))+k.start[1],10),0),255),Math.min(Math.max(parseInt((k.pos*(k.end[2]-k.start[2]))+k.start[2],10),0),255)].join(",")+")";l=(k.end[3]&&k.state==1?"none":l);(i?i.value=l:k.elem.setAttribute(g,l))}});a.svg._getColour=function(g,f){g=a(g);var h;do{h=g.attr(f)||g.css(f);if((h!=""&&h!="none")||g.hasClass(a.svg.markerClassName)){break}}while(g=g.parent());return a.svg._getRGB(h)};a.svg._getRGB=function(g){var f;if(g&&g.constructor==Array){return(g.length==3||g.length==4?g:d.none)}if(f=/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/^rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}return d[a.trim(g).toLowerCase()]||d.none};var d={"":[255,255,255,1],none:[255,255,255,1],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}})(jQuery);
/*!
Deck JS - deck.svg
Copyright (c) 2012-2014 Rémi Emonet, as a major refactor from an early version from Rémi Barraquand.
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for managed svg inclusion (allowing proper DOM access subsequently for animations, etc.).
*/

(function($, deck, undefined) {
    var $d = $(document);
    var may = function(f) {return f ? f : function() {}};

    $.extend(true, $[deck].defaults, {
        classes: {
            svgPlaceholder: 'deck-svg'
        },
	selectors: {
            svgObject: "object[type='deckjs/svg'], div.svg-object",
            svgObjectDisable: {
                idrewrite: ".no-idrewrite",
                stylerewrite: ".no-stylerewrite"
            }
        },
        alert: {
            missingSVG: true
        }
    });

    function walk(node, fn) {
        if (node) do {
            if (node.nodeType === 1) {
                fn.call(node);
                walk(node.firstChild, fn);
            }
        } while (node = node.nextSibling);
    }
    var svgPatcher = {
        styleToAttributes: function(root, svgfile) {
            walk(root, function() {
                var $n = $(this);
                if ($n.attr("style")) {
                    $($n.attr("style").trim().split(/ *; */)).each(function(index, style) {
                        if (style && style.substring(0,1) != "-") {
                            var s = style.trim().split(/ *: */);
                            $n.attr(s[0], s[1]);
                        }
                    });
                }
                $n.attr("style", null);
            })
        },
        referencingAttributes: ["clip-path", "color-profile", "fill", "filter", "marker-start", "marker-mid", "marker-end", "mask", "stroke"],
        nextId: 1,
        generateId: function(oldId) {
            var id = "uniquesvg"+svgPatcher.nextId;
            svgPatcher.nextId++;
            return id;
        },
        makeReferencedIdsUnique: function(root, svgfile, continuation) {
            var andThen = continuation || function(){}
            var byId = {};
            var referencersIds = {};
            var pushAdd = function(k, o) {
                if (referencersIds[k]) {
                    referencersIds[k].push(o);
                } else {
                    referencersIds[k] = [ o ];
                }
            };
            // gather all ids and references
            walk(root, function() {
                var that = this;
                var $n = $(this);
                var id = that.id;
                if (id) {
                    byId[id] = this;
                }
                $(svgPatcher.referencingAttributes).each(function(i,attr) {
                    var val = $n.attr(attr);
                    if (val) {
                        var groups = val.trim().match(/^url\(#(.+?)\)$/)
                        if (groups) pushAdd(groups[1], {o:that, a:attr})
                    }
                });
                var xlink = $n.attr("xlink:href");
                if (xlink) {
                    var groups = xlink.trim().match(/^#(.+?)$/)
                    if (groups) pushAdd(groups[1], {o:that, a:"xlink:href"})
                }
            })
            // patch used ids and references (keep unreferenced ids fixed (to allow for identification from the editor to the css, even if classes should be preferred))
            var newIds = {};
            for (id in referencersIds) {
                var newId = svgPatcher.generateId(id);
                byId[id].id = newId;
                newIds[id] = newId;
            }

            setTimeout( // to help firefox in having updated ids
                (function() {
                for (id in referencersIds) {
                    var newId = newIds[id];
                    var refs = referencersIds[id];
                    $(refs).each(function(i,pair){
                        var prev = $(pair.o).attr(pair.a);
                        if (pair.a == "xlink:href") {
                            pair.o.setAttributeNS($.svg.xlinkNS, "href", prev.replace("#" + id, "#" + newId));
                        } else {
                            $(pair.o).attr(pair.a, prev.replace("#" + id, "#" + newId));
                        }
                    })
                        }
                    andThen();
                }), 0)

        }
    }


    $d.bind('deck.beforeInit', function (event) {
        event.lockInit();
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');

        /*
          Load parameters from an Object element
        */
        var loadObjectParams = function(objectElement) {
            var attributes = {};
            $(objectElement).children("param").each(function(index){
                attributes[$(this).attr("name")] = $(this).attr("value");
            });
            $.each(objectElement.attributes, function (index, attr) {
                if ("data-" == attr.name.substr(0, 5)) {
                    attributes[attr.name.substr(5)] = attr.value;
                }
            });
            return attributes;
        }
        
        /*
          Return true if default params are set.
        */
        var validateParams = function(params) {
            return params['src'];// && params['width'] && params['height'];// && params['animator'];
        }
        
        /*
          Create SVG placeholder
        */
        var createSVG = function(object, attributes) {
            var $canvas, $control, $next, $reload, $placeholder;
            /* Create svg canvas */
            $canvas = $("<div />").attr({
                'id':  $(object).attr('id'),
                'data-src': attributes['src'],
                'class': opts.classes.svgPlaceholder + " " + $(object).attr('class')
            }).css({
                'height': attributes['height'],
                'width': attributes['width']
            });
            return $canvas;
        }

        
        /* Go through all toplevel slides */
        $($[deck]('getTopLevelSlides')).each( function(i, $slide) {

            /* Find all the object of type deckjs/svg */
            $slide.find(opts.selectors.svgObject).each(function(index, obj) {
                /* Load attributes and validate them */
                var attributes = loadObjectParams(obj);
                if (!validateParams(attributes) ) {
                    throw "Error while initializing "+$(obj).attr('id')+", please ensure you have setup the required parameters."
                    return false;
                }
                
                /* Create SVG placeholder */
                var SVG = createSVG(obj, attributes);
                $(obj).replaceWith(SVG);
                
                // Finaly load the SVG data
                event.lockInit();

                var notDisabled = function(k) {
                    var kk = 'no'+k;
                    var disabled = (attributes[kk] && attributes[kk] == "true") || $(obj).filter(opts.selectors.svgObjectDisable[k]).length > 0
                    return !disabled;
                };

                SVG.svg({
                    loadURL: attributes['src'],
                    onLoad: function($svg, w, h) {
                        var px = function (str) {return str.replace("px", "")}
                        var aa = $($svg.root());
                        aa.attr('width', '100%');
                        aa.attr('height', '100%');
                        if (aa.attr('viewBox') == undefined) {
                            if (w==undefined || h==undefined) {
                                if (opts.alert.missingSVG) alert(
                                    "There seem to be a problem with the loading of\n   '"+attributes['src'] + "'\n"
                                        +"\nMaybe the file does not exist?"
                                        +"\nOr maybe"
                                        +"\n - it has no w or h attribute?"
                                        +"\n - you're using a file that is within a symbolic-link folder?"
                                        +"\n - you're using chrome with local files?"
                                        +"\n   ⇒ try to restart chrome with '--disable-web-security'");
                                event.releaseInit();
                            } else {
                                var to = "0 0 " + px(w) + " " + px(h);
                                $svg.root().setAttribute("viewBox", to);
                                aa.attr("svgViewBox", to);
                                if (attributes['stretch'] == 'true') $svg.root().setAttribute('preserveAspectRatio', "none");
                                if (notDisabled('stylerewrite')) {
                                    svgPatcher.styleToAttributes($svg.root(), attributes['src']);
                                }
                                if (notDisabled('idrewrite')) {
                                    svgPatcher.makeReferencedIdsUnique($svg.root(), attributes['src'], function() {
                                        event.releaseInit();
                                    });
                                } else {
                                    event.releaseInit();
                                }
                            }
                        }
                    }
                });
            });
        });
        event.releaseInit();
    })
    
    
})(jQuery, 'deck');


/*!
Deck JS - deck.metadata
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically takes each meta tag (e.g., author, date, ...) and the page title.
It then replaces the content of all elements having a var-... class by the value of the metadata.

This is very useful for example to repeat the date, title, venue name, author name, etc… in a title page, in the footer and in a closing page (without copy pasting).
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        selectors: {
            metadataPrefix: '.var-',
            metadataBrSuffix: '-br',
            metadataFullSuffix: '-full'
        },
        metadataSeparator: /(&nbsp;| )/gi   /* we need to handle '&nbsp;' and ' ' because in the title, ' ' becomes '&nbsp;' */
    });

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        var app = function(_sel, v) {
            var sel = o.selectors.metadataPrefix + _sel;
            var sep = o.metadataSeparator;
            $(sel).html(v.replace(sep, ""));
            $(sel+o.selectors.metadataFullSuffix).html(v);
            $(sel+o.selectors.metadataBrSuffix).html(v.replace(sep, "<br/>"));
        };
        app("title", $("html>head>title").html());
        $("html>head>meta[name]").each(function(i,e) {
            app($(e).attr('name'), $(e).attr('content'))
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.attribution
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically adds some text and a link for elements having a "data-attribution" attributes.
*/

(function($, deck, undefined) {
    $.extend(true, $.deck.defaults, {
        classes: {
            attributionWrapper: 'attribution-wrap',
            attributionLink: 'attribution-link'
        },
        dataAttribution: "data-attribution",
        dataAttributionContent: "data-attribution-content",
        dataAttributionClass: "data-attribution-class"
    });

    var $d = $(document);
    $d.bind('deck.init', function() {
        var o = $.deck('getOptions');
        $('*['+o.dataAttribution+']').each(function(i, el){
            var c = $(el).attr(o.dataAttributionContent);
            var cc = $(el).attr(o.dataAttributionClass);
            var a = $(el).attr(o.dataAttribution);
            var w = $("<div>");
            w.addClass(o.classes.attributionWrapper);
            var link = $("<a>");
            link.addClass(o.classes.attributionLink);
            if (!! cc) link.addClass(cc);
            link.attr("href", a);
            link.attr("target", "_blank");
            if (!! c) {
                link.html(c);
            } else {
                link.html(a);
            }
            $(el).after(w);
            $(w).append(link);
        });
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.container-styling
Copyright (c) 2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module automatically adds/removes to the container the class specified in data-container-class (for toplevel slides).

This extension relies on the events extension.
*/

(function($, deck, undefined) {
    var $d = $(document);
    $d.bind('deck.init', function() {
        $('*[data-container-class]').each(function(i, el) {
            var toRemove = ""; // one 'toRemove' per element (that's why we do .each
            $(el).bind('deck.becameCurrent', function(_, direction) {
                var target = $(_.target);
                var toAdd = target.attr('data-container-class');
                $[deck]('getContainer').addClass(toAdd);
                toRemove = toAdd;
            }).bind('deck.lostCurrent', function(_, direction) {
                $[deck]('getContainer').removeClass(toRemove);
                toRemove = "";
            });
        });
    });
    $(document).bind('deck.init', function() { // force trigger even if no #slide-... is provided
        var current = $[deck]('getSlide')
        var icur = 0
        for (; icur < $[deck]('getSlides').length; icur++) {
            if ($[deck]('getSlides')[icur] == current) break;                
        }
        $(document).trigger("deck.change", [icur, icur]);
    });
})(jQuery, 'deck');

/*!
Deck JS - deck.timekeeper
Copyright (c) 2013-2014 Rémi Emonet
Licensed under the MIT license.
https://github.com/imakewebthings/deck.js/blob/master/MIT-license.txt
*/

/*
This module provides a support for displaying current time, time from start and logging the time spent on each slide etc.
It also injects some default html for it if none is found (and styles it for the presenter/clone view).
*/

(function($, deck, undefined) {
    var $d = $(document);

    $.extend(true, $[deck].defaults, {	
        selectors: {
            timekeeper: ".timekeeper", /* inject if this is not present */ // TODO inject
            timekeeperTime: ".timekeeper-time",
            timekeeperRelativeTime: ".timekeeper-relative-time",
            timekeeperLocalRelativeTime: ".timekeeper-local-relative-time",
            timekeeperLogs: ".timekeeper-logs",
            timekeeperLogsPre: ".timekeeper-logs pre",
            timekeeperLogsToggle: ".timekeeper-logs-toggle",
            timekeeperBang: ".timekeeper-bang",
            timekeeperClear: ".timekeeper-clear"
        },
        classes: {
            timekeeperNotification: "timekeeper-notification",
            timekeeperLogsVisible: "timekeeper-logs-visible"
        },
        snippets: {
            timekeeper: true
        },
        alert: {
            localStorageUnsupported: true
        },
        localStorage: {
            timekeeperArchivesMaxSize: 500*1000,
            timekeeperArchives: 'deckjs-timekeeper-archives',
            timekeeperLogs: 'deckjs-timekeeper-logs',
            timekeeperBase: 'deckjs-timekeeper-base',
            timekeeperLocalBase: 'deckjs-timekeeper-local-base'
        },
        timekeeperPeriod: 1000,
        timekeeperNotificationPeriod: 100,
        keys: {
            timekeeper: [27, 75] // escape, k (combine with SHIFT to reset the counter (when starting presenting))
        }
    });

    $d.bind('deck.init', function() {
        var opts = $[deck]('getOptions');
        var container = $[deck]('getContainer');

        // sligthly edited from
        var selectText = function(text) {
            var doc = document
            , range, selection
            ;
            if (doc.body.createTextRange) { //ms
                range = doc.body.createTextRange();
                range.moveToElementText(text);
                range.select();
            } else if (window.getSelection) { //all others
                selection = window.getSelection();
                range = doc.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }

        if (opts.snippets.timekeeper) {
            var d = function() {return $('<div/>');}
            var divTK = d().addClass("timekeeper timekeeper-logs-toggle");
            divTK.append(d().addClass("timekeeper-local-relative-time"));
            divTK.append(d().addClass("timekeeper-time"));
            divTK.append(d().addClass("timekeeper-relative-time"));
            divTK.append(d().addClass("timekeeper-clear"));
            divTK.append(d().addClass("timekeeper-bang"));
            divTK.appendTo(container);
            var divLog = d().addClass("timekeeper-logs");
            var pre = $('<pre/>').appendTo(divLog);
            divLog.append(d().addClass("button").click(function() { doBang() }).html("Bang!"));
            divLog.append(d().addClass("button").click(function() { selectText(pre.get(0)) }).html("select all"));
            divLog.append(d().addClass("button").click(function() { clearStorage() }).html("Clear").css({color:'#f44', marginLeft: '2em'}));
            divLog.append(d().addClass("button").addClass("timekeeper-logs-toggle").css({position:'float', float:'right', color:'#0f0'}).html("X"));
            divLog.appendTo(container);
        }

        if (!window.localStorage && opts.alert.localStorageUnsupported) { alert(
            "LocalStorage is unsupported in your browser, timing features are disabled (timekeeper extension).");
            return;
        }

        var pad = function(base, right) {
            var s = ""+right;
            if (s.length >= base.length) return s;
            else return base.substring(0, base.length - s.length) + s
        }
        var formatTime = function(t) {
            var min = parseInt(t / 1000 / 60);
            var sec = parseInt(t / 1000 - 60 * min);
            if (min > 60) {
                var hours = parseInt(t / 1000 / 60 / 60);
                min = parseInt(t / 1000 / 60 - 60 * hours);
                return pad("00", hours) +":"+ pad("00", min) + ":" + pad("00", sec)
            } else {
                return pad("00", min) + ":" + pad("00", sec)
            }
        }
        var clearStorage = function(what) {
            // TODO archive
            localStorage.setItem(opts.localStorage.timekeeperLogs, null);
            log("CLEARED BY USER");
            localStorage.setItem(opts.localStorage.timekeeperBase, JSON.stringify(new Date()));
            $(opts.selectors.timekeeperClear).addClass(opts.classes.timekeeperNotification);
            setTimeout(function() {
                $(opts.selectors.timekeeperClear).removeClass(opts.classes.timekeeperNotification);
            }, opts.timekeeperNotificationPeriod);
        }
        var reset = function() {
            localStorage.setItem(opts.localStorage.timekeeperLocalBase, JSON.stringify(new Date()));
        }
        var getDateOrSet = function(k, or) {
            var res = localStorage.getItem(k);
            if (res == null) {
                res = JSON.stringify(or);
                localStorage.setItem(k, res);
            } else {
                res = new Date(JSON.parse(res));
            }
            return res;
        }
        var log = function(what) {
            var now = new Date();
            var time = now.toString()
            var localBase = getDateOrSet(opts.localStorage.timekeeperLocalBase, now);
            var base = getDateOrSet(opts.localStorage.timekeeperBase, now);
            var db = (now - localBase)/1000;
            var dcb = (now - base)/1000;
            var dbtime = formatTime(now - localBase);
            var dcbtime = formatTime(now - base);
            var log = time.replace(/GMT.*/, "") + " " + what + " " + dcb + " " + db + " " + dcbtime + " " + dbtime;
            
            var data = localStorage.getItem(opts.localStorage.timekeeperLogs);
            data = log + "\n" + data;
            localStorage.setItem(opts.localStorage.timekeeperLogs, data);
            $(opts.selectors.timekeeperLogsPre).html(data);
        }


        var saveCurrent = -1;
        $(document).bind('deck.change', function(e, from, to) {
            log(from + " " + to);
            saveCurrent = to;
        });
        
        // Bind key event to add a marker in the logs
        var $d = $(document);
        var doBang = function() {
            log("BANG " + saveCurrent);
            $(opts.selectors.timekeeperBang).addClass(opts.classes.timekeeperNotification);
            setTimeout(function() {
                $(opts.selectors.timekeeperBang).removeClass(opts.classes.timekeeperNotification);
            }, opts.timekeeperNotificationPeriod);
            reset();
        }
        $d.unbind('keydown.logbang').bind('keydown.logbang', function(e) {
            if (e.ctrlKey) return;
            var K = opts.keys.timekeeper;
            if (e.which === K || $.inArray(e.which, K) > -1) {
                doBang();
                if (e.shiftKey) {
                    clearStorage();
                }
            }
        });
        $(opts.selectors.timekeeperLogsToggle).unbind('click.timekeeper').bind('click.timekeeper', function(e) {
            $(opts.selectors.timekeeperLogs).toggleClass(opts.classes.timekeeperLogsVisible);
        });


        // Refresh display
        var period = opts.timekeeperPeriod;
        setInterval(function() {
            var today = new Date();
            today.setMinutes(0);
            today.setHours(0);
            today.setSeconds(0);
            var now = new Date();
            $(opts.selectors.timekeeperTime).html(formatTime(now - today));
            var v = localStorage.getItem(opts.localStorage.timekeeperBase);
            if (v != null) {
                var t = now - new Date(JSON.parse(v));
                var time = formatTime(t);
                $(opts.selectors.timekeeperRelativeTime).html(time);
            }
            var v2 = localStorage.getItem(opts.localStorage.timekeeperLocalBase);
            if (v2 != null) {
                var t = now - new Date(JSON.parse(v2));
                var time = formatTime(t);
                $(opts.selectors.timekeeperLocalRelativeTime).html(time);
            }
        }, period);
    
    });

})(jQuery, 'deck');


(function(global, document) {

  // Popcorn.js does not support archaic browsers
  if ( !document.addEventListener ) {
    global.Popcorn = {
      isSupported: false
    };

    var methods = ( "byId forEach extend effects error guid sizeOf isArray nop position disable enable destroy" +
          "addTrackEvent removeTrackEvent getTrackEvents getTrackEvent getLastTrackEventId " +
          "timeUpdate plugin removePlugin compose effect xhr getJSONP getScript" ).split(/\s+/);

    while ( methods.length ) {
      global.Popcorn[ methods.shift() ] = function() {};
    }
    return;
  }

  var

  AP = Array.prototype,
  OP = Object.prototype,

  forEach = AP.forEach,
  slice = AP.slice,
  hasOwn = OP.hasOwnProperty,
  toString = OP.toString,

  // Copy global Popcorn (may not exist)
  _Popcorn = global.Popcorn,

  //  Ready fn cache
  readyStack = [],
  readyBound = false,
  readyFired = false,

  //  Non-public internal data object
  internal = {
    events: {
      hash: {},
      apis: {}
    }
  },

  //  Non-public `requestAnimFrame`
  //  http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  requestAnimFrame = (function(){
    return global.requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      global.oRequestAnimationFrame ||
      global.msRequestAnimationFrame ||
      function( callback, element ) {
        global.setTimeout( callback, 16 );
      };
  }()),

  //  Non-public `getKeys`, return an object's keys as an array
  getKeys = function( obj ) {
    return Object.keys ? Object.keys( obj ) : (function( obj ) {
      var item,
          list = [];

      for ( item in obj ) {
        if ( hasOwn.call( obj, item ) ) {
          list.push( item );
        }
      }
      return list;
    })( obj );
  },

  Abstract = {
    // [[Put]] props from dictionary onto |this|
    // MUST BE CALLED FROM WITHIN A CONSTRUCTOR:
    //  Abstract.put.call( this, dictionary );
    put: function( dictionary ) {
      // For each own property of src, let key be the property key
      // and desc be the property descriptor of the property.
      Object.getOwnPropertyNames( dictionary ).forEach(function( key ) {
        this[ key ] = dictionary[ key ];
      }, this);
    }
  },


  //  Declare constructor
  //  Returns an instance object.
  Popcorn = function( entity, options ) {
    //  Return new Popcorn object
    return new Popcorn.p.init( entity, options || null );
  };

  //  Popcorn API version, automatically inserted via build system.
  Popcorn.version = "@VERSION";

  //  Boolean flag allowing a client to determine if Popcorn can be supported
  Popcorn.isSupported = true;

  //  Instance caching
  Popcorn.instances = [];

  //  Declare a shortcut (Popcorn.p) to and a definition of
  //  the new prototype for our Popcorn constructor
  Popcorn.p = Popcorn.prototype = {

    init: function( entity, options ) {

      var matches, nodeName,
          self = this;

      //  Supports Popcorn(function () { /../ })
      //  Originally proposed by Daniel Brooks

      if ( typeof entity === "function" ) {

        //  If document ready has already fired
        if ( document.readyState === "complete" ) {

          entity( document, Popcorn );

          return;
        }
        //  Add `entity` fn to ready stack
        readyStack.push( entity );

        //  This process should happen once per page load
        if ( !readyBound ) {

          //  set readyBound flag
          readyBound = true;

          var DOMContentLoaded  = function() {

            readyFired = true;

            //  Remove global DOM ready listener
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );

            //  Execute all ready function in the stack
            for ( var i = 0, readyStackLength = readyStack.length; i < readyStackLength; i++ ) {

              readyStack[ i ].call( document, Popcorn );

            }
            //  GC readyStack
            readyStack = null;
          };

          //  Register global DOM ready listener
          document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
        }

        return;
      }

      if ( typeof entity === "string" ) {
        try {
          matches = document.querySelector( entity );
        } catch( e ) {
          throw new Error( "Popcorn.js Error: Invalid media element selector: " + entity );
        }
      }

      //  Get media element by id or object reference
      this.media = matches || entity;

      //  inner reference to this media element's nodeName string value
      nodeName = ( this.media.nodeName && this.media.nodeName.toLowerCase() ) || "video";

      //  Create an audio or video element property reference
      this[ nodeName ] = this.media;

      this.options = Popcorn.extend( {}, options ) || {};

      //  Resolve custom ID or default prefixed ID
      this.id = this.options.id || Popcorn.guid( nodeName );

      //  Throw if an attempt is made to use an ID that already exists
      if ( Popcorn.byId( this.id ) ) {
        throw new Error( "Popcorn.js Error: Cannot use duplicate ID (" + this.id + ")" );
      }

      this.isDestroyed = false;

      this.data = {

        // data structure of all
        running: {
          cue: []
        },

        // Executed by either timeupdate event or in rAF loop
        timeUpdate: Popcorn.nop,

        // Allows disabling a plugin per instance
        disabled: {},

        // Stores DOM event queues by type
        events: {},

        // Stores Special event hooks data
        hooks: {},

        // Store track event history data
        history: [],

        // Stores ad-hoc state related data]
        state: {
          volume: this.media.volume
        },

        // Store track event object references by trackId
        trackRefs: {},

        // Playback track event queues
        trackEvents: new TrackEvents( this )
      };

      //  Register new instance
      Popcorn.instances.push( this );

      //  function to fire when video is ready
      var isReady = function() {

        // chrome bug: http://code.google.com/p/chromium/issues/detail?id=119598
        // it is possible the video's time is less than 0
        // this has the potential to call track events more than once, when they should not
        // start: 0, end: 1 will start, end, start again, when it should just start
        // just setting it to 0 if it is below 0 fixes this issue
        if ( self.media.currentTime < 0 ) {

          self.media.currentTime = 0;
        }

        self.media.removeEventListener( "loadedmetadata", isReady, false );

        var duration, videoDurationPlus,
            runningPlugins, runningPlugin, rpLength, rpNatives;

        //  Adding padding to the front and end of the arrays
        //  this is so we do not fall off either end
        duration = self.media.duration;

        //  Check for no duration info (NaN)
        videoDurationPlus = duration != duration ? Number.MAX_VALUE : duration + 1;

        Popcorn.addTrackEvent( self, {
          start: videoDurationPlus,
          end: videoDurationPlus
        });

        if ( !self.isDestroyed ) {
          self.data.durationChange = function() {
            var newDuration = self.media.duration,
                newDurationPlus = newDuration + 1,
                byStart = self.data.trackEvents.byStart,
                byEnd = self.data.trackEvents.byEnd;

            // Remove old padding events
            byStart.pop();
            byEnd.pop();

            // Remove any internal tracking of events that have end times greater than duration
            // otherwise their end events will never be hit.
            for ( var k = byEnd.length - 1; k > 0; k-- ) {
              if ( byEnd[ k ].end > newDuration ) {
                self.removeTrackEvent( byEnd[ k ]._id );
              }
            }

            // Remove any internal tracking of events that have end times greater than duration
            // otherwise their end events will never be hit.
            for ( var i = 0; i < byStart.length; i++ ) {
              if ( byStart[ i ].end > newDuration ) {
                self.removeTrackEvent( byStart[ i ]._id );
              }
            }

            // References to byEnd/byStart are reset, so accessing it this way is
            // forced upon us.
            self.data.trackEvents.byEnd.push({
              start: newDurationPlus,
              end: newDurationPlus
            });

            self.data.trackEvents.byStart.push({
              start: newDurationPlus,
              end: newDurationPlus
            });
          };

          // Listen for duration changes and adjust internal tracking of event timings
          self.media.addEventListener( "durationchange", self.data.durationChange, false );
        }

        if ( self.options.frameAnimation ) {

          //  if Popcorn is created with frameAnimation option set to true,
          //  requestAnimFrame is used instead of "timeupdate" media event.
          //  This is for greater frame time accuracy, theoretically up to
          //  60 frames per second as opposed to ~4 ( ~every 15-250ms)
          self.data.timeUpdate = function () {

            Popcorn.timeUpdate( self, {} );

            // fire frame for each enabled active plugin of every type
            Popcorn.forEach( Popcorn.manifest, function( key, val ) {

              runningPlugins = self.data.running[ val ];

              // ensure there are running plugins on this type on this instance
              if ( runningPlugins ) {

                rpLength = runningPlugins.length;
                for ( var i = 0; i < rpLength; i++ ) {

                  runningPlugin = runningPlugins[ i ];
                  rpNatives = runningPlugin._natives;
                  rpNatives && rpNatives.frame &&
                    rpNatives.frame.call( self, {}, runningPlugin, self.currentTime() );
                }
              }
            });

            self.emit( "timeupdate" );

            !self.isDestroyed && requestAnimFrame( self.data.timeUpdate );
          };

          !self.isDestroyed && requestAnimFrame( self.data.timeUpdate );

        } else {

          self.data.timeUpdate = function( event ) {
            Popcorn.timeUpdate( self, event );
          };

          if ( !self.isDestroyed ) {
            self.media.addEventListener( "timeupdate", self.data.timeUpdate, false );
          }
        }
      };

      Object.defineProperty( this, "error", {
        get: function() {

          return self.media.error;
        }
      });

      // http://www.whatwg.org/specs/web-apps/current-work/#dom-media-readystate
      //
      // If media is in readyState (rS) >= 1, we know the media's duration,
      // which is required before running the isReady function.
      // If rS is 0, attach a listener for "loadedmetadata",
      // ( Which indicates that the media has moved from rS 0 to 1 )
      //
      // This has been changed from a check for rS 2 because
      // in certain conditions, Firefox can enter this code after dropping
      // to rS 1 from a higher state such as 2 or 3. This caused a "loadeddata"
      // listener to be attached to the media object, an event that had
      // already triggered and would not trigger again. This left Popcorn with an
      // instance that could never start a timeUpdate loop.
      if ( self.media.readyState >= 1 ) {

        isReady();
      } else {

        self.media.addEventListener( "loadedmetadata", isReady, false );
      }

      return this;
    }
  };

  //  Extend constructor prototype to instance prototype
  //  Allows chaining methods to instances
  Popcorn.p.init.prototype = Popcorn.p;

  Popcorn.byId = function( str ) {
    var instances = Popcorn.instances,
        length = instances.length,
        i = 0;

    for ( ; i < length; i++ ) {
      if ( instances[ i ].id === str ) {
        return instances[ i ];
      }
    }

    return null;
  };

  Popcorn.forEach = function( obj, fn, context ) {

    if ( !obj || !fn ) {
      return {};
    }

    context = context || this;

    var key, len;

    // Use native whenever possible
    if ( forEach && obj.forEach === forEach ) {
      return obj.forEach( fn, context );
    }

    if ( toString.call( obj ) === "[object NodeList]" ) {
      for ( key = 0, len = obj.length; key < len; key++ ) {
        fn.call( context, obj[ key ], key, obj );
      }
      return obj;
    }

    for ( key in obj ) {
      if ( hasOwn.call( obj, key ) ) {
        fn.call( context, obj[ key ], key, obj );
      }
    }
    return obj;
  };

  Popcorn.extend = function( obj ) {
    var dest = obj, src = slice.call( arguments, 1 );

    Popcorn.forEach( src, function( copy ) {
      for ( var prop in copy ) {
        dest[ prop ] = copy[ prop ];
      }
    });

    return dest;
  };


  // A Few reusable utils, memoized onto Popcorn
  Popcorn.extend( Popcorn, {
    noConflict: function( deep ) {

      if ( deep ) {
        global.Popcorn = _Popcorn;
      }

      return Popcorn;
    },
    error: function( msg ) {
      throw new Error( msg );
    },
    guid: function( prefix ) {
      Popcorn.guid.counter++;
      return  ( prefix ? prefix : "" ) + ( +new Date() + Popcorn.guid.counter );
    },
    sizeOf: function( obj ) {
      var size = 0;

      for ( var prop in obj ) {
        size++;
      }

      return size;
    },
    isArray: Array.isArray || function( array ) {
      return toString.call( array ) === "[object Array]";
    },

    nop: function() {},

    position: function( elem ) {

      if ( !elem.parentNode ) {
        return null;
      }

      var clientRect = elem.getBoundingClientRect(),
          bounds = {},
          doc = elem.ownerDocument,
          docElem = document.documentElement,
          body = document.body,
          clientTop, clientLeft, scrollTop, scrollLeft, top, left;

      //  Determine correct clientTop/Left
      clientTop = docElem.clientTop || body.clientTop || 0;
      clientLeft = docElem.clientLeft || body.clientLeft || 0;

      //  Determine correct scrollTop/Left
      scrollTop = ( global.pageYOffset && docElem.scrollTop || body.scrollTop );
      scrollLeft = ( global.pageXOffset && docElem.scrollLeft || body.scrollLeft );

      //  Temp top/left
      top = Math.ceil( clientRect.top + scrollTop - clientTop );
      left = Math.ceil( clientRect.left + scrollLeft - clientLeft );

      for ( var p in clientRect ) {
        bounds[ p ] = Math.round( clientRect[ p ] );
      }

      return Popcorn.extend({}, bounds, { top: top, left: left });
    },

    disable: function( instance, plugin ) {

      if ( instance.data.disabled[ plugin ] ) {
        return;
      }

      instance.data.disabled[ plugin ] = true;

      if ( plugin in Popcorn.registryByName &&
           instance.data.running[ plugin ] ) {

        for ( var i = instance.data.running[ plugin ].length - 1, event; i >= 0; i-- ) {

          event = instance.data.running[ plugin ][ i ];
          event._natives.end.call( instance, null, event  );

          instance.emit( "trackend",
            Popcorn.extend({}, event, {
              plugin: event.type,
              type: "trackend"
            })
          );
        }
      }

      return instance;
    },
    enable: function( instance, plugin ) {

      if ( !instance.data.disabled[ plugin ] ) {
        return;
      }

      instance.data.disabled[ plugin ] = false;

      if ( plugin in Popcorn.registryByName &&
           instance.data.running[ plugin ] ) {

        for ( var i = instance.data.running[ plugin ].length - 1, event; i >= 0; i-- ) {

          event = instance.data.running[ plugin ][ i ];
          event._natives.start.call( instance, null, event  );

          instance.emit( "trackstart",
            Popcorn.extend({}, event, {
              plugin: event.type,
              type: "trackstart",
              track: event
            })
          );
        }
      }

      return instance;
    },
    destroy: function( instance ) {
      var events = instance.data.events,
          trackEvents = instance.data.trackEvents,
          singleEvent, item, fn, plugin;

      //  Iterate through all events and remove them
      for ( item in events ) {
        singleEvent = events[ item ];
        for ( fn in singleEvent ) {
          delete singleEvent[ fn ];
        }
        events[ item ] = null;
      }

      // remove all plugins off the given instance
      for ( plugin in Popcorn.registryByName ) {
        Popcorn.removePlugin( instance, plugin );
      }

      // Remove all data.trackEvents #1178
      trackEvents.byStart.length = 0;
      trackEvents.byEnd.length = 0;

      if ( !instance.isDestroyed ) {
        instance.data.timeUpdate && instance.media.removeEventListener( "timeupdate", instance.data.timeUpdate, false );
        instance.isDestroyed = true;
      }

      Popcorn.instances.splice( Popcorn.instances.indexOf( instance ), 1 );
    }
  });

  //  Memoized GUID Counter
  Popcorn.guid.counter = 1;

  //  Factory to implement getters, setters and controllers
  //  as Popcorn instance methods. The IIFE will create and return
  //  an object with defined methods
  Popcorn.extend(Popcorn.p, (function() {

      var methods = "load play pause currentTime playbackRate volume duration preload playbackRate " +
                    "autoplay loop controls muted buffered readyState seeking paused played seekable ended",
          ret = {};


      //  Build methods, store in object that is returned and passed to extend
      Popcorn.forEach( methods.split( /\s+/g ), function( name ) {

        ret[ name ] = function( arg ) {
          var previous;

          if ( typeof this.media[ name ] === "function" ) {

            // Support for shorthanded play(n)/pause(n) jump to currentTime
            // If arg is not null or undefined and called by one of the
            // allowed shorthandable methods, then set the currentTime
            // Supports time as seconds or SMPTE
            if ( arg != null && /play|pause/.test( name ) ) {
              this.media.currentTime = Popcorn.util.toSeconds( arg );
            }

            this.media[ name ]();

            return this;
          }

          if ( arg != null ) {
            // Capture the current value of the attribute property
            previous = this.media[ name ];

            // Set the attribute property with the new value
            this.media[ name ] = arg;

            // If the new value is not the same as the old value
            // emit an "attrchanged event"
            if ( previous !== arg ) {
              this.emit( "attrchange", {
                attribute: name,
                previousValue: previous,
                currentValue: arg
              });
            }
            return this;
          }

          return this.media[ name ];
        };
      });

      return ret;

    })()
  );

  Popcorn.forEach( "enable disable".split(" "), function( method ) {
    Popcorn.p[ method ] = function( plugin ) {
      return Popcorn[ method ]( this, plugin );
    };
  });

  Popcorn.extend(Popcorn.p, {

    //  Rounded currentTime
    roundTime: function() {
      return Math.round( this.media.currentTime );
    },

    //  Attach an event to a single point in time
    exec: function( id, time, fn ) {
      var length = arguments.length,
          eventType = "trackadded",
          trackEvent, sec, options;

      // Check if first could possibly be a SMPTE string
      // p.cue( "smpte string", fn );
      // try/catch avoid awful throw in Popcorn.util.toSeconds
      // TODO: Get rid of that, replace with NaN return?
      try {
        sec = Popcorn.util.toSeconds( id );
      } catch ( e ) {}

      // If it can be converted into a number then
      // it's safe to assume that the string was SMPTE
      if ( typeof sec === "number" ) {
        id = sec;
      }

      // Shift arguments based on use case
      //
      // Back compat for:
      // p.cue( time, fn );
      if ( typeof id === "number" && length === 2 ) {
        fn = time;
        time = id;
        id = Popcorn.guid( "cue" );
      } else {
        // Support for new forms

        // p.cue( "empty-cue" );
        if ( length === 1 ) {
          // Set a time for an empty cue. It's not important what
          // the time actually is, because the cue is a no-op
          time = -1;

        } else {

          // Get the TrackEvent that matches the given id.
          trackEvent = this.getTrackEvent( id );

          if ( trackEvent ) {

            // remove existing cue so a new one can be added via trackEvents.add
            this.data.trackEvents.remove( id );
            TrackEvent.end( this, trackEvent );
            // Update track event references
            Popcorn.removeTrackEvent.ref( this, id );

            eventType = "cuechange";

            // p.cue( "my-id", 12 );
            // p.cue( "my-id", function() { ... });
            if ( typeof id === "string" && length === 2 ) {

              // p.cue( "my-id", 12 );
              // The path will update the cue time.
              if ( typeof time === "number" ) {
                // Re-use existing TrackEvent start callback
                fn = trackEvent._natives.start;
              }

              // p.cue( "my-id", function() { ... });
              // The path will update the cue function
              if ( typeof time === "function" ) {
                fn = time;
                // Re-use existing TrackEvent start time
                time = trackEvent.start;
              }
            }
          } else {

            if ( length >= 2 ) {

              // p.cue( "a", "00:00:00");
              if ( typeof time === "string" ) {
                try {
                  sec = Popcorn.util.toSeconds( time );
                } catch ( e ) {}

                time = sec;
              }

              // p.cue( "b", 11 );
              // p.cue( "b", 11, function() {} );
              if ( typeof time === "number" ) {
                fn = fn || Popcorn.nop();
              }

              // p.cue( "c", function() {});
              if ( typeof time === "function" ) {
                fn = time;
                time = -1;
              }
            }
          }
        }
      }

      options = {
        id: id,
        start: time,
        end: time + 1,
        _running: false,
        _natives: {
          start: fn || Popcorn.nop,
          end: Popcorn.nop,
          type: "cue"
        }
      };

      if ( trackEvent ) {
        options = Popcorn.extend( trackEvent, options );
      }

      if ( eventType === "cuechange" ) {

        //  Supports user defined track event id
        options._id = options.id || options._id || Popcorn.guid( options._natives.type );

        this.data.trackEvents.add( options );
        TrackEvent.start( this, options );

        this.timeUpdate( this, null, true );

        // Store references to user added trackevents in ref table
        Popcorn.addTrackEvent.ref( this, options );

        this.emit( eventType, Popcorn.extend({}, options, {
          id: id,
          type: eventType,
          previousValue: {
            time: trackEvent.start,
            fn: trackEvent._natives.start
          },
          currentValue: {
            time: time,
            fn: fn || Popcorn.nop
          },
          track: trackEvent
        }));
      } else {
        //  Creating a one second track event with an empty end
        Popcorn.addTrackEvent( this, options );
      }

      return this;
    },

    // Mute the calling media, optionally toggle
    mute: function( toggle ) {

      var event = toggle == null || toggle === true ? "muted" : "unmuted";

      // If `toggle` is explicitly `false`,
      // unmute the media and restore the volume level
      if ( event === "unmuted" ) {
        this.media.muted = false;
        this.media.volume = this.data.state.volume;
      }

      // If `toggle` is either null or undefined,
      // save the current volume and mute the media element
      if ( event === "muted" ) {
        this.data.state.volume = this.media.volume;
        this.media.muted = true;
      }

      // Trigger either muted|unmuted event
      this.emit( event );

      return this;
    },

    // Convenience method, unmute the calling media
    unmute: function( toggle ) {

      return this.mute( toggle == null ? false : !toggle );
    },

    // Get the client bounding box of an instance element
    position: function() {
      return Popcorn.position( this.media );
    },

    // Toggle a plugin's playback behaviour (on or off) per instance
    toggle: function( plugin ) {
      return Popcorn[ this.data.disabled[ plugin ] ? "enable" : "disable" ]( this, plugin );
    },

    // Set default values for plugin options objects per instance
    defaults: function( plugin, defaults ) {

      // If an array of default configurations is provided,
      // iterate and apply each to this instance
      if ( Popcorn.isArray( plugin ) ) {

        Popcorn.forEach( plugin, function( obj ) {
          for ( var name in obj ) {
            this.defaults( name, obj[ name ] );
          }
        }, this );

        return this;
      }

      if ( !this.options.defaults ) {
        this.options.defaults = {};
      }

      if ( !this.options.defaults[ plugin ] ) {
        this.options.defaults[ plugin ] = {};
      }

      Popcorn.extend( this.options.defaults[ plugin ], defaults );

      return this;
    }
  });

  Popcorn.Events  = {
    UIEvents: "blur focus focusin focusout load resize scroll unload",
    MouseEvents: "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave click dblclick",
    Events: "loadstart progress suspend emptied stalled play pause error " +
            "loadedmetadata loadeddata waiting playing canplay canplaythrough " +
            "seeking seeked timeupdate ended ratechange durationchange volumechange"
  };

  Popcorn.Events.Natives = Popcorn.Events.UIEvents + " " +
                           Popcorn.Events.MouseEvents + " " +
                           Popcorn.Events.Events;

  internal.events.apiTypes = [ "UIEvents", "MouseEvents", "Events" ];

  // Privately compile events table at load time
  (function( events, data ) {

    var apis = internal.events.apiTypes,
    eventsList = events.Natives.split( /\s+/g ),
    idx = 0, len = eventsList.length, prop;

    for( ; idx < len; idx++ ) {
      data.hash[ eventsList[idx] ] = true;
    }

    apis.forEach(function( val, idx ) {

      data.apis[ val ] = {};

      var apiEvents = events[ val ].split( /\s+/g ),
      len = apiEvents.length,
      k = 0;

      for ( ; k < len; k++ ) {
        data.apis[ val ][ apiEvents[ k ] ] = true;
      }
    });
  })( Popcorn.Events, internal.events );

  Popcorn.events = {

    isNative: function( type ) {
      return !!internal.events.hash[ type ];
    },
    getInterface: function( type ) {

      if ( !Popcorn.events.isNative( type ) ) {
        return false;
      }

      var eventApi = internal.events,
        apis = eventApi.apiTypes,
        apihash = eventApi.apis,
        idx = 0, len = apis.length, api, tmp;

      for ( ; idx < len; idx++ ) {
        tmp = apis[ idx ];

        if ( apihash[ tmp ][ type ] ) {
          api = tmp;
          break;
        }
      }
      return api;
    },
    //  Compile all native events to single array
    all: Popcorn.Events.Natives.split( /\s+/g ),
    //  Defines all Event handling static functions
    fn: {
      trigger: function( type, data ) {
        var eventInterface, evt, clonedEvents,
            events = this.data.events[ type ];

        //  setup checks for custom event system
        if ( events ) {
          eventInterface  = Popcorn.events.getInterface( type );

          if ( eventInterface ) {
            evt = document.createEvent( eventInterface );
            evt.initEvent( type, true, true, global, 1 );

            this.media.dispatchEvent( evt );

            return this;
          }

          // clone events in case callbacks remove callbacks themselves
          clonedEvents = events.slice();

          // iterate through all callbacks
          while ( clonedEvents.length ) {
            clonedEvents.shift().call( this, data );
          }
        }

        return this;
      },
      listen: function( type, fn ) {
        var self = this,
            hasEvents = true,
            eventHook = Popcorn.events.hooks[ type ],
            origType = type,
            clonedEvents,
            tmp;

        if ( typeof fn !== "function" ) {
          throw new Error( "Popcorn.js Error: Listener is not a function" );
        }

        // Setup event registry entry
        if ( !this.data.events[ type ] ) {
          this.data.events[ type ] = [];
          // Toggle if the previous assumption was untrue
          hasEvents = false;
        }

        // Check and setup event hooks
        if ( eventHook ) {
          // Execute hook add method if defined
          if ( eventHook.add ) {
            eventHook.add.call( this, {}, fn );
          }

          // Reassign event type to our piggyback event type if defined
          if ( eventHook.bind ) {
            type = eventHook.bind;
          }

          // Reassign handler if defined
          if ( eventHook.handler ) {
            tmp = fn;

            fn = function wrapper( event ) {
              eventHook.handler.call( self, event, tmp );
            };
          }

          // assume the piggy back event is registered
          hasEvents = true;

          // Setup event registry entry
          if ( !this.data.events[ type ] ) {
            this.data.events[ type ] = [];
            // Toggle if the previous assumption was untrue
            hasEvents = false;
          }
        }

        //  Register event and handler
        this.data.events[ type ].push( fn );

        // only attach one event of any type
        if ( !hasEvents && Popcorn.events.all.indexOf( type ) > -1 ) {
          this.media.addEventListener( type, function( event ) {
            if ( self.data.events[ type ] ) {
              // clone events in case callbacks remove callbacks themselves
              clonedEvents = self.data.events[ type ].slice();

              // iterate through all callbacks
              while ( clonedEvents.length ) {
                clonedEvents.shift().call( self, event );
              }
            }
          }, false );
        }
        return this;
      },
      unlisten: function( type, fn ) {
        var ind,
            events = this.data.events[ type ];

        if ( !events ) {
          return; // no listeners = nothing to do
        }

        if ( typeof fn === "string" ) {
          // legacy support for string-based removal -- not recommended
          for ( var i = 0; i < events.length; i++ ) {
            if ( events[ i ].name === fn ) {
              // decrement i because array length just got smaller
              events.splice( i--, 1 );
            }
          }

          return this;
        } else if ( typeof fn === "function" ) {
          while( ind !== -1 ) {
            ind = events.indexOf( fn );
            if ( ind !== -1 ) {
              events.splice( ind, 1 );
            }
          }

          return this;
        }

        // if we got to this point, we are deleting all functions of this type
        this.data.events[ type ] = null;

        return this;
      }
    },
    hooks: {
      canplayall: {
        bind: "canplaythrough",
        add: function( event, callback ) {

          var state = false;

          if ( this.media.readyState ) {

            // always call canplayall asynchronously
            setTimeout(function() {
              callback.call( this, event );
            }.bind(this), 0 );

            state = true;
          }

          this.data.hooks.canplayall = {
            fired: state
          };
        },
        // declare special handling instructions
        handler: function canplayall( event, callback ) {

          if ( !this.data.hooks.canplayall.fired ) {
            // trigger original user callback once
            callback.call( this, event );

            this.data.hooks.canplayall.fired = true;
          }
        }
      }
    }
  };

  //  Extend Popcorn.events.fns (listen, unlisten, trigger) to all Popcorn instances
  //  Extend aliases (on, off, emit)
  Popcorn.forEach( [ [ "trigger", "emit" ], [ "listen", "on" ], [ "unlisten", "off" ] ], function( key ) {
    Popcorn.p[ key[ 0 ] ] = Popcorn.p[ key[ 1 ] ] = Popcorn.events.fn[ key[ 0 ] ];
  });

  // Internal Only - construct simple "TrackEvent"
  // data type objects
  function TrackEvent( track ) {
    Abstract.put.call( this, track );
  }

  // Determine if a TrackEvent's "start" and "trackstart" must be called.
  TrackEvent.start = function( instance, track ) {

    if ( track.end > instance.media.currentTime &&
        track.start <= instance.media.currentTime && !track._running ) {

      track._running = true;
      instance.data.running[ track._natives.type ].push( track );

      if ( !instance.data.disabled[ track._natives.type ] ) {

        track._natives.start.call( instance, null, track );

        instance.emit( "trackstart",
          Popcorn.extend( {}, track, {
            plugin: track._natives.type,
            type: "trackstart",
            track: track
          })
        );
      }
    }
  };

  // Determine if a TrackEvent's "end" and "trackend" must be called.
  TrackEvent.end = function( instance, track ) {

    var runningPlugins;

    if ( ( track.end <= instance.media.currentTime ||
        track.start > instance.media.currentTime ) && track._running ) {

      runningPlugins = instance.data.running[ track._natives.type ];

      track._running = false;
      runningPlugins.splice( runningPlugins.indexOf( track ), 1 );

      if ( !instance.data.disabled[ track._natives.type ] ) {

        track._natives.end.call( instance, null, track );

        instance.emit( "trackend",
          Popcorn.extend( {}, track, {
            plugin: track._natives.type,
            type: "trackend",
            track: track
          })
        );
      }
    }
  };

  // Internal Only - construct "TrackEvents"
  // data type objects that are used by the Popcorn
  // instance, stored at p.data.trackEvents
  function TrackEvents( parent ) {
    this.parent = parent;

    this.byStart = [{
      start: -1,
      end: -1
    }];

    this.byEnd = [{
      start: -1,
      end: -1
    }];
    this.animating = [];
    this.startIndex = 0;
    this.endIndex = 0;
    this.previousUpdateTime = -1;

    Object.defineProperty( this, "count", {
      get: function() {
        return this.byStart.length;
      }
    });
  }

  function isMatch( obj, key, value ) {
    return obj[ key ] && obj[ key ] === value;
  }

  TrackEvents.prototype.where = function( params ) {
    return ( this.parent.getTrackEvents() || [] ).filter(function( event ) {
      var key, value;

      // If no explicit params, match all TrackEvents
      if ( !params ) {
        return true;
      }

      // Filter keys in params against both the top level properties
      // and the _natives properties
      for ( key in params ) {
        value = params[ key ];
        if ( isMatch( event, key, value ) || isMatch( event._natives, key, value ) ) {
          return true;
        }
      }
      return false;
    });
  };

  TrackEvents.prototype.add = function( track ) {

    //  Store this definition in an array sorted by times
    var byStart = this.byStart,
        byEnd = this.byEnd,
        startIndex, endIndex;

    //  Push track event ids into the history
    if ( track && track._id ) {
      this.parent.data.history.push( track._id );
    }

    track.start = Popcorn.util.toSeconds( track.start, this.parent.options.framerate );
    track.end   = Popcorn.util.toSeconds( track.end, this.parent.options.framerate );

    for ( startIndex = byStart.length - 1; startIndex >= 0; startIndex-- ) {

      if ( track.start >= byStart[ startIndex ].start ) {
        byStart.splice( startIndex + 1, 0, track );
        break;
      }
    }

    for ( endIndex = byEnd.length - 1; endIndex >= 0; endIndex-- ) {

      if ( track.end > byEnd[ endIndex ].end ) {
        byEnd.splice( endIndex + 1, 0, track );
        break;
      }
    }

    // update startIndex and endIndex
    if ( startIndex <= this.parent.data.trackEvents.startIndex &&
      track.start <= this.parent.data.trackEvents.previousUpdateTime ) {

      this.parent.data.trackEvents.startIndex++;
    }

    if ( endIndex <= this.parent.data.trackEvents.endIndex &&
      track.end < this.parent.data.trackEvents.previousUpdateTime ) {

      this.parent.data.trackEvents.endIndex++;
    }

  };

  TrackEvents.prototype.remove = function( removeId, state ) {

    if ( removeId instanceof TrackEvent ) {
      removeId = removeId.id;
    }

    if ( typeof removeId === "object" ) {
      // Filter by key=val and remove all matching TrackEvents
      this.where( removeId ).forEach(function( event ) {
        // |this| refers to the calling Popcorn "parent" instance
        this.removeTrackEvent( event._id );
      }, this.parent );

      return this;
    }

    var start, end, animate, historyLen, track,
        length = this.byStart.length,
        index = 0,
        indexWasAt = 0,
        byStart = [],
        byEnd = [],
        animating = [],
        history = [],
        comparable = {};

    state = state || {};

    while ( --length > -1 ) {
      start = this.byStart[ index ];
      end = this.byEnd[ index ];

      // Padding events will not have _id properties.
      // These should be safely pushed onto the front and back of the
      // track event array
      if ( !start._id ) {
        byStart.push( start );
        byEnd.push( end );
      }

      // Filter for user track events (vs system track events)
      if ( start._id ) {

        // If not a matching start event for removal
        if ( start._id !== removeId ) {
          byStart.push( start );
        }

        // If not a matching end event for removal
        if ( end._id !== removeId ) {
          byEnd.push( end );
        }

        // If the _id is matched, capture the current index
        if ( start._id === removeId ) {
          indexWasAt = index;

          // cache the track event being removed
          track = start;
        }
      }
      // Increment the track index
      index++;
    }

    // Reset length to be used by the condition below to determine
    // if animating track events should also be filtered for removal.
    // Reset index below to be used by the reverse while as an
    // incrementing counter
    length = this.animating.length;
    index = 0;

    if ( length ) {
      while ( --length > -1 ) {
        animate = this.animating[ index ];

        // Padding events will not have _id properties.
        // These should be safely pushed onto the front and back of the
        // track event array
        if ( !animate._id ) {
          animating.push( animate );
        }

        // If not a matching animate event for removal
        if ( animate._id && animate._id !== removeId ) {
          animating.push( animate );
        }
        // Increment the track index
        index++;
      }
    }

    //  Update
    if ( indexWasAt <= this.startIndex ) {
      this.startIndex--;
    }

    if ( indexWasAt <= this.endIndex ) {
      this.endIndex--;
    }

    this.byStart = byStart;
    this.byEnd = byEnd;
    this.animating = animating;

    historyLen = this.parent.data.history.length;

    for ( var i = 0; i < historyLen; i++ ) {
      if ( this.parent.data.history[ i ] !== removeId ) {
        history.push( this.parent.data.history[ i ] );
      }
    }

    // Update ordered history array
    this.parent.data.history = history;

  };

  // Helper function used to retrieve old values of properties that
  // are provided for update.
  function getPreviousProperties( oldOptions, newOptions ) {
    var matchProps = {};

    for ( var prop in oldOptions ) {
      if ( hasOwn.call( newOptions, prop ) && hasOwn.call( oldOptions, prop ) ) {
        matchProps[ prop ] = oldOptions[ prop ];
      }
    }

    return matchProps;
  }

  // Internal Only - Adds track events to the instance object
  Popcorn.addTrackEvent = function( obj, track ) {
    var temp;

    if ( track instanceof TrackEvent ) {
      return;
    }

    track = new TrackEvent( track );

    // Determine if this track has default options set for it
    // If so, apply them to the track object
    if ( track && track._natives && track._natives.type &&
        ( obj.options.defaults && obj.options.defaults[ track._natives.type ] ) ) {

      // To ensure that the TrackEvent Invariant Policy is enforced,
      // First, copy the properties of the newly created track event event
      // to a temporary holder
      temp = Popcorn.extend( {}, track );

      // Next, copy the default onto the newly created trackevent, followed by the
      // temporary holder.
      Popcorn.extend( track, obj.options.defaults[ track._natives.type ], temp );
    }

    if ( track._natives ) {
      //  Supports user defined track event id
      track._id = track.id || track._id || Popcorn.guid( track._natives.type );

      // Trigger _setup method if exists
      if ( track._natives._setup ) {

        track._natives._setup.call( obj, track );

        obj.emit( "tracksetup", Popcorn.extend( {}, track, {
          plugin: track._natives.type,
          type: "tracksetup",
          track: track
        }));
      }
    }

    obj.data.trackEvents.add( track );
    TrackEvent.start( obj, track );

    this.timeUpdate( obj, null, true );

    // Store references to user added trackevents in ref table
    if ( track._id ) {
      Popcorn.addTrackEvent.ref( obj, track );
    }

    obj.emit( "trackadded", Popcorn.extend({}, track,
      track._natives ? { plugin: track._natives.type } : {}, {
        type: "trackadded",
        track: track
    }));
  };

  // Internal Only - Adds track event references to the instance object's trackRefs hash table
  Popcorn.addTrackEvent.ref = function( obj, track ) {
    obj.data.trackRefs[ track._id ] = track;

    return obj;
  };

  Popcorn.removeTrackEvent = function( obj, removeId ) {
    var track = obj.getTrackEvent( removeId );

    if ( !track ) {
      return;
    }

    // If a _teardown function was defined,
    // enforce for track event removals
    if ( track._natives._teardown ) {
      track._natives._teardown.call( obj, track );
    }

    obj.data.trackEvents.remove( removeId );

    // Update track event references
    Popcorn.removeTrackEvent.ref( obj, removeId );

    if ( track._natives ) {

      // Fire a trackremoved event
      obj.emit( "trackremoved", Popcorn.extend({}, track, {
        plugin: track._natives.type,
        type: "trackremoved",
        track: track
      }));
    }
  };

  // Internal Only - Removes track event references from instance object's trackRefs hash table
  Popcorn.removeTrackEvent.ref = function( obj, removeId ) {
    delete obj.data.trackRefs[ removeId ];

    return obj;
  };

  // Return an array of track events bound to this instance object
  Popcorn.getTrackEvents = function( obj ) {

    var trackevents = [],
      refs = obj.data.trackEvents.byStart,
      length = refs.length,
      idx = 0,
      ref;

    for ( ; idx < length; idx++ ) {
      ref = refs[ idx ];
      // Return only user attributed track event references
      if ( ref._id ) {
        trackevents.push( ref );
      }
    }

    return trackevents;
  };

  // Internal Only - Returns an instance object's trackRefs hash table
  Popcorn.getTrackEvents.ref = function( obj ) {
    return obj.data.trackRefs;
  };

  // Return a single track event bound to this instance object
  Popcorn.getTrackEvent = function( obj, trackId ) {
    return obj.data.trackRefs[ trackId ];
  };

  // Internal Only - Returns an instance object's track reference by track id
  Popcorn.getTrackEvent.ref = function( obj, trackId ) {
    return obj.data.trackRefs[ trackId ];
  };

  Popcorn.getLastTrackEventId = function( obj ) {
    return obj.data.history[ obj.data.history.length - 1 ];
  };

  Popcorn.timeUpdate = function( obj, event ) {
    var currentTime = obj.media.currentTime,
        previousTime = obj.data.trackEvents.previousUpdateTime,
        tracks = obj.data.trackEvents,
        end = tracks.endIndex,
        start = tracks.startIndex,
        byStartLen = tracks.byStart.length,
        byEndLen = tracks.byEnd.length,
        registryByName = Popcorn.registryByName,
        trackstart = "trackstart",
        trackend = "trackend",

        byEnd, byStart, byAnimate, natives, type, runningPlugins;

    //  Playbar advancing
    if ( previousTime <= currentTime ) {

      while ( tracks.byEnd[ end ] && tracks.byEnd[ end ].end <= currentTime ) {

        byEnd = tracks.byEnd[ end ];
        natives = byEnd._natives;
        type = natives && natives.type;

        //  If plugin does not exist on this instance, remove it
        if ( !natives ||
            ( !!registryByName[ type ] ||
              !!obj[ type ] ) ) {

          if ( byEnd._running === true ) {

            byEnd._running = false;
            runningPlugins = obj.data.running[ type ];
            runningPlugins.splice( runningPlugins.indexOf( byEnd ), 1 );

            if ( !obj.data.disabled[ type ] ) {

              natives.end.call( obj, event, byEnd );

              obj.emit( trackend,
                Popcorn.extend({}, byEnd, {
                  plugin: type,
                  type: trackend,
                  track: byEnd
                })
              );
            }
          }

          end++;
        } else {
          // remove track event
          Popcorn.removeTrackEvent( obj, byEnd._id );
          return;
        }
      }

      while ( tracks.byStart[ start ] && tracks.byStart[ start ].start <= currentTime ) {

        byStart = tracks.byStart[ start ];
        natives = byStart._natives;
        type = natives && natives.type;
        //  If plugin does not exist on this instance, remove it
        if ( !natives ||
            ( !!registryByName[ type ] ||
              !!obj[ type ] ) ) {
          if ( byStart.end > currentTime &&
                byStart._running === false ) {

            byStart._running = true;
            obj.data.running[ type ].push( byStart );

            if ( !obj.data.disabled[ type ] ) {

              natives.start.call( obj, event, byStart );

              obj.emit( trackstart,
                Popcorn.extend({}, byStart, {
                  plugin: type,
                  type: trackstart,
                  track: byStart
                })
              );
            }
          }
          start++;
        } else {
          // remove track event
          Popcorn.removeTrackEvent( obj, byStart._id );
          return;
        }
      }

    // Playbar receding
    } else if ( previousTime > currentTime ) {

      while ( tracks.byStart[ start ] && tracks.byStart[ start ].start > currentTime ) {

        byStart = tracks.byStart[ start ];
        natives = byStart._natives;
        type = natives && natives.type;

        // if plugin does not exist on this instance, remove it
        if ( !natives ||
            ( !!registryByName[ type ] ||
              !!obj[ type ] ) ) {

          if ( byStart._running === true ) {

            byStart._running = false;
            runningPlugins = obj.data.running[ type ];
            runningPlugins.splice( runningPlugins.indexOf( byStart ), 1 );

            if ( !obj.data.disabled[ type ] ) {

              natives.end.call( obj, event, byStart );

              obj.emit( trackend,
                Popcorn.extend({}, byStart, {
                  plugin: type,
                  type: trackend,
                  track: byStart
                })
              );
            }
          }
          start--;
        } else {
          // remove track event
          Popcorn.removeTrackEvent( obj, byStart._id );
          return;
        }
      }

      while ( tracks.byEnd[ end ] && tracks.byEnd[ end ].end > currentTime ) {

        byEnd = tracks.byEnd[ end ];
        natives = byEnd._natives;
        type = natives && natives.type;

        // if plugin does not exist on this instance, remove it
        if ( !natives ||
            ( !!registryByName[ type ] ||
              !!obj[ type ] ) ) {

          if ( byEnd.start <= currentTime &&
                byEnd._running === false ) {

            byEnd._running = true;
            obj.data.running[ type ].push( byEnd );

            if ( !obj.data.disabled[ type ] ) {

              natives.start.call( obj, event, byEnd );

              obj.emit( trackstart,
                Popcorn.extend({}, byEnd, {
                  plugin: type,
                  type: trackstart,
                  track: byEnd
                })
              );
            }
          }
          end--;
        } else {
          // remove track event
          Popcorn.removeTrackEvent( obj, byEnd._id );
          return;
        }
      }
    }

    tracks.endIndex = end;
    tracks.startIndex = start;
    tracks.previousUpdateTime = currentTime;

    //enforce index integrity if trackRemoved
    tracks.byStart.length < byStartLen && tracks.startIndex--;
    tracks.byEnd.length < byEndLen && tracks.endIndex--;

  };

  //  Map and Extend TrackEvent functions to all Popcorn instances
  Popcorn.extend( Popcorn.p, {

    getTrackEvents: function() {
      return Popcorn.getTrackEvents.call( null, this );
    },

    getTrackEvent: function( id ) {
      return Popcorn.getTrackEvent.call( null, this, id );
    },

    getLastTrackEventId: function() {
      return Popcorn.getLastTrackEventId.call( null, this );
    },

    removeTrackEvent: function( id ) {

      Popcorn.removeTrackEvent.call( null, this, id );
      return this;
    },

    removePlugin: function( name ) {
      Popcorn.removePlugin.call( null, this, name );
      return this;
    },

    timeUpdate: function( event ) {
      Popcorn.timeUpdate.call( null, this, event );
      return this;
    },

    destroy: function() {
      Popcorn.destroy.call( null, this );
      return this;
    }
  });

  //  Plugin manifests
  Popcorn.manifest = {};
  //  Plugins are registered
  Popcorn.registry = [];
  Popcorn.registryByName = {};
  //  An interface for extending Popcorn
  //  with plugin functionality
  Popcorn.plugin = function( name, definition, manifest ) {

    if ( Popcorn.protect.natives.indexOf( name.toLowerCase() ) >= 0 ) {
      Popcorn.error( "'" + name + "' is a protected function name" );
      return;
    }

    //  Provides some sugar, but ultimately extends
    //  the definition into Popcorn.p
    var isfn = typeof definition === "function",
        blacklist = [ "start", "end", "type", "manifest" ],
        methods = [ "_setup", "_teardown", "start", "end", "frame" ],
        plugin = {},
        setup;

    // combines calls of two function calls into one
    var combineFn = function( first, second ) {

      first = first || Popcorn.nop;
      second = second || Popcorn.nop;

      return function() {
        first.apply( this, arguments );
        second.apply( this, arguments );
      };
    };

    //  If `manifest` arg is undefined, check for manifest within the `definition` object
    //  If no `definition.manifest`, an empty object is a sufficient fallback
    Popcorn.manifest[ name ] = manifest = manifest || definition.manifest || {};

    // apply safe, and empty default functions
    methods.forEach(function( method ) {
      definition[ method ] = safeTry( definition[ method ] || Popcorn.nop, name );
    });

    var pluginFn = function( setup, options ) {

      if ( !options ) {
        return this;
      }

      // When the "ranges" property is set and its value is an array, short-circuit
      // the pluginFn definition to recall itself with an options object generated from
      // each range object in the ranges array. (eg. { start: 15, end: 16 } )
      if ( options.ranges && Popcorn.isArray(options.ranges) ) {
        Popcorn.forEach( options.ranges, function( range ) {
          // Create a fresh object, extend with current options
          // and start/end range object's properties
          // Works with in/out as well.
          var opts = Popcorn.extend( {}, options, range );

          // Remove the ranges property to prevent infinitely
          // entering this condition
          delete opts.ranges;

          // Call the plugin with the newly created opts object
          this[ name ]( opts );
        }, this);

        // Return the Popcorn instance to avoid creating an empty track event
        return this;
      }

      //  Storing the plugin natives
      var natives = options._natives = {},
          compose = "",
          originalOpts, manifestOpts;

      Popcorn.extend( natives, setup );

      options._natives.type = options._natives.plugin = name;
      options._running = false;

      natives.start = natives.start || natives[ "in" ];
      natives.end = natives.end || natives[ "out" ];

      if ( options.once ) {
        natives.end = combineFn( natives.end, function() {
          this.removeTrackEvent( options._id );
        });
      }

      // extend teardown to always call end if running
      natives._teardown = combineFn(function() {

        var args = slice.call( arguments ),
            runningPlugins = this.data.running[ natives.type ];

        // end function signature is not the same as teardown,
        // put null on the front of arguments for the event parameter
        args.unshift( null );

        // only call end if event is running
        args[ 1 ]._running &&
          runningPlugins.splice( runningPlugins.indexOf( options ), 1 ) &&
          natives.end.apply( this, args );

        args[ 1 ]._running = false;
        this.emit( "trackend",
          Popcorn.extend( {}, options, {
            plugin: natives.type,
            type: "trackend",
            track: Popcorn.getTrackEvent( this, options.id || options._id )
          })
        );
      }, natives._teardown );

      // extend teardown to always trigger trackteardown after teardown
      natives._teardown = combineFn( natives._teardown, function() {

        this.emit( "trackteardown", Popcorn.extend( {}, options, {
          plugin: name,
          type: "trackteardown",
          track: Popcorn.getTrackEvent( this, options.id || options._id )
        }));
      });

      // default to an empty string if no effect exists
      // split string into an array of effects
      options.compose = options.compose || [];
      if ( typeof options.compose === "string" ) {
        options.compose = options.compose.split( " " );
      }
      options.effect = options.effect || [];
      if ( typeof options.effect === "string" ) {
        options.effect = options.effect.split( " " );
      }

      // join the two arrays together
      options.compose = options.compose.concat( options.effect );

      options.compose.forEach(function( composeOption ) {

        // if the requested compose is garbage, throw it away
        compose = Popcorn.compositions[ composeOption ] || {};

        // extends previous functions with compose function
        methods.forEach(function( method ) {
          natives[ method ] = combineFn( natives[ method ], compose[ method ] );
        });
      });

      //  Ensure a manifest object, an empty object is a sufficient fallback
      options._natives.manifest = manifest;

      //  Checks for expected properties
      if ( !( "start" in options ) ) {
        options.start = options[ "in" ] || 0;
      }

      if ( !options.end && options.end !== 0 ) {
        options.end = options[ "out" ] || Number.MAX_VALUE;
      }

      // Use hasOwn to detect non-inherited toString, since all
      // objects will receive a toString - its otherwise undetectable
      if ( !hasOwn.call( options, "toString" ) ) {
        options.toString = function() {
          var props = [
            "start: " + options.start,
            "end: " + options.end,
            "id: " + (options.id || options._id)
          ];

          // Matches null and undefined, allows: false, 0, "" and truthy
          if ( options.target != null ) {
            props.push( "target: " + options.target );
          }

          return name + " ( " + props.join(", ") + " )";
        };
      }

      // Resolves 239, 241, 242
      if ( !options.target ) {

        //  Sometimes the manifest may be missing entirely
        //  or it has an options object that doesn't have a `target` property
        manifestOpts = "options" in manifest && manifest.options;

        options.target = manifestOpts && "target" in manifestOpts && manifestOpts.target;
      }

      if ( !options._id && options._natives ) {
        // ensure an initial id is there before setup is called
        options._id = Popcorn.guid( options._natives.type );
      }

      if ( options instanceof TrackEvent ) {

        if ( options._natives ) {
          //  Supports user defined track event id
          options._id = options.id || options._id || Popcorn.guid( options._natives.type );

          // Trigger _setup method if exists
          if ( options._natives._setup ) {

            options._natives._setup.call( this, options );

            this.emit( "tracksetup", Popcorn.extend( {}, options, {
              plugin: options._natives.type,
              type: "tracksetup",
              track: options
            }));
          }
        }

        this.data.trackEvents.add( options );
        TrackEvent.start( this, options );

        this.timeUpdate( this, null, true );

        // Store references to user added trackevents in ref table
        if ( options._id ) {
          Popcorn.addTrackEvent.ref( this, options );
        }
      } else {
        // Create new track event for this instance
        Popcorn.addTrackEvent( this, options );
      }

      //  Future support for plugin event definitions
      //  for all of the native events
      Popcorn.forEach( setup, function( callback, type ) {
        // Don't attempt to create events for certain properties:
        // "start", "end", "type", "manifest". Fixes #1365
        if ( blacklist.indexOf( type ) === -1 ) {
          this.on( type, callback );
        }
      }, this );

      return this;
    };

    //  Extend Popcorn.p with new named definition
    //  Assign new named definition
    Popcorn.p[ name ] = plugin[ name ] = function( id, options ) {
      var length = arguments.length,
          trackEvent, defaults, mergedSetupOpts, previousOpts, newOpts;

      // Shift arguments based on use case
      //
      // Back compat for:
      // p.plugin( options );
      if ( id && !options ) {
        options = id;
        id = null;
      } else {

        // Get the trackEvent that matches the given id.
        trackEvent = this.getTrackEvent( id );

        // If the track event does not exist, ensure that the options
        // object has a proper id
        if ( !trackEvent ) {
          options.id = id;

        // If the track event does exist, merge the updated properties
        } else {

          newOpts = options;
          previousOpts = getPreviousProperties( trackEvent, newOpts );

          // Call the plugins defined update method if provided. Allows for
          // custom defined updating for a track event to be defined by the plugin author
          if ( trackEvent._natives._update ) {

            this.data.trackEvents.remove( trackEvent );

            // It's safe to say that the intent of Start/End will never change
            // Update them first before calling update
            if ( hasOwn.call( options, "start" ) ) {
              trackEvent.start = options.start;
            }

            if ( hasOwn.call( options, "end" ) ) {
              trackEvent.end = options.end;
            }

            TrackEvent.end( this, trackEvent );

            if ( isfn ) {
              definition.call( this, trackEvent );
            }

            trackEvent._natives._update.call( this, trackEvent, options );

            this.data.trackEvents.add( trackEvent );
            TrackEvent.start( this, trackEvent );
          } else {
            // This branch is taken when there is no explicitly defined
            // _update method for a plugin. Which will occur either explicitly or
            // as a result of the plugin definition being a function that _returns_
            // a definition object.
            //
            // In either case, this path can ONLY be reached for TrackEvents that
            // already exist.

            // Directly update the TrackEvent instance.
            // This supports TrackEvent invariant enforcement.
            Popcorn.extend( trackEvent, options );

            this.data.trackEvents.remove( id );

            // If a _teardown function was defined,
            // enforce for track event removals
            if ( trackEvent._natives._teardown ) {
              trackEvent._natives._teardown.call( this, trackEvent );
            }

            // Update track event references
            Popcorn.removeTrackEvent.ref( this, id );

            if ( isfn ) {
              pluginFn.call( this, definition.call( this, trackEvent ), trackEvent );
            } else {

              //  Supports user defined track event id
              trackEvent._id = trackEvent.id || trackEvent._id || Popcorn.guid( trackEvent._natives.type );

              if ( trackEvent._natives && trackEvent._natives._setup ) {

                trackEvent._natives._setup.call( this, trackEvent );

                this.emit( "tracksetup", Popcorn.extend( {}, trackEvent, {
                  plugin: trackEvent._natives.type,
                  type: "tracksetup",
                  track: trackEvent
                }));
              }

              this.data.trackEvents.add( trackEvent );
              TrackEvent.start( this, trackEvent );

              this.timeUpdate( this, null, true );

              // Store references to user added trackevents in ref table
              Popcorn.addTrackEvent.ref( this, trackEvent );
            }

            // Fire an event with change information
            this.emit( "trackchange", {
              id: trackEvent.id,
              type: "trackchange",
              previousValue: previousOpts,
              currentValue: trackEvent,
              track: trackEvent
            });

            return this;
          }

          if ( trackEvent._natives.type !== "cue" ) {
            // Fire an event with change information
            this.emit( "trackchange", {
              id: trackEvent.id,
              type: "trackchange",
              previousValue: previousOpts,
              currentValue: newOpts,
              track: trackEvent
            });
          }

          return this;
        }
      }

      this.data.running[ name ] = this.data.running[ name ] || [];

      // Merge with defaults if they exist, make sure per call is prioritized
      defaults = ( this.options.defaults && this.options.defaults[ name ] ) || {};
      mergedSetupOpts = Popcorn.extend( {}, defaults, options );

      pluginFn.call( this, isfn ? definition.call( this, mergedSetupOpts ) : definition,
                                  mergedSetupOpts );

      return this;
    };

    // if the manifest parameter exists we should extend it onto the definition object
    // so that it shows up when calling Popcorn.registry and Popcorn.registryByName
    if ( manifest ) {
      Popcorn.extend( definition, {
        manifest: manifest
      });
    }

    //  Push into the registry
    var entry = {
      fn: plugin[ name ],
      definition: definition,
      base: definition,
      parents: [],
      name: name
    };
    Popcorn.registry.push(
       Popcorn.extend( plugin, entry, {
        type: name
      })
    );
    Popcorn.registryByName[ name ] = entry;

    return plugin;
  };

  // Storage for plugin function errors
  Popcorn.plugin.errors = [];

  // Returns wrapped plugin function
  function safeTry( fn, pluginName ) {
    return function() {

      //  When Popcorn.plugin.debug is true, do not suppress errors
      if ( Popcorn.plugin.debug ) {
        return fn.apply( this, arguments );
      }

      try {
        return fn.apply( this, arguments );
      } catch ( ex ) {

        // Push plugin function errors into logging queue
        Popcorn.plugin.errors.push({
          plugin: pluginName,
          thrown: ex,
          source: fn.toString()
        });

        // Trigger an error that the instance can listen for
        // and react to
        this.emit( "pluginerror", Popcorn.plugin.errors );
      }
    };
  }

  // Debug-mode flag for plugin development
  // True for Popcorn development versions, false for stable/tagged versions
  Popcorn.plugin.debug = ( Popcorn.version === "@" + "VERSION" );

  //  removePlugin( type ) removes all tracks of that from all instances of popcorn
  //  removePlugin( obj, type ) removes all tracks of type from obj, where obj is a single instance of popcorn
  Popcorn.removePlugin = function( obj, name ) {

    //  Check if we are removing plugin from an instance or from all of Popcorn
    if ( !name ) {

      //  Fix the order
      name = obj;
      obj = Popcorn.p;

      if ( Popcorn.protect.natives.indexOf( name.toLowerCase() ) >= 0 ) {
        Popcorn.error( "'" + name + "' is a protected function name" );
        return;
      }

      var registryLen = Popcorn.registry.length,
          registryIdx;

      // remove plugin reference from registry
      for ( registryIdx = 0; registryIdx < registryLen; registryIdx++ ) {
        if ( Popcorn.registry[ registryIdx ].name === name ) {
          Popcorn.registry.splice( registryIdx, 1 );
          delete Popcorn.registryByName[ name ];
          delete Popcorn.manifest[ name ];

          // delete the plugin
          delete obj[ name ];

          // plugin found and removed, stop checking, we are done
          return;
        }
      }

    }

    var byStart = obj.data.trackEvents.byStart,
        byEnd = obj.data.trackEvents.byEnd,
        animating = obj.data.trackEvents.animating,
        idx, sl;

    // remove all trackEvents
    for ( idx = 0, sl = byStart.length; idx < sl; idx++ ) {

      if ( byStart[ idx ] && byStart[ idx ]._natives && byStart[ idx ]._natives.type === name ) {

        byStart[ idx ]._natives._teardown && byStart[ idx ]._natives._teardown.call( obj, byStart[ idx ] );

        byStart.splice( idx, 1 );

        // update for loop if something removed, but keep checking
        idx--; sl--;
        if ( obj.data.trackEvents.startIndex <= idx ) {
          obj.data.trackEvents.startIndex--;
          obj.data.trackEvents.endIndex--;
        }
      }

      // clean any remaining references in the end index
      // we do this seperate from the above check because they might not be in the same order
      if ( byEnd[ idx ] && byEnd[ idx ]._natives && byEnd[ idx ]._natives.type === name ) {

        byEnd.splice( idx, 1 );
      }
    }

    //remove all animating events
    for ( idx = 0, sl = animating.length; idx < sl; idx++ ) {

      if ( animating[ idx ] && animating[ idx ]._natives && animating[ idx ]._natives.type === name ) {

        animating.splice( idx, 1 );

        // update for loop if something removed, but keep checking
        idx--; sl--;
      }
    }

  };

  Popcorn.compositions = {};

  //  Plugin inheritance
  Popcorn.compose = function( name, definition, manifest ) {

    //  If `manifest` arg is undefined, check for manifest within the `definition` object
    //  If no `definition.manifest`, an empty object is a sufficient fallback
    Popcorn.manifest[ name ] = manifest = manifest || definition.manifest || {};

    // register the effect by name
    Popcorn.compositions[ name ] = definition;
  };

  Popcorn.plugin.effect = Popcorn.effect = Popcorn.compose;

  var rnaiveExpr = /^(?:\.|#|\[)/;

  //  Basic DOM utilities and helpers API. See #1037
  Popcorn.dom = {
    debug: false,
    //  Popcorn.dom.find( selector, context )
    //
    //  Returns the first element that matches the specified selector
    //  Optionally provide a context element, defaults to `document`
    //
    //  eg.
    //  Popcorn.dom.find("video") returns the first video element
    //  Popcorn.dom.find("#foo") returns the first element with `id="foo"`
    //  Popcorn.dom.find("foo") returns the first element with `id="foo"`
    //     Note: Popcorn.dom.find("foo") is the only allowed deviation
    //           from valid querySelector selector syntax
    //
    //  Popcorn.dom.find(".baz") returns the first element with `class="baz"`
    //  Popcorn.dom.find("[preload]") returns the first element with `preload="..."`
    //  ...
    //  See https://developer.mozilla.org/En/DOM/Document.querySelector
    //
    //
    find: function( selector, context ) {
      var node = null;

      //  Default context is the `document`
      context = context || document;

      if ( selector ) {

        //  If the selector does not begin with "#", "." or "[",
        //  it could be either a nodeName or ID w/o "#"
        if ( !rnaiveExpr.test( selector ) ) {

          //  Try finding an element that matches by ID first
          node = document.getElementById( selector );

          //  If a match was found by ID, return the element
          if ( node !== null ) {
            return node;
          }
        }
        //  Assume no elements have been found yet
        //  Catch any invalid selector syntax errors and bury them.
        try {
          node = context.querySelector( selector );
        } catch ( e ) {
          if ( Popcorn.dom.debug ) {
            throw new Error(e);
          }
        }
      }
      return node;
    }
  };

  //  Cache references to reused RegExps
  var rparams = /\?/,
  //  XHR Setup object
  setup = {
    ajax: null,
    url: "",
    data: "",
    dataType: "",
    success: Popcorn.nop,
    type: "GET",
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8"
  };

  Popcorn.xhr = function( options ) {
    var settings;

    options.dataType = options.dataType && options.dataType.toLowerCase() || null;

    if ( options.dataType &&
         ( options.dataType === "jsonp" || options.dataType === "script" ) ) {

      Popcorn.xhr.getJSONP(
        options.url,
        options.success,
        options.dataType === "script"
      );
      return;
    }

    //  Merge the "setup" defaults and custom "options"
    //  into a new plain object.
    settings = Popcorn.extend( {}, setup, options );

    //  Create new XMLHttpRequest object
    settings.ajax = new XMLHttpRequest();

    if ( settings.ajax ) {

      if ( settings.type === "GET" && settings.data ) {

        //  append query string
        settings.url += ( rparams.test( settings.url ) ? "&" : "?" ) + settings.data;

        //  Garbage collect and reset settings.data
        settings.data = null;
      }

      //  Open the request
      settings.ajax.open( settings.type, settings.url, settings.async );

      //  For POST, set the content-type request header
      if ( settings.type === "POST" ) {
        settings.ajax.setRequestHeader(
          "Content-Type", settings.contentType
        );
      }

      settings.ajax.send( settings.data || null );

      return Popcorn.xhr.httpData( settings );
    }
  };


  Popcorn.xhr.httpData = function( settings ) {

    var data, json = null,
        parser, xml = null;

    settings.ajax.onreadystatechange = function() {

      if ( settings.ajax.readyState === 4 ) {

        try {
          json = JSON.parse( settings.ajax.responseText );
        } catch( e ) {
          //suppress
        }

        data = {
          xml: settings.ajax.responseXML,
          text: settings.ajax.responseText,
          json: json
        };

        // Normalize: data.xml is non-null in IE9 regardless of if response is valid xml
        if ( !data.xml || !data.xml.documentElement ) {
          data.xml = null;

          try {
            parser = new DOMParser();
            xml = parser.parseFromString( settings.ajax.responseText, "text/xml" );

            if ( !xml.getElementsByTagName( "parsererror" ).length ) {
              data.xml = xml;
            }
          } catch ( e ) {
            // data.xml remains null
          }
        }

        //  If a dataType was specified, return that type of data
        if ( settings.dataType ) {
          data = data[ settings.dataType ];
        }


        settings.success.call( settings.ajax, data );

      }
    };
    return data;
  };

  Popcorn.xhr.getJSONP = function( url, success, isScript ) {

    var head = document.head || document.getElementsByTagName( "head" )[ 0 ] || document.documentElement,
      script = document.createElement( "script" ),
      isFired = false,
      params = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/,
      replaceInUrl, prefix, paramStr, callback, callparam;

    if ( !isScript ) {

      // is there a calback already in the url
      callparam = url.match( /(callback=[^&]*)/ );

      if ( callparam !== null && callparam.length ) {

        prefix = callparam[ 1 ].split( "=" )[ 1 ];

        // Since we need to support developer specified callbacks
        // and placeholders in harmony, make sure matches to "callback="
        // aren't just placeholders.
        // We coded ourselves into a corner here.
        // JSONP callbacks should never have been
        // allowed to have developer specified callbacks
        if ( prefix === "?" ) {
          prefix = "jsonp";
        }

        // get the callback name
        callback = Popcorn.guid( prefix );

        // replace existing callback name with unique callback name
        url = url.replace( /(callback=[^&]*)/, "callback=" + callback );
      } else {

        callback = Popcorn.guid( "jsonp" );

        if ( rjsonp.test( url ) ) {
          url = url.replace( rjsonp, "$1" + callback );
        }

        // split on first question mark,
        // this is to capture the query string
        params = url.split( /\?(.+)?/ );

        // rebuild url with callback
        url = params[ 0 ] + "?";
        if ( params[ 1 ] ) {
          url += params[ 1 ] + "&";
        }
        url += "callback=" + callback;
      }

      //  Define the JSONP success callback globally
      window[ callback ] = function( data ) {
        // Fire success callbacks
        success && success( data );
        isFired = true;
      };
    }

    script.addEventListener( "load",  function() {

      //  Handling remote script loading callbacks
      if ( isScript ) {
        //  getScript
        success && success();
      }

      //  Executing for JSONP requests
      if ( isFired ) {
        //  Garbage collect the callback
        delete window[ callback ];
      }
      //  Garbage collect the script resource
      head.removeChild( script );
    }, false );

    script.addEventListener( "error",  function( e ) {
      //  Handling remote script loading callbacks
      success && success( { error: e } );

      //  Executing for JSONP requests
      if ( !isScript ) {
        //  Garbage collect the callback
        delete window[ callback ];
      }
      //  Garbage collect the script resource
      head.removeChild( script );
    }, false );

    script.src = url;
    head.insertBefore( script, head.firstChild );

    return;
  };

  Popcorn.getJSONP = Popcorn.xhr.getJSONP;

  Popcorn.getScript = Popcorn.xhr.getScript = function( url, success ) {

    return Popcorn.xhr.getJSONP( url, success, true );
  };

  Popcorn.util = {
    // Simple function to parse a timestamp into seconds
    // Acceptable formats are:
    // HH:MM:SS.MMM
    // HH:MM:SS;FF
    // Hours and minutes are optional. They default to 0
    toSeconds: function( timeStr, framerate ) {
      // Hours and minutes are optional
      // Seconds must be specified
      // Seconds can be followed by milliseconds OR by the frame information
      var validTimeFormat = /^([0-9]+:){0,2}[0-9]+([.;][0-9]+)?$/,
          errorMessage = "Invalid time format",
          digitPairs, lastIndex, lastPair, firstPair,
          frameInfo, frameTime;

      if ( typeof timeStr === "number" ) {
        return timeStr;
      }

      if ( typeof timeStr === "string" &&
            !validTimeFormat.test( timeStr ) ) {
        Popcorn.error( errorMessage );
      }

      digitPairs = timeStr.split( ":" );
      lastIndex = digitPairs.length - 1;
      lastPair = digitPairs[ lastIndex ];

      // Fix last element:
      if ( lastPair.indexOf( ";" ) > -1 ) {

        frameInfo = lastPair.split( ";" );
        frameTime = 0;

        if ( framerate && ( typeof framerate === "number" ) ) {
          frameTime = parseFloat( frameInfo[ 1 ], 10 ) / framerate;
        }

        digitPairs[ lastIndex ] = parseInt( frameInfo[ 0 ], 10 ) + frameTime;
      }

      firstPair = digitPairs[ 0 ];

      return {

        1: parseFloat( firstPair, 10 ),

        2: ( parseInt( firstPair, 10 ) * 60 ) +
              parseFloat( digitPairs[ 1 ], 10 ),

        3: ( parseInt( firstPair, 10 ) * 3600 ) +
            ( parseInt( digitPairs[ 1 ], 10 ) * 60 ) +
              parseFloat( digitPairs[ 2 ], 10 )

      }[ digitPairs.length || 1 ];
    }
  };

  // alias for exec function
  Popcorn.p.cue = Popcorn.p.exec;

  //  Protected API methods
  Popcorn.protect = {
    natives: getKeys( Popcorn.p ).map(function( val ) {
      return val.toLowerCase();
    })
  };

  // Setup logging for deprecated methods
  Popcorn.forEach({
    // Deprecated: Recommended
    "listen": "on",
    "unlisten": "off",
    "trigger": "emit",
    "exec": "cue"

  }, function( recommend, api ) {
    var original = Popcorn.p[ api ];
    // Override the deprecated api method with a method of the same name
    // that logs a warning and defers to the new recommended method
    Popcorn.p[ api ] = function() {
      if ( typeof console !== "undefined" && console.warn ) {
        console.warn(
          "Deprecated method '" + api + "', " +
          (recommend == null ? "do not use." : "use '" + recommend + "' instead." )
        );

        // Restore api after first warning
        Popcorn.p[ api ] = original;
      }
      return Popcorn.p[ recommend ].apply( this, [].slice.call( arguments ) );
    };
  });


  //  Exposes Popcorn to global context
  global.Popcorn = Popcorn;

})(window, window.document);

(function (global, document, $, deck, window, undefined) {


    function maybeAddSnippet(audioDataFile, options, andThen) {
        if (options.snippets.browsercast) {
            if ($(options.selectors.browsercast).size() > 0 && options.alert.goto) {
                alert("'options.snippets.browsercast' is true but a "+options.selectors.browsercast+" has been found."
                      +"\nThis might cause interaction glitches."
                      +"\n"
                      +"\nSuggestion: remove your html snippet or pass the {snippets: {browsercast: false}} option."
                     );
            }
            var ext = audioDataFile.replace(/.*[.]([^.]*)/, '$1');
            $('<div/>').addClass('browsercast')
                .append($('<audio/>').addClass("browsercast-audio")
                        .append($('<source/>').attr('src', audioDataFile).attr('type', 'audio/'+ext)))
                .append($('<menu/>').append($('<button/>').addClass('playpause')))
                .append($('<div/>').addClass('browsercast-markers')
                        .append($('<div/>').addClass('browsercast-time-label').text('1:00')))
                .appendTo($.deck('getContainer'));
        }
    }

    var $document = $(document);

    function togglePlay(popcorn) {
        if (popcorn.paused() === true) {
            popcorn.play()
        } else {
            popcorn.pause()
        }
    }

    function timeString(nSeconds) {
        return new Date(null, null, null, null, null, nSeconds)
            .toTimeString()
            .replace(/ .*$/, '')
            .replace(/^00:/, '');
    }

    function updatePlayPauseClass(paused, that, ifPlay, ifPause) {
        if (paused == true) {
            $(that).removeClass(ifPlay);
            $(that).addClass(ifPause);
        } else {
            $(that).removeClass(ifPause);
            $(that).addClass(ifPlay);
        }
    }

    // Use the audio timeupdates to drive existing slides.
    function playBrowserCast(timings, options) {
        var audio, popcorn, markers, bc;
        var divs = {};
        var nTimings = Object.keys(timings).length;
        var defaultWidth = (100./nTimings)+'%';

        var forEachTiming = function(f) {
            Object.keys(timings)
                .sort(function(a, b) {return a - b;})
                .forEach(f);
        };

        var inited = false; // to avoid the audio setting the current slide to 0 at the beginning (and allow bookmarking)

        bc = $(options.selectors.browsercast).get(0);
        audio = $(options.selectors.browsercastAudio).get(0);
        markers = $(options.selectors.browsercastMarkers).get(0);
        popcorn = Popcorn(audio);

        $('.playpause', bc).click(function() {
            togglePlay(popcorn);
        });

        forEachTiming(function(k, i) {
            var div = document.createElement('div');
            div.className = 'browsercast-cue';
            div.onclick = function(event) {
                popcorn.currentTime(timings[k]);
            };
            $(div)
                .css('width', defaultWidth)
                .css('box-sizing', 'border-box');
            markers.appendChild(div);
            divs[k] = div;
            popcorn.cue(k, timings[k], function () {
                if (!inited) return;
                transitionLock = true;
                $.deck('go', parseInt(k));
                $('.active', markers).removeClass('active');
                $(div).addClass('active');
                transitionLock = false;
            });
        });
        var trySetCueLengthAndPlay = function(retries, delay) {
            if (retries <= 0) { return; }
            var totalDuration = popcorn.duration();
            if (totalDuration > 0) { // it tests also for NaN
                var kPrev;
                forEachTiming(function(k, i) {
                    if (i != 0) {
                        var pc = 100 * (timings[k] - timings[kPrev]) / totalDuration;
                        $(divs[kPrev]).css('width', pc+'%');
                    }
                    kPrev = k;
                });
                var pc = 100 * (totalDuration - timings[kPrev]) / totalDuration;
                $(divs[kPrev]).css('width', pc+'%');
                // Start the 'cast!
                inited = true;
                var currentSlideIndex = $.deck('getSlides').indexOf($.deck('getSlide'));
                setTimeout(function() { // delay initialization for popcorn to be properly inited
                    $.deck('go', currentSlideIndex);
                }, 1);
            } else {
                setTimeout(function() {
                    trySetCueLengthAndPlay(retries - 1, delay*1.5);
                }, delay);
            }
        }

        // lock for preventing slidechanged event handler during timeupdate handler.
        // TODO using a mutex seems clunky.
        var transitionLock = false;

        // Decorator for creating an event handler that doesn't run
        // when the lock is active.
        var ifNotLocked = function (f) {
            return function (event) {
                if (!transitionLock) {
                    f.apply(this, arguments);
                }
            };
        };

        $document.bind('deck.change', ifNotLocked(function (event, from, to) {
            popcorn.currentTime(timings[to.toString()]);
            popcorn.play();
        }));


        var updatePlayPause = function() {
            $('.playpause').each(function() {
                updatePlayPauseClass(popcorn.paused(), this, 'pause', 'play');
            });
        };
        audio.addEventListener('pause', updatePlayPause);
        audio.addEventListener('playing', updatePlayPause);
        audio.addEventListener('timeupdate', function () {
            var estimatedTotal = popcorn.duration();
            var pc = 100 * audio.currentTime / estimatedTotal;
            var timeTxt = timeString(audio.currentTime);
            $(options.selectors.browsercastTimeLabel).css('left', pc+'%').text(timeTxt);
        });
        
        $document.unbind('keydown.deckbcast').bind('keydown.deckbcast', function(e) {
            //opts.keys.scale || $.inArray(e.which, opts.keys.scale) > -1) {
            if (e.which === 32) {
                togglePlay(popcorn);
                e.preventDefault();
            }
        });

        trySetCueLengthAndPlay(20, 10);

    }

    function leftPad(number, targetLength, padding) {
        padding = padding || ' ';
        var output = number + '';
        while (output.length < targetLength) {
            output = padding + output;
        }
        return output;
    }

    // Start recording a 'cast
    // In the end you can get the slide HTML with the cue attributes set
    // by running:
    //        browsercastRecorder.getHTMLSlides()
    // in the Javascript console.
    //
    // Press 'Left' on the first slide to start recording.
    function recordBrowserCast(options) {

        var bc = $(options.selectors.browsercast);
        $(options.selectors.browsercastAudio).attr('controls', 'true');
        $(options.selectors.browsercastMarkers).hide();
        setTimeout(function(){ $.deck('go', 0); logs = [{time:0, slide:0}];}, 200);

        var $document = $(document);
        var audio = $(options.selectors.browsercastAudio).get(0);
        var logs = []; // as a list of pairs, so we can have multiple values and clean afterwards
        var exportLogs = function() {
            var res = '{\n';
            for (i in logs) {
                if (i != 0) {
                    res += ',\n';
                }
                res += leftPad('"'+logs[i].slide+'"', 8) + ':' + leftPad(logs[i].time.toFixed(2), 6);
            }
            res += '\n}\n';
            alert(res);
        };

        $document.bind('deck.change', function(event, from, to) {
            logs.push({time: audio.currentTime, slide: to});
        });
        $document.unbind('keydown.deckbcastrecord').bind('keydown.deckbcastrecord', function(e) {
            if (e.which === 84) { // 't'
                exportLogs();
            }
        });
    }

    function unsetKey(which, fromWhat) {
        if ($.isArray(fromWhat)) {
            var match = -1;
            while( (match = fromWhat.indexOf(which)) > -1 ) {
                fromWhat.splice(match, 1);
            }
        } else if ($.isPlainObject(fromWhat)) {
            for (var p in fromWhat) {
                if (fromWhat.hasOwnProperty(p)) {
                    unsetKey(which, fromWhat[p]);
                }
            }
        }
    }


    $.extend(true, $.deck.defaults, {
        selectors: {
            browsercast: '.browsercast',
            browsercastAudio: '.browsercast-audio',
            browsercastMarkers: '.browsercast-markers',
            browsercastTimeLabel: '.browsercast-time-label'
        },
        
        snippets: {
            browsercast: true,
            browsercastAlways: false
        },
        
        alert: {
            browsercast: true
        }
    });


    unsetKey(32, $.deck.defaults.keys); // unbind space from 'next slide'
    $document.bind('deck.init', function() {
        var options = $.deck('getOptions');
        var audioDataFile = $('html>head>meta[name="audio"]').attr('content');
        if (audioDataFile === undefined) {
            return;
        }
        maybeAddSnippet(audioDataFile, options);
        var timingDataFile = $('html>head>meta[name="timings"]').attr('content');
        if (timingDataFile === undefined) {
            recordBrowserCast(options);
        } else {
            $.getJSON(timingDataFile, function(timings) {
                playBrowserCast(timings, options);
            }).fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ', ' + error;
                console.log('[Browsercast] Request Failed: ' + err);
                if (options.alert.browsercast) {
                    alert('Timing file "' + timingDataFile + '" referenced but it was not found or wrong.\n' +
                          'See console logs for more details.\n' +
                          "Browsercast replay won't work, falling back to timing recording.");
                }
                recordBrowserCast();
            });
        }
    });

})(window, window.document, jQuery, 'deck', this);
function ACTUALLY_FILL_CSS(el) { $(el).text("\n.deck-container {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide:not(.deck-current), .deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide:not(.deck-child-current) {\n  display: none;\n}\n.deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide.deck-current, .deck-container:not(.show-all-slides):not(.deck-menu):not(.deck-loading) > .slide.deck-child-current {\n  display: block;\n}\n\n.deck-container.deck-loading > *:not(.deck-loading-splash) {\n  visibility: hidden;\n}\n.touch .deck-container {\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n}\n.deck-container > .slide {\n  position: absolute;\n}\n.deck-container > .slide.deck-current, .deck-container > .slide.deck-child-current {\n  position: absolute;\n  /* relative to parent */\n}\n.deck-container > .slide.deck-current .slide, .deck-container > .slide.deck-child-current .slide {\n  visibility: hidden;\n}\n.deck-container > .slide.deck-current .deck-previous, .deck-container > .slide.deck-current .deck-before, .deck-container > .slide.deck-current .deck-current, .deck-container > .slide.deck-child-current .deck-previous, .deck-container > .slide.deck-child-current .deck-before, .deck-container > .slide.deck-child-current .deck-current {\n  visibility: visible;\n}\n.deck-container.deck-anim-ready .deck-loading-splash {\n  visibility: hidden;\n  opacity: 0;\n  /*\n      right: 100%;\n      left: -100%;\n  */\n  -webkit-transition: visibility 0s linear 0.5s, all 0.5s linear;\n  transition: visibility 0s linear .5s, all 0.5s linear;\n}\n.deck-container .deck-loading-splash {\n  visibility: visible;\n  opacity: 1;\n  position: absolute;\n  text-align: center;\n  padding-top: 200px;\n  display: flex;\n  margin: 0 auto;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: black;\n  color: white;\n  z-index: 100;\n}\n\n\n.deck-container {\n    width: 100%; height: 100%; /* to get a proper filling of the parent */\n    margin: 0; padding: 0; /* any margin is handled by the parent or the fit extension */\n    position: absolute;\n    left:0; top:0; width:100%; height:100%;\n    border: 0;\n}\n.deck-container>.slide {\n    width: 100%; height: 100%; /* to get a proper filling of the parent */\n    min-width:0; min-height:0; /* undoing some hurting style in the defaults of deck.js */\n    overflow: hidden; /* don't show slides outside of their box */\n    /* margin:0; padding:0; /* remove possible margins */\n}\n\nbody.is-clone .clonepointer {\n  /* default convenient positioning for clone pointers */\n  position: absolute;\n  z-index: 10; }\n  body.is-clone .clonepointer.scale-on-click {\n    transition: transform 80ms linear;\n    -webkit-transition: -webkit-transform 80ms linear; }\n    body.is-clone .clonepointer.scale-on-click.pointer-click {\n      transition: transform 150ms linear;\n      -webkit-transition: -webkit-transform 150ms linear;\n      transform: translate(-50%, -50%) scale(1.5, 1.5) translate(50%, 50%);\n      -webkit-transform: translate(-50%, -50%) scale(1.5, 1.5) translate(50%, 50%); }\n\n.notes, .notes-target {\n  display: none; }\n\nbody.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current {\n  outline: 5px solid grey;\n  /* use outline to avoid layout issues with old themes and allow for precise pointer position estimation */\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  transform: translate(20px, 20px);\n  -webkit-transform: translate(20px, 20px); }\n  body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current + .slide, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current + .slide {\n    outline: 5px solid grey;\n    overflow: hidden;\n    display: block !important;\n    visibility: visible;\n    top: 0;\n    left: 0;\n    transform: translate(-50%, -50%) scale(0.5) translate(50%, 50%) translate(200%, 0) translate(80px, 40px);\n    -webkit-transform: translate(-50%, -50%) scale(0.5) translate(50%, 50%) translate(200%, 0) translate(80px, 40px); }\n    body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-current + .slide.deck-next, body.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) > .slide.deck-child-current + .slide.deck-next {\n      outline-color: red; }\nbody.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) .notes-target {\n  display: block;\n  background: black;\n  color: #FFB;\n  padding: 5px;\n  position: absolute;\n  left: 840px;\n  right: 0;\n  top: 340px;\n  bottom: 0; }\n\n.goto-form {\n  position: absolute;\n  z-index: 3;\n  bottom: 10px;\n  left: 50%;\n  height: 1.75em;\n  margin: 0 0 0 -9.125em;\n  line-height: 1.75em;\n  padding: 0.625em;\n  display: none;\n  background: #ccc;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.goto-form label {\n  font-weight: bold;\n}\n.goto-form label, .goto-form input {\n  display: inline-block;\n  font-family: inherit;\n}\n.deck-goto .goto-form {\n  display: block;\n}\n\n#goto-slide {\n  width: 8.375em;\n  margin: 0 0.625em;\n  height: 1.4375em;\n}\n\n@media print {\n  .goto-form, #goto-slide {\n    display: none;\n  }\n}\n\n.deck-container.no-status .deck-status {\n  display: none;\n}\n\n.deck-status {\n  position: absolute;\n  z-index: 3;\n  left: 0;\n  bottom: 10px;\n  margin: 0;\n  padding: 0;\n  font-size: 10px;\n  /*outline: 1px solid red;*/\n  width: 100%;\n  text-align: center;\n  color: #888;\n}\n\n.deck-prev-link, .deck-next-link {\n  display: none;\n  position: absolute;\n  z-index: 3;\n  top: 50%;\n  width: 32px;\n  height: 32px;\n  margin-top: -16px;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 32px;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  background: #888;\n  border-radius: 16px;\n}\n.deck-prev-link:hover, .deck-prev-link:focus, .deck-prev-link:active, .deck-prev-link:visited, .deck-next-link:hover, .deck-next-link:focus, .deck-next-link:active, .deck-next-link:visited {\n  color: #fff;\n}\n\n.deck-prev-link {\n  left: 8px;\n}\n\n.deck-next-link {\n  right: 8px;\n}\n\n.deck-container:hover .deck-prev-link, .deck-container:hover .deck-next-link {\n  display: block;\n}\n.deck-container:hover .deck-prev-link.deck-nav-disabled, .touch .deck-container:hover .deck-prev-link, .deck-container:hover .deck-next-link.deck-nav-disabled, .touch .deck-container:hover .deck-next-link {\n  display: none;\n}\n\n@media print {\n  .deck-prev-link, .deck-next-link {\n    display: none !important;\n  }\n}\n\n.deck-menu {\n  overflow: auto;\n}\n.deck-menu .slide {\n  background: #eee;\n  position: relative;\n  left: 0;\n  top: 0;\n  visibility: visible;\n  cursor: pointer;\n}\n.no-csstransforms .deck-menu > .slide {\n  float: left;\n  width: 22%;\n  height: 22%;\n  min-height: 0;\n  margin: 1%;\n  font-size: 0.22em;\n  overflow: hidden;\n  padding: 0 0.5%;\n}\n.csstransforms .deck-menu > .slide {\n  -webkit-transform: scale(0.22) !important;\n  -ms-transform: scale(0.22) !important;\n  transform: scale(0.22) !important;\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0 48px;\n  margin: 12px;\n}\n.deck-menu iframe, .deck-menu img, .deck-menu video {\n  max-width: 100%;\n}\n.deck-menu .deck-current, .no-touch .deck-menu .slide:hover {\n  background: #ddf;\n}\n.deck-menu.deck-container:hover .deck-prev-link, .deck-menu.deck-container:hover .deck-next-link {\n  display: none;\n}\n\n.deck-container .attribution-wrap {\n  /* cover the complete offset parent */\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 0;\n  height: 100%;\n}\n.deck-container .attribution-link {\n  font-size: 10px;\n  color: white;\n  background: black;\n  border: 1px solid darkgrey;\n  opacity: 0.6;\n  right: 0;\n  bottom: 5px;\n  position: absolute;\n  padding: 0 5px;\n}\n\n/* the time etc */\n.timekeeper {\n  font-size: 28px;\n  border-radius: 3px;\n  background: black;\n  color: white;\n  display: inline-block;\n  position: absolute;\n  left: 840px;\n  top: 340px;\n  width: 400px;\n  padding: 4px;\n  margin: -4px; }\n  body:not(.has-clones) .timekeeper {\n    visibility: hidden; }\n  .timekeeper .timekeeper-time, .timekeeper .timekeeper-local-relative-time {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    width: 50%;\n    text-align: center;\n    vertical-align: middle; }\n    .timekeeper .timekeeper-time.timekeeper-local-relative-time, .timekeeper .timekeeper-local-relative-time.timekeeper-local-relative-time {\n      color: grey; }\n    .timekeeper .timekeeper-time.timekeeper-time, .timekeeper .timekeeper-local-relative-time.timekeeper-time {\n      border-left: 2px solid grey;\n      /*margin-left: -10px; not needed with the injected template (no space in it)*/\n      margin-right: -15px; }\n  .timekeeper .timekeeper-relative-time {\n    margin-top: 5px;\n    border-top: 2px solid grey;\n    text-align: center;\n    font-size: 300%; }\n  .timekeeper .timekeeper-bang, .timekeeper .timekeeper-clear {\n    display: inline-block;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    left: 45%;\n    border: 2px solid grey;\n    border-radius: 15px;\n    background: black; }\n    .timekeeper .timekeeper-bang.timekeeper-bang, .timekeeper .timekeeper-clear.timekeeper-bang {\n      top: 10px; }\n    .timekeeper .timekeeper-bang.timekeeper-clear, .timekeeper .timekeeper-clear.timekeeper-clear {\n      top: 23px; }\n    .timekeeper .timekeeper-bang:not(.timekeeper-notification), .timekeeper .timekeeper-clear:not(.timekeeper-notification) {\n      transition: background 300ms linear;\n      -webkit-transition: background 300ms linear; }\n    .timekeeper .timekeeper-bang.timekeeper-notification, .timekeeper .timekeeper-clear.timekeeper-notification {\n      border-color: white;\n      background: green; }\n      .timekeeper .timekeeper-bang.timekeeper-notification.timekeeper-clear, .timekeeper .timekeeper-clear.timekeeper-notification.timekeeper-clear {\n        background: red; }\n\n/* the logs */\n.timekeeper-logs {\n  visibility: hidden;\n  border: 2px solid black;\n  border-radius: 2px;\n  background: #181818;\n  color: yellow;\n  padding: 5px;\n  position: absolute;\n  width: 500px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: .8; }\n  .timekeeper-logs.timekeeper-logs-visible {\n    visibility: visible; }\n  .timekeeper-logs pre {\n    font-size: 10px;\n    overflow-y: scroll;\n    position: absolute;\n    top: 50px;\n    bottom: 0;\n    left: 0;\n    right: 0; }\n  .timekeeper-logs .button {\n    color: white;\n    background: black;\n    display: inline-block;\n    padding: 0 5px;\n    margin-right: 10px;\n    border: 1px solid white;\n    border-radius: 3px; }\n\nbody.has-clones .deck-container:not(.deck-globalscale):not(.deck-menu) div.notes-target {\n  top: 490px; }\n\n.deck-container .slide.image-full > .attribution-wrap, .deck-container .slide.image-full > img, .deck-container .slide.image-full > div.img, .deck-container .slide.image-fit > .attribution-wrap, .deck-container .slide.image-fit > img, .deck-container .slide.image-fit > div.img {\n  z-index: -1;\n}\n.deck-container .slide.image-full > img, .deck-container .slide.image-full > div.img, .deck-container .slide.image-fit > img, .deck-container .slide.image-fit > div.img {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  min-height: 100%;\n}\n.deck-container .slide.image-full div.img, .deck-container .slide.image-fit div.img {\n  width: 100%;\n  height: 100%;\n  outline: 2px solid red;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n.deck-container .slide.image-full.image-full div.img, .deck-container .slide.image-fit.image-full div.img {\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n.deck-container .slide.image-full.image-fit div.img, .deck-container .slide.image-fit.image-fit div.img {\n  -webkit-background-size: contain;\n  -moz-background-size: contain;\n  -o-background-size: contain;\n  background-size: contain;\n}\n.deck-container .slide.top-left h2 {\n  position: absolute;\n  border: 0px;\n  top: 50px;\n  left: 50px;\n}\n.deck-container .slide.top-right h2 {\n  position: absolute;\n  border: 0px;\n  top: 50px;\n  right: 50px;\n}\n.deck-container .slide.bottom-left h2 {\n  position: absolute;\n  border: 0px;\n  bottom: 50px;\n  left: 50px;\n}\n.deck-container .slide.bottom-right h2 {\n  position: absolute;\n  border: 0px;\n  bottom: 50px;\n  right: 50px;\n}\n.deck-container .slide.no-title h1, .deck-container .slide.no-title h2 {\n  display: none;\n}\n.deck-container .slide.darkened h2 {\n  background: rgba(0, 0, 0, 0.75);\n  padding: 15px;\n  margin: -15px;\n}\n.deck-container .in3d-table {\n  transform: scale(0.7) perspective(600px) rotateX(40deg) rotateZ(-15deg) translate(-30px, -120px);\n}\n\n.deck-container:not(.deck-globalscale) div.comment, .deck-container:not(.deck-globalscale) .comment {\n  z-index: 1000 !important;\n  /* might need theme specific thing here */\n  background-color: yellow;\n  /* force opaque... */\n  color: darkred;\n}\n\n.deck-container:not(.deck-globalscale) .hasSVG .comment {\n  /*transform: none;*/\n  -webkit-transform: none;\n}\n\nbody:not(.has-clones):not(.show-comments) .deck-container > .slide .comment, body:not(.has-clones):not(.show-comments) .deck-container > .slide .showwhencomment {\n  display: none;\n}\n\n.deck-container > .slide div.comment {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  /*outline: 1px solid red;*/\n  border-radius: 3px;\n  color: darkred;\n  background: rgba(255, 255, 128, 0.7);\n  /*        opacity: .8;*/\n  font-size: 14px;\n  line-height: initial;\n  padding: 1px 15px;\n  width: auto;\n  height: 20px;\n  margin: 0;\n  margin-left: 100px;\n  margin-top: -6.6px;\n  margin-bottom: -13.2px;\n}\n\n.deck-container > .slide div.comment.small {\n  width: 120px;\n  margin-left: -100px;\n}\n\n.deck-container > .slide div.comment.twolines {\n  height: 40px;\n  margin-top: -13.333px;\n  margin-bottom: -26.667px;\n}\n\n.browsercast {\n    position: absolute;\n    top: 5px; left: 5px;\n    right: 5px;\n}\n\n.browsercast-audio {\n    width: 100%;\n    margin: auto auto;\n}\n\n.browsercast-cue {\n    position: relative;\n    float: left;\n    height: 10px;\n    border-right: solid 2px #000;\n    cursor: pointer;\n}\n\n.browsercast-cue:last-child {\n    border-right: 0;\n}\n\n.browsercast-cue.active {\n    background-color: #abc;\n}\n\n\nmenu {\n  /* @size sets the relative size of the buttons, define before calling the buttons mixin */\n  /* Play */\n  /* Stop */\n  /* Fast-Forward */\n  /* Rewind */\n  /* Pause */\n  margin: 2em auto;\n  text-align: center;\n  position: relative;\n}\nmenu button {\n  position: relative;\n  display: inline-block;\n  padding: .6em;\n  background: linear-gradient(#ffffff, #cccccc), #c9c5c9;\n  border-radius: 10em;\n  border: 0 solid #d0d0d0;\n  width: 3em;\n  height: 3em;\n  margin-right: 20px;\n  box-shadow: 0 0.18em 0.21em rgba(0, 0, 0, 0.4);\n}\nmenu button:hover {\n  background: linear-gradient(#f5f5f5, #b9b9b9), #c9c5c9;\n}\nmenu button:before,\nmenu button:after {\n  position: absolute;\n  content: \" \";\n}\nmenu button:active {\n  top: 0.15em;\n  box-shadow: 0 0.06em 0.09em rgba(0, 0, 0, 0.4);\n}\nmenu .play:before {\n  z-index: 2;\n  top: 0.66em;\n  left: 1.08em;\n  width: 0;\n  height: 0;\n  border: 0.9em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 1.35em;\n}\nmenu .play:hover:before {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu .stop:before {\n  top: 0.84em;\n  left: 0.84em;\n  width: 1.41em;\n  height: 1.41em;\n  background: rgba(100, 100, 100, 0.8);\n}\nmenu .stop:hover:before {\n  background: rgba(36, 36, 36, 0.8);\n}\nmenu .ff:before,\nmenu .ff:after {\n  width: 0;\n  height: 0;\n  top: 0.78em;\n  border: 0.75em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 0.81em;\n}\nmenu .ff:before {\n  left: 0.9em;\n}\nmenu .ff:after {\n  left: 1.698em;\n  content: \" \";\n}\nmenu .ff:hover:before,\nmenu .ff:hover:after {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu .rw:before,\nmenu .rw:after {\n  width: 0;\n  height: 0;\n  top: 0.78em;\n  border: 0.75em solid transparent;\n  border-right-color: rgba(100, 100, 100, 0.8);\n  border-right-width: 0.81em;\n}\nmenu .rw:before {\n  left: 0.66em;\n}\nmenu .rw:after {\n  left: -0.15em;\n  content: \" \";\n}\nmenu .rw:hover:after,\nmenu .rw:hover:before {\n  border-right-color: rgba(36, 36, 36, 0.8);\n}\nmenu .pause:before,\nmenu .pause:after {\n  height: 1.41em;\n  width: 0.57em;\n  left: 0.87em;\n  top: 0.84em;\n  display: block;\n  background-color: rgba(100, 100, 100, 0.8);\n}\nmenu .pause:after {\n  left: 1.62em;\n}\nmenu .pause:hover:before,\nmenu .pause:hover:after {\n  background-color: rgba(36, 36, 36, 0.8);\n}\nmenu.medium {\n  /* Play */\n  /* Stop */\n  /* Fast-Forward */\n  /* Rewind */\n  /* Pause */\n}\nmenu.medium button {\n  position: relative;\n  display: inline-block;\n  padding: .6em;\n  background: linear-gradient(#ffffff, #cccccc), #c9c5c9;\n  border-radius: 10em;\n  border: 0 solid #d0d0d0;\n  width: 5em;\n  height: 5em;\n  margin-right: 20px;\n  box-shadow: 0 0.3em 0.35em rgba(0, 0, 0, 0.4);\n}\nmenu.medium button:hover {\n  background: linear-gradient(#f5f5f5, #b9b9b9), #c9c5c9;\n}\nmenu.medium button:before,\nmenu.medium button:after {\n  position: absolute;\n  content: \" \";\n}\nmenu.medium button:active {\n  top: 0.25em;\n  box-shadow: 0 0.1em 0.15em rgba(0, 0, 0, 0.4);\n}\nmenu.medium .play:before {\n  z-index: 2;\n  top: 1.1em;\n  left: 1.8em;\n  width: 0;\n  height: 0;\n  border: 1.5em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 2.25em;\n}\nmenu.medium .play:hover:before {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu.medium .stop:before {\n  top: 1.4em;\n  left: 1.4em;\n  width: 2.35em;\n  height: 2.35em;\n  background: rgba(100, 100, 100, 0.8);\n}\nmenu.medium .stop:hover:before {\n  background: rgba(36, 36, 36, 0.8);\n}\nmenu.medium .ff:before,\nmenu.medium .ff:after {\n  width: 0;\n  height: 0;\n  top: 1.3em;\n  border: 1.25em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 1.35em;\n}\nmenu.medium .ff:before {\n  left: 1.5em;\n}\nmenu.medium .ff:after {\n  left: 2.83em;\n  content: \" \";\n}\nmenu.medium .ff:hover:before,\nmenu.medium .ff:hover:after {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu.medium .rw:before,\nmenu.medium .rw:after {\n  width: 0;\n  height: 0;\n  top: 1.3em;\n  border: 1.25em solid transparent;\n  border-right-color: rgba(100, 100, 100, 0.8);\n  border-right-width: 1.35em;\n}\nmenu.medium .rw:before {\n  left: 1.1em;\n}\nmenu.medium .rw:after {\n  left: -0.25em;\n  content: \" \";\n}\nmenu.medium .rw:hover:after,\nmenu.medium .rw:hover:before {\n  border-right-color: rgba(36, 36, 36, 0.8);\n}\nmenu.medium .pause:before,\nmenu.medium .pause:after {\n  height: 2.35em;\n  width: 0.95em;\n  left: 1.45em;\n  top: 1.4em;\n  display: block;\n  background-color: rgba(100, 100, 100, 0.8);\n}\nmenu.medium .pause:after {\n  left: 2.7em;\n}\nmenu.medium .pause:hover:before,\nmenu.medium .pause:hover:after {\n  background-color: rgba(36, 36, 36, 0.8);\n}\nmenu.small {\n  /* Play */\n  /* Stop */\n  /* Fast-Forward */\n  /* Rewind */\n  /* Pause */\n}\nmenu.small button {\n  position: relative;\n  display: inline-block;\n  padding: .6em;\n  background: linear-gradient(#ffffff, #cccccc), #c9c5c9;\n  border-radius: 10em;\n  border: 0 solid #d0d0d0;\n  width: 3em;\n  height: 3em;\n  margin-right: 20px;\n  box-shadow: 0 0.18em 0.21em rgba(0, 0, 0, 0.4);\n}\nmenu.small button:hover {\n  background: linear-gradient(#f5f5f5, #b9b9b9), #c9c5c9;\n}\nmenu.small button:before,\nmenu.small button:after {\n  position: absolute;\n  content: \" \";\n}\nmenu.small button:active {\n  top: 0.15em;\n  box-shadow: 0 0.06em 0.09em rgba(0, 0, 0, 0.4);\n}\nmenu.small .play:before {\n  z-index: 2;\n  top: 0.66em;\n  left: 1.08em;\n  width: 0;\n  height: 0;\n  border: 0.9em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 1.35em;\n}\nmenu.small .play:hover:before {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu.small .stop:before {\n  top: 0.84em;\n  left: 0.84em;\n  width: 1.41em;\n  height: 1.41em;\n  background: rgba(100, 100, 100, 0.8);\n}\nmenu.small .stop:hover:before {\n  background: rgba(36, 36, 36, 0.8);\n}\nmenu.small .ff:before,\nmenu.small .ff:after {\n  width: 0;\n  height: 0;\n  top: 0.78em;\n  border: 0.75em solid transparent;\n  border-left-color: rgba(100, 100, 100, 0.8);\n  border-left-width: 0.81em;\n}\nmenu.small .ff:before {\n  left: 0.9em;\n}\nmenu.small .ff:after {\n  left: 1.698em;\n  content: \" \";\n}\nmenu.small .ff:hover:before,\nmenu.small .ff:hover:after {\n  border-left-color: rgba(36, 36, 36, 0.8);\n}\nmenu.small .rw:before,\nmenu.small .rw:after {\n  width: 0;\n  height: 0;\n  top: 0.78em;\n  border: 0.75em solid transparent;\n  border-right-color: rgba(100, 100, 100, 0.8);\n  border-right-width: 0.81em;\n}\nmenu.small .rw:before {\n  left: 0.66em;\n}\nmenu.small .rw:after {\n  left: -0.15em;\n  content: \" \";\n}\nmenu.small .rw:hover:after,\nmenu.small .rw:hover:before {\n  border-right-color: rgba(36, 36, 36, 0.8);\n}\nmenu.small .pause:before,\nmenu.small .pause:after {\n  height: 1.41em;\n  width: 0.57em;\n  left: 0.87em;\n  top: 0.84em;\n  display: block;\n  background-color: rgba(100, 100, 100, 0.8);\n}\nmenu.small .pause:after {\n  left: 1.62em;\n}\nmenu.small .pause:hover:before,\nmenu.small .pause:hover:after {\n  background-color: rgba(36, 36, 36, 0.8);\n}\n/*\nThe buttons mixin that defines the buttons styles, the @size must be defined to set the relative size\n*/\n/*\nOther Styles\n*/\nbody {\n  background: #c1c1c1;\n}\n\n\n\n\n/* ///////////////////////////////// */\n\n\n.browsercast-time-label {\n    z-index: 1;\n    background-color: grey;\n    font-family: lato;\n    color: #DDD;\n    text-shadow: #555 1px 1px 1px;\n    padding: 0 5px;\n    border-radius: 2px;\n    /*\n      height: 100px;\n      width: 100px;\n      */\n    font-size: 10px;\n    display: inline-block;\n    position: absolute;\n    left: 0%;\n    transition: left 200ms linear;\n    top: -17px;\n    transform: translate(-50%, 0) translate(-3px, 0);\n}\n.browsercast-time-label:after {\n    content: ' ';\n    height: 0;\n    position: absolute;\n    width: 0;\n    \n    border: 7px solid transparent;\n    border-top-color: grey;\n    \n    top: 100%;\n    left: 50%;\n    margin-left: -7px;\n}\n\n\n/* ///////////////////////// */\nmenu {\n    padding: 0;\n    margin: 0;\n}\n\nmenu .playpause {\n    position: absolute;\n    left: 0;\n    top: 0;\n    font-size: 12px;\n    margin: 0; padding: 0;\n}\n\n.browsercast-markers {\n    position: absolute;\n    top: 1em; height: 10px;\n    left: 3em; right: 1em;\n    background-color: #e3e3e3;\n}\n") }