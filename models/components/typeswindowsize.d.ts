import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesWindowSize: {
    readonly Minute: "MINUTE";
    readonly FifteenMIN: "15MIN";
    readonly ThirtyMIN: "30MIN";
    readonly Hour: "HOUR";
    readonly ThreeHOUR: "3HOUR";
    readonly SixHOUR: "6HOUR";
    readonly TwelveHOUR: "12HOUR";
    readonly Day: "DAY";
    readonly Week: "WEEK";
    readonly Month: "MONTH";
};
export type TypesWindowSize = ClosedEnum<typeof TypesWindowSize>;
/** @internal */
export declare const TypesWindowSize$inboundSchema: z.ZodNativeEnum<typeof TypesWindowSize>;
/** @internal */
export declare const TypesWindowSize$outboundSchema: z.ZodNativeEnum<typeof TypesWindowSize>;
//# sourceMappingURL=typeswindowsize.d.ts.map