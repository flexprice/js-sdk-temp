import * as z from "zod/v3";
import { ClosedEnum } from "../../types/enums.js";
/**
 * provider is the integration provider name (e.g., "stripe", "razorpay")
 */
export declare const Provider: {
    readonly Stripe: "stripe";
    readonly Razorpay: "razorpay";
    readonly Paypal: "paypal";
};
/**
 * provider is the integration provider name (e.g., "stripe", "razorpay")
 */
export type Provider = ClosedEnum<typeof Provider>;
/**
 * Integration entity mapping for external provider systems
 */
export type DtoIntegrationEntityMapping = {
    /**
     * id is the external entity ID from the provider
     */
    id: string;
    /**
     * provider is the integration provider name (e.g., "stripe", "razorpay")
     */
    provider: Provider;
};
/** @internal */
export declare const Provider$outboundSchema: z.ZodNativeEnum<typeof Provider>;
/** @internal */
export type DtoIntegrationEntityMapping$Outbound = {
    id: string;
    provider: string;
};
/** @internal */
export declare const DtoIntegrationEntityMapping$outboundSchema: z.ZodType<DtoIntegrationEntityMapping$Outbound, z.ZodTypeDef, DtoIntegrationEntityMapping>;
export declare function dtoIntegrationEntityMappingToJSON(dtoIntegrationEntityMapping: DtoIntegrationEntityMapping): string;
//# sourceMappingURL=dtointegrationentitymapping.d.ts.map