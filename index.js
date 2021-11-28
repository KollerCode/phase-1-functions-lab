function distanceFromHqInBlocks(distance) {
    const headquarters = 42
    if (distance > headquarters){
        return distance - headquarters;
    }
    else if (headquarters > distance){
        return headquarters - distance;
    }
}

function distanceFromHqInFeet(distance) {
    const headquarters = 42
    const block = 264
    if (distance > headquarters){
        return ((distance - headquarters) * block);
    }
    else if (headquarters > distance){
        return ((headquarters - distance) * block);
    }
}

function distanceTravelledInFeet(start, destination) {
    const block = 264
    if (start > destination) {
        return (start * block) - (destination * block)
    }
    else if (start < destination) {
        return (destination * block) - (start * block)
    }
}

function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination)

    if (travel <= 400) {
        return 0;
    }
    else if (travel >= 401 && travel <= 2000) {
        return (travel - 400) * 0.02;
        }
    else if (travel > 2000 && travel <= 2500) {
        return 25;
     }
    else {
        return "cannot travel that far"
    }
    
}