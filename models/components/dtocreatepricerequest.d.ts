import * as z from "zod/v3";
import { DtoCreatePriceTier, DtoCreatePriceTier$Outbound } from "./dtocreatepricetier.js";
import { DtoPriceUnitConfig, DtoPriceUnitConfig$Outbound } from "./dtopriceunitconfig.js";
import { PriceTransformQuantity, PriceTransformQuantity$Outbound } from "./pricetransformquantity.js";
import { TypesBillingCadence } from "./typesbillingcadence.js";
import { TypesBillingModel } from "./typesbillingmodel.js";
import { TypesBillingPeriod } from "./typesbillingperiod.js";
import { TypesBillingTier } from "./typesbillingtier.js";
import { TypesInvoiceCadence } from "./typesinvoicecadence.js";
import { TypesPriceEntityType } from "./typespriceentitytype.js";
import { TypesPriceType } from "./typespricetype.js";
import { TypesPriceUnitType } from "./typespriceunittype.js";
export type DtoCreatePriceRequest = {
    amount?: string | undefined;
    billingCadence: TypesBillingCadence;
    billingModel: TypesBillingModel;
    billingPeriod: TypesBillingPeriod;
    billingPeriodCount?: number | undefined;
    currency: string;
    description?: string | undefined;
    displayName?: string | undefined;
    endDate?: string | undefined;
    entityId: string;
    entityType: TypesPriceEntityType;
    filterValues?: {
        [k: string]: Array<string>;
    } | undefined;
    /**
     * GroupID is the id of the group to add the price to
     */
    groupId?: string | undefined;
    invoiceCadence: TypesInvoiceCadence;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meterId?: string | undefined;
    /**
     * MinQuantity is the minimum quantity of the price
     */
    minQuantity?: number | undefined;
    priceUnitConfig?: DtoPriceUnitConfig | undefined;
    priceUnitType: TypesPriceUnitType;
    startDate?: string | undefined;
    tierMode?: TypesBillingTier | undefined;
    tiers?: Array<DtoCreatePriceTier> | undefined;
    transformQuantity?: PriceTransformQuantity | undefined;
    trialPeriod?: number | undefined;
    type: TypesPriceType;
};
/** @internal */
export type DtoCreatePriceRequest$Outbound = {
    amount?: string | undefined;
    billing_cadence: string;
    billing_model: string;
    billing_period: string;
    billing_period_count?: number | undefined;
    currency: string;
    description?: string | undefined;
    display_name?: string | undefined;
    end_date?: string | undefined;
    entity_id: string;
    entity_type: string;
    filter_values?: {
        [k: string]: Array<string>;
    } | undefined;
    group_id?: string | undefined;
    invoice_cadence: string;
    lookup_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meter_id?: string | undefined;
    min_quantity?: number | undefined;
    price_unit_config?: DtoPriceUnitConfig$Outbound | undefined;
    price_unit_type: string;
    start_date?: string | undefined;
    tier_mode?: string | undefined;
    tiers?: Array<DtoCreatePriceTier$Outbound> | undefined;
    transform_quantity?: PriceTransformQuantity$Outbound | undefined;
    trial_period?: number | undefined;
    type: string;
};
/** @internal */
export declare const DtoCreatePriceRequest$outboundSchema: z.ZodType<DtoCreatePriceRequest$Outbound, z.ZodTypeDef, DtoCreatePriceRequest>;
export declare function dtoCreatePriceRequestToJSON(dtoCreatePriceRequest: DtoCreatePriceRequest): string;
//# sourceMappingURL=dtocreatepricerequest.d.ts.map