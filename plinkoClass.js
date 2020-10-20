class Plinko{
    constructor(x, y){
        var options={
            isStatic:true,
            restitution:1,
            friction:0.5,
            density: 0.3
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10
        World.add(world, this.body);
    }

    display(){
        push()
            fill("white")
            circle(this.body.position.x, this.body.position.y, 10)
        pop()
    }
}