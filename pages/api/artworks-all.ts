import type { NextApiRequest, NextApiResponse } from 'next'
import { Artwork } from "types/artwork";
import { fetchArtworks } from "services/artwork";
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const artworks = await fetchArtworks();
    res.status(200).json(artworks);
}
