import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-12 glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">16053 Clusters</h3>
            <p className="text-foreground/70 text-sm">
              FIRST Tech Challenge Team
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-foreground/10 text-center">
          <p className="text-foreground/50 text-sm">
            © 2024 16053 Clusters. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
