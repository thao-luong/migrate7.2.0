import React, { useState } from "react";
import { DateFilter, DateFilterHelpers } from "@gooddata/sdk-ui-filters";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import "@gooddata/sdk-ui-filters/styles/css/dateFilter.css"
import { Ldm, LdmExt } from "../../../ldm";

const measures = [LdmExt.TotalSales1];

const availableGranularities = ["GDC.time.year"];

const defaultDateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },

    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        from: "2017-01-01",
        to: "2017-12-31",
        name: "",
        visible: true,
    },

    absolutePreset: [
        {
            from: "2015-01-01",
            to: "2015-12-31",
            name: "Year 2015",
            localIdentifier: "year2015",
            visible: true,
            type: "absolutePreset",
        },

        {
            from: "2016-01-01",
            to: "2016-12-31",
            name: "Year 2016",
            localIdentifier: "year2016",
            visible: true,
            type: "absolutePreset",
        },

        {
            from: "2017-01-01",
            to: "2017-12-31",
            name: "Year 2017",
            localIdentifier: "year2017",
            visible: true,
            type: "absolutePreset",
        },
    ],

    relativeForm: {
        localIdentifier: "RELATIVE_FORM",
        type: "relativeForm",
        granularity: "GDC.time.year",
        from: -2,
        to: -2,
        name: "",
        visible: true,
        availableGranularities,
    },

    relativePreset: {
        "GDC.time.year": [
            {
                from: -2,
                to: -2,
                granularity: "GDC.time.year",
                localIdentifier: "twoYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "2 years ago",
            },

            {
                from: -3,
                to: -3,
                granularity: "GDC.time.year",
                localIdentifier: "threeYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "3 years ago",
            },

            {
                from: -4,
                to: -4,
                granularity: "GDC.time.year",
                localIdentifier: "fourYearsAgo",
                type: "relativePreset",
                visible: true,
                name: "4 years ago",
            },
        ],
    },
};

const dateFilterContainerStyle = { width: 200 };
const columnChartContainerStyle = { height: 300 };

export const DateFilterWithColumnChartExample = () => {
    const [state, setState] = useState({
        selectedFilterOption: defaultDateFilterOptions.allTime,
        excludeCurrentPeriod: false,
    });

    const onApply = (selectedFilterOption, excludeCurrentPeriod) => {
        setState({
            selectedFilterOption,
            excludeCurrentPeriod,
        });
    };

    const dateFilter = DateFilterHelpers.mapOptionToAfm(
        state.selectedFilterOption,
        {
            identifier: LdmExt.dateDatasetIdentifier,
        },

        state.excludeCurrentPeriod
    );

    return (
        <div>
            <div style={dateFilterContainerStyle}>
                <DateFilter
                    excludeCurrentPeriod={state.excludeCurrentPeriod}
                    selectedFilterOption={state.selectedFilterOption}
                    filterOptions={defaultDateFilterOptions}
                    availableGranularities={availableGranularities}
                    customFilterName="Selected date range"
                    dateFilterMode="active"
                    onApply={onApply}
                />
            </div>
            <div style={columnChartContainerStyle}>
                <ColumnChart
                    measures={measures}
                    viewBy={Ldm.DateMonth.Short}
                    filters={dateFilter ? [dateFilter] : []}
                />
            </div>
        </div>
    );
};
