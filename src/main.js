import EXPRESS from "express";

const application = EXPRESS();
const port = 4000;


application.use(EXPRESS.urlencoded({ extended: true }))
application.use(EXPRESS.json())

application.get("/task", (request, response) => {
  response.json("hello task");
});

application.post("/task", (request, response) => {
  response.json({
    firstname: request.body.firstname,
    lastname: request.body.lastname,
  });
});

application.listen(port, () => {
  console.log(`connected to ${port}`);
});
