var numberOfInteraction = 500
var timeOfOneInteraction = 0.02 //second

target("350px","10px")
artefact("artefactOne", "320px", "300px")

const agent = new Agent("agentOne","350px", "600px")

function main () {
    agent.plusFivePxY()
    agent.detectedWhatIsInFront()
}