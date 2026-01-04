import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutConnectionsIdRequest = {
    /**
     * Connection ID
     */
    id: string;
    /**
     * Connection
     */
    body: components.DtoUpdateConnectionRequest;
};
/** @internal */
export type PutConnectionsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateConnectionRequest$Outbound;
};
/** @internal */
export declare const PutConnectionsIdRequest$outboundSchema: z.ZodType<PutConnectionsIdRequest$Outbound, z.ZodTypeDef, PutConnectionsIdRequest>;
export declare function putConnectionsIdRequestToJSON(putConnectionsIdRequest: PutConnectionsIdRequest): string;
//# sourceMappingURL=putconnectionsid.d.ts.map