import { TIPInfo } from '@/types';

interface TProps {
  ipInfo: TIPInfo;
}

export default function IpSubInfoContainer({ ipInfo }: TProps) {
  return (
    <div className="flex flex-col gap-md p-xl">
      {[
        {
          label: '국가',
          value: [ipInfo.country_name, ipInfo.country_code ? `(${ipInfo.country_code})` : null]
            .filter((v) => !!v)
            .join(' '),
        },
        {
          label: '우편번호',
          value: ipInfo.postal,
        },
        { label: '주소', value: ipInfo.city },
        { label: '위도/경도', value: [ipInfo.latitude, ipInfo.longitude].join(' / ') },
      ]
        .filter(({ value }) => !!value)
        .map(({ label, value }) => (
          <div key={label} className="flex gap-md">
            <span className="w-[80px]">{label}</span>
            <span className="font-bold">{value}</span>
          </div>
        ))}
    </div>
  );
}
