import { cookies } from "next/headers";

// import AppHeader from "@/components/navigation/AppHeader";
import AppHeader from "@/components/navigation/AppHeader";
import AppSideBar from "@/components/navigation/AppSideBar";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function DBLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSideBar />
      <SidebarInset>
        <AppHeader />
        <main className="relative">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
