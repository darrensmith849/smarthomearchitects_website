export type AnalyticsEvent =
  | "book_call_click"
  | "whatsapp_click"
  | "solutions_preview_click"
  | "project_teaser_click"
  | "guide_download_click";

export const analyticsEnabled =
  process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true";
