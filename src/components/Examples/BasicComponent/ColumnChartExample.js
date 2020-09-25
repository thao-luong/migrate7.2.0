import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../../ldm";

const style = { height: 300 };

export const ColumnChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <ColumnChart measures={[LdmExt.TotalSales1]} viewBy={Ldm.DateMonth.Short} />
        </div>
    );
};