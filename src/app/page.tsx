import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold">Koperasi Hubdam</h1>
          <p className="text-sm text-gray-500">
            Aplikasi Point Of Sale untuk Koperasi Hubdam
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <p className="text-lg">Selamat datang di aplikasi kami!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
