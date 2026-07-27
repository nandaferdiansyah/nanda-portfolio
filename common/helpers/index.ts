const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** "2022-07" -> "Jul 2022"; anything else (e.g. "Present") passes through. */
export const formatMonthYear = (value: string) => {
  const match = value.match(/^(\d{4})-(\d{2})$/);
  if (!match) return value;

  const [, year, month] = match;
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

/** Human readable duration between two "YYYY-MM" values. */
export const getDuration = (start: string, end: string) => {
  const parse = (value: string) => {
    const match = value.match(/^(\d{4})-(\d{2})$/);
    if (!match) return null;
    return { year: Number(match[1]), month: Number(match[2]) };
  };

  const now = new Date();
  const from = parse(start);
  const to = parse(end) ?? {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  };
  if (!from) return "";

  const totalMonths =
    (to.year - from.year) * 12 + (to.month - from.month) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? "s" : ""}`);

  return parts.join(" ");
};
