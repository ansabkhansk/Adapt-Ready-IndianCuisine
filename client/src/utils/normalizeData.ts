export function normalizeData<T extends Record<string, any>>(data: T[]): T[] {
  return data.map((item) => {
    const normalizedItem: Record<string, any> = { ...item };

    for (const key in normalizedItem) {
      if (normalizedItem[key] === -1) {
        normalizedItem[key] = null;
      }
    }

    return normalizedItem as T;
  });
}
