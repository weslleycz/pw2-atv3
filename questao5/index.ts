export interface IModelCidade{
    alcunha: String,
    coodenadas: {
      latitude: Number[],
      longitude: Number[],
    },
    nome: String,
    estado: String
  }

export const q5 = (cidade : IModelCidade) =>{

    let resp = `
    cidade: ${cidade.nome}, ${cidade.estado}
    * "${cidade.alcunha}"
    * Localizada em ${cidade.coodenadas.latitude[0]}° ${cidade.coodenadas.latitude[1]}' ${cidade.coodenadas.latitude[2]}" S ${cidade.coodenadas.longitude[0]}° ${cidade.coodenadas.longitude[1]}' ${cidade.coodenadas.longitude[2]}" O
    `
    return resp
        
}