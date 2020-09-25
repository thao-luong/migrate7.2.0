import React from "react";

import Page from "../components/Page";
import {InsightViewColumnChartByIdentifierExample} from "../components/Examples/InsightViews/ColumnChartInsightView"
import {VisualizationTable} from "../components/Examples/InsightViews/TableInsightView"

const Insight = () => {
    return <Page>
        <h2>Column Chart</h2>
        <InsightViewColumnChartByIdentifierExample/>
        <hr/>
        <h2>Table</h2>
        <VisualizationTable/>
    </Page>;
};

export default Insight;
