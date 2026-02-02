import * as z from "zod/v3";
import * as components from "../components/index.js";
export type PutEnvironmentsIdRequest = {
    /**
     * Environment ID
     */
    id: string;
    /**
     * Environment
     */
    body: components.DtoUpdateEnvironmentRequest;
};
/** @internal */
export type PutEnvironmentsIdRequest$Outbound = {
    id: string;
    body: components.DtoUpdateEnvironmentRequest$Outbound;
};
/** @internal */
export declare const PutEnvironmentsIdRequest$outboundSchema: z.ZodType<PutEnvironmentsIdRequest$Outbound, z.ZodTypeDef, PutEnvironmentsIdRequest>;
export declare function putEnvironmentsIdRequestToJSON(putEnvironmentsIdRequest: PutEnvironmentsIdRequest): string;
//# sourceMappingURL=put-environments-id.d.ts.map