﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "레니 구출작전";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["반","backT04","","몇 명이나 쓰러뜨렸냐? 거기 공기가 기분 나쁘기는 해도 시로코 때만큼은 아니라서 살았어.",,"","",""],
["하츠","","","반 발슈테트!!",,"","",""],
["반","","","깜짝이야. 그렇게 큰 소리로 안 불러도 내 이름 안 까먹는다고.",,"","",""],
["하츠","","","농담하려고 부른 게 아니다. 네놈이 끌고갔던 단원이 한 명 부족하지 않나.",,"","",""],
["하츠","","","레니 블레인스콕은 왜 같이 오지 않은 거지?",,"","",""],
["반","","","레니... 블레인스콕? 아아, 그 신참 붉은머리? 오는 길에 구덩이에 빠졌는지 갑자기 안 보이더라고. 로터스의 지배력도 성가실 정도로 강해질 무렵이라 뭐, 어쩔 수 없었어.",,"","",""],
["하츠","","","어찔 수 없었다고? 자기가 끝고 간 부하를 잃고 온 주제에, 그것도 왜 낙오되었는지 제대로 알지도 못한 주제에 잘났다고 나불거리는 건가?",,"","",""],
["반","","","하하. 그러니까 말했잖아. 로터스의 지배력이 강해지고 있었다니까. 다른 녀석들을 잃는 것보다는 옳은 판단이었다고...",,"","",""],
["하츠","","","도저히 상대를 못해주겠군. 내가 움직일 수 밖에 없는 건가?",,"","",""],
["하츠","","","모험가!",,"","",""],
["프리스트남","","","무, 무슨 일이지?",,"","",""],
["하츠","","","네놈은 분명히 어벤저였지. 어둠의 권능은 쓸 줄 아나?",,"","",""],
["프리스트남","","","분명히 스킬 목록에는 있지만... 아직 레벨이 1 부족해서 습득할 수는 없어.",,"","",""],
["하츠","","","베히모스에서 에픽퀘스트가 넘쳐나는데도 그 모양이라니 이전 퀘스트들을 건너뛴 모양이군. 한심한 녀석...",,"","",""],
["반","","","이봐! 내 성질 건드려놓고 말까지 끊다니 뭐 하는 짓이야!",,"","",""],
["하츠","","","지금 날 건드리면 죽는 줄 알아라!",,"","",""],
["반","","","뭐, 뭐지... 이 살기는... 로터스, 아니 시로코때도 느껴보지 못했던 엄청난 살기... 네녀석 정체는 대체...",,"","",""],
["하츠","","","모험가! 경매장을 열어보면 신비한 달인의 계약 주머니가 있을 거다. 그걸 이용해 당장 어둠의 권능을 찍도록.",,"","",""],
["프리스트남","","","(반이 지금 여지껏 본 적이 없는 하츠의 엄청난 살기에 꼼짝도 못 하고 있다. 비명굴의 영웅을 억눌러버리는 살기라니... 말 한 마디 잘못 했다간 목숨이 남아나질 않겠어..)",,"","",""],
["프리스트남","","","습... 습득했어! 스킬창에도 등록했고.",,"","",""],
["하츠","","","좋아. 모험가, 난 나와 함께 움직인다.",,"","",""],
["하츠","","","반 발슈테트! 레니 블레인스콕을 마지막으로 본 장소를 말해라!",,"","",""],
["반","backT04","","아... 알겠으니까 이 살기좀 없애. 사람 돌아가시겠다.",,"","",""],
["","backD04050","0","",,"","",""],
["하츠","backD04051","1","여기인가.",,"","",""],
["레니","","","로... 터스님을... 지킨다...",,"","",""],
["프리스트남","","","레니!",,"","",""],
["하츠","","","어물쩡 거릴 시간 없다! 어서 어둠의 권능을!",,"","",""],
["프리스트남","","","하, 하지만 레니는 체력이 저질이라 어둠의 권능을 맞았다가는...",,"","",""],
["하츠","","","내가 두 말 하게 하지 마라.",,"","",""],
["프리스트남","","","... '쓸데없는 발악이야.' (어둠의 권능 시전 대사)",,"","",""],
["레니","","","끼야악!",,"","",""],
["프리스트남","","","(안돼. 이러다간 어둠의 결정체가 레니는 꿰뚫겠어...)",,"","",""],
["하츠","","","히야압",,"","",""],
["프리스트남","","","(이 때, 눈 앞에서 믿을 수 없는 광경이 나타났다. 하츠는 어둠의 결계에 휩싸인 레니를 주먹으로 움켜줘 멀리 던지고는 언제 배웠을 지 모를 저 하늘의 별을 레니에게 날려 레니를 높이 뛰어버렸다.)",,"","",""],
["프리스트남","","","(레니가 너무나도 빠른 속도로 움직이는 터라 어둠의 결정체는 레니를 따라가지 못하고 공중에서 폭파하였다.)",,"","",""],
["프리스트남","","","(마지막 결정까지 모두 폭팔한 뒤 하츠는 저 하늘의 별을 중단시키고 양 손으로 레니를 받아냈다. 다행이다.)",,"","",""],
["하츠","","","아직 끝난 게 아니다! 돌아갈 때까지 어둠의 권능을 풀지 마라!",,"","",""],
["프리스트남","","","하지만 그게 마음대로 되는 일이...",,"","",""],
["하츠","","","지금 당장 죽.고.싶.나?",,"","",""],
["프리스트남","backD04051","","어, 어떻게든 해볼게...",,"","",""],
["오필리아","backT04","1","로터스를 상대로 무사히 다녀오시다니 정말 다행이로군요. 이게 모두 레슬리 베이그란스 님의 축복이 있었기에...",,"","",""],
["하츠","","","말을 끊어서 미안하지만, 이 아이에게 간단한 봉인술을 행해주실 수 있나? 사도를 봉인할 정도의 봉인술을 행하는 GBL교라면 그 정도라면 간단할 것이라 생각되는데.",,"","",""],
["오필리아","","","... 알겠습니다. 당장 의식을 준비하지요. 하지만 지금 사로 로터스의 힘이 점점 거세지는지라 간단한 봉인은 금방 풀려버려 의미가 없을 것입니다.",,"","",""],
["하츠","","","그럼 좀 단단한 봉인술을 쓰면 되지 않나?",,"","",""],
["오필리아","","","그렇게 되면 봉인이 되는 사람이 버티지 못할 것입니다. 강화의 결계 의식을 병행한다면 좀 더 시간을 끌 수는 있겠으나...",,"","",""],
["하츠","","","얼마나 시간을 확보할 수 있지?",,"","",""],
["오필리아","","","... 30분 정도일 겁니다.",,"","",""],
["하츠","","","그 정도면 충분하다. 모험가! 교주와 봉인 의식을 마무리지어라.",,"","",""],
["프리스트남","","","아... 알겠어... 조금만 더 버티면...",,"","",""],
["아간조","","","잠깐, 자네! 설마 단신으로 사도와 맞서 싸우겠다는 건 아닐테지? 아무리 부하의 목숨이 걸려있는 일이라도 자네 목숨을 함부로 여겨서는 안되네.",,"","",""],
["하츠","","","...참견 좋아하는 아저씨로군. 하지만 그러지 않으면 내 분이 가라앉지 않아 여기를 엎어버릴지도 모르는데?",,"","",""],
["시란","","","이럴 땐 다 같이 힘을 합쳐야지. 우린 사도와 싸운 경험이 많으니 니보단 억수로 잘 싸울기다. 막타는 남기둘테니 넘 걱정마라.",,"","",""],
["반","","","나도 도와주겠어. 이렇게라도 하지 않으면 제국의 기사단장으로서 체면이 서질 않으니 말이야.",,"","",""],
["하츠","","","...단장이 아니면 도와주지 않겠다는 말이냐? 뭐, 할 수 없지.",,"","",""],
["하츠","backT04","","자, 가자!",,"","",""],
["로터스","backD04054","1","네... 네녀석들이 감히 이 위대한 로터스님께...",,"","",""],
["아간조","","","로터스에게 마지막 일격을 날릴 시간이군. 지금이다!",,"","",""],
["하츠","","","... 이 빚은 죽는 날까지 잊지 않겠다.",,"","",""],
["하츠","","","일.기.당.천!",,"","",""],
["로터스","","","여기서 쓰러지다니... 꾸웩... 꾸웩...",,"","",""],
["시란","backD04054","","이야... 엄청 세게 내려꽂네. 진짜 우리 없었어도 혼자서 잘 싸웠겠다.",,"","",""],
["오필리아","backT04","1","로터스를 쓰러뜨리셨군요. 베히모스의 움직임이 안정을 되찾는 걸 보고 알 수 있었습니다.",,"","",""],
["하츠","","","레니는! 레니는 어떻게 되었지?",,"","",""],
["오필리아","","","봉인은 풀었고, 정신지배는 해제된 듯 합니다. 하지만 아직 의식이...",,"","",""],
["하츠","","","레니 블레인스콕! 정신차려라! 이 하츠 폰 크루거의 목소리가 들리지 않느냐?",,"","",""],
["반","","","야, 싸다귀 살살 좀 쳐라. 이러다가 네 손에 염라대왕 만나겠다.",,"","",""],
["하츠","","","레니 블레인스콕!",,"","",""],
["레니","","","...",,"","",""],
["레니","","","... 부... 부단장님?",,"","",""],
["레니","","","부단장님이... 얼굴을 만져주시다니... 당분간... 얼굴 씻지.. 말아야지...",,"","",""],
["하츠","","","무슨 엉뚱한 소리를 하느냐? 얼른 일어나지 못하겠느냐?",,"","",""],
["반","","","야, 막 일어난 환자에게 너무한 거 아니냐?",,"","",""],
["반","","","참, 병사 한 명한테 엄청난 인력 낭비를 하는구만. 그러고도 부단장이라고...",,"","",""],
["프리스트남","","","(반과 하츠가 다시 말싸움을 시작했다. 그래도 레니가 돌아와서 다행이야.)",,"","",""],
["프리스트남","","","(그런데 하츠 저 남자... 비명굴의 영웅을 억누르고, 직업을 넘나드는 스킬을 날려대고... 도대체 정체가 뭐지?)",,"","",""],

["","","","",,"","",""]];