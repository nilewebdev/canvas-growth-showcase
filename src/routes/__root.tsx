import { createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm text-primary-foreground transition-colors hover:bg-graphite"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Notisce Digital, Websites & SEO for Your Company" },
      { name: "description", content: "A premium digital agency helping businesses get more customers through better websites and Google visibility." },
      { property: "og:title", content: "Notisce Digital, Websites & SEO for Your Company" },
      { property: "og:description", content: "A premium digital agency helping businesses get more customers through better websites and Google visibility." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Notisce Digital, Websites & SEO for Your Company" },
      { name: "twitter:description", content: "A premium digital agency helping businesses get more customers through better websites and Google visibility." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/XxOoSiGrIbUmCSXLdOrDeJYreOF3/social-images/social-1778020845088-dc9de9a4-f22b-43ce-a7be-ed210c3f5539.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/XxOoSiGrIbUmCSXLdOrDeJYreOF3/social-images/social-1778020845088-dc9de9a4-f22b-43ce-a7be-ed210c3f5539.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Montserrat:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => <SiteLayout />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
