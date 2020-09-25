import React from "react";
import { Treemap } from "@gooddata/sdk-ui-charts";
import { Ldm, LdmExt } from "../../../ldm";

const style = { height: 300 };

export const TreemapExample = () => {
    return (
        <div style={style} className="s-tree-map">
            <Treemap
                measures={[LdmExt.numberOfChecks]}
                viewBy={Ldm.LocationState}
                segmentBy={Ldm.LocationCity}
            />
        </div>
    );
};