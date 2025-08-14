import { user_role } from "@/app/generated/prisma";
import {
  createSearchParamsCache,
  parseAsString,
  parseAsInteger,
  parseAsStringEnum,
} from "nuqs/server";

export const UserSearchParams = createSearchParamsCache({
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  name: parseAsString.withDefault(""),
  role: parseAsStringEnum(["ADMIN", "CASHIER", "CUSTOMER"]).withDefault(
    "ADMIN"
  ),
});

export type UserSearchParamsType = {
  page: number;
  perPage: number;
  role: "ADMIN" | "CASHIER" | "CUSTOMER";
  name: string;
};
