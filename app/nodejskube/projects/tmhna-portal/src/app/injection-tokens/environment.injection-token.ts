import { environmentName, EnvironmentRef } from "../../environments/interfaces/environment.interface";
import { environment } from "../../environments/environment";
import { InjectionToken } from "@angular/core";
import { Endpoints } from "../../environments/interfaces/endpoints/endpoints.interface";

export class Environment implements EnvironmentRef {
    get production(): boolean {
        return this.envRef.production;
    }
    get baseUrl(): string {
        return this.envRef.baseUrl;
    }
    get env(): environmentName {
        return this.envRef.env;
    }
    get endpoints(): Endpoints {
        return this.envRef.endpoints;
    }
    constructor(readonly envRef: EnvironmentRef) { }
}

export const ENVIRONMENT_REF = new InjectionToken<Environment>('EnvironmentRef', {
    providedIn: 'root',
    factory: () => new Environment(environment),
});