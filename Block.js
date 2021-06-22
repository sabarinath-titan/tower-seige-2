class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if((this.body.speed)>5){
       
        World.remove(world,this.body)
      
              }else{
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      
      stroke("black")
      strokeWeight(3)
      rect( 0, 0, 50,50);
     
      pop();
              }
    }
    
  }
