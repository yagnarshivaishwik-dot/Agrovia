"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    region: "Bowen & Gumlu",
    enquiryType: "Agronomy Consulting",
    crop: "Tomatoes",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you. Your enquiry has been received.");
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#d99a38", "#889b87", "#182c20"],
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("Network communication error. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-16 bg-[#0a110c] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Headline */}
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs tracking-widest text-[#d99a38] uppercase">
            // Direct Field Channel
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.05]">
            Let’s Talk About <br />
            <span className="text-[#889b87] font-normal">Your Crop.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Whether you manage 500 hectares of winter tomatoes in Bowen, require rotation agronomy in
            the Burdekin, or need contract field trial capability across Queensland, get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl border border-white/10 bg-[#101b13] space-y-6">
              <span className="font-mono text-xs text-[#d99a38] uppercase tracking-wider block">
                Agrovia Direct Contact
              </span>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d99a38] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-stone-400 uppercase block">
                      Enquiries Email
                    </span>
                    <a
                      href="mailto:dev.p@agrovia.au"
                      className="text-base text-white hover:text-[#d99a38] transition-colors font-mono"
                    >
                      dev.p@agrovia.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#889b87] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-stone-400 uppercase block">
                      Primary Operating Base
                    </span>
                    <span className="text-sm text-stone-200 block">
                      Bowen & Burdekin Regions, North Queensland
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#d99a38] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-stone-400 uppercase block">
                      Field Turnaround Guarantee
                    </span>
                    <span className="text-sm text-stone-200 block">
                      Direct agronomist response within 24 business hours.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on confidentiality & independence */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-stone-400 space-y-2">
              <div className="text-white font-semibold uppercase">Paddock Confidentiality</div>
              <p className="leading-relaxed">
                All field scouting records, tissue test results, and yield forecasts remain strictly
                the intellectual property and private asset of your farm business.
              </p>
            </div>
          </div>

          {/* Clean Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#111e15] p-8 sm:p-10 shadow-2xl">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#182c20] border border-[#d99a38] mx-auto flex items-center justify-center text-[#d99a38]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-normal text-white">Enquiry Transmitted</h3>
                  <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                    {responseMsg} Our agronomist will review your field requirements and get in touch directly.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        region: "Bowen & Gumlu",
                        enquiryType: "Agronomy Consulting",
                        crop: "Tomatoes",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Farm / Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Delta River Produce"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@farm.com.au"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Region
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      >
                        <option value="Bowen & Gumlu">Bowen & Gumlu</option>
                        <option value="Burdekin (Ayr & Home Hill)">Burdekin (Ayr & Home Hill)</option>
                        <option value="Other North QLD">Other North QLD</option>
                        <option value="Queensland Wide (Trial Site)">Queensland Wide (Trial Site)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      >
                        <option value="Agronomy Consulting">Agronomy Consulting</option>
                        <option value="Research & Field Trials">Research & Field Trials</option>
                        <option value="Soil & Leaf Diagnostics">Soil & Leaf Diagnostics</option>
                        <option value="Pre-Season Strategy">Pre-Season Strategy</option>
                        <option value="Other Commercial Request">Other Commercial Request</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-stone-300 uppercase block">
                        Target Crop
                      </label>
                      <select
                        value={formData.crop}
                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                      >
                        <option value="Tomatoes">Tomatoes</option>
                        <option value="Sweetcorn / Popcorn">Sweetcorn / Popcorn</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Soybeans / Mung Beans">Soybeans / Mung Beans</option>
                        <option value="Capsicum / Chilli">Capsicum / Chilli</option>
                        <option value="Green Beans">Green Beans</option>
                        <option value="Eggplant">Eggplant</option>
                        <option value="Industrial Hemp">Industrial Hemp</option>
                        <option value="Sugarcane Rotation">Sugarcane Rotation</option>
                        <option value="Other">Other Crop</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-stone-300 uppercase block">
                      Message / Crop Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details on your planting timeline, hectares, target pest/nutrient issues, or trial objectives..."
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#d99a38] focus:outline-none transition-colors"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded bg-red-950/60 border border-red-500/30 text-xs text-red-200">
                      {responseMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    <span>{status === "submitting" ? "Transmitting..." : "Send Enquiry →"}</span>
                  </button>

                  <div className="text-center font-mono text-[10px] text-stone-400">
                    Transmits directly to dev.p@agrovia.au • No payment details required.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
