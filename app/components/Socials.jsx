import { profile } from "../../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="night-sky on-night relative overflow-hidden py-10 text-moon"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-medium tracking-tight">
            Contact
          </h2>
          <SocialLinks />
        </div>

        <p className="mt-8 border-t border-white/10 pt-5 text-sm text-haze">
          {profile.name}, {profile.location}. {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}