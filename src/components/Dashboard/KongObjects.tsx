import { AppBar, Tab, Tabs } from "@material-ui/core";
import * as React from "react";

import KongServerRoutes from "src/components/Dashboard/KongServerRoutes";
import KongServerServices from "src/components/Dashboard/KongServerServices";


interface IKongObjectsState {
    showing: number;
}

export default class KongObjects extends React.Component<any, IKongObjectsState>{

    constructor(props: any) {
        super(props);

        this.state = { showing: 0 };

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event: any, showing: number) {
        this.setState({ showing });
    }

    public render() {
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={this.state.showing} onChange={this.handleChange}>
                        <Tab label="Services" />
                        <Tab label="Routes" />
                        <Tab label="Item Three" />
                    </Tabs>
                </AppBar>
                {this.state.showing === 0 && <KongServerServices />}
                {this.state.showing === 1 && <KongServerRoutes />}
            </div>
        );
    }
} 