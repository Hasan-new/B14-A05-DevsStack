
const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-600">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div>
            <a href="/" className="mb-4 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-fuchsia-500 text-[10px] font-bold text-white">
                DS
              </span>

              <span className="text-sm font-bold text-slate-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </a>

            <p className="max-w-xs text-xs leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-700">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="/" className="hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-500">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#about" className="hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="space-y-2 text-xs text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-9 flex flex-col gap-4 border-t border-slate-100 pt-5 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#terms" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
