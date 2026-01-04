import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Connections extends ClientSDK {
    /**
     * Get connections
     *
     * @remarks
     * Get a list of connections
     */
    getConnections(request: operations.GetConnectionsRequest, options?: RequestOptions): Promise<components.DtoListConnectionsResponse>;
    /**
     * List connections by filter
     *
     * @remarks
     * List connections by filter
     */
    postConnectionsSearch(request: components.TypesConnectionFilter, options?: RequestOptions): Promise<components.DtoListConnectionsResponse>;
    /**
     * Get a connection
     *
     * @remarks
     * Get a connection by ID
     */
    getConnectionsId(id: string, options?: RequestOptions): Promise<components.DtoConnectionResponse>;
    /**
     * Update a connection
     *
     * @remarks
     * Update a connection by ID
     */
    putConnectionsId(id: string, body: components.DtoUpdateConnectionRequest, options?: RequestOptions): Promise<components.DtoConnectionResponse>;
    /**
     * Delete a connection
     *
     * @remarks
     * Delete a connection by ID
     */
    deleteConnectionsId(id: string, options?: RequestOptions): Promise<void>;
}
//# sourceMappingURL=connections.d.ts.map