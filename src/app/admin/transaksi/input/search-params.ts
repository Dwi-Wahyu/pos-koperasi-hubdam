import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
} from "nuqs/server";

export const CashierProductSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  name: parseAsString.withDefault(""),
  categories: parseAsArrayOf(parseAsInteger).withDefault([]),
});

// Perbarui tipe data agar sesuai dengan skema baru
export type CashierProductSearchParamsType = {
  page: number;
  perPage: number;
  name: string;
  categories: number[];
};
