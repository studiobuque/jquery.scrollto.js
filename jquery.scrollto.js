/*!
 * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
 * Scroll smooth to any element in your DOM.
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/17
 **/
(function ($) {
    $.scrollTo = $.fn.scrollTo = function(){
        var _args = Array.prototype.slice.call(arguments),
            x = _args[0],
            y = _args[1],
            options = _args[2],
            offset = null;

        if (!(this instanceof $)){
            return $.fn.scrollTo.apply($('html, body'), _args);
        }

        //just add a line of doc, to try a new git client
        if(typeof x === "string"){
            offset = $(x).offset();
            x = offset.left;
            y = offset.top;
        }

        options = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: 'swing',
                duration: 600,
                complete: $.noop,
                step: $.noop
            }
        }, options);

        return this.each(function(){
            var elem = $(this);
            elem.stop().animate({
                scrollLeft: !isNaN(Number(x)) ? x : $(x).offset().left + options.gap.x,
                scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
            }, options.animation);
        });
    };
})(jQuery);

