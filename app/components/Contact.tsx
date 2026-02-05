"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // Form State
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          icon: <CheckCircle className="text-green-500" />,
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #27272a",
          },
        });
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again.", {
          icon: <AlertCircle className="text-red-500" />,
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #27272a",
          },
        });
        setLoading(false);
      });
  };

  useGSAP(
    () => {
      gsap.from(".contact-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative z-50 py-24 bg-background overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Toaster for Notifications */}
      <Toaster position="bottom-center" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="contact-item text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              Something Epic.
            </span>
          </h2>
          <p className="contact-item text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Send me a message and let&apos;s discuss how
            we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-item max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
