﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["아간조","back050002","","모험가 자네, 방금 점을 쳐보고 싶어서 날 찾아왔다고 그랬나? 아무래도 그걸 듣고 온 모양이군.",,"","","",""],
["아간조","","","비명굴에서 록시를 잃은 이후로... 난 한동안 방황하면서 지냈네. 그리고 어떻게든 록시를 되살려보겠다고 온갖 미신과 점술에 손을 대봤지. 그 뒤, 한 가지 안 사실이 있네.",,"","","",""],
["아간조","","","바로 점술은 한 번 사용하면, 그 뒤로 효능이 줄어든다는 걸세. 내가 아는 점술이란 점술은 다 쳐봤고, 그래서 지금은 딱히 해줄만한 게 없네. 되풀이해봐야 효력도 없을테고.",,"","","",""],
["아간조","","","그래도 점을 보고 싶나? 정 그렇게 원한다면... 딱 하나 남은 점술이 있네. 아무 종이에다가 " + answer_server +" 서버라고 적어서 나에게 줘보게.",,"","","",""],
["아간조","","","그 종이를 앞으로 날려서...",,"","","",""],
["아간조","","","<span class='yellow'>환영검무! 으아아아아!</span>",,"","","",""],
["아간조","","","자, 종이가 갈기갈기 찢어진 게 보이지? 그 조각을 세서, 요즘 유행하는 점술 족보에 맞춰보면...",,"","","",""],
["아간조","","","" + answer[targeting] + " 좋다고 나와있군. 조금 이상해보여도, 이게 내가 아는 마지막 점술이었으니 이해해주게.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];