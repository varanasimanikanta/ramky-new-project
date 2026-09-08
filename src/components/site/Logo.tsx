import ramkyLogo from "@/assets/ramky-infrastructure-logo.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className={`block overflow-hidden rounded-sm ${inverted ? "bg-white p-1" : ""}`}>
      <img
        src={ramkyLogo}
        alt="Ramky Infrastructure — Building a Better Tomorrow"
        className="block size-[5.25rem] object-contain"
      />
    </span>
  );
}
