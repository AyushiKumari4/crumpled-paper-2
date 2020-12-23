class dustbin{
    constructor(x,y){
     var options = {
         isStatic : true,
     }
     this.body = Bodies.rectangle(x,y,0,0,options)
     this.width=20;
     this.height=20;
     this.image=loadImage("dustbingreen.png")
     World.add(world,this.body);
    }
    display(){
       
        var pos = this.body.position;
        rectMode(CENTER);
        fill("grey")
        stroke("grey")
        rect(pos.x, pos.y, this.width,this.height);
      imageMode(CENTER);
      image(this.image, pos.x,pos.y,150, 150);
     }
    };
