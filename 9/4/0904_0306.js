﻿var front;
var title;
var text;

front = "backF03";//첫 뒷배경 (.jpg 형식)
title = "황금왕의 비밀동굴";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["메이아","back030003","","우리에게 발록의 부활을 알리고 도망쳤던 난쟁이 왕의 소재 를 알아냈습니다. 비밀동굴에 숨어있다고 하더군요.",,"","",""],
["메이아","","","이번 표류동굴에서의 혼란을 불러일으킨 죄로 그를 처형해야겠습니다. 모험가여. 그 자가 무슨 일을 꾸미고 있는지 보고와 주십시오.",,"","",""],
["메이아","back030003","","아참. 그곳에 있는 황금은 얼마든지 가져도 좋습니다. 당신이 가지고 올 수 있을만큼 보상을 챙기십시오.",,"","",""],
["","back030600","0","",,"","",""],
["메이아","back030003","2","여전히 황금으로 자신의 석상을 만들며 부를 쌓는데 혈안이 되어있다고요?",,"","",""],
["메이아","","1","정말로 정신을 못 차렸군요. 어리석은 왕을 둔 탓에 고통받는 난쟁이 백성들이 가엾게 여겨질 정도입니다.",,"","",""],
["메이아","","","그런 추악한 욕심덩어리가 있는 한 이 언더풋은 평온해질 수 없습니다. 흑요정과 이곳을 찾는 이종족을 위하여 그들을 모두 없애야겠습니다.",,"","",""],
["클론터","","","기다리십시오, 여왕님. 그들의 잘못은 크지만 멸족은 너무 심한 벌입니다.",,"","",""],
["클론터","","","먼 옛날 우리 흑요정을 타락한 민족이라 하여 구분하였던 요정은 대화재로 인해 멸망했습니다. 그리고 지금, 인간의 제국은 제국만이 중심이라 하여 온 아라드인의 원성을 사고 있지요.",,"","",""],
["클론터","","","여왕님. 휼룽한 지배자가 되기 위해서는 관용 또한 필요한 법입니다. 난쟁이들에 대한 분노는 저 또한 갖고 있습니다만 부디 멸족만은 말아주십시오.",,"","",""],
["메이아","","","...알았습니다. 그러나 그들의 행보를 좌시할 수는 없으니 경고는 해야겠습니다.",,"","",""],
["메이아","","","모험가여. 그대는 가서 황금에 대한 탐욕 때문에 난쟁이들의 편으로 돌아선 람소디아를 쓰러뜨려, 그들에게 우리의 경고를 남겨주십시오.",,"","",""],
["메이아","","2","그런데도 아직 반성하지 않는단 말입니까...",,"","",""],
["메이아","","1","위디르는 황금에 눈이 멀어 자국민은 물론이고 스스로를 파멸의 나락으로 빠뜨린 지 오래되었습니다.",,"","",""],
["메이아","","","베누스의 저주로 더욱 불행해지기 전에 처단하는 것이 훅요정과 난쟁이 모두에게 이로운 일이겠군요.",,"","",""],
["미네트","","","메티.",,"","",""],
["메이아","","","_알고 있습니다 난쟁이들은 왕이 죽으면 뿔뿔이 홑어져 금방 멸종되고 말겠지요. 죽이지는 않되, 영원히 흑요정의 감시 하에 있게 해야겠습니다.",,"","",""],
["메이아","back030003","","모험가여. 그를 쓰러뜨려 이곳으로 끌고와 주십시오. 그대에게 군트람의 축복이 함께하기를.",,"","",""],
["위디르","back030601","1","하하! 누가 감히 이 위디르 님을 막는단 말이냐!",,"","",""],
["메이아","back030003","2","수고하셨습니다. 그대의 친절과 용맹은 모두 기록되었습니다. 그대는 영원히 나의 친구로서 정중한 대우를 받게 될 것입니다.",,"","",""],
["모험가","back030003","","(비밀동굴에 있는 것은 보상으로 챙기라 했으니까 차원의 조각은 내가 가져도 되겠지?)",,"","",""],
["미네트","back030008","","그동안 고마웠어요.",,"","",""],
["모험가","","","(우와, 깜짝 놀랐다...)아, 당신은... 그러고보니 그 때 호신부를 만들어 준 건...",,"","",""],
["미네트","","","여왕님보다도 영향력이 강한 장로에게서 빈틈을 만들고 싶었어요. 제가 본 바로는 이 언더풋에서 당신이 가장 기대할 만하다고 생각했으니까.",,"","",""],
["모험가","","","정말요?",,"","",""],
["미네트","","","아뇨. 실은 당신 말고도 몇몇에게 만들어 주었어요. 실망하셨나요?",,"","",""],
["미네트","","","여왕님도 무사히 돌아오셨으니 저는 이제 다시 앞으로 나서지 않을 거예요. 다시 그림자 뒤에 숨기 전에 인사를 하고 싶었어요. 고마워요. 당신은 지켜보기에 꽤 즐거운 사람이었어요.",,"","",""],
["모험가","","","...칭찬인가...?",,"","",""],

["","","","",,"","",""]];