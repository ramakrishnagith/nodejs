import { Endpoint, EndpointRoutes } from "../endpoint.interface";

export interface HealthEndpointRoutes extends EndpointRoutes {
    health: {
        toString: () => string;
        test1: {
            toString: () => string;
            test2: {
                toString: () => string;
            };
            test3: {
                toString: () => string;
            }
        };
    };
}
export interface HealthEndpoint extends Endpoint {
    baseUrl: string;
    routes: HealthEndpointRoutes;
}
