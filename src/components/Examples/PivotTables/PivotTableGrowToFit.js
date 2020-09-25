import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { LdmExt } from "../../../ldm";

const measures = [LdmExt.FranchiseFees];

const attributes = [LdmExt.EmployeeName];

const columns = [LdmExt.LocationName];

const config = {
    columnSizing: {
        defaultWidth: "viewport",
        growToFit: true,
    },
};

export const PivotTableColumnsGrowToFitExample = () => {
    return (
        <div
            style={{ height: 300, resize: "both", overflow: "auto" }}
            className="s-pivot-table-columns-grow-to-fit"
        >
            <PivotTable
                measures={measures}
                rows={attributes}
                columns={columns}
                config={config}
                pageSize={20}
            />
        </div>
    );
};

export default PivotTableColumnsGrowToFitExample;