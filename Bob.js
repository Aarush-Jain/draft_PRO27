class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:1.0,
            friction:0.5,
            density:1.0
        };
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body)
    };

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(pos.x,pos.y,this.radius);
    };
};