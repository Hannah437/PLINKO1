class Division{
    constructor(x){
     var options =  {
         isStatic : true
     }

     this.division = Bodies.rectangle(x, 490, 10, 200, options);
     World.add(world, this.division);
    }

    display(){
      rectMode(CENTER);
      rect(this.division.position.x, this.division.position.y, 10,200);
    }
}