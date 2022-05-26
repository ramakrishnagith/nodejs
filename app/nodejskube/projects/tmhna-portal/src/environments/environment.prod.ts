import { HealthEndpointFactory } from "./interfaces/endpoints/health/health.endpoint.factory";
import { EnvironmentRef } from "./interfaces/environment.interface";

const prodBaseUrl: string = '';
const apiBaseUrl: string = 'api';

export const environment: EnvironmentRef = {
  production: true,
  env: 'prod',
  baseUrl: prodBaseUrl,
  endpoints: {
    health: HealthEndpointFactory.build(`${prodBaseUrl}/${apiBaseUrl}`)
  }
};
