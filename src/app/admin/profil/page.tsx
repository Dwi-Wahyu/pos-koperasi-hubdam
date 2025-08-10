import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { getUserById } from "../manajemen-user/queries";
import { auth } from "@/config/auth";
import { ProfileEditForm } from "./profile-edit-form";
import { getKesatuan } from "../kesatuan/queries";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    return <div>unauthorized</div>;
  }

  const userData = await getUserById(session.user.id);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-2xl font-bold text-destructive">
          Profil Pengguna tidak ditemukan.
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card className="shadow-lg animate-in fade-in duration-500">
        <CardHeader className="rounded-t-lg">
          <CardTitle className="text-3xl text-secondary font-extrabold text-center">
            Profil Pengguna
          </CardTitle>
          <p className="text-center text-lg mt-2 opacity-90">
            Detail Informasi Pengguna
          </p>
        </CardHeader>

        <ProfileEditForm userData={userData} />
      </Card>
    </div>
  );
}
