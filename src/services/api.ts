import axios from "axios"

export const api = axios.create({
    baseURL: 'http://api-faisca.online/project342', // Ajuste isso para o ambiente correto
  });
  