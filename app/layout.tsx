import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilbert Mutai | Cloud & DevOps Engineer",
  description: "Portfolio of Gilbert Mutai - Cloud, DevOps, and Automation Engineer specializing in AWS, Kubernetes, Terraform, Ansible, Docker, and CI/CD pipelines",
  keywords: ["Gilbert Mutai", "DevOps Engineer", "Cloud Engineer", "AWS", "Kubernetes", "Terraform", "Ansible", "Docker", "CI/CD", "Nairobi Kenya"],
  authors: [{ name: "Gilbert Mutai", url: "https://gilbertmutai.com" }],
  creator: "Gilbert Mutai",
  openGraph: {
    title: "Gilbert Mutai | Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD automation",
    url: "https://gilbertmutai.com",
    siteName: "Gilbert Mutai Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Gilbert Mutai Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilbert Mutai | Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Kubernetes, and automation",
    images: ["/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = `${geistSans.variable} ${geistMono.variable} antialiased`;

  return (
    <html lang="en">
      <head>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={fontClasses}>
        {children}
      </body>
    </html>
  );
}
