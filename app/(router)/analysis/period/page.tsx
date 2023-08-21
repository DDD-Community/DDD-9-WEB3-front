'use client';

import PeriodicAnalysisHub from '@/_components/analysis/period/PeriodicAnalysisHub';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const PeriodAnalysis = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('category')) {
      router.push('?category=month');
    }
  }, [router]);

  return <PeriodicAnalysisHub />;
};

export default PeriodAnalysis;
