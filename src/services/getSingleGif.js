import { API_KEY, API_URL } from "./settings";

export default function getSingleGif({ id }) {
  const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
  const fetchGif = async () => {
    const response = await fetch(apiURL);
    const responseJson = await response.json();
    const { data } = responseJson;
    const { images, title, id } = data;
    const { url } = images.downsized_medium;
    return { title, id, url };
  };

  return fetchGif();
}
