# One level menu-accordion
Menu accordion on native javascript with CSS3

Live demo [here](http://embed.plnkr.co/KnFedKpOcfDf5cW6CHpv/).

View in open state:

![console output](https://github.com/cyberaktiv/menu_accordion/blob/master/test/close.png?raw=true)

View in close state:

![console output](https://github.com/cyberaktiv/menu_accordion/blob/master/test/open.png?raw=true)

### Include:
```html
<link rel="stylesheet" type="text/css" href="menu-accordion.css">
<script type="text/javascript" src="menu-accordion.js"></script>
```

### Example use:
Include in javascript
```javascript
    window.onload = function() {
        // ...
        MenuAccordion("menu-accordion");
        // ...
    }
```
Include in html
```html
<div id="menu-accordion">
    <p>First</p>
    <span>
        ...
        First content block
        ...
    </span>
    <p>Second</p>
    <span>
        ...
        Second content block
        ...
    </span>
    <p>Third</p>
    <span>
        ...
        Third content block
        ...
    </span>
    <p>Fourth</p>
    <span>
        ...
        Fourth content block
        ...
    </span>
    <p>Fifth</p>
    <span>
        ...
        Fifth content block
        ...
    </span>
</div>
```