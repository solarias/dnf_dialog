﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["모험가","back000000","","비록 카르텔과 싸우던 중이라 어쩔 수 없었다고 하지만, 내가 바다에 직접 뛰어들 줄은 상상도 못했지.",,"","","",""],
["모험가","","","그리고 그런 높은 곳에서 떨어졌는데 멀쩡히 살아남다니... 아무리 생각해도 난 운이 좋단 말이야. 그런 내가 점을 치면, 꽤 괜찮은 점괘가 나오지 않겠어?",,"","","",""],
["모험가","","","너도 그렇게 생각하는거지? 그럼 내가 고향에서 쓰던 방식으로 " + answer_server + " 서버의 운을 점지해볼게.",,"","","",""],
["모험가","","","...",,"","","",""],
["모험가","","","......",,"","","",""],
["모험가","","",".........",,"","","",""],
["모험가","","","" + answer[targeting] + " 괜찮을 거라고 생각해. 에헴! 나의 점을 믿는 자에겐, 큰 복이 따를 지어니! 그대는! 나의 점괘를 믿겠는가?<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];