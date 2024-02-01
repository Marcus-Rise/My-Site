"use client";

import type { FC } from "react";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsYandexConfig } from "@/analytics/yandex/analytics-yandex.config";

type AnalyticsYandexReporterProps = {};

declare const ym: any;

const AnalyticsYandexReporter: FC<AnalyticsYandexReporterProps> = ({}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(analyticsYandexConfig.id, "hit", url);
  }, [pathname, searchParams]);

  return null;
};

export { AnalyticsYandexReporter };
