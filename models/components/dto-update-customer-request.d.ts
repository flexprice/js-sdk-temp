import * as z from "zod/v3";
import { DtoIntegrationEntityMapping, DtoIntegrationEntityMapping$Outbound } from "./dto-integration-entity-mapping.js";
/**
 * Request object for updating an existing customer. All fields are optional - only provided fields will be updated
 */
export type DtoUpdateCustomerRequest = {
    /**
     * address_city is the updated city name with maximum 100 characters
     */
    addressCity?: string | undefined;
    /**
     * address_country is the updated two-letter ISO 3166-1 alpha-2 country code
     */
    addressCountry?: string | undefined;
    /**
     * address_line1 is the updated primary address line with maximum 255 characters
     */
    addressLine1?: string | undefined;
    /**
     * address_line2 is the updated secondary address line with maximum 255 characters
     */
    addressLine2?: string | undefined;
    /**
     * address_postal_code is the updated postal code with maximum 20 characters
     */
    addressPostalCode?: string | undefined;
    /**
     * address_state is the updated state, province, or region name with maximum 100 characters
     */
    addressState?: string | undefined;
    /**
     * email is the updated email address and must be a valid email format if provided
     */
    email?: string | undefined;
    /**
     * external_id is the updated external identifier for the customer
     */
    externalId?: string | undefined;
    /**
     * integration_entity_mapping contains provider integration mappings for this customer
     */
    integrationEntityMapping?: Array<DtoIntegrationEntityMapping> | undefined;
    /**
     * metadata contains updated key-value pairs that will replace existing metadata
     */
    metadata?: {
        [k: string]: string;
    } | undefined;
    /**
     * name is the updated name or company name for the customer
     */
    name?: string | undefined;
    /**
     * parent_customer_external_id is the external ID of the parent customer from your system
     *
     * @remarks
     * Exactly one of parent_customer_id or parent_customer_external_id may be provided
     * If you provide the external ID, the parent customer value will be ignored
     */
    parentCustomerExternalId?: string | undefined;
    /**
     * parent_customer_id is the internal FlexPrice ID of the parent customer
     */
    parentCustomerId?: string | undefined;
};
/** @internal */
export type DtoUpdateCustomerRequest$Outbound = {
    address_city?: string | undefined;
    address_country?: string | undefined;
    address_line1?: string | undefined;
    address_line2?: string | undefined;
    address_postal_code?: string | undefined;
    address_state?: string | undefined;
    email?: string | undefined;
    external_id?: string | undefined;
    integration_entity_mapping?: Array<DtoIntegrationEntityMapping$Outbound> | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    name?: string | undefined;
    parent_customer_external_id?: string | undefined;
    parent_customer_id?: string | undefined;
};
/** @internal */
export declare const DtoUpdateCustomerRequest$outboundSchema: z.ZodType<DtoUpdateCustomerRequest$Outbound, z.ZodTypeDef, DtoUpdateCustomerRequest>;
export declare function dtoUpdateCustomerRequestToJSON(dtoUpdateCustomerRequest: DtoUpdateCustomerRequest): string;
//# sourceMappingURL=dto-update-customer-request.d.ts.map