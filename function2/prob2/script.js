let EmotionData = {};

function EmotionEntry(name, greet) {
    let username=Symbol(name)
    EmotionData[username] = greet
    
}

EmotionEntry('vivek', 'hi')
EmotionEntry('vivek', 'hello')
EmotionEntry('sohan', 'hello')
EmotionEntry('mohan', 'good')
EmotionEntry('sohan', 'bad')
EmotionEntry('mohan', 'bad')
EmotionEntry('mohan', 'hello')


console.log(EmotionData);

