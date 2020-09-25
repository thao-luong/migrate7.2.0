import React from "react";

import Page from "../components/Page";
import {AttributeFilterExample} from "../components/Examples/Filters/AttributeFilter"
import {DateFilterWithColumnChartExample} from "../components/Examples/Filters/DateFilter"
import {FilterByValueExample} from "../components/Examples/Filters/ComparisonAndRangeFilter"
import {MeasureValueFilterExample} from "../components/Examples/Filters/MVFshowinPercent"
import {MeasureValueFilterExampleStack} from "../components/Examples/Filters/MVFStackto100Percent"
import {MeasureValueFilterComponentExample} from "../components/Examples/Filters/MVFComponent"
import {MeasureValueFilterTreatNullAsZeroComponentExample} from "../components/Examples/Filters/MVFTreatNullValueAsZero"
const Filters = () => {
    return <Page>
        <h2>Attribute Filter Example</h2>
            <AttributeFilterExample/>
        <hr/>
        <h2>Date Filter</h2>
            <DateFilterWithColumnChartExample/>
        <hr/>
        <h2>Comparison and range filters</h2>
            <FilterByValueExample/>
        <h2>Measure Value Filter Show in %</h2>
            <MeasureValueFilterExample/>
        <h2> Filter by a measure value stacked to 100%</h2>
            <MeasureValueFilterExampleStack/>
        <h2>Measure Value Filter Component</h2>    
            <MeasureValueFilterComponentExample/>
        <h2> Measure Value Filter With Treat Null Values as Zero</h2>
            <MeasureValueFilterTreatNullAsZeroComponentExample/>
    </Page>;
};

export default Filters;
