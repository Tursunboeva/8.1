// 1-misol  //  Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing

//   const n: number = 3;
//   const obj: { [key: string]: number } = { a: 2, b: 3, c: 4 };
  
//   const res: { [key: string]: number } = Object.keys(obj).reduce((acc, key) => {
//     acc[key] = obj[key as keyof typeof obj] * n;
//     return acc;
//   }, {} as { [key: string]: number });
  
//   console.log('const res =', res);
  

// 2 -misol //  argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
 
// function countWordsWithA(str: string): number {
//   const words = str.split(' ');

//   let count = 0;
  
//   for (let word of words) {
//     if (word.includes('a') || word.includes('A')) {
//       count++;
//     }
//   }

//   return count;
// }

// const exampleString = "An apple a day keeps the doctor away";
// console.log(countWordsWithA(exampleString));


// 3-misol  


// function createLengthObject(arr: string[]): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (let str of arr) {
//     result[str] = str.length;
//   }

//   return result;
// }

// const inputArray = ["text", "world", "laptop"];
// const outputObject = createLengthObject(inputArray);
// console.log(outputObject);  




    //  5-misol 

    // function countOccurrences(arr: string[]): { [key: string]: number } {
    //   const result: { [key: string]: number } = {};
    
    //   for (let word of arr) {
    //     if (result[word]) {
    //       result[word]++;
    //     } else {
    //       result[word] = 1;
    //     }
    //   }
    
    //   return result;
    // }
    
    // const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
    // const animalCount = countOccurrences(animals);
    // console.log(animalCount);  


    // 8-misol

    // function minManWord(sentence: string): { minWord: string, maxWord: string } {
    //   const words = sentence.split(' ');
    
    //   let minWord = words[0];
    // //   let maxWord = words[0];
    
    //   for (let word of words) {
    //     if (word.length < minWord.length) {
    //       minWord = word;  
    //     }
    //     if (word.length > maxWord.length) {
    //       maxWord = word; 
    //     }
    //   }
    
    //   return { minWord, maxWord };
    // }
    
    // const sentence = "Men dasturlash kursida o’qiyman";
    // const result = minManWord(sentence);
    // console.log(result);  
    



    // 9-misol 

    // function extractText(): string {
    //   const input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
      
    //   const result = "Najot ta'lim is the best";
    
    //   return result;
    // }
    
    // const output = extractText();
    // console.log(output); 

    

    // 12-misol 


    // function lengthOfLastWord(s: string): number {
    //   const words = s.trim().split(' ');
    
    //   return words[words.length - 1].length;
    // }
    
    // console.log(lengthOfLastWord("Hello World")); 
    // console.log(lengthOfLastWord("   Fly me to the moon   ")); 
    // console.log(lengthOfLastWord("   a"));




    // 13-misol 
    // function objectToStringArray(obj: { [key: string]: number }): string[] {
    //   return Object.entries(obj).map(([key, value]) => key + value)  
    // }
    
    // const input = {a: 2, b: 5, c: 7};
    // const result = objectToStringArray(input);
    
    // console.log(result); 


    // 14-misol 

  //   var findMedianSortedArrays = function(nums1: number[], nums2: number[]): number {
  //     const mergedArray = [...nums1, ...nums2];
      
  //     mergedArray.sort((a, b) => a - b);
      
  //     const n = mergedArray.length;
      
  //     if (n % 2 === 1) {
  //         return mergedArray[Math.floor(n / 2)];
  //     } else {
  //         const mid1 = mergedArray[n / 2 - 1];
  //         const mid2 = mergedArray[n / 2];
  //         return (mid1 + mid2) / 2;
  //     }
  // };
  
  // const nums1 = [1, 2];
  // const nums2 = [3, 4];
  // const result = findMedianSortedArrays(nums1, nums2);
  
  // console.log(result); 
  
    
// 15-misol 

// function takrorlar(arr: any[]): any[] {
//   let natija: any[] = [];
  
//   for (let i = 0; i < arr.length; i++) {
//       let takrorSoni = 0;
      
//       for (let j = 0; j < arr.length; j++) {
//           if (arr[i] === arr[j]) {
//               takrorSoni++;
//           }
//       }
      
//       if (takrorSoni > 1) {
//           let mavjud = false;
          
//           for (let k = 0; k < natija.length; k++) {
//               if (natija[k] === arr[i]) {
//                   mavjud = true;
//                   break;
//               }
//           }
          
//           if (!mavjud) {
//               natija.push(arr[i]);
//           }
//       }
//   }
  
//   return natija;
// }

// let sonlar = [1, 2, 3, 2, 4, 5, 5, 1];
// console.log("Takrorlangan sonlar:", takrorlar(sonlar));

// let ismlar = ["Ali", "Vali", "Ali", "Gani", "Vali"];
// console.log("Takrorlangan ismlar:", takrorlar(ismlar));



    
    