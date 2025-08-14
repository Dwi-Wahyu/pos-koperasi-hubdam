import NotFoundResource from "@/app/_components/not-found-resource";
import { penggunaContentMapping, validRoles } from "../../page";
import { getUserById } from "../../queries";
import { EditUserForm } from "./form";

export default async function TambahUserPage({
  params,
}: {
  params: Promise<{ role: string; id: string }>;
}) {
  const { role, id } = await params;

  if (!validRoles.includes(role)) {
    return <NotFoundResource title="Role Pengguna Tidak Ditemukan" />;
  }

  const initialData = await getUserById(id);

  if (!initialData) {
    return <NotFoundResource title="Pengguna Tidak Ditemukan" />;
  }

  return (
    <EditUserForm
      role={role.toUpperCase() as "ADMIN" | "CASHIER" | "CUSTOMER"}
      initialData={initialData}
    />
  );
}
