class FindWally{
    constructor(){
        this.points=0;
        this.timers = 10;
        this.wally = ();
    }
}

gainPoints(){
    if(this.wally !==0){
        this.points += 1
    }
}

isTimeOver(){
    if(this.timers === 0){
        return "Game Over!"
    }
}