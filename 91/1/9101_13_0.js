﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["모험가","back000000","","점술에 대해 아냐고요? 전 점술은 잘 몰라요. '미래'라면 잘 알지만...",,"","","",""],
["모험가","","","제가 다루는 시간의 퍼밀리어를 쓰면 작은 시간의 균열을 열 수 있어요. 그 균열을 통해 미래를 조금 엿볼 수 있답니다.",,"","","",""],
["모험가","","","그런데 너무 많은 것을 보는 건 꽤 위험하거든요. 그러니, " + answer_server + " 서버의 짧은 미래만 간단히 살펴볼게요.",,"","","",""],
["모험가","","","...",,"","","",""],
["모험가","","","......",,"","","",""],
["모험가","","",".........",,"","","",""],
["모험가","","","" + answer[targeting] + " 앞으로 다가올 '미래'에요. 아, 그런데 너무 짤막하게 봐서 진짜 그랬는지 살짝 헷갈리네요. 부... 분명 맞을거에요. 아마도요.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];