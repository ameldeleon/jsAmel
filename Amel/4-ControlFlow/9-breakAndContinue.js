let i = 0;
while (i < 10) { 
    //if (i  === 5) break; // break will stop the loop when i is 5
    if (i%2 === 0)
        i++;
        continue; // continue will skip the current iteration when i is even
    }

console.log(i);
    i++;