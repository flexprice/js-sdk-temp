import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesCommitmentType } from "./types-commitment-type.js";
export type TypesCommitmentInfo = {
    amount?: string | undefined;
    computedCommitmentUtilizedAmount?: string | undefined;
    computedOverageAmount?: string | undefined;
    /**
     * total_cost = computed_commitment_utilized_amount + computed_overage_amount + computed_true_up_amount
     */
    computedTrueUpAmount?: string | undefined;
    isWindowed?: boolean | undefined;
    overageFactor?: string | undefined;
    /**
     * Only used for quantity-based commitments
     */
    quantity?: string | undefined;
    trueUpEnabled?: boolean | undefined;
    type?: TypesCommitmentType | undefined;
};
/** @internal */
export declare const TypesCommitmentInfo$inboundSchema: z.ZodType<TypesCommitmentInfo, z.ZodTypeDef, unknown>;
/** @internal */
export type TypesCommitmentInfo$Outbound = {
    amount?: string | undefined;
    computed_commitment_utilized_amount?: string | undefined;
    computed_overage_amount?: string | undefined;
    computed_true_up_amount?: string | undefined;
    is_windowed?: boolean | undefined;
    overage_factor?: string | undefined;
    quantity?: string | undefined;
    true_up_enabled?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TypesCommitmentInfo$outboundSchema: z.ZodType<TypesCommitmentInfo$Outbound, z.ZodTypeDef, TypesCommitmentInfo>;
export declare function typesCommitmentInfoToJSON(typesCommitmentInfo: TypesCommitmentInfo): string;
export declare function typesCommitmentInfoFromJSON(jsonString: string): SafeParseResult<TypesCommitmentInfo, SDKValidationError>;
//# sourceMappingURL=types-commitment-info.d.ts.map