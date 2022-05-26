import { HealthEndpointFactory } from "./interfaces/endpoints/health/health.endpoint.factory";
import { EnvironmentRef } from "./interfaces/environment.interface";

const devBaseUrl: string = 'http://localhost:4200';
const apiBaseUrl: string = 'api';

export const environment: EnvironmentRef = {
    production: false,
    env: 'dev',
    baseUrl: devBaseUrl,
    endpoints: {
        health: HealthEndpointFactory.build(`${devBaseUrl}/${apiBaseUrl}`)
    }
};