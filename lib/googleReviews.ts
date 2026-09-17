export type Testimonial = { quote: string; author: string; org: string };

type GooglePlaceReview = {
  author_name: string;
  text: string;
  rating: number;
  time: number;
};

type GooglePlaceDetailsResponse = {
  status: string;
  result?: { reviews?: GooglePlaceReview[] };
};

// Google's Place Details API caps reviews at 5 (Google's own "most relevant"
// picks), and offers no way to request "all" reviews — that requires the
// gated Business Profile API instead. We fetch what's available and keep
// only 5-star ones. Falls back to null (caller uses static testimonials)
// when the API key/place ID aren't configured yet, or the request fails.
export async function getGoogleReviews(): Promise<Testimonial[] | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "reviews");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    // Cache for a day — Google's ToS don't allow indefinite caching of review content.
    const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 } });
    if (!res.ok) return null;

    const data: GooglePlaceDetailsResponse = await res.json();
    if (data.status !== "OK" || !data.result?.reviews) return null;

    const fiveStar = data.result.reviews
      .filter((r) => r.rating === 5 && r.text)
      .map((r) => ({ quote: r.text, author: r.author_name, org: "Google Review" }));

    return fiveStar.length > 0 ? fiveStar : null;
  } catch {
    return null;
  }
}
