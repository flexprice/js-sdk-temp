import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutAddonsIdRequest = {
    /**
     * Addon ID
     */
    id: string;
    /**
     * Update Addon Request
     */
    body: components.DtoUpdateAddonRequest;
};
/** @internal */
export type PutAddonsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateAddonRequest$Outbound;
};
/** @internal */
export declare const PutAddonsIdRequest$outboundSchema: z.ZodType<PutAddonsIdRequest$Outbound, z.ZodTypeDef, PutAddonsIdRequest>;
export declare function putAddonsIdRequestToJSON(putAddonsIdRequest: PutAddonsIdRequest): string;
//# sourceMappingURL=putaddonsid.d.ts.map