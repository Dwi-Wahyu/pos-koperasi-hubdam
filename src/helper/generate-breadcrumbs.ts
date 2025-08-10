const breadcrumbMapping: Record<string, string> = {
  "/": "Home",
  "/admin": "Dashboard",
  "/admin/kesatuan": "Kesatuan",

  "/admin/penilaian": "Penilaian",
  "/admin/penilaian/bak-pistol": "Tembak Pistol 15m",
  "/admin/penilaian/kesegaran-jasmani": "Kesegaran Jasmani",
  "/admin/penilaian/utp-umum-dan-jabatan": "UTP Umum & Jabatan",
  "/admin/penilaian/latihan-satuan": "Latihan Satuan",
  "/admin/penilaian/bak-pan": "BAK Tepat 100M",

  "/admin/prajurit": "Prajurit",
  "/admin/prajurit/create": "Input Prajurit",
  "/admin/prajurit/edit": "Edit Prajurit",

  "/admin/manajemen-user": "Manajemen User",
};

// Helper function to generate breadcrumbs from path
export function generateBreadcrumbs(
  pathname: string
): { label: string; href: string }[] {
  const breadcrumbs: { label: string; href: string }[] = [];

  // Kasus khusus untuk halaman root publik
  if (pathname === "/") {
    breadcrumbs.push({ label: "Home", href: "/" });
    return breadcrumbs;
  }

  // Selalu mulai dengan "Home" yang mengarah ke "/admin" (Dashboard)
  // Ini adalah titik awal yang konsisten untuk semua rute admin
  breadcrumbs.push({ label: "Home", href: "/admin" });

  if (pathname === "/admin") {
    return breadcrumbs;
  }

  // Untuk rute yang lebih dalam dari /admin (misalnya /admin/kesatuan)
  const segments = pathname.split("/").filter(Boolean); // ["admin", "penilaian", "kesegaran-jasmani"]

  let currentPath = "";
  // Mulai iterasi dari segmen setelah "admin"
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];

    // Jika segmen pertama adalah "admin", lewati karena sudah diwakili oleh "Home"
    if (segment === "admin" && i === 0) {
      currentPath = "/admin";
      continue;
    }

    currentPath += `/${segment}`; // Bangun path secara bertahap: /admin -> /admin/penilaian -> /admin/penilaian/kesegaran-jasmani

    // Dapatkan label dari mapping
    let label = breadcrumbMapping[currentPath];

    // Jika tidak ada di mapping, coba ambil dari segmen itu sendiri
    if (!label) {
      // Handle dynamic segments like "[id]"
      if (segment.startsWith("[") && segment.endsWith("]")) {
        // Untuk rute dinamis seperti /admin/prajurit/edit/[id]
        // Anda perlu logic tambahan untuk mendapatkan nama aktual prajurit dari database
        // atau menggunakan label generik seperti "Edit Data"
        // Untuk saat ini, kita akan menggunakan label generik atau mengkapitalisasi tanpa kurung siku
        const baseSegment = segment.replace("[", "").replace("]", "");
        label = baseSegment.charAt(0).toUpperCase() + baseSegment.slice(1);
      } else {
        label = segment.charAt(0).toUpperCase() + segment.slice(1);
      }
    }

    breadcrumbs.push({ label, href: currentPath });
  }

  return breadcrumbs;
}
