import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconChevronLeft, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { getUserById } from "../admin/manajemen-user/queries";

type UserData = Awaited<ReturnType<typeof getUserById>>;

export function DetailUserContent({ userData }: { userData: UserData }) {
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

  const isPrajurit = userData.role === "prajurit";
  const isPenilai = userData.role === "penilai";

  const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL;

  return (
    <CardContent className="p-8 space-y-8">
      {/* Informasi Profil Utama */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary shadow-lg">
          <AvatarImage
            src={
              ADMIN_URL + "/" + userData.avatar ||
              "/uploads/avatar/default-avatar.jpg"
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
              {userData.username}
            </p>
            <Badge variant="outline" className="mt-2 text-md">
              {userData.role}
            </Badge>
            {userData.kesatuan && (
              <p className="text-md text-muted-foreground mt-2">
                Kesatuan:{" "}
                <span className="font-medium">{userData.kesatuan.nama}</span>
              </p>
            )}
          </div>
          <div className="mt-3 md:mt-0">
            <p className="text-center sm:text-end text-sm text-muted-foreground">
              Terakhir Login Pada {formatDate(userData.lastLogin)}
            </p>
            <p className="text-center sm:text-end text-sm text-muted-foreground">
              Akun Dibuat Pada {formatDate(userData.createdAt)}
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-6 bg-border" />

      {/* Detail Profil (jika ada) */}
      {userData.profile ? (
        <>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Informasi Personal
          </h2>
          <Table className="w-full">
            <TableBody>
              <TableRow>
                <TableHead className="w-[180px] text-muted-foreground">
                  Umur
                </TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.umur} tahun
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-muted-foreground">
                  Jenis Kelamin
                </TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.jenisKelamin}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-muted-foreground">
                  Golongan
                </TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.golongan}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-muted-foreground">Pangkat</TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.pangkat}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-muted-foreground">
                  Berat Badan
                </TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.beratBadan
                    ? `${userData.profile.beratBadan} kg`
                    : "N/A"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead className="text-muted-foreground">
                  Tinggi Badan
                </TableHead>
                <TableCell className="font-medium text-foreground">
                  {userData.profile.tinggiBadan
                    ? `${userData.profile.tinggiBadan} cm`
                    : "N/A"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Separator className="my-6 bg-border" />
        </>
      ) : (
        <p className="text-muted-foreground text-center italic">
          Tidak ada informasi profil lengkap untuk pengguna ini.
        </p>
      )}

      {isPenilai && (
        <>
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Penilaian Kesegaran Jasmani ({userData.penilaianGarjasDibuat.length}
            )
          </h2>
          {userData.penilaianGarjasDibuat.length > 0 ? (
            <Table className="w-full">
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="text-muted-foreground font-bold">
                    ID
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Tanggal
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Nilai Akhir
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Prajurit Dinilai
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Aksi
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.penilaianGarjasDibuat.map((garjas) => (
                  <TableRow key={garjas.id}>
                    <TableCell className="font-medium text-foreground">
                      {garjas.id}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(garjas.tanggal)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {garjas.nilaiAkhir.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {garjas.prajurit.name}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/admin/penilaian/kesegaran-jasmani/${garjas.id}`}
                        passHref
                      >
                        <Button variant="ghost" size="sm">
                          <IconExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center italic">
              Pengguna ini belum membuat penilaian Garjas.
            </p>
          )}
        </>
      )}

      {isPrajurit && (
        <>
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-secondary ">
              Penilaian Kesegaran Jasmani{" "}
            </h2>
            <Link
              href={"/admin/penilaian/kesegaran-jasmani/riwayat/" + userData.id}
              className="text-primary text-sm flex gap-1 items-center"
            >
              <IconExternalLink className="h-4 w-4" />
              Lihat Riwayat Lengkap
            </Link>
          </div>
          {userData.penilaianGarjasDidapatkan.length > 0 ? (
            <Table className="w-full">
              <TableHeader className="bg-muted">
                <TableRow>
                  <TableHead className="text-muted-foreground font-bold">
                    ID
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Tanggal
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Garjas A
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Garjas B
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Nilai Akhir
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Penilai
                  </TableHead>
                  <TableHead className="text-muted-foreground font-bold">
                    Aksi
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.penilaianGarjasDidapatkan.map((garjas) => (
                  <TableRow key={garjas.id}>
                    <TableCell className="font-medium text-foreground">
                      {garjas.id}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(garjas.tanggal)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {garjas.garjasA.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {garjas.garjasB.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {garjas.nilaiAkhir.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {garjas.penilai.name}
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/admin/penilaian/kesegaran-jasmani/${garjas.id}`}
                        passHref
                      >
                        <Button variant="ghost" size="sm">
                          <IconExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-muted-foreground text-center italic">
              Pengguna ini belum mendapatkan penilaian Garjas.
            </p>
          )}
        </>
      )}

      <div className="flex justify-center mt-8">
        <Button asChild variant={"secondary"}>
          <Link href={isPrajurit ? "/admin/prajurit" : "/admin/manajemen-user"}>
            <IconChevronLeft className="mr-1" /> Kembali
          </Link>
        </Button>
      </div>
    </CardContent>
  );
}
