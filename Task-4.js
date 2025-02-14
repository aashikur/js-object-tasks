/* 
### Task-4

Count the `number of properties`.
**Input:**

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

**Output:**
4
*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

// counting the Object Property
let cnt = 0;
for (const prop in student){
    cnt++;
}

console.log(cnt);