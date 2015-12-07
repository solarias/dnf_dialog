﻿var name;
var jobCode;
var cha;

cha = [//입력, 출력, 일러
//==========================================================================================
//※ A. 모험가
//==========================================================================================
["모험가",name,(jobCode+1).toString()],//플레이어 - 위치변경 금지
["귀검사남","모험가 - 귀검사(남)","a1_0"],//특정 직업군
["다크로드","모험가 - 다크로드","a1_2"],//
["귀검사여","모험가 - 귀검사(여)","a2_0"],//
["다크템플러","모험가 - 다크템플러","a2_4"],//
["격투가여","모험가 - 격투가(여)","a3_0"],//
["용독문주","모험가 - 용독문주","a3_32"],//
["격투가남","모험가 - 격투가(남)","a4_0"],//
["천수나한","모험가 - 천수나한","a4_3"],//
["자이언트","모험가 - 자이언트","a4_4"],//
["거너남","모험가 - 거너(남)","a5_0"],//
["디스트로이어","모험가 - 디스트로이어","a5_2"],//
["거너여","모험가 - 거너(여)","a6_0"],//
["스톰트루퍼","모험가 - 스톰트루퍼","a6_2"],//
["마법사여","모험가 - 마법사(여)","a7_0"],//
["엘레멘탈마스터","모험가 - 엘레멘탈마스터","a7_1"],//
["마법사남","모험가 - 마법사(남)","a8_0"],//
["워록","모험가 - 워록","a8_1"],//
["빙결술사","모험가 - 빙결술사","a8_2"],//
["프리스트남","모험가 - 프리스트(남)","a9_0"],//
["세인트","모험가 - 세인트","a9_1"],//
["저스티스","모험가 - 저스티스","a9_2"],//
["태을선인","모험가 - 태을선인","a9_3"],//
["도적여","모험가 - 도적(여)","a10_0"],//
["사령술사","모험가 - 사령술사","a10_2"],//
["나이트여","모험가 - 나이트(여)","a11_0"],//
["다크나이트남","모험가 - 다크나이트(남)","a12_0"],//
["크리에이터여","모험가 - 크리에이터(여)","a13_0"],//
["","",""],//
//==========================================================================================
//※ B. 조연
//==========================================================================================
["세리아","세리아 키르민","seria"],//동일 : "세리아 키르민
["요정소녀","요정 소녀","elfseria"],//동일 : "세리아 키르민
["하츠","하츠","hats"],//
["반","반","van"],//동일 : "반
["반2","반","van2"],//동일 : "반
["레니","하급기사 레니","leni"],//
["만렙지원병","만렙 지원병","manlev"],//
["게일포스","게일포스","galeforce"],//
["아간조","대검의 아간조","aganjo"],//동일 : "아간조
["아간조2","아간조","aganjo2"],//동일 : "아간조
["루터","루터","looter"],//
["루드밀라","루드밀라","rudmila"],//
["시란","시란","siran"],//
["","",""],//
//==========================================================================================
//※ 1. 실버크라운
//==========================================================================================
["모건","연금술사 모건","mogun"],//
["비탈라","청색의 수호자 비탈라","vitala"],//
["스테라","불꽃공주 스테라","b010101"],//
["젤루스","얼음 정령왕 젤루스","b010201"],//
["트릴리온","트릴리온 프리즘","b010301"],//
["다크렉스","어둠을 흡수한 다크렉스","b010401"],//
["필리우스","정령계 왕자 필리우스","b010501"],//
["델마","델마","m010601"],//
["암므","사념의 비석 암므","b010601"],//
["플레임 헐크","플레임 헐크","b010701"],//
["아퀘리스","아퀘리스","b010702"],//
["글레어린","글레어린","b010703"],//
["데드멀커","데드멀커","b010704"],//
["","",""],//
//==========================================================================================
//※ 2. 시궁창
//==========================================================================================
["패리스","시궁창 공주 패리스","peris"],//
["알베르트","알베르트 번스타인","albert"],//
["샤일록","샤일록 고블린드","shylock"],//
["로엘","싸움개 로엘","loel"],//
["스카디","스카디 여왕","scady"],//
["슈시아","슈시아","shusia"],//
["개미","나믈룬 투사","m020201"],//
["버섯","노예 펑그라","m020202"],//
["퀸 나믈룬","퀸 나믈룬 메리나","b020201"],//
["게일","게일","gale"],//
["브리즈","브리즈","breez"],//
["레드릭","아타르 레드릭","m020401"],//
["셰널","생존자 셰널","m020402"],//
["부슬리","붉은손의 부슬리","b020401"],//
["클라라","여왕 클라라","b020501"],//
["","",""],//
//==========================================================================================
//※ 3. 언더풋
//==========================================================================================
["아니스","아니스","anis"],
["일리아","일리아","ilia"],//
["클론터","클론터","clonter"],//
["비올라","비올라","viola"],//
["로트아일라","사냥꾼 로트아일라","m030101"],//
["안젤리나","거미공주 안젤리나","b030101"],//
["니콜라스","거미왕자 니콜라스","b030102"],//
["샤란","샤란","sharan"],//
["아이리스","아이리스","iris"],//동일 : "아이리스
["흑막","???","irisblack"],//동일 : "아이리스
["아이리스2","아이리스 포츈싱어","iris2"],//동일 : "아이리스
["사프론","장로 사프론","sapron"],//
["7호","제7영웅 - 악마처형자 갈리온","b030207"],//
["6호","제6영웅 - 불꽃 탐식자 룬버트","b030206"],//
["5호","제5영웅 - 괴력의권사 율크레스","b030205"],//
["4호","제4영웅 어둠의사제 드비아나","b030204"],//
["3호","제3영웅 - 강철의 검사 바돌","b030203"],//
["2호","제2영웅 - 동방의 별 스할라","b030202"],//
["1호","제1영웅 - 요정기사 룽겔","b030201"],//
["자카르나","자카르나","jacarna"],//
["미네트","미네트","minett"],//
["사영","그림자 검사 사영","sayung"],//
["타닉타르","폭군왕 타닉타르","b030301"],//
["위디르","황금왕 위디르","b030401"],//
["GSD","G.S.D","gsd"],//
["메이아","메이아 여왕","meia"],//
["난쟁이","난쟁이 황금 전사","m030501"],//
["발타루시스","폭염권 발타루시스","b030501"],//
["누빌루스","그림시커 사제 누빌루스","m030701"],//
["키리","키리 더 레이디","kiri"],//
["칸나","칸나","kanna"],//
["그란디스","그란디스","grandis"],//
["단진","단진","danjin"],//
["게시판","게시판","board"],//
["아이리스메모","아이리스가 흘린 쪽지","irisnote"],//
["풍진","풍진","windjin"],//
["시모나","시모나","simona"],//
["다프네","다프네","dafne"],//
["","",""],//
//==========================================================================================
//※ 4. 베히모스
//==========================================================================================
["카곤","카곤","kagon"],
["반젤리스","반젤리스","vangelis"],//동일 : "반젤리스
["반젤리스2","반젤리스","b050702"],//동일 : "반젤리스
["오필리아","오필리아 베이그란스","ophelia"],//
["이사도라","이사도라","isadora"],//동일 : "이사도라
["이사도라2","이사도라","b050701"],//동일 : "이사도라
["암니스","물의 수호자 암니스","m040101"],//
["킹머맨투레","킹머맨투레","b040201"],//
["마셀러스","심판자 마셀러스","m040301"],//
["우디","우디 플랜트","b040401"],//
["켄타우로스","켄타우로스","b040402"],//
["로터스","로터스","b040501"],//
["아덴바인","광기의 아덴바인","b040601"],//
["","",""],//
//==========================================================================================
//※ 5. 북의 쉼터
//==========================================================================================
//이사도라2 : '베히모스'에 있음 (이사도라)
//반젤리스2 : '베히모스'에 있음 (반젤리스)
["미쉘","미쉘 모나헌","mishel"],//동일 : "미쉘 모나헌
["미쉘2","미쉘 모나헌","mishel2"],//동일 : "미쉘 모나헌
["민타이","민타이","mintai"],//
["흑요정 경비병","흑요정 경비병","m050101"],//
["샤우타","타우킹 샤우타","b050101"],//
["악몽","악몽의 근원","nightmare"],//
["나스라","삭풍 나스라","m050201"],//
["로리안","로리안","lorian"],//
["지그하르트","빛의 성주 지그하르트","b050201"],//
["브왕가","브왕가","bwangga"],//
["알소르","타락한 알소르","m050301"],//
["오르카","오르카","orka"],//
["아라클로소","아라클로소","b050401"],//
["스피라찌","사룡 스피라찌","b050402"],//
["발레나","발레나","ballena"],//
["루거","비스트마스터 루거","b050501"],//
["힌","서리마녀 힌","b050801"],//
["","",""],//
//==========================================================================================
//※ 6. 겐트
//==========================================================================================
["마를렌","마를렌 키츠카","marlen"],//
["젤딘","젤딘 슈나이더","jeldin"],//
["베릭트","모래바람의 베릭트","berict"],//동일 : "모래바람의 베릭트
["베릭트2","모래바람의 베릭트","b080401"],//동일 : "모래바람의 베릭트
["벤딩크","방화범 벤딩크","b060101"],//
["멜빈","멜빈 리히터","melvin"],//
["메이윈","중사 메이윈","meiwin"],//
["고든","리더 고든","m060201"],//
["레베카","안내인 레베카","leveka"],//
["바빌론","야전 사령관 바빌론","b060501"],//
["유르겐","네빌로 유르겐","jurgen"],//
["입키스","입키스","m060701"],//
["구스토","HM-8 구스토","m060702"],//
["준장니베르","준장 니베르","niberr"],//동일 : "니베르
["니베르","니베르","niberr"],//동일 : "니베르
["콘","무대포 콘","corn"],//
["비연","비연","biyeon"],//
["망명라크","망명자 라크","m060801"],//동일 : "배신자 라크
["라크","배신자 라크 (희대의 사기꾼)","m060802"],//동일 : "배신자 라크
["무명여전사","??","noname"],//
["지젤","메카닉 지젤","b060801"],//동일 : "메카닉 지젤
["지젤2","지젤박사","m080401"],//동일 : "메카닉 지젤
["키프","하이에나 키프","b060901"],//
["에르제","황녀 에르제","erze"],//
["","",""],//
//==========================================================================================
//※ 7. 해상 열차, 무법지대
//==========================================================================================
["베른","베른 보네거트","berrn"],//
["초롱이","초롱이","chorong"],//
["머맨","수다쟁이 머맨","m070201"],//
["보티첼리","불꽃방패 보티첼리","b070201"],//
["스틱","스틱 반 플라틴","b070301"],//
["즈죠","팻불 즈죠","m070301"],//
["페요","페요 피에르","m070302"],//
["이리가레","스나이퍼 이리가레","m070303"],//
["닐스","레프트 스트레이트 닐스","nills"],//
["하스","노익장 하스","m070401"],//
["엔조시포","새벽의 눈동자 엔조 시포","b070401"],//동일 : "엔조 시포
["엔조시포2","엔조 시포","enjo2"],//동일 : "엔조 시포
["란제루스","돌격대장 란제루스","b070501"],//동일 : "란제루스
["란제루스2","란제루스","ranjerus2"],//동일 : "란제루스
["천계귀족","천계 귀족들","skynoble"],//
["슈만","슈만","shuman"],//
["유리스","공작 유리스","m070701"],//
["디레지에","검은 질병의 디레지에","b070701"],//
["콩콩이","콩콩이","kong"],//
["","",""],//
//==========================================================================================
//※ 8. 시간의 문
//==========================================================================================
//요정소녀 : '주연'에 있음 (세리아 키르민)
//흑막 : '언더풋'에 있음 (아이리스)
//아이리스2 : '언더풋'에 있음 (아이리스)
//베릭트2 : '겐트'에 있음 (모래바람의 베릭트)
//지젤박사 : '겐트'에 있음 (메카닉 지젤)
//엔조시포2 : '루프트 하펜'에 있음 (엔조 시포)
//란제루스2 : '루프트 하펜'에 있음 (란제루스)
//반2 : '조연'에 있음 (반)
//아간조2 : '주연'에 있음 (아간조)
["우","우","wu"],//
["아스카","아스카","aska"],//
["준","준","jun"],//
["움타라","수왕 움타라","b080201"],//
["요정1","서쪽의 수호자 트라울르","elf1"],//
["요정2","남쪽의 수호자 로위테라","elf2"],//
["요정3","장로 카위렐","elf3"],//
["호가스","민병대장 호가스","m080301"],//
["아스타로스","공포의 아스타로스","m080501"],//
["닐바스","닐바스 그라시아","b080501"],//
["샤피로","샤피로 그라시아","b080502"],//
["오즈마","혼돈의 오즈마","ozma"],//
["케인","케인","b080701"],//
["젊은스카사","젊은 스카사","b080801"],//
["바칼","폭룡왕 바칼","bakal"],//
["길잃은전사","길잃은 전사","lost"],//
["부상당한소녀","부상당한 소녀","woundedgirl"],//
["","",""],//
//==========================================================================================
//※ 9. 파워스테이션
//==========================================================================================
//니베르 : 천계에 있음 (니베르)
["리아","리아","ria"],//
["페럴웨인","페럴 웨인","perrel"],//
["마티어스","마티어스","martius"],//
["위너즈","트롬베 소장 위너즈","winnerz"],//
["파리스","천둥의 파리스","m090301"],//
["파트리스","전율의 파트리스","b090301"],//
["퍼만","허무의 퍼만","b090401"],//
["","",""],//
//==========================================================================================
//※ 10. 안톤
//==========================================================================================
["잭터","잭터 이글아이","zactor"],//
["운","운 라이오닐","wun"],//
["","",""],//
["나엔","나엔","naen"],//
["","",""],//
["마테카","전능의 마테카","mateka"],//
["","",""],//
//==========================================================================================
//※ 11. 죽은자의 성
//==========================================================================================
["다나","다나 도나텔","dana"],//
["사이러스","사이러스","cyrus"],//
["메릴","메릴 파이오니어","meril"],//
["아젤리아","아젤리아 로트","agellia"],//
["헌터폰","헌터 폰","hunterpon"],//
["이자벨라","이자벨라","isabella"],//
["로이","로이","roi"],//
["","",""],//
["베키","베키","b110101"],//
["","",""],//
["골드크라운","골드 크라운","b110501"],//
["","",""],//
//==========================================================================================
//※ 12. 절망의 탑
//==========================================================================================
["양얼","신검 양얼","tower100"],//
["","",""],//
["","",""],//
["","",""],//
["","",""],//
["","",""],//
//==========================================================================================
//※ 13. 이계/고대던전/쿠룬달
//==========================================================================================
["백명","백명","hundred"],//
["구룡","구룡","ninedragon"],//
["드래곤스톤","드래곤 스톤","dragonstone"],//
["나탈리아","나탈리아 수","natalia"],//
["미카엘라","성안의 미카엘라","michaela"],//
["카시야스","정복자 카시야스","casillas"],//
["메카타우","하이퍼 메카타우","mechatau"],//
["보로딘","해머왕 보로딘","borodin"],//
["플루","빅 고스트 플루","flu"],//
["게쉔그리건","게쉔 그리건","grigun"],//
["","",""],//
//==========================================================================================
//※ 14. 그 외
//==========================================================================================
["데릴라","데릴라","derilla"],//
["가브리엘","가브리엘","gabriel"],//
["악마화","악마화 프리스트","devilman"],//
["로톤","로톤 막시머그","loton"],//
["힐더","우는 눈의 힐더","hilder"],//
["드레이퓨스","사신 드레이퓨스","dreyfus"],//
["","",""],//
//==========================================================================================
//※ 90. 기타
//==========================================================================================
["공백","　","empty"],//
["의문","??","empty"],//
["경비병","제국 경비병","gyeongbi"],//
["하츠슈만","하츠 폰 크루거","shuman"],//
["하츠사이","하츠 폰 크루거","cyrus"],//
["병아리","병아리 더 치킨 (Illust by 루리웹 하레드아이안님)","chick"],//
["소라고둥","마법의 소라고둥","soragodong"],//
["아이리","아이리","irie"],//
["네오플","네오플","neople"],//
["하츠박제_명왕","위대한명왕님","a4_3"],//
["","",""],//





["","",""]];
