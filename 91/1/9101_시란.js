﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["시란","back080001","","방금 점을 보고 싶다고 말했나? 미래는 어찌 될지 모르니 마음껏 살아라 내가 말했나 안했나?",,"","","",""],
["시란","","","아직 잘 모르겠나? 그럼 이거 다시 줄테니 함 까봐라.",,"","","",""],
["시란","","","" + answer_server +" 서버라고 적혀있제? 그거 까고 내한테 온나.",,"","","",""],
["시란","","","<span class='green'>(짤그랑짤그랑)</span>",,"","","",""],
["시란","","","<span class='green'>(짤그랑짤그랑)</span>",,"","","",""],
["시란","","","까봤나? 거기 뭐가 들었더노?",,"","","",""],
["시란","","","\"" + answer[targeting] + " 가장 길하다\"라고 적힌 쪽지가 들어있더나? 닌 그게 나올 줄 알았나? 인생이란게 그런기다.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];