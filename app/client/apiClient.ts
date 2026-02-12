const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("API base url is not defined");
}

type RequestOptions = RequestInit & {
  params?: Record<string, string | number>;
};

export async function apiFetch<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T | null> {
  const { params, ...fetchOptions } = options;

  const query = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ).toString()
    : "";

  const res = await fetch(`${BASE_URL}${path}${query}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...fetchOptions,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  // 🔥 body가 있는 경우만 json 파싱
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    return res.json();
  }

  return null;
}