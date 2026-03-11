import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold tracking-wider mb-6 block">
              DR.<span className="text-cta">DECKS</span>
            </Link>
            <p className="text-text-muted font-light max-w-md">
              Master craftsmen of high-end, custom outdoor spaces. Elevating outdoor living through precision engineering and premium materials.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Portfolio", path: "/portfolio" },
                { name: "Process", path: "/process" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-text-muted hover:text-cta transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-text-muted font-light">
              <li>123 Builder Way</li>
              <li>Seattle, WA 98101</li>
              <li>(555) 123-4567</li>
              <li>info@drdecks.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm font-light">
            © {new Date().getFullYear()} Dr. Decks. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-text-muted hover:text-text-light text-sm font-light transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-text-muted hover:text-text-light text-sm font-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
