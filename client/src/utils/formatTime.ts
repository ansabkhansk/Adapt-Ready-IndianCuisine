export function formatTime(value: number | undefined | null): string {
  return value != null && value !== -1 ? `${value} mins` : '';
}
