export interface Command<Request> {
    execute(request:Request):Promise<void>
}