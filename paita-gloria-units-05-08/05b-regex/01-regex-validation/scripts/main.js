/**
 * @file main.js
 * @author Gloria Paita
 * 
 * @description
 * This file contains the implementation of the regular expressions used to validate the following:
 * - Email Address
 * - Phone Number
 * - Password
 * - URL
 */


// 1.Email Address
// Expected pattern: [any characters]@[any characters].[2-4 letters]

// Regex
const emailPattern = /^[a-zA-Z0-9\._%£$+-]+@[^\s@][a-zA-Z0-9\._%£$+-]+\.[a-zA-Z]{2,4}$/;


// Initializing the emails
const email = "pincopanco@gmail.it";
const email1 = "123_STELLa@yahoo.com";
const email2 = "napo%eonbo$$apa£te@tiscali.fr";
const email3 = "wantA_TranquilLifeH123@outl00k.com";
const email4 = "this_mail_shouldn't_w@rk@wrong.com";        // "@" is not supported
const email5 = "hère_còmè_dà_àççénts@stillwrong.net";       //accented characters are not valid


// Test Cases
console.log(`Testing the validity of email "${email}". The result is: ${emailPattern.test(email)}`);
// Testing the validity of email "pincopanco@gmail.it". The result is: true

console.log(`Testing the validity of email "${email1}". The result is: ${emailPattern.test(email1)}`);
// Testing the validity of email "123_STELLa@yahoo.com". The result is: true

console.log(`Testing the validity of email "${email2}". The result is: ${emailPattern.test(email2)}`);
// Testing the validity of email "napo%eonbo$$apa£te@tiscali.fr". The result is: true

console.log(`Testing the validity of email "${email3}". The result is: ${emailPattern.test(email3)}`);
// Testing the validity of email "wantA_TranquilLifeH123@outl00k.com". The result is: true

console.log(`Testing the validity of email "${email4}". The result is: ${emailPattern.test(email4)}`);
// Testing the validity of email "this_mail_shouldn't_w@rk@wrong.com". The result is: false

console.log(`Testing the validity of email "${email5}". The result is: ${emailPattern.test(email5)}`);
// Testing the validity of email "hère_còmè_dà_àççénts@stillwrong.net". The result is: false


// Separator
console.log("--------------------------------");





// 2.Phone Number
// Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]

// Regex
const phonePattern = /^(\+?\d{1})?(\-|\x20)?(\d{3})(\-|\x20)?(\d{3})(\-|\x20)?(\d{4})$/;


// Initializing the variables (these numbers are proper US numbers)
const phone = "+1 212-555-1234";
const phone1 = "+1 415 555 1234";
const phone2 = "1 415 555 1234";
const phone3 = "415-555-1234";
const phone4 = "1-415-555-1234";

// Initializing the variables (these numbers aren't proper US numbers)
const phone5 = "+39 02 1234 5678";
const phone6 = "+ 415 555 1234";
const phone7 = "+1 123 4567";


// Test cases
console.log(`Testing the validity of the number "${phone}". The result is: ${phonePattern.test(phone)}`);
// Testing the validity of the number "+1 212-555-1234". The result is: true

console.log(`Testing the validity of the number "${phone1}". The result is: ${phonePattern.test(phone1)}`);
// Testing the validity of the number "+1 415 555 1234". The result is: true

console.log(`Testing the validity of the number "${phone2}". The result is: ${phonePattern.test(phone2)}`);
// Testing the validity of the number "1 415 555 1234". The result is: true

console.log(`Testing the validity of the number "${phone3}". The result is: ${phonePattern.test(phone3)}`);
// Testing the validity of the number "415-555-1234". The result is: true

console.log(`Testing the validity of the number "${phone4}". The result is: ${phonePattern.test(phone4)}`);
// Testing the validity of the number "1-415-555-1234". The result is: true

console.log(`Testing the validity of the number "${phone5}". The result is: ${phonePattern.test(phone5)}`);
// Testing the validity of the number "+39 02 1234 5678". The result is: false

console.log(`Testing the validity of the number "${phone6}". The result is: ${phonePattern.test(phone6)}`);
// Testing the validity of the number "+ 415 555 1234". The result is: false

console.log(`Testing the validity of the number "${phone7}". The result is: ${phonePattern.test(phone7)}`);
// Testing the validity of the number "+1 123 4567". The result is: false


// Separator
console.log("--------------------------------");





// 3.Password
// Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase
// letter, one digit, and one special character]

// Regex
const passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_])[^\s]{8,}$/;


// Initializing the variables
const pass = "hello1";                  //too short
const pass1 = "Nq7$Wm2!xC^eL9#";        //valid
const pass2 = "SmartP@nda7!z";          //valid
const pass3 = "___mew0LMAO";            //valid
const pass4 = "123456543@";             //no letters
const pass5 = "accèèèènts_MAKE_everything_wr0ng";       //valid
const pass6 = "Unval1D_ pass";                          //space
const pass7 = "Val1D_pass";             //valid


// Test Cases
console.log(`Is "${pass}" a valid password? ${passPattern.test(pass)}`);
// Is "hello1" a valid password? false

console.log(`Is "${pass1}" a valid password? ${passPattern.test(pass1)}`);
// Is "Nq7$Wm2!xC^eL9#" a valid password? true

console.log(`Is "${pass2}" a valid password? ${passPattern.test(pass2)}`);
// Is "SmartP@nda7!z" a valid password? true

console.log(`Is "${pass3}" a valid password? ${passPattern.test(pass3)}`);
// Is "___mew0LMAO" a valid password? true

console.log(`Is "${pass4}" a valid password? ${passPattern.test(pass4)}`);
// Is "123456543@" a valid password? false

console.log(`Is "${pass5}" a valid password? ${passPattern.test(pass5)}`);
// Is "accèèèènts_MAKE_everything_wr0ng" a valid password? true

console.log(`Is "${pass6}" a valid password? ${passPattern.test(pass6)}`);
// Is "Unval1D_ pass" a valid password? false

console.log(`Is "${pass7}" a valid password? ${passPattern.test(pass7)}`);
// Is "Unval1D_pass" a valid password? true


// Separator
console.log("--------------------------------");





// 4.URL
// Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query
// string]#[optional fragment]

// Regex
const urlPattern = /https?:\/\/[a-zA-Z0-9-]+\.(com|org|net|int|edu|gov|mil)(\/[a-zA-Z0-9-]+)*(\?[a-zA-Z0-9=&]+)?(\#[a-zA-Z0-9]*)?/;


// Initializing the variables
const url = "https://www.example.com:433/resources/newpage.html?key1=value&key2=value2#faw";
const url0 = "https://example.com/resources/newpage?key1=value&key2=value2#faw";
const url1 = "https://www.hostwinds.com/blog/url-structure";
const url2 = "https://hostwinds.com/blog/url-structure";
const url3 = "http://blog.rankwatch.com/technology/URL-optimation-for-search-engines";
const url4 = "https://www.example.co.uk:443/blog/article/search?docid=720&hl=en#dayone";
const url5 = "https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG";
const url6 = "https://mobileversion.com/blog/digital-video#location";


// Test Cases
console.log(`Is "${url}" a valid URL? ${urlPattern.test(url)}`);
// Is "https://www.example.com:433/resources/newpage.html?key1=value&key2=value2#faw" a valid URL? false

console.log(`Is "${url0}" a valid URL? ${urlPattern.test(url0)}`);
// Is "https://example.com/resources/newpage?key1=value&key2=value2#faw" a valid URL? true

console.log(`Is "${url1}" a valid URL? ${urlPattern.test(url1)}`);
// Is "https://www.hostwinds.com/blog/url-structure" a valid URL? false

console.log(`Is "${url2}" a valid URL? ${urlPattern.test(url2)}`);
// Is "https://hostwinds.com/blog/url-structure" a valid URL? true

console.log(`Is "${url3}" a valid URL? ${urlPattern.test(url3)}`);
// Is "http://blog.rankwatch.com/technology/URL-optimation-for-search-engines" a valid URL? false

console.log(`Is "${url4}" a valid URL? ${urlPattern.test(url4)}`);
// Is "https://www.example.co.uk:443/blog/article/search?docid=720&hl=en#dayone" a valid URL? false

console.log(`Is "${url5}" a valid URL? ${urlPattern.test(url5)}`);
// Is "https://media.geeksforgeeks.org/wp-content/uploads/20210625160610/urldiag.PNG" a valid URL? false

console.log(`Is "${url6}" a valid URL? ${urlPattern.test(url6)}`);
// Is "https://mobileversion.com/blog/digital-video#location" a valid URL? true