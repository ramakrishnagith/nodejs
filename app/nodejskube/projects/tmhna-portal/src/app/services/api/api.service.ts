import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { ENVIRONMENT_REF } from '../../injection-tokens/environment.injection-token';
import { HealthEndpointRoutes, Endpoints, EnvironmentRef } from '../../../environments/interfaces/';

type ValidRouteTypes = HealthEndpointRoutes;

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public endpoints: Endpoints = this.environmentRef.endpoints;

    constructor(
        private httpClient: HttpClient,
        @Inject(ENVIRONMENT_REF) readonly environmentRef: EnvironmentRef
    ) {}

    public async fetchCodeSample(path: string): Promise<string> {
        try {
            const validRoutes: HealthEndpointRoutes = this.endpoints.health.routes;
            this.validatePath({path, validRoutes});
            // to do: adress timeouts via http interceptor
            const health$: Observable<string> = this.httpClient.get<{value: string}>(`${path}`)
                .pipe(map(response => response.value));
            health$.subscribe();
            return lastValueFrom(health$);
        } catch (error) {
            throw error;
        }
    }
    private validatePath(context: {path: string; validRoutes: ValidRouteTypes}): void {
        const validRoutes: ValidRouteTypes = context.validRoutes;
        const pathIsNotValid: boolean = !this.pathIsValid(context);
        if (pathIsNotValid) {
            throw new Error(`Invalid path "${context.path}"\nExpected path values are:\n${this.pathValuesToFormattedString(validRoutes)}`)
        }
    }
    private pathIsValid(context: {path: string; validRoutes: ValidRouteTypes}): boolean {
        let pathIsValid: boolean[] = [];
        for (const key in context.validRoutes) {
            if (Object.prototype.hasOwnProperty.call(context.validRoutes, key)) {
                pathIsValid.push(`${context.validRoutes[key]}` === context.path);
            }
        }
        return pathIsValid.find(item => true) !== undefined
    }
    private pathValuesToFormattedString(routes: ValidRouteTypes): string {
        let formattedString: string = '';
        for (const key in routes) {
            if (Object.prototype.hasOwnProperty.call(routes, key)) {
                formattedString = `${formattedString}\n${routes[key]}`;
            }
        }
        return formattedString;
    }

}