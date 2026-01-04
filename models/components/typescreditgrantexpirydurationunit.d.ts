import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesCreditGrantExpiryDurationUnit: {
    readonly Day: "DAY";
    readonly Week: "WEEK";
    readonly Month: "MONTH";
    readonly Year: "YEAR";
};
export type TypesCreditGrantExpiryDurationUnit = ClosedEnum<typeof TypesCreditGrantExpiryDurationUnit>;
/** @internal */
export declare const TypesCreditGrantExpiryDurationUnit$inboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantExpiryDurationUnit>;
/** @internal */
export declare const TypesCreditGrantExpiryDurationUnit$outboundSchema: z.ZodNativeEnum<typeof TypesCreditGrantExpiryDurationUnit>;
//# sourceMappingURL=typescreditgrantexpirydurationunit.d.ts.map