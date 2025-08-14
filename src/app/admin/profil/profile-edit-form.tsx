import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
import GantiPasswordDrawer from "./ubah-password-dialog";
import { getUserById } from "../pengguna/[role]/queries";

type UserData = Awaited<ReturnType<typeof getUserById>>;

export function ProfileEditForm({ userData }: { userData: UserData }) {
  if (!userData) {
    return null;
  }

  const formatDate = (dateString: Date | null) => {
    if (!dateString) return "N/A";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL;

  return (
    <CardContent className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary shadow-lg">
          <AvatarImage
            src={
              ADMIN_URL + "/" + userData.avatar ||
              "/uploads/avatar/placeholder-avatar.jpg"
            }
            alt={userData.name || "User Avatar"}
          />
          <AvatarFallback className="bg-muted text-muted-foreground text-4xl font-bold">
            {userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col md:flex-row md:justify-between w-full items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-foreground">
              {userData.name}
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              {userData.email}
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <p className="text-center sm:text-end text-sm text-muted-foreground">
              Terakhir Login Pada {formatDate(userData.last_login)}
            </p>
            <p className="text-center sm:text-end text-sm text-muted-foreground">
              Akun Dibuat Pada {formatDate(userData.createdAt)}
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-border" />

      <div className="flex justify-center mt-8">
        <GantiPasswordDrawer id={userData.id} />
      </div>
    </CardContent>
  );
}
