﻿var front;
var title;
var text;

front = "backF06";//첫 뒷배경 (.jpg 형식)
title = "추격 섬멸전";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["젤딘","back060002","","적의 보급로에 치명적인 타격을 준 결과 놈들이 퇴각을 준비하고 있다고 합니다.",,"","",""],
["젤딘","","","드디어 우리 황도군도 제 실력을 발휘할 때가 온 것 같습니다.",,"","",""],
["젤딘","","","총공격이 곧 내려질 터이니 모험가님과 반 님도 전투 준비를 해주시기 바랍니다.",,"","",""],
["반","","","알겠습니다. 그렇게 하지요.",,"","",""],
["반","back060002","","아참. 모험가,  잠깐 따로 볼 수 있겠습니까?",,"","",""],
["반","back060000","2","드디어 총공격인가아... 날이 좋으니 늘어지는데 큰일이네.",,"","",""],
["반","","","에밀리... 에밀리도 보고 싶다아! 부단장! 유부남끼리 잠깐 내려갔다 올까?",,"","",""],
["반","","","...아, 또 무시야...",,"","",""],
["모험가","","","(... 멋진 군인으로 보이는 건 공식적인 자리에서 뿐인가...)",,"","",""],
["반","","1","아무튼 말이지. 재미있는 걸 알아내서 이야기해주려고 하는데. 뭔지 궁금해?",,"","",""],
["반","","","짜잔! 마계로 가는 길에 대한 정보룰 입수했다 이거야! 하하하! ...어라? 너 왜 별로 안 놀라냐?",,"","",""],
["모험가","","","(이크...) ...황당해서 그러죠. 갑자기 그게 무슨 소리에요?",,"","",""],
["반","","","나도 꽤나 황당한데, 들어봐. 아이리스가 마계인인 건 알지? 어떻게 왔는지 자기도 잘 모르겠다고 하는데, 을라가는 방법도 모른다고 잡아떼던 여자가 어떤 소문을 헛소리라며 딱 잘라 단정지은 게 있어.",,"","",""],
["반","","","그러니까 오히려 더 신경쓰이지 않냐? 그래서 GBL교의 도서관을 좀 뒤져봤는데 몇 줄 정도로 이야기가 나오더라, 이 말이야.",,"","",""],
["반","","","마계인지 아닌지는 잘 모르겠지만 '이 세상이 아닌 곳으로 가는 저주받은 성'이 천계에 있다고 하더군.",,"","",""],
["반","","","천계인이 아랫세계의 존재를 전설로만 기억했듯, 마계에 대해서도 잘 모를 수도 있단 말이지. 그러니까 마계가 아니라 성에 대한 전설을...",,"","",""],
["유르겐","","","바쁘신데 실례하겠습니다. 발슈테트 공 계십니까?",,"","",""],
["반","","","아, 유르겐 공. 여기까지는 어쩐 일이십니까?",,"","",""],
["모험가","back060000","","(마계가 아니라 '성'에 대한 소문이라... 반의 말대로 그런 식으로 찾아보는 게 좋겠군.)",,"","",""],
["마를렌","back060001","2","다른 세계로 가는 성에 대한 소문이요?",,"","",""],
["마를렌","","","그런 뜬구름 잡는 이야기는 알지 못합니다. 저희 황녀의 정원은 언제나 정확하고 사리에 맞는 것만 취하라고 교육받고 있습니다.",,"","",""],
["마를렌","back060001","","모험가님도 어린애가 좋아할 전설에서 흥미를 버리시는 게 어떻겠습니까?",,"","",""],
["젤딘","back060002","1","모두 준비가 되셨습니까? 이제 퇴각하는 적들을 추적할 때입니다.",,"","",""],
["젤딘","back060002","","싸울 마음을 버리고 항복을 한다면 포로로 받아들이겠다고 말해주십시오. 그리고 가능하면 지젤을 생포해 주십시오.",,"","",""],
["","back060800","0","",,"","",""],
["젤딘","back060002","2","역시 지젤이 호락호락 잡힐 리는 없군요.",,"","",""],
["젤딘","","","괜찮습니다. 작전은 이제 시작이니까요. 수고하셨습니다.",,"","",""],
["젤딘","","1","적들은 참으로 교활하다 아니할 수 없습니다.",,"","",""],
["젤딘","","","응전하는 듯하다가도 어느 새 교묘하게 퇴로를 확보하여 퇴각을 계속하고 있어요.",,"","",""],
["젤딘","","","하지만 이번 작전을 성공시키는 것이 황도군의 승리와 직결되어 있으니 소홀히 할 수는 없습니다.",,"","",""],
["젤딘","","","적들의 퇴로에는 황도군의 장교가 이미 투입되어 있습니다. 그의 이름은 니베르라고 합니다.",,"","",""],
["젤딘","back060002","","그로부터 현재 상황에 대한 보고를 받아 제게 전달해 주십시오.",,"","",""],
["준장니베르","back060801","1","당신이 젤딘 님이 언제나 말씀하시던 그 모험가입니까?",,"","",""],
["준장니베르","","","황도군을 대표하여 감사드립니다. 정식 인사는 나중에 다시 하도록 하지요,.",,"","",""],
["준장니베르","back060801","","지금은 시간이 얼마 없으니 일단 어서 출발하도록 하죠.",,"","",""],
["젤딘","back060002","2","니베르는 무사하던가요? 어떻습니까? 듬직한 동료죠?",,"","",""],
["젤딘","","1","보고는 잘 받았습니다.",,"","",""],
["젤딘","","","니베르의 말에 따르면 적들의 퇴각을 저지하기 위해 작전을 펼치다보니 황도의 병사들도 여기저기로 분산된 모양입니다.",,"","",""],
["젤딘","","","그들을 찾아 병력을 집중하는 것이 최우선 과제입니다.",,"","",""],
["멜빈","","","어이! 젤딘. 혹시 콘에 대한 소식은 못 들었어?",,"","",""],
["젤딘","","","네? 아... 그 무대폰 콘을 말씀하시는 거군요.",,"","",""],
["젤딘","","","그도 이번 추격섬멸 작전에 투입되어 있습니다. 통신 상황이 여의치 않아 소재는 확실치 않지만 현재 작전지역에 있는 것만은 확실합니다.",,"","",""],
["멜빈","","","음, 그래? 이봐, 가는 길에 콘을 좀 찾아봐 주겠어?",,"","",""],
["멜빈","back060002","","예전에 나에게 게이볼그 펀치 소환법을 배워간 후로 그게 맘에 든다며 그것만 사용하는 단순무식한 녀석이지만 심성도 착하고 실력도 끝내주니까 틀림없이 도움이 될 거야.",,"","",""],
["콘","back060802","1","하하하, 만나서 반가워!",,"","",""],
["콘","","","내 이름은 콘! 남자는 한 방이지!",,"","",""],
["콘","back060802","","통쾌하게 한 판 벌여보자구!",,"","",""],
["멜빈","back060004","2","그래. 잘 있단 말이지? 다행이네. 꽤 도움이 되지 않았어?",,"","",""],
["멜빈","back060004","","어쨌든 좋은 소식을 들어 다행이군. 고마워.",,"","",""],
["젤딘","back060002","1","작전지역에는 니베르와 콘 말고도 여성 거너 한 명이 더 투입되어 있습니다.",,"","",""],
["젤딘","","","이름은 비연이라고 합니다만 소식이 묘연하네요. 찾아봐주시겠습니까?",,"","",""],
["마를렌","","","비연은 예전에 황녀의 정원 소속이기도 했어요.",,"","",""],
["마를렌","","","뛰어난 실력을 썩히는 것이 아까워 지금은 황도의 정규군으로 편입되어 갔지만 여전히 제겐 소중한 부하 중 한 명이랍니다.",,"","",""],
["마를렌","back060002","","적지에서 고생하고 있을 비연이 무사히 부대에 합류할 수 있도록 도와주세요",,"","",""],
["비연","back060803","1","전장에서 아군을 만나니 반갑기 그지 없군요.",,"","",""],
["비연","back060803","","당신도 저와 같은 임무로 오셨겠죠? 어서 임무를 끝내고 부대로 복귀하도록 하지요.",,"","",""],
["마를렌","back060001","2","고맙습니다. 정말 한 시름 놓았어요.",,"","",""],
["마를렌","back060001","","비연이 무사히 지내고 있는 것 같아 정말 다행입니다.",,"","",""],
["젤딘","back060002","1","드디어 막강한 용사들이 한 자리에 모였군요.",,"","",""],
["젤딘","","","거기에 당신 같은 용감한 모험가의 힘까지 더해졌으니 더이상 무서울 것이 없군요.",,"","",""],
["젤딘","back060002","","자! 어서 가셔서 요원들과 함께 못된 카르텔 놈들에게 그동안 쌓인 울분을 쏟아주십시오.",,"","",""],
["준장니베르","back060804","1","또 만났군요, 모험가님. 콘과 비연은 각자 흩어져서 임무를 수행하고 있습니다.",,"","",""],
["준장니베르","back060804","","자, 서둘러 그들을 찾아보시죠. 샛길쪽으로 가면 만날 수 있을 겁니다.",,"","",""],
["","back060805","0","",,"","",""],
["","back060806","0","",,"","",""],
["젤딘","back060002","2","도망치는 적들을 보니 속이 다 시원합니다. 이게 모두 모험가님 덕분입니다.",,"","",""],
["젤딘","back060002","","정말 어떻게 해야 이 은혜를 다 감을 수 있을지 모르겠군요.",,"","",""],
["베릭트","back060003","1","얼마 전 라크라는 녀석이 한방중에 나를 찾아왔었다네. 나처럼 카르텔이 싫어서 뛰쳐나왔다나?",,"","",""],
["베릭트","","","확실히 정상적인 놈이라면 카르텔의 그 잔악무도한 만행을 지켜보면서 거기에 계속 남아있고 싶지는 않을 테지.",,"","",""],
["베릭트","","","어쨌든 자기 손으로 카르텔을 처단하고 싶다고 하기에 작전 지역의 위치를 알려주고 그곳에 보내두었다네.",,"","",""],
["베릭트","","","젤딘에게 말해봤자 나에게 그랬듯 녀석을 믿어 줄 것 같지 않아서 말이야.",,"","",""],
["베릭트","back060003","","허나 혼자 힘으로는 역시 위험할 것 같구만. 자네가 가서 그를 좀 도와주었으면 하네.",,"","",""],
["망명라크","back060807","1","휘유~ 늦었군, 친구! 베릭트 영감이 보내서 왔지?",,"","",""],
["망명라크","","","뭐야, 그 눈초리는? 날 의심하는 거야?",,"","",""],
["망명라크","","","안심해. 난 선량한 황도군 편이니까. 진짜라구~",,"","",""],
["망명라크","back060807","","흥. 믿건 안 믿건 일단 출발부터 하고 보자구.",,"","",""],
["","back060808","0","",,"","",""],
["베릭트","back060003","2","뭐라고? 녀석이 배신을? 으으... 나쁜 녀석들. 이런 치사한 방법까지 사용하다니 정말 성질이 뻗치는군.",,"","",""],
["베릭트","","1","라크 놈 같은 배신자가 있기 때문에 젤딘도 아직 나를 믿지 못하는 걸세.",,"","",""],
["베릭트","","","내 그놈만은 결코 용서할 수가 없군.",,"","",""],
["베릭트","","","당장이라도 가서 혼을 내주고 싶지만 지금은 다른 일 때문에 바빠서 그러지 못하는 게 안타까워.",,"","",""],
["베릭트","back060003","","진짜 로망이 무엇인지 알고 있는 자네라면 나의 이런 울분을 이해할 테지? 내 대신 녀석에게 본때를 보여주겠나?",,"","",""],
["모험가","back060809","1","드디어 만났다, 이 배신자!",,"","",""],
["라크","","","나보고 배신자라고? 아~ 정말 피곤한 친구네. 나도 사정이라는 게 있어서 어쩔 수 없었다구.",,"","",""],
["라크","","","살다보면 이런 일도 있고 저런 일도 있는 거지. 뭐 그런 거 가지고 열을 내시나?",,"","",""],
["라크","","","그리고 황도군도 똑같은 짓을 했으니 어차피 피장파장 아니야?",,"","",""],
["모험가","","","그건 무슨 소리지? 황도군이 똑같은 짓을?",,"","",""],
["라크","","","어허~ 모르는 척하다니 연기력이 수준급이시군.",,"","",""],
["라크","back060809","","뭐. 어쨌든 정 싸움을 걸어온다면 거절하지는 않겠어. 덤벼보라구! 순둥이!",,"","",""],
["베릭트","back060003","2","고맙네. 그 못된 녀석이 도망도 잘 친단 말이지?",,"","",""],
["베릭트","back060003","","다음에 만나면 내가 직접 혼을 내주도록 하지. 녀석, 자신을 위해 그 전에 정신을 좀 차렸으면 좋겠군.",,"","",""],
["젤딘","back060002","1","그게 무슨 말씀이십니까? 베릭트 노인의 부탁을 들어주러 작전지역에 갔다가 이름 모를 전사를 만났다구요?",,"","",""],
["베릭트","","","흠... 이름조차 알 수 없다니 수상하군. 정체는 모르겠지만 그녀 역시 배신자일지도 모르지.",,"","",""],
["베릭트","","","라크 그 놈 때문에 나도 사람을 쉽게 믿지 못하게 되었나봐.",,"","",""],
["젤딘","","","베릭트? 여기까지 웬일이죠?",,"","",""],
["베릭트","","","어허, 이 드센 아가씨야.",,"","",""],
["베릭트","","","이젠 내 맘대로 어디를 돌아다니지도 못하게 할 텐가? 대체 언제까지 날 의심할 셈이야?",,"","",""],
["젤딘","","","그... 그야...",,"","",""],
["젤딘","","","흠. 지금 그런 이야기는 그만두도록 하죠.",,"","",""],
["젤딘","","","어쨌든 중요한 작전지역에 그런 불확정요소가 있어서 좋을 건 없어요.",,"","",""],
["젤딘","","","모험가님이 그녀와 동행하면서 그녀의 동태를 잘 관찰한 후에 보고해 주셨으면 합니다만.",,"","",""],
["베릭트","","","그래. 나 역시 부탁하지.",,"","",""],
["베릭트","","","만약 그녀 역시 배신자라는 사실이 밝혀진다면 내 직접 총알을 박아주고야 말 테다.",,"","",""],
["반","","","......",,"","",""],
["젤딘","","","과연 그렇 수 있을까요? 무법자 베릭트 씨?",,"","",""],
["베릭트","","","허허. 이 아가씨도 참 어찔 수 없구만...",,"","",""],
["베릭트","","","하지만 여차하는 순간 기대하게. 내가 헛늙은 게 아니라는 걸 보여줄 테니.",,"","",""],
["반","back060002","","전설이라는 이름을 가진 남자의 실력이라니... 그거 참 기대가 됩니다.",,"","",""],
["무명여전사","back060810","1","누... 누구?",,"","",""],
["모험가","","","이런... 또 새로운 적인가?",,"","",""],
["무명여전사","","","적이라고? 아냐. 난 당신을 공격하려는 게... 아아, 모르겠어. 아무 것도 기억나지 않아.",,"","",""],
["모험가","","","기억을 잃어버린 건가?",,"","",""],
["무명여전사","","","내가 어찌된 거지? 여기서 뭘 하고 있는 건지...",,"","",""],
["모험가","","","곤란하게 되었네. 일단 적을 해치우고 생각하자.",,"","",""],
["무명여전사","back060810","","절 도와줄 건가요? 고마워요. 어서 출발하죠.",,"","",""],
["라크","back060811","1","또 만났네, 순둥이.",,"","",""],
["라크","","","어? 너... 너는?",,"","",""],
["무명여전사","","","왜 그러지? 혹시 나를 알고 있나?",,"","",""],
["라크","","","네가 어떻게 아직도 살아있는 거지? 그 때 지젤 박사님께서 분명...",,"","",""],
["무명여전사","","","그게 무슨 소리야? 지젤이라고? 넌 내가 누구인지 알고 있나?",,"","",""],
["라크","","","하. 그럼 그렇지. 목숨은 건졌지만 역시 제정신은 아닌가 보군.",,"","",""],
["라크","","","하긴 그런 공격을 당하고도 멀쩡할 리가 없지.",,"","",""],
["무명여전사","","","무슨 소리야? 나에 대해 뭘 알고 있는 거지? 어서 말해!",,"","",""],
["라크","","","흥. 첩자 주제에 불 같은 성격은 여전하시구만. 네가 무슨 짓을 했는지 정말 기억이 안 나는 거야?",,"","",""],
["라크","","","재밌군. 하하하. 그렇게 궁금하면 날 쓰러뜨리고 지젤 박사님께 직접 물어보시지.",,"","",""],
["모험가","","2","도망쳤군.",,"","",""],
["무명여전사","","","그렇네요... 물어봐야 할 게 있는데...",,"","",""],
["모험가","back060811","","할 수 없죠. 일단 젤딘 님에게 돌아가죠.",,"","",""],
["젤딘","back060002","2","라크가 그런 이야기를 했단 말이죠? 지젤이 그녀의 정체툴 알고 있다라...",,"","",""],
["젤딘","","1","지젤을 추궁하면 그녀의 정체를 알 수 있을 거라는 말씀이시죠?",,"","",""],
["젤딘","back060002","","작전에 차질을 빚는 일은 아니니 그녀를 도와주어서 나쁠 건 없겠죠. 그녀의 기억을 찾는 것을 도와주세요.",,"","",""],
["지젤","back060812","1","끈질긴 놈들. 끝까지 날 따라오는구나! 이 몹쓸...",,"","",""],
["무명여전사","","","지젤!",,"","",""],
["지젤","","","?!",,"","",""],
["무명여전사","","","너에게 물어볼 것이 있다. 넌 내가 누구인지 알고 있나?",,"","",""],
["지젤","","","뭐야? 응? 자세히 보니, 호오, 넌 분명...",,"","",""],
["지젤","","","라이니. 배신자 라이니로군! 바퀴벌레 같은 것. 아직도 살아있었구나.",,"","",""],
["무명여전사","","","라이니? 내 이름이 라이니란 말인가?",,"","",""],
["지젤","","","글쎄. 본명은 내 알 바가 아니지. 더러운 첩자 같으니라구!",,"","",""],
["지젤","","","감히 그 따위 어설픈 위장 잠입으로 날 속일 수 있을 거라 생각했나?",,"","",""],
["모험가","","","위장 잠입?! 그렇다면 혹시 당신은 황도군에서 카르텔에 잠입시킨...",,"","",""],
["무명여전사","","","글쎄요. 아마도 그런 것 같군요.",,"","",""],
["모험가","","","정체가 발각되어 도망치다 기억을 잃게 되었다는 건가...?",,"","",""],
["지젤","","","그렇게 당하고도 다시 날 찾아온 걸 보니 아직도 혼이 덜 난 모양이군.",,"","",""],
["무명여전사","","2","기다려! 지젤!",,"","",""],
["무명여전사","","","...아. 도망갔군요. 하지만 저에 대해서 알아낸 것 같아요.",,"","",""],
["무명여전사","","","먼저 돌아가 주겠어요? 정리할 시간이 필요해요.",,"","",""],
["무명여전사","back060812","","걱정말아요. 모든 게 확실해지면 황도군으로서 저들과 싸울테니까.",,"","",""],
["젤딘","back060002","2","적이 아니라니 다행이네요. 하지만 위장 잠입이라니, 제가 알기로 황도군은 그런 위험한 작전을 시도한 적이 없는데.",,"","",""],
["마를렌","","","라이니? 라이니가 살아있다는 말씀이신가요?",,"","",""],
["젤딘","","","마를렌 님. 아는 사람입니까? 이게 어떻게 된 일이죠?",,"","",""],
["마를렌","","","아... 라이니. 다행이다.",,"","",""],
["마를렌","","","사실 라이니는 황녀의 정원 소속이었어요.",,"","",""],
["마를렌","","","황녀님께 직접 카르텔의 정보를 수집하라는 임무를 받고는 자원하여 카르텔에 위장 잠입을 했었답니다.",,"","",""],
["마를렌","","","모두가 말렸지만 워낙 책임감이 강한 성격이라 소용이 없었죠.",,"","",""],
["마를렌","","","그러다 소식이 끊기고 정체가 발각되어 죽었다는 소문뿐이었는데... 정말 다행이네요. 살아있었다니.",,"","",""],
["젤딘","","","그렇군요. 천만다행입니다.",,"","",""],
["젤딘","","","더구나 그녀도 이젠 앞으로 우리의 작전을 돕기로 했단 말이죠? 든든한 우군이 생겼네요. 정말 잘 된 일입니다.",,"","",""],
["젤딘","","1","우리 황도군의 추격 작전도 막바지로 접어들고 있습니다.",,"","",""],
["젤딘","","","겐트에서 멀리 떨어진 곳까지 적들을 몰아내긴 했지만 궁지에 몰려 필사적이 된 적들의 저항은 여전히 큰 위협이 되고 있습니다.",,"","",""],
["젤딘","","","허나 이 기회를 놓치면 적들이 언제 다시 야심을 품게 될지 몰라요.",,"","",""],
["젤딘","","","이제 놈들이 다시는 우리를 공격할 마음을 품지 못하도록 마지막 철퇴를 가할 때입니다. 공격의 고삐를 늦추지 마세요.",,"","",""],
["젤딘","","2","적들에게 확실히 공포를 심어주셨나요?",,"","",""],
["젤딘","","1","아마도 적군은 퇴로 곳곳에 숨어있을 겁니다.",,"","",""],
["젤딘","","","그런 적들을 그냥 내버려 두었다간 틀림없이 우리에게 칼날을 들이대겠죠.",,"","",""],
["젤딘","","","작전지역 구석구석에 숨어있는 적들을 모두 찾아내 섬멸해 주십시오.",,"","",""],
["반","","","이번 작전에서는 적의 사기를 확실히 꺾어놓는 것이 중요합니다.",,"","",""],
["반","back060002","","저도 모험가님과 동행하지요. 혼자 가는 것보다는 더 확실할 것입니다.",,"","",""],
["반","back060813","1","아아, 역시 난 실전 체질이야. 홀가분하니 좋구만.",,"","",""],
["반","back060813","","그럼 가볼까? 뒤쳐지지 말라구.",,"","",""],
["젤딘","back060002","2","적을 하나도 남김없이 쓸어주고 오셨다고요? 정말 수고하셨습니다.",,"","",""],
["젤딘","","1","모험가님과 제국군 여러분의 활약 덕분에 저희 황도군도 드디어 여기까지 적을 몰아붙일 수 있었습니다.",,"","",""],
["젤딘","back060002","","작전 지역에 황도의 수비대가 모험가님을 기다리고 있을 겁니다. 그들과 함께 한바탕 적을 쓸어주십시오.",,"","",""],
["","back060814","0","",,"","",""],
["젤딘","back060002","2","아. 드디어 적을 몰아냈군요. 이제 조금 안심입니다.",,"","",""],
["젤딘","","","물론 다시 언제 이런 일이 생길지는 모르겠지만 커다란 위기를 넘길 수 있었습니다.",,"","",""],
["반","","","이 모든 것이 어려운 상황에도 굴하지 않고 끝까지 대항한 황도군과 슈나이더 대장님의 공로입니다.",,"","",""],
["젤딘","","","아닙니다. 반 님의 충고가 없었더라면 겨우 찾아온 위기를 잃어버릴 뻔했습니다. 가르침을 주셔서 정말 감사합니다.",,"","",""],
["젤딘","","","물론 모험가님의 도움도 정말 몸 둘 바를 모르겠습니다. 어떻게 감사를 표해야 할지...",,"","",""],
["젤딘","","","먼저 가신 저희 오빠도 편히 눈을 감으실 수 있겠군요. 감사합니다. 정말 감사합니다.",,"","",""],

["","","","",,"","",""]];