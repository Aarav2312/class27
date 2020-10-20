class Chain{
    constructor(a,b){
        var option={
            bodyA:a,
            bodyB:b,
            stiffness:0.04,
            length:10
        }
        this.Chain=Matter.Constraint.create(option)
        World.add(world,this.Chain)
    }
    display(){
        var pointA=this.Chain.bodyA.position;
        var pointB=this.Chain.bodyB.position;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}