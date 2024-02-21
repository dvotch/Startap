"use client";

import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { ThemeProvider } from "@/features/theme/theme-provier";
import { queryClinet } from "@/shared/api/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider attribute="class" defaultTheme="system" />
      <AppSessionProvider />
      <QueryClientProvider client={queryClinet} />
      {children}
    </ComposeChildren>
  );
}
