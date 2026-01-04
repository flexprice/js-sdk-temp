import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAlertCondition: {
    readonly Above: "above";
    readonly Below: "below";
};
export type TypesAlertCondition = ClosedEnum<typeof TypesAlertCondition>;
/** @internal */
export declare const TypesAlertCondition$inboundSchema: z.ZodNativeEnum<typeof TypesAlertCondition>;
/** @internal */
export declare const TypesAlertCondition$outboundSchema: z.ZodNativeEnum<typeof TypesAlertCondition>;
//# sourceMappingURL=typesalertcondition.d.ts.map