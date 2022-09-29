// Code your solution in this file!

function distanceFromHqinBlocks (){
    const headQuaters =42
    if (headQuaters<42){
        return 42 - headQuaters
    }
}

function distanceFromHqinFeet (distanceFromHqinBlocks){
    return distanceFromHqinBlocks * 264
}

function distanceTravelledInFeet (start, destination){
    if (start>destination){
        return (start-destination)*264
    }
    else {
        return (destination-start)*264
    }
}

function calculatesFarePrice(distanceTravelledInFeet){
    if (distanceTravelledInFeet < 400){
        return 0
    }
    else if (distanceTravelledInFeet >= 400 && distanceTravelledInFeet<= 2000){
        return (distanceTravelledInFeet-400)*2
    }
    else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet < 2500){
        return 30
    }
    else {
        return "cannot travel that far"
    }
}