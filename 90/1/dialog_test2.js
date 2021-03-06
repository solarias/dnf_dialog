var front;
var title;
var text;




front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "시궁창 쟁탈전";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정
text = [//이름//뒷배경 (.jpg 형식)//특수코드//대사
["하츠","backD003","","늦지 않게 도착했군. 진을 치도록 하지."],
["레니","","","전군, 여기 '시궁창'에 주둔지를 배치한다! 금일 경비를 맡은 자는 입구를 봉쇄하도록!"],
["경비병","","","넷!"],
["하츠","","","어이, 꼬맹이! 신입인 네가 누구에게 명령을 하는게냐!"],
["레니","","","하지만, 제가 아이언울프 기사단 부단장님의 부관이지 않습니까?"],
["하츠","","","네가 내 부관이라고? 너 같은 애송이가?"],
["레니","","","단장님께서 전날 휴가가기 전에 절 부단장님의 부관으로 지목하셨습니다."],
["하츠","","","그럼 원래 있던 부관 녀석은?"],
["레니","","","...단장님께서 어떻게 하신 듯 한데 딱히 말씀은 없으셨습니다. 대신, '반발하거든 나에게 일러둬.'라는 말도 전하시랍니다."],
["하츠","","","그 인간... 그저 날 약올리려고 그런 짓을... 내가 아버님 말씀 때문에 고분고분 따른다는 걸 알고서..."],
["귀검사여","","","멈추시오!"],
["귀검사여","","","여기는 모험가길드의 주둔지요! 아무리 제국이라고 할 지라도 함부로 들어와서는 안됩니다!"],
["하츠","","","짜증나 죽겠는데 무슨 일이냐?"],
["레니","","","저희가 여기 오면 안된다는데요?"],
["하츠","","","안된다고? 분명히 우리가 올 거란 사전통보가 왔을텐데..."],
["하츠","","","네 상관을 불러와라. 긴히 할 말이 있다고 전해라."],
["귀검사여","","","당신네들이 무슨 생각을 하던 간에 얼른 이 곳에서..."],
["귀검사여","","","다... 당신은..."],
["하츠","","","내 말이 안 들리느냐!"],
["다나","","","밖이 시끄럽군요. 대체 무슨 일이지요?"],
["하츠","","","당신이 이 자들의 대장인가?"],
["다나","","","보아하니 제국에서 온 모양이군요. 모험가님, 잠시 물러서세요."],
["귀검사여","","","네, 네..."],
["다나","","","말씀하신대로 제가 여기를 책임지는 자입니다. 모험가길드의 부길드장, 다나 도나텔이라고 합니다."],
["다나","","","저희는 이 곳에서 대전이로 급격히 증가한 몬스터들을 퇴치하기 위해 이곳에 파견을 나왔습니다. 제국은 여기서 발을 뺀 걸로 압니다만..."],
["하츠","","","오늘부로 다시 이 곳의 경비는 제국이 담당하기로 했다. 사전 통보를 받지 못했나?"],
["다나","","","그런 말은 듣지 못했습니다만..."],
["하츠","","","그럴 리가 없다! 물러나기 싫어서 헛소리를 하는 게 아니냐?"],
["다나","","","저희 모험가 길드를 제국과 같은 취급은 하지 말아주시지요. 저희가 없다면 정말로 없는 일입니다."],
["하츠","","","... 사실 네녀석들이 들었든 못들었든 상관없다. 이미 명이 떨어진 이상 말을 듣지 않는다면 손을 쓰는 수밖에..."],
["다나","","","어머, 무서워라. 고작 이런 일로 병사들을 동원하시겠다는 건가요? 제국 체면이 말이 아니로군요."],
["하츠","","","병사들은 필요없다. 나 혼자서 여길 쑥대밭으로 만들어주지."],
["다나","","","여긴 대전이로 폐허가 된 마을입니다. 이런 곳을 더 어지럽히는 짓은 저희가 용서하지 못할 것입니다. 그렇다고 저희가 싸웠다간 이 마을에 폐를 끼치는 건 마찬가지겠지요."],
["다나","","","그럼 이렇게 하지요. 각 측에서 가장 약한 자들끼리 결투를 벌이고 패배한 측이 물러서는겁니다."],
["하츠","","","가장 약한 자들간의 결투라고? 어디서 되도 않는 망발을 일삼는 것이냐?"],
["다나","","","저희는 경험이 적은 모험가들을 적극적으로 지원합니다. 저희 모험가길드와 함께하는 모험가라면 아무리 약한자라도 빠르게 성장하기에 절대 얍보셔는 안될 것입니다."],
["다나","","","제국측의 기사 육성제도도 훌륭하다는건 익히 알고 있습니다. 만약 이 싸움을 거절한다면, 제국은 기사들의 명예를 저버리고 웃음거리가 되겠지요."],
["레니","","","받아들이시면 안됩니다! 늘 하시던 대로 귓등으로 들으시고 필살기를 날리십시오!"],
["하츠","","","... 아무리 나라도 내가 몸바쳐 일하는 제국에 먹칠을 할 수는 없지. 데 로스 제국은 아라드 최강이다. 그런 제안을 한 걸 후회하게 해주지..."],
["레니","","","안돼, 넘어가고 마셨어..."],
["다나","","","이걸로 결투는 성사되었군요. 그럼 저희 측에서 가장 낮은 레벨의 모험가를 데려오겠어요. 모험가님."],
["귀검사남","","","오우, 드디어 이 몸이 나설 때가 온 겁니까, 도나텔님?"],
["귀검사남","","","간다! 오버드라이브!"],
["다나","","","... 싸움이 시작되기 전에는 MP를 아끼십시오. 결투 중에는 물약은 쓸 수 없습니다."],
["귀검사남","","","죄, 죄송합니다."],
["다나","backD003","","저희가 한적한 곳에 결투 장소를 마련하겠습니다. 출전할 자가 결정되면 알려주십시오."],
["","backF02","0",""],
["레니","backD004","1","부, 부단장님? 왜 제가 나가는 거죠? 저보다 약한 자가 있을텐데..."],
["하츠","","","급히 조사해본 결과 네가 25레벨로 가장 레벨이 낮은 걸로 드러났다. 경비병도 어제 버닝이라고 30레벨 찍었다고 하더군. 수행을 게을리 하지 말라고 그렇게 일렀거늘..."],
["하츠","","","걱정 마라. 레벨은 중요하지 않다. 제국의 검술은 독보적고, 저들의 싸움법은 조잡하다. 하찮은 모험가따윈 한 번에 베어버려라!"],
["레니","","","... 네! 제 싸움을 지켜봐주십시오!"],
["다나","","","단판 승부입니다. 기력이 다해 쓰러지거나 기권하는 자가 패배하는 것으로 하지요."],
["다나","","","비겁한 짓을 하면 저희가 용서하지 않겠습니다."],
["하츠","","","재미없는 소리 하지마라. 너희가 그런 짓을 한다면 살아돌아갈 생각하지 마라."],
["다나","","","모험가 길드의 명예를 걸도록 하지요. 그럼 시작!"],
["귀검사남","","","좋아, 간다! 으아~~~~~~~~~~~!"],
["레니","","","뭐지, 처음부터 큰 걸로 나가는 건가? 아무리 그래도 25레벨인데..."],
["귀검사남","","","~~~~~~지원병!"],
["만렙지원병","","","게일포스!"],
["게일포스","","","게일포스, 작동 개시."],
["귀검사남","","","휴, 도나텔 님 말이 맞았어. 진작에 MP를 다 썼다간 지원병을 부르지 못했을거야."],
["레니","","","아니, 저 금속덩어리가... 움직여?"],
["레니","","","부단장님! 저들이 비겁한 수를 씁니다! 당장 결투를 중단시켜야..."],
["다나","","","지원병 시스템입니다. 먼저 성장한 모험가가 늦게 성장한 모험가를 돕기 위해 자신 고유의 기술로 지원을 하는 체계이지요."],
["다나","","","이 지원병 시스템은 저희 모험가 길드에서 체계를 완성하고, 제국에서도 정식으로 허가한 기술입니다. 설마 제국사람이 이걸 모르진 않으시겠지요?"],
["레니","","","저, 전 그런 거 들어본 적이 없습니다!"],
["하츠","","","... 분명 지원병 시스템은 결투에서 사용이 가능한 정당한 기술이다. 하지만 제국 검술에서는 그 기술에는 결점이 있다는 이유로 사용을 금지하고 교본에도 나와있지 않지. 모를 만도 하지."],
["하츠","","","이런 수를 쓸 거라고 미리 예상했어야 하는데, 방심했군..."],
["귀검사남","","","하하하! 이렇게 내 인생 첫 승리를 하게 되다니! 자, 가라!"],
["게일포스","","","목표물 탐색 개시."],
["레니","","","어, 어떡하지? 저거 엄청 강해 보이는데..."],
["귀검사남","","","나의 승리는 결정된 셈이군. 어차피 지원병이 싸워줄 테니 알트 텝하고 잠시..."],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],
["","","",""],





["","","",""]]