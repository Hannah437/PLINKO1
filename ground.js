class Ground{
    constructor(){
     var options =  {
         isStatic : true
     }

     this.ground = Bodies.rectangle(240, 590, 480, 10, options);
     World.add(world, this.ground);
    }

    display(){
      rectMode(CENTER);
      rect(this.ground.position.x, this.ground.position.y, 480,10);
    }
}