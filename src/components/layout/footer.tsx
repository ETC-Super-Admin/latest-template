import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 border-t border-divider">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
};
