﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "정당한 결투 2";//던전 명칭┏ 0 : 이미지 only  //1 : 아래 고정   //2 : 위 고정   //3 : 이동 only┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["하츠","backT02","2","거기, 모험가. 지금 멜트다운으로 들어가는게냐?",,"","",""],
["프리스트남","","","아, 아니... 그냥 산책 중인데? (이런, 들킨 건가?)",,"","",""],
["하츠","","","뭐, 그런 건 아무래도 상관없다. 네녀석에게 부탁이 있다.",,"","",""],
["프리스트남","","","부탁? 제국의 기사가 일개 모험가에게 무슨 용건이지?",,"","",""],
["하츠","","1","여기 들어올 때 네놈을 막아선 꼬맹이를 기억하나? 그 녀석, 요즘 꽤 거만해져서 말이지. 따끔한 맛을 좀 보여줘야겠는데 네녀석이 좀 도와줘야겠다.",,"","",""],
["하츠","","","네 녀석에게 만렙 지원병으로 런처가 하나 있다는 건 이미 알고있다. 그걸 좀 써줘야 겠는데...",,"","",""],
["프리스트남","","1","(부탁을 들어주면 제국가 얽히게 될 거 같은데... 어쩌지?)",[2,5,12],"다시 한번 더 말해줘","부탁을 들어준다","거절한다"],
["","","3","",-1,"","",""],
["프리스트남","","","미안, 잘 못 들었어. 한번만 더 말해줘.",,"","",""],
["하츠","","","얼빠진 녀석. 좋다, 나에게도 필요한 일이니까.",-5,"","",""],
["","","3","",-4,"","",""],
["프리스트남","","1","(그래, 내가 손해보지 않는다면 상관없겠지. 그리고 이참에 그걸 부탁해본다면...)",,"","",""],
["프리스트남","","","좋아. 대신 내 부탁도 들어준다면 말이지.",,"","",""],
["하츠","","","네놈이 나에게? 뭐냐?",,"","",""],
["프리스트남","","","멜트다운을 자유롭게 드나들 수 있게 해줘.",,"","",""],
["하츠","","","부탁한다는 게 고작 그거냐? 흥, 그깟 부탁 따위 들어주지.",,"","",""],
["프리스트남","","","(뭐야, 이 기사양반. 새침데기인가?)",10,"","",""],
["","","3","",-11,"","",""],
["프리스트남","","1","(안돼, 이걸 들어줬다고 다른 걸 또 요구해올지도 몰라.)",,"","",""],
["프리스트남","","","굳이 내가 부탁을 들어줘야 할 이유는 없지 않아?",,"","",""],
["하츠","","","네 녀석이 내 부탁을 거절할 수 있겠느냐?",,"","",""],
["프리스트남","","","(으으으... 갑자기 살기가 뿜어져나올 수 없어. 살기만으로도 제대로 서 있기 힘들어.)",,"","",""],
["하츠","","","흠, 날 나쁜 놈으로 만들지 마라. 네 녀석 부탁 하나정도는 들어주지.",,"","",""],
["프리스트남","","","그, 그럼 멜트다운을 자유롭게 드나들 수 있게 해줘!",,"","",""],
["하츠","","1","부탁한다는 게 고작 그거냐? 흥, 그깟 부탁 따위 들어주지.",2,"","",""],
["","","3","",-19,"","",""],
["하츠","","2","내일 사람을 시켜 그 꼬맹이에게 네가 멜트다운을 드나든다고 알려줄 거다.",,"","",""],
["하츠","","","그 녀석은 자존심 강한 녀석이다. 네 녀석이 조금만 버티면 한 판 싸우자고 덤빌 것이다. 거기에 내가 끼어들면 내 앞에서 싸우자고 제안할 것이다. 네 놈은 그 결투를 받아들이면 된다.",,"","",""],
["하츠","","","그 결투에서 지원병을 사용해라. 내가 정정당당하게 싸우라고 말하겠지만 신경쓰지 않아도 된다.",,"","",""],
["하츠","","","내가 보기에 조금이라도 정정당당해 보이면 그 자리에서 널 처분하겠다.",,"","",""],
["프리스트남","","","잠깐, 정정당당한 결투라고? 지원병을 쓰면 그 녀석이 가만히 있지 않을텐데...",,"","",""],
["하츠","","","그 녀석은 근시다. 네 녀석이 신경 쓸 문제가 아니니 네 자신이나 걱정해라.",,"","",""],
["프리스트남","","","(제국기사가 근시? 제국에선 기사를 무슨 기준으로 뽑는거지?)",,"","",""],
["프리스트남","","","아, 알겠어. 그렇게 하지.",,"","",""],
["하츠","backT02","","흠, 좋다. 이제 갈 길 가봐라.",,"","",""],
["","backMorning","0","",,"","",""],
["레니","backD006","1","네녀석의 근본없는 무술은 나의 완벽한 제국 검법 앞에 무의미하니까!",,"","",""],
["하츠","","","나불나불 시끄럽다!",,"","",""],
["레니","","","넷! 그럼 시작하겠습니다!",,"","",""],
["레니","backD006","","선공 필승! 일격에 널 끝장내주지!",,"","",""],
["프리스트남","","","(하츠가 노려보고 있다. 실수는 용납되지 않는다.)",,"","",""],
["프리스트남","backD006","","받아라, 이것이 나의 일격이다!",,"","",""],
["","backD007","0","",,"","",""],
["레니","backT02","2","으... 으으윽...",,"","",""],
["프리스트남","","1","끝난 건가?",[2,10],"아니, 일어나고 있어!","기절한 거 같은데?",""],
["","","3","",-1,"","",""],
["레니","","","아... 아직이다! 난 더 싸울 수 있어!",,"","",""],
["레니","","","모험가! 네가 뭔 수를 쓰는 지는 모르겠지만 이게 제국기사의 모든 힘이라고 여기지 마라!",,"","",""],
["하츠","","","그렇다. 그 자세야 말로 아이언울프 기사단의 긍지라고 할 수 있다.",,"","",""],
["하츠","","","모험가, 아직 싸움은 끝나지 않았다. 결투를 재개한다!",,"","",""],
["하츠","","","'지원병 사용을 멈추지 마라. 만약 그러지 않는다면...'",,"","",""],
["프리스트남","","","(그만 좀 노려봐. 충분히 무서우니까...)",,"","",""],
["하츠","","","그럼, 결투 시작!",-13,"","",""],
["","","3","",-9,"","",""],
["하츠","","","기절한 모양이군.",,"","",""],
["프리스트남","","","자, 이제 됐지? 이걸로 부탁은 다 들어준거지?",,"","",""],
["하츠","","","흠, 좋다. 이걸로 녀석도 자신의 부족함은 뼈저리게 느꼈겠지.",,"","",""],
["하츠","","","이제 네놈이 어디를 가든 상관하지 않겠다. 이만 꺼져라.",,"","",""],
["프리스트남","","","(끝까지 말투가 더러워. 말투만 고치면 그래도 나쁘지 않은 양반일텐데...)",,"","",""],

["","","","",,"","",""]];