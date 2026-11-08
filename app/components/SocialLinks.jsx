import { profile } from "../../data/portfolio";
import {
  CodeIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ScholarIcon,
} from "./Icons";

export default function SocialLinks({ className = "" }) {
  const items = [
    { label: "GitHub", href: profile.links.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: profile.links.linkedin, Icon: LinkedInIcon },
    { label: "Google Scholar", href: profile.links.scholar, Icon: ScholarIcon },
    { label: "Codeforces", href: profile.links.codeforces, Icon: CodeIcon },
    { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
  ].filter((item) => item.href);

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-haze transition-colors hover:border-lamp hover:text-lamp"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
