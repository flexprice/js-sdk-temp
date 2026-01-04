import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PricePrice } from "./priceprice.js";
import { TypesBillingPeriod } from "./typesbillingperiod.js";
import { TypesCommitmentType } from "./typescommitmenttype.js";
import { TypesInvoiceCadence } from "./typesinvoicecadence.js";
import { TypesPriceType } from "./typespricetype.js";
import { TypesStatus } from "./typesstatus.js";
import { TypesSubscriptionLineItemEntityType } from "./typessubscriptionlineitementitytype.js";
export type SubscriptionSubscriptionLineItem = {
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
    price?: PricePrice | undefined;
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
export declare const SubscriptionSubscriptionLineItem$inboundSchema: z.ZodType<SubscriptionSubscriptionLineItem, z.ZodTypeDef, unknown>;
export declare function subscriptionSubscriptionLineItemFromJSON(jsonString: string): SafeParseResult<SubscriptionSubscriptionLineItem, SDKValidationError>;
//# sourceMappingURL=subscriptionsubscriptionlineitem.d.ts.map