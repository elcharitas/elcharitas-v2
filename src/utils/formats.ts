import md5 from "md5";

/**
 * Converts an enum to an array of its values
 *
 * @param enumValue
 * @returns
 */
export const denum = <T extends Record<string, string | number>>(
    enumValue: T
) => Object.entries(enumValue).filter(([value]) => Number.isNaN(Number(value)));

/**
 * Parses an arbitrary number into currency styles
 *
 * @param value
 * @param symbol
 * @param decimals
 * @returns
 */
export const parseCurrency = (value: number, symbol = "", decimals = 2) =>
    `${new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: decimals,
    }).format(value)} ${symbol}`;

export const getGravatar = (email?: string) => {
    if (!email) return "";
    const hash = md5(email);
    return `https://www.gravatar.com/avatar/${hash}`;
};
