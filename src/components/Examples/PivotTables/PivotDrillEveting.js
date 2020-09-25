import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { attributeIdentifier, measureIdentifier } from "@gooddata/sdk-model";

import { LdmExt, Ldm } from "../../../ldm";

const measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesOngoingRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
];

const attributes = [LdmExt.LocationState, LdmExt.LocationName, LdmExt.MenuCategory];

const columns = [LdmExt.quarterDate, LdmExt.monthDate];

const totals = [
    {
        measureIdentifier: "franchiseFees",
        type: "sum",
        attributeIdentifier: "state",
    },

    {
        measureIdentifier: "franchiseFeesAdRoyalty",
        type: "sum",
        attributeIdentifier: "state",
    },

    {
        measureIdentifier: "franchiseFees",
        type: "max",
        attributeIdentifier: "state",
    },

    {
        measureIdentifier: "franchiseFees",
        type: "sum",
        attributeIdentifier: "menu",
    },

    {
        measureIdentifier: "franchiseFeesAdRoyalty",
        type: "sum",
        attributeIdentifier: "menu",
    },
];

const drillableItems = [
    HeaderPredicates.identifierMatch(attributeIdentifier(Ldm.MenuCategory)),
    HeaderPredicates.identifierMatch(measureIdentifier(Ldm.$FranchiseFees)),
];

export class PivotTableDrillExample extends Component {
    state = {
        drillEvent: null,
    };

    onDrill = (drillEvent) => {
        // eslint-disable-next-line no-console
        console.log(
            "onFiredDrillEvent",
            drillEvent,
            JSON.stringify(drillEvent.drillContext.intersection, null, 2)
        );

        this.setState({
            drillEvent,
        });

        return true;
    };

    renderDrillValue = () => {
        const { drillEvent } = this.state;

        if (!drillEvent) {
            return null;
        }

        const drillColumn =
            drillEvent.drillContext.row && drillEvent.drillContext.columnIndex
                ? drillEvent.drillContext.row[drillEvent.drillContext.columnIndex]
                : undefined;

        const drillValue = typeof drillColumn === "object" ? drillColumn.name : drillColumn;

        return (
            <h3>
                You have Clicked <span className="s-drill-value">{drillValue}</span>{" "}
            </h3>
        );
    };

    render() {
        return (
            <div>
                {this.renderDrillValue()}
                <div style={{ height: 600 }} className="s-pivot-table-drill">
                    <PivotTable
                        measures={measures}
                        rows={attributes}
                        columns={columns}
                        pageSize={20}
                        drillableItems={drillableItems}
                        onDrill={this.onDrill}
                        totals={totals}
                    />
                </div>
            </div>
        );
    }
}

export default PivotTableDrillExample;