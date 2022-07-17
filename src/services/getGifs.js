import { API_KEY, API_URL } from "./settings";

export default function getGifs({ keyword, limit = 25, page } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=g&lang=en`;
  async function fetchGifs() {
    const response = await fetch(apiURL);
    const responseJson = await response.json();
    const { data } = responseJson;
    return data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
  }
  return fetchGifs();
}
