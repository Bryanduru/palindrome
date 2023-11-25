// // Reverses a string.
// function reverse(string) {
//     return Array.from(string).reverse().join("");
//     }
//     // Defines a Phrase object.
//     function Phrase(content) {
//     this.content = content;
//     // Returns true if the phrase is a palindrome, false otherwise.
//     this.palindrome = function palindrome() {
//     let processedContent = this.content.toLowerCase();
//     return processedContent === reverse(processedContent);
//     }
//     //Makes the phrase LOUDER.
//     this.louder = function louder() {
//         let loudContent = this.content.toUpperCase();
//         return loudContent;
//     }
//     }
//     let word = new Phrase("level")
//     console.log(word.louder())

// Reverses a string.
//----------------------------------------------------------------------------------------------------------------------------------------
// function reverse(string) {
//     return Array.from(string).reverse().join("");
//     }
//     // Defines a Phrase object.
//     function Phrase(content) {
//     this.content = content;
//     // Returns content processed for palindrome testing.
//     this.processedContent = function processedContent() {
//     return this.content.toLowerCase();
//     }
//     // Returns true if the phrase is a palindrome, false otherwise.
//     this.palindrome = function palindrome() {
//     return this.processedContent() === reverse(this.processedContent());
//     }
//     }
//     // Defines a TranslatedPhrase object.
//     function TranslatedPhrase(content, translation) {
//     this.content = content;
//     this.translation = translation;
//     // Returns translation processed for palindrome testing.
//     this.processedContent = function processedContent() {
//     return this.translation.toLowerCase();
//     }
//     }
//--------------------------------------------------------------------------------------------------------------------

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

//--------------------------------------------------------------------------------------------------------------------------------------

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
    }
    // Defines a Phrase object.
    function Phrase(content) {
    this.content = content;
    // Returns content processed for palindrome testing.
    this.processedContent = function processedContent() {
    return this.content.toLowerCase();
    }
    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
    return this.processedContent() ===
    this.processedContent().reverse();
    }
    }

    let frase = new Phrase ("level");
    console.log(frase.palindrome())