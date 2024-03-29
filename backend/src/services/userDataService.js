const { User_Data } = require('../db/models');

const createNewUserDataService = async (data) => {
  try {
    const newData = await User_Data.create(data);

    if (newData === null) return { message: "Erro ao cadastrar os dados pessoais." };

    return newData;
  } catch (error) {
    throw new Error(error.message);
  }
}

const GetAllDataService = async () => {
  try {
    const data = await User_Data.findAll();
    if (data === null) return "Nenhum dado pessoal foi encontrado.";
  
    return data;
  } catch (error) {
    // Em caso de erro, retorna uma mensagem de erro.
    throw new Error(error.message);
  }
}

const GetDataByIdService = async (userId, id) => {
  try {
    // Se userId for informado, retorna os dados pessoais do usuário correspondente.
    if (userId) { 
      const data = await User_Data.findOne({ where: { User_id: userId } });
      if (data === null) return "Esta pessoa não possui dados pessoais cadastrados ainda.";
    
      return data;
    } 
    
    // Se não houver userId, mas houver id, retorna os dados pessoais do ID informado.
    if (!userId && id) {
      const data = await User_Data.findByPk(id);
      if (data === null) return { message: `ID inválido! Nenhum dado pessoal foi encontrado com o ID informado: ${id}` };
    
      return data;
    }
    
    // Se nenhum userId ou id for informado, retorna uma mensagem de erro.
    return { message: "Nenhum ID ou userId foi informado" };

  } catch (error) {
    // Em caso de erro, retorna uma mensagem de erro.
    throw new Error(error.message);
  }
};

module.exports = {
  createNewUserDataService,
  GetAllDataService,
  GetDataByIdService
};
