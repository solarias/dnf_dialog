﻿var front;
var title;
var text;

front = "backJum";//첫 뒷배경 (.jpg 형식)
title = "오늘의 던파 운세";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3//선택 4 (대사위치 2번 한정)
["키리","back030021","","거기 지나가는 모험가, 너무 멋진걸? 그런데 무기가 좀 빈약해보이네. 조금만 강화하면 참 번쩍번쩍하고 멋질텐데 말이야.",,"","","",""],
["키리","","","악마의 유혹이라고? 에이, 무슨 섭섭한 소리를 하는거니. 내가 선물 하나 줄 테니 앞으로 그런 이야기 하지 마.",,"","","",""],
["키리","","","그래, 내가 구운 쿠키야. 사실 그건.... 어머, 한 번에 먹어버렸어? 그거 운세 쪽지가 들어있는 포춘 쿠키인데...",,"","","",""],
["키리","","","괜찮아, 그거 하나 삼켰다고 죽진 않으니까. 위로의 의미로 하나 더 줄게.",,"","","",""],
["키리","","","<span class='green'>(우두둑)</span>",,"","","",""],
["키리","","","그래, 거기에 \"" + answer_server +" 서버\"라고 적힌 쪽지가 있지? 한 번 읽어볼래?",,"","","",""],
["키리","","","" + answer[targeting] + " 가장 괜찮을거라고? 잘 됐네! 그럼 가기전에 축원을 위해 강화 한번 해 보는게 어때?<br/><br/><span class='green'>(다른 결과를 보시려면 \"첫 화면으로 돌아가기\"를 클릭하세요)</span>",,"","","",""],

["","","","",,"","",""]];