﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["모험가","back000000","","어서오세요. 오늘도 위대한 의지를 찾기 위한 모험을 떠나는 건가요?",,"","","",""],
["모험가","","","점을 먼저 봐야겠다고요? 으으음... 꼭 필요한 거라고 말하신다면, 제가 한 번 해볼게요.",,"","","",""],
["모험가","","","하느님, 부처님, 칼로소님... " + answer_server + " 서버의 운세를 알려주세요. 오늘의 운세는...",,"","","",""],
["모험가","","","...",,"","","",""],
["모험가","","","......",,"","","",""],
["모험가","","",".........!",,"","","",""],
["모험가","","","" + answer[targeting] + " 괜찮아 보여요. 자, 점도 봤으니 이제 사명을 이루기 위해 움직여볼까요?<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];