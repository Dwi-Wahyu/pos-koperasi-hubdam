import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
} from "nuqs/server";

export const AdminProductGudangSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  nama: parseAsString.withDefault(""),
});

export type AdminProductGudangSearchParamsType = {
  page: number;
  perPage: number;
  nama: string;
};
