class Box {
  constructor(x, y, width, height){
      var options = {
          restitution:0.3,
          friction:0,
          density:0.5
      }
      
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
    display() {
        if(this.body.speed < 3) {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill(135, 205, 264);
            rect(0, 0, this.width, this.height);
            pop();
        }else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility-5;
            tint(255,this.Visiblity);
            pop();
        } 
    }
}
