import React, { Component } from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";

import { LdmExt } from "../../../ldm";

export class BulletChartExample extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-bullet-chart">
                <BulletChart
                    primaryMeasure={LdmExt.FranchiseFeesAdRoyalty}
                    targetMeasure={LdmExt.FranchiseFees}
                    comparativeMeasure={LdmExt.FranchiseFeesOngoingRoyalty}
                    viewBy={LdmExt.LocationResort}
                />
            </div>
        );
    }
}

export default BulletChartExample;
