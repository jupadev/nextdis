// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://www.thecocktaildb.com/api.php?
import type { NextApiRequest, NextApiResponse } from 'next'
import { Drink } from './types';

const endpoints = {
  random: 'v1/1/random.php',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Drink>
) {
  const url = `${process.env.API_URL}/${endpoints.random}`;
  console.log('fetching', url)
  const response = await fetch(url);
  const drinksResponse = await response.json();
  res.status(200).json({...drinksResponse})
}
