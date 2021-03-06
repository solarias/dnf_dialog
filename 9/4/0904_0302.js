﻿var front;
var title;
var text;

front = "backF03";//첫 뒷배경 (.jpg 형식)
title = "영웅의 지하무덤";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["클론터","back030000","","모험가님. 분명 검은 악몽에 대해 조사를 하고 계신다고 하셨지요? 거미왕국에서 낌새를 느낀 적은 없으십니까?",,"","",""],
["모험가","","","거미왕국에서는 검은 악몽이 지나갔다는 느낌은 못 받았어요. 왜 그러시죠?",,"","",""],
["클론터","","","거미왕국에서 일어난 이변을 조사하던 중에 다른 곳에서도 비슷한 일이 일어나고 있다는 것이 확인됐습니다. 저희는 검은 악몽을 직접 겪어보지는 못했기에 조언이 필요합니다.",,"","",""],
["클론터","","","모험가님. 모건이 말하길 아주 믿음직스러운 분이라고 하더군요 이번 사건을 조사하는 데 도움을 주지 않으시겠습니까?",,"","",""],
["모험가","","","모건? 실버크라운의 모건 님을 알고 계시는 건가요?",,"","",""],
["클론터","","","네. 모건은 제 친구입니다. 얼마 전에 모건의 편지를 받고 모험가님이 실버크라운을 도와주신 이야기를 알게 되었습니다.",,"","",""],
["모험가","","","그렇군요. 저도 검은 악몽에 대해서는 확실히 조사하고 싶으니까 협력해 드릴게요.",,"","",""],
["클론터","back030000","","감사합니다. 이 은혜는 반드시...",,"","",""],
["","back030200","0","",,"","",""],
["모험가","back030201","1","누가 쫓아오나 했더니... 또 당신인가요?",,"","",""],
["비올라","back030201","","제가 같이 가면 곤란한 일이라도 있습니까? 당신이 우리 위대하신 조상들의 무덤에서 무슨 짓을 할지 모르니 감시해야겠습니다.",,"","",""],
["7호","back030202","1","악마들이로구나... 내가 다 죽인 줄 알았더니 아직도 남아있었구나...!",,"","",""],
["비올라","back030202","","저 모습은 설마 갈리온 님...? 발록의 침략에서 언더풋을 구하신 분이 어째서...",,"","",""],
["비올라","back030203","1","저 자들은...? 처음 보는 자들이로군요. 그런데 왜 우리에게 적의를 보이는 거죠? 제국의 사술인가...?!",,"","",""],
["비올라","back030204","1","저 분은 설마 드비아나 님?!",,"","",""],
["4호","","","우리의 후손이여... 안식에 잠들었던 우리를 사악한 힘이...",,"","",""],
["4호","","","의식이 점점 흐릿해져 갑니다... 우리를 다시 평안으로 되돌...",,"","",""],
["비올라","back030204","2","있을 수 없는 일이 벌여지고 있군요... 드비아나 님...",,"","",""],
["클론터","back030000","2","죽은 영웅이 깨어나셨단 말입니까? 그렇 수가...",,"","",""],
["클론터","","","그곳은 흑요정의 자랑인 7대 영웅이 묻혀 계시는 곳입니다. 도대체 어떤 사악한 힘이 지하무덤을 휩쓸고 간 것일까요?",,"","",""],
["비올라","","","드비아나 님께서는 다시 평안에 들게 해달라고 부탁하섰습나다. 원인 파악은 나중입니다.",,"","",""],
["클론터","","","그렇지만 거마왕국도 그렇고 사태가 보통 일이 아닙니다. 자세히 조사를 해야...",,"","",""],
["비올라","","","영웅들께서 영면에서 깨신 작금의 사태에서 조사는 무슨 조사란 말입니까! 게다가 지금 언더풋은 여유를 부릴 상황이 아닌 것도 알고 계실 것 아닙니까?",,"","",""],
["비올라","","","저는 사프론 님께 보고톨 드리러 가겠습나다.",,"","",""],
["클론터","","","아니 잠깐만 기다리세요!",,"","",""],
["클론터","","1","아아, 예상대로 되어버렸군요. 원로원이 여왕님께 알리기 전에 먼저 지하무덤의 사건을 묻어버리기로 결정했습니다. 멍청한 자들. 못 본 척 한다고 문제가 사라지는 것도 아닌데...",,"","",""],
["클론터","","","이번 일은 거마왕국 때와는 다름나다. 그곳은 지표에서 가깝기 때문 에 속이는 것이 어려웠지만 지하무덤은 신성시되는 곳이라 다가가는 자도 별로 없습니다.",,"","",""],
["클론터","","","때문에 지금 이 단계에서 없었던 일로 하는 것은 쉬울 겁니다. 게다가 지금처럼 제국에 주의가 쏠린 시기라면 더욱...",,"","",""],
["모험가","","","그곳에 가봤지만 검은 악몽의 기운은 느끼지 못했어요. 하지만 보통 사태가 아니라는 건 확실해요. 원로원이 손을 쓰기 전에 제가 좀더 알아볼게요.",,"","",""],
["클론터","back030000","","감사합니다.",,"","",""],
["모험가","back030205","1","이런... 완전히 이성을 잃었어...",,"","",""],
["3호","back030206","2","악령들이 나를... 아아, 괴롭다...",,"","",""],
["클론터","back030000","2","다녀오셨습니까? 아직 원로원의 경비대원들은 오지 않았습니다. 안의 상태는 어떻습니까?",,"","",""],
["클론터","","","악령... 이라고요? 단순한 악령이 영웅들을 무덤에서 일으킬 수는 없을텐데요. 어쩌면 그 분이 착각을 하고 계시는 걸지도 모르겠습니다.",,"","",""],
["클론터","back030000","","샤란 님께 가서 도움을 요청해야겠군요. 저와 함께... 음? 저기에 왜 사람이 모여있는 거지요?",,"","",""],
["아이리스","back030005","1","여러분. 저의 예언을 들으십시오.",,"","",""],
["아이리스","","","죽은 자가 일어나고 지하에 있던 건물이 솟아오르는 이 모든 괴변은 모두 ’사도’라는 존재 때문입니다.",,"","",""],
["아이리스","","","그들은 이 아라드를 침략하려고 합니다. 이대로라면 사도에게 우리의 목숨과 터전을 빼앗기고 말 것입니다.",,"","",""],
["아이리스","","","여러분. 지금은 서로 미워하고 싸울 때가 아닙니다. 눈을 크게 뜨십시오. 항상 경계하십시오.",,"","",""],
["아이리스","","2","클론터 님이로군요. 저의 예언을 들으러 오셨습니까?",,"","",""],
["클론터","","","이게 무슨 짓입니까? 제국인이 도처에 깔린 상황에서 그렇게 불길한 예언을 하시다니... 거기다가 표류동굴에서 일어나고 있는 이변까지 공개를 해버리다니!",,"","",""],
["아이리스","","","오해가 있으신 것 같군요. 표류동굴에서 클론터 님이 두려워하시는 이변이 일어나고 있다는 사실은 지금 알게 되었습니다. 저는 다만 예언을 말했을 뿐입니다.",,"","",""],
["아이리스","","","보세요. 아직 아무도 표류동굴에 위험이 도사리고 있다고 생각하지 않습니다. 오히려 클론터 님의 말이 새어나가, 소문이 퍼질까 두렵군요.",,"","",""],
["아이리스","","1","그러고보니 이 분은 누구십니까? 클론터 님과 함께 계시는 것을 보면 보통 실력의 모험가가 아니실 것 같습니다만. 혹시 표류동굴의 이변을 밝혀내신 분입니까?",,"","",""],
["모험가","","","말을 잘라서 죄송합니다만 아까 예언에 사도가 언급된 것 같던데, 사도가 죽은 자를 불러 일으켰다는 말인가요?",,"","",""],
["아이리스","","","그렇습나다. 대전이로 인하여 혼란스러워진 이 땅에 검은 악몽을 부르고, 죽은 자톨 일으킨 것은 사도입니다.",,"","",""],
["아이리스","","","아라드의 동식물을 공격하고 메마르게 한 후, 자신들의 배를 불리기 위해 침략해 오겠지요.",,"","",""],
["아이리스","","","제 말이 믿기지 않으시는가 보군요. 그렇다면 진상 조사에 저도 참여시켜주시겠습니까? 제가 헛소문을 퍼뜨린 것이 아님을 보여드리겠습니다.",,"","",""],
["아이리스","","2","역시나... 제 예상대로였습니다.",,"","",""],
["아이리스","","","이것은 전이의 기운이라는 것입니다. 사도가 아라드를 침략하고 있다는 증거이지요.",,"","",""],
["클론터","","","그 낯선 기운이 사도가 침략해 오는 증거라고요? 아이리스 님, 설명을 제대로 해주십시오.",,"","",""],
["아이리스","","","설명을 해드리는 것은 어렵지 않으나... 저를 찾아온 분이 계시는군요.",,"","",""],
["사프론","","1","아이리스. 언더풋에 퍼진 불길한 소문이 당신의 예언 때문이라고 하더군. 제국의 사절단이 머무르고 있는 이 상황에 뭣하는 짓인가?",,"","",""],
["아이리스","","","어서오십시오, 사프론 님. 클론터 님께도 말씀드렸지만 저의 예언은 시처럼 문득 떠올라 불길처럼 확신을 갖는 것. 시의에 맞게 숨기거나 왜곡할 수는 없습니다.",,"","",""],
["아이리스","","","하지만 안심하십시오. 마레리트의 현을 울리게 하는 바람은 단지 시련일 뿐. 결코 멸망이 아닙니다.",,"","",""],
["사프론","back030005","","그 예언을 나에게도 들려주었으면 좋겠군. 무덤의 입구를 봉하자는 원로원의 의견을 물리치고 이곳까지 온 거니까.",,"","",""],
["사프론","back030002","2","전이의 기운이라면 이 언더풋을 땅 위로 끌어올린 대전이를 말하는 건가?",,"","",""],
["아이리스","","","비슷합니다. 대전이 역시 사도가 일으킨 것이니까요.",,"","",""],
["아이리스","","1","전이에 대해 아십니까? 사도가 동식물, 혹은 원령, 심지어 자기 자신을 이 아라드로 이동시키는 것을 말힘니다. 사도처럼 사악하고 강력한 힘을 가진 자만이 가능한 일이지요.",,"","",""],
["아이리스","","","무덤에 나타난 흑요정들은 사도의 세뇌를 받은 자들로, 아라드를 혼란시키기 위한 사도의 계략의 일부입니다.",,"","",""],
["모험가","","","그렇다면 죽은 영웅이 무덤에서 일어난 것은 그들의 짓인가요?",,"","",""],
["아이리스","","","그건 아직 확답을 드릴 수 없습니다. 되살아난 자들에 대해 더욱 알아볼 필요가 있을 것 같군요.",,"","",""],
["사프론","","","지금 언더풋에는 반이라는 인간이 있다. 쥐새끼처럼 눈치가 빠른 놈이지. 그 놈이 있는 한 병사를 섣불리 움직일 수는 없다.",,"","",""],
["사프론","","","모험가. 네놈이 다녀와라. 어차피 모험을 하는 네놈으로서는 우리 조상님을 가까이서 뵐 수 있다는 것 자체가 보상이겠지.",,"","",""],
["클론터","back030002","","모험가님. 기분 나쁘시겠지만 저희를 도와주십시오. 만약 예언이 사실이라면 이 아라드 전체가 위험에 빠지게 됩니다.",,"","",""],
["2호","back030207","1","크헉, 크헉, 헉... 목이 타는 듯이 아프다! 손발이 저릿저릿한다!",,"","",""],
["2호","back030207","","못된 놈들! 나의 마법서는 절대로 넘겨주지 않겠다!",,"","",""],
["아이리스","back030005","2","오염이 많이 되었군요. 잠시 제가 정화를 해보겠습니다.",,"","",""],
["아이리스","","1","모험가님. 혹시 모험을 하다가 이것과 비슷한 기운을 느끼지 못하셨습니까? 잘 살펴보십시오. 죽은 자의 마력 속에 약하게 섞인 어둡고 가라앉은 기운을...",,"","",""],
["모험가","","","(아이리스의 말대로 스할라의 마력덩어리에서 익숙한 무언가가 느껴졌다.)",,"","",""],
["모험가","","","이건 검은 악몽과 비슷하군요!",,"","",""],
["아이리스","","","그렇습니다. 저도 여행 중에 검은 악몽에 붙잡힌 자와 마주친 적이 있기에 알 수 있습니다. 표류동굴 전체가 대전이의 영향을 많이 받았기 때문에 검은 악몽의 자취가 많이 남지 않아 깨닫지 못하신 것이지요.",,"","",""],
["아이리스","back030005","","모험가님의 무기에 안식의 노래를 불러드리겠습니다. 싸움은 피할 수 없겠지만, 그 분들이 다시 헤매는 일이 일어나지는 않을 것입니다.",,"","",""],
["7호","back030208","1","으하하! 길이 보이는구나!",,"","",""],
["6호","back030209","1","흐흐흐... 이번에야말로 진짜인가...",,"","",""],
["5호","back030210","1","율크가 돌아간다!",,"","",""],
["4호","back030211","1","(드비아나는 말없이 꾸벅 인사를 하고 천천히 사라졌다.)",,"","",""],
["3호","back030212","1","어둠을 헤맸지만 그래도 너와 싸울 수 있었음에 감사한다...",,"","",""],
["2호","back030213","1","오오... 오오오오...",,"","",""],
["1호","back030214","1","...베누스 여신이여, 아직도 나를 저주하는가... 여자의 분노는... 참으로 끈질기구나...",,"","",""],
["1호","","2","머나먼 후대인이여. 나를 다시 역사의 모래 속에 묻어주어 감사한다.",,"","",""],
["1호","back030214","","그럼 잘 있거라... 나를 깨운 사악한 목소리도 이제 들리지 않으니...",,"","",""],
["아이리스","back030005","2","다시 죽음으로 향하는 것을 기뻐하섰다니... 그 분들은 죽어서도, 검은 악몽에 휩쓸린 후에도 영웅으로 계섰던 모양이로군오.",,"","",""],
["사프론","","","흥. 위대한 일곱 영웅... 특히 룽겔 님은 우리 흑요정 역사상 가장 위대하신 분이었다. 그 분들이 하찮은 힘에 휘둘릴 리가 없지. 단지 검은 악몽의 사악함에서 우리 불민한 후손을 지키고자 눈을 뜨신 것이다.",,"","",""],
["클론터","","","그렇겠지요. 아무튼 큰일이 벌어지기 전에 수습할 수 있어서 다행입니다. 모험가님과 아이리스 님. 고맙습니다.",,"","",""],
["아이리스","back030005","","저는 한 것이 없습니다. 모든 것은 예언대로 흘러갔을 뿐... 시련을 이겨내신 분은 모험가님이시지요.",,"","",""],
["클론터","back030000","1","줄곧 의문스러웠습나다. 사프론 장로는 왜 이번 일을 막지 않은 것일까요?",,"","",""],
["클론터","","","그는 원로원의 수장입니다. 자존심이 강하고 외부인을 싫어하지요. 여왕님의 언더풋 개방 정책을 가장 반대한 자도 그입니다.",,"","",""],
["클론터","","","그린데 모험가님이 지하무덤에 드나드는 것을 막기는커녕，입구를 폐쇄하자는 원로원을 말리기까지 했습니다. 좀처럼 이해가 가지 않는군요.",,"","",""],
["클론터","","2","모험가님의 눈에 어떻게 비춰졌을지는 모르겠습니다만 그는 방심할 상대가 아닙니다. 당신처럼 어린 분이라면 더더욱 그렇습니다.",,"","",""],
["클론터","","","아이리스 님의 예언이 있었기 때문일까요? 그 분의 말이라면 무작정 믿고 보는 성향이 있으니까요. 하지만 저는 아이리스 님이...",,"","",""],
["클론터","","","...무턱대고 의심할 수는 없겠지요. 그 분 덕분에 대전이 때 언더풋과 표류동글의 흑요정들이 무사할 수 있었으니까요. 하지만 그 분의 예언은 뭔가 걸립니다. 그게 무엇인지는 모르겠습니다만...",,"","",""],
["모험가","","","클론터 님?",,"","",""],
["클론터","","","죄송합니다. 저도 제대로 정리되지 않은 상태에서 모험가님께 괜히 혼란만 드렸군요. 부디 저는 신경쓰지 마시고 모험을 계속해 주십시오.",,"","",""],
["클론터","","","아참. 앞으로 저에게 존칭을 붙이지 마시고 편하게 불러주십시오. 모건의 친구는 저의 친구입니다. 게다가 당신은 언더풋에 큰 공을 세우신 분이니 너무 격식을 차리지 않으셔도 됩니다.",,"","",""],

["","","","",,"","",""]];