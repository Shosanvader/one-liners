/*The following piece of code is a function
that accepts a one word string and checks
if a palindrome can be generated from the word*/

function isPalindrome(sample) {
    // Define an array and iterate the characters from the string into it
    const originalText = [];
    for (let i = 0; i < sample.length; i++) {
        originalText.push(sample[i]);  
    };

    // Reverse the array and convert it to a string
    let parsed = (originalText.reverse().toString())

    // Strip away the commas and assign the final string to a variable
    let final = ""
    for (let i = 0; i < parsed.length; i++) {
        if (parsed[i] !== ',') {
            final += (parsed[i])
        }
    }

    // Output the final result
    console.log(`${sample} is the orginal text.\n${final} is the final text.`)
    if (sample == final) {
        console.log(`${final} is a palindrome of ${sample}`);
    } else {
        console.log(`${final} is not a palindrome of ${sample}`);
    }
}

isPalindrome("")