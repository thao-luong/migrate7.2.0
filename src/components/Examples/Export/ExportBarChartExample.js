import React, { Component } from "react";
import { BarChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {ExampleWithExport} from "../Export/ExampleWithExport";
const projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
const dateDataSetUri = `/gdc/md/${projectId}/obj/2180`
const locationResortIdentifier = "label.restaurantlocation.locationresort"
const totalSalesIdentifier = "aa7ulGyKhIE5";
const amount = Model.measure(totalSalesIdentifier)
    .format("#,##0")
    .alias("$ Total Sales");

const locationResort = Model.attribute(locationResortIdentifier);

const filters = [Model.absoluteDateFilter(dateDataSetUri, "2017-01-01", "2017-12-31")];

export class BarChartExportExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("BarChartExportExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("BarChartExportExample onLoadingChanged", ...params);
    }

    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-bar-chart">
                        <BarChart
                            projectId={projectId}
                            measures={[amount]}
                            viewBy={locationResort}
                            filters={filters}
                            onExportReady={onExportReady}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default BarChartExportExample;