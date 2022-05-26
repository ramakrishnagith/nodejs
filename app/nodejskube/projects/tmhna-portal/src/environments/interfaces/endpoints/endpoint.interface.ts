export interface Endpoint {
    baseUrl: string;
    routes: EndpointRoutes;
}
export interface EndpointRoute {
    toString: () => string;
};
export type EndpointRoutes = EndpointRoute & {[key: string]: EndpointRoute };