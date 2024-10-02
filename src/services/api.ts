import axios from "axios"

export const api = axios.create({
    baseURL: 'https://api-faisca.online/project342', // Ajuste isso para o ambiente correto
  });
  