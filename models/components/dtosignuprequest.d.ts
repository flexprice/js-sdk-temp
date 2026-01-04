import * as z from "zod/v3";
export type DtoSignUpRequest = {
    email: string;
    password?: string | undefined;
    tenantName?: string | undefined;
    token?: string | undefined;
};
/** @internal */
export type DtoSignUpRequest$Outbound = {
    email: string;
    password?: string | undefined;
    tenant_name?: string | undefined;
    token?: string | undefined;
};
/** @internal */
export declare const DtoSignUpRequest$outboundSchema: z.ZodType<DtoSignUpRequest$Outbound, z.ZodTypeDef, DtoSignUpRequest>;
export declare function dtoSignUpRequestToJSON(dtoSignUpRequest: DtoSignUpRequest): string;
//# sourceMappingURL=dtosignuprequest.d.ts.map