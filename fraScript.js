//==========================================================================================================================================
// ※ 변수 설정
//==========================================================================================================================================
var i, j, k, l, v, w, x, y, z; // for loop용 임시 변수
var temp; // 임시변수 1
var temp2;// 임시변수 2
var temp3;// 임시변수 3

var lenText = 0; // 총 페이지 수
var listCha = [];// 총 캐릭터 수
var imageURLs;	 // 불러올 이미지 임시저장 문자열 (일반 브라우저용)
var imageList = []//불러올 이미지 임시저장 배열
var page = -1; // 현재 페이지 (내부 처리용))
var step = 0; // 현재 페이지 (출력용)
var stepMax = "0"; // 전체 페이지 (출력용)
var endPage = ""; // 현재 페이지 끝
var side="bottom"; // 가장 최근에 대사 읽은 곳 저장
var lastSpeaker = ""; // "현재 진행 순서 상" 이전 화자

//외부 인수 기본값
var autoPlay = 1;	//autoGo, 자동재생 여부
	var autoTemp=-1;//분기점에서 '자동재생 여부' 임시 저장(-1 : 대기상태)
var autoTime = 1;	//displayTime, 자동재생 간격 (자동재생 작동 중일 때)
var textSpeed = 30;	//speed, 대사 읽는 속도
name = "모험가";//selectName, 모험가 이름 (다른 js파일에서 이미 정의됨)
jobCode = 90;		//selectJob, 모험가 직업 (다른 js파일에서 이미 정의됨)
classCode = 1;		//selectClass, 모험가 전직(다른 js파일에서 이미 정의됨)
var tempFile;	//selectFile, 불러올 대사본 파일명 (.js 확장자 제외)

var auto; //timeout 변수

var images = "./images/";

//==========================================================================================================================================
// ※ 함수 설정
//==========================================================================================================================================

		//====================================================================================================================
		// ※ 부수적 함수
		//====================================================================================================================
		
function loadJs(fileName, callBack){ // 자바스크립트 불러오기
    var script = document.createElement("script")
    script.type = "text/javascript";
	
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
				callBack();
            }
        };
    } else {  //Others
        script.onload = function(){
			callBack();
        };
    }

    script.src = fileName;
	script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);
}



function loadImages(arr,callBack){ // 이미지 불러오기

	//출처 : http://stackoverflow.com/questions/8264528/image-preloader-javascript-that-supports-events/8265310#8265310
	var imagesArray = [];
	var img;
	var remaining = arr.length;
	for (var i = 0; i < arr.length; i++) {
		img = new Image();
		img.onload = function() {
			//외부 처리 
			document.getElementById("start").innerHTML = "\
			그림 로딩 ("+Math.round((((arr.length - remaining + 1)/arr.length)*100),0).toString()+"%)";
			//내부 처리
			--remaining;
			if (remaining <= 0) {
				callBack();
			};
		};
		img.onerror = function() {
			//외부 처리 
			document.getElementById("start").innerHTML = "\
			그림 로딩 ("+Math.round((((arr.length - remaining + 1)/arr.length)*100),0).toString()+"%)";
			--remaining;
			if (remaining <= 0) {
				callBack();
			};
		};
		img.src = arr[i];
		document.getElementById('imagePreloader').innerHTML += "\
		<img src='" + img.src + "'>";
		imagesArray.push(img);
	};
	
};



function getNatural(DOMelement,result) { //naturalWidth, naturalHeight 호출

	var img = new Image();
	img.src = DOMelement.src;
	
	if (result == "width") {
		return img.width
	} else if(result == "height") {
		return img.height
	}; 
	
}

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

		//====================================================================================================================
		// ※ 본격적 실행 함수
		//====================================================================================================================

function getPage(num) {
	if (num<cha.length-1) {
		for (y=0;y<text.length;y++){
			if (cha[num][0] != "" && cha[num][0] == text[y][0]) {
				document.getElementById("main").innerHTML += "\
				<img class='middle' id='img" + cha[num][2] + "' src='" + images + "portrait/" + cha[num][2] +".png' />";
				listCha.push(cha[num][2]);
				break;
			};
		};
		getPage(num+1);
	} else {
		if (front != "") { //첫 화면 있으면
			document.getElementById("main").style.backgroundImage = "url('" + images + "front/" + front + ".jpg')";//첫 화면 생성
			document.getElementById("main").style.backgroundSize = "700px 525px";
		};
		
		if (autoPlay == 1) { //자동재생 관련 출력
			document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:lightgreen;'>자동</span> 재생중 (" + autoTime+ "초)";
			document.getElementById("play").innerHTML = "||";
		} else {
			document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:orange;'>수동</span> 재생중";
			document.getElementById("play").innerHTML = "▶";
		};
		document.getElementById("play").onclick = function() {
			if (autoPlay == 1) {
				document.getElementById("popup").innerHTML = "자동재생 실행";
				clearAuto();
			} else {//2. 현재 수동재생 중
				//2.1.1 재생 불가 - 마지막 페이지일 경우
				if (page==lenText-1) {
					document.getElementById("popup").style.backgroundColor="orange";
					document.getElementById("popup").style.left = "180px";
					document.getElementById("popup").innerHTML = "자동재생 불가 : 마지막 페이지";
				//2.1.2 재생 불가 - autoTemp가 -1이 아닐 경우 (스토리 분기점 선택중)
				} else if (autoTemp != -1) {
					document.getElementById("popup").style.backgroundColor="orange";
					document.getElementById("popup").style.left = "180px";
					document.getElementById("popup").innerHTML = "자동재생 불가 : 분기점 선택 중";
				// 그 외에는 가능
				} else {
					document.getElementById("popup").innerHTML = "자동재생 정지";
					document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:lightgreen;'>자동</span> 재생중 (" + autoTime+ "초)";
					document.getElementById("play").innerHTML = "||";
					autoPlay = 1;
					if (endPage == 1 || page == -1) {
						document.getElementById("start").onclick = "none";
						document.getElementById("start").style.visibility = "hidden";
						auto = setTimeout(function() {dialog(text,page+1);}, autoTime*1000);
					}
				}
			};
		};
		
		//제목 표시, 첫페이지 표시
		document.getElementById("title").innerHTML = title; // 제목 표시
		document.getElementById("now").innerHTML = (step).toString() + "/" + stepMax; //첫 페이지번호 표시
		

		//시작 버튼
		document.getElementById("start").innerHTML = "시작"; //실행 버튼
		document.getElementById("cover").style.backgroundImage = "url('" + images + "guide1.png')";
		document.getElementById("cover").className = "starting";
		document.getElementById("start").onclick = "none";
		document.getElementById("start").onclick = function() {
			clearAuto();
			document.getElementById("start").onclick = "none"
			document.getElementById("start").style.visibility = "hidden"
			dialog(text,0);
		};
		if (autoPlay == 1) {
			auto = setTimeout( function() {
				document.getElementById("start").onclick = "none"
				document.getElementById("start").style.visibility = "hidden"
				dialog(text,0);
			}, Math.max(autoTime*1000,3000));
		}
		
		//뒤로 버튼
		document.getElementById("toBefore").onclick = "none";
		document.getElementById("toBefore").onclick = function() {
			if (page >= 1) {
				//이전 페이지 잔재 제거
					//1. 마지막 패이지 - "시작, 끝" 버튼 제거
					document.getElementById("start").onclick = "none";
					document.getElementById("start").style.visibility = "hidden";
					//2. 스토리 분기점 - "선택지" 버튼 제자리로 & 제거, "자동재생 중단" 정상화
					document.getElementById("choose1").style.top = "425px";
					document.getElementById("choose2").style.top = "456px";
					document.getElementById("choose3").style.top = "487px";
					document.getElementById("choose4").style.top = "518px";
					for (i=0;i<4;i++) {
						document.getElementById("choose"+(i+1).toString()).onclick = "none"
						document.getElementById("choose"+(i+1).toString()).style.visibility = "hidden";
					}
					autoTemp = -1;
				//자동재생 정지
				clearAuto();
				//변수 조절
				endPage = 1;
				if (page == 1) { //처음 시작부분일 경우
					step = 0;//반드시 "0" 표시 (무한 반복을 통한 step 꼬임 방지)
					//처음으로 돌아왔다고 표기
					document.getElementById("popup").style.backgroundColor="orange";
					document.getElementById("popup").style.left = "297px";
					document.getElementById("popup").innerHTML = "첫 페이지 입니다";
				} else { //일반적인 상황
					step -= 2;//dialog 함수에서 알아서 1 올려주기 때문에 하나 더 깎음
				};
				//창 안보이게 조절 (위, 아래 모두)
				if (document.querySelectorAll(".top").length > 0) {
					document.querySelectorAll(".top")[0].style.visibility = "hidden";
				}
				if (document.querySelectorAll(".bottom").length > 0) {
					document.querySelectorAll(".bottom")[0].style.visibility = "hidden";
				}
				document.getElementById("top").style.visibility = "hidden";
				document.getElementById("bottom").style.visibility = "hidden";
				//배경 설정 ("Image Only" 작동중일 경우)
				if (document.getElementById("changeBack").style.backgroundImage != "") {
					//전환 배경 설정
					document.getElementById("main").style.backgroundImage = document.getElementById("changeBack").style.backgroundImage;
					document.getElementById("changeBack").style.backgroundImage = "";
					document.getElementById("changeBack").style.left = "100%"; //전환 배경 이동
					document.getElementById("changeBack").style.visibility="hidden"; // "Image Only"에서 전환 배경 제거
					//전환 캐릭터 → 일반 캐릭터
					document.getElementById("sprite").style.visibility="visible"; // 일단 보이게
					document.getElementById('sprite').style.width = null; //너비 초기화
					document.getElementById('sprite').style.height = null; //높이 초기화
					document.getElementById("sprite").src = document.getElementById("changeSprite").src; //주소 대입
					document.getElementById("sprite").style.bottom = document.getElementById("changeSprite").style.bottom;//좌표 대입(bottom)
					document.getElementById("sprite").style.left = document.getElementById("changeSprite").style.left;//좌료 대입(left)
					document.getElementById('sprite').style.width = (parseInt(getNatural(document.getElementById('sprite'),"width")) * 0.875).toString() + "px";
					document.getElementById('sprite').style.height = "auto";
					document.getElementById("changeSprite").src = "";
					document.getElementById("changeSprite").style.visibility="hidden"; // "Image Only"에서 전환 캐릭터 제거
				}
				//toNext 안보이게 하기
				document.getElementById('toNext').style.paddingTop="5px";
				document.getElementById('toNext').style.paddingLeft="24px";
				document.getElementById('toNext').style.width="140px";
				document.getElementById('toNext').style.height="26px";
				document.getElementById('toNext').style.backgroundColor="";
				document.getElementById('toNext').style.backgroundPosition="";
				document.getElementById('toNext').style.backgroundRepeat="";
				document.getElementById('toNext').style.border=""
				//document.getElementById("toNext").style.visibility = "hidden";
				//페이지 표시
				document.getElementById("now").innerHTML = (step).toString() + "/" + stepMax;
				//"시작" 창
				dialog(text,page-1);
			} else {
				//첫 페이지라고 표기
				document.getElementById("popup").style.backgroundColor="orange";
				document.getElementById("popup").style.left = "297px";
				document.getElementById("popup").innerHTML = "첫 페이지 입니다";
			};
		};
		
		//되돌아가기 버튼
		document.getElementById("return").onclick = "none"; //처음부터 버튼
		document.getElementById("return").onclick = function() { //되돌아가기 버튼
			document.getElementById("popup").style.visibility="hidden"; //toNext 닫기
			clearAuto();
			if (page >= 0) {
				//이전 페이지 잔재 제거
					//1. "시작, 끝" 버튼 제거 : X (return을 클릭하면 "처음"으로 되돌아가니)
					//2. "선택지" 버튼 제자리로 & 제거
					document.getElementById("choose1").style.top = "425px";
					document.getElementById("choose2").style.top = "456px";
					document.getElementById("choose3").style.top = "487px";
					document.getElementById("choose4").style.top = "518px";
					for (i=0;i<4;i++) {
						document.getElementById("choose"+(i+1).toString()).onclick = "none"
						document.getElementById("choose"+(i+1).toString()).style.visibility = "hidden";
					}
					//3. "캐릭터" 제거
					document.getElementById("sprite").style.visibility = "hidden";
					document.getElementById("changeSprite").style.visibility = "hidden";
				//변수 조절
				endPage = 1;
				page = -1;
				step = 0; //page 초기화 시 step도 초기화
				//배경 조절
				document.getElementById("changeBack").style.backgroundImage = "";//배경옮김이 배경 제거
				document.getElementById("changeBack").style.left = "100%"; //배경옮김이 세팅
				document.getElementById("changeBack").style.visibility="hidden"; // "Image Only"에서 배경 옮김이 제거
				document.getElementById("main").style.backgroundImage = "url('" + images + "front/" + front + ".jpg')";//첫 화면 생성
				document.getElementById("main").style.backgroundSize = "700px 525px";
				//창 안보이게 조절
				if (document.querySelectorAll(".top").length > 0) {
					document.querySelectorAll(".top")[0].style.visibility = "hidden";
				}
				if (document.querySelectorAll(".bottom").length > 0) {
					document.querySelectorAll(".bottom")[0].style.visibility = "hidden";
				}
				document.getElementById("top").style.visibility = "hidden";
				document.getElementById("bottom").style.visibility = "hidden";
				//toNext 안보이게 하기
				document.getElementById('toNext').style.paddingTop="5px";
				document.getElementById('toNext').style.paddingLeft="24px";
				document.getElementById('toNext').style.width="140px";
				document.getElementById('toNext').style.height="26px";
				document.getElementById('toNext').style.backgroundColor="";
				document.getElementById('toNext').style.backgroundPosition="";
				document.getElementById('toNext').style.backgroundRepeat="";
				document.getElementById('toNext').style.border=""
				document.getElementById("toNext").style.visibility = "hidden";
				//페이지 표시
				document.getElementById("now").innerHTML = (step).toString() + "/" + stepMax;
				//화면 클릭 못하게
				document.getElementById("cover").onclick = "none";
			};
			//"시작" 창 : "첫 화면에서 재생 버튼 누르자마자 되돌아가기 클릭" 상황 대비
			document.getElementById("start").innerHTML = "시작";
			document.getElementById("cover").style.backgroundImage = "url('" + images + "guide1.png')";
			document.getElementById("cover").className = "starting";
			document.getElementById("start").style.visibility = "visible";
			document.getElementById("start").onclick = "none";
			document.getElementById("start").onclick = function() {
				clearAuto();
				document.getElementById("start").onclick = "none"
				document.getElementById("start").style.visibility = "hidden"
				dialog(text,0);
			};
		};
	};
		
};



function indexCha(target, num) {
	for (w=0;w<cha.length;w++) {
		if (cha[w][0] == target) {
			if (num == 0) {
				return w;
			} else if (num == 1) {
				return cha[w][1];
			} else {
				return cha[w][2];
			}
		}
	}
}

function indexCoop(target, give) {
	for (w=0;w<coop.length;w++) {
		if (coop[w][0] == target) {
			return coop[w][give];
		}
	}
	return false;
}



function skip() {
	endPage = 1;
}



function spin() {
	if (side == "top") {
		side = "bottom";
	} else {
		side = "top";
	}
}



function clearAuto() {
	clearTimeout(auto);
	document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:orange;'>수동</span> 재생중";
	document.getElementById("play").innerHTML = "▶";
	autoPlay = 0;	
}

function stopAuto() {
	clearTimeout(auto);
	document.getElementById("popup").innerHTML = "자동재생 실행";
	document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:orange;'>분기점</span> 선택중";
	document.getElementById("play").innerHTML = "▶";
	autoPlay = 0;	
}



//textData[1] : 배경 / textData[2] : 대사위치 / textData[3] : 대사 /  textData[4] : 이동수치 / textData[5~7] : 선택지
function wording(at, textData, num, now)
{
	//사전 처리 - 각종 옵션
	option_Dialog = textData[2];
	option_Script = textData[4];
	//현재 위치와 page가 일치할 때만 대사 출력 실시
	if (now == page) {
		//1. 이미지 only (전환 배경 / 전환 캐릭터 : 배경 따라서 자동 이동)
		if (option_Dialog == "0" && option_Dialog != "") {
			textData[3] = Array(50).join("a");
			document.getElementById("changeBack").style.left=((1 - num/(textData[3].length))*100).toString() + "%";
		//2. 일반적 상황 (대사 입력)
		} else {
			//1.1 모든 태그의 열고 닫힘이 이루어졌을 때만 출력
			if ((textData[3].substr(0,num+1).match(/</g) || []).length == (textData[3].substr(0,num+1).match(/>/g) || []).length){
				document.getElementById(at).innerHTML = textData[3].substr(0,num+1);
			} else {
				num++;
				wording(at,textData, num, now);
				return;
			}
		}
		// 1. 출력 대사가 남음
		if (num<textData[3].length)
		{
			if (endPage == 1) {
				num = textData[3].length;
				setTimeout(function() {wording(at,textData, num, now);}, 0);
			} else if (option_Dialog == "0" && option_Dialog != "") {
				num++;
				setTimeout(function() {wording(at,textData, num, now);}, 10);
			} else {
				num++;
				setTimeout(function() {wording(at,textData, num, now);}, textSpeed);
			}
		// 2. 출력 다 했는데, 다음 대사 있음
		} else if (page<lenText-1) {
			//2.1. 공용 : 변수 조절, 배경옮김이 처리
			endPage = 1; //변수 조절
			//2.1.1. 전환 배경/캐릭터 있으면 처리
			if (option_Dialog == "0" && option_Dialog != "") {
				//2.1.1.1 전환 배경 처리
				document.getElementById("main").style.backgroundImage = document.getElementById("changeBack").style.backgroundImage;
				document.getElementById("changeBack").style.backgroundImage = "";
				document.getElementById("changeBack").style.left = "100%"; //전환 배경 이동
				document.getElementById("changeBack").style.visibility="hidden"; // "Image Only"에서 전환 배경 제거
				//2.1.1.2 전환 캐릭터 → 일반 캐릭터
				document.getElementById("sprite").style.visibility="visible"; // 일단 보이게
				document.getElementById('sprite').style.width = null; //너비 초기화
				document.getElementById('sprite').style.height = null; //높이 초기화
				document.getElementById("sprite").src = document.getElementById("changeSprite").src; //주소 대입
				document.getElementById("sprite").style.bottom = document.getElementById("changeSprite").style.bottom;//좌표 대입(bottom)
				document.getElementById("sprite").style.left = document.getElementById("changeSprite").style.left;//좌료 대입(left)
				document.getElementById('sprite').style.width = (parseInt(getNatural(document.getElementById('sprite'),"width")) * 0.875).toString() + "px";
				document.getElementById('sprite').style.height = "auto";
				document.getElementById("changeSprite").src = "";
				document.getElementById("changeSprite").style.visibility="hidden"; // "Image Only"에서 전환 캐릭터 제거
			}
			//2.2. 다음 전개 1 : 화면 클릭
			if (!option_Script || option_Script.constructor !== Array) {
				//2.2.1 이동분량 지정
				if (typeof option_Script == "number") { //text[i][4]에 이동 분량이 지정되어있다면...
					temp = option_Script; //해당 이동분량 삽입
				} else {
					temp = 1; // 없으면 '1'로 고정
				};
				//2.2.2 화면 클릭 설정
				document.getElementById("toNext").style.backgroundImage = "url('" + images + "dialog_enter.png')";
				document.getElementById("cover").onclick = "none";
				document.getElementById("cover").onclick = function() {
					clearAuto();
					dialog(text,page+temp);
				};
				//2.2.3 Auto 조절
				if (autoPlay == 1) {
					if (option_Dialog == "0" && option_Dialog != "") {
						auto = setTimeout(function() {
						dialog(text,page+temp);
						}, Math.max(autoTime*1000,3000));
					} else {
						auto = setTimeout(function() {
						dialog(text,page+temp);
						}, autoTime*1000);
					}
				}
			//2.3. 다음 전개 2 : 선택지 클릭 (스토리 분기점)
			} else {
				//2.3.0 Auto무조건 정지, 자동재생 여부 임시저장
				autoTemp = autoPlay;
				stopAuto();
				//2.3.1 이동용 버튼 "틀" 생성 ('2'번 대사위치 한정)
				if (option_Dialog == "2") {
					document.getElementById("bottom").style.visibility = "visible";
					document.getElementById("bottom").style.opacity = 1;
					document.getElementById("bottomName").innerHTML = "";
					document.getElementById("bottomText").innerHTML = "";
					//틀에 맞게 선택지 배치
					document.getElementById("choose1").style.top = "394px";
					document.getElementById("choose2").style.top = "425px";
					document.getElementById("choose3").style.top = "456px";
					document.getElementById("choose4").style.top = "487px";
				}
				//2.3.2 이동용 버튼 생성
				//.0 방해 되는거 가리기
				document.getElementById("toNext").style.visibility = "hidden";
				//.1 각 버튼마다 개별 설정 (+ 기존 화면 클릭 무력화)
				document.getElementById("cover").onclick = "none";
				for (i=0;i<option_Script.length;i++) {
					if (textData[4][i] != undefined) { //해당 선택지에 이동값이 할당되었을 때만 시행
						document.getElementById("choose" + (i+1).toString()).style.visibility = "visible";
						document.getElementById("choose" + (i+1).toString()).innerHTML = textData[i+5];
						document.getElementById("choose" + (i+1).toString()).onclick = "none";
						// 이동용 버튼 선택 시 
						document.getElementById("choose" + (i+1).toString()).onclick = function(target) {
							return function() {//onclick에 i 이식 (출처 : http://stackoverflow.com/questions/6048561/setting-onclick-to-use-current-value-of-variable-in-loop)
								//2.3.2.0 버튼 "틀" 숨기기 ('2'번 대사위치 한정)
								if (option_Dialog == "2") {
									document.getElementById("bottom").style.visibility = "hidden";
									//틀에 맞게 배치된 선택지 복구
									document.getElementById("choose1").style.top = "425px";
									document.getElementById("choose2").style.top = "456px";
									document.getElementById("choose3").style.top = "487px";
									document.getElementById("choose4").style.top = "518px";
								}
								//2.3.2.1 버튼 숨기기
								for (i=0;i<option_Script.length;i++) {
									document.getElementById("choose" + (i+1).toString()).style.visibility = "hidden";
								}
								//2.3.2.2 자동 재생 설정
								if (autoTemp == 1) {//분기점 이전에 자동재생 상태였을 경우
									autoPlay = 1;
									document.getElementById("popup").innerHTML = "자동재생 정지";
									document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:lightgreen;'>자동</span> 재생중 (" + autoTime+ "초)";
									document.getElementById("play").innerHTML = "||";
								} else {
									document.getElementById("popup").innerHTML = "자동재생 실행";
									document.getElementById("auto").innerHTML = "<span style='font-family:SSTM;color:orange;'>수동</span> 재생중";
									document.getElementById("play").innerHTML = "▶";
								};
								autoTemp = -1;//(자동재생 설정 이후) autoTemp 초기화 (자동/수동 여부 상관없이 변경되었기에, 초기화도 무조건 실시)
								//2.3.2.3 이동 개시
								dialog(text,page+textData[4][target]);
							}
						}(i);
					}
				};
			};

		// 3. 출력 다 했고, 다음 대사 없음 (=종료)
		} else {
			//3.1. 기능 처리
				//3.1.1 자동재생 종료
				clearAuto();
			//3.2. 오브젝트 처리
				//3.1.1 전환 배경/캐릭터 있으면 처리
				if (option_Dialog == "0" && option_Dialog != "") {
					//3.1.1.1 전환 배경 처리
					document.getElementById("main").style.backgroundImage = document.getElementById("changeBack").style.backgroundImage;
					document.getElementById("changeBack").style.backgroundImage = "";
					document.getElementById("changeBack").style.left = "100%"; //전환 배경 이동
					document.getElementById("changeBack").style.visibility="hidden"; // "Image Only"에서 전환 배경 제거
					//3.1.1.2 전환 캐릭터 → 일반 캐릭터
					document.getElementById("sprite").style.visibility="visible"; // 일단 보이게
					document.getElementById('sprite').style.width = null; //너비 초기화
					document.getElementById('sprite').style.height = null; //높이 초기화
					document.getElementById("sprite").src = document.getElementById("changeSprite").src; //주소 대입
					document.getElementById("sprite").style.bottom = document.getElementById("changeSprite").style.bottom;//좌표 대입(bottom)
					document.getElementById("sprite").style.left = document.getElementById("changeSprite").style.left;//좌료 대입(left)
					document.getElementById('sprite').style.width = (parseInt(getNatural(document.getElementById('sprite'),"width")) * 0.875).toString() + "px";
					document.getElementById('sprite').style.height = "auto";
					document.getElementById("changeSprite").src = "";
					document.getElementById("changeSprite").style.visibility="hidden"; // "Image Only"에서 전환 캐릭터 제거
				}
				//3.2.2 버튼 처리
				document.getElementById("cover").onclick = "none";
				document.getElementById("start").innerHTML = "끝";
				document.getElementById("cover").style.backgroundImage = "url('" + images + "guide2.png')";
				document.getElementById("cover").className = "ending";
				document.getElementById("start").style.visibility = "visible";
				//3.2.3 toNext 처리
				document.getElementById('toNext').style.paddingTop="5px";
				document.getElementById('toNext').style.paddingLeft="24px";
				document.getElementById('toNext').style.width="140px";
				document.getElementById('toNext').style.height="26px";
				document.getElementById('toNext').style.backgroundColor="";
				document.getElementById('toNext').style.backgroundPosition="";
				document.getElementById('toNext').style.backgroundRepeat="";
				document.getElementById('toNext').style.border=""
				document.getElementById("toNext").style.visibility = "hidden";
		}
	}
}



function dialog(text,i) { //대사 출력 & 이미지 출력 설정
	endPage = 0;
	page = i;
	step += 1;//대화 시작 시 step 증가
	
	//※ '이동 only(3)'인 경우 : 다 무시하고 이동 실시
	if (text[i][2] == "3") {
		if (i+text[i][4] == 0) { //이동할 경우 첫 페이지로 돌아간다면
			step = 0;//반드시 "0" 표시 (무한 반복을 통한 step 꼬임 방지)
			//처음으로 돌아왔다고 표기
			document.getElementById("popup").style.backgroundColor="orange";
			document.getElementById("popup").style.left = "297px";
			document.getElementById("popup").innerHTML = "첫 페이지 입니다";
		} else {//일반적인 경우
			step -= 1;//'이동 only'는 "뒤로"를 클릭했을 때만 발생 → step을 하나 깎아줌
		}
		dialog(text,i+text[i][4]);
		return;
	}
	
	//페이지 번호 표시
	document.getElementById("now").innerHTML = (step).toString() + "/" + stepMax; // 현재 페이지번호 출력
	
	//cover 처리
	document.getElementById("cover").style.backgroundImage = "url('" + images + "guide0.png')"; //툴팁 닫기
	document.getElementById("cover").className = "";
	document.getElementById("cover").onclick = "none";
	document.getElementById("cover").onclick = function() {
		clearAuto();
		skip();
	};
	
	
	//배경 조성
	//1. 배경옮김이 잔재 제거
		//1.1 전환 배경 제거
		document.getElementById("changeBack").style.backgroundImage = "";//전환 배경 비우기
		document.getElementById("changeBack").style.left = "100%"; //전환 배경 이동
		document.getElementById("changeBack").style.visibility="hidden"; // "Image Only"에서 전환 캐릭터 제거
		//1.2 전환 캐릭터 제거
		document.getElementById("changeSprite").style.backgroundImage = "";//전환 캐릭터 비우기
		document.getElementById("changeSprite").style.left = "100%"; //전환 캐릭터 이동
		document.getElementById("changeSprite").style.visibility="hidden"; // "Image Only"에서 전환 캐릭터 제거
	//2. 배경 조성 실시
	if (text[i][1] != "" && text[i][2] != "0") { //if not (배경입력칸 공란 or "Image only")
		if (jobCode == 90) {//개그 : 전용 배경 사용
			document.getElementById('main').style.backgroundImage="url('" + images + jobCode + "/" + text[i][1] + ".jpg')";
		} else {//나머지 : 공용 배경 사용
			//2.1. 배경 조성
			document.getElementById('main').style.backgroundImage="url('" + images + "back/" + text[i][1] + ".jpg')";
			//2.2. 캐릭터 (있으면) 배치
			if (indexCoop(text[i][1],0)) {//캐릭터 배치해야되면
				//2.2.1 캐릭터 보이게
				document.getElementById('sprite').style.visibility = "visible";
				//2.2.2 캐릭터 호출
				document.getElementById('sprite').style.width = null;
				document.getElementById('sprite').style.height = null;
				document.getElementById('sprite').src = images + "character/" + jobCode + "_" + indexCoop(text[i][1],1) + ".png";
				document.getElementById('sprite').style.width = (parseInt(getNatural(document.getElementById('sprite'),"width")) * 0.875).toString() + "px";
				document.getElementById('sprite').style.height = "auto";
				//2.2.3 캐릭터 위치 설정
				document.getElementById('sprite').style.bottom = indexCoop(text[i][1],3).toString() + "px";
				document.getElementById('sprite').style.left = indexCoop(text[i][1],2).toString() + "px";
			} else {//캐릭터 배치하면 안되면 ("Image Only"는 아니지만 캐릭터 배치 X)
				//2.2.4 캐릭터 안보이게
				document.getElementById('sprite').style.visibility = "hidden";
			}
		}
		document.getElementById('main').style.backgroundSize="700px 525px";
	} 
	
	
	//대사 나올 위치 지정, 거기에 있는 이미지 숨기기
	if (i == 0 && text[i][2] != "2") { //첫 시작 시 ("2"가 아니라면 무조건 아래)
		side = "bottom"
	} else if (text[i][2] == "0" || text[i][2] == "1") { //"창 클리어 후 아래 고정" 또는 "Image Only"
		for (x=0;x<listCha.length;x++) {
			if (document.getElementById('img' + listCha[x]).className == "bottom"){
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";
			} else if (document.getElementById('img' + listCha[x]).className == "top") {
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";
			};
		};
		document.getElementById("top").style.visibility = "hidden";
		document.getElementById("bottom").style.visibility = "hidden";
		side = "bottom";
	} else if (text[i][2] == "2" ) { //창 클리어 후 위 고정
		for (x=0;x<listCha.length;x++) {
			if (document.getElementById('img' + listCha[x]).className == "bottom"){
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";
			} else if (document.getElementById('img' + listCha[x]).className == "top") {
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";
			};
		};
		document.getElementById("top").style.visibility = "hidden";
		document.getElementById("bottom").style.visibility = "hidden";
		side = "top";
	} else if (text[i][0] != lastSpeaker) { //화자 변경 시 : 위아래 전환
		spin();
	}

	
	//대사가 나올 대사창 생성, 이름 등장
	if (text[i][2] != "0") { //"Image Only"가 아니라면
		document.getElementById(side).style.visibility = "visible";
		document.getElementById(side + "Name").innerHTML = indexCha(text[i][0],1);
		lastSpeaker = text[i][0]; //이름 별도로 저장 (화자 변경 판별용)
	};
	
	
	//이미지 배치, toNext 배치
	if (text[i][2] == "0") { //"Image Only일 경우"
		//toNext만 배치
		document.getElementById('toNext').style.top = "496px";
		document.getElementById('toNext').style.left = "239px";
		document.getElementById('toNext').style.visibility = "visible";
		//toNext 크기 조절
		document.getElementById('toNext').style.paddingTop="4px";
		document.getElementById('toNext').style.paddingLeft="50px";
		document.getElementById('toNext').style.width="171px";
		document.getElementById('toNext').style.height="23px";
		document.getElementById('toNext').style.backgroundColor="#242424";
		document.getElementById('toNext').style.backgroundPosition="27px -1px";
		document.getElementById('toNext').style.backgroundRepeat="no-repeat";
		document.getElementById('toNext').style.border="1px gray solid";
	} else if (side=="bottom") { // 아래에 배치
		//이미지 지우기 & 투명도 증가
		for (x=0;x<listCha.length;x++) {
			if (document.getElementById('img' + listCha[x]).className == "bottom"){
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";
			} else if (document.getElementById('img' + listCha[x]).className == "top") {
				document.getElementById('img' + listCha[x]).style.opacity=0.7;	
			}
		}
		document.getElementById('top').style.opacity=0.7;
		//이미지 위치시키기
		document.getElementById('img' + indexCha(text[i][0],2)).className = "bottom";
		document.getElementById('img' + indexCha(text[i][0],2)).style.bottom = "7px";
		document.getElementById('img' + indexCha(text[i][0],2)).style.left = "10px";
		document.getElementById('img' + indexCha(text[i][0],2)).style.opacity=1;
		//대사 캐릭터 이미지 등장
		document.getElementById('img' + indexCha(text[i][0],2)).style.visibility = "visible";
		//이미지 투명도 제거
		document.getElementById('bottom').style.opacity=1;
		//toNext 배치, 등장
		document.getElementById('toNext').style.top = "488px";
		document.getElementById('toNext').style.left = "445px";
		document.getElementById('toNext').style.visibility="visible";
		//toNext 초기화
		document.getElementById('toNext').style.paddingTop="5px";
		document.getElementById('toNext').style.paddingLeft="24px";
		document.getElementById('toNext').style.width="140px";
		document.getElementById('toNext').style.height="26px";
		document.getElementById('toNext').style.backgroundColor="";
		document.getElementById('toNext').style.backgroundPosition="";
		document.getElementById('toNext').style.backgroundRepeat="";
		document.getElementById('toNext').style.border="";
		
	} else { // 위에 배치
		//이미지 지우기 & 투명도 증가
		for (x=0;x<listCha.length;x++) {
			if (document.getElementById('img' + listCha[x]).className == "top"){
				document.getElementById('img' + listCha[x]).className = "";
				document.getElementById('img' + listCha[x]).style.visibility = "hidden";	
			} else if (document.getElementById('img' + listCha[x]).className == "bottom") {
				document.getElementById('img' + listCha[x]).style.opacity=0.7;
			}
		}
		document.getElementById('bottom').style.opacity=0.7;	
		//이미지 위치시키기
		document.getElementById('img' + indexCha(text[i][0],2)).className = "top";
		document.getElementById('img' + indexCha(text[i][0],2)).style.bottom = "310px";
		document.getElementById('img' + indexCha(text[i][0],2)).style.left = "501px";
		document.getElementById('img' + indexCha(text[i][0],2)).style.opacity=1;	
		//대사 캐릭터 이미지 등장
		document.getElementById('img' + indexCha(text[i][0],2)).style.visibility = "visible";
		//이미지 투명도 제거
		document.getElementById('top').style.opacity=1;	
		//toNext 배치, 등장
		document.getElementById('toNext').style.top = "185px";
		document.getElementById('toNext').style.left = "335px";
		document.getElementById('toNext').style.visibility="visible";
		//toNext 초기화
		document.getElementById('toNext').style.paddingTop="5px";
		document.getElementById('toNext').style.paddingLeft="24px";
		document.getElementById('toNext').style.width="140px";
		document.getElementById('toNext').style.height="26px";
		document.getElementById('toNext').style.backgroundColor="";
		document.getElementById('toNext').style.backgroundPosition="";
		document.getElementById('toNext').style.backgroundRepeat="";
		document.getElementById('toNext').style.border="";
	}
	
	//대사 읽기 대기 - toNext를 "스킵"으로 바꿈
	document.getElementById("toNext").style.backgroundImage = "url('" + images + "dialog_skip.png')";
	
	//대사 읽기 시작
	//IF "Image Only"
	if (text[i][2] == "0") { //"Image Only" → 배경옮긺이 호출
		//1. 전환 배경 배치
		if (jobCode == 90) {//개그 : 전용 배경 사용
			document.getElementById('changeBack').style.backgroundImage="url('" + images + jobCode + "/" + text[i][1] + ".jpg')";
		} else {//나머지 : 공용 배경 사용
			document.getElementById('changeBack').style.backgroundImage="url('" + images + "back/" + text[i][1] + ".jpg')";
		}
		document.getElementById('changeBack').style.backgroundSize="700px 525px";
		document.getElementById("changeBack").style.visibility="visible"; //배경옮김이 호출
		//2. 전환 캐릭터 배치
		if (indexCoop(text[i][1],0)) {//캐릭터 배치해야되면
			//2.1 전환 캐릭터 보이게
			document.getElementById('changeSprite').style.visibility = "visible";
			//2.2 전환 캐릭터 호출
			document.getElementById('changeSprite').style.width = null;
			document.getElementById('changeSprite').style.height = null;
			document.getElementById('changeSprite').src = images + "character/" + jobCode + "_" + indexCoop(text[i][1],1) + ".png";
			document.getElementById('changeSprite').style.width = (parseInt(getNatural(document.getElementById('changeSprite'),"width")) * 0.875).toString() + "px";
			document.getElementById('changeSprite').style.height = "auto";
			//2.3 전환 캐릭터 위치 설정
			document.getElementById('changeSprite').style.bottom = indexCoop(text[i][1],3).toString() + "px";
			document.getElementById('changeSprite').style.left = indexCoop(text[i][1],2).toString() + "px";
		} else {//전환 캐릭터 배치하면 안되면
			//2.4 전환 캐릭터 안보이게
			document.getElementById('changeSprite').style.visibility = "hidden";
		}
	}
	wording(side + "Text", text[i], 0, page);

}

//==========================================================================================================================================
// ※ Onload
//==========================================================================================================================================
window.onload = function() { //이미지 선로딩 외엔 모두 getPage에서 실시
	

	//외부 패러미터 호출 (빈 값이 아니면 대입시키기)
	if (new gadgets.Prefs().getString("autoGo")) { autoPlay = parseInt(new gadgets.Prefs().getString("autoGo")); };
	if (new gadgets.Prefs().getString("displayTime")) { autoTime = parseInt(new gadgets.Prefs().getString("displayTime")); };
	if (new gadgets.Prefs().getString("speed")) {	textSpeed = parseInt(new gadgets.Prefs().getString("speed")); };
	if (new gadgets.Prefs().getString("selectName")) { name = new gadgets.Prefs().getString("selectName"); };
	if (new gadgets.Prefs().getString("selectJob")) {	jobCode = parseInt(new gadgets.Prefs().getString("selectJob")); };
	if (new gadgets.Prefs().getString("selectClass")) {	classCode = parseInt(new gadgets.Prefs().getString("selectClass")); };
		//주인공 모험가 이름, 일러스트 중복 설정 (오류 방지)
		cha[0][1] = name;
		cha[0][2] = "a" + (jobCode).toString();

	//대사 스크립트 불러오기
	tempFile = new gadgets.Prefs().getString("selectFile");
	if ( tempFile ){
		//로딩 안내 : 대사집 로딩
		document.getElementById("start").innerHTML = "대사집 로딩 중...";
		//호출 실시
		loadJs("https://googledrive.com/host/0B6rCL-wkBAtKflNscVdlNnZGMG16UHdXSnRnd0NMYXkzamYyM0MyT2cyd3MteTNITWZsOW8\
		/" + (jobCode).toString() + "/" + (classCode).toString() + "/" +tempFile + ".js", function() {
			//※ 대사집 불러오기 전까진 다른 작업 수행 금지
			
			//1. 각종 이미지 선로딩 작업 대상 정리 (※ 주의 : IE는 별도로 로드하기에, 수정 시 함수도 수정할것)
			//1.1 로딩 안내 : 이미지 로딩
			document.getElementById("start").innerHTML = "그림 로딩 중...";

			//선로딩 준비
			imageList = [];
			//1.1. 배경 선로딩
			for (i=0;i<text.length;i++) {
				if (typeof text[i][1] != 'undefined') {
					if (text[i][1] != "") {
						if (jobCode == 90) {//개그 : 전용 배경 사용
							if (imageList.indexOf(images + jobCode + "/" + text[i][1] + ".jpg") == -1) {
								imageList.push(images + jobCode + "/" + text[i][1] + ".jpg");
							}
						} else {//나머지 : 공용 배경 사용
							if (imageList.indexOf(images + "back/" + text[i][1] + ".jpg") == -1) {
								imageList.push(images + "back/" + text[i][1] + ".jpg");
							}
						}
					}
				}
			};
			//1.2. 인물 이미지 선로딩
			for (i=0;i<cha.length;i++) {
				for (j=0;j<text.length;j++){
					if (cha[i][0] != "" && cha[i][0] == text[j][0]) {
						imageList.push(images + "portrait/" + cha[i][2] +".png");
						break;
					};
				};
			}
			//1.3. 첫배경 선로딩
			if (front != "") {
				imageList.push(images + "front/" + front + ".jpg");
			};
			//1.4. 캐릭터 선로딩
			if (jobCode != 90) {
				imageList.push(images + "character/" + jobCode + "_L.png");
				imageList.push(images + "character/" + jobCode + "_R.png");
			}
			//1.5. 기타 선로딩
			imageList.push(images + "guide0.png");//pupup
			imageList.push(images + "guide1.png");
			imageList.push(images + "guide2.png");
			imageList.push(images + "dialog_frame.png");//대사창
			imageList.push(images + "dialog_skip.png");//스킵&클릭
			imageList.push(images + "dialog_enter.png");
			imageList.push(images + "return.png");//되돌아가기
			imageList.push(images + "radio0.png");//선택지
			imageList.push(images + "radio1.png");
			imageList.push(images + "radio2.png");
			
			//1.2. 선로딩 실시
			loadImages(imageList,function(){
				//※ 이미지 선로딩 전까지 다른 작업 수행 금지
				
				//로딩 안내 : 마무리
				document.getElementById("start").innerHTML = "마무리 중...";
				
				// 총 페이지수 계산, '전체 페이지' 설정
				lenText = 0; 
				for (i=0;i<text.length;i++) {
					if (!(text[i][0] == "" && text[i][1] == "" && text[i][2] == "" && text[i][3] == "")) {
						lenText += 1;
						if (text[i][4]) {
							if (typeof text[i][4] == 'number'|| text[i][4].constructor === Array) { //대사에서 "이동 기능"이 사용되었을 경우
								stepMax = "??"; //전체 페이지는 "??"로 출력
							}
						}
					}
				}
				if (stepMax != "??") { //대사에서 "이동 기능"이 사용되었을 경우
					stepMax = lenText.toString(); //전체 페이지 정상 출력
				}
				
				//모바일 클릭 딜레이 완화
				var meta = document.createElement('meta');
				meta.name = "viewport";
				meta.content = "width=device-width, user-scalable=no";
				document.getElementsByTagName('head')[0].appendChild(meta);
				
				
				document.getElementById("return").onmouseover = function() {
					if (document.getElementById("cover").className != "starting" && document.getElementById("cover").className != "ending"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "5px";
						document.getElementById("popup").innerHTML = "첫 화면으로 돌아가기";
						document.getElementById("popup").style.visibility="visible";
					}
				};
					document.getElementById("return").onmouseout = function() {
						document.getElementById("popup").style.visibility="hidden";
					};
				document.getElementById("auto").onmouseover = function() {
					if (document.getElementById("cover").className != "starting"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "100px";
						document.getElementById("popup").innerHTML = "현재 자동재생 실행 여부";
						document.getElementById("popup").style.visibility="visible";
					}
				};
				document.getElementById("auto").onmouseout = function() {
						document.getElementById("popup").style.visibility="hidden";
					};
				document.getElementById("play").onmouseover = function() {
					if (document.getElementById("cover").className != "starting"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "223px";
						if (autoPlay == 1) {
							document.getElementById("popup").innerHTML = "자동재생 정지";
						} else {
							document.getElementById("popup").innerHTML = "자동재생 실행";
						}
						document.getElementById("popup").style.visibility="visible";
					}
				};
					document.getElementById("play").onmouseout = function() {
						document.getElementById("popup").style.backgroundColor="yellow";//autoTemp 관련 색상변경 이벤트 후속조치
						document.getElementById("popup").style.visibility="hidden";
					};
				document.getElementById("toBefore").onmouseover = function() {
					if (document.getElementById("cover").className != "starting"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "285px";
						document.getElementById("popup").innerHTML = "이전 대화로 돌아가기";
						document.getElementById("popup").style.visibility="visible";
					}
				};
					document.getElementById("toBefore").onmouseout = function() {
						document.getElementById("popup").style.backgroundColor="yellow";//"첫페이지 복귀시" 관련 색상변경 이벤트 후속조치
						document.getElementById("popup").style.visibility="hidden";
					};
				document.getElementById("title").onmouseover = function() {
					if (document.getElementById("cover").className != "starting"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "432px";
						document.getElementById("popup").innerHTML = "현재 진행중인 퀘스트 대상";
						document.getElementById("popup").style.visibility="visible";
					}
				};
					document.getElementById("title").onmouseout = function() {
						document.getElementById("popup").style.visibility="hidden";
					};
				document.getElementById("now").onmouseover = function() {
					if (document.getElementById("cover").className != "starting"){
						document.getElementById("popup").style.top = "505px";
						document.getElementById("popup").style.left = "555px";
						document.getElementById("popup").innerHTML = "현재 페이지 / 전체 페이지";
						document.getElementById("popup").style.visibility="visible";
					}
				};
					document.getElementById("now").onmouseout = function() {
						document.getElementById("popup").style.visibility="hidden";
					};
					
					
				getPage(0); //페이지 선로딩 (후 실행)
				
				
			});//이미지 선로딩 종료
		});//대사집 불러오기 종료
		
	} else {
		alert("※ 오류 : 불러올 대사집이 지정되지 않았습니다.\
		\n대사 위치 : https://googledrive.com/host/0B6rCL-wkBAtKflNscVdlNnZGMG16UHdXSnRnd0NMYXkzamYyM0MyT2cyd3MteTNITWZsOW8\
		/" + (jobCode).toString() + "/" + (classCode).toString() + "/" +tempFile + ".js");
		return false;
	}
};