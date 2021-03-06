﻿var front;
var title;
var text;

front = "backF02";//첫 뒷배경 (.jpg 형식)
title = "버섯 정원";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["세리아","back000000","","모험가님 덕분에 실버크라운이 안전하게 되었어요. 주민 여러분이 모두 기뻐하고 있답니다.",,"","",""],
["모험가","","","다행이네요. 그럼 슬슬 이곳을 떠날 때가 된 것 같군요.",,"","",""],
["세리아","","","모험을 떠나시는 거군요... 저도 함께 갈 수 있을까요? 저를 구해주신 분의 곁에서 늘 도와드리고 싶어요.",,"","",""],
["모험가","","","흠... 동행자가 있으면 심심하지 않겠죠. 같이 가요.",,"","",""],
["세리아","","","정말요? 고맙습니다, 모험가님!",,"","",""],
["세리아","","","아참, 그러고보니 델마님이 기운을 차리셔서 패리스 님과 함께 고향으로 돌아가신다고 하셨어요. 헤어지기 전에 한 번 다시 만나보시는 건 어떠세요?",,"","",""],
["세리아","back000000","","비탈라 님께 인사를 하러 가신다고 하셨으니 그곳에 계실 거에요.",,"","",""],
["비탈라","back010000","2","어머, 모험가님도 오셨군요.",,"","",""],
["패리스","","","오, 안 그래도 볼까 했는데 잘 됐네. 이거 받아. 우리가 온 '시궁창'이란 곳의 통행증이야. 이게 없으면 경비에 막혀서 들어오기 힘들 거든.",,"","",""],
["패리스","","","답례치곤 시시하지만 지금은 아무것도 없어서 말이야. 모험하다가 들를 생각이 있으면 언제든지 오라구. 볼 건 없지만. 하하.",,"","",""],
["델마","","","고마웠어. 꼭 놀러와.",,"","",""],
["모건","","","가셨군요. 더 안정을 취하지 않으면 안된다고 했는데도... 휴우.",,"","",""],
["비탈라","","","저 분들은 시궁창 주민을 위해 검은 악몽을 조사하러 이곳저곳을 다니셨다고 들었습니다. 오래 자리를 비우셨으니 마음이 급하시겠지요.",,"","",""],
["비탈라","","","하지만 저런 분들 덕분에 이 아라드가 언젠가 평화로워지리라는 희망이 듭니다.",,"","",""],
["비탈라","","1","모험가님도 이제 떠나시려나 보군요. 그 동안 저희 실버크라운을 도와주셔서 정말 감사했습니다.",,"","",""],
["비탈라","","","어머. 세리아 님도 함께 가시나요? 두 분의 모험길이 늘 안전하고 즐겁기를 기원하겠습니다.",,"","",""],
["비탈라","","","그럼 이제 어디로 가시나요?",,"","",""],
["모험가","","","글쎄요. 딱히 목적지가 정해진 건 아니지만... 이 근방에서 사람들이 많이 모이는 곳에 가서 이것저것 알아보고 싶은 게 있는데 어디로 가면 좋을까요?",,"","",""],
["비탈라","back010000","","그렇다면 언더풋으로 가시는 게 좋겠군요. 흑요정 왕국의 수도인 언더풋은 여왕님의 개방 정책 덕분에 모험가나 상인이 많이 모이는 중심부가 되었습니다. 그곳이라면 원하는 정보를 찾을 수 있을 겁니다.",,"","",""],
["모험가","back030020","2","(이 곳에 언더풋이군. 나중에 레미디아 카테드라라도 찾아가 볼까... 음?)",,"","",""],
["모험가","","","(커다란 그림자가 드리워지는 군. 구름인가... 저건 뭐지? 물고기인가... 아니 저 모양은...)",,"","",""],
["아니스","back030020","","저기... 안녕하세요!",,"","",""],
["아니스","back030001","1","갑자기 끼어들어 죄송해요. 저는 아니스라고 해요. 저 커다란 그림자에 대해 궁금해하시는 것 같아서... 저건 하늘을 날아다니는 고래랍니다.",,"","",""],
["아니스","","","이름은 베히모스이고 등 위에 신전을 얹고 다닌다더라구요. 정말 예쁠 것 같지 않아요? 한 번쯤 올라가보고 싶어라...",,"","",""],
["아니스","","","아... 너무 혼자 이야기했나요? 오랜만에 베히모스를 보니 너무 신나서 떠들었네요.",,"","",""],
["아니스","","","그 대신이라고 말하기엔 뭐하지만 궁금한 게 있으면 저한테 말씀해주세요. 제가 이래 봬도 정보통이랍니다. 제가 아는 것이 있다면 답해드릴게요.",,"","",""],
["모험가","","","(아무리 봐도 친구랑 수다를 떠는 게 어울릴 소녀지만... 한번 검은 악몽에 대해서 물어볼까?)",,"","",""],
["아니스","","2","검은 악몽이요...?",,"","",""],
["아니스","","","네. 알고 있어요. 아라드 곳곳에서 나타나 몬스터들을 잠재운 후, 사악한 힘을 부여하여 사람들을 공격하게 만드는 현상이라지요... 그런데 그걸 왜...",,"","",""],
["아니스","","","아, 혹시 직접 보셨나요?",,"","",""],
["아니스","","1","검은 악몽에 대해 알아보시려면 언더풋보다는 시궁창으로 가시는 게 좋을 거예요. 그곳에 검은 악몽에 의한 피해가 늘고 있다고 하더라구요.",,"","",""],
["모험가","","","(시궁창이라면 패리스가 와보라고 한 곳인가... 그 쪽도 위험할지도 모르겠군... 걱정이나 가볼까...)",,"","",""],
["모험가","","","고마워요. 거기로 가볼게요.",,"","",""],
["아니스","back030001","","네! 다음에도 모르는 게 있으시면 절 찾아주세요~!",,"","",""],
["하츠","back020003","2","뭐냐.",,"","",""],
["하츠","","1","또 어디서 쭉정이가 굴러들어왔군. 어이, 꼬마. 네 할 일이다.",,"","",""],
["레니","","","넷! 맡겨주십시오 부단장님!",,"","",""],
["레니","","","이곳은 제국 기사단의 주둔지다. 신분이 확인되지 않은 자는 이곳에 들어오지 못한다!",,"","",""],
["모험가","","","패리스의 통행증을 가지고 있어. 이것만 있으면 들어올 수 있다고 하던데...?",,"","",""],
["레니","","","그런 여자가 써준 통행증을 가지고 감히 제국의 관할령에 들어오려고 하다니. 내가 지키고 있는 한 수상한 놈은 절대로 지나갈 수 없다!",,"","",""],
["모험가","","","그러니까 패리스가 날 알고 있다니까... 불러만 오면 확인해 줄 거라고.",,"","",""],
["레니","","","흥. 바깥에서 소리질러 부르든가. 요령껏 해보시지.",,"","",""],
["모험가","","","(안되겠어... 말이 안 통하겠는데...)",,"","",""],
["알베르트","","","음? 어이, 이제야 온 거야? 그동안 잘 지냈어? 이봐요, 기사님. 그 녀석은 예전에 여기 살던 녀석이니 들여보내줘요.",,"","",""],
["레니","back020003","","흐음... 뭐 그렇다면 들어가도 좋아.",,"","",""],
["패리스","back020000","2","시끄럽다 했더니 너였냐? 알베르트가 도와준 모양이지?",,"","",""],
["알베르트","","","전에 얘기를 들어놔서 다행이었지. 아참, 이 녀석 제국인이 아닌 거 맞지? 제국인이면 숙박료가 엄청 비싸질 거라고 말해놓으라고.",,"","",""],
["패리스","","","그래그래. 아무튼, 잘 왔어. 초대하긴 했지만 이 빌어먹을 시궁창에 제 발로 들어온 것만으로도 넌 역시 뭔가 특이한 녀석이라니까.",,"","",""],
["패리스","","1","검은 악몽이랑 이상하게 변한 몬스터들이 활개를 치고 있지만 여긴 꽤나 큰 도시였어.",,"","",""],
["패리스","","","시끄러운 걸로 치면 언더풋보다 더했지. 지금은 이렇게 목숨만 구해서 나온 녀석들만 지하에 모여있어서 그렇게 안 보이겠지만 말이야.",,"","",""],
["패리스","back020000","","안 믿겨져? 그럼 저기 저쪽, 위로 올라가는 틈이 있어. 저기로 올라가서 보고 와. 별난 놈들이 있지만 너라면 별일도 아닐 거고.",,"","",""],
["","back020100","0","",,"","",""],
["모험가","back020101","1","이게 대전이에 의한 여파... 정말 끔찍하군...",,"","",""],
["샤일록","back020102","2","아이고... 아이고... 불쌍한 고블린 살려!",,"","",""],
["샤일록","back020102","","아, 거기 계신 분은 모험가신가요? 이 늙은 고블린 좀 살려주십쇼!",,"","",""],
["샤일록","back020002","2","아이고 삭신이야... 고맙습니다요, 모험가님. 덕분에 맛 좋고 영양 좋은 고블린 죽이 되는 참사를 면했지 뭡니까.",,"","",""],
["샤일록","","1","살아돌아오니까 좋지만... 아이고... 이 불쌍한 고블린 말 좀 들어주십쇼! 동족을 잃고 남은 거라곤 친구 한 놈뿐인데 그 놈이 정신이 휘까닥 돌아가지고 혼자 안으로 들어가선 돌아오질 못하고 있습니다!",,"","",""],
["샤일록","","","그런데 아무도 도와주지 않아요! 제국분들에게도 부탁해 보았지만 소관이 아니라는 말뿐이고... 아이고 내 팔자야...",,"","",""],
["패리스","","","샤일록 영감탱이가 전부터 저 소리인데, 애들이 저 녀석 말 믿고 갔다가 다치기만 했어. 애초에 그 친구라는 고블린을 본 사람도 없고 말이야.",,"","",""],
["샤일록","","","겁이 많아서 숨어있었다니까요! 아이고, 인간들은 언제나 고블린을 믿지 않고...",,"","",""],
["샤일록","back020002","","오? 가주시는 겁니까? 고맙습니다! 이 샤일록이 보답은 톡톡히 해드립죠!",,"","",""],
["모험가","back020103","1","저 고블린인가... 위험해보이는데 얼른 구해야겠어!",,"","",""],
["모험가","","2","... 이런... 이미 죽었어... 지독하군... 펑그라의 균에 당해버린 것 같아... 그래도 샤일록에게 친구의 모습을 보여줘야겠지...",,"","",""],
["모험가","back020103","","음...? 누군가 있는 것 같은데... 펑그라인가? 공격받기 전에 얼른 가야겠군...",,"","",""],
["샤일록","back020002","2","모험가님! 돌아오셨... 아이고? 맥기! 요 녀석이! 왜 그 모양 그 꼴이 되어서... 얼른 달빛주점에 데리고 가주십쇼! 주점 주인이 요정이니 잘 듣는 약을 써줄 겁니다요!",,"","",""],
["알베르트","","","이미 늦은 거 같은데...",,"","",""],
["샤일록","","","그럴 리가... 이 세상에 고블린이 나뿐이라니... 그럴 리가...",,"","",""],
["샤일록","","1","모험가님 부탁이 있습니다.",,"","",""],
["샤일록","","","저는 고블린 중에서는 꽤 똑똑한 편이라 많이 괴롭힘을 당해 인간 세상으로 도망쳐 나온 늙은이입지요. 그만큼 원망도 많고 원한도 많습죠.",,"","",""],
["샤일록","","","하지만 대전이가 일어나 저희 동족이 싸그리 없어지자... 너무나 외롭고 쓸쓸했습니다. 그나마 맥기 그 친구라도 있어서 버텼던 건데... 펑그라 놈들이 제 하나뿐인 친구마저 죽여버리다니 도저히 참을 수가 없습니다요.",,"","",""],
["샤일록","","","하지만 제가 무슨 힘이 있겠습니까... 그러니 모험가님, 저 대신 저와 맥기의 원한을 풀어주시겠습니까? 보답은 확실히 해드립죠!",,"","",""],
["샤일록","","2","고맙습니다요. 그 녀석도 기뻐할 겁니다.",,"","",""],

["","","","",,"","",""]];