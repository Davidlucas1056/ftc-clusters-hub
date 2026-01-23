import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto py-12 glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-xl mb-2">16053 Clusters</h3>
            <p className="text-foreground/70 text-sm">
              FIRST Tech Challenge Team
            </p>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="https://www.instagram.com/clusters_ftc?igsh=ZmNpZXBoM2NzY2Vy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="Instagram"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="mailto:clusters16053@gmail.com"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-6 border-t border-foreground/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-foreground/50 text-sm">
            © 2025 16053 Clusters. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
