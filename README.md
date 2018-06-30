# aframe-resizer-component
An A-frame component that resizes an object in relation to its distance from the camera, for use with avatar labels or similar

![Resizer component demo](https://github.com/elbobo/aframe-resizer-component/blob/master/RESIZERDEMO.gif?raw=true)

# Usage
Include the script as in the below example, and simply add `resizer` to your entity

```html
  <head>
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="js/resizer.js"></script>
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


