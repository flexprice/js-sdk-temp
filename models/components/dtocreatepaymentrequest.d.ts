import * as z from "zod/v3";
import { TypesPaymentDestinationType } from "./typespaymentdestinationtype.js";
import { TypesPaymentGatewayType } from "./typespaymentgatewaytype.js";
import { TypesPaymentMethodType } from "./typespaymentmethodtype.js";
export type DtoCreatePaymentRequest = {
    amount: string;
    cancelUrl?: string | undefined;
    currency: string;
    destinationId: string;
    destinationType: TypesPaymentDestinationType;
    idempotencyKey?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    paymentGateway?: TypesPaymentGatewayType | undefined;
    paymentMethodId?: string | undefined;
    paymentMethodType: TypesPaymentMethodType;
    processPayment?: boolean | undefined;
    saveCardAndMakeDefault?: boolean | undefined;
    successUrl?: string | undefined;
};
/** @internal */
export type DtoCreatePaymentRequest$Outbound = {
    amount: string;
    cancel_url?: string | undefined;
    currency: string;
    destination_id: string;
    destination_type: string;
    idempotency_key?: string | undefined;
    metadata?: {
        [k: string]: string;
    } | undefined;
    payment_gateway?: string | undefined;
    payment_method_id?: string | undefined;
    payment_method_type: string;
    process_payment: boolean;
    save_card_and_make_default: boolean;
    success_url?: string | undefined;
};
/** @internal */
export declare const DtoCreatePaymentRequest$outboundSchema: z.ZodType<DtoCreatePaymentRequest$Outbound, z.ZodTypeDef, DtoCreatePaymentRequest>;
export declare function dtoCreatePaymentRequestToJSON(dtoCreatePaymentRequest: DtoCreatePaymentRequest): string;
//# sourceMappingURL=dtocreatepaymentrequest.d.ts.map