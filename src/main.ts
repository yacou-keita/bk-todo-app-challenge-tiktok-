import EXPRESS from "express";
import { authRouter } from "./auth/presentation/auth.controller.ts";

const application = EXPRESS();
const port = 4000;


application.use(EXPRESS.urlencoded({ extended: true }))
application.use(EXPRESS.json())

application.use("/auth",authRouter)




application.listen(port, () => {
  console.log(`connected to ${port}`);
});
