export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Codebase for<br />
          <span className="text-[#58a6ff]">GDPR Violations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your JavaScript or PHP files and get an instant compliance report. Detect missing cookie consent, unauthorized data collection, and improper retention patterns before regulators do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for first scan. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🍪", title: "Cookie Consent", desc: "Detects missing or malformed consent banners and tracking scripts loaded before consent." },
            { icon: "📦", title: "Data Collection", desc: "Flags unauthorized PII collection and missing purpose-limitation declarations." },
            { icon: "🗑️", title: "Retention Policies", desc: "Identifies hardcoded retention periods and missing data deletion routines." }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited file uploads",
              "JS & PHP static analysis",
              "Detailed compliance reports",
              "GDPR Article references",
              "Email report delivery",
              "Priority support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What types of violations does the scanner detect?",
              a: "The scanner uses pattern matching and AST analysis to detect missing cookie consent flows, tracking pixels loaded before user consent, PII collection without declared purpose, hardcoded data retention periods, and missing deletion/anonymization routines."
            },
            {
              q: "Which file types are supported?",
              a: "Currently JavaScript (.js, .jsx, .ts, .tsx) and PHP (.php) files are supported. You can upload individual files or a ZIP archive of your project."
            },
            {
              q: "Is my code stored after scanning?",
              a: "No. Uploaded files are analyzed in memory and deleted immediately after the report is generated. We never store your source code."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR Code Scanner. Built for EU-facing teams.
      </footer>
    </main>
  )
}
