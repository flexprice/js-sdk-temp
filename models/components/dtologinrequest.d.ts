import * as z from "zod/v3";
export type DtoLoginRequest = {
    email: string;
    password: string;
    token?: string | undefined;
};
/** @internal */
export type DtoLoginRequest$Outbound = {
    email: string;
    password: string;
    token?: string | undefined;
};
/** @internal */
export declare const DtoLoginRequest$outboundSchema: z.ZodType<DtoLoginRequest$Outbound, z.ZodTypeDef, DtoLoginRequest>;
export declare function dtoLoginRequestToJSON(dtoLoginRequest: DtoLoginRequest): string;
//# sourceMappingURL=dtologinrequest.d.ts.map