﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["골드크라운","back110501","","뚠뚜루~ 뚜루뚜루뚠뚜루~! 방문을 환영합니다, 바깥세계의 모험가님! 제 마술쇼를 보러 오셨나요?",,"","","",""],
["골드크라운","","","진짜로요? 진짜로 제 마술을 보러 왔다고요?! 루크 님을 만나러 오셨으면 고이 재워드렸을텐데, 진짜 손님이 찾아올 줄이야.",,"","","",""],
["골드크라운","","","그래도 수천년동안 루크 님 보좌만 하다가 난생 처음으로 진짜 공연을 하게 되다니... 참 기분이 묘하네요. 그럼 제 정성을 담아 딱! 한번만 " + answer_server +" 서버의 마술점을 쳐드리죠.",,"","","",""],
["골드크라운","","","아, 제 마술은 여러분 세계에서 끌어모은 엄청난 양의 빛 에너지를 사용하니 이해해주시길 바래요~",,"","","",""],
["골드크라운","","","<span class='green'>(휘리릭~)</span>",,"","","",""],
["골드크라운","","","<span class='green'>(휘리릭휘리릭~)</span>",,"","","",""],
["골드크라운","","","<span class='green'>(휘리릭휘리릭휘리릭~)</span>",,"","","",""],
["골드크라운","back110501","","" + answer[targeting] + " 좋다고 하네요. 제 마술점을 봐주셨으니, 이번엔 곱게 보내드릴게요. 또 오시면 그땐 진짜로 쓰러뜨릴거에요!<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];