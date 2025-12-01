import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Ship, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-24 border-t border-gray-100 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -z-10 skew-x-12 transform translate-x-20" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info */}
          <div>
            <div className="mb-10">
              <div className="relative w-24 h-24 mb-6">
                <img 
                  src="https://i.ibb.co/cKWxJgmH/m-removebg-preview.png" 
                  alt="Marvion Exim Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-serif text-3xl font-bold text-secondary mb-2">Marvion Exim</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400">Import Export & Manufacturing</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-secondary uppercase tracking-wide mb-1">Headquarters</h5>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    1204, Titanium One, S.G. Highway,<br />
                    Ahmedabad, Gujarat, India - 380054
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-secondary uppercase tracking-wide mb-1">Email Us</h5>
                  <p className="text-gray-500 font-light text-sm">
                    info@marvionexim.com<br />
                    export@marvionexim.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-secondary uppercase tracking-wide mb-1">Call Us</h5>
                  <p className="text-gray-500 font-light text-sm">
                    +91 98765 43210<br />
                    +91 12345 67890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-lg border border-gray-100">
            <h4 className="font-serif text-2xl text-secondary mb-6">Get in Touch</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-gray-50 border-gray-200 rounded-none focus:ring-primary focus:border-primary transition-all" />
                <Input placeholder="Your Email" className="bg-gray-50 border-gray-200 rounded-none focus:ring-primary focus:border-primary transition-all" />
              </div>
              <Input placeholder="Subject" className="bg-gray-50 border-gray-200 rounded-none focus:ring-primary focus:border-primary transition-all" />
              <Textarea placeholder="Message" className="bg-gray-50 border-gray-200 rounded-none min-h-[120px] focus:ring-primary focus:border-primary transition-all" />
              <Button className="w-full bg-secondary text-white hover:bg-primary hover:text-secondary rounded-none uppercase tracking-widest py-6 transition-colors duration-300 font-bold">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-secondary">
            <Ship className="w-6 h-6 text-primary" />
            <span className="uppercase tracking-[0.2em] text-sm font-bold">Shipping the Future</span>
          </div>

          <p className="text-gray-400 text-xs font-light text-center md:text-left">
            &copy; 2025 Marvion Exim. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
