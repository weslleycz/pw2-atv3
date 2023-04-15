import { IModels } from "../questao1";

export const q2 = ({ a, b }: IModels) => {
  if (a.length != b.length) {
    return undefined;
  } else {
    const newArray = a.map((item: any, index: number) => {
      if (item === b[index]) {
        return item;
      } else {
        return undefined;
      }
    });
    return newArray;
  }
};
