interface TProps {
  ipv4?: string;
}

export default function IpInfoContainer({ ipv4 }: TProps) {
  return (
    <div className="flex justify-center items-center gap-md text-3xl h-[250px]">
      <span>내 IP 주소</span>
      <span className="text-primary font-bold">{ipv4}</span>
    </div>
  );
}
