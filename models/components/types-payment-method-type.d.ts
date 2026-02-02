import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPaymentMethodType: {
    readonly Card: "CARD";
    readonly Ach: "ACH";
    readonly Offline: "OFFLINE";
    readonly Credits: "CREDITS";
    readonly PaymentLink: "PAYMENT_LINK";
};
export type TypesPaymentMethodType = ClosedEnum<typeof TypesPaymentMethodType>;
/** @internal */
export declare const TypesPaymentMethodType$inboundSchema: z.ZodNativeEnum<typeof TypesPaymentMethodType>;
/** @internal */
export declare const TypesPaymentMethodType$outboundSchema: z.ZodNativeEnum<typeof TypesPaymentMethodType>;
//# sourceMappingURL=types-payment-method-type.d.ts.map