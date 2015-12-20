# CSS3 Animations

Safari still needs -webkit- prefixes.

## Usefull properties

Set animation direction `alternate` if you want to start when it ended.

`animation-play-state` can pause or play the animation (paused, running)

`animation-fill-mode` useful when you want the animation to stay in the last keyframe after played.

## 3d Transforms

`3d transforms` are now available in all the modern browsers.

`transform-origin` is set in the middle by default.

`back-face-visibility` to show the back face when rotating.

[](codepen://cuadraman/QbZqem)

[](codepen://cuadraman/XbdoGa?height=440)

### Children

```css
.parent {
  transform-style: preserve-3d; /* default. The children will inherit 3d styles */
  transform-style: flat; /* option2: The children will appear flat on the parent surface */
}
``` 

### Perspective
`perspective` indicates how 3d-ish will things appear. The lower the number, the more 3d-like.
It indicates the distance from the viewer to the object.

```css
.example {
  perspective: 500px; /* mid-range from */
  perspective: 1500px; /* very far away */
  perspective: 150px; /* very close */
}
``` 

`perspective-origin` establishes a vanishing point. 
```css
.example {
  perspective-origin: 50% 50%; /* center (default) */
  perspective-origin: 25% 25%; /* mid-upper left */
  perspective-origin: 50% 100%; /* center-bottom  */
}
```

## Sprite animations

Use `steps()` to animate using a sprite
```css
.sprite {
  background: transparent url(walker.png) 0 0 no-repeat;
  animation: walker 2s steps(10);
}
keyframes walker {
  0% { background-position: 0 0; }
  100% { background-position: 0 -4000px; }
}
```

## Chaining animations

Separate them with commas.

```css
.mol {
  animation-name: roll-in, scale-up;
  animation-duration: 1s, .75s;
  animation-delay: 0s, 1s; // Here you chain the sequence
  animation-iteration-count: 1, 1;
  animation-fill-mode: forwards, forwards;
}
keyframes roll-in { 
  // ...
}
keyframes scale-up {
  // ...
}
```

## Transitions

To animate the transition between CSS styles. Normally its used with hover but could be also used with programatically injected styles|classes.

`transition-property`
`transition-duration`

`transition-timing-function`
use `cubic-beziier(x1,y1,x2,y2)` for realistic movements
