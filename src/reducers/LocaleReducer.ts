import InitialState from "src/store/InitialState";

import { ILocaleAction } from "src/actions/LocaleActionCreators";
import Locale from "src/STSO/locale/Locale";
import LocaleActionTypes from "../actions/LocaleActionTypes";


export default (state: Locale = InitialState.locale, action: ILocaleAction): Locale => {

    switch (action.type) {
        case LocaleActionTypes.SET_LOCALE: return action.locale;
        default: return state;
    }
}
