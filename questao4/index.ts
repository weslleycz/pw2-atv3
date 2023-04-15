export const q4 = (a: string[], b: string[]) => {
    a.map((elemA, i) => {
      const elemB = b[i];
      if (elemA.length !== elemB.length) {
        return undefined;
      } else {
        const mesmoTamanho = elemA.length;
        let saoIguais = true;
        let elementoIgual: string | undefined = undefined;
  
        for (let j = 0; j < mesmoTamanho; j++) {
          if (elemA[j] !== elemB[j]) {
            saoIguais = false;
            break;
          } else {
            elementoIgual = elemA[j];
          }
        }
        if (saoIguais) {
          return elementoIgual;
        } else {
          return undefined;
        }
      }
    });
  }