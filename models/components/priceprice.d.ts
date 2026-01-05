import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PriceJSONBTransformQuantity } from "./pricejsonbtransformquantity.js";
import { PricePriceTier } from "./pricepricetier.js";
import { TypesBillingCadence } from "./typesbillingcadence.js";
import { TypesBillingModel } from "./typesbillingmodel.js";
import { TypesBillingPeriod } from "./typesbillingperiod.js";
import { TypesBillingTier } from "./typesbillingtier.js";
import { TypesInvoiceCadence } from "./typesinvoicecadence.js";
import { TypesPriceEntityType } from "./typespriceentitytype.js";
import { TypesPriceType } from "./typespricetype.js";
import { TypesPriceUnitType } from "./typespriceunittype.js";
import { TypesStatus } from "./typesstatus.js";
export type PricePrice = {
    /**
     * Amount stored in main currency units (e.g., dollars, not cents)
     *
     * @remarks
     * For USD: 12.50 means $12.50
     */
    amount?: string | undefined;
    billingCadence?: TypesBillingCadence | undefined;
    billingModel?: TypesBillingModel | undefined;
    billingPeriod?: TypesBillingPeriod | undefined;
    /**
     * BillingPeriodCount is the count of the billing period ex 1, 3, 6, 12
     */
    billingPeriodCount?: number | undefined;
    /**
     * ConversionRate is the conversion rate of the price unit to the fiat currency
     */
    conversionRate?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Currency 3 digit ISO currency code in lowercase ex usd, eur, gbp
     */
    currency?: string | undefined;
    /**
     * Description of the price
     */
    description?: string | undefined;
    /**
     * DisplayAmount is the formatted amount with currency symbol
     *
     * @remarks
     * For USD: $12.50
     */
    displayAmount?: string | undefined;
    /**
     * DisplayName is the name of the price
     */
    displayName?: string | undefined;
    /**
     * DisplayPriceUnitAmount is the formatted amount of the price unit
     */
    displayPriceUnitAmount?: string | undefined;
    /**
     * EndDate is the end date of the price
     */
    endDate?: string | undefined;
    /**
     * EntityID holds the value of the "entity_id" field.
     */
    entityId?: string | undefined;
    entityType?: TypesPriceEntityType | undefined;
    /**
     * EnvironmentID is the environment identifier for the price
     */
    environmentId?: string | undefined;
    /**
     * GroupID references the group this price belongs to
     */
    groupId?: string | undefined;
    /**
     * ID uuid identifier for the price
     */
    id?: string | undefined;
    invoiceCadence?: TypesInvoiceCadence | undefined;
    /**
     * LookupKey used for looking up the price in the database
     */
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * MeterID is the id of the meter for usage based pricing
     */
    meterId?: string | undefined;
    /**
     * MinQuantity is the minimum quantity of the price
     */
    minQuantity?: string | undefined;
    /**
     * ParentPriceID references the root price (always set for price lineage tracking)
     */
    parentPriceId?: string | undefined;
    /**
     * PriceUnit is the code of the price unit (e.g., 'btc', 'eth')
     */
    priceUnit?: string | undefined;
    /**
     * PriceUnitAmount is the amount of the price unit
     */
    priceUnitAmount?: string | undefined;
    /**
     * PriceUnitID is the id of the price unit (for CUSTOM type)
     */
    priceUnitId?: string | undefined;
    /**
     * PriceUnitTiers are the tiers for the price unit when BillingModel is TIERED
     */
    priceUnitTiers?: Array<PricePriceTier> | undefined;
    priceUnitType?: TypesPriceUnitType | undefined;
    /**
     * StartDate is the start date of the price
     */
    startDate?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    tierMode?: TypesBillingTier | undefined;
    tiers?: Array<PricePriceTier> | undefined;
    transformQuantity?: PriceJSONBTransformQuantity | undefined;
    /**
     * TrialPeriod is the number of days for the trial period
     *
     * @remarks
     * Note: This is only applicable for recurring prices (BILLING_CADENCE_RECURRING)
     */
    trialPeriod?: number | undefined;
    type?: TypesPriceType | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const PricePrice$inboundSchema: z.ZodType<PricePrice, z.ZodTypeDef, unknown>;
export declare function pricePriceFromJSON(jsonString: string): SafeParseResult<PricePrice, SDKValidationError>;
//# sourceMappingURL=priceprice.d.ts.map