﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["에르제","back060005","","고얀지고, 왜 이제야 과인을 찾아왔단 말이냐. 모험가 그대를 얼마나 찾고 있었는데...",,"","","",""],
["에르제","","","실은 오늘 아침 마를렌이 포춘쿠키를 구워왔는데, 그걸 보니 모험가 그대에게 나눠주고 싶어서 이리 급히 불렀느니라.",,"","","",""],
["에르제","","","이 포춘쿠키에는 <span class='yellow'>길흉(吉凶)</span>이 적힌 쪽지가 들어있느니라. 포춘쿠키로 오늘의 운세를 점쳐보는 것도 괜찮지 않겠는가.",,"","","",""],
["에르제","","","심려치말게. 마를렌의 요리솜씨는 황실에서도 유명하니 먹으라고는 하지 않겠네. 과인이 직접 포춘쿠키를 개봉해서 쪽지를 그대에게 읽어주겠네.",,"","","",""],
["에르제","","","그 전에 길흉점에 대해 들어보겠느냐?",[7,2],"바로 포춘쿠키를 개봉한다","설명을 듣는다","",""],
["에르제","","3","",-1,"","","",""],
["에르제","","","이 포춘쿠키에서 나올 수 있는 길흉(吉凶)은 총 11가지일세. 높은 것부터 차례대로 <span class='yellow'>대대길, 대길, 중길, 소길, 말길, 평, 말흉, 소흉, 중흉, 대흉, 대대흉</span>으로 구성되어있네.",,"","","",""],
["에르제","","","그리고 각 길흉의 확률은 <span class='yellow'>표준정규분포</span>와 비슷하다네. <span class='yellow'>말길(末吉), 평(平), 말흉(末凶)</span>이 가장 많이 나오고, <span class='yellow'>대대길(大大吉), 대대흉(大大凶)</span>은 꽤 보기 힘들다고 할 수 있네.",,"","","",""],
["에르제","","","그리고 가장 중요한 건 마음가짐이네. 예로부터 <span class='yellow'>\"길즉대흉(吉則大凶), 흉즉대길(凶則大吉)\"</span>이라는 말이 있지. 길(吉)하다고 나와도 경계를 늦추지 말고, 흉(凶)하다고 나와도 액땜했다고 생각하고 너무 서러워하지 마시게.",,"","","",""],
["에르제","","","이제 과인이 할 말은 다 했네. 이제 포춘쿠키를 개봉해보겠네.",4,"","","",""],
["에르제","","3","",-6,"","","",""],
["에르제","","","그대의 뜻이 그러하다면... 그럼 포춘쿠키를 개봉해보겠네.",2,"","","",""],
["에르제","","3","",-8,"","","",""],
["에르제","","","<span class='green'>(오도독오도독)</span>",,"","","",""],
["에르제","","","<span class='green'>(뚜두둑)</span>",,"","","",""],
["에르제","","","길흉점이 나왔네. 뭐가 나왔을 거 같나?",,"","","",""],
["에르제","","","" + answer_fortune + "이 나왔느니라. 어떤 결과가 나왔든, 그 결과를 너무 맹목적으로 믿지 말고 유연하게 대처하는게 중요하느니라.<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];