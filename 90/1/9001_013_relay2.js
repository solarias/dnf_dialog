﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "릴레이소설 2nd";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["니베르","back090001","","화단에 자갈을 골라내고 꽃을 좀 심어야 겠는데, 병사들은 부상이 심해서 일 시키기 힘들겠군.",,"","","",""],
["니베르","","","콘, 비연! 임무다! 지금부터 화단에서 자갈을 골라내도록!",,"","","",""],
["콘","","","자갈을 골라내기 귀찮으니 자갈을 모래로 ↑+↑+↓+↓+z...",,"","","",""],
["콘","","","게이볼그 펀치!!!!!!! ",,"","","",""],
["비연","","",".....대체 너 지금 뭐 하는 거야..?? ",,"","","",""],
["콘","","","어쩔 수 없잖아. 난 한.가.지. 기술밖에 사용할 수 없다고. 이게 내가 할 수 있는 최선의 '자갈 골라내기'야. ",,"","","",""],
["비연","","","하아... 그보다 중장님. 꽃이라는 건 이 \"비명초 씨앗\"입니까? ",,"","","",""],
["니베르","","","....? 베히모스에서 자라기로 유명한 식물이 왜 여기에 박혀있는거지? 설마......!! ",,"","","",""],
["비연","","","중장님, 누가 비명초를 심었는지는 모르겠지만 위험해보니 뽑아버려도 괜찮겠습니까? 이 꽃을 심은 자가 오기 전에 얼른 처리해버리죠. ",,"","","",""],
["니베르","","","아, 그거 잭터 이글아이 사령관께서 직접 심으신 건ㄷ..<span class='green'>(쑤욱)</span>",,"","","",""],
["니베르","","","......늦었나?",,"","","",""],
["의문","","","(비명초) <span class='yellow'>캬아야카야악야아!</span>",,"","","",""],
["잭터","","","하하하하하핫. 참으로 재.미.난 일들을 하는구먼. 나도 껴주게나.",,"","","",""],
["잭터","","","하급장교 시절에는 내가 병사들과 뽑은 풀로 산맥을 이루었지. 뭐하고 서있는겐가? 이참에 전 대대 풀뽑기를 해봅세.",,"","","",""],
["잭터","","","저런저런. 농담이었네. 하하핫. 하지만 다음부턴 잡초인지 관상용인지 구별은 해야할것이야? 병참장교는 잠시 나좀 보도록.",,"","","",""],
["니베르","back090001","","그나저나 여긴 목이 타는군. 콜라나 한잔...(빈 지갑을 본다) ",,"","","",""],
["마티어스","back090003","","저런, 목이 마르신가요? 요즘 보급으로 들어오는 콜라도 미지근해서 영 별로죠? 크레인 뽑기로 차가운 콜라를 뽑아보세요!",,"","","",""],
["마티어스","","","거기다가 오늘은 특별히 크레인 게임 딱지 1장을 공짜로 드립니다! 자, 망설일 이유가 없죠? ",,"","","",""],
["니베르","","","음... 돈은 황궁 예산에서 나중에 빼서 주지. 일단 한판 해볼까...",,"","","",""],
["니베르","","","음? 실수로 정체불명의 항아리를 뽑았네. <span class='green'>(항아리 안의 물건을 본다)</span> 이 이상한 가죽옷은 뭐야? <span class='green'>(그러고는 택틱 상의를 버린다)</span> 왜이리 안뽑히나...",,"","","",""],
["니베르","","","<span class='green'>(1시간 후)</span> 이거 사기 아니...핫! ",,"","","",""],
["반","","","심심한데 서로의 비밀을 커밍아웃하는 자리를 가져볼까? ",,"","","",""],
["니베르","","","아니 Van님, 이 야심한 밤에 어쩐일로.. ",,"","","",""],
["반","","","어이, 니베르 거기 떨어진 골드 좀 주워주게 ^^ ",,"","","",""],
["니베르","","","아니 그건 VAN님이 주우시지요. 전 준★장 입니다. ",,"","","",""],
["젤딘","","","(니베르 준장님께 작전 보고를 할려고 왔다가 뭔가 엄청난걸 목격해버렸다) ",,"","","",""],
["리아","","","꺅♡ ",,"","","",""],
["반","","","등짝.. 등짝을 보자!! 콘도 궁금해 하더라구!!  ",,"","","",""],
["콘","","","이미 봤는데?",,"","","",""],
["반","","","Ang? ",,"","","",""],
["콘","","","이 7개의 아이스크림 콘을 모음으로써 나는 오메가 콘이된다 ",,"","","",""],
["콘","","","<span class='green'>(오메가 콘이 울부짖었다.)</span>",,"","","",""],
["유르겐","back090003","","하하, 동맹군끼리 사이가 좋은 모습 보기 좋습니다. ",,"","","",""],
["에르제","back090005","","헐, 개꿀잼! <span class='green'>(팝콘을 뜯어먹으며)</span>",,"","","",""],
["에르제","back060005","","이런, 카라멜 팝콘이 아니질 않느냐. 팝콘을 사온 자를 불러라.",,"","","",""],
["란제루스","","","어이어이, 황녀아가씨. 우리사이에 이러지 말자구.",,"","","",""],
["디스트로이어","","","법♂규↘",,"","","",""],
["게쉔그리건","","","<span class='green'>(에르제를 사랜에게 밀어버리며)</span> 란제루스님은 내 것이다!",,"","","",""],

["","","","",,"","",""]];