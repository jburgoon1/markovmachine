/** Textual markov chain generator */
const word = require('./makeText')
const markovChain = {}
class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    text = word.word
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i].toLowerCase().replace(/[\W_]/, "")
      if (!markovChain[word]) {
        markovChain[word] = []
        }
      if (this.words[i + 1]) {
        markovChain[word].push(this.words[i + 1].toLowerCase().replace(/[\W_]/, ""));
  }
  }
  console.log(markovChain)
  this.makeText(markovChain)
  }
  
  


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    const chainWords = Object.keys(markovChain)
    console.log(chainWords)
    let word = chainWords[Math.floor(Math.random() * chainWords.length)]
    
    let result = ''
    for (let i = 0; i < chainWords.length; i++ ) {
    result += word + ' ';
    let newWord =  markovChain[word][Math.floor(Math.random() * markovChain[word].length)]
    word = newWord;
    if (!word || !markovChain.hasOwnProperty(word)) word =chainWords[Math.floor(Math.random() * chainWords.length)]
  }
    console.log(result)
  }
}

new MarkovMachine(word.word)

exports.markov = MarkovMachine