import "./globals.css";
import { Newsreader, Manrope } from "next/font/google";
import Providers from "./components/Providers";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Ayman Iktidar | Machine learning researcher",
  description:
    "Lecturer and machine learning researcher working on healthcare AI, multimodal learning and Bangla NLP. Publications, projects and CV.",
  openGraph: {
    title: "Ayman Iktidar | Machine learning researcher",
    description:
      "Healthcare AI, multimodal learning and Bangla NLP. Publications, projects and CV.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper font-body text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
