import { Button } from "@material-ui/core";
import * as React from "react";

import ILocale from "src/STSO/locale/Locale";


interface IActionsProp extends React.Props<any> {
    locale: ILocale;
    editing?: any;
}

export default ({ locale, editing }: IActionsProp) =>
    <div>
        <Button color='primary' type='submit'>
            {editing ? locale.common.save : locale.common.add}
        </Button>
        <Button color='secondary' type='reset'>
            {locale.common.cancel}
        </Button>
    </div>
