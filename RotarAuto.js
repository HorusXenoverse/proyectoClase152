AFRAME.registerComponent("rotationes",
{schema:{
    clickCounter:{type: "number", default: 0} ,
    route : {type : "string", default: "../models/scene.gltf"},
},

init: function(){
    this.el.setAttribute("gltf-model", this.data.route)
    const position = { x: 0, y: 50, z:80}
    const rotation = {x:0, y : -100, z:0}
    this.el.setAttribute("position", position)
    this.el.setAttribute("rotation", rotation)

},

update: function(){
    window.addEventListener("click", e =>{
        this.data.clickCounter = this.data.clickCounter + 1;
        if(this.data.clickCounter === 1){
            const rotation = {x: 0, y: 20, z: 0}
            this.el.setAttribute("rotation", rotation)
        } else if(this.data.clickCounter === 2){
            const rotation = {x: 0, y: 100, z:0}
            this.el.setAttribute("rotation", rotation)
        } else if(this.data.clickCounter === 3){
            const rotation = {x: 0, y: -200, z:0}
            this.el.setAttribute("rotation", rotation)
        } else if(this.data.clickCounter === 4){
            const rotation = {x: 0, y: -100, z:0}
            this.el.setAttribute("rotation", rotation)
        } else if(this.data.clickCounter === 5){
            const rotation = {x: 0, y: 195, z:0}
            this.el.setAttribute("rotation", rotation)
        }   
})

    
}
})