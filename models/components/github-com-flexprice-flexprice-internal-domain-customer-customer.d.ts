import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdk-validation-error.js";
import { TypesStatus } from "./types-status.js";
export type GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer = {
    /**
     * AddressCity is the city of the customer's address
     */
    addressCity?: string | undefined;
    /**
     * AddressCountry is the country of the customer's address (ISO 3166-1 alpha-2)
     */
    addressCountry?: string | undefined;
    /**
     * AddressLine1 is the first line of the customer's address
     */
    addressLine1?: string | undefined;
    /**
     * AddressLine2 is the second line of the customer's address
     */
    addressLine2?: string | undefined;
    /**
     * AddressPostalCode is the postal code of the customer's address
     */
    addressPostalCode?: string | undefined;
    /**
     * AddressState is the state of the customer's address
     */
    addressState?: string | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    /**
     * Email is the email of the customer
     */
    email?: string | undefined;
    /**
     * EnvironmentID is the environment identifier for the customer
     */
    environmentId?: string | undefined;
    /**
     * ExternalID is the external identifier for the customer
     */
    externalId?: string | undefined;
    /**
     * ID is the unique identifier for the customer
     */
    id?: string | undefined;
    /**
     * Metadata
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * Name is the name of the customer
     */
    name?: string | undefined;
    /**
     * ParentCustomerID is the parent customer identifier for the customer
     */
    parentCustomerId?: string | undefined;
    status?: TypesStatus | undefined;
    tenantId?: string | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer$inboundSchema: z.ZodType<GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer, z.ZodTypeDef, unknown>;
export declare function githubComFlexpriceFlexpriceInternalDomainCustomerCustomerFromJSON(jsonString: string): SafeParseResult<GithubComFlexpriceFlexpriceInternalDomainCustomerCustomer, SDKValidationError>;
//# sourceMappingURL=github-com-flexprice-flexprice-internal-domain-customer-customer.d.ts.map