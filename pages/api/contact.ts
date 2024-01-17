// import { prisma } from './../../configs/prisma.config';

import { contactRepo } from "@/helpers/contact-repo";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'POST') {
    const result = await contactRepo.create(req.body);
   return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    const result = await contactRepo.delete(req.body);
    res.status(200).json(result);
  }

  if (req.method === "PUT") {
    const result = await contactRepo.delete(req.body);
  return   res.status(200).json(result);
  }

  if (req.method === "GET" && req.query.id) {
    const result = await contactRepo.getById(req.query.id);
    return res.status(200).json(result);
  }

  // const result = await contactRepo.getAll();
  const result = await prisma.contact.findMany({
    include: {
      address: true,
      company: true
    },
  });

  const addressResult = await prisma.address.findFirst();
  const companyResult = await prisma.company.findFirst();

  console.log("_____________");
  console.log({ result });
  console.log({ addressResult });
  console.log({ companyResult });
  return res.status(200).json(result);
}
