import React from "react";

import Page from "../components/Page";
import {BarChartExample} from "../components/Examples/BasicComponent/BarChartExample"
import {ColumnChartExample} from "../components/Examples/BasicComponent/ColumnChartExample"
import {BulletChartExample} from "../components/Examples/BasicComponent/BulletChartExample"
import {TreemapExample} from "../components/Examples/BasicComponent/TreemapExample"

const Basic = () => {
    return <Page>
        <h2>BarChart Examples</h2>
            <BarChartExample/>
        <h2> Comlumn Chart Examples</h2>
            <ColumnChartExample/>
        <h2>Bullet Chart Examples</h2>
            <BulletChartExample/>
        <h2> TreeMap Example</h2>
            <TreemapExample/>
    </Page>;
};

export default Basic;
