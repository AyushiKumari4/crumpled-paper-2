class ball{
    constructor(x,y){
        var ballOption={
            restitution:0.3,
            density:1.2,
            friction:0.3,
            isStatic :false
          }
        this.Bodies =Bodies.circle(x,y,20,ballOption);
        //this.width = width;
        
        this.image = loadImage("paper.png");
        
        World.add(world,this.Bodies);
    }
   display(){
     var pos=this.Bodies.position
     fill("grey");
     ellipse(pos.x,pos.y,30,30)
    imageMode(CENTER);
    image(this.image, pos.x,pos.y,50, 50);
   }
}