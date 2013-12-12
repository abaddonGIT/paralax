/******************************************************
 * Copyright 2013 by Abaddon <abaddongit@gmail.com>
 * @author Abaddon <abaddongit@gmail.com>
 * @version 0.0.1
 * ***************************************************/
/*global window, $, jQuery, document */
(function ($) {
    "use strict";
    var w = window, d = document, $W = $(w), $D = $(d), $el = null,
        blocks = null,
        ln = null,
        innerWidth = w.innerWidth || d.documentElement.clientWidth,
        innerHeight = w.innerHeight || d.documentElement.clientHeight;

    var Paralax = function (el, options) {
        $el = $(el);

        this.init = function () {
            this.bindEvent();
        };
        /*
        * Вешает события
        */
        this.bindEvent = function () {
            //console.log($(el).width());
            //Наведение на контейнер
            this.addEvent('mouseenter', el, paralax.action.over);
        }

        /*
        * Действия
        */
        this.action = {
            over: function (e) {
                //Находим все внутренние блоки
                if (!blocks) {
                    blocks = d.querySelectorAll(options.layerClass);
                    ln = blocks.length;
                }

                //регистрируем событие перемещения
                paralax.addEvent('mousemove', this, paralax.action.move);
            },
            move: function (e) {
                var cordX = e.offsetX,
                    cordY = e.offsetY;

                var left = 100 * cordX / 1600,
                    top = 100 * cordY / 600,
                    ratX = options.rationX;
                //console.log(marginLeft);
                //magic
                for (var i = 0; i < ln; i++) {
                    var loc = blocks[i], marginLeft = cordX * ratX, marginTop = cordY * ratX;
                    loc.style.cssText = 'left:' + left + 'px; margin-left: -' + marginLeft + 'px; top:' + top + 'px; margin-top: -' + marginTop + 'px;';
                    ratX = ratX + 0.02;
                    /*top = $(loc).position().top,
                    left = $(loc).position().left;
                    */
                }
            }
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


    $.fn.woolParalax = function (options) {
        //Дефолтовые настройки
        var defOption = {
            'layerClass': '.wool-layer',
            'rationX': 0.1
        };

        $.extend(defOption, options);

        return this.each(function () {
            var paralax = new Paralax(this, defOption);
            paralax.init();
        });
    }
} (jQuery));