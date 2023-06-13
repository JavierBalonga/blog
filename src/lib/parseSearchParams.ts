export default function parseSearchParams(searchParams: URLSearchParams) {
  const keys = searchParams.keys();
  const result: Record<string, string | string[]> = {};
  for (const key of keys) {
    const values = searchParams.getAll(key);
    result[key] = values.length === 1 ? values[0] : values;
  }
  return result;
}
