import { IpInfoContainer } from '@/components';

export default function Home() {
  return (
    <div className="flex flex-col p-md md:p-xl">
      <IpInfoContainer />
      <div className="flex flex-col gap-md border-t pt-xl mt-xl">
        <div className="font-semibold text-xl">IP 주소란 뭘까요?</div>
        <div className="leading-10 break-words">
          <p>
            IP 주소는 인터넷 상에서 컴퓨터나 다른 장치들이 서로를 식별하고 통신하기 위해 사용하는{' '}
            <span className="text-primary">고유한 번호</span>입니다.
          </p>
          <p>
            우리가 평소에 사용하는 주소와 비슷하다고 생각할 수 있는데요, 예를 들어, 우리가 편지를
            보낼 때 받는 사람의 집 주소를 적어야 그 편지가 올바른 곳으로 배달되듯이, 컴퓨터도 인터넷
            상에서 데이터를 주고받을 때 올바른 장치로 데이터를 보내기 위해 IP 주소를 사용합니다.
          </p>
          <p>
            좀 더 심화된 내용으로 넘어가면, IP 주소는{' '}
            <span className="text-primary">IPv4와 IPv6</span> 두 가지 버전이 있습니다.
          </p>
          <ul className="flex flex-col list-disc pl-md">
            <li>
              IPv4: 이것은 가장 널리 사용되는 IP 주소 형식으로, 네 부분으로 나뉘며 각 부분은
              점(.)으로 구분됩니다. 예를 들어, 192.168.1.1과 같은 형태입니다. IPv4 주소는 약 40억
              개의 고유 주소를 제공하는데, 인터넷 사용자 수의 급격한 증가로 인해{' '}
              <span className="text-primary">이 주소들이 점점 부족</span>해지고 있습니다.
            </li>
            <li>
              IPv6: 주소 공간 부족 문제를 해결하기 위해 도입된 새로운 버전으로, 훨씬 더 많은 수의
              고유 주소를 제공합니다. IPv6 주소는 콜론(:)으로 구분된 여덟 부분으로 나뉘며, 각 부분은
              16진수로 표현됩니다. 예를 들어, 2001:0db8:85a3:0000:0000:8a2e:0370:7334와 같은
              형태입니다.{' '}
              <span className="text-primary">
                IPv6는 IPv4에 비해 거의 무한에 가까운 주소를 제공
              </span>
              하므로, IP 주소 부족 문제를 근본적으로 해결할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
