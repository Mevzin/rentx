import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { sign } from "jsonwebtoken";

import { compare } from "bcrypt";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string,
    email: string,
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);


    if(!user){
      throw new AppError("Email or password incorrect!", 400);
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorrect!", 400);
    }

    const token = sign({},"8ac1a8e10285244500cbac8732d0c3f6",{
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse ={
      token,
      user: {
        name: user.name,
        email: user.email
      }
    };

    return tokenReturn;

  }
}

export { AuthenticateUserUseCase };