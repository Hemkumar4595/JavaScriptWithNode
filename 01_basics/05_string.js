//const strPrim = "foo"; // A literal is a string primitive
//const strobj=new String("Hemant Tyagi") // String Object

const sentence = new String('The quick brown fox jumps over the lazy dog.');
let index = 140;
//1. String.prototype.at()
  /**Returns the character (exactly one UTF-16 code unit) at the specified index. 
    Accepts negative integers, which count back from the last string character.
  */ 
    //console.log(`at method index ${index} value : ${sentence.at(index)}`); //empty

// 2. CharAt()
   /**Returns the character (exactly one UTF-16 code unit) at the specified index. */

   //console.log(`charAt method index ${index} value : ${sentence.charAt(index)}`); //empty


// charCodeAt()
  /**   Returns a number that is the UTF-16 code unit value at the given index.*/

   ///console.log(`charCodeAt method index ${index} value : ${sentence.charCodeAt(index)}`); //empty


   //concat(str1,str2)
   //endswith(serachingString,endPosition) --true/false
   //include(serachingString,Positon) --true/false
  //  indexOf(serachingString,Positon) -- return index of first occurence otherwise -1
  // LastIndexOf(serachingString,Positon) -- return index of last occurence otherwise -1


  //  console.log("canal".indexOf("a")); ; // returns 1
  //  console.log("canal".indexOf("a", 2)); // returns 3
  //  console.log("canal".indexOf("a", 1)); // returns 1

   
  //  console.log("canal".lastIndexOf("a")); ; // returns 3
  //  console.log("canal".lastIndexOf("a", 2)); // returns 1
  //  console.log("canal".lastIndexOf("a", 1)); // returns 1
  //  console.log("canal".lastIndexOf("a", 0)); // returns -1

  //const anyString = "Brave, Brave New World";

   //console.log(anyString.indexOf("Brave",1)); // 0
   //console.log(anyString.lastIndexOf("amit",1)); // 7


   const paragraph = "I think Ruth's dog is cuter than your dog!";

   console.log(paragraph.replace('dog', 'monkey'));
   console.log(paragraph.replaceAll('dog', 'monkey'));




