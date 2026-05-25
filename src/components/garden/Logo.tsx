import logo from "@/assets/garden-camp-logo.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-10 w-auto" }: LogoProps) {
  return (
    <img
      src={logo}
      alt="Garden Camp"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
