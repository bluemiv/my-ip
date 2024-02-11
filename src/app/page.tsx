import configuration from '@/configuration';
import { IpInfoContainer, IpSubInfoContainer } from '@/features/ip';

const fetchIp = async () => {
  const ipRes = await fetch([configuration.IP_API_URL, 'json'].join('/'), {
    next: { revalidate: 10 },
  });
  return await ipRes.json();
};

export default async function Home() {
  const ipInfo = await fetchIp();
  return (
    <>
      <IpInfoContainer ipv4={ipInfo?.IPv4} />
      <IpSubInfoContainer ipInfo={ipInfo} />
    </>
  );
}
