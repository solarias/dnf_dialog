﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["모험가","back000000","","오늘은 꽤 늦으셨군요. 뭐, 오기조원으로 내공을 단련하고 있어서 지루하진 않았지만요.",,"","","",""],
["모험가","","","점을 보고 싶으시군요. 그럼 '그대 자신'의 운을 봐주도록 하죠.",,"","","",""],
["모험가","","","모든 사람에겐 내공의 흐름이란 게 있어요. 그 흐름을 파악하고 조절할 수 있다면, 자신의 신체능력을 최대한으로 끌어낼 수 있죠. 자신의 '운'도 예외는 아니지요.",,"","","",""],
["모험가","","","그럼, " + answer_server + " 서버에서 머무르는 그대의 내공을 읽어서 오늘의 컨디션을 봐드리죠.",,"","","",""],
["모험가","","","...",,"","","",""],
["모험가","","","......",,"","","",""],
["모험가","","",".........",,"","","",""],
["모험가","","","" + answer[targeting] + " 그대의 내공을 가장 원활하게 해줄거에요. 자, 내공을 끌어내려면 집중이 필요합니다. 지금부터 잡념은 떨쳐내고, 목표만을 노려보세요!<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];