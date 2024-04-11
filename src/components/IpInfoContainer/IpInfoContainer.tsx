'use client';

import { useEffect, useState } from 'react';
import { TIPInfo } from '@/types';
import { configuration } from '@/constants';
import IpSubInfo from './IpSubInfo';

const fetchIp = async () => {
  const ipApiUrl = ['https://geolocation-db.com', 'json', configuration.IP_API_KEY].join('/');
  const ipRes = await fetch(ipApiUrl, {
    next: { revalidate: 10 },
  });
  return await ipRes.json();
};

export default function IpInfoContainer() {
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
    <div className="flex flex-col gap-lg">
      <div className="animate-fade-in">
        <div className="bg-[#d0ebff] flex flex-col md:flex-row justify-center items-center gap-md text-3xl rounded-lg h-[250px]">
          <span>내 IP 주소</span>
          <span className="text-primary font-bold">{ipInfo.IPv4}</span>
        </div>
      </div>
      <IpSubInfo ipInfo={ipInfo} />
    </div>
  );
}
