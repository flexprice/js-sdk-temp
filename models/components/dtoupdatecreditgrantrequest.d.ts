import * as z from "zod/v3";
export type DtoUpdateCreditGrantRequest = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export type DtoUpdateCreditGrantRequest$Outbound = {
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const DtoUpdateCreditGrantRequest$outboundSchema: z.ZodType<DtoUpdateCreditGrantRequest$Outbound, z.ZodTypeDef, DtoUpdateCreditGrantRequest>;
export declare function dtoUpdateCreditGrantRequestToJSON(dtoUpdateCreditGrantRequest: DtoUpdateCreditGrantRequest): string;
//# sourceMappingURL=dtoupdatecreditgrantrequest.d.ts.map