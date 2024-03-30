import { z } from 'zod';

export interface CategoryType {
  id?: string;
  desc: string;
  image: string;
  count: string
}
export interface ProductType {
  id?: string;
  desc: string;
  image: string;
  narx: string;
  tempratura: string;
  opis: string;
  tur: string;
  razmer: string;
  
}



const schema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  companyName: z.string().min(2).max(50).optional(),
  address: z.string().min(5).max(100),
  city: z.string().min(5).max(100),
  district: z.string().min(5).max(100),
  phone: z.string().min(5).max(100),
  email: z.string().min(5).max(100),
  postalCode: z.string().min(5).max(100),
});

export type FormData = z.infer<typeof schema>;