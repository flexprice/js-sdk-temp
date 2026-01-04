import * as z from "zod/v3";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DtoPaymentAttemptResponse } from "./dtopaymentattemptresponse.js";
import { TypesPaymentDestinationType } from "./typespaymentdestinationtype.js";
import { TypesPaymentMethodType } from "./typespaymentmethodtype.js";
import { TypesPaymentStatus } from "./typespaymentstatus.js";
export type DtoPaymentResponse = {
    amount?: string | undefined;
    attempts?: Array<DtoPaymentAttemptResponse> | undefined;
    createdAt?: string | undefined;
    createdBy?: string | undefined;
    currency?: string | undefined;
    destinationId?: string | undefined;
    destinationType?: TypesPaymentDestinationType | undefined;
    errorMessage?: string | undefined;
    failedAt?: string | undefined;
    gatewayMetadata?: {
        [k: string]: string;
    } | undefined;
    gatewayPaymentId?: string | undefined;
    gatewayTrackingId?: string | undefined;
    id?: string | undefined;
    idempotencyKey?: string | undefined;
    invoiceNumber?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    paymentGateway?: string | undefined;
    paymentMethodId?: string | undefined;
    paymentMethodType?: TypesPaymentMethodType | undefined;
    paymentStatus?: TypesPaymentStatus | undefined;
    paymentUrl?: string | undefined;
    refundedAt?: string | undefined;
    saveCardAndMakeDefault?: boolean | undefined;
    succeededAt?: string | undefined;
    tenantId?: string | undefined;
    trackAttempts?: boolean | undefined;
    updatedAt?: string | undefined;
    updatedBy?: string | undefined;
};
/** @internal */
export declare const DtoPaymentResponse$inboundSchema: z.ZodType<DtoPaymentResponse, z.ZodTypeDef, unknown>;
export declare function dtoPaymentResponseFromJSON(jsonString: string): SafeParseResult<DtoPaymentResponse, SDKValidationError>;
//# sourceMappingURL=dtopaymentresponse.d.ts.map