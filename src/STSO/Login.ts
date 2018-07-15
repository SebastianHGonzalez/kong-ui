import { ILoginData } from "../reducers/LoginReducer";
import KongAdminApi, { IKongAdminApi } from "./KongAdminApi";

export default class Login implements ILoginData {

    public api: IKongAdminApi;

    constructor(public kongUrl: string) {
        this.api = KongAdminApi.withUri(kongUrl);
    }
}
