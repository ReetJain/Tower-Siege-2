const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1, block2, block3;

function preload() {
  img = loadImage('polygon.png');
}

function setup() {
    createCanvas(1200, 450);
    
    engine = Engine.create();
    world = engine.world

    ground = new Ground(600, 400, 350, 20);

    //first line first
    block1 = new Box(471, 362, 40, 55);
    block2 = new Box(512, 362, 40, 55);
    block3 = new Box(553, 362, 40, 55);
    block4 = new Box(594, 362, 40, 55);
    block5 = new Box(635, 362, 40, 55);
    block6 = new Box(676, 362, 40, 55);
    block7 = new Box(717, 362, 40, 55);
    
    //first line second
    block8 = new Box(512, 307, 40, 55);
    block9 = new Box(553, 307, 40, 55);
    block10 = new Box(594, 307, 40, 55);
    block11 = new Box(635, 307, 40, 55);
    block12 = new Box(676, 307, 40, 55);
    
    //first line third
    block13 = new Box(553, 251, 40, 55);
    block14 = new Box(594, 251, 40, 55);
    block15 = new Box(635, 251, 40, 55);
    
    //first line fourth
    block16 = new Box(594, 195, 40, 55);
    
    ground1 = new Ground(950, 270, 350, 20);
    
    //second line first
    block17 = new Box(821, 232, 40, 55);
    block18 = new Box(862, 232, 40, 55);    
    block19 = new Box(903, 232, 40, 55);    
    block20 = new Box(944, 232, 40, 55);
    block21 = new Box(985, 232, 40, 55);
    block22 = new Box(1026, 232, 40, 55);
    block23 = new Box(1067, 232, 40, 55);
    
    //second line second
    block24 = new Box(862, 176, 40, 55);
    block25 = new Box(903, 176, 40, 55);    
    block26 = new Box(944, 176, 40, 55);    
    block27 = new Box(985, 176, 40, 55);    
    block28 = new Box(1026, 176, 40, 55);
    
    //second line third
    block29 = new Box(903, 122, 40, 55);    
    block30 = new Box(944, 122, 40, 55);    
    block31 = new Box(985, 122, 40, 55);
    
    //second line fourth
    block32 = new Box(944, 68, 40, 55);

    mainground = new Ground(0, 445, 2400, 10);
    
    var options = {
        isStatic : false,
        friction : 1,
        density : 0.2,
        restitution : 0
    }
    polygon = Bodies.circle(110, 250, 20, options);
    World.add(world, polygon);
    
    slingshot = new Slingshot(this.polygon, {x: 105, y: 245}); 
}

function draw() {
    Engine.update(engine);
    background(56,44,44);
    
    imageMode(CENTER);
    image(img, polygon.position.x, polygon.position.y, 40, 40);

    ground.display();
    ground1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    
    mainground.display();
    
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(this.polygon, {x: 110, y: 250});
        slingshot.attach(this.polygon);
    }
}