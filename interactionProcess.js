const interaction = document.getElementById("interaction")

for(
    let i = 0; 
    i < numberOfInteraction*(1000)*(timeOfOneInteraction); 
    i+=(1000)*(timeOfOneInteraction)
) {
    setTimeout(() => {interaction.click()}, i)
    
    conditionToStop()

}