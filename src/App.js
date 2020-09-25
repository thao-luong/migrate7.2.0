import React from "react";

import "@gooddata/react-components/styles/css/main.css";
import { AuthProvider } from "./context/auth";
import AppRouter from "./routes/AppRouter";
import bearFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-bear";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { workspace } from "./constants/fixtures";
import { fromPairs } from 'lodash';
import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";

const backend = bearFactory().withAuthentication(new ContextDeferredAuthProvider());
function App() {
    return (
        <AuthProvider>
            <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
                    <AppRouter />
                </WorkspaceProvider>
            </BackendProvider>
         </AuthProvider>
    );
}

export default App;
