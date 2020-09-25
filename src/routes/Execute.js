import React from "react";

import Page from "../components/Page";
import {ExecuteExample} from "../components/Examples/ExecuteComponent/ExecuteExamples"
import {ExecuteAttributeValuesExample} from "../components/Examples/ExecuteComponent/ExecuteAttributeValue"

const Executes = () => {
    return <Page>
        <h2>Execute</h2>
            <ExecuteExample/>
        <hr/>
        <h2>Execute attribute values only</h2>
            <ExecuteAttributeValuesExample/>
    </Page>;
};

export default Executes;
