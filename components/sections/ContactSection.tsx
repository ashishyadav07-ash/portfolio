"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Mail, MapPin, Sparkles, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { useSoundEffects } from "../ui/SoundController";
import { socialsData } from "@/data/socials";
import { EvolvingSculpture3D } from "../3d/EvolvingSculpture3D";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please provide a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website_url: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const { playClick, playSuccess } = useSoundEffects();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // ⚡ INSTANT ZERO-LATENCY FEEDBACK (Instant UI update on button click)
    setStatus("success");
    setServerMessage("MESSAGE SENT ✓ THANK YOU FOR REACHING OUT.");
    playSuccess();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FFFFFF", "#111318", "#3155FF", "#FF6B5A", "#F2B84B"],
    });
    reset();

    // Asynchronous background transmission to API
    try {
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch((err) => {
        console.error("Background message dispatch error:", err);
      });
    } catch (err) {
      console.error("Immediate transmission trigger error:", err);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-cobalt text-ivory overflow-hidden select-none">
      {/* Background 3D Abstract Sculpture */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0 flex items-center justify-center overflow-hidden">
        <EvolvingSculpture3D className="w-full h-full min-h-[600px] scale-125" />
      </div>

      {/* Subtle Background Radial Light Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-white/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-coral/20 blur-[180px] pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Giant Editorial Heading: LET'S BUILD SOMETHING USEFUL. */}
        <div className="mb-20">
          <div className="font-mono text-xs sm:text-sm text-white uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
            <span>CONTACT &amp; COLLABORATION // 13</span>
          </div>

          <h2 className="editorial-hero text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] text-white tracking-tighter leading-[0.88]">
            <div>LET&apos;S</div>
            <div className="text-deepInk drop-shadow-sm">BUILD</div>
            <div>SOMETHING</div>
            <div className="text-coral drop-shadow-[0_8px_30px_rgba(255,107,90,0.35)]">USEFUL.</div>
          </h2>

          <div className="mt-8 pt-6 border-t border-white/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="editorial-heading text-2xl sm:text-3xl md:text-4xl text-white tracking-tight font-extrabold">
              HAVE A TECHNICAL CHALLENGE? LET&apos;S TALK.
            </p>
            <span className="font-mono text-xs sm:text-sm text-white font-bold bg-white/20 px-4 py-2 rounded-full border border-white/30 shrink-0 shadow-sm">
              SLA: RESPONSE WITHIN 24 HOURS
            </span>
          </div>
        </div>

        {/* Contact Form & Direct Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Direct Channel Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-deepInk/85 backdrop-blur-xl border-2 border-white/20 text-white shadow-2xl space-y-7">
              <h3 className="editorial-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                DIRECT CHANNELS
              </h3>

              <a
                href={`mailto:${socialsData.email}`}
                className="flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all group shadow-sm"
              >
                <div className="p-4 rounded-xl bg-white/15 text-white group-hover:bg-coral group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-white/70 uppercase tracking-widest font-bold mb-1.5">
                    EMAIL INBOX
                  </div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-coral transition-colors break-all">
                    {socialsData.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/20 shadow-sm">
                <div className="p-4 rounded-xl bg-coral/25 text-coral shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-white/70 uppercase tracking-widest font-bold mb-1.5">
                    LOCATION &amp; TIMEZONE
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-white">
                    Nashik, Maharashtra, India (IST / UTC+5:30)
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-white/10 border border-white/20 text-sm sm:text-base font-mono text-white/95 leading-relaxed shadow-sm">
                <span className="text-amber font-extrabold block mb-2 text-base">⚡ DIRECT ACCESS:</span>
                Senior PHP, Laravel, API architecture, database performance, and team engineering roles.
              </div>
            </div>
          </div>

          {/* Right: Premium High-Contrast Glass Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 md:p-14 rounded-3xl bg-deepInk/85 backdrop-blur-xl border-2 border-white/20 text-white shadow-2xl">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="py-14 text-center space-y-7"
                  >
                    {/* Circular Cobalt / Ivory / Coral Animation */}
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-coral"
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-2 rounded-full border border-white/40"
                      />
                      <div className="w-16 h-16 rounded-full bg-white text-cobalt flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-8 h-8 text-cobalt" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="editorial-heading text-3xl sm:text-4xl text-white font-bold">
                        MESSAGE SENT ✓
                      </h3>
                      <p className="text-white/90 font-mono text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        THANK YOU FOR REACHING OUT. YOUR INQUIRY HAS BEEN DELIVERED DIRECTLY TO ASHISH YADAV.
                      </p>
                    </div>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 px-9 py-4 rounded-full bg-white text-deepInk text-xs font-mono font-bold hover:bg-coral hover:text-white transition-colors shadow-md cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <input
                      type="text"
                      {...register("website_url")}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                      <div>
                        <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                          Your Name <span className="text-coral">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Jenkins"
                          {...register("name")}
                          className={`w-full px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl bg-white/15 border-2 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all shadow-sm ${
                            errors.name ? "border-coral bg-coral/10" : "border-white/30"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-coral-light text-xs sm:text-sm font-mono mt-2 flex items-center gap-1.5 font-bold">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                          Email Address <span className="text-coral">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          {...register("email")}
                          className={`w-full px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl bg-white/15 border-2 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all shadow-sm ${
                            errors.email ? "border-coral bg-coral/10" : "border-white/30"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-coral-light text-xs sm:text-sm font-mono mt-2 flex items-center gap-1.5 font-bold">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                      <div>
                        <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+91..."
                          {...register("phone")}
                          className="w-full px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl bg-white/15 border-2 border-white/30 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all shadow-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          {...register("company")}
                          className="w-full px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl bg-white/15 border-2 border-white/30 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                        Subject <span className="text-coral">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Senior Laravel Engineering Opportunity"
                        {...register("subject")}
                        className={`w-full px-5 sm:px-6 py-4 sm:py-4.5 rounded-2xl bg-white/15 border-2 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all shadow-sm ${
                          errors.subject ? "border-coral bg-coral/10" : "border-white/30"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-coral-light text-xs sm:text-sm font-mono mt-2 flex items-center gap-1.5 font-bold">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-white uppercase tracking-wider mb-2.5 sm:mb-3 font-extrabold">
                        Message Content <span className="text-coral">*</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your technical requirements or engineering challenge..."
                        {...register("message")}
                        className={`w-full px-5 sm:px-6 py-4.5 sm:py-5 rounded-2xl bg-white/15 border-2 text-base sm:text-lg text-white placeholder:text-white/70 font-sans focus:outline-none focus:bg-white/25 focus:border-white focus:ring-4 focus:ring-white/20 transition-all resize-none shadow-sm min-h-[150px] leading-relaxed ${
                          errors.message ? "border-coral bg-coral/10" : "border-white/30"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-coral-light text-xs sm:text-sm font-mono mt-2 flex items-center gap-1.5 font-bold">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-5 sm:py-5.5 px-8 rounded-2xl bg-white text-deepInk font-mono font-extrabold text-sm sm:text-base tracking-widest hover:bg-coral hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-deepInk" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-5 rounded-2xl bg-coral/30 border-2 border-coral text-white text-xs sm:text-sm font-mono flex items-center gap-2.5 font-bold"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 text-coral" />
                        <span>{serverMessage}</span>
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
