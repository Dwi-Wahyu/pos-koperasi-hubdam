import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const AdminProductSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  nama: parseAsString.withDefault(""),
});

export type AdminProductSearchParamsType = {
  page: number;
  perPage: number;
  nama: string;
};
