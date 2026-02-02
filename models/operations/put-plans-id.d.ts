import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutPlansIdRequest = {
    /**
     * Plan ID
     */
    id: string;
    /**
     * Plan update
     */
    body: components.DtoUpdatePlanRequest;
};
/** @internal */
export type PutPlansIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdatePlanRequest$Outbound;
};
/** @internal */
export declare const PutPlansIdRequest$outboundSchema: z.ZodType<PutPlansIdRequest$Outbound, z.ZodTypeDef, PutPlansIdRequest>;
export declare function putPlansIdRequestToJSON(putPlansIdRequest: PutPlansIdRequest): string;
//# sourceMappingURL=put-plans-id.d.ts.map