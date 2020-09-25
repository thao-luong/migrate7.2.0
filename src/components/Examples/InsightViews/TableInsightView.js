import React, { Component } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../../ldm";
export class VisualizationTable extends Component {
    render() {
        return (
            <div style={{ height: 300 }} className="s-visualization-table">
                <InsightView
                    insight = {Ldm.Insights.TableReportLaborCostsVsScheduledCosts}
                />
            </div>
        );
    }
}

export default VisualizationTable;