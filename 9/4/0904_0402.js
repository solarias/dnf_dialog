﻿var front;
var title;
var text;

front = "backF04";//첫 뒷배경 (.jpg 형식)
title = "굴욕의 암초";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["오필리아","back040000","","GBL교의 가르침은 혼란한 시기를 살아가는 저희에게 빛이며 소금입니다. 가르침이 없었다면 주변의 어려움에 지쳐 쓰러지고 말았을 테지요.",,"","",""],
["오필리아","","","하지만 가르침이 있었기에 저희는 시련을 시련이라 받아들이고 서로 도와가며 이겨낼 수 있는 것입니다.",,"","",""],
["모험가","","","사나운 상어에 쫓기던 것도 재앙이 아니라 시련에 불과하다는 말이군요.",,"","",""],
["반","","","헤에, 멋진 가르침인데?",,"","",""],
["반","back040000","","여, 풋내기 모험가~. 너도 여기에 있었을 줄이야, 어찐지 익숙한 목소리가 들리더라.",,"","",""],
["반젤리스","back040004","2","멈추시오. 나의 허락 없이는 당신들 제국군의 행동은 제한되어 있소.",,"","",""],
["반","","","에에. 모처럼 GBL교를 만나러 온 사람한테 너무하는구만. 이번에는 딱딱한 공적인 임무를 하기 위해 온 게 아니라 단지 미들 오션을 조사하러...",,"","",""],
["하츠","","","그게 공적인 임무가 아니면 뭐냐.",,"","",""],
["반","","","...그렇네.",,"","",""],
["반젤리스","","","GBL교는 진리를 찾아오는 자를 막지는 않소. 그러나 그대들의 검이 나의 허락 없이 휘둘러지는 일은 없어야할 것이오.",,"","",""],
["반","","","알았어. 주의하지. 하지만 아름다운 교주님, 우리는 미들 오션이 숨긴 비밀을 찾으러 왔어. 이것도 진리 탐색이 아닌가?",,"","",""],
["오필리아","","","...그렇군요. 당신들의 조사는 허가하겠습니다. 다만 무장 인원이 많으니 감시를 붙이겠습니다.",,"","",""],
["반","","","응. 고마워.",,"","",""],
["반","","1","왜, 언더풋에 천계 아가씨가 왔잖아? 너 간 다음에 우리도 만났거든. 사정이 급해보이는데 흑요정들은 도와줄 여력이 없다고 거절했다기에 안쓰러워서 도와주려고 했지.",,"","",""],
["반","","","도와주겠다고 큰소리 뻥뻥 친 후에 황제 폐하한테 말씀드렸더니 '네가 벌인 일은 네가 수습해라'라고 한 줄 딱 온 거야.",,"","",""],
["하츠","","","멍청한 단장 때문에 괜히 나까지 이린 곳에...",,"","",""],
["반","","","... 아무튼 그래서 천계로 돌아갈 수 있도록 도와주는 게 먼저라고 생각해서 말이야. 하늘성도 없고하니 가로막고 있는 미들 오션을 조사하려고 왔어.",,"","",""],
["반","","","좀 알아봤는데 미들 오션에는 머맨의 왕이 있대. 전설적인 존재이지만 그런 녀석이 있다면 뭔가 알지 않겠어?",,"","",""],
["반","","","너도 미들 오션을 조사하는 중이었다면 찾는 것 좀 도와줘.",,"","",""],
["모험가","back040004","","(제국을 돕는 건 싫지만 이 사람한테는 빚이 있으니... 그렇게 나쁜 사람 같지도 않고... 일단 뭘 하려는 건지 지켜봐야겠다.)",,"","",""],
["","back040200","0","",,"","",""],
["레니","back040201","1","쳇. 너를 여기서 또 보게 될 줄이야. 지금까지는 운 좋게 살아남았지만 과연 그 운이 어디까지 갈까~?",,"","",""],
["킹머맨투레","back040202","1","뭐하러 왔느냐! 이곳은 나, 킹머맨투레의 영역이다!",,"","",""],
["킹머맨투레","","","의리너구리들아! 침입자의 회를 떠라!",,"","",""],
["레니","back040202","","잠깐만, 할 이야기가...",,"","",""],
["킹머맨투레","back040203","1","이이, 조개만 밝히고 쓸모도 없는 너구리들 같으니라고!",,"","",""],
["킹머맨투레","","2","제기랄, 두고보자! 내 반드시 네놈들을 산호에 거꾸로 매달아 버릴 것이다!",,"","",""],
["레니","back040203","","단장님의 명령만 아니었으면 아가미에 소금을 집어넣어버렸을텐데...",,"","",""],
["반","back040004","2","놓쳤다고?",,"","",""],
["반","","1","머맨의 왕이 불러온 용병이 방해라면 치워야지.",,"","",""],
["반","","","교주 아가씨에게 듣기론 의리너구리들은 눈이 약해서 안경을 쓰지 않으면 거의 장님이라던데? 그 안경만 빼앗아도 일이 쉬워질 거 같네.",,"","",""],
["반","","2","이거 꽤 멋지네. 나도 써볼까.",,"","",""],
["반","","1","전설에 의하면 세이렌의 노래는 벳사공들의 넋을 나가게 하여 스스로 물에 빠져 죽게 만든다고 하던데, 그것 때문인지 노래를 들은 내 부하 몇몇이 하마터면 죽을 뻔했어.",,"","",""],
["반","back040004","","그 노래는 특수한 마력으로 이루어져 있는 모양이니까 빼앗아 올 수도 있지 않을까?",,"","",""],
["","back040204","0","",,"","",""],
["반","back040004","2","이게 그 요상한 노래를 만드는 마력이구나. 이제 머맨의 왕이 협상 테이블에 나와줄 마음이 들었으면 좋겠는데 말이야.",,"","",""],
["반","","1","이제 다시 머맨의 왕을 만나서 얘기를 하고 싶은데 말이지. 그 전차를 타고 워낙 요리조리 잘도 내빼는 바람에 잡기가 힘들어. 물 속이라서 움직이기도 힘들고.",,"","",""],
["반","","","그래서 우리 부대는 둘로 나늘 거야. 나랑 부단장이 왼쪽과 오른쪽에서 몰아볼 테니까 네가 가운데에 기다리고 있어줘.",,"","",""],
["반","back040004","","작전이 잘 먹힐지는 모르겠지만 보게 되면 미들 오션에 퍼진 마력장을 어떻게 하면 통과해서 위로 올라갈 수 있을지 물어봐. 알았지?",,"","",""],
["킹머맨투레","back040205","1","끄으... 천계로 올라갈 방법 말이냐?",,"","",""],
["킹머맨투레","back040205","","내가 그걸 가르쳐 줄 성 싶으냐!  죽은 바칼 님을 위해서라도 절대 알려주지 않을 테다!",,"","",""],
["반","back040004","2","으으, 미들 오션에서 숨을 쉴 수 있는 건 좋은데 옷 말리는 게 여간 일이 아니군...",,"","",""],
["반","","","또 도망가기는 했지만 마주친 거 같기는 하던데 무슨 말 못 들었냐？",,"","",""],
["반","","","뭐? 머맨의 왕이 바칼을 위해 우리를 막아선 거였단 말이야? 바칼이라면 천계에서 온 아가씨가 말하던 사도의 이름인데... 죽은 지 꽤 됐다고 들었는데 엄청난 충성심이로구만.",,"","",""],
["반","","","그래서 그런 건가? 그렇지 않아도 이 근방에서 뭔가 희한한 느낌을 받기는 했는데. 검은 악몽도 아니고...",,"","",""],
["모험가","","","(아무래도 이 이야기는 해야할 듯 싶어, 반에게 GBL교가 사도 로터스를 봉인해두고 있다고 말했다.)",,"","",""],
["반","","","...헤에.",,"","",""],
["반","","1","순진해 보이는 교주 아가씨가 굉장한 걸 숨기고 있었구만.",,"","",""],
["반","","","하핫, 그래야지. 이 괴상한 고래를 타고 하늘에서 그윽히 땅개들을 내려보고 사는데 그 정도 비밀쯤은 가지고 있어야지.",,"","",""],
["하츠","","","사도가 또다시 난장판을 만들면 일이 귀찮아진다. 가서 죽여야겠군.",,"","",""],
["반","","","기다려. 묻는다고 어디에 봉인했는지 가르쳐 줄 거 같지 않고, GBL교가 쌓아온 지식에는 흥미가 있어. 그렇지 않아도 멀리서 감시가 따라붙고 있는데 더 방해받는 건 사양이다.",,"","",""],
["반","back040004","","머맨의 왕에게 더 자세한 이야기를 듣는 게 좋겠어. GBL교로 서는 우리가 캐묻는 걸 탐탁지 않아할 테니 모험가가 물어보는 게 좋겠군. 우리는 허탕을 치는 연기를 하면서 네 쪽으로 도망가게 몰아주겠어.",,"","",""],
["킹머맨투레","back040205","1","끄으으, 나에게 뭘 원하는 것이냐...",,"","",""],
["킹머맨투레","","","마력장을 누가 친 거냐고? 그야 당연하지 않느냐! 위대하신 바칼 님이다!",,"","",""],
["킹머맨투레","","","바칼 님은 천 년 전에 천계를 지배하시며 아라드와 천계의 통행을 끊으셨다. 하늘성을 통하여 천계로 올라가는 길도 막으셨지.",,"","",""],
["킹머맨투레","","","천계는 흑요정의 마가타를 타고도 올라갈 수 없는 곳이지만 놈들의 기술이 발전할 수도 있음을 경계하여 미들 오션에 마력장을 펼쳐，더이상 위로 올라가지 못하도록 막은 것이다.",,"","",""],
["킹머맨투레","","","이 마력장을 뚫는 법 따위 절대로 말하지 않는다!",,"","",""],
["모험가","","","천계에서 검은 악몽이 흘러내려오고 있는 건 알고 있어? 잘 생각해봐. 무언가 어둡고 기분 나쁜 기운에 의해 생물들이 잠에 빠지더니 갑자기 난폭해지는 거 못 봤어?",,"","",""],
["킹머맨투레","","","끄으... 그건 나도 알고 있다. 검은 기운은 천계에서 흘러오고 있다. 그래서 나는 백성들을 살리기 위해 의리너구리 용병단을 고용했다.",,"","",""],
["반","","","헤에. 그렇구만.",,"","",""],
["모험가","","2","반! 언제 내 뒤에...",,"","",""],
["반","","","어어, 얘기가 길어지는 것 같길래 부단장님한테 뒤따라오는 녀석 좀 맡아달라고 하고 왔어. 검은 악몽은 천계에서 흘러오고 있었던 거로구만.",,"","",""],
["모험가","","","(이런... 레지스탕스가 알려준 정보를 확인해 보다가 제국이 알게 해버렸어...)",,"","",""],
["반","","","재밌는 건 천계 아가씨도 그렇과 검은 악몽도 그렇고 위에서 내려올 수는 있는데 아래에서 올라갈 수는 없다는 거야.",,"","",""],
["반","","","마력장을 친 놈이 아래로 내려가는 것은 허용을 했던 건지... 아니면, 아래에서 올라가는 걸 경계했던지. 둘 중 하나겠지. 천계를 고립시키고 싶은 이유가 있었던 걸까?",,"","",""],
["반","back040205","","왜 그래? 갑자기 얼굴이 어두워졌는걸. 하하, 미들 오션의 마력이 안 맞는 걸지도 모르겠다.",,"","",""],
["이사도라","back040002","1","모험가님. 여기에 계셨군요. 마력장이 미들 오션의 생명체에게 끼친 영향의 분석이 끝났습니다.",,"","",""],
["이사도라","","","마력장이 생물들을 기형적으로 변형시킨 것을 확인했습니다. 또한 옛 자료에 나오던, 하늘성에 살고 있다던 용인족과 비슷한 마력적 형질도 갖고 있더군요.",,"","",""],
["반","","","역시 GBL교! 지식 탐구를 하려면 이곳으로 오라던 사람들의 말이 맞았어. 고마워.",,"","",""],
["이사도라","","","별 말씀을. GBL교는 언제나 여러분을 도울 것입니다.",,"","",""],
["반","","","하늘성을 막은 것이 바칼이랬지. 하늘성에 오르지 못하게 막았다던 용인족은 바칼과 관련이 있었을 거야. 이쪽 생명체들과 용인족이 관련이 있다니까, 그 머맨왕이 바칼 님, 바칼 님 하는 것도 이해가 가는군.",,"","",""],
["모험가","","","그럼 이제 월 알아볼 건가요?",,"","",""],
["반","","","바칼의 마력을 뚫는 법. 내 생각엔 이곳에 봉인되어 있다던 사도가 뭔가를 알고 있을 거 같아.",,"","",""],
["반","back040002","","머맨왕한테 알아낼 수 있을 만큼 알아내보자고. 사도에 대해서.",,"","",""],
["킹머맨투레","back040205","1","끄으윽! 사도라면, 사도라면 베히모스 위에 잠들어 있지 않느냐!",,"","",""],
["킹머맨투레","back040205","","흐흐, 너희가 기세등등한 것도 지금뿐이다. 사도는 너희가 감당할 수 있는 것이 아니다. 너희가 사도에게 명망당하는 것을 내 백성들과 함께 멀찍이 구경해주지!",,"","",""],
["반","back040004","2","여전히 큰 소리만 치고 중요한 건 얘기를 해주지 않는군... 하지만 신경이 쓰이는 말을 하는걸.",,"","",""],
["반","","1","내가 알고 있는 사도는 이래. 다른 세계에서 왔으며, 자기 자신은 물론 생물이나 무생물, 심지어 병균 같은 것을 차원을 넘어 다른 세계로 보낼 수 있는 힘이 있다는 것. 물론 엄청난 힘이지.",,"","",""],
["반","","","놈들의 목적은 잘 물라. 아이리스가 말하기로는 아라드를 지배하기 위해서 오는 거라는데... 하지만 확실히, 가만 놔둘 수는 없는 놈들이야.",,"","",""],
["반","","","디레지에의 환영을 봤지? 그게 언더풋처럼 큰 도시에 나타났다고 생각해봐. 희생자가 엄청났을걸.",,"","",""],
["반","back040004","","우선 네가 가서 사도에 대해 다시 물어와. 네가 가도 안 된다면 우리는 따로 움직이겠어.",,"","",""],
["오필리아","back040000","2","끈질기시군요. 사도는 확실히 봉인되었습니다.",,"","",""],
["오필리아","","","저를 믿지 못하시는 것은 상관없지만 그 과정에서 희생된 신도들의 노력까지는 폄하하지 말아주셨으면 합니다.",,"","",""],
["반","","","고집이 있구만. 좋아. 그럼 우리도 우리 나름대로 움직여야겠어.",,"","",""],
["반","","","크루거 부단장. 천계로 가는 방법을 알아보는 건 일단 뒤로 돌린다. 우리는 이곳에 있는 사도를 조사한다.",,"","",""],

["","","","",,"","",""]];