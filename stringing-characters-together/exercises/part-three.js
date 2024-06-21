//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));
//2. Without using slice(), use method chaining to accomplish the same thing.
let shortForm = language.substring(0, language.indexOf('S') + 1);
console.log(shortForm); 

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let initial = language[0] + language[4];
console.log(`The abbreviation for '${language}' is '${initial}'.`); 

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let initials = language.toUpperCase().slice(0, 1) + language.toLowerCase().slice(4, 5);
console.log(`The abbreviation for '${language}' is '${initials}'.`);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let words = notTitleCase.split(' ');

// Capitalize the first letter of each word and lowercase the rest
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
}

// Join the words back into a single string
let titleCase = words.join(' ');

console.log(titleCase);
