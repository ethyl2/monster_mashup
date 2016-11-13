# Monster Mashup

https://ethyl2.github.io/monster_mashup

This is a project that is based on code from Head First jQuery.
It uses jQuery methods for animation effects.

Clicking on different areas of a monster's face changes the image for that
part of the face.

The face images are strips which are shifted to the left, exposing different
parts of the face images' strips, using `animate()`.

The lightning effect is created with a quick `fadeIn()` chained with a `fadeOut()`,
all with a `setTimeout()`.

## How I Customized This project

1. I added sounds to the click handlers.

2. I refactored the code originially written to make it more compact, eliminating
duplicate code.
