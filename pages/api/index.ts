import type { NextApiRequest, NextApiResponse } from "next";
import { goods, Goods } from "../../goods";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Goods>
) {
  if (req.method === "GET") {
    res.status(200).json(goods);
  } else if (req.method === "POST") {
    res.status(201).json(goods);
  }
}
