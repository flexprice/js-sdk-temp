import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { TypesBillingPeriod } from "./types-billing-period.js";
import { TypesCommitmentType } from "./types-commitment-type.js";
import { TypesInvoiceCadence } from "./types-invoice-cadence.js";
import { TypesPriceType } from "./types-price-type.js";
import { TypesStatus } from "./types-status.js";
import { TypesSubscriptionLineItemEntityType } from "./types-subscription-line-item-entity-type.js";
export type DtoSubscriptionLineItemResponse = {
    billingPeriod?: TypesBillingPeriod | undefined;
    /**
     * Commitment fields
     */
    commitmentAmount?: number | undefined;
    commitmentOverageFactor?: number | undefined;
    commitmentQuantity?: number | undefined;
    commitmentTrueUpEnabled?: boolean | undefined;
    commitmentType?: TypesCommitmentType | undefined;
    commitmentWindowed?: boolean | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    customerId?: string | undefined;
    displayName?: string | undefined;
    endDate?: string | undefined;
    entityId?: string | undefined;
    entityType?: TypesSubscriptionLineItemEntityType | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    invoiceCadence?: TypesInvoiceCadence | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meterDisplayName?: string | undefined;
    meterId?: string | undefined;
    planDisplayName?: string | undefined;
    price?: DtoPriceResponse | undefined;
    priceId?: string | undefined;
    priceType?: TypesPriceType | undefined;
    priceUnit?: string | undefined;
    priceUnitId?: string | undefined;
    quantity?: string | undefined;
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    subscriptionId?: string | undefined;
    subscriptionPhaseId?: string | undefined;
    tenantId?: string | undefined;
    trialPeriod?: number | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoSubscriptionLineItemResponse$inboundSchema: z.ZodType<DtoSubscriptionLineItemResponse, z.ZodTypeDef, unknown>;
export declare function dtoSubscriptionLineItemResponseFromJSON(jsonString: string): SafeParseResult<DtoSubscriptionLineItemResponse, SDKValidationError>;
//# sourceMappingURL=dto-subscription-line-item-response.d.ts.map