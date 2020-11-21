let work = 33;
let theWorld = 24000;
let runErrands = 30;



class Silvia{
    constructor(make,model,year,milage,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }

    driveToWork() {

        console.log(`Old milage (${this.milage}) and New milage (${this.milage + work})`);
        return this.milage = this.milage + work;
    };

    driveAroundTheWorld() {
        console.log(`Old milage (${this.milage}) and New milage (${this.milage + theWorld})`);
        return this.milage = this.milage + theWorld;
    };

    runErrands() {
        console.log(`Old milage (${this.milage}) and New milage (${this.milage + runErrands})`);
        return this.milage = this.milage + runErrands;
    };
}

const silvia = new Silvia("Nissan","S14",1995, 2350,"Black");

silvia.driveToWork();
silvia.driveAroundTheWorld();
silvia.runErrands();
console.log(silvia);