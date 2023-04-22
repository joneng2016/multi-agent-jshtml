function positionOfElements(element,myPositionInX,myPositionInY,whatIsNearOfMe) {
    
    let elementId = element.id
    let positionXOfOther = element.style.left.split("px")[0]
    let positionYOfOther = element.style.top.split("px")[0]

    let diffPositionX = positionXOfOther - myPositionInX
    diffPositionX = diffPositionX < 0 ? diffPositionX * (-1) : diffPositionX
    
    let diffPositionY = positionYOfOther - myPositionInY
    diffPositionY = diffPositionY < 0 ? diffPositionY * (-1) : diffPositionY

    if (diffPositionX < 50 && diffPositionY < 50) {
        whatIsNearOfMe.push({
            elementId,
            positionXOfOther,
            positionYOfOther
        })
    }

    return whatIsNearOfMe
}

function conditionToStop () {


}