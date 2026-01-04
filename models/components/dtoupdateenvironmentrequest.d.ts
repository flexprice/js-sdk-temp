import * as z from "zod/v3";
export type DtoUpdateEnvironmentRequest = {
    name?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export type DtoUpdateEnvironmentRequest$Outbound = {
    name?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const DtoUpdateEnvironmentRequest$outboundSchema: z.ZodType<DtoUpdateEnvironmentRequest$Outbound, z.ZodTypeDef, DtoUpdateEnvironmentRequest>;
export declare function dtoUpdateEnvironmentRequestToJSON(dtoUpdateEnvironmentRequest: DtoUpdateEnvironmentRequest): string;
//# sourceMappingURL=dtoupdateenvironmentrequest.d.ts.map