'use client';

import { useEffect, useState } from 'react';
import configuration from '@/configuration';
import { IpInfoContainer, IpSubInfoContainer } from '@/features/ip';
import { TIPInfo } from '@/types';

const fetchIp = async () => {
  const ipApiUrl = ['https://geolocation-db.com', 'json', configuration.IP_API_KEY].join('/');
  const ipRes = await fetch(ipApiUrl, {
    next: { revalidate: 10 },
  });
  return await ipRes.json();
};

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ipInfo, setIpInfo] = useState<null | TIPInfo>(null);

  useEffect(() => {
    fetchIp().then((ipInfo) => {
      setIpInfo(ipInfo);
      setIsLoading(false);
    });
  }, []);

  if (isLoading || !ipInfo) {
    return <p className="flex items-center justify-center h-[350px]">주소를 찾고 있습니다.</p>;
  }

  return (
    <>
      <IpInfoContainer ipv4={ipInfo?.IPv4 || ''} />
      <IpSubInfoContainer ipInfo={ipInfo} />
    </>
  );
}
