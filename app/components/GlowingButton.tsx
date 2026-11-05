"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "cyan"
    | "aqua"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineCyan"
    | "light"
    | "white"
    | "whatsapp";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "sm",
  variant = "cyan",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Brasil Piscinas Palette: Deep Oceanic Navy (#002C6C / #001F4D), Vibrant Pool Cyan (#00C4EE), WhatsApp (#16A34A)
  const variantClasses = {
    cyan:
      "bg-[#00C4EE] hover:bg-[#00AEE0] text-[#001433] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all border border-[#00C4EE] hover:-translate-y-0.5 active:translate-y-0",
    aqua:
      "bg-[#00C4EE] hover:bg-[#00AEE0] text-[#001433] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/25 transition-all border border-[#00C4EE] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#002C6C] hover:bg-[#001F4D] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-900/25 transition-all border border-[#002C6C] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#001F4D] hover:bg-[#002C6C] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#154D9E] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#002C6C] hover:border-[#002C6C] hover:bg-[#F0FDFE] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#002C6C] bg-transparent text-[#002C6C] hover:bg-[#002C6C] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineCyan:
      "border border-[#00C4EE] bg-transparent text-[#002C6C] hover:bg-[#00C4EE] hover:text-[#001433] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#BAF1FB] bg-[#F0FDFE] text-[#002C6C] hover:bg-[#E0F7FA] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#002C6C] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00C4EE] select-none text-center cursor-pointer whitespace-nowrap " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
