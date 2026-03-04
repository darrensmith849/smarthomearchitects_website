import { z } from "zod";

export const projectStages = ["Concept", "In Design", "In Construction", "Renovation", "Existing Home Upgrade"] as const;
export const scopeRanges = ["Single Room", "Partial Home", "Whole Home", "Estate / Multi-Building"] as const;
export const timelineRanges = ["0-3 months", "3-6 months", "6-12 months", "12+ months"] as const;
export const budgetRanges = ["Not sure yet", "R250k-R500k", "R500k-R1m", "R1m-R2m", "R2m+"] as const;

export const leadFormSchema = z.object({
  fullName: z.string().trim().min(2, "Please provide your full name."),
  email: z.string().trim().email("Please provide a valid email address."),
  phone: z.string().trim().min(7, "Please provide a valid phone number."),
  location: z.string().trim().min(2, "Please provide your project location."),
  projectStage: z.enum(projectStages, {
    error: "Please select your project stage.",
  }),
  scope: z.enum(scopeRanges, {
    error: "Please select your project scope.",
  }),
  timeline: z.enum(timelineRanges, {
    error: "Please select your timeline.",
  }),
  budgetRange: z.enum(budgetRanges).optional(),
  message: z.string().trim().min(12, "Please add a short project summary."),
  website: z.string().optional(),
  formStartedAt: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
