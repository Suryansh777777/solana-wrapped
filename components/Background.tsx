export function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background 2024 text */}
      <div
        className="absolute inset-0 z-10 -bottom-96 text-[55rem] font-bold text-[#001a14]/50 select-none pointer-events-none flex items-center justify-center overflow-hidden"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        2024
      </div>
      {children}
    </div>
  );
}
