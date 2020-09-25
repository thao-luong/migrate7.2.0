import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newAttributeSort, modifyAttribute } from "@gooddata/sdk-model";
import { Ldm, LdmExt } from "../../../ldm";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { workspace } from "../../../constants/fixtures";
const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
const measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
    LdmExt.FranchiseFeesOngoingRoyalty,
];

const attributes = [
    Ldm.LocationState,
    Ldm.LocationName.Default,
    modifyAttribute(Ldm.MenuCategory, (a) => a.localId("menu")),
];

const columns = [Ldm.DateQuarter, Ldm.DateMonth.Short];
const sortBy = [newAttributeSort("menu", "asc")];

const style = { height: 300 };

export const PivotTableSortingExample = () => {
    return (
        <div style={style} className="s-pivot-table-sorting">
            <PivotTable
                backend = {backend}
                workspace = {workspace}
                measures={measures}
                rows={attributes}
                columns={columns}
                pageSize={20}
                sortBy={sortBy}
            />
        </div>
    );
};