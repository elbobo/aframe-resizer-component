# aframe-resizer-component
An A-frame component that resizes an object in relation to its distance from the camera, maintaining its perceived size by rescaling the entity for use with avatar labels, map labels or similar.

![Resizer component demo](https://github.com/elbobo/aframe-resizer-component/blob/master/RESIZERDEMO.gif?raw=true)

# Usage
Include the script as in the below example, and simply add `resizer` to your entity

```html
  <head>
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/elbobo/aframe-resizer-component/06b89743/dist/0.1/aframe-resizer-component.js"></script>
  </head>
  <body>
    <a-scene>
        <a-text 
          id="tester"
          resizer
          value="Hello!"
          scale="0.3 0.3 0.3"
          position="0 1.2 -3"
          align="center"
          color="black">
        </a-text>
    </a-scene>
  </body>
```
# Recommended
Use the `resizer` component in combination a `look-at` component to ensure your labels are always legible not just in terms of distance but also the entities rotation relative to the camera. Examples of those components can be found [here](https://www.npmjs.com/package/aframe-look-at-component) and [here](https://github.com/blairmacintyre/aframe-look-at-billboard-component)

# Notes
The resizer works by adjusting the `scale` component of the entity therefore your `scale` attributes will be overwritten. It will maintain the proportions however so if for example you had `scale="1 2 1"` this proportion would be maintained.

The `resizer` component can be added to child entities as it checks for its world position, rather than its relative position.

Credit to user 'prisoner849' on stack overflow for the three.js logic for this component. See that in the chosen answer to this question on SO [here](https://stackoverflow.com/questions/40446915/three-js-keep-label-size-on-zoom) 

Feedback welcome.


