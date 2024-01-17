// import { prisma } from './../../configs/prisma.config';

import { PostContact } from "@/types/contact.type";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      address: addressBody,
      company: companyBody,
      ...restBody
    } = req.body as PostContact;
    // const result = await contactRepo.create(req.body);
    const address = await prisma.address.create({ data: addressBody });
    const company = await prisma.company.create({ data: companyBody });
    const result = await prisma.contact.create({
      data: {
        ...restBody,
        address: {
          connect: { id: address.id },
        },
        company: { connect: { id: company.id } },
      },
    });
    return res.status(200).json(result);
  }

  // if (req.method === "DELETE") {
  //   const result = await contactRepo.delete(req.body);
  //   res.status(200).json(result);
  // }

  // if (req.method === "PUT") {
  //   const result = await contactRepo.delete(req.body);
  //   return res.status(200).json(result);
  // }

  if (req.method === "GET" && req.query.id) {
    const id = req.query.id as string;
    // const result = await contactRepo.getById(req.query.id);
    const result = await prisma.contact.findUnique({
      where: { id },
      include: {
        address: true,
        company: true,
      },
    });
    return res.status(200).json(result);
  }

  // const result = await contactRepo.getAll();
  const result = await prisma.contact.findMany({
    include: {
      address: true,
      company: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return res.status(200).json(result);
}
