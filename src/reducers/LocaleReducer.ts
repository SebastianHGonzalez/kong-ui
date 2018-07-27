import InitialState from "src/store/InitialState";

import { ILocaleAction } from "src/actions/LocaleActionCreators";
import ILocale from "src/STSO/locale/Locale";
import LocaleActionTypes from "../actions/LocaleActionTypes";


export default (state: ILocale = InitialState.locale, action: ILocaleAction): ILocale => {

    switch (action.type) {
        case LocaleActionTypes.SET_LOCALE: return action.locale;
        default: return state;
    }
}
