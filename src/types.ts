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

export enum EColor {
    Primary = "#0471A6",
}

export type TCallback<T = void, D = unknown> = (arg?: D) => T;
