# kia-animation
js package for animation on scroll

## how to use kia animation
js file 
```
import kia from 'kia-animation'
import 'kia-animation/kia.css'
kia("#scrollable-element")
```

html element
```
    <div id="scrollable-element" style="height:90px;overflow-y: scroll;">
        <article data-kia="slide-right">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.   Expedita, aperiam saepe. Ut cum reiciendis temporibus veniam,     eaque eius quibusdam quam, adipisci dolores facere incidunt     expedita illum atque eligendi fuga magni
        </article>

        <p data-kia="slide-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, aperiam saepe. Ut cum reiciendis temporibus veniam, eaque eius quibusdam quam, adipisci dolores facere incidunt expedita illum atque eligendi fuga magni?
        </p>
    </div>
```