import { Action } from "redux";

import LocaleActionTypes from "src/actions/LocaleActionTypes";
import ILocale from "src/STSO/locale/Locale";

export type LocaleActionCreator = (locale: ILocale) => ILocaleAction;

export interface ILocaleAction extends Action {
    locale: ILocale;
}

export const setLocale: LocaleActionCreator = (locale: ILocale): ILocaleAction =>
    ({
        locale,
        type: LocaleActionTypes.SET_LOCALE,
    });
