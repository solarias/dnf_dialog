﻿var front;
var title;
var text;

front = "backF07.0";//첫 뒷배경 (.jpg 형식)
title = "서부선 탈환";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["젤딘","back060002","","모험가님, 혹시 카르텔이 탄 열차를 보지 못하셨습니까?",,"","",""],
["젤딘","","","카르텔의 잔당들이 해상열차를 이용해 남은 장비들을 몰래 서부 무법지대로 옮기고 있다고 합니다.",,"","",""],
["젤딘","","","원래 서부 무법지대는 해상열차가 연걸되어 있지 않았지만,  카르텔이 열차를 점거하고 있는 동안, 무법지대까지 선로를 연결시킨 모양이더군요.",,"","",""],
["젤딘","","","하지만, 대체 어느 시간대에 장비들을 운반하고 있는지에 대한 정보가 없습니다.",,"","",""],
["젤딘","back060002","","흠... 그 박쥐 같은 베른 보네거트를 구슬리는 수밖에 없겠습니다만...",,"","",""],
["베른","back070000","2","호오, 제게 또 물어볼게 있으쇼?",,"","",""],
["베른","","1","열차시간? 당연히 알고 있고 말굽쇼. 그리고 이쯔~음 되면 나리께서 제게 올 것도 예상하고 있었습니다요! 그러~나!",,"","",""],
["베른","","","이 보네거트가 먼저 이야기를 꺼내지 않았던 이유가 무엇이겠습니까요.",,"","",""],
["베른","","","에이, 섭섭하게 생각하지 마시구려. 세상에 공짜가 어딨수? 이런 고급정보는 특히 그렇지.",,"","",""],
["베른","","","허허~ 나리가 서부선과 해상열차를 탈환해 주는 것과, 이것과는 당연히 별개로 가져가야 하는 것 아니요? 이 양반 참 공짜 좋아하는구만.",,"","",""],
["베른","","2","우왓...! 이것이 아랫세계의 보물입니까? 대... 대단합니다요!",,"","",""],
["베른","","1","좋수! 거래하겠습니다요.",,"","",""],
["베른","","","카르텔이 장비를 운송하는 시간을 알려드릴 테지만, 절대!",,"","",""],
["베른","back070000","","절대! 제가 이야기했다고 어디다 이야기하시면 안됩니다?",,"","",""],
["","back070200","0","",,"","",""],
["","back070201","0","",,"","",""],
["젤딘","back060002","2","GT-9600이 운반되고 있다고 하셨습니까?",,"","",""],
["젤딘","","1","흠. 모험가님이 보네거트에게서 얻어내신 정보는 진짜인 것 같군요.",,"","",""],
["젤딘","","","분명 루프트하펜 어딘가에 카르텔의 병기를 숨겨놓은 곳이 있겠으나, 찾지 못하고 있습니다.",,"","",""],
["젤딘","","","하지만, 놈들이 본거지인 서부 무법지대로 장비를 운반하는 것만 막는다면, 그 장비가 큰 위협이 되지는 못할 것입니다.",,"","",""],
["젤딘","","2","성공하셨습니까?",,"","",""],
["젤딘","","1","지젤 박사 때문에 카르텔의 기술력도 상당히 높아졌습니다.",,"","",""],
["젤딘","","","카르텔이 운반하는 장비를 파괴하시면서, 쓸 만한 부품이 있으면 활용해 볼 수도 있을 것입니다.",,"","",""],
["젤딘","","2","많이도 모아주셨군요! 정말로 감사드립니다!",,"","",""],
["젤딘","back060002","","이제 황도군도 만반의 준비를 갖추어 아르덴으로 갈 준비를 서두르겠습니다.",,"","",""],
["베른","back070000","1","저... 저기, 나리?",,"","",""],
["베른","","","흠, 혹시 나리께서 저번에 카르텔 장비 찾으러 갔을 때, 열차 안에 거북이들은 없었수?",,"","",""],
["베른","","","그럼 그렇지. 거북이 놈들, 결국엔 해적들에게 붙어먹었구만!",,"","",""],
["베른","","","뭐, 우리 싸움 잘하시는 나리께서 어련히 알아서 처리하실까. 헤헤.",,"","",""],
["베른","","2","허이구... 이제 거북이가 불쌍해질 지경이네...",,"","",""],
["베른","","","아, 아닙니다요!",,"","",""],
["베른","","1","흠... 복수는 복수지만, 그렇다고 그 가운데 돈 되는 것들을 모른 척 할 수는 없지 않겠습니까요? 헤헤.",,"","",""],
["베른","","","변이된 바다 생물의 비늘 중 어떤 것은 강도가 그 어떤 쇠보다 세다고 합지요.",,"","",""],
["베른","","","그 비늘 좀 구하시면, 다 가지지 마시고 제게도 좀 파슈.",,"","",""],
["베른","","","다 이런 게 상도 아니겠수? 독과점은 비매너입죠~ 헤헤.",,"","",""],
["모험가","","","좋아요. 그럼 대가는 정보로 받겠어요.",,"","",""],
["베른","","","정보? 뭐든지 말만 하슈!",,"","",""],
["베른","","","...황녀? 검은 악몽? 사도? 아이구, 참 살벌한 것만 알고싶어 하는구만. 모험가들은 다 그러시우?",,"","",""],
["베른","","","끄응... 그린 건 내 홍밋거리가 아니라서 잘 모르겠지만... 좋수, 알아보겠수! 그 대신 값은 톡톡히 치를 거요.",,"","",""],
["베른","","2","오오. 요게요게 상품 중에서도 최상품이구만!",,"","",""],
["베른","","1","알았수, 알았수. 이 베른 보네거트, 절대로 물건을 먼저 받고 떼어먹는 짓은 않는다, 이 말이유!",,"","",""],
["베른","","","다른 건 몰라도 사도에 대한 정보는 확실하게 아는 게 있수. 다만 내가 해줄 수 있는 건 어디까지나 소개에 불과하우!",,"","",""],
["베른","","","그래도 어찌나 부산스럽게 움직였는지, 아주 그냥 진이 다 빠져서 못 걷는 줄 알았네! 아주 남는 장사 했다고 생각하슈!",,"","",""],
["베른","back070000","","아, 저기 가시네. 어서 가보슈!",,"","",""],
["운","back070202","1","멈춰라. 왜 따라오는 거지? 신원과 목적을 밝혀라.",,"","",""],
["모험가","back070202","","저는 겐트에서 젤딘 슈나이더 대장님과 함께 싸웠던 모험가 입니다. 의심스러우면 연락을...",,"","",""],
["운","","","...들은 바는 있습니다. 확인되지는 않았지만 일단 그 말을 믿겠습니다. 왜 저를 따라오시는 겁니까?",,"","",""],
["모험가","","","혹시 사도에 대해서 아시는 바가 있나요?",,"","",""],
["운","","","사도에 대한 정보는 규정상 외부인에게 공개할 수 있는 사안이 아닙니다. 돌아가십시오.",,"","",""],
["모험가","","","(베른 아저씨...) ...그러고 싶은데 출발해버렸군...",,"","",""],
["운","back070202","","어쩔 수 없군요. 선장실을 공격할 테니 열차가 멈추면 내리도록 하십시오.",,"","",""],
["모험가","back070203","1","저... 그런데 당신은 누구죠?",,"","",""],
["운","","","...귀하의 목적을 알지 못하는 이상 소속과 직함은 말할 수는 없습니다. 이름은 라이오닐이라고 합니다.",,"","",""],
["모험가","back070203","","(엄청 무뚝뚝하구만...)",,"","",""],
["운","back070204","1","저 자가 해적의 대장인 불꽃방패입니다.",,"","",""],
["모험가","","","혹시 해적 대장을 잡으러 온 건가요?",,"","",""],
["운","","","마음대로 생각하십시오. 저는 공무 수행 중이니 말려들기 싫다면 피해있기를 권고드리겠습니다.",,"","",""],
["운","back070204","2","역으로 귀환하겠습니다.",,"","",""],
["베른","back070000","2","아아, 오셨구만요, 대령님! 해적 대장을 해치우신 겁니까요? 역시 대단하시구만요!",,"","",""],
["운","","","......",,"","",""],
["베른","","","칫, 어린 것이 귀염성은 하나도 없다니까. 에이...",,"","",""],
["운","","","베른 보네거트 씨.",,"","",""],
["베른","","","어이쿠, 깜짝이야! 왜, 왜 그러십니까요, 나리?",,"","",""],
["운","","","공무 수행 중인 군인의 정보를 함부로 누설하지 마십시오. 이번은 구두 경고로 끝나지만 반복될 경우엔 처벌이 뒤따를 것입니다.",,"","",""],
["베른","","","아, 알겠습니다요! 알아듣고 말고요.",,"","",""],
["베른","","","...허참. 진땀 했네. 모험가 나리 때문에 이게 뭔 꼴입니까요?",,"","",""],
["모험가","","","...네?",,"","",""],
["베른","","1","워워, 저한테 화를 내봤자 열차를 타지 못하게 될 뿐입니다요. 그래도 좋으쇼?",,"","",""],
["베른","","","자자, 잘 들어봐요. 저 꼬맹이가 나리께 알려줄 거라고 멋대로 생각했던 건 사과하겠소. 하지만 황녀님의 정보에 대해선 어쩌면 알아낼 수도 있으니 진정하란 말이요.",,"","",""],
["베른","","","이건 꼬맹이 대장이 처리하라며 주고 간 지령서요. 보아하니 보티첼리가 강철비늘 해적단에게 내린 지령서란 말이요.",,"","",""],
["베른","","","이걸 잘 이용하면 어떻게든 모험가 나리가 원하는 정보를 캐낼 수도 있으니 조금만 기다려봐요.",,"","",""],
["베른","","","믿기지 않는다굽쇼? 이리와서 내용을 함 보슈. 내부의 배신자를 찾는 자에게 큰 보상을 내린다고 적혀있죠? 그러니까 그 배신자를 찾을 수만 있다면 짭짤한 보상을 기대할 수도 있지 않겠수? 예를 들면 필요한 정보라든가...",,"","",""],
["베른","","","하지만... 강칠비늘 해적단에게만 내려진 지령이라 인간인 나리가 배신자를 잡아봐야 보상을 줄 것 같지는 않수. 이를 어찌 하면 좋을까...",,"","",""],
["베른","","","아, 그래. 겐트의 세븐 샤즈인가 뭐시긴가 하는 과학자라면 해결책이 있을 거유. 스, 스, 스캔로봇...이던가? 하여간 그것만 있으면 강칠비늘 해적단으로 위장하는 건 쉬울 거요!",,"","",""],
["베른","back070000","","어서 그 스캔로봇을 빌려오슈! 이름이 뭐였더라. 멜빈...이었나?",,"","",""],
["멜빈","back060004","2","연구에 방해되니 물러나있어!",,"","",""],
["멜빈","","","어... 어이! 그 로봇에 손 대지 않는 게 좋을 거야! 손 대지 말라니깐?",,"","",""],
["멜빈","","1","스캔로봇을 빌려달라고? 이 위대한 작품을 빌려달란 말이야?",,"","",""],
["멜빈","","","이건 말이지. 어떤 생물이든 스캔해서 그 스펙을 저장할 수 있는 장치야! 완전 신기하지?",,"","",""],
["멜빈","","","인간이든 적이든 완벽하게 그 수치를 측정해서 연구할 수 있는 데이터를 쌓을 수 있단 말이지. 게다가 그 기술까지 정확하게 입력 가능하단 말씀!",,"","",""],
["모험가","","","끝이 없군... 잠시 빌려갑니다! (슬쩍)",,"","",""],
["멜빈","back060004","","어... 어이!! 내 이야기는 마저 듣고 가!",,"","",""],
["베른","back070000","2","아따, 진짜로 가지고 오셨수? 재주도 좋네!",,"","",""],
["베른","","1","이것을 가지고 마사치오를 스캔한 뒤 초롱이에게 가보슈. 마사치오 인형 옷을 만들 수 있을 겁니다요.",,"","",""],
["베른","back070000","","초롱이에게는 미리 말해두었으니까, 나중에 그 녀석에게 줄 보상이나 챙겨와주슈!",,"","",""],
["초롱이","back070001","2","아, 베른 아저씨에게 들은 대로 마사치오를 스캔해 오셨군요! 조금만 기다리시면 제가 마사치오 인형 옷을 만들어 드릴게요!",,"","",""],
["초롱이","","1","자, 이제 이 변장 옷을 입고 강철비늘 해적단 내부로 잠입해서 배신자를 찾는 거예요!",,"","",""],
["초롱이","back070001","","배신자를 찾으시면 저에게 와주세요! 화이팅~♡",,"","",""],
["","back070205","0","",,"","",""],
["","back070206","0","",,"","",""],
["머맨","back070207","2","마사치오 님?! 설마 내가 해적단의 정보를 말한 걸 눈치채고?",,"","",""],
["머맨","back070207","","으힉! 제발 보티첼리 님에게는 알리지 말아주세요! 술 기운에 조금 말한 것뿐인데...",,"","",""],
["초롱이","back070001","1","배신자에 대한 정보를 챙겼으니 이제 함장실로 들어가 보티첼리에게 알리시면 될 거예요.",,"","",""],
["초롱이","","","그러면 틀림없이 보상을 줄 텐데 그 보상은 꼭 저에게 주셔야 해요! 아셨죠?",,"","",""],
["초롱이","back070001","","연기가 어색해서 들키거나 하시면 안 돼요!",,"","",""],
["","back070208","0","",,"","",""],
["보티첼리","back070209","2","마사치오? 너... 너! 너!!",,"","",""],
["보티첼리","","","오늘따라 잘생겨 보이는군! 그건 그렇고 무슨 일인가?",,"","",""],
["보티첼리","","1","그 입 싼 녀석이 범인이었군!",,"","",""],
["보티첼리","","","역시 넌 내 최측근이다! 앞으로도 그런 배신자를 찾아낸다면 언제든지 척살하도록!",,"","",""],
["보티첼리","","","자! 여기 미끈미끈 부드러운 스페셜 문어를 주마! 특별히 너한테만 주는 거니깐 소문내지 말도록.",,"","",""],
["보티첼리","back070209","","...뭐? 겐트 황녀의 행방? 갑자기 그런 걸 묻다니... 수상한걸? 어디에 정보를 팔려고 하는지 모르겠지만 그런 중요한 사실을 너라고 해서 쉽게 알려줄 수는 없다. 돌아가!",,"","",""],
["초롱이","back070001","2","보상은 어떤 거였나요?",,"","",""],
["초롱이","","1","허어어어억! 이... 이건!",,"","",""],
["모험가","","","왜 그러니? 너무 하찮아?",,"","",""],
["초롱이","","","그... 그렇죠! 고... 고작 문어 따위라니! 이건 별로 돈이 될 것 같지 않네요... 후덜덜...",,"","",""],
["초롱이","","","제가 적당하게 가격을 책정해서 드릴게요.",,"","",""],
["초롱이","","2","이 정도면 충분하죠?",,"","",""],
["초롱이","back070001","","히히히~ 땡 잡았다.",,"","",""],
["베른","back070000","1","어떠쇼? 일이 잘 풀리셨으면 얘기 좀 해주쇼! 궁금해 죽겠네.",,"","",""],
["베른","","","문어를 받았다굽쇼? 허어... 초롱이 녀석한테 가봐야겠구만!",,"","",""],
["베른","","","아아, 그 문어는 정말 벌 거 아니유. 진짜진짜 별 거 아니유. 그런데 그거밖에 못 챙기셨수?",,"","",""],
["베른","","2","해적단이 황녀님의 행방을 알고 있단 말이유?",,"","",""],
["베른","","","흐음... 그럼 저번에 쉬쉬하면서 왔던 게 그거였나... 하도 호들갑을 떨길래 물어봤더니 더 물어보면 죽일 기세여서 암말 못 했던 적이 있었거든요.",,"","",""],
["베른","","","하지만 확실치는 않아요! 확실히 황녀님이라는 걸 알았으면 내가 얘기를 했지. 너무 서두르지 않는 게 좋지 않겠수?",,"","",""],

["","","","",,"","",""]];