import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
export declare const TypesAlertType: {
    readonly LowOngoingBalance: "low_ongoing_balance";
    readonly LowCreditBalance: "low_credit_balance";
    readonly FeatureWalletBalance: "feature_wallet_balance";
};
export type TypesAlertType = ClosedEnum<typeof TypesAlertType>;
/** @internal */
export declare const TypesAlertType$inboundSchema: z.ZodNativeEnum<typeof TypesAlertType>;
/** @internal */
export declare const TypesAlertType$outboundSchema: z.ZodNativeEnum<typeof TypesAlertType>;
//# sourceMappingURL=typesalerttype.d.ts.map