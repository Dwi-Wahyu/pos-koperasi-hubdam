import { adminMenu } from "./admin";
import { cashierMenu } from "./cashier";
import { customerMenu } from "./customer";

export function getSidebarMenu(role: string) {
  switch (role) {
    case "CUSTOMER":
      return customerMenu;
    case "CASHIER":
      return cashierMenu;
    case "ADMIN":
      return adminMenu;
    default:
      return adminMenu;
  }
}
