'use client';

import TopNavigation from '@components/common/TopNavigation';
import { ROUTES } from '@constants/routes';
import palette from '@styles/palette';
import { styled } from 'styled-components';

export default function TermPage() {
  return (
    <Wrapper>
      <TopNavigation version="BOTH" path={ROUTES.HOME} />
      <Title>서비스 이용약관</Title>
      <Content>
        <div>
          제1조(목적)
          <br />이 약관은 기획재정부 복권위원회 지정 복권수탁사업자인 ㈜로또폴리오(이하 “회사”라
          합니다)이 운영하는 사이트(이하 “사이트”)를 통해 제공하는 서비스와 이용자(이하 “회원”이라
          합니다)의 권리, 의무 및 책임 사항을 규정하는 것을 목적으로 합니다.
        </div>
        <div>
          제2조(용어의 정의)
          <Description>
            ① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다. “사이트”라 함은 회사가 서비스를
            제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 사용할 수 있도록 설정한 가상의
            공간(회사가 운영하는 웹사이트 및 모바일 웹, 앱 등을 모두 포함)을 의미합니다. “서비스”라
            함은 회사가 사이트를 통해 제공하는 복권판매, 정보안내 등 관련 제반 서비스 일체를
            의미합니다. “회원”이라 함은 사이트에 회원등록을 한 자로서, 계속적으로 사이트에서
            제공하는 서비스를 이용할 수 있는 자를 말합니다. “아이디(ID)”라 함은 회원의 식별과 서비스
            이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 문자와 숫자의 조합을 말합니다.
            “비밀번호(Password)”라 함은 회원의 동일성 확인과 회원의 권익 및 정보보호를 위해 회원
            스스로가 설정하여 사이트에 등록한 문자 및 특수문자, 숫자 등의 조합을 말합니다.
            “예치금”이라 함은 회원이 사이트를 통해 회사가 판매하는 상품구매 또는 서비스를 이용할 수
            있는 결제수단으로 회사가 정하는 방식에 따라 금액을 예치하여 이용할 수 있으며, 환급 및
            환불금액을 포함합니다. “복권”이라 함은 「복권 및 복권기금법」 제2조(정의)에 의거한
            표권을 말합니다.
          </Description>
        </div>
        <div>
          제3조(약관의 명시와 설명 및 개정)
          <Description>
            ① 회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호(전화, 팩스),
            사업자등록번호, 통신판매업신고번호 등을 회원이 쉽게 확인할 수 있도록 사이트 초기 서비스
            화면에 게시합니다. 다만, 약관의 구체적 내용은 회원이 연결화면을 통하여 볼 수 있도록 할
            수 있습니다.
            <br />② 회사는 「개인정보보호법」 등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할
            수 있습니다.
            <br />③ 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께
            사이트의 화면에 그 적용일자 7일(다만, 회원에게 불리한 내용으로 변경하는 경우에는 공지
            외에 이메일, 팝업창 등의 전자적 수단으로 통지) 이전부터 적용일자 전일까지 공지합니다.
            <br />④ 제3조 제3항에 의해 변경된 약관은 관련 법령에 특별한 규정 및 기타 부득이한 사유가
            없는 한 그 적용일자 이전으로 소급하여 적용되지 않습니다.
            <br />⑤ 제3조 제3항에 따라 공지된 적용일자 이후에 회원이 명시적으로 거부의사를 표명하지
            않을 경우에는 개정된 약관에 동의하는 것으로 간주하며, 변경된 약관에 동의하지 않는 회원은
            회원 탈퇴를 요청할 수 있습니다. 제3항의 조치에도 불구하고 약관의 개정 사실을 알지
            못함으로써 발생하는 회원의 피해에 대하여 회사는 책임을 지지 않습니다.
          </Description>
        </div>
        <div>
          제4조(약관 외 준칙)
          <Description>
            ① 이 약관에 명시되지 않은 사항이 관계 법령에 규정되어 있을 경우에는 그 규정에 따릅니다.
            <br />② 회사는 제공하는 상품의 개별 서비스에 대한 별도의 약관(이하 “개별약관”) 또는
            사이트 이용과 관련된 세부조건(이하 “이용정책”)을 둘 수 있으며, 그 내용이 본 약관과 다를
            경우 개별약관 및 이용정책이 우선합니다.
            <br />③ 회원은 항상 개별약관이나 이용정책의 내용에 변경이 있는지 여부를 예의주시하여야
            하며, 변경사항의 공지가 있을 때에는 이를 확인하여야 합니다.
          </Description>
        </div>
        <div>
          제5조(서비스의 제공 등)
          <Description>
            ① 회사는 사이트를 통해 다음 각 호와 같은 서비스를 제공합니다. 인터넷을 통한 복권의 판매
            예치금 계좌의 운영 기타 회사가 정하는 서비스 또는 업무
            <br />② 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 단, 복권구입 시 이용하는
            복권종류별로 이용시간의 제한이 있을 수 있으며 이용시간은 개별약관에 따릅니다.
            <br />③ 회사는 다음 각 호에 해당하는 경우 사전 공지 후 서비스 제공을 중단할 수 있습니다.
            다만 사전 공지를 할 수 없는 경우 사후 공지할 수 있습니다. 복권 정책 변경 등에 의한 경우
            시스템의 유지, 보수를 수행하기 위해 필요한 경우 사이트의 원활한 운영을 위해 사전에
            공지한 경우 통신, 전력 등의 공급이 중단되는 불가피한 경우 천재지변, 전쟁, 폭동, 테러,
            해킹, DDOS 등 불가항력적 사유로 서비스 중지의 명백한 사유가 발생한 경우
            <br />④ 회사는 서비스의 제공에 필요한 경우, 정기점검을 실시할 수 있으며, 정기점검시간은
            사이트에 공지한 바에 따릅니다.
          </Description>
        </div>
        <div>
          제6조(서비스의 변경)
          <Description>
            ① 회사는 기술 및 운영상 상당한 이유가 있는 경우, 서비스의 전부 또는 일부를 변경할 수
            있습니다.
            <br />② 서비스의 내용, 이용방법, 이용시간에 대해 변경이 있는 경우에는 해당 서비스
            초기화면에 변경사유, 변경될 서비스의 내용 및 제공일자 등을 게시합니다.
          </Description>
        </div>
        <div>
          제7조(서비스 이용계약 체결)
          <Description>
            ① 회사 사이트 서비스 이용계약은 회원이 되고자 하는 자(이하 “가입신청자”)가 회사가
            요구하는 항목들을 사실대로 기재하고 이 약관에 동의한 다음 회원가입신청을 하면, 회사가
            이러한 신청을 승낙하여 신청절차 상에서 가입완료가 표시된 시점에 성립됩니다.
            <br />② 가입신청자는 반드시 본인의 정보(이름, 생년월일, 성별 등)가 인증되어야만 서비스를
            이용할 수 있으며, 본인의 정보로 등록하지 않은 가입신청자는 일체의 권리를 주장할 수
            없습니다.
            <br />③ 가입신청자 중 「청소년 보호법」 제2조 제1호에 따른 청소년은 「복권 및
            복권기금법」 제5조 제3항에 의거 회원이 될 수 없습니다.
            <br />④ 회사는 원칙적으로 제7조 제1항에 따른 회원가입신청에 대하여 승낙함을 원칙으로
            합니다. 다만, 다음 각 호의 사유가 있는 경우, 신청에 대하여는 승낙을 하지 않거나 사후에
            이용계약을 해지할 수 있습니다. 가입신청자가 이 약관의 위반 등의 사유로 이전에 회원자격이
            상실 또는 이용계약이 해지되었던 경우 실명이 아니거나 타인의 명의를 이용한 경우 허위
            정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우 또는 오기 등이 있는 경우
            가입신청자의 귀책사유로 인하여 승낙이 불가능하거나 기타 회사가 정한 제반 사항을 위반하여
            신청하는 경우 기타 이 약관에 위배되거나 위법 또는 부당한 가입신청임이 확인된 경우 회원의
            요청에 의하여 탈퇴한 때로부터 30일이 지나지 아니한 경우 탈퇴한 회원이 탈퇴 전 아이디로
            재가입을 신청한 경우
            <br />⑤ 제7조 제1항에 따른 신청에 있어 회사는 전문기관을 통한 실명확인 및 본인인증을
            요청할 수 있습니다.
          </Description>
        </div>
        <div>
          제8조(이용계약의 해제, 해지 등)
          <Description>
            ① 회원은 언제든지 이용계약 해지를 위해 회원 탈퇴를 할 수 있으며, 회사는 관련법 등이
            정하는 바에 따라 이를 즉시 처리하여야 합니다.
            <br />② 이용계약 해지의 효과는 각 호에 따릅니다. 회원이 사용한 모든 거래기록 열람 통제
            개별서비스에 대한 권리 소멸 복권구입, 게임 등 로그인이 필요한 거래 이용 불가
            <br />③ 회원이 이용계약 해지를 위해 회원 탈퇴를 하는 경우 이용계약이 자동 해지 됩니다.
            단, 다음 각 호에 해당하는 경우, 회원 탈퇴가 즉시 적용되지 않습니다. 예치금 잔액이
            남아있는 경우 추첨일이 도래하지 않은 추첨복권이 있는 경우 당·낙첨 여부를 확인하지 않은
            즉석복권이 있는 경우 예치금 출금 처리 중인 경우 미수령 당첨복권이 있는 경우
            <br />④ 회사는 회원에게 다음 각 호에 해당하는 사유가 발생하거나 확인된 경우 이용계약을
            해지할 수 있습니다. 회원이 서비스의 원활한 진행을 방해하는 행위를 하거나 시도한 경우
            회원이 고의로 회사의 영업을 방해한 경우 다른 회원의 권리나 명예, 신용 기타 정당한 이익을
            침해하거나 대한민국 법령 또는 선량한 풍속 기타 사회질서에 위배되는 행위를 한 경우 회원이
            이 약관에 위배되는 행위를 한 경우 회원이 회사가 인정하지 아니하는 방법 혹은 부정하게
            타인의 아이디를 이용하여 복권 및 당첨금 등을 취득 또는 사용하는 경우 회원에게 제7조
            제4항에서 정한 이용계약의 승낙거부사유가 있음이 확인된 경우 기타 회사가 합리적인 판단에
            기하여 서비스의 제공을 거부할 필요가 있다고 인정할 경우
            <br />⑤ 회사가 이용계약을 해지하는 경우 회사는 회원에게 전자우편 등으로 해지 사유를 밝혀
            해지의사를 통지합니다.
            <br />⑥ 이용계약이 회사에 의해 해지되는 경우 회원의 재가입 신청에 대하여 회사는 그
            승낙을 거절할 수 있습니다. <br />⑦ 이용계약이 종료됨으로써 발생한 손해는 이용계약
            종료사유에 대해 귀책사유가 있는 회원이 책임을 부담하여야 하고, 회사는 관련 법령에 규정이
            없는 한 책임을 지지 않습니다.
          </Description>
        </div>
        <div>
          제9조 (회사의 의무)
          <Description>
            ① 회사는 관련법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고
            안정적으로 서비스를 제공하기 위하여 최선을 다하여 노력합니다.
            <br />② 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를
            위한 보안시스템을 갖추며, 개인정보처리방침을 공지하고 이를 준수합니다.
            <br />③ 회사는 서비스 이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고
            인정할 경우에는 이를 처리하여야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는
            게시판을 활용하거나 전자우편 등을 통하여 회원에게 처리과정 및 결과를 전달합니다.
          </Description>
        </div>
        <div>
          제10조(당첨자의 보호)
          <br />
          회사는 「복권 및 복권기금법」제10조(당첨자의 보호)에 의거 당첨자 본인의 동의를 받지
          아니하고는 개인정보를 공개하거나 제공하지 않습니다. 다만, 다른 법령에 특별한 규정이 있는
          경우나 다음 각 호의 어느 하나에 해당하는 경우로서 그 사용 목적에 필요한 최소한의 범위에서
          개인정보를 제공할 수 있습니다. 정보주체로부터 별도의 동의를 받은 경우 다른 법령에 특별한
          규정이 있는 경우 정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나
          주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한
          생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우 통계작성 및 학술연구 등의 목적을
          위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로 가공하여 개인정보를 제공하는 경우
          조약, 그 밖의 국제협정의 이행을 위하여 외국정부 또는 국제기구에 제공하기 위하여 필요한
          경우 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우 법원의 재판업무 수행을 위하여
          필요한 경우 형(形)의 감호, 보호처분의 집행을 위하여 필요한 경우
        </div>
        <div>
          제11조(회원의 의무)
          <Description>
            ① 회원 아이디와 비밀번호 등 회원 정보에 관한 관리의 책임은 회원에게 있습니다.
            <br />② 회원은 사이트 이용을 위한 접근수단을 제3자에게 대여·위탁 또는 양도할 수 없으며,
            도용·위조·변조를 방지하기 위한 관리에 충분한 주의를 기울여야 합니다. 만약, 자신의
            아이디, 비밀번호 등 회원 정보가 부정하게 사용된 경우 회원은 즉시 회사에 그 사실을
            통보해야 합니다.
            <br />③ 회원은 개인정보화면을 통해 언제든지 본인의 개인정보를 열람하고 수정할 수
            있습니다. 다만, 서비스 관리를 위해 필요한 이름, 생년월일, 아이디 등은 수정이
            불가능합니다.
            <br />④ 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우, 사이트에서 수정을 하거나
            고객센터 문의 등의 기타 방법으로 회사에 그 변경사항을 알려야 합니다.
            <br />⑤ 제11조 제2항의 사실과 제11조 제4항의 변경사항을 회사에 알리지 않아 발생한
            불이익에 대해 회사는 책임지지 않습니다.
            <br />⑥ 회원은 정기적으로 로그인을 하여 사이트 이용의사가 있음을 밝혀야 합니다. 1년 이상
            로그인하지 않는 경우 사전 통지 후 휴면회원으로 전환되며, 개인정보는 별도 분리
            보관됩니다.
            <br />⑦ 휴면상태로 1개월 이상 경과된 회원의 개인정보는 삭제됩니다. 다만, 예치금에 대한
            반환청구권의 소멸시효가 다시 기산되는 경우 예외로 합니다.
            <br />⑧ 휴면회원은 로그인 시 소정의 절차를 통해 정상회원으로 회복될 수 있으나 삭제된
            기록은 복구되지 않습니다.
            <br />⑨ 회사는 당첨금 지급, 추첨방송 참관신청, 경품배송 및 제세금 처리를 위해 다음 각
            호의 회원정보를 복권발행기관(복권위원회), 국세청, 추첨방송사 및 경품배송업체에 제공할 수
            있습니다. 200만원 초과 당첨금: 이름, 주민등록번호 경품배송: 이름, 전화번호, 배송주소지
            추첨방송 참관신청: 이름, 전화번호
          </Description>
        </div>
        <div>
          제12조 (회원의 금지행위)
          <Description>
            ① 회사는 사이트 서비스의 신뢰성을 제고하고 안전한 거래가 이뤄질 수 있도록 아래와 같은
            행위를 금지합니다. 회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로
            서비스를 이용하거나 시스템에 접근하는 행위 타인의 명의, 계좌정보 등을 도용하여 회사가
            제공하는 서비스를 이용하는 행위 회원아이디를 타인과 거래하는 행위 회사가 게시한 정보의
            무단 변경 또는 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시 행위
            회사 및 기타 제3자의 저작권 등 지식재산권 침해행위 회사 및 기타 제3자의 명예를
            손상시키거나 업무를 방해하는 행위 1:1상담 게시판 및 고객센터 이용 시 외설 또는 폭력적인
            메시지, 음성, 기타 공서양속에 반하는 내용을 포함하는 행위 구매의사 없는 반복적인
            구매행위 특정 기능을 반복적 또는 규칙적으로 호출하는 행위 기타 불법적이거나 부당한 행위
            <br />② 회사는 회원이 본 조의 금지행위를 행하는 경우 서비스 이용을 제한할 수 있으며, 이
            경우 발생하는 모든 책임은 회원이 부담합니다. 회사는 필요한 경우 회원의 금지행위 사실을
            관련 정부기관 또는 사법기관에 통지할 수 있습니다.
          </Description>
        </div>
        <div>
          제13조(서비스 이용제한 등)
          <Description>
            ① 회사는 서비스의 안정성과 신뢰성을 위하여 아래 각 호의 사유가 발생하는 경우 회원의
            서비스 이용을 정지하거나 이용계약을 해지할 수 있습니다. 이 약관 제12조의 금지행위에
            해당하는 경우 회원자격이 정지되거나 상실하는 경우 이 약관에서 규정한 사항이나 별도로
            규정한 개별약관 및 이용정책을 위반한 경우 「복권 및 복권기금법」 및 「사행행위 등 규제
            및 처벌 특례법」에 반하는 경우 (복권 관련 사행성 행위 발각 등) 「개인정보보호법」에
            반하는 경우(다른 회원 개인정보 수집이용 등 개인정보 처리 관련 불법 행위 등) 국내·외
            범죄적 행위에 관련되는 경우 (사기, 복권 관련 불법 위·변조, 불법 해킹 등) 「정보통신망
            이용촉진 및 정보보호 등에 관한 법률」 제44조의7(불법정보의 유통금지 등)에 해당하는 경우
            <br />② 사이트 이용 시, 다음 각 호에서는 정상적인 작동을 보장하지 않습니다. 네트워크 및
            인터넷 브라우저가 최신 암호화 수준을 제공하지 않거나 마이크로소프트사 인터넷 익스플로러
            10.0이하의 버전을 이용하는 경우 모바일의 경우, iOS, 안드로이드, 구글 브라우저가 아닌
            경우 방화벽으로 차단된 네트워크 환경인 경우 IP공유기 등 가상 IP주소를 사용하는 환경인
            경우 프록시 서버 등 데이터 임시저장 기능을 경유하는 경우 컴퓨터 바이러스 감염 등의
            원인으로 운영체제, 인터넷 브라우저 등이 손상된 경우 회사가 제공하는 인터넷
            보안프로그램이 설치되지 않거나 정상적으로 작동되지 않는 경우
          </Description>
        </div>
        <div>
          제14조(예치금계좌의 운영)
          <Description>
            ① 복권을 구매하기 위해서 회원은 예치금계좌를 이용하여야 합니다.
            <br />② 예치금계좌는 사이트에서 복권 등과 관련된 거래내역의 관리 및 복권구입자금 등의
            입금, 출금, 당첨금 지급 등의 용도로 사용됩니다.
            <br />③ 예치금계좌를 이용하기 위해서는 계좌이체 방법을 통해서 예치금을 입금하여야
            합니다.
            <br />④ 예치금에 대해서는 이자가 발생하지 않습니다.
            <br />⑤ 회원의 출금신청 시 사용하는 은행계좌는 반드시 본인명의로 확인된 계좌이어야
            합니다.
            <br />⑥ 5년 이상 권리를 행사하지 않은 예치금은 「상법」 제64조(상사시효)에 의거
            소멸시효가 완성됩니다. 다만, 이메일 등으로 사전 통지된 경우 예치금에 대한 반환청구권의
            소멸시효를 다시 기산합니다. <br />⑦ 복권 사업의 중단 등으로 인해 서비스를 종료하게 되는
            경우 1개월 이상 회사 사이트 내 공지, 회원에 대한 이메일 발송 등의 방법 등으로 적극
            고지하고, 6개월 이상의 기간 동안 회원이 예치금 잔액을 출금할 수 있도록 서비스를 유지하며
            그 이후 예치금은 별도로 정한 방법에 따라 처리합니다.
          </Description>
        </div>
        <div>
          제15조(복권의 안내)
          <br />
          사이트에서 판매되는 복권의 가격, 복권의 종류, 판매기간, 당첨구조, 당첨금 지급기한, 당첨자
          결정방식은 상품별 개별약관에 따르고, 회원이 확인할 수 있도록 사이트에 게시합니다.
        </div>
        <div>
          제16조(복권의 구매, 구입취소, 교환 및 환불)
          <Description>
            ① 회원이 사이트에서 정상적으로 구입한 복권은 복권의 특성상 구매신청 취소, 교환 및 환불이
            불가능합니다.
            <br />② 사이트에서 복권을 구매하기 위한 예치금 입금 방법은 회사에서 제공하는 결제수단 중
            가용한 방법으로 할 수 있으며, 회사 사정에 따라 결제방법을 변경하여 제공할 수 있습니다.
            <br />③ 사이트에서 복권 구매 및 구매 확인 통지를 받은 회원이 의사표시의 불일치 등의
            사유가 있는 경우에는 통지를 받은 후, 즉시 고객센터에 확인을 요구하거나 이의를 요청할 수
            있습니다.
            <br />④ 회사는 회원의 이의신청에 대해 그 결과를 가능한 빨리 통보하고, 즉시 통보하기
            곤란한 사항일 경우, 그 사유 및 결과의 통보가능시한을 회원에게 알려주기 위해 노력해야
            합니다. 다만, 회원의 이의신청사항이 서비스 운영과 관계없거나 천재지변, 전산장애, 기타
            불가피한 사정으로 인해 처리결과 및 처리불능 사유 등의 통보가 적절하지 않다고 판단되는
            경우에는 그 통보를 생략할 수 있습니다.
            <br />⑤ 회사의 귀책사유로 인해 복권의 판매가 정상적으로 이루어지지 못 한 경우, 다른
            복권으로 교환하거나, 환불을 통해 보상합니다.
            <br />⑥ 회원의 요청으로 복권의 데이터가 형성되면 구입한 것으로 간주합니다.
          </Description>
        </div>
        <div>
          제17조(구입한 복권의 처리)
          <Description>
            ① 회원이 구입한 복권의 데이터는 회사에서 보관, 관리합니다.
            <br />② 회원은 어떠한 경우라도 구입한 복권의 실물을 요구할 수 없습니다.
          </Description>
        </div>
        <div>
          제18조(당·낙첨 처리 및 당첨내역의 확인 등)
          <Description>
            ① 회원의 복권구입내역, 배정복권내역, 당·낙첨 여부 등에 관한 사항은 사이트를 통해 상시로
            확인이 가능하나 판매기간 종료 후 6개월이 경과한 자료 조회는 회사의 개별 방침에 따릅니다.
            <br />② 복권의 당첨여부 확인 또는 검증은 회사의 복권데이터 기록에 근거합니다.
            <br />③ 디지털화된 그래픽데이터는 오류발생 및 위·변조의 가능성 때문에 당첨의 증거로
            인정하지 않습니다.
            <br />④ 테스트용 샘플복권이나 홍보복권은 당첨금 지급대상이 되지 않습니다.
          </Description>
        </div>
        <div>
          제19조(당첨금의 지급방법)
          <Description>
            ① 「소득세법」 및 「조세특례제한법」상 과세 대상의 당첨금은 제세금을 원천징수하고 본인의
            실명확인(주민등록번호 등록)을 수행하여 세금을 공제한 후 회원의 예치금계좌로 지급되며,
            예치금은 고객의 요청에 따라 본인 명의의 금융 계좌로 이체됩니다.
            <br />② 회원가입 시 입력한 회원정보와 당첨금 지급에 관한 인증과정에서 동일인임이
            확인되는 경우에만 당첨금을 지급합니다.
            <br />③ 당첨금은 지급기한 이내에 본인확인 절차를 거쳐 지급 요청을 하지 않거나, 또는
            명의도용 등의 부정으로 당첨금을 지급하지 못하게 될 경우, 「복권 및 복권기금법」제9조
            제3항에 따라 복권기금에 귀속됩니다.
            <br />④ 복권 당첨 시 관련 법률에서 규정한 제세금과 계좌이체 수수료 등 제경비는 당첨자가
            부담합니다.
          </Description>
        </div>
        <div>
          제20조 (정보의 제공)
          <Description>
            ① 회사는 서비스 이용과 관련하여 이메일, 휴대폰 문자전송 등의 통신수단에 의한 유상 또는
            무상의 정보전달 서비스를 제공할 수 있습니다.
            <br />② 무상서비스의 경우 회원이 명시적인 거부의사를 밝히지 않은 경우 수신에 동의한
            것으로 간주하며, 회사는 회원이 언제든 수신거부 의사를 밝힐 수 있는 수단을 제공합니다.
            <br />③ 다음 각 호에 대해서는 회원의 수신거부 의사에도 불구하고, 관련정보가 발송될 수
            있습니다. 회원의 구매행위와 직접 관련되어 제공되는 정보 정부 시책에 따른 정책변경 안내
            회원의 불이익이 예상되는 약관변경 및 기타 운영기준 변경 당첨금의 지급기한 종료 등 권리의
            소멸이 예상되는 사항
            <br />④ 유상서비스 중 정액제 서비스의 경우 최초의 서비스가 제공된 이후에는 서비스
            이용취소가 불가합니다.
            <br />⑤ 정보전달 수단별 다양한 이용환경으로 인하여, 회사는 회사가 발송하는 정보에 대한
            회원의 정보수신을 보장하지 않습니다.
          </Description>
        </div>
        <div>
          제21조 (사행성 및 중독성 예방)
          <Description>
            ① 반복 구입에 의한 몰입 및 과다 구입 예방을 위하여 1회 판매한도는 「복권 및
            복권기금법」에 따라 10만원을 초과할 수 없습니다. 이와는 별도로 회사는 1일 단위
            판매한도를 설정하여 운영합니다.
            <br />② 회사는 회원이 합리적인 계획구입을 통해서 복권을 건전하게 즐길 수 있도록 다음과
            같이 셀프구매계획 기능을 제공하고 있습니다. 셀프구매계획이란 회원이 일일 또는 주간
            단위로 구입 예정 한도금액을 설정하고 한도 내에서 복권을 구입하는 제도입니다. 회원 본인이
            설정한 구입한도를 초과하는 경우 구입이 자동 정지됩니다. 구입한도는 당 사이트에서
            판매하는 모든 복권의 구입에 적용됩니다.
            <br />③ 회사는 필요하다고 판단하는 경우 사전 고지를 통해 과도한 이용자의 복권 몰입을
            예방할 수 있도록 경고 메시지 및 건전화 교육을 시행합니다.
          </Description>
        </div>
        <div>
          제22조(분쟁조정)
          <Description>
            ① 사이트 이용 중 발생한 회원의 불만사항은 사이트 내 1:1상담게시판, 고객센터 등을 통해
            제기할 수 있습니다.
            <br />② 회사는 회원으로부터 제출되는 불만 사항 및 의견을 우선적으로 처리하며 신속한
            처리가 곤란할 경우에는 회원에게 그 사유를 즉시 통보합니다. 다만, 위 통보가 적절하지
            않다고 판단되는 경우에 회사는 그 통보를 생략할 수 있습니다.
            <br />③ 회사와 회원 간에 분쟁이 발생할 시 「전자문서 및 전자거래기본법」 제33조 및 동법
            시행령 제20조에 의하여 설치된 전자문서·전자거래분쟁조정위원회의 조정을 따를 수 있습니다.
            <br />④ 회사와 회원간 발생한 분쟁에 대해서는 회사 본점을 관할하는 법원을 관할법원으로
            합니다. 이 약관은 2023년 1월 1일부터 적용됩니다.
          </Description>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 10.8rem);
  padding: 8.1rem 1.2rem 2.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 150%;
  letter-spacing: -0.01rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-bottom: 1px solid ${palette.grey_60};
`;

const Content = styled.div`
  overflow-y: scroll;
`;

const Description = styled.p`
  padding-left: 0.5rem;
`;
