import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
export declare class Auth extends ClientSDK {
    /**
     * Login
     *
     * @remarks
     * Login a user
     */
    postAuthLogin(request: components.DtoLoginRequest, options?: RequestOptions): Promise<components.DtoAuthResponse>;
    /**
     * Sign up
     *
     * @remarks
     * Sign up a new user
     */
    postAuthSignup(request: components.DtoSignUpRequest, options?: RequestOptions): Promise<components.DtoAuthResponse>;
}
//# sourceMappingURL=auth.d.ts.map