import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Plans extends ClientSDK {
    /**
     * Get plans
     *
     * @remarks
     * Get plans with optional filtering
     */
    getPlans(request: operations.GetPlansRequest, options?: RequestOptions): Promise<components.DtoListPlansResponse>;
    /**
     * Create a new plan
     *
     * @remarks
     * Create a new plan with the specified configuration
     */
    postPlans(request: components.DtoCreatePlanRequest, options?: RequestOptions): Promise<components.DtoPlanResponse>;
    /**
     * List plans by filter
     *
     * @remarks
     * List plans by filter
     */
    postPlansSearch(request: components.TypesPlanFilter, options?: RequestOptions): Promise<components.DtoListPlansResponse>;
    /**
     * Get a plan
     *
     * @remarks
     * Get a plan by ID
     */
    getPlansId(id: string, options?: RequestOptions): Promise<components.DtoPlanResponse>;
    /**
     * Update a plan
     *
     * @remarks
     * Update a plan by ID
     */
    putPlansId(id: string, body: components.DtoUpdatePlanRequest, options?: RequestOptions): Promise<components.DtoPlanResponse>;
    /**
     * Delete a plan
     *
     * @remarks
     * Delete a plan by ID
     */
    deletePlansId(id: string, options?: RequestOptions): Promise<components.DtoSuccessResponse>;
    /**
     * Synchronize plan prices
     *
     * @remarks
     * Synchronize current plan prices with all existing active subscriptions
     */
    postPlansIdSyncSubscriptions(id: string, options?: RequestOptions): Promise<components.ModelsTemporalWorkflowResult>;
}
//# sourceMappingURL=plans.d.ts.map