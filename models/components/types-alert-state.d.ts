import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAlertState: {
    readonly Ok: "ok";
    readonly Info: "info";
    readonly Warning: "warning";
    readonly InAlarm: "in_alarm";
};
export type TypesAlertState = ClosedEnum<typeof TypesAlertState>;
/** @internal */
export declare const TypesAlertState$inboundSchema: z.ZodNativeEnum<typeof TypesAlertState>;
/** @internal */
export declare const TypesAlertState$outboundSchema: z.ZodNativeEnum<typeof TypesAlertState>;
//# sourceMappingURL=types-alert-state.d.ts.map