import { HealthEndpoint, HealthEndpointRoutes } from "./health.interface";

export class HealthEndpointFactory {
    public static build(baseUrl: string): HealthEndpoint {
        return {
            baseUrl: baseUrl,
            routes: this.buildRoutes(baseUrl)
        }
    }
    private static buildRoutes(baseUrl: string): HealthEndpointRoutes {
        return {
            health: {
                toString: () => `${baseUrl}/health`,
                test1: {
                    toString: () => `${baseUrl}/health/test1`,
                    test2: {
                        toString: () => `${baseUrl}/health/test1/test2`,
                    },
                    test3: {
                        toString: () => `${baseUrl}/health/test1/test2`
                    }
                }
            },
        } as HealthEndpointRoutes;
    }
}
