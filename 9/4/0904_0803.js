﻿var front;
var title;
var text;

front = "backF08";//첫 뒷배경 (.jpg 형식)
title = "전염병";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["슈시아","back020004","","이걸 조사해보니 예전에 본 것 같은 기분이 들더라구요. 분명히 흑요정 여성들이 이것과 비슷한 장신구들을 즐겨 사용한 것으로 알고 있습니다.",,"","",""],
["슈시아","back020004","","하지만 요즘 들어서는 잘 사용되지 않는 물건 같군요. 제가 알아낸 것은 이 정도뿐입니다.",,"","",""],
["시란","back080001","2","흑요정들이 썼던 장신구란 말이재?",,"","",""],
["시란","","1","흑요정들이 사용했던 장신구란 말이재? 그 사람이 노이어페라에 창궐한 역병과 관련이 있는 게 틀림없다.",,"","",""],
["시란","","","글타면 다음 갈 곳은 정해졌네... 바로 역병이 창궐하던 노이어페라다. 시간의 문을 통해서 역병이 창궐하던 때로 갈 수 있을끼다.",,"","",""],
["시란","","","거기로 가서 그 사람의 흔적을 찾아봐라. 내도 흑요정 마을로 몇 번 간 적이 있는데 그 독기가 장난이 아니더라.",,"","",""],
["시란","back080001","","보통 사람은 숨통이 바로 끊어졌을끼다. 뭐 니는 디레지에도 해치운 경험이 있는 지독한 놈이니 별일은 없을끼다.",,"","",""],
["","back080300","0","",,"","",""],
["시란","back080001","2","역시 비슷한 장신구들을 그 쪽에서 쉽게 찾을 수 있을 줄 알았다.",,"","",""],
["시란","","1","목격자를 찾아야 하는데 노이어페라 전체에 역병이 번지는 바람에 제대로 대답해 줄 사람이 없을끼다. 누구 한 사람이라도 정신을 챙긴다면 물어볼 수 있을낀데.",,"","",""],
["시란","back080001","","뭐 좋은 방법이 없겠나?",,"","",""],
["모건","back010001","2","갑자기 치료제를 찾으시다니. 역병은 모두 사라지지 않았습니까?",,"","",""],
["모건","","1","치료제는 모두 사용하여 지금은 남아있는 것이 없습니다. 하지만 다시 만들 수는 있습니다.",,"","",""],
["모건","","","다시 질병의 샘플을 구해다 주시면 좀 더 효과가 뛰어난 치료제를 만들어 낼 수 있을 겁니다.",,"","",""],
["모건","","2","이 샘플만 있다면 금방 치료제를 만들어 낼 수 있습니다. 여기 치료제가 완성되었습니다.",,"","",""],
["모건","","1","이 치료제가 있다면 그 질병을 금방 치료해 낼 수 있을겁니다. 그런데... 이 질병체가 아무래도 낯이 익은것 같은데 말이죠.",,"","",""],
["모건","","","전에 모험가님과 반 님이 노이어페라에 다녀오셨을 때와 같은 샘플이었습니다만 설마 디레지에가 다시 나타난 것입니까?",,"","",""],
["모건","back010001","","그런 건 아니라고요. 휴우. 너무 깜짝 놀래키지 마십시오.",,"","",""],
["시란","back080001","2","그래. 금방 맹글어 왔네.",,"","",""],
["시란","","1","치료제가 아주 소량이라 그 많은 사람들을 다 치료할 수는 없을끼다. 그렇다면 그 중에서도 많은 정보를 가지고 있을 만한 놈을 치료하는 게 좋을 거 같은데...",,"","",""],
["시란","","","맞다! 그 호가스라는 친구가 민병대를 운영하면서 노이어페라에 출입하는 외부인들을 관리했으니 뭔가 아는 게 있을 수 있다.",,"","",""],
["시란","back080001","","금마를 찾아가 그 치료제를 사용해 봐라. 모 아니면 도! 아니겠나?",,"","",""],
["호가스","back080301","2","으... 그 검은 후드를 쓴 자가 차원의 틈을 여는 것을 봤다. 그 후 갑자기 역병이 시작되었다. 크... 크윽.",,"","",""],
["시란","back080001","2","역병을 일으킨 외부인이 있었단 말이제?! 이건 윽수로 중요한 힌트다!",,"","",""],
["시란","","1","이미 역병을 일으킨 그 자는 노이어페라를 떠났을끼다. 디레지에가 활개 치는 이곳에 남아서 좋을 게 뭐가 있겠노?",,"","",""],
["시란","","","그렇다면 금마가 차원의 틈을 열던 그 때로 이동해야 된다. 하지만 정확한 시기로 이동하는 게 쉽지만은 않다. 상당히 까다로운기라...",,"","",""],
["시란","","","이 시간의 문은 한 번 열리면 과거로는 갈 수 있지만 지가 보여주고 싶은 시간만 보여준다. 우리가 보고싶은 시간을 딱딱 골라서 갈 수 없다는 이야기지.",,"","",""],
["시란","","","하지만 완전히 방법은 없는 거는 아니제. 시간의 문을 조금 손봐주면 아주 많이는 아니지만 조금 시간을 거슬러 올라갈 수 있을끼다.",,"","",""],
["시란","","","시간의 문으로 돌아가서 '시간의 흔적'을 얻어온나. 그게 있으면 방법이 생길끼다!",,"","",""],
["시란","","2","그래. 서두르자!",,"","",""],
["시란","","1","아마 시간을 거슬러 가는 걸 타임 로드가 쉽게 봐주지 않을끼다.",,"","",""],
["시란","back080001","","하지만 금마만 어떻게 처리하면 만사 오케이니깐 잘 처리해봐라. 그리고 꼭 역병을 일으킨 장본인을 확인해야된디!",,"","",""],
["","back080302","0","",,"","",""],
["","back080303","0","",,"","",""],
["시란","back080001","2","누군지 정확하게 못 봤다는 거제? 진짜 미꾸리처럼 잘 빠지나가네!",,"","",""],
["시란","","1","아! 그 해골 아제 때문에 다 망치뿌네! 그 해골 아제가 창을 휘둘러 그 사람을 쪼까 보냈으니까 만약에 공격이 적중했다면 어떤 흔적이 안 남았겠나?",,"","",""],
["시란","","","확신은 없어도 확인 해볼 만하다. 해골 아제한테 가가지고 그 사람의 흔적을 찾아봐라!",,"","",""],
["시란","","2","이 옷자락이 떨어져 있었다고?",,"","",""],
["시란","","1","이 옷자락을 딱 봤을 때 싸구려는 아닌 것 같고 상당히 고급 옷감인 것 같은데...",,"","",""],
["시란","","","그 이상은 잘 모르겠다. 모를 때는 일단 물어보는 게 최곤기라.",,"","",""],
["시란","back080001","","에전에 언더풋에서 옷감을 사고 파는 처자가 있다는 말은 들었는데...",,"","",""],
["칸나","back030012","2","이 옷감을 봐달라구요?",,"","",""],
["칸나","","1","이건 '하늘 비단'이라고, 천계의 귀족들이나 입을 수 있는 비싼 옷감이에요.",,"","",""],
["칸나","","","수년 전만 해도 아라드에서는 보기 힘들었지만 제가 천계와 활발한 교역을 하고 있는 덕에 요즘에는 아라드에서도 손쉽게 구할 수 있죠.",,"","",""],
["칸나","back030012","","어때요? 하늘 비단으로 한 벌 뽑아보시는 것도 나쁘지 않을 텐데♥",,"","",""],
["시란","back080001","2","음... 천계에서만 얻을 수 있는 옷감이라카더나?",,"","",""],
["시란","","1","과거의 천계? 당연히 시간의 문을 통해서 과거의 천계로 갈 수도 있다. 카지만 원하는 시간으로 가기는 힘든 건 니도 알끼다.",,"","",""],
["시란","","","내도 몇 번이나 시도해봤는데 쉽지 않더라. 잘 될지는 모르겠지만 다시 해볼 테니 기다려봐라.",,"","",""],
["시란","","2","...아무래도 안 되긋네. 지금 당장은 힘들 것 같다. 급한데 여기서 막히면 안 되는데...",,"","",""],
["시란","back080001","","우째 애를 써볼 테니 니는 이 틈에 좀 쉬고 있거라.",,"","",""],
["세리아","back000000","1","모험가님! 모건 님에게서 편지가 왔어요. 어서 읽어보세요.",,"","",""],
["모건","","","모험가님, 안녕하셨습니까? 다름이 아니라 저번에 치료제를 필요로 하셨던 게 아무래도 마음에 걸려서 연락을 드립니다.",,"","",""],
["모건","","","질병의 샘플을 보고 있으면 분명 어딘가 저희가 겪었던 것과 같은 고통을 겪고 있는 사람들이 있을 것입니다. 질병은 몸의 고통뿐만 아니라 마음마저 병들게 하죠. 노이어페라는 저와 클론터의 고향이었습니다.",,"","",""],
["모건","","","그래서 저는 아무래도 이 일을 그냥 넘길 수가 없군요. 질병의 샘플을 가져오셨던 그 곳에 도움을 주고 싶습니다. 모험가 님께서 조금 도와주실 수 있겠습니까?",,"","",""],
["모건","back000000","","가능하시다면 저를 찾아와주십시오. 기다리고 있겠습니다.",,"","",""],
["모건","back010001","2","아, 와주셨군요! 정말 감사합니다.",,"","",""],
["모건","","1","물론 치료제를 조금 전달하는 걸로 역병의 고통이 사라지진 않는다는 것은 알고 있습니다. 하지만 몇 명이라도 이 치료제를 통해서 마음만은 질병에 삼켜지지 않기를 바랍니다.",,"","",""],
["모건","","","하지만 먼저 부탁드릴 것이 있습니다. 저번에 주셨던 샘플은 그때 다 사용해버려 남아있지 않습니다. 치료제를 만들려면 샘플이 더 있어야하는데 질병의 샘플을 최대한 많이 모아주시겠습니까?",,"","",""],
["모건","","","저도 모험가님이 가지고 오신 샘플을 허투루 사용하지 않도록 준비하고 있겠습니다.",,"","",""],
["모건","","2","아, 고생하셨습니다. 이 정도면 준비해둔 만큼 치료제를 만들 수 있을 것입니다. 그나저나 많은 사람들이 고통받고 있다는 것을 생각하면... 정말 마음이 아프군요.",,"","",""],
["모건","","1","얼마 안 되는 양이지만 이걸로 고통을 받는 사람들의 마음에 평온이 찾아오면 좋겠군요.",,"","",""],
["모건","","","이 치료제를 사람들에게 전달해 주시겠습니까?",,"","",""],
["모건","back010001","2","치료제를 모두 전달해주셨군요. 정말 고생하셨습니다. 부디 그들이 고통을 이겨내고 다시 밝은 세상을 맞이할 수 있길...",,"","",""],
["세리아","back000000","1","모험가님. 요즘 많이 바쁘신 것 같네요. 저는 모험가님이 어디를 가시든, 무슨 모험을 하시든 무사히 돌아오시기만을 바라고 있지만 위험한 곳으로 많이 가시는 것 같아서 불안해요.",,"","",""],
["세리아","","","괜찮으시면 저와 잠시 이야기를 나누실 수 있으신가요? 제가 모험가님을 위해 빵을 구워놓았답니다.",,"","",""],
["세리아","","2","그렇군요. 사도의 위협에서 아라드를 구하기 위해... 사도라는 분들은 왜 그렇게 사람들의 눈물을 자아내는 일을 하시는 걸까요?",,"","",""],
["세리아","","","정말 안타까워요... 이유도 모르고 희생되는 분들의 마음을 생각하면 어떻게든 이 혼란을 빨리 끝내고 싶네오. 제가 도울 방법은 없을까요?",,"","",""],
["모험가","","","세리아는 이미 많은 걸 해주었어요. 더 이상 세리아가 무얼 해주길 바라지 않아요.",,"","",""],
["세리아","","","네? 제가요...? 무엇을...",,"","",""],
["모험가","","","아, 그러니까... 곁에서 응원도 해주고 위로도 해주었잖아요? 그러니까 너무 걱정하지 말아요. 시란 님과 함께 하고 있으니까, 금방 이 모든 일의 원흉을 찾아낼 수 있을 거예요.",,"","",""],

["","","","",,"","",""]];