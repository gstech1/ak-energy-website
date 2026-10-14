const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001"
).replace(/\/+$/, "");

export async function checkWarranty(serialNumber: string) {
  const normalizedSerialNumber = serialNumber.trim().replace(/\s+/g, "");
  const response = await fetch(
    `${API_BASE_URL.replace(/\/$/, "")}/warranty/check/${encodeURIComponent(normalizedSerialNumber)}`,
    { method: "GET", cache: "no-store" },
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(
      errorData?.message || `Unable to verify warranty (${response.status}).`,
    );
  }

  return response.json();
}
