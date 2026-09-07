const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5001";

async function getWebsiteAds() {
  try {
    const response = await fetch(
      `${API_URL}/website-cms/ads`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function WebsiteAds() {
  const ads = await getWebsiteAds();

  const ad1 = ads.find(
    (ad: any) =>
      ad.slot === 1 &&
      ad.isPublished,
  );

  const ad2 = ads.find(
    (ad: any) =>
      ad.slot === 2 &&
      ad.isPublished,
  );

  if (!ad1 && !ad2) {
    return null;
  }

  return (
    <div className="mb-16 grid gap-6 lg:grid-cols-2">
      {ad1 && (
        <div className="aspect-square overflow-hidden rounded-3xl">
          <img
            src={`${API_URL}${ad1.image}`}
            alt="Advertisement 1"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {ad2 && (
        <div className="aspect-square overflow-hidden rounded-3xl">
          <img
            src={`${API_URL}${ad2.image}`}
            alt="Advertisement 2"
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}