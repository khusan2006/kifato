import { BASE_URL } from "../config";

export async function getAllCategories() {
  const url = `${BASE_URL}/get_tur/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const { data } = await response.json();

    console.log(data); // or do something else with the data
    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}
