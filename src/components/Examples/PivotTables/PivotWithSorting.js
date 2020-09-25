import React, { Component } from "react";
import { PivotTable, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

const quarterDateIdentifier ="date.aam81lMifn6q"
const projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
const locationStateDisplayFormIdentifier ="label.restaurantlocation.locationstate"
const franchiseFeesIdentifier="aaEGaXAEgB7U"


const measures = [Model.measure(franchiseFeesIdentifier).format("#,##0")];

const attributes = [Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state")];

const columns = [Model.attribute(quarterDateIdentifier)];

const sortBy = [Model.attributeSortItem("state", "desc").aggregation("sum")];

export class PivotTableSortingAggregationExample extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-pivot-table-sorting">
                <PivotTable
                    projectId={projectId}
                    measures={measures}
                    rows={attributes}
                    columns={columns}
                    pageSize={20}
                    sortBy={sortBy}
                />
            </div>
        );
    }
}

export default PivotTableSortingAggregationExample;