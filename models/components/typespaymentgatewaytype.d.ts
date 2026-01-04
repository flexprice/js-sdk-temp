import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPaymentGatewayType: {
    readonly Stripe: "stripe";
    readonly Razorpay: "razorpay";
    readonly Nomod: "nomod";
};
export type TypesPaymentGatewayType = ClosedEnum<typeof TypesPaymentGatewayType>;
/** @internal */
export declare const TypesPaymentGatewayType$outboundSchema: z.ZodNativeEnum<typeof TypesPaymentGatewayType>;
//# sourceMappingURL=typespaymentgatewaytype.d.ts.map