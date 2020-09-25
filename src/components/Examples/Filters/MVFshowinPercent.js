import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import { LdmExt } from "../../../ldm";

const measures = [LdmExt.FranchisedSales, LdmExt.FranchisedSalesWithRatio];

const attributes = [LdmExt.LocationName];

const greaterThanFilter = newMeasureValueFilter(LdmExt.FranchisedSalesWithRatio, "GREATER_THAN", 7000000);

export class MeasureValueFilterExample extends Component {
    state = {
        filters: [],
    };

    renderPresetButton(label, appliedFilters, isActive) {
        return (
            <button
                className={`gd-button gd-button-secondary ${isActive ? "is-active" : ""} s-filter-button`}
                onClick={() =>
                    this.setState({
                        filters: appliedFilters,
                    })
                }
            >
                {label}
            </button>
        );
    }

    render() {
        const { filters } = this.state;
        return (
            <div>
                <div>
                    {this.renderPresetButton("All franchise sales", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Franchise sales greater than 7,000,000 (shown in %)",
                        [greaterThanFilter],
                        filters.length > 0
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </div>
        );
    }
}

export default MeasureValueFilterExample;