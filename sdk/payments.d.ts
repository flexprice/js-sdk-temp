import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Payments extends ClientSDK {
    /**
     * List payments
     *
     * @remarks
     * List payments with the specified filter
     */
    getPayments(request: operations.GetPaymentsRequest, options?: RequestOptions): Promise<components.DtoListPaymentsResponse>;
    /**
     * Create a new payment
     *
     * @remarks
     * Create a new payment with the specified configuration
     */
    postPayments(request: components.DtoCreatePaymentRequest, options?: RequestOptions): Promise<components.DtoPaymentResponse>;
    /**
     * Get a payment by ID
     *
     * @remarks
     * Get a payment by ID
     */
    getPaymentsId(id: string, options?: RequestOptions): Promise<components.DtoPaymentResponse>;
    /**
     * Update a payment
     *
     * @remarks
     * Update a payment with the specified configuration
     */
    putPaymentsId(id: string, body: components.DtoUpdatePaymentRequest, options?: RequestOptions): Promise<components.DtoPaymentResponse>;
    /**
     * Delete a payment
     *
     * @remarks
     * Delete a payment
     */
    deletePaymentsId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Process a payment
     *
     * @remarks
     * Process a payment
     */
    postPaymentsIdProcess(id: string, options?: RequestOptions): Promise<components.DtoPaymentResponse>;
}
//# sourceMappingURL=payments.d.ts.map