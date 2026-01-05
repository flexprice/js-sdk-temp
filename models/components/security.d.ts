import * as z from "zod/v3";
export type Security = {
    apiKeyAuth: string;
};
/** @internal */
export type Security$Outbound = {
    ApiKeyAuth: string;
};
/** @internal */
export declare const Security$outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security>;
export declare function securityToJSON(security: Security): string;
//# sourceMappingURL=security.d.ts.map