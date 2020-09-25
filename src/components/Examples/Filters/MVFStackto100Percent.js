import React, { Component } from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newMeasureValueFilter } from "@gooddata/sdk-model";
import { LdmExt } from "../../../ldm";

const measures = [LdmExt.TotalSales2, LdmExt.numberOfChecks];

const attributes = [LdmExt.LocationName];

const greaterThanFilter = newMeasureValueFilter(LdmExt.TotalSales2, "GREATER_THAN", 7000000);

export class MeasureValueFilterExampleStack extends Component {
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
                    {this.renderPresetButton("All total sales", [], filters.length === 0)}
                    {this.renderPresetButton(
                        "Total sales greater than 7,000,000 (stacked to 100%)",
                        [greaterThanFilter],
                        filters.length > 0
                    )}
                </div>
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-stacked-bar">
                    <BarChart
                        measures={measures}
                        viewBy={attributes}
                        config={{
                            stackMeasuresToPercent: true,
                            dataLabels: {
                                visible: true,
                            },
                        }}
                        filters={filters}
                    />
                </div>
            </div>
        );
    }
}

export default MeasureValueFilterExampleStack;