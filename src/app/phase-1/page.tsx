import {
  ArrowRight,
  Code2,
  ShieldCheck,
  ExternalLink,
  AlertTriangle,
} from "lucide-react";

const TestRedirect = () => {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black flex flex-col items-center justify-center pt-[140px] pb-[80px] px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-lg relative z-10">
        <div className="border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>

          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-white/[0.05] border border-white/10 rounded-2xl flex items-center justify-center shadow-inner relative group cursor-default">
              <div className="absolute inset-0 bg-[#FFD700]/20 rounded-2xl blur-xl group-hover:bg-[#FFD700]/30 transition-all duration-500"></div>
              <Code2 className="w-10 h-10 text-[#FFD700] relative z-10" />
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                CodeNyx Coding Round
              </h1>
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 w-full max-w-[280px] mx-auto">
                <ShieldCheck className="w-4 h-4 text-green-400 shrink-0" />
                <span>Secure Testing Environment</span>
              </div>
              <p className="text-white/60 text-base md:text-lg leading-relaxed pt-2">
                You are about to be redirected to the official HackerRank
                assessment portal. Ensure you have a stable internet connection
                before proceeding.
              </p>
            </div>

            {/* Mandatory form notice */}
            <div className="w-full rounded-2xl border border-[#FFD700]/40 bg-[#FFD700]/5 p-5 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent"></div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <p className="text-[#FFD700] font-semibold text-sm tracking-wide uppercase">
                    Mandatory — Fill after the test
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    After completing the coding round, you{" "}
                    <span className="text-white font-semibold">must</span> fill
                    out the registration form on hackculture.io. Your submission
                    will not be considered without it.
                  </p>
                  <a
                    href="https://hackculture.io/hackathons/codenyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-[#FFD700] font-semibold text-sm hover:underline underline-offset-2 transition-colors duration-200"
                  >
                    Fill the form on hackculture.io
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 w-full">
              <a
                href="https://www.hackerrank.com/codenyx-round1-online"
                className="relative flex items-center justify-center gap-3 w-full py-4 px-8 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 group overflow-hidden"
              >
                <span className="relative z-10 text-lg">Go to Test</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>

            <div className="text-xs text-white/40 pt-6 border-t border-white/10 w-full space-y-2">
              <p>
                By proceeding, you agree to the assessment terms and conditions.
              </p>
              <p className="text-white/30">
                Regards,{" "}
                <a
                  href="https://gdg.cvr.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 font-medium hover:text-white/70 underline underline-offset-2 transition-colors duration-200"
                >
                  GDG on Campus CVR Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestRedirect;
