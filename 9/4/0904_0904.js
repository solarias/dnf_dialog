﻿var front;
var title;
var text;

front = "backF09";//첫 뒷배경 (.jpg 형식)
title = "그란디네 발전소";//던전 명칭┏ 0 : 이미지 Only //1 : 아래 고정 //2 : 위 고정 //3 : 이동 Only┏ number : 상대적 이동 / array : 선택 이동
text = [//캐릭터 이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["리아","back090000","","으…으아! 통신장치를 통해 황녀마마께서 직접 연락을 주시었사옵니다… 어서 서둘러 주시옵소서!",,"","","",""],
["에르제","back090005","2","그래. 별고 없느냐? 파워스테이션을 점거하고 있는 괴수들과 싸우느라 불철주야 수고가 많다고 들었느니라.",,"","","",""],
["에르제","","1","모험가 그대 덕분에 벌써 3개의 발전소를 수복하였다지? 정말 용맹한 장수로다. 마지막 파워스테이션을 수복하면 천계도 예전의 풍요로운 모습으로 되돌아갈 수 있을 것이야.",,"","","",""],
["에르제","","","짐의 최정예부대가 파워스테이션의 수복을 위해 자네를 최대한 도울 것이니 사양하지 말라. 니베르 장군과 함께 평화를 위해서 수고해주게나.",,"","","",""],
["에르제","back090005","","그럼... 평화가 찾아오는 그 날 아침에 다시 보기를 기원하며... 자네의 안전을 신녀들과 함께 기원하도록 하겠네.",,"","","",""],
["니베르","back090001","2","그럼 정예부대가 도착할 때까지 이쪽도 힘내서 싸워보도록 하지요.",,"","","",""],
["페럴웨인","back090002","1","그란디네 발전소는 파워스테이션 중에서 가장 최신의 발전소라네.",,"","","",""],
["페럴웨인","","","메인 발전기에 의존하지 않고 서브 발전기를 두어 가동하는 데 들어가는 부담을 나누고 있지.",,"","","",""],
["페럴웨인","back090002","","그란디네 발전소에 있는 허무의 퍼만이 그 안을 어떻게 개조했는지 모르겠구만. 상황을 알아봐주지 않겠나?",,"","","",""],
["","back090400","0","",,"","","",""],
["페럴웨인","back090002","2","흠흠... 과연. 그런 식으로 되어있다는 말이지.",,"","","",""],
["페럴웨인","","1","내 듣기로 그란디네 발전소에 있는 외눈박이 거인, 보투라는 서브 발전기를 먹고 그 에너지로 엄청난 힘을 갖게 되었다고 하더군.",,"","","",""],
["페럴웨인","","","거인을 쓰러뜨리려면 서브 발전기를 먼저 파괴해야하네. 이 점 명심하게나.",,"","","",""],
["페럴웨인","","2","천계의 에너지를 먹고 자신의 힘을 키우는 놈들을 용서할 수가 없구만.",,"","","",""],
["페럴웨인","","1","음... 걱정이 되는군. 그란디네 발전소로 기술자들과 군인들이 들어갔지만 도통 돌아올 생각을 하지 않아.",,"","","",""],
["페럴웨인","","","어디선가 도움을 요청하고 있는 것이 아닐까? 샅샅이 찾아와 주지 않겠나?",,"","","",""],
["페럴웨인","back090002","2","그들이 보이지 않는다고? 아! 아까운 인명을 또 잃게 된 것인가...",,"","","",""],
["리아","back090000","1","실은, 제가 알고 지내던 몇몇 분들께서도 그란디네 발전소를 탈환하기 위해 싸우시다가 장렬하게 전사하셨사옵니다.",,"","","",""],
["리아","","","당장이라도 그 분들의 시신을 모셔오고 싶었지만, 저에게는 그럴 힘이 없었던 것에 원통할 뿐이옵니다.",,"","","",""],
["리아","","","모험가님. 저 안에서 그 분들의 흔적을 찾지 못하셨는지요?",,"","","",""],
["리아","back090000","2","제가 책임지고 가족분들께 전해드리겠사옵니다.",,"","","",""],
["페럴웨인","back090002","1","흠? 저쪽이 시끌시끌하는구만. 그러고보니 니베르가 정예부대를 기다리고 있다고 하던데 그들이 온 건가?",,"","","",""],
["페럴웨인","back090002","","아. 자네를 부르는 것 같은데 가보게.",,"","","",""],
["니베르","back090001","2","오래 기다리셨습니다. 드디어 정예부대가 도착하였습니다.",,"","","",""],
["니베르","","1","자. 다들 인사 드리도록 하지.",,"","","",""],
["콘","","","이야! 오랜만! 신수가 원한데? 전쟁터가 체질인가 봐?",,"","","",""],
["비연","","","오랜만이에요. 잘 지내셨죠?",,"","","",""],
["니베르","","","인사는 그만 됐고… 작전회의부터 하는 것이 좋을 것 같군요. 먼저 이번에 진입할 발전소는 그란디네 발전소입니다.",,"","","",""],
["니베르","","","많은 부대원들이 그란디네 발전소에서 허무의 퍼만에 의해 목숨을 잃었습니다.",,"","","",""],
["니베르","","","허무의 퍼만은 안톤을 수호하는 최강의 수호자입니다.",,"","","",""],
["콘","","","최강이라도 한 방에 끝내 보이겠습니다!",,"","","",""],
["비연","","","허풍은... 너나 한 방에 안 뻗게 조심 하는게 어때? 매번 한 방에 병는다고 해서 '한 방의 콘'이라 불리는 거 아냐?",,"","","",""],
["콘","","","뭐...뭐야?",,"","","",""],
["니베르","","","이것들이 빠져가지고! 상관 앞에서!",,"","","",""],
["콘","","","시...시정하겠습니다!",,"","","",""],
["비연","","","죄송합니다! 반가운 전우들을 간만에 보는지라 정신상태가 잠시 해이해진 것 같습니다.",,"","","",""],
["니베르","","","됐고... 너희는 이따 보자.",,"","","",""],
["니베르","","","그럼 마저 말씀드리도록 하겠습니다. 요원들의 정보에 따르면 허무의 퍼만이 있는 곳까지 도달하는 것이 불가능하다고 합니다.",,"","","",""],
["니베르","back090001","","아마도 어떤 특수 장치가 있는 것 같은데... 일단 저와 함께 그 원인을 찾아보도록 하죠.",,"","","",""],
["","back090401","0","",,"","","",""],
["니베르","back090001","2","원인은 에너지 필드 때문이었군요. 하지만 허무의 퍼만의 환영 때문에 접근이 쉽지 않은 상황입니다.",,"","","",""],
["니베르","","1","허무의 퍼만이 소환하는 몬스터들을 처치하는 데는 ’한 방'이 있어야 할 것 같군요.",,"","","",""],
["콘","","","한 방? 내가 나설 차례인가?",,"","","",""],
["콘","back090001","","좋아! 어서 나를 따라오라고! 무거운 한 방을 보여줄 테니!",,"","","",""],
["","back090402","0","",,"","","",""],
["니베르","back090001","2","기술은 하나밖에 없지만 그런대로 쓸만하지 않습니까?",,"","","",""],
["니베르","","1","이제 허무의 퍼만을 처치하고 모든 발전소를 정상화시키는 일만 남았군요. 이런 임무에는 비연과 함께 하는 것이 좋을 것 같습니다.",,"","","",""],
["니베르","","","비연! 준비는 끝났겠지?",,"","","",""],
["비연","","","옛썰! 준비 완료했습니다!",,"","","",""],
["니베르","back090001","","좋았어. 그럼 비연과 함께 허무의 퍼만을 처치해 주십시오. 허무의 퍼만은 매우 강력한 상대이니 부디 주의를…",,"","","",""],
["","back090403","0","",,"","","",""],
["니베르","back090001","2","허무의 퍼만이 어느 정도 약해진 것 같지만, 아직도 어디선가 힘이 오고 있는 것 같습니다.",,"","","",""],
["니베르","","1","페릴 웨인 님께서 허무의 퍼만의 힘이 다하지 않는 것은 안톤의 힘이 그에게로 가고 있기 때문이라고 하시더군요.",,"","","",""],
["니베르","","","퍼만에게서 그 힘을 빼앗아야겠습니다.",,"","","",""],
["니베르","","2","가지고 오셨군요. 이게 안톤의 힘입니까?",,"","","",""],
["니베르","back090001","1","그럼 이것을 페럴 웨인 님께 가져다 주십시오. 분석만 할 수 있다면 안톤을 상대하시는 이글아이 사령관님께 큰 도움이 될 겁니다.",,"","","",""],
["페럴웨인","back090002","2","오! 이것이 안톤의 힘인가? 처음 보는 에너지로구만.",,"","","",""],
["니베르","back090001","1","자, 모든 준비가 된 것 같습니다.",,"","","",""],
["니베르","back090001","","그럼! 간만에 몸 좀 풀어볼까요? 저는 부대원과 함께 그란디네 발전소로 먼저 이동해 있겠습니다. 천천히 따라오십시오!",,"","","",""],
["","back090404","0","",,"","","",""],
["","back090405","0","",,"","","",""],
["니베르","back090001","2","이것으로 파워스테이션은 어느 정도 정상화 되겠군요. 모두 모험가님의 수고 덕분입니다.",,"","","",""],
["니베르","","","진정으로 경의를 표합니다.",,"","","",""],
["니베르","","1","실은 모험가님 몰래 페럴 웨인 님의 부탁을 받아 협조해오던 일이 있습니다. 그 일이 마침내 완료가 되었군요.",,"","","",""],
["니베르","back090001","","페럴 웨인 님께 찾아가시면 깜짝 놀랄 이야기를 해주실 겁니다.",,"","","",""],
["페럴웨인","back090002","2","후후. 그건 말일세.",,"","","",""],
["페럴웨인","","1","사실 자네 모르게 4인의 수호자들을 잡아서 에너지 격리실에 가둬놓았다네.",,"","","",""],
["페럴웨인","","","안톤과의 연결을 완전히 차단해 놓아서 안톤도 4인의 수호자의 행방을 알 수 없을 것이야.",,"","","",""],
["페럴웨인","back090002","","시간이 난다면 그곳에서 그들과 이야기를 나늘 수도 있을 거야.",,"","","",""],
["","back090406","0","",,"","","",""],
["퍼만","back090407","2","이 놈들! 무슨 생각을 하고 있는지 모르겠으나, 안톤 님은 절대 무적의 육체를 가지셨다.",,"","","",""],
["퍼만","back090407","","너희의 하찮은 과학과 마법, 검으로 그 분에게 찰과상도 입힐 수 없을 것이다!",,"","","",""],
["니베르","back090001","1","허무의 퍼만이 뭐라고 말하던가요? 분하지만, 그 놈이 하는 말은 사실입니다. 지금의 저희로서는 안톤을 쓰러뜨릴 방도가 없습니다.",,"","","",""],
["니베르","","","천계에서 제일 가는 사령관도 방어선을 펼치고 다른 곳으로 가지 못하게 막는 데에만 급급하고 계시지요. 하지만 그 분 덕분에 우리가 이렇게 파워스테이션을 수복할 시간을 번 것입니다.",,"","","",""],
["니베르","back090001","","지금으로서는 세븐 샤즈의 연구에 모든 기대를 걸고 있습니다. 진행 상황은 페럴 웨인 님께 여쭤보시면 알려주실 겁니다.",,"","","",""],
["페럴웨인","back090002","2","궁금한가? 하긴 그렇겠지. 그러나 이 비장의 무기는 아직 말해줄 수 없네.",,"","","",""],
["페럴웨인","","1","궁금해 죽으려고 하는 얼굴이군. 우리는 안톤 사령부에 있는 나엔 박사가 수집하고 정리한 자료를 바탕으로 연구했네.",,"","","",""],
["페럴웨인","","","그녀는 그녀 나름대로 굉장한 발명을 해내었지만, 아무래도 자원이나 연구 환경은 이쪽이 상대적으로 더 잘 갖추어져 있으니까 후방에 있는 우리가 나서고 있는 걸세.",,"","","",""],
["페럴웨인","","","아주 예전에 7인의 마이스터들은 사도 바칼을 쓰러뜨리기 위해 굉장한 업적을 이루었지. 배신자로 인하여 끝내 실패하고 말았지만, 우리 역시 그 분들 못지 않게 굉장한 무기를 만들어 자네들의 눈을 휘둥그레하게 만들어 줄 것일세.",,"","","",""],
["페럴웨인","","","아아 그런데... 이런 말을 한 후에 부탁하기가 뭣하기는 한데, 정말 필요해서 말일세. 마그토늄을 좀 가지고 와줄 수는 없겠나?",,"","","",""],
["페럴웨인","back090002","2","고맙네. 조금만 기다리게. 우리가 반드시 때를 맞추어 반격의 신호탄을 울리게 해줄 것이야.",,"","","",""],
["니베르","back090002","1","안톤 사령부에서 급한 연락이 도착했습니다. 모험가님, 급히 이곳으로 와주십시오!",,"","","",""],
["니베르","back090001","2","우리가 에너지 차단실에 4인의 수호자를 가두었던 것 때문인지 안톤이 자신의 수하를 파워스테이션 쪽으로 보내었다고 합니다.",,"","","",""],
["니베르","","","다만 어느 쪽으로 향했는지는 알 수가 없어서 위치를 특정하지는 못하더군요.",,"","","",""],
["니베르","","","안톤이 끝까지 발악을 하고 있지만 승세는 이쪽으로 기울었습니다. 반드시 어디에 숨었는지 찾아내어 처치할 것입니다.",,"","","",""],

["","","","",,"","",""]];