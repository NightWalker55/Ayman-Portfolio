export default function Section({ id, title, intro, tone = "paper", children }) {
  const background =
    tone === "white" ? "bg-white border-y border-line" : "bg-paper";

  return (
    <section id={id} className={`${background} py-20 sm:py-24`}>
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate">{intro}</p>}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
