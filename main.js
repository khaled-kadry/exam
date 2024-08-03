/**
 * question 3)
 * ======================
 * 3)
 * 
 * function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    const charCount1 = {};
    const charCount2 = {};
    for (let char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for (let char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
    for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(areAnagrams('listen', 'silent')); 
  ========================================================
 */
 /**
  * 4)
  * 
  *  function calculateMean(numbers) {
    if (numbers.length === 0) {
      return 0; 
    }
    const sum = numbers.reduce((total, number) => total + number, 0);
    const mean = sum / numbers.length;
    return mean;
  }
  console.log(calculateMean([1, 2, 3, 4, 5])); 
  
  */
  /**
   * 5)
   * function determineSeason() {
    var month = prompt("أدخل الشهر").toLowerCase();
    if (month === "سبتمبر" || month === "أكتوبر" || month === "نوفمبر") {
        console.log("الخريف");
    } else if (month === "ديسمبر" || month === "يناير" || month === "فبراير") {
        console.log("الشتاء");
    } else if (month === "مارس" || month === "أبريل" || month === "مايو") {
        console.log("الربيع");
    } else if (month === "يونيو" || month === "يوليو" || month === "أغسطس") {
        console.log("الصيف");
    } else {
        console.log("شهر غير صالح");
    }
}
determineSeason();

   */
/**
 * 6)
 * function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4)); 

 */
  /**
   * 7)
   * function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4])); 
   */
  /**
   * 8)
   * 
   * 
   * 1
   * let myArray = [1, 2, 3, 4];
myArray = []; 
2
let myArray = [1, 2, 3, 4];
myArray.length = 0; 
3
let myArray = [1, 2, 3, 4];
myArray.splice(0, myArray.length); 
4
let myArray = [1, 2, 3, 4];
while (myArray.length > 0) {
  myArray.pop();
} 
*/
const showBtn = document.getElementById("showBtn");
const hideBtn = document.getElementById("hideBtn");
const content = document.getElementById("content");

showBtn.addEventListener("click", () => {
    content.style.display = "block";
});

hideBtn.addEventListener("click", () => {
    content.style.display = "none";
});
