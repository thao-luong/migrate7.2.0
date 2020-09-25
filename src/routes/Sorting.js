import React from "react";

import Page from "../components/Page";
import {MeasureSortingExample} from "../components/Examples/Sortings/SortingByMeasure"
import {AttributeSortingExample} from "../components/Examples/Sortings/SortingByAttribute"

const Sorting = () => {
    return <Page>
        <h2>Sorting by Measure</h2>
            <MeasureSortingExample/>
        <hr/>
        <h2>Sorting by attribute</h2>
            <AttributeSortingExample/>
    </Page>;
};

export default Sorting;
