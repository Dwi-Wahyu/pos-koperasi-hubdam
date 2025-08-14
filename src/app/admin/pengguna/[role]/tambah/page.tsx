import NotFoundResource from "@/app/_components/not-found-resource";
import { TambahUserForm } from "./form";
import { validRoles } from "../page";

export default async function TambahUserPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;

  if (!validRoles.includes(role)) {
    return <NotFoundResource title="Role Pengguna Tidak Ditemukan" />;
  }

  return (
    <TambahUserForm
      role={role.toUpperCase() as "ADMIN" | "CASHIER" | "CUSTOMER"}
    />
  );
}
