'use client';

import { trackPhoneClick } from '@/lib/analytics';

interface PhoneLinkProps {
  className?: string;
  children: React.ReactNode;
  phone?: string;
  trackingNumber?: string;
}

export default function PhoneLink({
  className,
  children,
  phone = '+442039718252',
  trackingNumber = '02039718252',
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${phone}`}
      onClick={() => trackPhoneClick(trackingNumber)}
      className={className}
    >
      {children}
    </a>
  );
}
