class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10     
             }
             this.pointB = pointB
             this.Slingshot = Constraint.create(options);
             World.add(world, this.Slingshot);       
             }
             fly(){
             this.Slingshot.bodyA = null;
              }

              attach(j){
             this.Slingshot.bodyA = j                
              }

             
   

             display(){

     
                if(this.Slingshot.bodyA){
            
                    var pointA = this.Slingshot.bodyA.position;
                    var pointB = this.pointB;
                    
                    stroke("lightblue")
                    strokeWeight(3);
        
                  
                    line(pointA.x, pointA.y, pointB.x, pointB.y);
                    line(pointA.x, pointA.y, pointB.x, pointB.y);
                   
                   
                   
        
        
                    }
              }
            }
        