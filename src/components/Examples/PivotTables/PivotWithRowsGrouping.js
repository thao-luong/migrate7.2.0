import React, { Component } from "react";
import { PivotTable, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

const quarterDateIdentifier ="date.aam81lMifn6q"
const monthDateIdentifier="date.abm81lMifn6q"
const projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
const locationStateDisplayFormIdentifier ="label.restaurantlocation.locationstate"
const locationNameDisplayFormIdentifier="label.restaurantlocation.locationname"
const franchiseFeesIdentifier="aaEGaXAEgB7U"
const franchiseFeesAdRoyaltyIdentifier="aabHeqImaK0d"
const franchiseFeesInitialFranchiseFeeIdentifier="aaDHcv6wevkl"
const franchiseFeesIdentifierOngoingRoyalty="aaWGcgnsfxIg"
const menuCategoryAttributeDFIdentifier="label.menuitem.menucategory"

const measures = [
    Model.measure(franchiseFeesIdentifier).format("#,##0"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
];

const attributes = [
    Model.attribute(locationStateDisplayFormIdentifier),
    Model.attribute(locationNameDisplayFormIdentifier),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
];

const columns = [Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)];

export class PivotTableRowGroupingExample extends Component {
    render() {
        return (
            <div style={{ height: 500 }} className="s-pivot-table-row-grouping">
                <PivotTable
                    projectId={projectId}
                    measures={measures}
                    rows={attributes}
                    columns={columns}
                    pageSize={20}
                    groupRows
                />
            </div>
        );
    }
}

export default PivotTableRowGroupingExample;