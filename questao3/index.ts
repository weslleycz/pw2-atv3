export const q3 = (arr1: string[], arr2: string[]): boolean =>{

    if (arr1.length !== arr2.length) {
      return false;
    } else{
      return arr1.every((element, index) => element === arr2[index]);
    }
  }
  