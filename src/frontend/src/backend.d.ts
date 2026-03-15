import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuoteRequest {
    name: string;
    email: string;
    company: string;
    message: string;
    timestamp: bigint;
    phone: string;
    products: Array<string>;
}
export interface backendInterface {
    getAllQuoteRequests(): Promise<Array<QuoteRequest>>;
    submitQuoteRequest(name: string, email: string, phone: string, company: string, products: Array<string>, message: string): Promise<void>;
}
