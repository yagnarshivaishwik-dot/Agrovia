"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Trash2, Printer, CheckCircle2, Clock, FileText, ArrowLeft, ArrowUpRight, Save } from "lucide-react";

interface InvoiceItem {
  id: string;
  description: string;
  qty: number;
  rate: number;
}

interface Invoice {
  id: string;
  type: "Quote" | "Tax Invoice";
  invoiceNumber: string;
  clientName: string;
  clientCompany: string;
  clientEmail: string;
  clientRegion: string;
  date: string;
  dueDate: string;
  status: "Draft" | "Sent" | "Paid" | "Overdue";
  items: InvoiceItem[];
  notes: string;
}

const DEFAULT_INVOICES: Invoice[] = [
  {
    id: "inv-1",
    type: "Tax Invoice",
    invoiceNumber: "AGV-2026-081",
    clientName: "Mark Robinson",
    clientCompany: "Robinson Horticultural Group",
    clientEmail: "m.robinson@robinsonhort.com.au",
    clientRegion: "Bowen & Gumlu",
    date: "2026-09-15",
    dueDate: "2026-09-29",
    status: "Paid",
    items: [
      {
        id: "i1",
        description: "Fortnightly In-Field Crop Scouting & Heliothis/Whitefly Audit (400 Ha)",
        qty: 2,
        rate: 850,
      },
      {
        id: "i2",
        description: "Pre-Harvest Fruit Maturity & Brix Testing (Gourmet Tomatoes)",
        qty: 1,
        rate: 650,
      },
    ],
    notes: "Direct paddock inspection logs transmitted via PDF. Independent advice.",
  },
  {
    id: "inv-2",
    type: "Quote",
    invoiceNumber: "QUO-2026-019",
    clientName: "David Campbell",
    clientCompany: "Delta Plains Farming Pty Ltd",
    clientEmail: "dcampbell@deltaplains.com.au",
    clientRegion: "Burdekin Delta",
    date: "2026-10-01",
    dueDate: "2026-10-15",
    status: "Sent",
    items: [
      {
        id: "i3",
        description: "Seasonal Cotton Agronomy Program & Plant Growth Regulator (PGR) Scheduling",
        qty: 1,
        rate: 3400,
      },
      {
        id: "i4",
        description: "Deep Soil Geochemistry Profile & Cation Saturation Audit (6 Samples)",
        qty: 6,
        rate: 220,
      },
    ],
    notes: "Quote valid for 30 days. Subject to host paddock weather access.",
  },
];

export default function AdminInvoicingPage() {
  const [invoices, setInvoices] = useState<Invoice[]>(DEFAULT_INVOICES);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice>(DEFAULT_INVOICES[0]);
  const [savedNotification, setSavedNotification] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("agrovia_invoices");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setInvoices(parsed);
          setSelectedInvoice(parsed[0]);
        }
      }
    } catch (e) {
      // Fallback to default
    }
  }, []);

  const saveToStorage = (updatedInvoices: Invoice[]) => {
    try {
      localStorage.setItem("agrovia_invoices", JSON.stringify(updatedInvoices));
      setSavedNotification(true);
      setTimeout(() => setSavedNotification(false), 2000);
    } catch (e) {
      // Handle storage quota
    }
  };

  // Totals calculations
  const subtotal = selectedInvoice.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gst = subtotal * 0.1; // 10% Australian GST
  const grandTotal = subtotal + gst;

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: "item-" + Date.now(),
      description: "Field Agronomy Service Item",
      qty: 1,
      rate: 450,
    };
    const updated = {
      ...selectedInvoice,
      items: [...selectedInvoice.items, newItem],
    };
    setSelectedInvoice(updated);
    const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
    setInvoices(updatedList);
    saveToStorage(updatedList);
  };

  const handleRemoveItem = (id: string) => {
    const updated = {
      ...selectedInvoice,
      items: selectedInvoice.items.filter((item) => item.id !== id),
    };
    setSelectedInvoice(updated);
    const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
    setInvoices(updatedList);
    saveToStorage(updatedList);
  };

  const handleConvertToInvoice = () => {
    const updated: Invoice = {
      ...selectedInvoice,
      type: "Tax Invoice",
      invoiceNumber: selectedInvoice.invoiceNumber.replace("QUO", "AGV"),
      status: "Sent",
    };
    setSelectedInvoice(updated);
    const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
    setInvoices(updatedList);
    saveToStorage(updatedList);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070c08] text-white p-6 sm:p-12 pt-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 print:hidden">
          <div className="space-y-1">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#889b87] hover:text-white transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Experience
            </Link>
            <h1 className="text-2xl sm:text-3xl font-light tracking-wide uppercase">
              Agrovia Admin <span className="text-[#d99a38]">Invoicing & Quotes</span>
            </h1>
            <p className="font-mono text-xs text-stone-400">
              Australian Tax Invoicing Engine • GST Automated • Bowen & Burdekin Field Accounts
            </p>
          </div>

          <div className="flex items-center gap-3">
            {savedNotification && (
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-3.5 h-3.5" /> Saved
              </span>
            )}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs uppercase tracking-wider text-stone-200 transition-colors"
            >
              <Printer className="w-4 h-4 text-[#d99a38]" />
              <span>Print / Export PDF</span>
            </button>
          </div>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Invoices List (Left Sidebar) */}
          <div className="lg:col-span-4 space-y-4 print:hidden">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-stone-400">
                Documents Archive
              </span>
              <button
                onClick={() => {
                  const newInv: Invoice = {
                    id: "inv-" + Date.now(),
                    type: "Quote",
                    invoiceNumber: `QUO-2026-${Math.floor(100 + Math.random() * 900)}`,
                    clientName: "New Grower Client",
                    clientCompany: "Bowen Farm Operations",
                    clientEmail: "grower@farm.com.au",
                    clientRegion: "Bowen & Gumlu",
                    date: new Date().toISOString().split("T")[0],
                    dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0],
                    status: "Draft",
                    items: [
                      {
                        id: "it-1",
                        description: "Initial Paddock Soil Assessment & Management Proposal",
                        qty: 1,
                        rate: 650,
                      },
                    ],
                    notes: "All recommendations strictly independent.",
                  };
                  const updatedList = [newInv, ...invoices];
                  setInvoices(updatedList);
                  setSelectedInvoice(newInv);
                  saveToStorage(updatedList);
                }}
                className="font-mono text-xs text-[#d99a38] hover:text-[#f3be6a] flex items-center gap-1 uppercase"
              >
                <Plus className="w-3.5 h-3.5" /> New Quote
              </button>
            </div>

            <div className="space-y-2">
              {invoices.map((inv) => {
                const isSelected = inv.id === selectedInvoice.id;
                const total = inv.items.reduce((acc, i) => acc + i.qty * i.rate, 0) * 1.1;
                return (
                  <div
                    key={inv.id}
                    onClick={() => setSelectedInvoice(inv)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-[#14281c] border-[#d99a38] text-white shadow-lg"
                        : "bg-[#0d140e] border-white/5 text-stone-400 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-[#d99a38] font-bold">{inv.invoiceNumber}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold ${
                          inv.status === "Paid"
                            ? "bg-emerald-900/60 text-emerald-300"
                            : inv.status === "Sent"
                            ? "bg-amber-900/60 text-amber-300"
                            : "bg-stone-800 text-stone-300"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </div>
                    <div className="font-sans text-sm text-white font-medium">
                      {inv.clientCompany}
                    </div>
                    <div className="flex items-center justify-between text-xs text-stone-400 mt-2 font-mono">
                      <span>{inv.type}</span>
                      <span className="text-white font-semibold">
                        ${total.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Document Preview & Editor (Right Canvas) */}
          <div className="lg:col-span-8">
            <div className="bg-[#111e15] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
              {/* Document Header */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 border-b border-white/10 pb-8 print:border-black/10">
                <div className="space-y-1">
                  <div className="font-sans text-2xl font-bold tracking-wider uppercase text-white print:text-black">
                    AGROVIA CONSULTING
                  </div>
                  <div className="font-mono text-xs text-[#889b87] print:text-stone-600">
                    “Your crop comes first.”
                  </div>
                  <div className="font-mono text-[11px] text-stone-400 pt-2 print:text-stone-700">
                    ABN: 48 692 841 035<br />
                    Bowen & Burdekin Regions, North QLD<br />
                    Email: dev.p@agrovia.au
                  </div>
                </div>

                <div className="text-left sm:text-right space-y-1">
                  <div className="font-mono text-2xl font-light text-[#d99a38] uppercase print:text-black">
                    {selectedInvoice.type}
                  </div>
                  <div className="font-mono text-sm text-white font-bold print:text-black">
                    {selectedInvoice.invoiceNumber}
                  </div>
                  <div className="font-mono text-xs text-stone-400 print:text-stone-700">
                    Date: {selectedInvoice.date}<br />
                    Due Date: {selectedInvoice.dueDate}
                  </div>
                </div>
              </div>

              {/* Client Bill To & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-stone-400 uppercase print:text-stone-600">Client / Billed To:</span>
                  <div className="text-sm font-sans font-semibold text-white print:text-black">
                    {selectedInvoice.clientCompany}
                  </div>
                  <div className="text-stone-300 print:text-stone-800">Attn: {selectedInvoice.clientName}</div>
                  <div className="text-stone-400 print:text-stone-700">{selectedInvoice.clientEmail}</div>
                </div>

                <div className="space-y-1 sm:text-right">
                  <span className="text-stone-400 uppercase print:text-stone-600">Operating Region:</span>
                  <div className="text-sm text-stone-200 font-sans print:text-black">
                    {selectedInvoice.clientRegion}
                  </div>
                  <div className="text-stone-400 print:text-stone-700">Payment Terms: 14 Days Net</div>
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-stone-400 font-mono uppercase tracking-wider print:border-black/20 print:text-black">
                      <th className="py-3 font-medium">Description</th>
                      <th className="py-3 text-center font-medium">Qty</th>
                      <th className="py-3 text-right font-medium">Rate ($)</th>
                      <th className="py-3 text-right font-medium">Amount ($)</th>
                      <th className="py-3 text-center font-medium print:hidden">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 print:divide-black/10 text-stone-200 print:text-black">
                    {selectedInvoice.items.map((item) => (
                      <tr key={item.id}>
                        <td className="py-4 pr-4">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => {
                              const updatedItems = selectedInvoice.items.map((i) =>
                                i.id === item.id ? { ...i, description: e.target.value } : i
                              );
                              const updated = { ...selectedInvoice, items: updatedItems };
                              setSelectedInvoice(updated);
                              const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
                              setInvoices(updatedList);
                              saveToStorage(updatedList);
                            }}
                            className="w-full bg-transparent border-none focus:outline-none focus:bg-white/5 rounded px-1.5 py-1 text-white print:text-black"
                          />
                        </td>
                        <td className="py-4 text-center">
                          <input
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) => {
                              const updatedItems = selectedInvoice.items.map((i) =>
                                i.id === item.id ? { ...i, qty: parseFloat(e.target.value) || 0 } : i
                              );
                              const updated = { ...selectedInvoice, items: updatedItems };
                              setSelectedInvoice(updated);
                              const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
                              setInvoices(updatedList);
                              saveToStorage(updatedList);
                            }}
                            className="w-16 text-center bg-transparent border-none focus:outline-none focus:bg-white/5 rounded py-1 text-white print:text-black font-mono"
                          />
                        </td>
                        <td className="py-4 text-right">
                          <input
                            type="number"
                            value={item.rate}
                            onChange={(e) => {
                              const updatedItems = selectedInvoice.items.map((i) =>
                                i.id === item.id ? { ...i, rate: parseFloat(e.target.value) || 0 } : i
                              );
                              const updated = { ...selectedInvoice, items: updatedItems };
                              setSelectedInvoice(updated);
                              const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
                              setInvoices(updatedList);
                              saveToStorage(updatedList);
                            }}
                            className="w-24 text-right bg-transparent border-none focus:outline-none focus:bg-white/5 rounded py-1 text-white print:text-black font-mono"
                          />
                        </td>
                        <td className="py-4 text-right font-mono font-medium text-white print:text-black">
                          ${(item.qty * item.rate).toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td className="py-4 text-center print:hidden">
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-stone-500 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Add Item Trigger */}
              <div className="print:hidden">
                <button
                  onClick={handleAddItem}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d99a38] hover:text-[#f3be6a] uppercase transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Service Line
                </button>
              </div>

              {/* Totals Summary */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-t border-white/10 pt-6 print:border-black/20">
                <div className="space-y-2 max-w-sm font-mono text-xs text-stone-400 print:text-stone-700">
                  <div className="text-white print:text-black font-semibold uppercase">Payment Terms:</div>
                  <p>
                    Direct EFT payment instructions will be provided directly to registered client accounts.
                    No public bank details exposed.
                  </p>
                </div>

                <div className="w-full sm:w-64 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-stone-400 print:text-stone-700">
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-stone-400 print:text-stone-700">
                    <span>GST (10%):</span>
                    <span>${gst.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white print:text-black border-t border-white/10 pt-2 print:border-black/20">
                    <span>Total (AUD):</span>
                    <span className="text-[#d99a38] print:text-black">
                      ${grandTotal.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Controls for Admin */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 print:hidden">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-stone-400">Status:</span>
                  <select
                    value={selectedInvoice.status}
                    onChange={(e: any) => {
                      const updated = { ...selectedInvoice, status: e.target.value };
                      setSelectedInvoice(updated);
                      const updatedList = invoices.map((inv) => (inv.id === updated.id ? updated : inv));
                      setInvoices(updatedList);
                      saveToStorage(updatedList);
                    }}
                    className="px-3 py-1.5 rounded bg-black/40 border border-white/10 text-xs font-mono text-white focus:outline-none"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Sent">Sent</option>
                    <option value="Paid">Paid</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>

                {selectedInvoice.type === "Quote" && (
                  <button
                    onClick={handleConvertToInvoice}
                    className="px-5 py-2.5 rounded-full bg-[#d99a38] hover:bg-[#e6a848] text-[#0a110c] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Convert Quote to Tax Invoice
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
