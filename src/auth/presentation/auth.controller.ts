import { Router,Request,Response } from "express";

export const authRouter = Router();

authRouter
  .post("/register", (request: Request, response: Response) => {
     response.json({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
    });
  })

  .post("/login", (request: Request, response: Response) => {
   response.json("login");
  });
