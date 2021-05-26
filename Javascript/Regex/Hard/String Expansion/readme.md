# String Expansion

[Edablit Quetion](https://edabit.com/challenge/4NKNkPZtN39cqCQMk)

Create a function which takes a string txt and expands it as per following rules:

1. The numeric values represent the occurrence of each letter preceding that numeric value.
```js
stringExpansion("3M2u5b2a1s1h2i1r") ➞ "MMMuubbbbbaashiir"
```

2. The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.
```js
stringExpansion("3Mat")➞ "MMMaaattt"      // correct

stringExpansion("3Mat") ➞ "MMMat"          // wrong
stringExpansion("3Mat") ➞ "MatMatMat"      // wrong
```

3. If there are consecutive numeric characters, ignore them all except last one.
```js
stringExpansion("3M123u42b12a") ➞ "MMMuuubbaa"
```

4. If there are two consecutive alphabetic characters then the string will remain unchanged.
```js
stringExpansion("airforce") ➞ "airforce"
```
5. Empty strings should return an empty string.
```js
stringExpansion("") ➞ ""
```
**Notes**
N/A