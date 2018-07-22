import { Action } from "redux";

import LocaleActionTypes from "src/actions/LocaleActionTypes";
import Locale from "src/STSO/locale/Locale";

export type LocaleActionCreator = (locale: Locale) => ILocaleAction;

export interface ILocaleAction extends Action {
    locale: Locale;
}

export const setLocale: LocaleActionCreator = (locale: Locale): ILocaleAction =>
    ({
        locale,
        type: LocaleActionTypes.SET_LOCALE,
    });
