﻿var front;
var title;
var text;

front = "backF02";//첫 뒷배경 (.jpg 형식)
title = "구 시가지";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//특수코드//대사//이동//선택 1//선택 2//선택 3
["패리스","back020000","","제국의 기사하고 씨워서 이겼다며? 네 이야기가 쫙 퍼졌어. 아，그런 재있는 일이 있으면 먼저 나한테 말하러 왔여아 할 거 아나. 쳇.",,"","",""],
["모험가","","","하하... 그건 그렇고 패리스. 할 말이 있여요.",,"","",""],
["모험가","","","여기 처음 올 때만 해도 검은 악몽에 대해서는 그저 미리 알아뒤서 만약의 사태가 났을 때 대처하기 좋도록 준비하는 게 좋을 거라고 생각했지만...",,"","",""],
["모험가","","","검은 악몽의 피해가 이렇게 엄청난 줄은 몰랐네요 암므를 조종하여 실버크라운을 위험하게 만든 것도 위험한 일이었지만, 이곳에서 벌어지는 일은 더욱 끔찍하고 규모도 큰 것 같더군요.",,"","",""],
["모험가","","","검은 악몽에 대해서는 지금처럼 뒤늦게 대처하는 것이 답이라고 생각하지 않아요. 좀더 확실하게 원인을 알아봐야할 것 같아요.",,"","",""],
["패리스","","","그래. 나도 그 실체만 알면 조각조각 내고 으깨버러고 말 거야. 진짜 열받는고.(패리스가 바드득 소려를 내며 이룰 악물었다.)",,"","",""],
["패리스","","","아아. 기왕 이렇게 말 나온 거 너도 더 조사에 볼래? 제국의 방해도 없이졌겠다, 이젠 당당히 드나들여도 될 거 같으니 구 시가지로 한번 가봐.",,"","",""],
["패리스","back020000","","기기는 헨돈마이여의 중심지였지. 대전이의 영향도 많이 받았고 사람도 많았던 만큼 네가 건질 것도 많지 않을까 싶은데.",,"","",""],
["","back020400","0","",,"","",""],
["패리스","back020000","1","얼굴을 보니 그곳의 정체를 안 것 같구만? 그래. 거긴 원혼들이 떠 돌고 있는 도시야.",,"","",""],
["패리스","","","잘난 놈들이 비싼 옷을 입고 거들먹거리고, 나 같은 녀석들은 뒷골목에서 살던 시끌벅적한 마을은 이제 유령 도시가 되어버렸지.",,"","",""],
["패리스","","","전에 어떤 점성술사 여자가 말하길 그곳에 있는 원혼들은 대전이 때 회생된 놈들이래. 그런데 자기 힘으로도 쉽게 성불시키지 못한다고 하더라.",,"","",""],
["패리스","","","실버크라운에 갔올 때 수호자 여자한대 말에보니 워낙 죽은 사람이 많은 곳이라 떠돌고 있는 혼들도 엄청난 곳인데... 기기에 검은 악몽의 영향까지 뒤집어 씨서 그럴 거라고 하더군.",,"","",""],
["패리스","","","달랠 방법을 아직도 찾지 못했나고? 나한테 물여봤자... 네가 볼 때 내가 그런 거 알게 생겼나?",,"","",""],
["패리스","","","정 궁금하면 달빛주점의 여자한테 가서 물어봐. 요정이라 나이도 많을 테니 늙은 만큼 뭐도 많이 알겠지.",,"","",""],
["슈시아","","2","이서와요. 술이라도 한 잔 들겠어요?",,"","",""],
["슈시아","","1","구 시가지의 원혼들을 성불시킬 방법이라... 그런 게 없지는 않지만...",,"","",""],
["세리아","","","모험가님 여기 게시나요? 잠깐 자리를 비운 사이에 돌아오셨다기에... 어머?",,"","",""],
["슈시아","","","어머나... 세리아! 오랜만이로구나. 여긴 어쩐 일이니? 내가 이곳예서 잘 나가지 않는 바람에 널 못 볼 뻔했구나.",,"","",""],
["세리아","","","오랜만이에요, 슈시아 님. 저는 실버크라운에서 모험가님의 도움을 받고 저도 무언가 도울 일이 없을까 해서 함께 모험을 다니고 있답니다.",,"","",""],
["슈시아","","","그래... 의지할 사람을 찾았다니 다행이구나.",,"","",""],
["슈시아","","","그래, 세리아가 있다면 모험가님이 말한 것도 불가능하지만은 않을 거예요.",,"","",""],
["슈시아","","","일단 매개체를 만드는 건 도울게요. 당신은 재료를 가저다줘요.",,"","",""],
["슈시아","","2","가지고 왔군요. 편하게 쉬면서 기다려줘요.",,"","",""],
["세리아","","1","슈시아 님께 구 시가지의 사정에 대해 들었어요. 이곳에 올 때부터 슬픈 메아리가 들린다 싶었는데 그런 일이 있었을 줄이야... 정말 가슴이 아프네요.",,"","",""],
["세리아","","","이건 저와 슈시아 님이 함께 만든 종이에요. 이걸 이렇게 들고 기도를 하면...",,"","",""],
["세리아","","","(세리아의 손이 빛나는 듯하더니 반짝이는 빛 알갱이가 종 속에 스며들었다.)",,"","",""],
["세리아","","","하아, 하아... 아... 어떻게 된 걸까요...? 원혼들을 위해 기도를 했을 뿐인데...",,"","",""],
["슈시아","","","세리아가 실버크라운에 맡겨지기 전까지는 제가 돌보고 있었답니다. 이 아이는 어릴 때부터 신비한 힘이 있었어요. 본인은 마음대로 쓰지 못한는 듯 하지만, 제어만 할 수만 있다면 모험가님에게 큰 도움이 될 거에요",,"","",""],
["슈시아","back020000","","자. 구 시가지에 가서 원혼들에게 이 종소리를 들려줘요.",,"","",""],
["세리아","back000000","2","종을 울려주셨나요? 슈시아 님 말씀처럼 제게 힘이 있는지는 모르겠지만 구 시가지 쪽에서 들려오던 메아리가 작아진 기분이 들어요.",,"","",""],
["세리아","back000000","","부디 아름다운 증소리가 죽은 자의 영혼에 따스한 위안이 되었기를...",,"","",""],
["패리스","back020000","1","구 시가지에 있던 놈들이 다 죽은 건 아냐. 몇몇은 게속 거기에 머무르면서 우리 쪽에 정보를 전해주곤 했어.",,"","",""],
["패리스","","","구 시가지에서 생존자들과 접촉해봐. 그 녀석들은 우리보다도 검은 악몽에 대해 잘 알고 있을 거야.",,"","",""],
["브리즈","","","패리스 요즘 이상한 소문을 들었어. 녀석들이 우리 쪽 애들이나 제국군을 공격해 온대.",,"","",""],
["패리스","","","정말이야? 제길, 제국군이 움직이기 전에 소문부터 확인해야겠군.",,"","",""],
["패리스","back020000","","우리도 따로 찾아볼 테니까 너도 그 녀석들을 찾아줘. 헛소문이길 바라지만 넋놓고 있다가 뒷통수 맞지 말고.",,"","",""],
["모험가","back020401","1","거기, 누구 없어요?",,"","",""],
["레드릭","","","괴...물... 죽이겠다!",,"","",""],
["모험가","back020401","","아, 잠깐 기다려요!",,"","",""],
["셰널","back020402","1","죽은 이들의 복수를 해주겠어!",,"","",""],
["모험가","back020402","","이런 저 사람도... 제정신이 아닌 것 같은데...",,"","",""],
["패리스","back020000","2","우리 쪽에선 못 찾았어. 네 쪽은 이때?",,"","",""],
["패리스","","","소문이 사실이었다고? 제기랄.",,"","",""],
["패리스","","1","생존자들의 대장은 붉은 팔 부슬리라는 녀석이아. 귀검사인데，수완이 좋아서 우리한테도 꽤 도음이 되었지.",,"","",""],
["패리스","","","가보라고 한 것도 그 녀석이 있기 때문이었어. 하지만 네 말올 들으니 그 녀석도 멀쩡할지 모르겠는걸...",,"","",""],
["패리스","back020000","","가서 찾아보고, 그 녀석마저 제정신이 아니라면 녀석의 노트를 찾아봐. 뭔가 단서를 남겨놨을지도 몰라.",,"","",""],
["부슬리","back020403","1","...리아... 엘...리아...",,"","",""],
["모험가","back020403","","귀수...! 하지만 사람의 모습이 아니야?",,"","",""],
["패리스","back020000","2","인간의 모습이 아니었다고? 도대체 무슨 일이 있었던 거지... 검은 악몽은 살아있는 사람의 모습마저 바꿔버릴 정도의 힘이 있다는 말인가?",,"","",""],
["하츠","","","그럴 리가 없잖나. 멍청하군.",,"","",""],
["패리스","","1","언제 온 거야? 기사 나으리. 볼 일 없으니 꺼져.",,"","",""],
["하츠","","","나 역시 네놈들에게 볼 일은 없다. 하지만 부슬리라는 남자의 기록에 대해서는 관심이 있다.",,"","",""],
["하츠","","","모험가. 그 공책을 나에게 넘겨라.",,"","",""],
["패리스","","","누구 맘대로 내놔라 머라야? 앙?",,"","",""],
["하츠","","","명령을 듣지 않겠다는 건가? 배짱이 있는 놈은 좋아하지만 과연 네놈들이 내 앞에서 고집을 부릴 수 있나?",,"","",""],
["모험가","","","(분하지만, 이 남자를 상대로 저항해봤자 소용이 없을 것 같다. 이쪽이 떼로 덤벼도 절대로...)",,"","",""],
["하츠","","2","...(하츠는 공책을 대충 훑어보더니 갑자기 북북 찢어 던져버렸다. 바람을 타고 증이조각이 휙 날아가버렸다.)",,"","",""],
["모험가","","","무슨 짓이야?",,"","",""],
["하츠","","","조금이라도 도움이 될까 했는데 시간 낭비로군. 공국의 놈들은 하나같이 근성이 없는 건가? 부하가 그 지경이 될 때까지 머물러 있었다면 조금이라도 쓸모 있는 내용을 적으란 말이다.",,"","",""],
["모험가","","","내용이 뭐지?",,"","",""],
["하츠","","","나에게 대답을 요구하는 건가? 배짱은 인정하겠다만 모험을 지하에서 끝내고 싶지 않다면 나에게 말하는 태도를 고치는 게 좋을 거다.",,"","",""],
["하츠","","","(그리고 하츠는 나 따위는 위협도 안 된다는 듯 몸을 돌려 가버렸다. 직접 씨워보진 않았지만 그의 말대로 일방적인 결과가 나올 것이 뻔히 보여서 아무 말도 할 수 없었다.)",,"","",""],
["샤일록","","","에고... 원래 낡은 종이였던지라 이 상태라면 읽기는 글렀구만요.",,"","",""],
["샤일록","","","그래도 방법이 아에 없는 건 아닙죠! 제국군에 들키면 안 되니 이쪽으로 와주시죠.",,"","",""],
["샤일록","","1","어이구, 어찌나 손아귀 힘이 좋은지 종이가 아주 휴지가 되어버렸군요. 이대로라면 안에 있는 정보는 다 없어질 겁니다요.",,"","",""],
["샤일록","","","저라면 남아있는 종이를 대충 복원할 수 있습죠.",,"","",""],
["샤일록","","","하지만 재료가 필요합니다요. 좀 가져다 주시면 제가 작업을 해드립죠.",,"","",""],
["샤일록","","","그리고 수고비도 종 필요합니다요. 하지만 모험가님은 제 은인이니까 큰 맘 먹고 딱 반으로 잘라드립죠. 어떻습니까?",,"","",""],
["샤일록","","","돈이 될 이야기가 있는데 어떠십니까? 제 은인인 모험가님게만 알려드리는 겁니다요.",,"","",""],
["샤일록","","1","듣자하니 구 시가지에 있는 괴물들이 질 좋은 갑옷을 차고 다닌다면서요? 그걸 제게 가져 다 주시면 좋게 쳐드립지요.",,"","",""],
["샤일록","","2","이게 바로 바람직한 협조 관계가 아니겠습니까? 여기 있습니다.",,"","",""],
["샤일록","","1","찢어진 종이를 깔끔하게 붙이는 데는 보통 접착제로는 붙일 수가 없습니다요. 구 시가지에 플랜트들의 찐득찐득한 접착액이 제격이습죠.",,"","",""],
["샤일록","","","그걸 가져와 주시면 제가 깔끔하게 복구해 드립죠. 거기다 보수도 조금 챙겨 주신다면야 품질이 더 졸아질 수 있지 않겠습니까요? 헤헤헤",,"","",""],
["샤일록","","2","제가 아주 새 공책으로 만들어 드립죠.",,"","",""],
["샤일록","","1","가지고 오셨구만요. 그럼 이렇게 저렇게 해서... 보십쇼! 몇 페이지는 읽을 만해졌지요?",,"","",""],
["샤일록","","","친절한 서비스! 확실한 신용 보증! 앞으로도 많은 이용 부탁드립니다요. 헤헤.",,"","",""],
["패리스","","1","뭐? 그걸 가지고 가서 찢여버렸다고? 아오... 다친 애들만 없었으면 당장 가서 뒷통수를...",,"","",""],
["패리스","","","후우, 후우. 아 정말 나 성질 많이 죽였다. 그래도 페이지를 몇 장 살렸다며? 무슨  내용이야?",,"","",""],
["패리스","","","일기인가? 날짜를 보니 우리랑 마지막으로 본 날 이후네...",,"","",""],
["패리스","","","...에서 둘아온 이후 몸이 좋지 않다. 동료들은 지금이라도 시궁창으로 가자고 하지만 아무리 생각해도 희귀병에 걸린 것 같다. 당분간은 사람들과 접촉을 피하는 게 좋겠다.'",,"","",""],
["패리스","","","셰넬의 기억에 이상이 있는 것 같다. 나도 마찬가지다. 자꾸 자신이 무엇을 하고 있었는지 잊이버린다...'",,"","",""],
["패리스","","","이게 마지막 날짜인가? '제정신으로 글을 쓰는 건 이게 마지막일 것 같다. 내 몸이 괴물로 변하고 있다. 나는 이대로 어떻게 되는 것일까. 두렵다. 엘리아, 제발 나를 지켜...'",,"","",""],
["패리스","","","도대체 무슨 말이아? 부술리가 병에 걸린 끝에 괴물이 되었다는 거야? 여디에 갔다온 건데? 아오, 중간 내용이 없으니 답답해 죽겠네!",,"","",""],
["패리스","","","뭔지는 모르겠지만 구 시가지에는 들이가지 않는 게 좋겠다. 너도 이제 들어가지 마. 부슬리가 더디에 가서 무슨 병에 걸렸는지는 모르겠지만 가까이 가서 좋올 것 같지는 않아.",,"","",""],
["패리스","","","우려가 원하던 정보는 찾지 못했지만 내 감으론 이것도 검은 악몽 못지 않게 중요한 단서가 될 거 같아. 그러니 너무 기죽지 말라고.",,"","",""],

["","","","",,"","",""]];