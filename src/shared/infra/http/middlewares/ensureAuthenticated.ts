import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction): Promise<void>{

  const authHeader = request.headers.authorization;

  if(!authHeader){
    throw new AppError("Token is missing", 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token, 
      "8ac1a8e10285244500cbac8732d0c3f6"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if(!user){
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id
    };

    next();
  } catch (err) {
    throw new AppError("Invalid token!", 401)
  }
}