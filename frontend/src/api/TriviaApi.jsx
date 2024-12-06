import axios from "axios";
import { config } from "../utils/apiConfig";

export const fetchAllTrivias = async () => {
  return axios.get(`${config.triviaAPI}`);
};

export const fetchTriviaById = async (triviaId) => {
  return axios.get(`${config.triviaAPI}/${triviaId}`);
};

export const createTrivia = async (triviaData) => {
  return axios.post(`${config.triviaAPI}`, triviaData);
};

export const updateTrivia = async (triviaId, triviaData) => {
  return axios.put(`${config.triviaAPI}/${triviaId}`, triviaData);
};

export const deleteTrivia = async (triviaId) => {
  return axios.delete(`${config.triviaAPI}/${triviaId}`);
}