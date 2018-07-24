import { IService } from "src/STSO/KongAdminApi";
import Locale from "src/STSO/locale/Locale";

export interface IStoreState {
    locale: Locale;
    login: any;
    services: {
        loading: boolean;
        data: IService[]
    };
}

const InitialState: IStoreState = {
    locale: new Locale(),
    login: null,
    services: {
        data: [],
        loading: true,
    },
};

export default InitialState;
