import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TypesAlertSettings } from "./typesalertsettings.js";
import { TypesFeatureType } from "./typesfeaturetype.js";
import { TypesStatus } from "./typesstatus.js";
export type GithubComFlexpriceFlexpriceInternalDomainFeatureFeature = {
    alertSettings?: TypesAlertSettings | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    meterId?: string | undefined;
    name?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    type?: TypesFeatureType | undefined;
    unitPlural?: string | undefined;
    unitSingular?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const GithubComFlexpriceFlexpriceInternalDomainFeatureFeature$inboundSchema: z.ZodType<GithubComFlexpriceFlexpriceInternalDomainFeatureFeature, z.ZodTypeDef, unknown>;
export declare function githubComFlexpriceFlexpriceInternalDomainFeatureFeatureFromJSON(jsonString: string): SafeParseResult<GithubComFlexpriceFlexpriceInternalDomainFeatureFeature, SDKValidationError>;
//# sourceMappingURL=githubcomflexpriceflexpriceinternaldomainfeaturefeature.d.ts.map