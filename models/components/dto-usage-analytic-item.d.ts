import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { DtoPriceResponse } from "./dto-price-response.js";
import { DtoUsageAnalyticPoint } from "./dto-usage-analytic-point.js";
import { GithubComFlexpriceFlexpriceInternalDomainAddonAddon } from "./github-com-flexprice-flexprice-internal-domain-addon-addon.js";
import { GithubComFlexpriceFlexpriceInternalDomainFeatureFeature } from "./github-com-flexprice-flexprice-internal-domain-feature-feature.js";
import { GithubComFlexpriceFlexpriceInternalDomainPlanPlan } from "./github-com-flexprice-flexprice-internal-domain-plan-plan.js";
import { MeterMeter } from "./meter-meter.js";
import { SubscriptionSubscriptionLineItem } from "./subscription-subscription-line-item.js";
import { TypesAggregationType } from "./types-aggregation-type.js";
import { TypesCommitmentInfo } from "./types-commitment-info.js";
import { TypesWindowSize } from "./types-window-size.js";
export type DtoUsageAnalyticItem = {
    addOnId?: string | undefined;
    addon?: GithubComFlexpriceFlexpriceInternalDomainAddonAddon | undefined;
    aggregationType?: TypesAggregationType | undefined;
    commitmentInfo?: TypesCommitmentInfo | undefined;
    currency?: string | undefined;
    /**
     * Number of events that contributed to this aggregation
     */
    eventCount?: number | undefined;
    eventName?: string | undefined;
    feature?: GithubComFlexpriceFlexpriceInternalDomainFeatureFeature | undefined;
    featureId?: string | undefined;
    meter?: MeterMeter | undefined;
    /**
     * Meter ID
     */
    meterId?: string | undefined;
    name?: string | undefined;
    plan?: GithubComFlexpriceFlexpriceInternalDomainPlanPlan | undefined;
    planId?: string | undefined;
    points?: Array<DtoUsageAnalyticPoint> | undefined;
    price?: DtoPriceResponse | undefined;
    /**
     * Price ID used for this usage
     */
    priceId?: string | undefined;
    /**
     * Stores property values for flexible grouping (e.g., org_id -> "org123")
     */
    properties?: {
        [k: string]: string;
    } | undefined;
    source?: string | undefined;
    /**
     * List of sources when not grouping by source
     */
    sources?: Array<string> | undefined;
    /**
     * Subscription line item ID
     */
    subLineItemId?: string | undefined;
    /**
     * Subscription ID
     */
    subscriptionId?: string | undefined;
    subscriptionLineItem?: SubscriptionSubscriptionLineItem | undefined;
    totalCost?: string | undefined;
    totalUsage?: string | undefined;
    unit?: string | undefined;
    unitPlural?: string | undefined;
    windowSize?: TypesWindowSize | undefined;
};
/** @internal */
export declare const DtoUsageAnalyticItem$inboundSchema: z.ZodType<DtoUsageAnalyticItem, z.ZodTypeDef, unknown>;
export declare function dtoUsageAnalyticItemFromJSON(jsonString: string): SafeParseResult<DtoUsageAnalyticItem, SDKValidationError>;
//# sourceMappingURL=dto-usage-analytic-item.d.ts.map