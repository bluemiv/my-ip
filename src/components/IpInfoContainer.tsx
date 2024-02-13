interface TProps {
  ipv4?: string;
}

export default function IpInfoContainer({ ipv4 }: TProps) {
  return (
    <div className="p-xl animate-fade-in">
      <div className="bg-[#d0ebff] flex flex-col md:flex-row justify-center items-center gap-md text-3xl rounded-lg h-[250px]">
        <span>내 IP 주소</span>
        <span className="text-primary font-bold">{ipv4}</span>
      </div>
    </div>
  );
}
