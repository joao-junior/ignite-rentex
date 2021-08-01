import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPlayeload {
    sub: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "d4b427ff70fcaaed04d6ecf7d87bd522"
        ) as IPlayeload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }
}
