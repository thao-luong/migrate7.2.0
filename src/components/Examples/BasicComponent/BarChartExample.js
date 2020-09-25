import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../../ldm";

const style = { height: 300 };

export const BarChartExample = () => {
    return (
        <div style={style} className="s-bar-chart">
            <BarChart measures={[LdmExt.TotalSales1]} viewBy={Ldm.LocationResort} />
        </div>
    );
};