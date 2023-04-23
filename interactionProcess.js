let exec = true;
const interaction = document.getElementById("interaction")

for(
    let i = 0; 
    i < numberOfInteraction*(1000)*(timeOfOneInteraction); 
    i+=(1000)*(timeOfOneInteraction)
) {
    setTimeout(() => {
        if (exec) {
            interaction.click()

            const nameOfTarget = conditionToStop()
            if (nameOfTarget) {
                document.getElementById("main").style.display = "none"
                document.getElementById("finalmessage").style.display = "block"
                document.getElementById("finalmessage").style["text-align"] = "center"
                document.getElementById("finalmessage").innerHTML = `${nameOfTarget} chegou ao destino`
                exec = false
            }
        }
    }, i)
}