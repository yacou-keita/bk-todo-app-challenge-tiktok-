export class User {
  constructor(
    private id:string,
    private firstname: string,
    private lastname: string,
    private email: string,
    private password: string
  ) {}

  static createAccount({
    firstname,
    lastname,
    email,
    password,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }): User {
    return new User("ddddd",firstname, lastname, email, password);
  }

  toDataBase(){
    return {
        id:this.id,
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        password:this.password,
    }
  }
  toJson(){
    return {
        id:this.id,
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
    }
  }
}
