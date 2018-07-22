import Locale from "src/STSO/locale/Locale";

export interface IStoreState {
    locale: Locale;
    login: any;
}

const InitialState: IStoreState = {
    locale: new Locale(),
    login: null,
};

export default InitialState;
