class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/w.png");
  }
  display(){

    if(this.body.speed<13){
      super.display();
    }
    else{
      World.remove(world, this.body);
    
    
    }
    
    }
    }


