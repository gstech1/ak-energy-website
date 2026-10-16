"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, LogIn, X } from "lucide-react";

import { checkWarranty } from "@/lib/warranty-api";
import WarrantyResultCard from "@/components/warranty/WarrantyResultCard";

const warrantyAppUrl =
  process.env.NEXT_PUBLIC_WARRANTY_APP_URL?.replace(/\/$/, "") ||
  "https://dashboard.suntreemyanmar.com";

type BarcodeDetection = { rawValue: string };
type BarcodeDetectorInstance = {
  detect: (source: HTMLVideoElement) => Promise<BarcodeDetection[]>;
};
type BarcodeDetectorConstructor = new (options: {
  formats: string[];
}) => BarcodeDetectorInstance;

export default function PublicWarrantyPage() {
  const [serialNumber, setSerialNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  async function handleCheck(value?: string) {
    const serial = (value ?? serialNumber).trim();

    if (!serial) {
      inputRef.current?.focus();
      return;
    }

    if (checked || loading) {
      return;
    }

    try {
      setLoading(true);
      setChecked(true);

      const response = await checkWarranty(serial);

      setResult(response);

      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } catch (error) {
      console.error(error);

      setResult({
        status: "NOT_FOUND",
        serialNumber: serial,
      });

      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } finally {
      setLoading(false);
    }
  }

  function clearSerial() {
    setSerialNumber("");
    setResult(null);
    setChecked(false);
    inputRef.current?.focus();
  }

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;

    if (videoRef.current) videoRef.current.srcObject = null;

    setCameraOpen(false);
  }

  useEffect(() => {
    if (!cameraOpen) {
      return;
    }

    let cancelled = false;
    let scanTimer: ReturnType<typeof setTimeout> | undefined;

    async function startScanner() {
      try {
        if (!videoRef.current) {
          return;
        }

        const BrowserBarcodeDetector = (
          window as Window & {
            BarcodeDetector?: BarcodeDetectorConstructor;
          }
        ).BarcodeDetector;

        if (!BrowserBarcodeDetector || !navigator.mediaDevices?.getUserMedia) {
          throw new Error("Camera barcode scanning is not supported here.");
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        const detector = new BrowserBarcodeDetector({ formats: ["code_128"] });

        const scan = async () => {
          if (cancelled || !videoRef.current) return;

          try {
            const [match] = await detector.detect(videoRef.current);
            const scannedValue = match?.rawValue.trim();

            if (scannedValue) {
              setSerialNumber(scannedValue);
              stopCamera();
              handleCheck(scannedValue);
              return;
            }
          } catch (error) {
            console.error("Barcode scan error:", error);
          }

          if (!cancelled) scanTimer = setTimeout(scan, 180);
        };

        scan();
      } catch (error) {
        if (cancelled) {
          return;
        }

        console.error("Camera error:", error);
        stopCamera();
        alert("Camera scanning is unavailable. Enter the serial number manually or use a USB/Bluetooth barcode scanner.");
      }
    }

    startScanner();

    return () => {
      cancelled = true;
      if (scanTimer) clearTimeout(scanTimer);
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, [cameraOpen]);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Logo */}
        <div className="flex justify-center px-6 pb-4 pt-6">
          <Image
            src="/images/logo/suntree-logo.png"
            alt="Suntree Myanmar"
            width={160}
            height={160}
            priority
            className="h-auto w-40"
          />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-500 py-3 shadow-md">
          <h1 className="text-center text-lg font-bold tracking-[0.2em] text-white">
            PUBLIC WARRANTY CHECK
          </h1>
        </div>

        {/* Body */}
        <div className="p-5">

          <p className="text-center text-sm leading-6 text-slate-500">
            Verify your product warranty instantly.
            <br />
            <span className="font-medium text-slate-700">
              Official warranty verification service by
            </span>
            <br />
            <span className="font-semibold">
              Arkar Min Thuka Electro Trading Co., Ltd.
            </span>
          </p>

          {/* Serial */}
          <div className="mt-6">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Product Serial Number
            </label>

            <div className="flex gap-2">

              <div className="relative min-w-0 flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={serialNumber}
                  autoComplete="off"
                  spellCheck={false}
                  disabled={checked || loading}
                  onChange={(e) => {
                    if (!checked) {
                      setSerialNumber(e.target.value);
                      setResult(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleCheck();
                    }
                  }}
                  placeholder="ENTER PRODUCT SERIAL NUMBER"
                  className="h-12 w-full rounded-xl border border-slate-300 px-4 pr-11 uppercase outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 disabled:bg-slate-100 disabled:text-slate-500"
                />

                {serialNumber && !loading && (
                  <button
                    type="button"
                    onClick={clearSerial}
                    aria-label="Clear serial number"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Camera */}
              <button
                type="button"
                onClick={() => {
                  if (checked || loading) {
                    return;
                  }

                  setResult(null);
                  setCameraOpen(true);
                }}
                disabled={checked || loading}
                aria-label="Scan barcode with camera"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-emerald-600 bg-white text-xl transition hover:bg-emerald-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                📷
              </button>

            </div>

            <p className="mt-2 text-xs text-slate-400">
              Enter manually, scan with camera, or use a USB/Bluetooth barcode scanner.
            </p>

          </div>

          {/* Check Button */}
          <button
            type="button"
            onClick={() => handleCheck()}
            disabled={loading || checked}
            className="mt-5 h-12 w-full rounded-xl bg-emerald-600 text-base font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
          >
            {loading
              ? "CHECKING WARRANTY..."
              : checked
                ? "CHECKED"
                : "CHECK WARRANTY"}
          </button>

          {/* Result */}
          {result && (
            <div ref={resultRef} className="mt-6">
              <WarrantyResultCard
                status={result.status}
                publicDisplay
                {...result}
              />
            </div>
          )}

          {/* Clear after check */}
          {checked && (
            <div className="mt-4">
              <p className="rounded-xl bg-amber-50 px-4 py-3 text-center text-xs font-medium leading-5 text-amber-700">
                Warranty check complete.
                <br />
                Clear the serial number before checking another product.
              </p>

              <button
                type="button"
                onClick={clearSerial}
                className="mt-3 h-12 w-full rounded-xl bg-slate-800 text-sm font-bold text-white transition hover:bg-slate-900 active:scale-[0.98]"
              >
                CLEAR &amp; CHECK ANOTHER
              </button>
            </div>
          )}

          {/* ==================================================
              TWO SECONDARY OPTIONS
             ================================================== */}

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Warranty Policy */}
            <Link
              href="https://suntreemyanmar.com/warranty-policy"
              className="group flex min-h-[64px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-emerald-300 hover:bg-emerald-50 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <FileText size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-700">
                  Warranty Policy
                </p>

                <p className="mt-0.5 text-[11px] leading-4 text-slate-400">
                  Terms &amp; conditions
                </p>
              </div>
            </Link>

            {/* Dealer Login */}
            <Link
              href={`${warrantyAppUrl}/warranty/dealer-login`}
              className="group flex min-h-[64px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-emerald-300 hover:bg-emerald-50 active:scale-[0.98]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <LogIn size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-slate-700">
                  Dealer Login
                </p>

                <p className="mt-0.5 text-[11px] leading-4 text-slate-400">
                  Dealer access
                </p>
              </div>
            </Link>

          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              Official warranty service by
            </p>

            <p className="mt-1 text-xs font-semibold text-slate-500">
              Arkar Min Thuka Electro Trading Co., Ltd.
            </p>
          </div>

        </div>
      </div>

      {/* Camera Modal */}
      {cameraOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">

          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="bg-emerald-700 px-5 py-4 text-center text-white">
              <h2 className="text-lg font-bold">
                Scan Product Barcode
              </h2>

              <p className="mt-1 text-xs text-emerald-100">
                Place the barcode inside the frame
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-black">

              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-72 rounded-xl border-2 border-emerald-400 shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]" />
              </div>

            </div>

            <div className="p-4">

              <button
                type="button"
                onClick={stopCamera}
                className="h-12 w-full rounded-xl border border-slate-300 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                CANCEL
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}
