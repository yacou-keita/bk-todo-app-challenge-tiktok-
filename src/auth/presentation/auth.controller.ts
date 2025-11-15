import { Router } from "express";

export const authRouter = Router();

authRouter
  .post("/register", (request: any, response: any) => {
     response.json({
      firstname: request.body.firstname,
      lastname: request.body.lastname,
    });
  })

  .post("/login", (request: any, response: any) => {
   response.json("login");
  });
