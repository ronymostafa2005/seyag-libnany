export const themeIds = ["cedar", "dusk", "ember", "tide"] as const;

export type ThemeId = (typeof themeIds)[number];

export const themes: {
  id: ThemeId;
  label: string;
  note: string;
  swatch: string;
  wash: string;
}[] = [
  {
    id: "cedar",
    label: "أرز",
    note: "بحر وذهب ومرجاني",
    swatch: "conic-gradient(from 210deg, #071c1a, #0f6e68 32%, #5ac4b0 58%, #e8d4a6 78%, #c4533c)",
    wash: "#5ac4b0",
  },
  {
    id: "dusk",
    label: "غسق",
    note: "بنفسجي وعنبر ووردي",
    swatch: "conic-gradient(from 210deg, #140e24, #6a46e8 32%, #c4b2ff 58%, #f0d7a6 78%, #e15b86)",
    wash: "#c4b2ff",
  },
  {
    id: "ember",
    label: "جمر",
    note: "نحاسي وكريمي",
    swatch: "conic-gradient(from 210deg, #1c0e09, #b8431f 32%, #ffb088 58%, #f3d2a0 78%, #d4536a)",
    wash: "#ffb088",
  },
  {
    id: "tide",
    label: "مد",
    note: "أزرق وأكوا ورملي",
    swatch: "conic-gradient(from 210deg, #071422, #1766b5 32%, #7ec8f0 58%, #ead7a4 78%, #e06a4f)",
    wash: "#7ec8f0",
  },
];

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return themeIds.includes(value as ThemeId);
}
