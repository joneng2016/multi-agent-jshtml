function target(positionX, positionY) {
    const newDiv = document.createElement("div")

    newDiv.id = "target"

    newDiv.style['border-radius'] = "100%";
    newDiv.style['background-color'] = "#e81a1af1";
    newDiv.style['width'] = "30px";
    newDiv.style['height'] = "30px";
    newDiv.style['top'] = "10px";
    newDiv.style['left'] = "350px";

    newDiv.style.left = positionX;
    newDiv.style.top = positionY;

    document.getElementById("main").appendChild(newDiv)
}

function artefact (idOfAtefact, positionX, positionY) {
    const newDiv = document.createElement("div")

    newDiv.id = `artefact-${idOfAtefact}`
    newDiv.style.width = "100px";
    newDiv.style.height = "20px";
    newDiv.style["background-color"] = "rgb(50 26 232 / 95%)";
    newDiv.style.top = positionY;
    newDiv.style.left = positionX;
    newDiv.style["border-radius"] = "15px";
    document.getElementById("main").appendChild(newDiv)
}

class Agent {
    constructor(idOfAgent, positionX, positionY, color = "rgb(0 0 0 / 95%)") {
        this.idOfAgent = `agent-${idOfAgent}`
        const newDiv = document.createElement("div")

        newDiv.id = this.idOfAgent

        newDiv.style['border-radius'] = "100%";
        newDiv.style['background-color'] = color;
        newDiv.style['width'] = "30px";
        newDiv.style['height'] = "30px";
        newDiv.style['top'] = "10px";
        newDiv.style['left'] = "350px";

        newDiv.style.left = positionX;
        newDiv.style.top = positionY;

        document.getElementById("main").appendChild(newDiv)
    }

    plusFivePxY() {
        const oldPosition = document.getElementById(this.idOfAgent).style.top.split("px")[0]
        const newPosition = parseInt(oldPosition)-5

        document.getElementById(this.idOfAgent).style.top = `${newPosition}px`
    }

    lessFivePxY() {
        const oldPosition = document.getElementById(this.idOfAgent).style.top.split("px")[0]
        const newPosition = parseInt(oldPosition)+5

        document.getElementById(this.idOfAgent).style.top = `${newPosition}px`
    }

    plusFivePxX() {
        const oldPosition = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        const newPosition = parseInt(oldPosition)+5

        document.getElementById(this.idOfAgent).style.left = `${newPosition}px`
    }

    lessFivePxX() {
        const oldPosition = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        const newPosition = parseInt(oldPosition)-5

        document.getElementById(this.idOfAgent).style.left = `${newPosition}px`
    }

    detectedWhatIsInFront () {
        let whatIsNearOfMe = []
        let myPositionInX = document.getElementById(this.idOfAgent).style.left.split("px")[0]
        let myPositionInY = document.getElementById(this.idOfAgent).style.top.split("px")[0]

        let elements = document.getElementById("main").children

        for (let element of elements) {
            if (element.id === this.idOfAgent) {
                continue
            }
            
            whatIsNearOfMe = positionOfElements(
                element,
                myPositionInX,
                myPositionInY,
                whatIsNearOfMe
            )

        }

        return whatIsNearOfMe
    }
}