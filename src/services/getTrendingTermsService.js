import { API_KEY, API_URL } from "./settings";

export default function getTrendingTerms() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  async function fetchGifs() {
    const response = await fetch(apiURL);
    const responseJson = await response.json();
    const { data } = responseJson;
    return data;
  }
  return fetchGifs();
}
