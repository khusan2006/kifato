import { BASE_URL } from "../config";

export const createOrder = async (data: {
  ism: string;
  familya: string;
  Mamlakat: string;
  kompaniya: string | undefined;
  address: string;
  shahar: string;
  tuman: string;
  pochta: number;
  telefon: string;
  email: string;
  tovarlar: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}/zakaz/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add new order");
    }
  } catch (error) {
    console.error("Error uploading :", error);
  }
};
