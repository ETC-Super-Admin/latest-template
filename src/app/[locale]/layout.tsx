import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { Providers } from "@/providers/HeroProviders";
import StoreProvider from "@/providers/StoreProvider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider>
      <StoreProvider>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="max-w-7xl pt-16 px-4 md:px-6 lg:px-8 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </StoreProvider>
    </NextIntlClientProvider>
  );
}
