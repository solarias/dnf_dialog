﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["클론터","back030000","","점을 보려 오셨군요. 그러면 흑요정 대대로 내려오는 점성술로 점을 봐드리겠습니다.",,"","","",""],
["클론터","","","제가 아는 친구가 흑요정 황실 점성술사로 일하고 있거든요. 그 친구에게 어젯 밤 별자리로 오늘의 운세를 알려달라고 하겠습니다.",,"","","",""],
["클론터","","","부담 가지실 필요 없습니다. 실은 저도 마침 궁금한 참이었거든요. 서버 이름만 알려주시면, 바로 다녀오도록 하지요.",,"","","",""],
["클론터","","","" + answer_server +" 서버로군요. 잠시만 기다려주십시오.",,"","","",""],
["클론터","","","(클론터가 라미나비엔토를 타고 어디론가 날아갔다.)",,"","","",""],
["클론터","","","(잠시 후 클론터가 종이 한 장을 가지고 돌아왔다.)",,"","","",""],
["클론터","","","오래 기다리셨습니다. 결과를 알려드리죠.",,"","","",""],
["클론터","","","" + answer[targeting] + " 가장 길하다고 나왔군요. 그럼 행운을 빌겠습니다, 모험가님.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];