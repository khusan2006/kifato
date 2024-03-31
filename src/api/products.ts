import { BASE_URL } from "../config";

export async function getProductsByCategory(id: string) {
  const url = `${BASE_URL}/get_cards/?tur=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data  = await response.json();

    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}

export async function getProductById(id: string) {
  const url = `${BASE_URL}/get_card/?id=${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const {data}  = await response.json();

    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}export async function getProductByValue(value: string) {
  const url = `${BASE_URL}/filter/?value=${value}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const {data}  = await response.json();

    return data;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    return null;
  }
}
