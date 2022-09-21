export interface IPage {
    authWallet: string;
}

export type TColor =
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";

export type TCallback<T = void, D = unknown> = (arg?: D) => T;
