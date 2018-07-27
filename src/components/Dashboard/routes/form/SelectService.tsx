import { FormControl, MenuItem, Select } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";

import { IServiceState } from "src/reducers/ServiceReducer";
import { IStoreState } from "src/store/InitialState";
import { IService } from "src/STSO/api/Service";
import ILocale from "src/STSO/locale/Locale";


interface ISelectServiceProps extends React.Props<any> {
    locale: ILocale;
    value: string;
    services: IServiceState;
    onChange: (event: any) => any;
    name: string;
}

export const SelectService = ({ locale, value, services, onChange, name }: ISelectServiceProps) =>
    <FormControl required={true}>
        <Select value={value}
            onChange={onChange}
            inputProps={{
                name,
            }}>
            {services.loading || services.data.map((service: IService) =>
                <MenuItem key={service.id} value={service.id}>
                    {service.name}
                </MenuItem>
            )}
        </Select>
    </FormControl>

function mapStateToProps({ locale }: IStoreState) {
    return {
        locale,
    };
}

export default connect(mapStateToProps)(SelectService);
