
import { contactRepo } from "@/helpers/contact-repo";
import { NextApiRequest, NextApiResponse } from "next";

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // split out password from user details

  if (req.method === "POST") {
    const result = await contactRepo.create(req.body);
    res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const result = await contactRepo.delete(req.body);
    res.status(200).json(result);
  }

  if (req.method === "PUT") {
    const result = await contactRepo.delete(req.body);
    res.status(200).json(result);
  }

  if (req.method === "GET" && req.query.id ) {
    const result = await contactRepo.getById(req.query.id);
    return res.status(200).json(result);
  }

  const result = await contactRepo.getAll();
  return res.status(200).json(result);
}
