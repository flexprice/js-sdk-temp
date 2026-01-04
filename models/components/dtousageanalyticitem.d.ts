import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPriceResponse } from "./dtopriceresponse.js";
import { DtoUsageAnalyticPoint } from "./dtousageanalyticpoint.js";
import { GithubComFlexpriceFlexpriceInternalDomainAddonAddon } from "./githubcomflexpriceflexpriceinternaldomainaddonaddon.js";
import { GithubComFlexpriceFlexpriceInternalDomainFeatureFeature } from "./githubcomflexpriceflexpriceinternaldomainfeaturefeature.js";
import { GithubComFlexpriceFlexpriceInternalDomainPlanPlan } from "./githubcomflexpriceflexpriceinternaldomainplanplan.js";
import { MeterMeter } from "./metermeter.js";
import { SubscriptionSubscriptionLineItem } from "./subscriptionsubscriptionlineitem.js";
import { TypesAggregationType } from "./typesaggregationtype.js";
import { TypesCommitmentInfo } from "./typescommitmentinfo.js";
import { TypesWindowSize } from "./typeswindowsize.js";
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
//# sourceMappingURL=dtousageanalyticitem.d.ts.map