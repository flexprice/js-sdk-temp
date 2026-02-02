import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantScope: {
    readonly Plan: "PLAN";
    readonly Subscription: "SUBSCRIPTION";
};
export type TypesCreditGrantScope = ClosedEnum<typeof TypesCreditGrantScope>;
/** @internal */
export declare const TypesCreditGrantScope$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantScope>;
/** @internal */
export declare const TypesCreditGrantScope$outboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantScope>;
//# sourceMappingURL=types-credit-grant-scope.d.ts.map