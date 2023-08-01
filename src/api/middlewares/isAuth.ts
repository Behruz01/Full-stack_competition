import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import config from "../../../config/config";
import { CustomError } from "../utils/custom-error";

interface CustomRequest extends Request {
  verified?: Object;
}

const isAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return new CustomError("Invalid token", 403);
  }

  jwt.verify(
    token,
    config.SECRET_KEY as jwt.Secret,
    (err: Error | null, data) => {
      if (err) {
        if (err instanceof JsonWebTokenError) {
          return new CustomError("Invalid token!", 401);
        } else if (err instanceof TokenExpiredError) {
          return new CustomError("Token", 403);
        } else {
          return new CustomError("Internal server error", 500);
        }
      }
      req.verified = data;
      next();
    }
  );
};

export default isAuth;
