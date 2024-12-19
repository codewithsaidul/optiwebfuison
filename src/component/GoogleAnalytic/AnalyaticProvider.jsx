'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const AnalyticsProvider = ({ trackingId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${searchParams ? `?${searchParams}` : ''}`;
    if (window.gtag) {
      window.gtag('config', trackingId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, trackingId]);

  return null;
};

export default AnalyticsProvider;
