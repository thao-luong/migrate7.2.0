import React from "react";

import Page from "../components/Page";
import {PivotTableSortingExample} from "../components/Examples/PivotTables/PivottableExample"
import {PivotTableDrillExample} from "../components/Examples/PivotTables/PivotDrillEveting"
import {PivotTableTotalsExample} from "../components/Examples/PivotTables/PivotTableWithTotal"
import {PivotTableRowGroupingExample} from "../components/Examples/PivotTables/PivotWithRowsGrouping"
import {PivotTableSortingAggregationExample} from "../components/Examples/PivotTables/PivotWithSorting"
import {PivotTableColumnsGrowToFitExample} from "../components/Examples/PivotTables/PivotTableGrowToFit"
import {PivotTableManualResizingExample} from "../components/Examples/PivotTables/TableManualResizing"

const Pivot = () => {
    return <Page>
        <h2>Example of presorted pivot table</h2>
            <PivotTableSortingExample/>
        <hr/>
        <h2>Example of drill event</h2>
            <PivotTableDrillExample/>
        <hr/>
        <h2>Example of pivot table with totals</h2>
             <PivotTableTotalsExample/>
        <hr/>
        <h2>Example of rows grouping</h2>
            <PivotTableRowGroupingExample/>
        <hr/>
        <h2>Example of sort with aggregation</h2>
            <PivotTableSortingAggregationExample/>
        <hr/>
        <h2>Example of table grow to fit containers</h2>
            <PivotTableColumnsGrowToFitExample/>
        <h2>Example of pivot table with manual resizing</h2>
            <PivotTableManualResizingExample/>
    </Page>;
};

export default Pivot;
