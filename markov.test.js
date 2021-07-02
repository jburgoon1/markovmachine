const markov = require('./markov')
test('should return a random text string', function (){
    let mm = new markov('how are you')
    let word = mm.makeText.expect.any(String)
})