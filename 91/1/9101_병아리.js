﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["병아리","back000001","","감히 이 병아리 더 치킨 님에게 \"점\"을 부탁하다니, 죽고싶은거냐, 삐약?",,"","","",""],
["병아리","","","뭐, 전에 내 부하를 구해준 적이 있으니 한 번만 부탁을 들어주지, 삐약. 서버를 불러봐라, 삐약.",,"","","",""],
["병아리","","","" + answer_server +" 서버라고 했나, 삐약? 웃기는 이름이군, 삐약. 잠깐만 기다려봐라, 삐약.",,"","","",""],
["병아리","","","...",,"","","",""],
["병아리","","","......",,"","","",""],
["병아리","","",".........",,"","","",""],
["병아리","","","" + answer[targeting] + " 네 녀석이 놓치지 말아야 할 다음 목표다, 삐약. 그럼 꺼져라, 삐약.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];