﻿var front;
var title;
var text;

front = "backF02";//첫 뒷배경 (.jpg 형식)
title = "절망의 체스판";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["알베르트","back020001","","여기 있었니? 너한테 좋은 소식이 있어.",,"","",""],
["알베르트","","","구 시가지 너머로 새로운 지역이 발견되었다는 소식이야. 무너진 길이라 막다른 곳인 줄 알았는데 폐허 너머로 숨겨진 마을이 있었나봐.",,"","",""],
["알베르트","","","그런데 꽤 심상찮은 분위기인가봐. 정찰 나갔던 녀석이 불길해서 그냥 돌아왔다고 하더군.",,"","",""],
["알베르트","back020001","1","구 시가지에서 가까운 곳이니까 검은 악몽에 관해서도 조사할 수 있지 않을까? 샛길을 가르쳐 줄 테니 갔다와봐.",,"","",""],
["","back020500","0","",,"","",""],
["일리아","back020501","1","안녕하세요.",,"","",""],
["모험가","","","예, 안녕하세요.",,"","",""],
["일리아","","","당신은 이 세계의 모험가지요? 이곳저곳을 다니며 소문을 듣고 많은 사람을 만나고... 혹시 '칼로소'라는 존재에 대해 알고 있나요?",,"","",""],
["모험가","","","그게 누구죠?",,"","",""],
["일리아","","","... 역시 이곳도 마찬가지군요 칼로소 님에 대에 아는 사람은 우리밖에 없는 거군요.",,"","",""],
["일리아","","","그 애 말이 맞았군요... 갑자기 불러세워서 죄송해요. 그럼 이만...",,"","",""],
["모험가","back020501","","(이상한 사람이군...)",,"","",""],
["알베르트","back020001","2","다녀왔냐? 웬 여자애를 봤다고? 예뻐?",,"","",""],
["알베르트","","1","그런 여자애는 처음 들어보는데. 아, 그것보다 전에 언더풋으로 보냈던 샘플에 대한 답신이 왔어.",,"","",""],
["알베르트","","","검은 악몽의 영향에 더 오래 노출된 녀석들 쪽은 노화가 빨라졌다고 하더라고. 블랙모스가 썩은 곳으로 간 건 세력을 빨리 불리기 위해서였던 게 아닐까.",,"","",""],
["로엘","","","세력? 무슨 세력?",,"","",""],
["알베르트","","","아, 깜짝이야. 머리 위에서 침 튀기면서 말하지 마! 기껏 세팅한 머린데 더럽게시리...",,"","",""],
["로엘","","","제국의 이야기를 하고 있었던 거냐?",,"","",""],
["알베르트","","","아니라고! 아, 진짜... 난 씻으러 가봐야겠다. 네가 이 녀석 상대 좀 하고 있어.",,"","",""],
["로엘","back020001","","왜 혼자 짜증내는 거지 저 녀석? 어쨌든 너 제국군하고 싸웠던 모양인데, 나하고 애기 좀 하자.",,"","",""],
["로엘","back020005","2","너도 당해봤겠지만 건방진 제국 놈들 거들먹거리는 꼴이 열받잖냐? 그 놈들의 혼쭐을 낼 사람들이 있다면 넌 어떡할래?",,"","",""],
["모험가","","","(굉장히 단도직입적인 사람0|로군-)혼쭐을 낼 사람이라면 레지스탕스를 말하는 건가요?",,"","",""],
["로엘","","","학 너 어떻게 그걸 아나? 설마 독심술을...",,"","",""],
["로엘","","","아, 아냐! 내가 레지스탕스에 대해서 말하려는 게 아냐! 그냥 어떻게 아냐고 물어본 거라고!",,"","",""],
["로엘","","","지나가다가 들었다고? 도대체 어디서 정보가 새어나간 거지... 나는 아닐 테고, 루드밀라인가? 하여간 그 여자는 입만 살아선 비밀 유지도 못하는구만!",,"","",""],
["로엘","","1","제국군이 왜 이 마을에 있는지 아냐? 검은 악몽을 조사하기 위해서다. 가장 많은 영향을 받은 이곳에서 원리를 알아내려는 거지.",,"","",""],
["모험가","","","흠. 제국도 검은 악몽의 피해를 막기 위해 애쓰고 있다는... 그런 이야기는 아닌 것 같군요, 역시.",,"","",""],
["로엘","","","그럴 놈돌이 아니다! 그놈들은 포악한 놈들이다. 늘 주의하고 조심해라. 이 경고를 해주고 싶었다.",,"","",""],
["모험가","","","그런데 왜 나한테 그런 애기를 하죠? 저기 서있는 제국 기사한테 고자질을 히면 당장에 당신을 잡아가둘 텐데.",,"","",""],
["로엘","","","엥!? 너 제국 가사랑 싸웠잖아. 제국 싫어하는 거 아냐?",,"","",""],
["모험가","","","(단순하달까, 순진하달까...) 뭐, 확실히 제국이랑 협조할 생각은 없긴 해요.",,"","",""],
["로엘","","","하하하! 당연하지! 내가 눈여겨 본 녀석인데! 그럼 제국 놈들에게 정보를 빼앗기지 않도록 잘 움직이라고!",,"","",""],
["모험가","","","(제국군은 검은 악몽으로 무언가를 할 생각인가... 하긴 단순히 주민 보호를 하는 것으로는 보이지 않았어.)",,"","",""],
["모험가","back020005","","(제국군은 아직 그 마을에 대해 모를 테니 들이닥차기 전에 먼저 조사를 해볼까.)",,"","",""],
["모험가","back020000","2","(석상들은 아무래도 검은 악몽과 직접적으로 관련이 있는 것 같진 않군... 이전까지 공통적으로 느꼈던 수상한 기운이 느껴지지 않아.)",,"","",""],
["모험가","","","(그럼 누가 조종하고 있는 건가? 어찌면 암므 때와 마찬가지로...)",,"","",""],
["하츠","back020000","","또 네놈인가. 생쥐처럼 바쁘게 잘도 돌아다니는군.",,"","",""],
["하츠","back020003","1","네놈이 어디서 무얼하든 관여하지 않겠다고는 했지만 허튼 생각을 하고 있어서는 곤란하다.",,"","",""],
["하츠","","","최근 제국에 반항하는 불순한 무리들이 활개를 차고 다닌다고 한다. 그에 대해 들은 바가 있으면 당장 불어라.",,"","",""],
["모험가","","","부탁하는 입장에서 엄청 잘난 태도네. 난 들은 거 없어. 있다고 해도 당신한텐 말하기 싫어지는군.",,"","",""],
["레니","","","이 녀석이 어디서... 부단장남께 말버릇이 그게 뭐냐!",,"","",""],
["하츠","","","네놈이야말로 닥쳐라.",,"","",""],
["하츠","","","모험가. 네놈이 시궁창의 쥐가 되는 것은 자유다. 그러나 나의 적으로 설 생각은 하지 않는 것이 그 비루한 명줄을 이어가는 길일 거다.",,"","",""],
["모험가","","","(이 숨도 못 쉴 것 같은 살기... 진짜다. 정말 꼬투리라도 잡히면 큰일 나겠어.)",,"","",""],
["모험가","back020003","","... 제국이든 뭐든 상관 없어. 나는 그저 내 목적을 위해 모험 중이니까 방해나 하지 말아줘.",,"","",""],
["모험가","back020502","1","휴우. 겨우 떨쳐냈나...",,"","",""],
["루터","back020503","1","여어. 자네가 요새 시궁창에서 유명하다는 그 모험가인가? 감히 제국 기사에게 말대꾸를 하고, 결투에도 응한다던 무서운 줄 모른다는 풋내기 모험가 양반.",,"","",""],
["루터","","","나는 캡틴 루터라고 한다. 싫어하는 건 제국이고 반항아를 좋아하지. 자네, 혁명에 관심이 있나?",,"","",""],
["루터","","2","한 번쯤 돌어봤을 거라고 생각하네만, 레지스탕스에 대해서 알고 있나?",,"","",""],
["루터","","","자신들의 넓은 영토에 만족하지 않고 점점 영역을 넓히며 모든 것을 지배하려고 하는 잔인한 나라, 데 로스 제국의 침략 행위에 저항하는 자들일세.",,"","",""],
["루터","","","자네도 모험을 하면서 제국의 만행을 보았고 또 보게 될 거라고 생각하는데, 어떤가? 우리와 함께 엄청난 모험을 하지 않겠나?",,"","",""],
["모험가","","","레지스탕스에 가입해서 제국에 반기를 들라는 건가요?",,"","",""],
["모험가","","","확실히 제국군이 하는 짓은 마음에 들지 않아요. 하지만 굳이 레지스탕스에 들어서 귀찮은 일에 휘말리는 건 사양하고 싶군요.",,"","",""],
["루터","","","이봐, 젊은 친구. 자네처럼 깡 있고 실력 있는 모험가가 시시한 인생에 만족하지는 않을 것 아닌가? 그리고 지금 당장 우리의 동료가 되어달라는 건 아니야. 천천히 생각해봐도 되네.",,"","",""],
["루터","","","좋아좋아. 나를 의심하고 있군. 그럼 우리 쪽 패를 보여주지. 우리가 정말로 진지하게 제국을 거꾸러뜨릴 생각을 하고 있다는 증거톨 보여주면, 자네도 우리에 대한 의심을 풀겠지?",,"","",""],
["루터","","","하지만 이 패를 보게 되면 우리는 자네를 계속 주시하게 될 거야. 흑시 제국에 접근해서 불어버린다면 보복을 받을지도 모르지.",,"","",""],
["루터","back020503","","그걸 명삼하고 달빛 주점의 여주인 슈시아 양에게 ’세인트혼의 선장 루터가 보냈다'고 말하라고. 겁이 나면 이대로 도망쳐도 돼. 어떤가?",,"","",""],
["슈시아","back020004","1","어서 와요. 오늘도 모험 이야기를 들려주실 건가요?",,"","",""],
["모험가","","","오늘은 다른 이야기 때문에 왔어요. 세인트혼의 선장 루터가 여기로 오라고 해서 왔습니다만...",,"","",""],
["슈시아","","","어머나, 당신이...",,"","",""],
["슈시아","","","그렇군요. 당신이라면 어쩌면, 이라고 생각했지만 정말 이렇게 올 줄이야.",,"","",""],
["슈시아","back020004","","그럼 안으로 들어가봐요. 문은 내가 열어줄 테니...",,"","",""],
["스카디","back020006","1","모험가여, 반갑습니다. 저는 벨마이어의 여왕, 스카디입니다.",,"","",""],
["스카디","","","제가 살아있어서 놀라신 모양이로군요. 대전이때 저는 죽은 것으로 알려져 있었지만 이렇게 살아있습니다. 캡틴 루터의 도움 덕분이지요.",,"","",""],
["스카디","","","동료들로부터 당신의 이야기는 계속 듣고 있었기에 만나뵙기를 희망 하고 있었습니다.  벨마이어 공국의 백성들을 도와주셔서 정말 감사합니다.",,"","",""],
["모험가","","","아, 여기가 옛 헨돈마이어 부근이라면 분명 벨마이어 공국의 수도... 그런데 왜 숨어계시는 거죠? 제국이 점점 벨마이어령을 침범해 오고 있다던데 밖으로 나와서 대항해야하는 게 아닌가요?",,"","",""],
["루터","","","지금 우리 힘으로는 제국의 암살자를 막을 수가 없기 때문이지.",,"","",""],
["루터","","","미안하군. 자네와 헤어진 후 계속 뒤를 밟고 있었어. 권유해 온 주제에 미안하지만 제국에 고해바치면 곤란하니까.",,"","",""],
["모험가","","","그렇군요. 그럼 0|제 저한테서 뭘 바라는 거죠?",,"","",""],
["루터","","","계속 모험을 해주길 바라네. 말했잖아? 당장 레지스탕스에 들어오지 않아도 좋다고. 자네만 좋다면, 제국 편으로 배신하지 않는 한 서포트틀 할 생각일세.",,"","",""],
["모험가","","","실력 있는 모험가를 키워서 아군으로 만들 생각인가요? 적으로 돌아설 수도 있을 텐데.",,"","",""],
["스카디","","","그런 위험은 이미 각오하고 있습니다. 하지만 제국의 속셈을 알게 된다면 적어도 적이 되실 분은 적을 거라고 생각합니다.",,"","",""],
["모험가","","","그런가요? 흠. 여왕님께 무례하게 들릴 수도 있겠지만 그쪽이 저를 시험해본다면, 저도 그쪽을 시험해보고 싶군요.",,"","",""],
["모험가","","","캡틴 루터와 만난 그곳의 비밀을 알아내고 싶어요. 도와주실 수 있나요?",,"","",""],
["루터","","","좋아. 함께 머리를 짜보지. 하지만 우리는 그곳에 대해 하나도 몰라. 자료가 될 만한 정보를 가져와주게. 협조자로서 당연한 요청이지?",,"","",""],
["루터","","1","나도 그곳을 슬쩍 보기는 했는데 체스말과 비슷한 석상들이 움직이더군. 그것부터 조사하는 게 좋지 않을까?",,"","",""],
["루터","","2","좋아, 어디 보여주게.",,"","",""],
["스카디","","1","그런 상황이라면 석상을 움직이는 매개체가 있지 않을까요? 그것도 함께 조사해주시면 감사하겠습니다.",,"","",""],
["스카디","","2","처음 보는 보석이로군요. 낯선 기운이 느껴집니다.",,"","",""],
["스카디","","2","수고 많으셨습니다. 다친 곳은 없으산가요? 이 가게의 주인이 만든 약은 아주 잘 듣는답니다.",,"","",""],
["스카디","","1","캡틴과 함께 살펴보니 그 석상들은 강력한 마력으로 조종당하고 있는 것 같습니다. 이 일대에 나타난 검은 악몽과는 다른 힘인 것 갈더군요.",,"","",""],
["스카디","","","가져와 주신 보석 조각은 그저 힘을 전달하는 매개체일 뿐입니다. 분명 그 안쪽에 석상을 조종하는 강력한 주술사가 있을 것입니다.",,"","",""],
["스카디","back020006","","보석을 따라 안쪽으로 가보십시오. 그리 먼 곳에 있지는 않을 것입니다.",,"","",""],
["클라라","back020504","1","나를 만나러 오셨나요? 나는 클라라... 사랑을 노래하는 소녀.",,"","",""],
["클라라","back020504","","당신과 함께 춤을 추고 싶어요. 라라랄랄랄라~",,"","",""],
["스카디","back020006","2","그 석상들을 조종하는 것이 설마 인형이었을 줄이야...",,"","",""],
["스카디","","1","에전에 어떤 사악한 주술에 대해 들은 적이 있습니다. 죽은 자의 혼을 석상에 씌워 경비병으로 사용한다는 이야기였습니다. 모험가님의 말씀을 들으니 그 이야기가 떠오르는군요.",,"","",""],
["루터","","","내가 보기엔 이 주변을 가득 채우고 있는 다른 원혼과 마찬가지로 대전이 희생자의 영혼이 거기에 빙의된 것 같아.",,"","",""],
["루터","","","모험가 자네는 그곳에서 검은 악몽의 기운을 느끼지 못했다고 했지? 하지만 검은 악몽은 육체가 있는 생명체에만 영향을 끼치는 게 아니야.",,"","",""],
["루터","","","그 영혼이 인형에 빙의된 것도, 석상을 조종하게 된 것도 모두 검은 악몽에 의한 변이 때문일 거야.",,"","",""],
["스카디","","","그렇다면 큰일이군요. 지금은 석상을 조종하며 여왕 놀이에 심취해 있는 듯합니다만 마을까지 범위를 넓히려 들면 희생자가 나올 것입니다.",,"","",""],
["스카디","back020006","","모험가님, 그 전에 인형을 막아주세요.",,"","",""],
["클라라","back020504","1","당신은 나의 왕자님? 아니면 나의 시종? 누구든지 좋아요. 나와 함께 춤춰요!",,"","",""],
["클라라","","","춤추고 춤추고 춤취서 나를 빼고 행복하게 사는 저 사람들을 모두 밟아버려요!",,"","",""],
["클라라","","","그들의 피로 술잔을 채우고, 그들의 비병으로 연주를 하고!",,"","",""],
["클라라","","","자신들의 행복에 나를 끼워주지 않는 저들을 석상 속에 가두어요!",,"","",""],
["클라라","","2","누구든 좋아요. 내게 사랑을 줘요.. 나는 여기에 있어요. 함께 가줘요...",,"","",""],
["클라라","back020504","","나는 클라라.. 당신을 위해... 춤추는 인형... 늘 혼자... 기다려도... 오지 않... 어두워...",,"","",""],
["스카디","back020006","1","그 인형에 것든 영혼도 대전이 때 아픔을 겪었겠지요. 왜 아라드 대륙에... 벨마이어에... 이런 아픔이...",,"","",""],
["모험가","","","(이런 곳에 숨어있는 중에도 기품을 잃지 않던 여성이 슬퍼하는 모습을 보면서 정말로 이 사람이 한 나라의 여왕일 거라고 믿게 되었다.)",,"","",""],
["스카디","","","... 슬퍼하고 있을 때가 아니겠지요. 대전이는 이미 벌어진 일이지만 검은 악몽과 제국의 위협은 현재도 계속되고 있습니다.",,"","",""],
["스카디","","","인형의 여왕이 겪은 슬픔을 백성들이 겪게 할 수는 없어요. 모험가님, 계속 검은 악몽을 조사해 주십시오. 더 큰 비극이 벌어지는것은 막아야합니다.",,"","",""],
["루터","","","나도 부탁하지. 제국은 검은 악몽의 힘을 이용할 셈이야. 그들보다 먼저 검은 악몽에 대해 파악을 해두어야 해.",,"","",""],
["루터","","","우리도 나름대로 조사를 할 테니 자네도 새롭게 알게 된 게 있다면 전해주게나.",,"","",""],

["","","","",,"","",""]];