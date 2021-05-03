/*
RegEx XIV: Group Ranges x|y

Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

---
const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

Matches "blue" in "blue flag" and "red" in "red flag".
---

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.

Examples
"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]
Notes
Check the Resources tab if you get stuck.

*/

function flag_group(str) {
    return str.match(/(blue|red) flag/gi);
}

console.log(flag_group("red flag blue flag")); // ["red flag", "blue flag"]
console.log(flag_group("yellow flag red flag blue flag green flag")); // ["red flag", "blue flag"]
console.log(flag_group("pink flag red flag black flag blue flag green flag red flag ")); // ["red flag", "blue flag", "red flag"]