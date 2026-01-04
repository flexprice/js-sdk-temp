import * as z from "zod/v3";
import { TypesCommitmentType } from "./typescommitmenttype.js";
export type DtoLineItemCommitmentConfig = {
    /**
     * CommitmentAmount is the minimum amount committed for this line item
     */
    commitmentAmount?: number | undefined;
    /**
     * CommitmentQuantity is the minimum quantity committed for this line item
     */
    commitmentQuantity?: number | undefined;
    commitmentType?: TypesCommitmentType | undefined;
    /**
     * EnableTrueUp determines if true-up fee should be applied when usage is below commitment
     */
    enableTrueUp?: boolean | undefined;
    /**
     * IsWindowCommitment determines if commitment is applied per window (e.g., per day) rather than per billing period
     */
    isWindowCommitment?: boolean | undefined;
    /**
     * OverageFactor is a multiplier applied to usage beyond the commitment
     */
    overageFactor?: number | undefined;
};
/** @internal */
export type DtoLineItemCommitmentConfig$Outbound = {
    commitment_amount?: number | undefined;
    commitment_quantity?: number | undefined;
    commitment_type?: string | undefined;
    enable_true_up?: boolean | undefined;
    is_window_commitment?: boolean | undefined;
    overage_factor?: number | undefined;
};
/** @internal */
export declare const DtoLineItemCommitmentConfig$outboundSchema: z.ZodType<DtoLineItemCommitmentConfig$Outbound, z.ZodTypeDef, DtoLineItemCommitmentConfig>;
export declare function dtoLineItemCommitmentConfigToJSON(dtoLineItemCommitmentConfig: DtoLineItemCommitmentConfig): string;
//# sourceMappingURL=dtolineitemcommitmentconfig.d.ts.map