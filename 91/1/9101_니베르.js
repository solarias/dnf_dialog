﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["니베르","back090001","","어서오십시오. 그렇지 않아도 심심하던 차에 오늘의 운세나 보려고 했는데 잘 오셨습니다.",,"","","",""],
["니베르","","","이 운세 잡지가 비록 싸구려긴 해도, 이거 덕분에 대박이 터진 적이 많아 자주 이용합니다. 모험가님도 해보시겠습니까? 그럼 서버 이름이 필요한데...",,"","","",""],
["니베르","","","" + answer_server +" 서버로군요. 지금 바로 확인해보죠.",,"","","",""],
["니베르","","","...",,"","","",""],
["니베르","","","......",,"","","",""],
["니베르","","",".........",,"","","",""],
["니베르","","","" + answer[targeting] + " 가장 좋을 거라고 나오는군요. 분명 거기에서 대박이 터질겁니다. 믿으셔도 좋습니다.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];