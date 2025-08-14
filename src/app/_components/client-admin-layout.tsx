import { SidebarProvider } from "@/components/ui/sidebar";
import { BreadCrumbs } from "@/components/breadcrumb";
import TopbarAvatar from "@/components/topbar-avatar";
import { AdminSidebar } from "./sidebar/admin-sidebar";

export default function ClientAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 71)",
          "--header-height": "calc(var(--spacing) * 11)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar />
      <main className=" w-full">
        <div className="flex p-3 px-4 border-b-[1px] border-b-sidebar justify-between items-center w-full">
          <BreadCrumbs />

          <TopbarAvatar />
        </div>

        <div className="p-4 md:p-7">{children}</div>
      </main>
    </SidebarProvider>
  );
}
