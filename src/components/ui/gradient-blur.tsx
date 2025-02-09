export function GradientBlur() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      <div
        className="absolute left-[40%] top-0 h-[1000px] w-[1000px] rounded-full bg-green-500 opacity-20 blur-[128px]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        className="absolute right-0 top-1/2 h-[1000px] w-[1000px] rounded-full bg-emerald-500 opacity-20 blur-[128px]"
        style={{ transform: "translate(50%, -50%)" }}
      />
    </div>
  );
}
