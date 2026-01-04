import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAlertEntityType: {
    readonly Wallet: "wallet";
    readonly Feature: "feature";
};
export type TypesAlertEntityType = ClosedEnum<typeof TypesAlertEntityType>;
/** @internal */
export declare const TypesAlertEntityType$inboundSchema: z.ZodNativeEnum<typeof TypesAlertEntityType>;
/** @internal */
export declare const TypesAlertEntityType$outboundSchema: z.ZodNativeEnum<typeof TypesAlertEntityType>;
//# sourceMappingURL=typesalertentitytype.d.ts.map