class Plinko{
     
    constructor( x , y , width , height){
      
        var options ={
            isStatic:true
        }
        
        
        this.body = Bodies.circle(x,y,this.radius,options);
        this.radius = radius;
        world.add(World,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x , pos.y);
        rotate(angle);

        noStroke();
        fill("white");
        
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}