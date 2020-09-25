import React from "react";
import { measureLocalId } from "@gooddata/sdk-model";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LdmExt } from "../../../ldm";

const measureTitle = "Franchised Sales";
const measures = [LdmExt.FranchisedSales];

const attributes = [LdmExt.LocationName];

const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};

export class MeasureValueFilterComponentExample extends React.PureComponent {
    state = {
        filters: [],
    };

    onApply = (filter) => {
        this.setState({ filters: [filter ?filter: defaultFilter] });
    };

    render() {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    measureIdentifier={measureLocalId(LdmExt.FranchisedSales)}
                />

                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </React.Fragment>
        );
    }
}

export default MeasureValueFilterComponentExample;