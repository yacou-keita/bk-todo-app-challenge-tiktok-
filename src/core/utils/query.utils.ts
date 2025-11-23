export interface Query<Response, Request> {
    execute(request:Request):Promise<Response>
}