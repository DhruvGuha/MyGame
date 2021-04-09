class Boy{
constructor(){
var options={'restitution': 1}
this.body= Bodies.rectangle(100,50,50,64.5,options)
this.image=loadImage("Boy1.png")
World.add(world,this.body)
}

display(){
var angle= this.body.angle;

push()
translate(this.body.position.x,this.body.position.y)
rotate(angle)
imageMode(CENTER)

image(this.image,0,0,50,80)
pop()
}


}