import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesAddonType } from "./types-addon-type.js";
import { TypesStatus } from "./types-status.js";
export type GithubComFlexpriceFlexpriceInternalDomainAddonAddon = {
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    description?: string | undefined;
    environmentId?: string | undefined;
    id?: string | undefined;
    lookupKey?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | undefined;
    name?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    type?: TypesAddonType | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const GithubComFlexpriceFlexpriceInternalDomainAddonAddon$inboundSchema: z.ZodType<GithubComFlexpriceFlexpriceInternalDomainAddonAddon, z.ZodTypeDef, unknown>;
export declare function githubComFlexpriceFlexpriceInternalDomainAddonAddonFromJSON(jsonString: string): SafeParseResult<GithubComFlexpriceFlexpriceInternalDomainAddonAddon, SDKValidationError>;
//# sourceMappingURL=github-com-flexprice-flexprice-internal-domain-addon-addon.d.ts.map