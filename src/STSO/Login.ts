import { ILoginData } from "../reducers/LoginReducer";

export default class Login implements ILoginData {

    constructor(public kongUrl: string) {

    }
}