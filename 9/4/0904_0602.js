﻿var front;
var title;
var text;

front = "backF06";//첫 뒷배경 (.jpg 형식)
title = "겐트 동문";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["베릭트","back060003","","흠. 이보게 젊은이. 최근 들어 동문 외벽 바깥쪽이 꽤 시끄러운 것 같지 않나?",,"","",""],
["베릭트","","","이상한 모터 소리도 들리고 말이지. 아무래도 지젤 놈이 새로 조직한 기동대라는 놈들이 가까이 온 것 같아.",,"","",""],
["베릭트","","","말 대신 시끄러운 오토바이를 우르르 타고 다니는 골 빈 녀석들이지.",,"","",""],
["베릭트","back060003","","자네가 나가서 상황을 좀 살펴보고 젤딘에게 상황을 전하게. 쯧쯧... 그 선머슴 이마에 주름이 또 늘겠구만.",,"","",""],
["","back060200","0","",,"","",""],
["젤딘","back060002","2","뭐라고요? 그게 정말입니까? 아직 방화병 놈들이 저지른 만행을 채 수습하지도 못했는데... 정말 큰일이군요.",,"","",""],
["젤딘","","1","아무래도 모험가님의 말씀대로 적의 기동대가 도착한 것이 맞는 것 같습니다.",,"","",""],
["젤딘","","","하지만 현재 황도군의 상당 병력은 지금 내벽 수리 공사에 투입되어 있어 싸울 준비를 채 마치지 못한 상황입니다.",,"","",""],
["젤딘","","","모험가님. 부디 놈들의 침투를 저지하여 저희가 대응할 시간을 벌어주지 않으시겠습니까?",,"","",""],
["젤딘","","2","시간을 벌어주신 덕분에 간신히 적을 맞아 싸울 준비를 갖추었습니다. 전장으로 다시 나설 수 있겠군요. 감사합니다.",,"","",""],
["젤딘","","1","황도군의 지원이 없는 상황에서 홀로 적과 대치하느라 피곤하셨을 겁니다. 장시 피곤을 풀며 다음 전투에 대비해 주십시오.",,"","",""],
["젤딘","back060002","","아, 마를렌 님께 가보시는 것은 어떻습니까? 모험가님께 필요한 물품을 지원해 주실 수도 있을 것입니다.",,"","",""],
["마를렌","back060001","2","어서오십시오. 모험가님이 오신 후에 황도군의 분위기가 달라졌다고 하더군요. 감사합니다.",,"","",""],
["마를렌","","1","함께 올라오신 반 님을 찾으시나요? 모험가님이 카르텔과 싸우시는 동안 전선을 둘러본 후 아라드로 내려가셨습니다.",,"","",""],
["마를렌","","","적의 규모를 확인한 후 그에 맞는 지원군을 불러오겠다고 하셨습니다만... 솔직히, 도움을 기다리는 입장에서는 너무 늦으시는 것 같군요.",,"","",""],
["마를렌","","","황녀님을 빼앗긴 치욕을 한시라도 빨리 갚고 싶습니다만 제 한 몸을 바친다고 하여 전황을 뒤집을 수 있는 것도 아니니 답답할 따름입니다.",,"","",""],
["마를렌","","","이런, 괜히 제 불평을 모험가님께 말씀드리고 있었군요. 잠시만 기다려 주시겠습니까? 저희가 준비한 보급물품을 챙겨오겠습니다.",,"","",""],
["마를렌","back060001","2","저희를 도와주시는 모험가님께 드리기에는 턱없이 부족합니다만 지금 모든 황도군이 물자 부족으로 허덕이는 실정입니다. 표현할 수 있는 최대의 성의라 생각하시고 받아주십시오.",,"","",""],
["젤딘","back060002","1","아 모험가님, 오셨군요. 마를렌 님이 물품을 챙겨주시던가요?",,"","",""],
["젤딘","","","부끄럽습니다만 그 정도가 지금 준비할 수 있는 최대한입니다. 겐트는 풍요로운 마을이었습니다만 카르텔의 습격이 길어져, 필요한 물건을 구하는 것이 몹시 어려운 지경에 이르고 말았습니다.",,"","",""],
["젤딘","","","하다못해 부상으로 신음하고 있는 동료들을 치료할 수 있는 구호물자라도 보충할 수 있다면...",,"","",""],
["젤딘","","2","카르텔의 풍족한 물자를 보니 더욱 화가 나는군요. 이것이 모두 빼앗은 것이라고 생각하면...",,"","",""],
["젤딘","","","아니, 이렇게 있을 때가 아니지요. 어서 부상병을 치료하도록 하겟습니다.",,"","",""],
["젤딘","","1","모험가님. 전에 암호문을 가져다 주신 것 기억하십니까? 방화부대의 대장이 온다는 이야기가 적혀있어서 대응을 할 수 있었지요.",,"","",""],
["젤딘","","","그런데 마를렌 님이 무언가 더 숨겨진 것이 있는 것 같다고 하시며 암호문을 직접 해독하셨습니다. 그랬더니 놀랍게도 카르텔 녀석들이 겐트에 폭격을 준비하고 있다는 내용을 찾아 낼 수 있었습니다.",,"","",""],
["젤딘","","","보수한 외벽이 채 굳지도 않은 상황에서 폭격마저 떨어진다면 정말 끝장입니다.",,"","",""],
["젤딘","back060002","","천재라 칭송받는 멜빈 님이라면 적의 폭격을 저지할 수 있는 좋은 방법을 알고 계실 겁니다. 부디 그 분의 지시에 따라주십시오.",,"","",""],
["멜빈","back060004","2","어? 뭐야? 누가보냈다고?",,"","",""],
["멜빈","","1","흠... 그래? 귀찮은 일엔 관여하기 싫지만 이번엔 얘기가 좀 다르네?",,"","",""],
["멜빈","","","겐트가 끝장나면 갈 데가 없어지거든. 전쟁 따위는 정말 지긋지긋하다니까.",,"","",""],
["멜빈","","","뭐 어쨌든 머리 나쁜 카르텔 놈들은 폭격에도 구식 방법을 사용하고 있을 거야. 좌표를 수신해서 폭격하는 방식이지.",,"","",""],
["멜빈","","","분명히 적 중에서 폭격 좌표를 송신하는 임무를 받은 녀석들이 섞여 있을 테니까 그 녀석들만 처리하면 당분간은 폭격을 막을 수 있어.",,"","",""],
["멜빈","back060004","","놈들을 처리하거든 나한테 오지말고 젤딘에게 가서 보고하라구. 귀찮으니까.",,"","",""],
["젤딘","back060002","2","하마터면 큰일이 날 뻔했군요. 미리 파악하지 못한데다가 하마터면 암호 속에 숨은 진짜 암호를 발견하지 못하다니.",,"","",""],
["젤딘","","","마를렌 님과 멜빈 님 덕분에 위기를 간신히 벗어났군요. 하지만 이건 모두 모험가님이 계셔주신 덕분입니다. 어떻게 감사를 드려야할지...",,"","",""],
["젤딘","","1","모험가님. 혹시 카르텔 중에 인간이 아닌 병사가 있는 것을 보셨습니까?",,"","",""],
["젤딘","","","황도군은 남은 총의 부품조차 아쉬운 판인데 카르텔은 기계로 만든 병사까지 운용하고 있습니다.",,"","",""],
["젤딘","","","저들의 부품을 얻을 수 있다면 필요한 곳에 요긴하게 쓸 수 있을 텐데요...",,"","",""],
["젤딘","","2","다행히 규격은 동일하군요. 쓸 수 있겠습니다.",,"","",""],
["젤딘","","1","지금 동문 근처에는 적이 매설해 놓은 지뢰가 수도 없이 깔려있습니다. 그 때문에 황도군의 피해가 심각한 지경입니다.",,"","",""],
["젤딘","","","틈이 날 때마다 제거를 하고 있지만 스펠트라는 카르텔 기동대원이 지뢰를 계속 매설하고 있는 모양입니다.",,"","",""],
["젤딘","","","이래서야 부상자가 늘어날 수밖에 없습니다. 그의 제거를 부탁드립니다.",,"","",""],
["젤딘","","2","그를 처치하셨습니까? 지뢰 제거 작업을 속행하겠습니다.",,"","",""],
["젤딘","","1","모험가님. 혹시 동문 근처에서 용병단을 보지 못하셨습니까?",,"","",""],
["젤딘","","","서부 무법지대 출신의 실력자인데 황도군의 편이 되어 카르텔과 싸워준 든든한 동료입니다만 그만 연락이 끊기고 말았습니다.",,"","",""],
["젤딘","back060002","","총탄이 쏟아지는 전장의 한복판에서 지원군을 기다리고 있을 것입니다. 그들을 찾으면 함께 귀환해 주십시오.",,"","",""],
["메이윈","back060201","1","리더! 그 옷은 뭐지? 왜 카르텔이 지급한 옷을 입고 있는 거야?",,"","",""],
["고든","","","전에 말했잖아. 황녀님이 납치되고 아무 소식도 없어. 그리고 겐트에는 패잔병과 굶주린 사람들밖에 없잖아.",,"","",""],
["고든","","","메이윈. 현실을 받아들여. 이제 끝났어. 황실은 무너지고 카르텔의 혁명이 승리한 거야.",,"","",""],
["메이윈","","","혁명? 무고한 사람들을 죽이고 어린 아이를 납치하는 게 혁명이라고? 갖다붙인다고 죄가 미화될 것 같아?",,"","",""],
["메이윈","back060201","2","고든... 이러려고 우리가 살아남은 게 아니었잖아...",,"","",""],
["젤딘","back060002","2","돌아오셨군요! 고든은...",,"","",""],
["젤딘","","","그렇습니까. 그가 배신을...",,"","",""],
["젤딘","","","메이윈이라도 살아돌아와 다행입니다. 그녀를 구해주셔서 감사합니다.",,"","",""],
["젤딘","","1","모험가님도 아시겠지만 겐트에는 남은 물자가 바닥을 드러내고 있습니다. 우국충정에 가득찼던 고든조차 절망적인 상황을 견디다 못해 배신을 했지만, 이린 일은 자주 있는 일입니다.",,"","",""],
["젤딘","","","오일이라도 있다면 전차를 움직이고 기계를 가동하여 작업을 할 수 있을 텐데 카르텔이 오일 탱크룰 모두 파괴하고 훔쳐갔습니다.",,"","",""],
["젤딘","","","그 오일로 저렇게 비효율적인 오토바이를 타고 돌아다니는 꼴을 보니 더 화가 나는군요.",,"","",""],
["젤딘","","","저들에게서 오일을 탈취해 주실 수 있겠습니까?",,"","",""],
["젤딘","","2","층분하지는 않지만 긴히 사용할 수는 있겠습니다. 감사합니다.",,"","",""],
["젤딘","","1","전에 구해주신 메이윈이 입수한 정보로는 카르텔 기동대의 대장은 슈뢰드라는 남자라고 합니다.",,"","",""],
["젤딘","","","성격이 난폭하지만 리더쉽이 있어 기동대원들을 훈련시켜 저토록 위협적인 병력으로 탈바꿈하게 만든 자이지요.",,"","",""],
["젤딘","","","더구나 그는 지젤 박사가 개조한 오토바이를 타고 가는 곳곳을 파괴하고 다닙니다. 심지어 무기까지 달아서 오토바이가 아니라 전차라고 봐도 손색이 없을 정도입니다.",,"","",""],
["젤딘","","","그가 전선에 나섰다는 소식에 병사들의 사기가 떨어지고 있습니다. 모험가님께서 그를 막아주실 수는 없으시겠습니까?",,"","",""],
["젤딘","","2","기동대장이 쓰러졌다는 소식을 듣고 병사들도 기뻐하고 있습니다. 모험가님 덕분입니다.",,"","",""],
["젤딘","","1","모험가님 오셨습니까. 그럼 다음 작전에 대해 설명을 드릴까 합니다만...",,"","",""],
["마를렌","","","젤딘 대장님! 약속한 지원군이 도착했습니다!",,"","",""],
["젤딘","back060002","","드디어 도착했군요! 모험가님, 잠시 자리를 비워도 되겠습니까?",,"","",""],
["반","back060000","2","귀 따갑게 말했지만 다시 한 번 말한다. 천계 백성을 괴롭히는 놈이 나오면 내가 용서하지 않을 것이다. 알았나!",,"","",""],
["반","","","오? 야아, 잘 지냈냐? 내가 없는 동안 니가 이쪽을 도와주고 있었다며? 역시 대단대단.",,"","",""],
["반","","","하지만 걱정 마. 이제부턴 제국군이 천계군을 도울 테니까. 카르텔인지 뭔지 하는 녀석들을 싹 쓸어버려야지. 그치?",,"","",""],

["","","","",,"","",""]];