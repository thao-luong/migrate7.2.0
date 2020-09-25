import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../../ldm";

const style = { height: 300 };

export const InsightViewColumnChartByIdentifierExample = () => {
    return (
        <div style={style} className="s-insightView-chart">
            <InsightView insight={Ldm.Insights.SalesOverTime} />
        </div>
    );
};