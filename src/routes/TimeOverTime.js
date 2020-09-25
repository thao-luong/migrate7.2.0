import React from "react";

import Page from "../components/Page";
import {SamePeriodColumnChartExample} from "../components/Examples/TimeOverTime/Samperiod"
import {PreviousPeriodHeadlineExample} from "../components/Examples/TimeOverTime/PreviousPeriod"

const Comparison = () => {
    return <Page>
        <h2>Comparing to the same period previous year</h2>
            <SamePeriodColumnChartExample/>
        <hr/>
        <h2>Comparing to the previous period</h2>
            <PreviousPeriodHeadlineExample/>
    </Page>;
};

export default Comparison;
