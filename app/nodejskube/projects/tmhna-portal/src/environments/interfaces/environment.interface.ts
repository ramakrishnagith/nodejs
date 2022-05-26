import { Endpoints } from "./endpoints/endpoints.interface";

export type environmentName = 'prod' | 'dev';
export interface EnvironmentRef {
    production: boolean;
    env: environmentName;
    baseUrl: string;
    endpoints: Endpoints;
}
