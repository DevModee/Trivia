import axios from "axios";

export const fetchAllTrivias = async () => {
  return axios.get(`${BASE_URL}/trivia/`);
};

export const fetchTriviaById = async (triviaId) => {
  return axios.get(`${BASE_URL}/trivia/${triviaId}`);
};

export const createTrivia = async (triviaData) => {
  return axios.post(`${BASE_URL}/trivia`, triviaData);
};

export const updateTrivia = async (triviaId, triviaData) => {
  return axios.put(`${BASE_URL}/trivia/${triviaId}`, triviaData);
};

export const deleteTrivia = async (triviaId) => {
  return axios.delete(`${BASE_URL}/trivia/${triviaID}`);
}