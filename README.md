woolParalax
=======

Плагин на jQuery для реализации эффекта паралакса на CSS3

<h3>Параметры плагина:</h3>
<ul>
    <li><b>type</b> - тип эффекта ('vertical' - если эффект должен наблюдаться во время перемотки страницы, 'none' - движение слоев относительно одного стационарного блока);</li>
    <li><b>layerNav</b> - добавляет сслыки для переключения между слоями (для типа 'vertical');</li>
    <li><b>layerClass</b> - класс для блока, в котором должен быть реализован эффект;</li>
    <li><b>differentSides</b> - если установлено в true, то четные и нечетные слои будут двигаться в разные стороны</li>
</ul>
<h3>Пример типа "none"</h3>
<pre>
window.onload = function () {
    $('#wool-paralax').woolParalax();
}
</pre>
HTML (<a href="http://angular.demosite.pro/paralax/">Demo</div>)
<pre>
&lt;div id="wool-paralax">
    &lt;div class="wool-layer" data-shift="0.02"&gt;
        &lt;img src="img/1.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.03"&gt;
        &lt;img src="img/2.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.04"&gt;
        &lt;img src="img/3.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.05"&gt;
        &lt;img src="img/4.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.06"&gt;
        &lt;img src="img/5.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.07"&gt;
        &lt;img src="img/6.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.08"&gt;
        &lt;img src="img/7.png" alt="" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
Аттрибут <b>data-shift</b> - коэфициент сдвига
<h3>Пример типа "vertical"</h3>
<pre>
window.onload = function () {
    $('#wool-paralax').woolParalax({
        'type': 'vertical'
    });
}
</pre>
HTML (<a href="http://angular.demosite.pro/paralax/vertical.html">Demo</div>)
<pre>
&lt;div id="wool-paralax"&gt;
    &lt;div class="wool-layer" id="first" data-shift="12" data-img="img/brickwall.png"&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.3"&gt;
            &lt;img src="img/2.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="2.5"&gt;
            &lt;img src="img/3.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.4"&gt;
            &lt;img src="img/4.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="1.2"&gt;
            &lt;img src="img/5.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.3"&gt;
            &lt;img src="img/6.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="1.2"&gt;
            &lt;img src="img/7.png" alt=""/&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" id="second" data-shift="6" data-img="img/tree_bark.png"&gt;
        &lt;section class="wool-layer-content"&gt;
            &lt;div id="sun" data-type="floating" data-shift="-2.6" data-offsety="40"&gt;
                &lt;img src="img/sun.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="bear" data-type="floating" data-shift="-1.5" data-offsety="460"&gt;
                &lt;img src="img/bear.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="bany" data-type="floating" data-shift="2.2" data-offsety="600"&gt;
                &lt;img src="img/bany.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="wolf" data-type="floating" data-shift="-1.3" data-offsety="600"&gt;
                &lt;img src="img/wolf.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="trees" data-type="floating" data-shift="-2.2" data-offsety="300"&gt;&lt;/div&gt;
            &lt;div id="erth" data-type="floating" data-shift="-1.4" data-offsety="460"&gt;&lt;/div&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
Аттрибут <b>data-type</b> - показывает, что элемент должен "Плавать" внутри контейнера, <b>data-offsety</b> - отступ сверху для "Плавующего" элемента.
<hr />
woolParalax
=======

jQuery plugin for realization parallax effect on CSS3

<h3>Plugin settings:</h3>
<ul>
    <li><b>type</b> - type effect ('vertical' - if the effect has to be observed during page rewind, 'none' - movement of layers concerning one stationary block);</li>
    <li><b>layerNav</b> - Adds references for switching of layers (for 'vertical' type);</li>
    <li><b>layerClass</b> - block class, in which the effect has to be realized;</li>
    <li><b>differentSides</b> - if is true, that even and odd layers will move in different directions</li>
</ul>
<h3>Example for "none" type</h3>
<pre>
window.onload = function () {
    $('#wool-paralax').woolParalax();
}
</pre>
HTML (<a href="http://angular.demosite.pro/paralax/">Demo</div>)
<pre>
&lt;div id="wool-paralax">
    &lt;div class="wool-layer" data-shift="0.02"&gt;
        &lt;img src="img/1.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.03"&gt;
        &lt;img src="img/2.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.04"&gt;
        &lt;img src="img/3.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.05"&gt;
        &lt;img src="img/4.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.06"&gt;
        &lt;img src="img/5.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.07"&gt;
        &lt;img src="img/6.png" alt="" /&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" data-shift="0.08"&gt;
        &lt;img src="img/7.png" alt="" /&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
Attribute <b>data-shift</b> - shift coefficient
<h3>Example for "vertical" type</h3>
<pre>
window.onload = function () {
    $('#wool-paralax').woolParalax({
        'type': 'vertical'
    });
}
</pre>
HTML (<a href="http://angular.demosite.pro/paralax/vertical.html">Demo</div>)
<pre>
&lt;div id="wool-paralax"&gt;
    &lt;div class="wool-layer" id="first" data-shift="12" data-img="img/brickwall.png"&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.3"&gt;
            &lt;img src="img/2.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="2.5"&gt;
            &lt;img src="img/3.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.4"&gt;
            &lt;img src="img/4.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="1.2"&gt;
            &lt;img src="img/5.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="-2.3"&gt;
            &lt;img src="img/6.png" alt=""/&gt;
        &lt;/div&gt;
        &lt;div class="logo-item" data-type="floating" data-shift="1.2"&gt;
            &lt;img src="img/7.png" alt=""/&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="wool-layer" id="second" data-shift="6" data-img="img/tree_bark.png"&gt;
        &lt;section class="wool-layer-content"&gt;
            &lt;div id="sun" data-type="floating" data-shift="-2.6" data-offsety="40"&gt;
                &lt;img src="img/sun.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="bear" data-type="floating" data-shift="-1.5" data-offsety="460"&gt;
                &lt;img src="img/bear.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="bany" data-type="floating" data-shift="2.2" data-offsety="600"&gt;
                &lt;img src="img/bany.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="wolf" data-type="floating" data-shift="-1.3" data-offsety="600"&gt;
                &lt;img src="img/wolf.png" alt=""/&gt;
            &lt;/div&gt;
            &lt;div id="trees" data-type="floating" data-shift="-2.2" data-offsety="300"&gt;&lt;/div&gt;
            &lt;div id="erth" data-type="floating" data-shift="-1.4" data-offsety="460"&gt;&lt;/div&gt;
        &lt;/section&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
Attribute <b>data-type</b> - shows that the element has to "Float" in the container, <b>data-offsety</b> - space from above for "floating" of an element.