﻿var front;
var title;
var text;

front = "backNuke";//첫 뒷배경 (.jpg 형식)
title = "좌표 테스트";//던전 명칭┏ 0 : 이미지 only  //1 : 아래 고정   //2 : 위 고정   //3 : 이동 only┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["클라라","back000000","2","1",,"","",""],
["클라라","back010000","2","1",,"","",""],
["클라라","back010001","2","1",,"","",""],
["클라라","back010100","2","1",,"","",""],
["클라라","back010101","2","1",,"","",""],
["클라라","back010201","2","1",,"","",""],
["클라라","back010202","2","1",,"","",""],
["클라라","back010301","2","1",,"","",""],
["클라라","back010401","2","1",,"","",""],
["클라라","back010501","2","1",,"","",""],
["클라라","back010601","2","1",,"","",""],
["클라라","back010602","2","1",,"","",""],
["클라라","back010603","2","1",,"","",""],
["클라라","back010701","2","1",,"","",""],
["클라라","back010702","2","1",,"","",""],
["클라라","back010703","2","1",,"","",""],
["클라라","back010801","2","1",,"","",""],
["클라라","back010802","2","1",,"","",""],
["클라라","back020000","2","1",,"","",""],
["클라라","back020001","2","1",,"","",""],
["클라라","back020002","2","1",,"","",""],
["클라라","back020003","2","1",,"","",""],
["클라라","back020004","2","1",,"","",""],
["클라라","back020005","2","1",,"","",""],
["클라라","back020006","2","1",,"","",""],
["클라라","back020101","2","1",,"","",""],
["클라라","back020102","2","1",,"","",""],
["클라라","back020103","2","1",,"","",""],
["클라라","back020201","2","1",,"","",""],
["클라라","back020202","2","1",,"","",""],
["클라라","back020301","2","1",,"","",""],
["클라라","back020302","2","1",,"","",""],
["클라라","back020303","2","1",,"","",""],
["클라라","back020304","2","1",,"","",""],
["클라라","back020401","2","1",,"","",""],
["클라라","back020402","2","1",,"","",""],
["클라라","back020403","2","1",,"","",""],
["클라라","back020501","2","1",,"","",""],
["클라라","back020502","2","1",,"","",""],
["클라라","back020503","2","1",,"","",""],
["클라라","back020504","2","1",,"","",""],
["클라라","back030000","2","1",,"","",""],
["클라라","back030001","2","1",,"","",""],
["클라라","back030002","2","1",,"","",""],
["클라라","back030003","2","1",,"","",""],
["클라라","back030004","2","1",,"","",""],
["클라라","back030005","2","1",,"","",""],
["클라라","back030006","2","1",,"","",""],
["클라라","back030007","2","1",,"","",""],
["클라라","back030008","2","1",,"","",""],
["클라라","back030009","2","1",,"","",""],
["클라라","back030010","2","1",,"","",""],
["클라라","back030011","2","1",,"","",""],
["클라라","back030020","2","1",,"","",""],
["클라라","back030101","2","1",,"","",""],
["클라라","back030102","2","1",,"","",""],
["클라라","back030103","2","1",,"","",""],
["클라라","back030104","2","1",,"","",""],
["클라라","back030105","2","1",,"","",""],
["클라라","back030106","2","1",,"","",""],
["클라라","back030107","2","1",,"","",""],
["클라라","back030108","2","1",,"","",""],
["클라라","back030109","2","1",,"","",""],
["클라라","back030110","2","1",,"","",""],
["클라라","back030201","2","1",,"","",""],
["클라라","back030202","2","1",,"","",""],
["클라라","back030203","2","1",,"","",""],
["클라라","back030204","2","1",,"","",""],
["클라라","back030205","2","1",,"","",""],
["클라라","back030206","2","1",,"","",""],
["클라라","back030207","2","1",,"","",""],
["클라라","back030208","2","1",,"","",""],
["클라라","back030209","2","1",,"","",""],
["클라라","back030210","2","1",,"","",""],
["클라라","back030211","2","1",,"","",""],
["클라라","back030212","2","1",,"","",""],
["클라라","back030213","2","1",,"","",""],
["클라라","back030214","2","1",,"","",""],
["클라라","back030301","2","1",,"","",""],
["클라라","back030302","2","1",,"","",""],
["클라라","back030303","2","1",,"","",""],
["클라라","back030401","2","1",,"","",""],
["클라라","back030501","2","1",,"","",""],
["클라라","back030502","2","1",,"","",""],
["클라라","back030503","2","1",,"","",""],
["클라라","back030601","2","1",,"","",""],
["클라라","back030701","2","1",,"","",""],
["클라라","back030702","2","1",,"","",""],
["클라라","back030703","2","1",,"","",""],
["클라라","back030704","2","1",,"","",""],
["클라라","back030705","2","1",,"","",""],
["클라라","back030706","2","1",,"","",""],
["클라라","back040000","2","1",,"","",""],
["클라라","back040001","2","1",,"","",""],
["클라라","back040002","2","1",,"","",""],
["클라라","back040003","2","1",,"","",""],
["클라라","back040004","2","1",,"","",""],
["클라라","back040005","2","1",,"","",""],
["클라라","back040101","2","1",,"","",""],
["클라라","back040201","2","1",,"","",""],
["클라라","back040202","2","1",,"","",""],
["클라라","back040203","2","1",,"","",""],
["클라라","back040204","2","1",,"","",""],
["클라라","back040205","2","1",,"","",""],
["클라라","back040301","2","1",,"","",""],
["클라라","back040401","2","1",,"","",""],
["클라라","back040402","2","1",,"","",""],
["클라라","back040403","2","1",,"","",""],
["클라라","back040501","2","1",,"","",""],
["클라라","back040502","2","1",,"","",""],
["클라라","back040503","2","1",,"","",""],
["클라라","back040504","2","1",,"","",""],
["클라라","back040601","2","1",,"","",""],
["클라라","back050000","2","1",,"","",""],
["클라라","back050001","2","1",,"","",""],
["클라라","back050002","2","1",,"","",""],
["클라라","back050003","2","1",,"","",""],
["클라라","back050004","2","1",,"","",""],
["클라라","back050005","2","1",,"","",""],
["클라라","back050101","2","1",,"","",""],
["클라라","back050102","2","1",,"","",""],
["클라라","back050103","2","1",,"","",""],
["클라라","back050104","2","1",,"","",""],
["클라라","back050105","2","1",,"","",""],
["클라라","back050106","2","1",,"","",""],
["클라라","back050201","2","1",,"","",""],
["클라라","back050202","2","1",,"","",""],
["클라라","back050203","2","1",,"","",""],
["클라라","back050204","2","1",,"","",""],
["클라라","back050205","2","1",,"","",""],
["클라라","back050206","2","1",,"","",""],
["클라라","back050207","2","1",,"","",""],
["클라라","back050301","2","1",,"","",""],
["클라라","back050302","2","1",,"","",""],
["클라라","back050303","2","1",,"","",""],
["클라라","back050304","2","1",,"","",""],
["클라라","back050305","2","1",,"","",""],
["클라라","back050307","2","1",,"","",""],
["클라라","back050401","2","1",,"","",""],
["클라라","back050403","2","1",,"","",""],
["클라라","back050404","2","1",,"","",""],
["클라라","back050405","2","1",,"","",""],
["클라라","back050406","2","1",,"","",""],
["클라라","back050407","2","1",,"","",""],
["클라라","back050501","2","1",,"","",""],
["클라라","back050502","2","1",,"","",""],
["클라라","back050503","2","1",,"","",""],
["클라라","back050504","2","1",,"","",""],
["클라라","back050505","2","1",,"","",""],
["클라라","back050506","2","1",,"","",""],
["클라라","back050508","2","1",,"","",""],
["클라라","back050509","2","1",,"","",""],
["클라라","back050602","2","1",,"","",""],
["클라라","back050603","2","1",,"","",""],
["클라라","back050604","2","1",,"","",""],
["클라라","back050605","2","1",,"","",""],
["클라라","back050606","2","1",,"","",""],
["클라라","back050607","2","1",,"","",""],
["클라라","back050701","2","1",,"","",""],
["클라라","back050702","2","1",,"","",""],
["클라라","back050703","2","1",,"","",""],
["클라라","back050704","2","1",,"","",""],
["클라라","back050705","2","1",,"","",""],
["클라라","back050706","2","1",,"","",""],
["클라라","back050801","2","1",,"","",""],
["클라라","back050901","2","1",,"","",""],
["클라라","back050902","2","1",,"","",""],
["클라라","back051001","2","1",,"","",""],
["클라라","back051002","2","1",,"","",""],
["클라라","back051003","2","1",,"","",""],
["클라라","back051004","2","1",,"","",""],
["클라라","back060000","2","1",,"","",""],
["클라라","back060001","2","1",,"","",""],
["클라라","back060002","2","1",,"","",""],
["클라라","back060003","2","1",,"","",""],
["클라라","back060004","2","1",,"","",""],
["클라라","back060005","2","1",,"","",""],
["클라라","back060101","2","1",,"","",""],
["클라라","back060201","2","1",,"","",""],
["클라라","back060301","2","1",,"","",""],
["클라라","back060302","2","1",,"","",""],
["클라라","back060401","2","1",,"","",""],
["클라라","back060402","2","1",,"","",""],
["클라라","back060501","2","1",,"","",""],
["클라라","back060502","2","1",,"","",""],
["클라라","back060503","2","1",,"","",""],
["클라라","back060504","2","1",,"","",""],
["클라라","back060505","2","1",,"","",""],
["클라라","back060506","2","1",,"","",""],
["클라라","back060601","2","1",,"","",""],
["클라라","back060602","2","1",,"","",""],
["클라라","back060701","2","1",,"","",""],
["클라라","back060702","2","1",,"","",""],
["클라라","back060703","2","1",,"","",""],
["클라라","back060704","2","1",,"","",""],
["클라라","back060705","2","1",,"","",""],
["클라라","back060801","2","1",,"","",""],
["클라라","back060802","2","1",,"","",""],
["클라라","back060803","2","1",,"","",""],
["클라라","back060804","2","1",,"","",""],
["클라라","back060805","2","1",,"","",""],
["클라라","back060806","2","1",,"","",""],
["클라라","back060807","2","1",,"","",""],
["클라라","back060808","2","1",,"","",""],
["클라라","back060809","2","1",,"","",""],
["클라라","back060810","2","1",,"","",""],
["클라라","back060811","2","1",,"","",""],
["클라라","back060812","2","1",,"","",""],
["클라라","back060813","2","1",,"","",""],
["클라라","back060814","2","1",,"","",""],
["클라라","back070000","2","1",,"","",""],
["클라라","back070001","2","1",,"","",""],
["클라라","back070101","2","1",,"","",""],
["클라라","back070102","2","1",,"","",""],
["클라라","back070201","2","1",,"","",""],
["클라라","back070202","2","1",,"","",""],
["클라라","back070203","2","1",,"","",""],
["클라라","back070204","2","1",,"","",""],
["클라라","back070303","2","1",,"","",""],
["클라라","back070304","2","1",,"","",""],
["클라라","back070305","2","1",,"","",""],
["클라라","back070306","2","1",,"","",""],
["클라라","back070307","2","1",,"","",""],
["클라라","back070308","2","1",,"","",""],
["클라라","back070401","2","1",,"","",""],
["클라라","back070402","2","1",,"","",""],
["클라라","back070403","2","1",,"","",""],
["클라라","back070404","2","1",,"","",""],
["클라라","back070405","2","1",,"","",""],
["클라라","back070501","2","1",,"","",""],
["클라라","back070502","2","1",,"","",""],
["클라라","back070503","2","1",,"","",""],
["클라라","back070504","2","1",,"","",""],
["클라라","back070505","2","1",,"","",""],
["클라라","back070506","2","1",,"","",""],
["클라라","back070507","2","1",,"","",""],
["클라라","back070601","2","1",,"","",""],
["클라라","back070701","2","1",,"","",""],
["클라라","back070702","2","1",,"","",""],
["클라라","back070703","2","1",,"","",""],
["클라라","back070704","2","1",,"","",""],
["클라라","back070705","2","1",,"","",""],
["클라라","back070706","2","1",,"","",""],
["클라라","back080000","2","1",,"","",""],
["클라라","back080001","2","1",,"","",""],
["클라라","back080002","2","1",,"","",""],
["클라라","back080102","2","1",,"","",""],
["클라라","back080201","2","1",,"","",""],
["클라라","back080203","2","1",,"","",""],
["클라라","back080204","2","1",,"","",""],
["클라라","back080205","2","1",,"","",""],
["클라라","back080206","2","1",,"","",""],
["클라라","back080207","2","1",,"","",""],
["클라라","back080208","2","1",,"","",""],

["","","","",,"","",""]];