AFRAME.registerComponent("auto",{
    schema:{
    route : {type : "string", default: "../models/scene.gltf"},
},
init: function(){
    this.el.setAttribute("gltf-model", this.data.route)
    const position = { x: 0, y: 50, z:80}
    const rotation = {x:0, y : -100, z:0}
    this.el.setAttribute("position", position)
    this.el.setAttribute("rotation", rotation)
    
}
}
)
