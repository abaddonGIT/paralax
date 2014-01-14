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
        queryApi,
        config = {},
        sprites = {},
        blocks = null,
        ln = null,
    //размеры окна
        innerWidth = null,
        innerHeight = null;

    var Paralax = function (strategy) {
        this.strategy = strategy;
    };

    Paralax.prototype.start = function (el, defOption) {
        return this.strategy.init(el, defOption);
    };

    //Что-то типа абстрактного класса
    var GetParalax = function () { };

    //Описываем необходимые методы
    GetParalax.prototype.init = function (el, options) {
        that = el;
        var thisStyle = that.style;
        //Проверка на поддержку css-transform
        support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
        queryApi = d.querySelector || false;
        config = options;
        innerWidth = w.innerWidth || d.documentElement.clientWidth,
        innerHeight = w.innerHeight || d.documentElement.clientHeight;

        if (!blocks) {
            blocks = d.querySelectorAll(config.layerClass);
            ln = blocks.length;
        }
        this.go();
    };

    GetParalax.prototype.go = function () { };
    /*
    * Получение координатов мыши
    */
    GetParalax.prototype.getXY = function (e) {
        //если IE 
        if (!e.pageX) {
            var html = d.documentElement;
            var body = d.body;

            e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
            e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
        }
        return { 'mouseX': e.pageX, 'mouseY': e.pageY };
    };

    /*
    * Регистрирует событие
    */
    GetParalax.prototype.addEvent = function (type, el, func) {
        el.addEventListener(type, function (event) {
            var e = event || w.event;
            func.call(this, e);
        }, false);
    };

    /*
    * Определяет размеры блока по контенту
    */
    GetParalax.prototype.sizes = function (el) {
        return sizes = {
            height: el.outerHeight(),
            width: el.outerWidth()
        };
    };

    //Базовая стратегия
    var BaseParalaxStr = function () {
        /*
        * Запускаем паралакс
        */
        this.go = function () {
            this.addEvent('mousemove', that, base.move);
        }

        this.move = function (e) {
            //находим координаты мыши
            var cords = base.getXY(e), blockLeft, blockTop;

            //Проходим по всем словам
            for (var i = 0; i < ln; i++) {
                var loc = blocks[i],
                    shift = loc.getAttribute('data-shift'); //коэффициет сдвига

                //Смещение по x
                blockLeft = shift * (0.5 * innerWidth - cords.mouseX);
                //Смешение по y
                blockTop = shift * (0.5 * innerHeight - cords.mouseY);

                if (config.differentSides) {
                    if (i % 2 === 0) {
                        loc.style.cssText = base.getCssString(blockLeft, blockTop);
                    } else {
                        loc.style.cssText = base.getCssString(blockLeft, blockTop, -1);
                    }
                } else {
                    loc.style.cssText = base.getCssString(blockLeft, blockTop);
                }
            }
        }

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
                            '-moz-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop * mod + 'px, 0px);' +
                            '-ms-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop * mod + 'px, 0px);' +
                            '-o-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop * mod + 'px, 0px);' +
                            '-webkit-transform: translate3d(' + blockLeft * mod + 'px, ' + blockTop * mod + 'px, 0px)';
            }

            return cssString;
        };

        var base = this;
    };

    BaseParalaxStr.prototype = Object.create(GetParalax.prototype);

    //Для горизонтального паралакса
    var VerticalParalaxStr = function () {
        this.go = function () {
            var spLen = 0;
            //остальные подвижные элементы
            sprites = d.querySelectorAll('[data-type="floating"]');
            spLen = sprites.length;

            //сохраняем начальное положение элементов
            while(spLen--) {
                var spLoc = sprites[ln];
                spLoc.offset = $(spLoc).offset();
            }

            if (config.autoHeight) {
                for (var i = 0; i < ln; i++) {
                    var loc = blocks[i],
                        img = loc.getAttribute('data-img');

                    loc.style.cssText += 'height: ' + innerHeight + 'px; background: url(' + img +') 50% 0 fixed;';
                }
            }

            this.addEvent('scroll',d, vertical.scroll);
        }

        this.scroll = function (e) {
            for (var i = 0; i < ln; i++) {
                var loc = blocks[i],
                    offsetTop = loc.offsetTop;

                if ( ($W.scrollTop() + innerHeight) > (offsetTop) && ((offsetTop + $(loc).height()) > $W.scrollTop())) {
                    var yPos = -($W.scrollTop() / $(loc).data('shift')); 
                
                    if ($(loc).data('offsety')) {
                        yPos += $(loc).data('offsety');
                    }
                
                    var coords = '50% '+ yPos + 'px';
                    $(loc).css({ backgroundPosition: coords });


                }

                //Анимируем внутренние части
            }
        };

        var vertical = this;
    };

    VerticalParalaxStr.prototype = Object.create(GetParalax.prototype);

    $.fn.woolParalax = function (options) {
        //Дефолтовые настройки
        var defOption = {
            'type': 'none', //none, horizont, vertical
            'autoHeight': true,
            'layerClass': '.wool-layer',
            'contentClass': '.wool-layer-content',
            'differentSides': true//Если установлено в true то четные и нечетные слои будут двигаться в разные чтороны
        };

        $.extend(defOption, options);

        return this.each(function () {

            switch (defOption.type) {
                case 'none':
                    var paralax = new Paralax(new BaseParalaxStr());
                    paralax.start(this, defOption);
                    break;
                case 'horizont':
                    var paralax = new Paralax(new VerticalParalaxStr());
                    paralax.start(this, defOption);
                    break;
            }
        });
    }
} (jQuery));