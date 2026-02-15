import { Link, useLocation } from "react-router-dom";

const variants = [
  { path: "/design/1", label: "01", title: "Editorial Cutline" },
  { path: "/design/2", label: "02", title: "Bubble Lab" },
  { path: "/design/3", label: "03", title: "Foundry Control" },
  { path: "/design/4", label: "04", title: "Mono Rail" },
  { path: "/design/5", label: "05", title: "Reef Signal" }
];

export function DesignNavigator() {
  const location = useLocation();
  const inDesign = location.pathname.startsWith("/design/");

  if (!inDesign) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2">
      <div className="pointer-events-auto flex items-center justify-between gap-2 rounded-2xl border border-white/25 bg-black/55 px-3 py-2 backdrop-blur-xl">
        {variants.map((variant) => {
          const active = location.pathname === variant.path;

          return (
            <Link
              key={variant.path}
              to={variant.path}
              className={`group flex min-w-0 flex-1 flex-col items-center rounded-xl border px-2 py-2 transition ${
                active
                  ? "border-white bg-white text-black"
                  : "border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/10"
              }`}
              aria-label={`Abrir design ${variant.label}`}
            >
              <span className="font-bold text-[11px] tracking-[0.2em]">{variant.label}</span>
              <span className="mt-1 truncate text-[9px] uppercase tracking-[0.14em] opacity-80 group-hover:opacity-100">
                {variant.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
