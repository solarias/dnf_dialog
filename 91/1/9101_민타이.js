﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["민타이","back050001","","어서오세요, 모험가님. 안그래도 찾아뵈려고 했는데 마침 잘 오셨어요.",,"","","",""],
["민타이","","","방금 제 꿈속 친구 바인티가 점괘를 하나 불러줬어요. 바인티가 그 점괘를 꼭 모험가님께 전해달라고 하는 거에요. 영문은 잘 모르겠지만 바인티가 불러줬으니, 분명히 모험가님께 도움이 될 거에요.",,"","","",""],
["민타이","","","제가 그 점괘를 어디에 적어놨거든요. 찾을동안 잠시만 기다려주실래요?",,"","","",""],
["민타이","","","어디보자... " + answer_server +" 서버라고 적어놨었는데...",,"","","",""],
["민타이","","","......",,"","","",""],
["민타이","","",".........",,"","","",""],
["민타이","","","찾았어요, 모험가님! 바로 읽어드릴게요.",,"","","",""],
["민타이","","","" + answer[targeting] + " 모험가님께 좋은 미래를 안겨줄거라고 하네요. 저도 바인티의 말처럼, 모험가님의 미래가 밝아질 수 있도록 열심히 기도할게요.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];