import React, { Component } from "react";
import { Headline, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

const totalSalesIdentifier ="aa7ulGyKhIE5"
const projectId="xms7ga4tf3g3nzucd8380o2bev8oeknp"
const dateDataSetUri = `/gdc/md/${projectId}/obj/2180`

const primaryMeasure = Model.measure(totalSalesIdentifier)
    .localIdentifier("totalSales")
    .alias("$ Total Sales");

const secondaryMeasure = Model.previousPeriodMeasure("totalSales", [
    { dataSet: dateDataSetUri, periodsAgo: 1 },
]).alias("$ Total Sales - period ago");

const filters = [Model.relativeDateFilter(dateDataSetUri, "GDC.time.year", -2, -1)];

export class PreviousPeriodHeadlineExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    }

    render() {
        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    projectId={projectId}
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    filters={filters}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineExample;