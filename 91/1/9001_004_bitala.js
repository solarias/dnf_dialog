﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "미연시 예시";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["격투가남","backD020","1","아야야, 오다가 넘어져서 다쳤네...",,"","",""],
["격투가남","backD020","1","아, 비탈라다!",,"","",""],
["비탈라","backD021","1","저런, 다치셨군요. 약을 발라드릴까요?",,"","",""],
["격투가남","backD021","1","(어쩌지?)",[2,7],"괜찮습니다. 이정도야 뭘...","그래주시겠어요?",""],
["","","3","",-1,"","",""],
["격투가남","backD021","1","괜찮습니다. 이정도야 뭘...",,"","",""],
["비탈라","","1","어머, 모험가는 강인한 분이시네요. 믿음이 가네요.",,"","",""],
["비탈라","","1","(비탈라의 호감도가 1 상승했다.)",,"","",""],
["격투가남","backD021","1","(나이쓰!)",8,"","",""],
["","","3","",-6,"","",""],
["격투가남","backD021","1","그래주시겠어요?",,"","",""],
["비탈라","","1","그래요, 다친 곳을 자세히 볼게요.",,"","",""],
["비탈라","","1","에이, 별로 크게 다치지도 않았잖아요. 그런 걸로 엄살 피우지 마세요.",,"","",""],
["비탈라","","1","(비탈라의 호감도가 1 감소했다.)",,"","",""],
["격투가남","backD021","1","(시무룩)",2,"","",""],
["","","3","",-12,"","",""],
["슈만","backD022","1","네, 이놈!",,"","",""],
["격투가남","","1","다.. 당신은!",,"","",""],
["비탈라","","1","아버님!",,"","",""],
["슈만","","1","감히 사랑스러운 우리 딸래미에게 손을 대려 하다니!",,"","",""],
["슈만","","1","내 눈에 흙이 들어갈 때까지 절대 허락하지 못한다!",,"","",""],
["격투가남","","1","받아라, 헬터 스켈터!",,"","",""],
["슈만","backD022","1","으악! 눈에 흙이 들어갔어!",,"","",""],
["격투가남","backD021","1","자, 우리 가요! 사랑의 도주를 하는거에요!",,"","",""],
["비탈라","","1","그... 그럽시다!",,"","",""],
["격투가남","","1","하하하!",,"","",""],
["비탈라","","1","하하하!",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],
["","","","",,"","",""],

["","","","",,"","",""]];