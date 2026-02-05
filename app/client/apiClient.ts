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
): Promise<T> {
  const { params, ...fetchOptions } = options;

  const query = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params).map(([k, v]) => [k, String(v)])
      ).toString()
    : "";

  const res = await fetch(`${BASE_URL}${path}${query}`, {
    credentials: "include", // 쿠키 쓰면 중요
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

  return res.json();
}