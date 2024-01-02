// // Reverses a string.
// function reverse(string) {
//     return Array.from(string).reverse().join("");
// }
// function Phrase(content) {
//     this.content = content;
//     this.processor = function (string) {
//         return string.toLowerCase();
//     }
//     this.processedContent = function processedContent() {
//         return this.processor(this.content);
//     }
// }

//     // Adds `reverse` to all strings.
// String.prototype.reverse = function() {
//     return Array.from(this).reverse().join("");
//     }
//     // Defines a Phrase object.
//     function Phrase(content) {
//     this.content = content;
//     // Returns content processed for palindrome testing.
//     this.processedContent = function processedContent() {
//     return this.content.toLowerCase();
//     }

//      // Returns the letters in the content.
// // For example:
// // new Phrase("Hello, world!").letters() === "Helloworld"
// this.letters = function letters() {
//     let theLetters = [];
//     for (let i = 0; i < this.content.length; i++) {
//     if (this.content.charAt(i).match(/[a-zA-Z]/)) {
//     theLetters.push(this.content.charAt(i));
//     }
//     }
//     return theLetters.join("");
//     }


//     // Returns the letters in the content.
//     this.letters = function letters() {
//       return this.content; // stub return value
//       }
//     // Returns true if the phrase is a palindrome, false otherwise.
//     this.palindrome = function palindrome() {
//         return this.processedContent() === reverse(this.processedContent());
//     }
// }
// function TranslatedPhrase(content, translation) {
//     this.content = content;
//     this.translation = translation;


//     // Returns translation processed for palindrome testing.
//     this.processedContent = function processedContent() {
//         return this.processor(this.translation);
//     }
// }
// TranslatedPhrase.prototype = new Phrase();
// frase = new TranslatedPhrase("recognize", "reconocer");
// console.log(frase.palindrome()); 

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
    }
    // Defines a Phrase object.
    function Phrase(content) {
    this.content = content;
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
    }
    // Returns the letters in the content.
    // For example:
    // new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
        return (this.content.match(/[a-z]/gi) || []).join("");
    }
    
    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.processedContent() ===
    this.processedContent().reverse();
    }
}

module.exports = Phrase;

  