﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "병아리의 강력함";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["반","backD009","","황제의 전언이다. 멜트다운에서 사도로 추정되는 것이 발견되어서 일이 커지기 전에 우리보고 정리하라신다.",,"","",""],
["레니","","","멜트다운에서 사도가 날뛴다고요? 그럴수가...",,"","",""],
["병아리","","","사도라, 삐약... 가만히 나뒀다간 귀찮아지겠군, 삐약. 그 전에 없애버려야겠어, 삐약.",,"","",""],
["반","","","이 건은 너희 둘한테 맡겨도 되겠지? 난 오랜만에 휴가내서 에밀리를 보러갈까 해서.",,"","",""],
["병아리","","","폐하의 명이 떨어졌는데도 휴가갈 궁리만 하는 게 마음에 안 들지만 단장이니 어쩔 수 없지, 삐약.",,"","",""],
["병아리","","","어이, 꼬마, 삐약. 준비해라, 삐약. 내일 아침에 바로 출발한다, 삐약.",,"","",""],
["레니","","","네, 하지만...",,"","",""],
["반","","","됐지? 그럼 난 갈테니까 나 돌아오면 보고하라구.",,"","",""],
["레니","","2","부단장님. 아무리 부단장님이 대단하시다지만 사도를 저희 둘이서는 좀...",,"","",""],
["병아리","","","로터스 건 때 내가 너의 머리통을 쪼아서 정신지배를 푼 것을 잊었느냐, 삐약?",,"","",""],
["병아리","","","내가 사도 로터스를 잡으러 직접 가지 않은 이유가 뭔지 아느냐, 삐약? 사도를 잡으려고 살기를 너무 내뿜으면 같이 참전한 녀석들도 덩달아 쓰러져버리기 때문이지, 삐약.",,"","",""],
["레니","","","(그렇게 대단하시면 혼자서 잡으시지...)",,"","",""],
["병아리","","","아무튼 그렇게 알아둬라, 삐약. 출발은 오전 7시, 삐약. 늦으면 명령 불복종으로 간주하겠다, 삐약.",,"","",""],
["레니","backD009","","네, 네!",,"","",""],
["","backMorning","0","",,"","",""],
["레니","backT02","1","걱정되는 건 마찬가지지만 조금이라도 준비해둬야겠어.",,"","",""],
["레니","","","... 모험가들이 어떻게 썼었지? 이걸 누르면 되나?",,"","",""],
["만렙지원병","","","게일포스!",,"","",""],
["게일포스","","","레벨 91 게일포스 작동 개시.",,"","",""],
["레니","","","그런데 시간이 되었는데도 부단장님이 안보이네. 어디 가셨지?",,"","",""],
["알베르트","","","어이, 기사나으리. 그 재수없는 녀석 찾는 거라면, 정찰해보겠다면서 시간 되면 진입하라고 전하라던데?",,"","",""],
["레니","","","뭐라고? 그게 언제쯤이지?",,"","",""],
["알베르트","","","한 30분 전인가...",,"","",""],
["레니","","","큰일이야. 아무리 그분이라도 사도 앞에선... 얼른 가봐야겠어.",,"","",""],
["","backD000","0","",,"","",""],
["레니","backD010","1","여기가 그 지역인가? 주변에서 엄청난 독기가 퍼져나오고 있어.",,"","",""],
["레니","","","그런데 왜지? 그런 것 치곤 너무 조용한데... 함정인가?",,"","",""],
["병아리","","2","지각은 안 한 모양이군, 삐약.",,"","",""],
["레니","","","부단장님! 걱정했잖습니까. 혼자서 그렇게 무리하시다간...",,"","",""],
["병아리","","","네녀석이 감히 내 걱정을 한단 말이냐, 삐약? 그럴 시간이 있으면 자기 몸이나 챙겨라, 삐약. 전에 일러준 약은 먹고 왔겠지, 삐약?",,"","",""],
["레니","","","아, 네. 그건 그렇고 너무 조용하네요. 설마 그 사도가 파둔 함정인 건...",,"","",""],
["병아리","","","당연한 걸 왜 묻나, 삐약? 잔챙이들은 다 쓸어버렸으니까 그렇지, 삐약.",,"","",""],
["레니","","","그렇군요... 네?",,"","",""],
["유리스","","","네 이놈... 디레지에 님껜 절대...",,"","",""],
["병아리","","","아직 목숨이 붙어있었다니, 삐약. 진작에 죽었으면 고통없이 끝났을 것을, 삐약...",,"","",""],
["레니","","","(그 뒤 부단장님이 부리로 쪼아서 알 수 없는 괴생명체의 숨통을 끊었다. 뭐야, 이 조류...)",,"","",""],
["레니","","","이제 저 문 너머로 가면 그 엄청나는 사도가 있는건가요? 분명히 엄청 강력하겠죠? 여기서부턴 제가 비장의 수단으로 상대하겠어요.",,"","",""],
["병아리","backD010","","이녀석, 삐약! 뭣대로 판단하지...",,"","",""],
["레니","backD011","1","뭐지, 저 거대한 구멍은?",,"","",""],
["병아리","","","삐약, 정찰하다가 어느 검은 똥개가 있어서 몸 좀 풀고 있더니 자기가 디레지에라고 하더군, 삐약. 설마 그 녀석이 사도인가 싶었지, 삐약.",,"","",""],
["병아리","","","자기는 '나는 불멸이다' 라고 하면서 으스대더니 갑자기 저 구멍이 나타나서 녀석을 빨아들이더군, 삐약. 그 뒤 이 모양이다, 삐약.",,"","",""],
["레니","","","그럼 일이 다 끝난 건가요? 혼자서 다 하실거면 저따윈 오지 않아도...",,"","",""],
["병아리","","","이 정도일 줄 몰랐지, 삐약. 잔챙이들은 너에게 맡기려고 했는데 몸이 근질근질해서 말이다, 삐약.",,"","",""],
["병아리","","","끝났으니 돌아가자, 삐약. 저 문 부순다고 경험치 같은 거 안 줄거 같으니 신경쓰지 말도록, 삐약.",,"","",""],

["","","","",,"","",""]];