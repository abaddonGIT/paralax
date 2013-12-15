/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 0.0.1
 * ***************************************************/
/*global window, $, jQuery, document */
(function ($) {
    "use strict";
    var w = window, d = document, $W = $(w), $D = $(d), $el = null, that = null,
        support,
        blocks = null,
        ln = null,
    //размеры окна
        innerWidth = w.innerWidth || d.documentElement.clientWidth,
        innerHeight = w.innerHeight || d.documentElement.clientHeight;

    var Paralax = function (el, options) {
        $el = $(el);
        that = el;

        this.init = function () {
            this.declareVars();
            this.bindEvent();
        };

        /*
        * Объевление переменных
        */
        this.declareVars = function () {
            //Определяем поддержывает ли браузер свойство transition
            var thisStyle = that.style;
            support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;

            //Находим все внутренние блоки
            if (!blocks) {
                blocks = d.querySelectorAll(options.layerClass);
                ln = blocks.length;
            }
        };
        /*
        * Вешает события
        */
        this.bindEvent = function () {
            //Наведение на контейнер
            this.addEvent('mousemove', el, paralax.action.move);
        }

        /*
        * Действия
        */
        this.action = {
            move: function (e) {
                //находим координаты мыши
                var cords = paralax.getXY(e), blockLeft, blockTop;

                //Проходим по всем словам
                for (var i = 0; i < ln; i++) {
                    var loc = blocks[i],
                        shift = loc.getAttribute('data-shift'); //коэффициет сдвига

                    //Смещение по x
                    blockLeft = shift * (0.5 * innerWidth - cords.mouseX);
                    //Смешение по y
                    blockTop = shift * (0.5 * innerHeight - cords.mouseY);

                    if (options.differentSides) {
                        if (i % 2 === 0) {
                            loc.style.cssText = paralax.getCssString(blockLeft, blockTop);
                        } else {
                            loc.style.cssText = paralax.getCssString(blockLeft, blockTop, -1);
                        }
                    } else {
                        loc.style.cssText = paralax.getCssString(blockLeft, blockTop);
                    }
                }
            }
        };
        /*
        * Формирует css строку
        */
        this.getCssString = function (blockLeft, blockTop, mod) {
            var cssString = '';

            if (mod === undefined) {
                mod = 1;
            }

            if (!support) {
                cssString = 'left:' + blockLeft + 'px;' + 'top:' + blockTop + 'px;';
            } else {
                cssString = '-webkit-transition: -webkit-transform 1s easy;' +
                            '-moz-transition: -moz-transform 1s easy;' +
                            '-ms-transition: -ms-transform 1s easy;' +
                            '-o-transition: -o-transform 1s easy;' +
                            '-moz-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop + 'px, 0px);' +
                            '-ms-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop + 'px, 0px);' +
                            '-o-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop + 'px, 0px);' +
                            '-webkit-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop + 'px, 0px)';
            }

            return cssString;
        };

        var paralax = this;
    };
    /*
    * Регистрирует события
    */
    Paralax.prototype.addEvent = function (type, el, func) {
        el.addEventListener(type, function (event) {
            var e = event || w.event;
            func.call(this, e);
        }, false);
    };

    /*
    * Получение координат мыши
    */
    Paralax.prototype.getXY = function (e) {
        //если IE 
        if (!e.pageX) {
            var html = d.documentElement;
            var body = d.body;

            e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
            e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
        }

        return { 'mouseX': e.pageX, 'mouseY': e.pageY };
    };

    $.fn.woolParalax = function (options) {
        //Дефолтовые настройки
        var defOption = {
            'layerClass': '.wool-layer',
            'differentSides': true//Если установлено в true то четные и нечетные слои будут двигаться в разные чтороны
        };

        $.extend(defOption, options);

        return this.each(function () {
            var paralax = new Paralax(this, defOption);
            paralax.init();
        });
    }
} (jQuery));