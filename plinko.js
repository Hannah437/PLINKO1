class Plinko{
    constructor(x, y){
     var options =  {
         isStatic : true
     }

     this.plinko = Bodies.circle(x, y, 10, options);
     World.add(world, this.plinko);
    }

    display(){
      ellipseMode(CENTER);
      ellipse(this.plinko.position.x, this.plinko.position.y, 20, 20);
    }
}