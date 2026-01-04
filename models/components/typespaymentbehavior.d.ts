import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPaymentBehavior: {
    readonly AllowIncomplete: "allow_incomplete";
    readonly DefaultIncomplete: "default_incomplete";
    readonly ErrorIfIncomplete: "error_if_incomplete";
    readonly DefaultActive: "default_active";
};
export type TypesPaymentBehavior = ClosedEnum<typeof TypesPaymentBehavior>;
/** @internal */
export declare const TypesPaymentBehavior$outboundSchema: z.ZodNativeEnum<typeof TypesPaymentBehavior>;
//# sourceMappingURL=typespaymentbehavior.d.ts.map