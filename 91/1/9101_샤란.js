﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["샤란","back030004","","무슨 일이시죠, 모험가님? 지금은 마법 학교 일로 좀 바빠서, 간단한 부탁이 아니면 들어드리기 힘들겠네요.",,"","","",""],
["샤란","","","점을 쳐보고 싶으시다고요? 정 급하시다면, 점술 족보를 써보시는 게 어떠신가요? 사실 그거 제가 만들었거든요. 생각보단 쓸만할겁니다.",,"","","",""],
["샤란","","","역시 그걸로는 성이 안 차시는 모양이군요. 그럼 여기 마법구슬을 하나 드릴게요. 거기에 모험가님의 '소망'을 최대한 채워서 가져오세요. 어떻게 채우는지는... 자주 해보셔서 잘 아실거라 믿어요.",,"","","",""],
["샤란","","","채워오셨군요. 그럼 이 마법구슬을 통해 " + answer_server +" 서버의 점을 쳐보겠습니다.",,"","","",""],
["샤란","","","...",,"","","",""],
["샤란","","","......",,"","","",""],
["샤란","","",".........!",,"","","",""],
["샤란","","","" + answer[targeting] + " 모험가님의 소망을 이루어줄 거라는군요. 모험가님께서 소망을 절실히 담아오셨다면, 이 점괘는 분명히 도움이 될 거에요.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];