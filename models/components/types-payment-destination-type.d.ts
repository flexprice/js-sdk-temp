import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesPaymentDestinationType: {
    readonly Invoice: "INVOICE";
};
export type TypesPaymentDestinationType = ClosedEnum<typeof TypesPaymentDestinationType>;
/** @internal */
export declare const TypesPaymentDestinationType$inboundSchema: z.ZodNativeEnum<typeof TypesPaymentDestinationType>;
/** @internal */
export declare const TypesPaymentDestinationType$outboundSchema: z.ZodNativeEnum<typeof TypesPaymentDestinationType>;
//# sourceMappingURL=types-payment-destination-type.d.ts.map