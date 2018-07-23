import { IService } from "src/STSO/KongAdminApi";
import Locale from "src/STSO/locale/Locale";

export interface IStoreState {
    locale: Locale;
    login: any;
    services: IService[];
}

const InitialState: IStoreState = {
    locale: new Locale(),
    login: null,
    services: [],
};

export default InitialState;
