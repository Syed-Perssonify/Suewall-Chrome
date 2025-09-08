type CacheEntry<T = any> = {
  urlKey: string; // the page URL or any logical key
  apiUrl: string; // the API endpoint you called
  data: T; // parsed JSON (or string for text)
  ts: number; // Date.now() when stored
  ttlMs: number; // how long this entry is fresh
};

// Cache configuration
const CACHE_BUCKET = "apiCache"; // storage key root

async function readBucket(): Promise<Record<string, CacheEntry>> {
  const res = await chrome.storage.local.get(CACHE_BUCKET);
  return (res[CACHE_BUCKET] as Record<string, CacheEntry>) || {};
}

async function writeBucket(bucket: Record<string, CacheEntry>) {
  await chrome.storage.local.set({ [CACHE_BUCKET]: bucket });
}

function isFresh(entry: CacheEntry) {
  return Date.now() - entry.ts < entry.ttlMs;
}

export { CacheEntry, readBucket, writeBucket, isFresh };
