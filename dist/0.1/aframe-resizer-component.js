//A-frame resizer component
AFRAME.registerComponent('resizer', {
        
        dependencies: ['scale'],

        init: function(){
            
            this.getScale()
            
        },//end init
        
        update: function(){    
          
            this.getScale()
          
        },//end update
  
        tick: function(){
            
            //calculate the new scale
            var newScale = this.calcScale()
            
            //multiply by scale attribute to maintain desired proportions
            var x = newScale * this.originalScaleX
            var y = newScale * this.originalScaleY
            var z = newScale * this.originalScaleZ

            //set new scale on entity
            this.el.object3D.scale.set(x, y, z)
          
        },//end tick
  
        getScale: function(){
          
            //store original/updated scale attributes 
            //to put back on removal of component and use to multiply newscale to maintain desired propotions
            this.originalScaleX = this.el.getAttribute('scale').x
            this.originalScaleY = this.el.getAttribute('scale').y
            this.originalScaleZ = this.el.getAttribute('scale').z
          
        },//end getScale

        calcScale: function(){
            
            //get WORLD position of entity and camera, in case they are nested inside another entity

            //entity
            var thisWorldPos = new THREE.Vector3();
            thisWorldPos.setFromMatrixPosition(this.el.object3D.matrixWorld);

            //camera
            var camWorldPos = new THREE.Vector3();
            camWorldPos.setFromMatrixPosition(this.el.sceneEl.camera.el.object3D.matrixWorld)


            //make a new vector for newScale
            var scaleVector = new THREE.Vector3();

            //calculate distance (camPos - thisPos and the distance between) and create newScale
            var newScale = scaleVector.subVectors(thisWorldPos, camWorldPos).length() + 1
            
            //credit to @prisoner849 for his solution on stack overflow to this problem
            //https://stackoverflow.com/questions/40446915/three-js-keep-label-size-on-zoom

            //return newScale
            return newScale
        
        },//end calcScale
  
        remove: function(){

            //put scale back to original
            this.el.setAttribute('scale', {
              x: this.originalScaleX,
              y: this.originalScaleY,
              z: this.originalScaleZ,
            })
          
        },
        
})//end resizer