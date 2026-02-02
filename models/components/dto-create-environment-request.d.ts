import * as z from "zod/v3";
export type DtoCreateEnvironmentRequest = {
    name: string;
    type: string;
};
/** @internal */
export type DtoCreateEnvironmentRequest$Outbound = {
    name: string;
    type: string;
};
/** @internal */
export declare const DtoCreateEnvironmentRequest$outboundSchema: z.ZodType<DtoCreateEnvironmentRequest$Outbound, z.ZodTypeDef, DtoCreateEnvironmentRequest>;
export declare function dtoCreateEnvironmentRequestToJSON(dtoCreateEnvironmentRequest: DtoCreateEnvironmentRequest): string;
//# sourceMappingURL=dto-create-environment-request.d.ts.map