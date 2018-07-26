import { ListItem, ListItemText } from "@material-ui/core";
import * as React from "react";

import RouteDeleteButton from "src/components/Dashboard/routes/RouteDeleteButton";
import RouteEditButton from "src/components/Dashboard/routes/RouteEditButton";
import { IRoute } from "src/STSO/api/Route";

interface IRouteProps extends React.Props<any> {
    route: IRoute;
}

export default ({ route }: IRouteProps) =>
<ListItem>
    <ListItemText primary={route.id} />
    <ListItemText primary={route.paths} />
    <RouteEditButton route={route} />
    <RouteDeleteButton route={route}/>
</ListItem>
