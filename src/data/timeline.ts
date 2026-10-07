export interface TimelineEvent {
  /** "M.YYYY" (e.g. "9.2024"), "YYYY", or "today". Shown as written. */
  date: string;
  activity: string;
}

export const TIMELINE_START_YEAR = 2010;
export const TIMELINE_YEARS = 16;
export const TIMELINE_END_YEAR = TIMELINE_START_YEAR + TIMELINE_YEARS;

// Add events here; they are placed on the timeline by date.
// Seeded from the Figma design.
export const timelineEvents: TimelineEvent[] = [
  { date: "9.2010", activity: "I take my very first art class" },
  { date: "9.2022", activity: "I start my cs & design career at Northeastern" },
  {
    date: "6.2023",
    activity:
      "I survived Object-Oriented Design, a class that defined my interest in SWE!",
  },
  {
    date: "1.2024",
    activity: "I started my first co-op at BigHat Biosciences as a SWE intern",
  },
  { date: "9.2024", activity: "I started taking my first interaction design class" },
  { date: "Today", activity: "you visited my page! thanks!" },
];

/**
 * Where a date falls on the timeline, from 0 (start) to 1 (end).
 * Accepts "M.YYYY", "M/YYYY", "M-YYYY", "YYYY", or "today". Dates outside the
 * range are clamped; unparseable dates return null.
 */
export function timelinePosition(date: string): number | null {
  const value = date.replace(/\s+/g, "").toLowerCase();

  let decimalYear: number;
  if (value === "today") {
    decimalYear = TIMELINE_END_YEAR;
  } else {
    const match = value.match(/^(?:(\d{1,2})[./-])?(\d{4})$/);
    if (!match) return null;
    const month = match[1] ? Number(match[1]) : 1;
    if (month < 1 || month > 12) return null;
    decimalYear = Number(match[2]) + (month - 1) / 12;
  }

  const position = (decimalYear - TIMELINE_START_YEAR) / TIMELINE_YEARS;
  return Math.min(1, Math.max(0, position));
}
