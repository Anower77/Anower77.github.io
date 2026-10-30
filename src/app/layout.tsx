import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anower Hossain | Backend Engineer | Python & Distributed Systems",
  description:
    "Explore the portfolio of Anower Hossain, a Backend Engineer focused on Python, Django, backend architecture, distributed systems, cloud infrastructure, and AI research.",
  keywords: [
    "Anower Hossain",
    "Backend Engineer",
    "Python Engineer",
    "Django",
    "Django REST Framework",
    "Distributed Systems",
    "Cloud Architecture",
    "PostgreSQL",
    "RabbitMQ",
    "Kafka",
    "Redis",
    "Docker",
    "AWS",
    "Brain-Computer Interfaces",
    "EEG Research",
  ],
  authors: [{ name: "Anower Hossain", url: "https://github.com/Anower77" }],
  creator: "Anower Hossain",
  metadataBase: new URL("https://anower77.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anower77.github.io",
    title: "Anower Hossain | Backend Engineer | Python & Distributed Systems",
    description:
      "Explore the portfolio of Anower Hossain, a Backend Engineer focused on Python, Django, backend architecture, distributed systems, cloud infrastructure, and AI research.",
    siteName: "Anower Hossain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anower Hossain | Backend Engineer | Python & Distributed Systems",
    description:
      "Explore the portfolio of Anower Hossain, a Backend Engineer focused on Python, Django, backend architecture, distributed systems, cloud infrastructure, and AI research.",
    creator: "@Anower77",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-text-primary antialiased selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

