let getEmotionData = {};

function EmotionEntry(name, greet) {
    getEmotionData[name] = greet
    
}

EmotionEntry('vivek', 'hi')
EmotionEntry('vivek', 'hi')
EmotionEntry('sd', 'hi')
console.log(getEmotionData);

