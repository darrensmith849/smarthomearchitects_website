import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { type AnalyticsEvent } from "@/lib/analytics";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName?: AnalyticsEvent;
  eventProps?: Record<string, string>;
};

export function TrackedAnchor({ children, eventName, eventProps, ...rest }: TrackedAnchorProps) {
  const propsValue = eventProps ? JSON.stringify(eventProps) : undefined;

  return (
    <a
      {...rest}
      data-analytics-event={eventName}
      data-analytics-props={propsValue}
    >
      {children}
    </a>
  );
}
