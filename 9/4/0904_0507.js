﻿var front;
var title;
var text;

front = "backF05";//첫 뒷배경 (.jpg 형식)
title = "끝없는 악몽";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["브왕가","back050005","","악몽 속에서 만난 자들이 각자 의지를 가지고 있고, 또한 그들의 물건이 이곳에서 존재할 수 있었던 이유는 그곳 역시 실존하는 세계였기 때문이로군.",,"","",""],
["브왕가","","","우리가 본 것은 몬스터의 악몽도, 다른 세계의 투영도 아니었고, 차원 너머에 실존하고 있는 또다른 아라드였던 거지.",,"","",""],
["브왕가","","","모험가가 본 아간조가 시란에게 싸움을 걸고 있었다고 했지. 그 때 이미 아간조는 우리가 지금 알게 된 사실을 확인하고 있었던 것이었나보군.",,"","",""],
["미쉘","","","확실히 시란 님 정도 되는 검호를 제아무리 검은 악몽이라고 해도 눈속임으로 만들어낼 수는 없을 테니까요... 게다가 제실력을 낸 시란 님을 상대하며 '진짜'라는 것을 확인할 수 있을 만한 사람 역시 브왕가 님 아니면 아간조 님 정도뿐이니까...",,"","",""],
["모험가","","","아간조 님은 최소한 우리가 추적하고 있는 만큼은 알고 계신다는 거로군요. 그러면 이제 어떻게 하죠?",,"","",""],
["브왕가","","2","꿈의 문을 닫아야하네. 악몽이 다른 세계를 조금씩이나마 전이시키고 있는 것은 굉장히 심각한 일일세. 대전이의 비극을 생각해 보게.",,"","",""],
["브왕가","","","어쩌다가 다른 세계 자체를 전이시킨다는 당돌한 생각을 하게 되었는지는 모르겠지만, 저곳에서 익힌 술수로 아라드에 다른 세계톨 전이시킨다면 큰일일세.",,"","",""],
["미쉘","","","그러면 역시 꿈의 문... 그러니까 차원이 열린 틈 자체를 닫아야겠군요.",,"","",""],
["미쉘","","1","하지만 지금은 악몽의 힘이 강해서 닫는 것이 어려워요. 조금이지만 빙벽에 봉인된 몬스터들에게서 검은 악몽이 계속 흘러들어가고 있기도 하고...",,"","",""],
["브왕가","","","내가 틈 날 때마다 봉인을 강화하고 있었지만 검은 악몽이 단순한 현상이 아닌 만큼 산사태를 손바닥으로 막는 수준밖에 되지 않아. 자칫했다간 도리어 봉인이 깨어질 수도 있어서 난감하군.",,"","",""],
["브왕가","","","우리에겐 남은 시간이 그다지 없어. 하지만 다행인 것은 악몽에게도 마찬가지라는 거네.",,"","",""],
["브왕가","","","오싹할 정도로 사악한 기를 뿜어내던 꿈의 문도 많이 기세가 약해졌네. 다른 세계를 전이시키는 것이 악몽에게도 부담스러운 일이었을 테지. 그걸 몇 번이고 격파당하였으니 저쪽도 한계일 거야.",,"","",""],
["브왕가","back050005","","미쉘. 자네가 안을 살펴보고 악몽의 기세가 가장 강한 곳으로 모험가를 인도하게.",,"","",""],
["","back050700","0","",,"","",""],
["미쉘","back050000","2","이번에 모험가님께 보여드린 곳은 악몽의 기운으로도 숨길 수 없을 정도로 전이의 힘이 강한 곳이예요. 부디 이번 탐색도 무사히 마치시길...",,"","",""],
["미쉘","","1","그런데 그곳의 모습은 어떠했나요?",,"","",""],
["미쉘","","","또 GBL교의 모습이 보였다고요...? 전에 가셨던 곳인가요?",,"","",""],
["모험가","","","아뇨... 조금 달랐어요. 이곳도 신전인 것 같긴 한데 분위기가... 좀더 학구적인 느낌이 들더군요.",,"","",""],
["미쉘","","","원래 GBL교는 학구적인 교리로 유명하지만 그 중에서도 더욱 연구하는 곳으로 느끼셧다면 어쩌면 GBL교의 대도서관일지도 모르겠군요.",,"","",""],
["미쉘","","","대전이 전에 아라드 대륙 어딘가에 숨겨져 있었다고 들었는데 그곳을 보신 건지도...",,"","",""],
["모험가","","","원래라면 더 평화로운 곳이었겠죠. 하지만 악몽이나 전이가 아닌 뭔가 이상한 기분이 드는 곳이었어요.",,"","",""],
["모험가","","","미셀이 빨리 살펴주는 게 좋을 것 같으니 준비를 해올게요. 조금만 기다려요.",,"","",""],
["미쉘","back050000","2","모험가님이 경계하시는 것이 무엇인지 저도 똑바로 살펴볼게요.",,"","",""],
["브왕가","back050005","1","전이나 악몽이 아니라 다른 것을 느꼈다고? 그 정체모를 위압감은 분명 자네를 잡아두기 위해 악몽이 전이시킨 덫이라고 생각하네.",,"","",""],
["브왕가","back050005","","지금으로서는 자네가 돌아보면서 그것이 무엇인지 살펴보는 게 급선무야.",,"","",""],
["","back050701","0","",,"","",""],
["미쉘","back050000","2","모, 모험가님... 혹시 알아채셨나요? 저 GBL교의 신자들이 숨기고 있는 거대한 알에서 뿜어져나오는 엄청나게 불길한 파장을...",,"","",""],
["모험가","","","네. 생각하기도 싫지만 그건 로터스의 알이었어요. 왠지 전에 겪어본 것 같았는데 뭔가 다르더라니, 본인이 아니라 알이었기 때문이었어요.",,"","",""],
["미쉘","","1","모험가님이 가신 곳은 그 알을 위해 세운 신전이나 다름없어요. 사도의 알 속에 숨긴 힘은 제 상상을 초월하겠지요. 하지만 다행히도 부화하기에는 아직 때가 되지 않은 것 같아요.",,"","",""],
["모험가","","","그럼 그것이 깨어나기 전에 없애야겠군요.",,"","",""],
["미쉘","","","네... 하지만 GBL교가 용서하지 않을 거예요. 그 분들은 그 알을 지키기 위해... 어떤 수단과 방법을 가리지 않을 테니까요.",,"","",""],
["미쉘","","2","로터스가 베히모스에 전이한 바람에 GBL교의 여러분은 계속 비극을 겪으시는군요...",,"","",""],
["미쉘","","1","방해하는 분들이 계시겠지만 로터스의 알이 부화하면 악몽보다도 더 끔찍한 존재가 되어버릴 거예요... 비록 전이된 세계라고는 하지만 꿈의 문이 강제로 열리고 있는 한, 언제 이 아라드로 다시 전이될지 모르니 더더욱 위험하죠.",,"","",""],
["미쉘","back050000","","모험가님. 로터스의 알을 파괴하여 두 번 다시 그의 악몽이 슬픔을 불러오지 못하도록 해주세요.",,"","",""],
["","back050702","0","",,"","",""],
["이사도라2","back050703","1","우리의 오랜 염원을 파괴하다니, 도저히 용서할 수 없다! 이단자!",,"","",""],
["모험가","","","이 목소리는...",,"","",""],
["이사도라2","back050703","2","조금만 더 있었더라면... 로터스 님이 부활하셨을 것을...",,"","",""],
["미쉘","back050000","2","그렇군요. 이 세계에서 알고 계시는 분이 그곳에서는.... 하지만 미리 파괴할 수 있어서 다행이에요.",,"","",""],
["미쉘","back050000","","로터스의 알에서 새어나오는 지배력이 그 분의 정신을 올바르지 못하게 했을 테니까... 그러니까 이것으로 잘 된 거라고 생각해요.",,"","",""],
["브왕가","back050005","1","이야기는 들었네. 로터스의 알이라니... 터무니 없는 짓을 하는 자들은 어딜 가나 있는 법이로군.",,"","",""],
["브왕가","","","하지만 자네 덕분에 악몽이 파놓은 덫을 미리 제거할 수 있어서 다행이네. 이제는 전이된 악몽 속의 세계가 안정되기 전에 격파하는 일뿐일세.",,"","",""],
["브왕가","","2","수고했으나. 이걸로는 위협을 가하기엔 부족하겠군.",,"","",""],
["브왕가","","1","점점 저 안쪽에서 불길한 힘이 커져가는 것이 느껴지는가? 언제부턴가 꿈의 문 바깥으로까지 전이의 힘이 새어나오고 있네. 사도의 알까지 함께 전이를 시킨만큼, 이번 세계는 악몽의 근원이 모든 힘을 끌어모아 전이시켰다고 보아도 충분하겠지.",,"","",""],
["브왕가","","","위험하지. 확실히 위험해. 하지만 반대로 보면 이것은 기회네.",,"","",""],
["브왕가","","","내가 미쉘과 논의해본 결과, 악몽이 저다지도 엄청난 짓을 벌일 수 있는 것은 전이된 장소가 다름아닌 악몽 자신의 영역이기 때문이라는 결론이 나왔네. 전이가 쉽게 이루어지는 힘이 있는 것이 아닐까.",,"","",""],
["브왕가","","","하지만 지금까지의 일을 생각해 보아도, 안정되기 전에 방해하면 저곳에 전이된 세계를 원래의 곳으로 되돌릴 수 있어. 전이를 취소시킬 수 있다는 것은 굉장히 희망적인 이야기지 않나?",,"","",""],
["브왕가","","","그러니 조금만 더 신중하고 주의깊게, 그러나 재빠르게 움직이도록 하세.",,"","",""],
["브왕가","","2","곰이 보기에는 느려보여도 누구보다 빨리 달려 한 방에 먹이를 쓰러뜨리지. 우리 반투족의 전사들이 외부인인 자네를 곰에 비유하며 인정하는 듯하더군.",,"","",""],
["브왕가","","1","자네가 악몽 속으로 들어간 동안 나는 빙벽에 봉인된 몬스터에게서 악몽이 더이상 흘러나오는 것을 막고 있다고 말했지? 그런데 그것도 이제 한계에 치달았네.",,"","",""],
["브왕가","","","악몽이 발악을 하는 건지 외부에 있는 또다른 검은 악몽을 계속하여 불러들이고 있는 듯하네.",,"","",""],
["브왕가","","","문을 빨리 닫는 수밖에는 더이상 이쪽에서 손을 쓸 방도가 없어.",,"","",""],
["브왕가","back050005","","내 생각엔 힘이 강한 자를 전이시킬 때 악몽의 부담이 컸을테니, 그 자의 존재를 약화시키면 악몽의 힘도 약해지지 않을까 싶네만, 저 안에 그런 강자가 있는가?",,"","",""],
["반젤리스2","back050704","1","드디어 이곳으로 왔는가. 우리 GBL교에 내려진 예언을 실행하는데 방해가 되는 외부자여. 네놈의 피를 바쳐 로터스 님의 복수를 완성하겠다!",,"","",""],
["모험가","back050704","","...반젤리스...",,"","",""],
["브왕가","back050005","2","마침내 기다리고 있던 흔들림이 느껴지는군.",,"","",""],
["브왕가","","","기색을 보아하니 악몽의 근원이 모습을 드러낸 모양이로군. 어쩌겠는가? 지금까지보다 더 성가실 것이 분명하네. 피곤하다면 내가 도와줄 수도 있어.",,"","",""],
["모험가","","","괜찮습니다. 브왕가 님도 계속 악몽이 흘러가는 것을 막기 위해 고생하셨고... 지금까지 제가 상대해 온 적이니, 마무리도 제가 짓고 싶습니다.",,"","",""],
["브왕가","back050005","","마음에 드는 대담이로군. 그럼 미쉘과 함께 다녀오게.",,"","",""],
["미쉘","back050705","1","모험가님... 지금까지와는 낌새가 달라요. 악몸이 자신의 힘을 담은 악령을 여기저기에 숨겨놓고 있어요. 조심해 주세요.",,"","",""],
["악몽","back050706","1","참으로 끈질긴 자들... 그렇게까지 애를 써도 달라지는 것은 아무 것도 없거늘...",,"","",""],
["모험가","","","달라지는 게 아무 것도 없는 게 좋지. 너로 인해 다시 전이가 일어나는 것보다는 그 쪽이 훨씬 좋아!",,"","",""],
["악몽","back050706","2","...운이 좋게 나를 막았지만... 그러나... 악몽은 계속될 것이다... 너희를 옭아매는 악몽은... 그 분이 빛을 찾을 때까지 계속... 된다...",,"","",""],
["미쉘","back050000","2","악몽의 근원이... 점점 사라져가고 있어요...!",,"","",""],
["아간조","back050002","1","돌아왔나. 무사히 악몽의 근원을 쫓아내었나보군. 전이되었던 세계도 악몽 속에서 자리 잡지 못하고 원래 있던 곳으로 돌아가는 모양이던데.",,"","",""],
["미쉘","","","아간조 님...! 언제 돌아오셨나요?",,"","",""],
["아간조","","","자네들이 오기 직전에 나왔네.",,"","",""],
["모험가","","","그 동안 저 안에서 무엇을 하고 계섰던 건가요?",,"","",""],
["아간조","","","...중간중간 살펴보니 자네들이 알아서 잘 해나가는 것 같아 내 참견은 필요없겠다 싶었지. 그래서 나는 내 목적을 이루기 위해 행동하고 있었네.",,"","",""],
["모험가","","","목적이라면 검은 악몽을 막는 방법을 말입니까?",,"","",""],
["아간조","","","...",,"","",""],
["아간조","","","꿈의 문 안으로 들어가던 검은 악몽도, 빙벽에 봉인되었던 몬스터들도 다시 잠잠해진 모양이군. 수고했네.",,"","",""],
["아간조","","2","...자네는 정말 호기심이 많은 자로군.",,"","",""],
["아간조","","1","내가 알아낸 것과 자네가 알아낸 것은 별 차이가 없을 것 같은데. 그러니 악몽 속에 전이되는 것을 막고 악몽의 근원을 없앤 것이 아닌가?",,"","",""],
["아간조","","","검은 악몽은 사도가 보내는 것이 확실한 듯하네. 누구인지는 모르겠지만 내가 만난 악몽의 근원은 '어듬을 바꾼다‘는 목적으로 이런 짓을 벌였던 듯하니 검은 악몽에 대한 조사는 아직 끝난 것이 아니겠지.",,"","",""],
["모험가","","","어돔을 바꾼다고 말했다고요? 제가 들은 건 ’빛을 하나로', '빛 을 다시 그 분에게‘라는 말이었어요.",,"","",""],
["아간조","","","...빛이라. 빛을 하나로 어둠을 바꾼다는 건가? 아니면...",,"","",""],
["미쉘","","","'어둠을 빛으로 바꾸어, 하나된 빛을 다시 그 분에게...'",,"","",""],
["미쉘","","","...아, 저... 이건 제가 알아낸 것은 아니고... 어렴풋이 이린 말을 들은 것 같아서요. 확실히 '들은' 것은 아니고... '머리로 들어왔다...'는 게 정확해서, 저어, 일부러 말을 하지 않은 것은 아니고 두 분의 이야기를 듣고 있다보니 저절로...",,"","",""],
["모험가","","","미쉘. 진정해요.",,"","",""],
["미쉘","back050002","","네, 네...",,"","",""],
["미쉘","back050000","2","아마... 저를 방해하던 다른 차원의 미셀 모나헌을 보았을 때 흘러들어온 모양이에요. 다시 방해받지 않기 위해 계속 그녀의 파장에 신경을 쓰고 있던 중에 저절로...",,"","",""],
["미쉘","","","아마 그 미쉘도 악몽의 근원에게서 알게 된 이야기인 것 같아요. 정확히 그 분이 누구인지는 모르겠지만 악몽을 만든 사도겠지요.",,"","",""],
["모험가","","","사도...",,"","",""],
["미쉘","","","네... 천계를 넘은 곳에 있는 어떤 강력한 사도에게서 만들어진 것 같아요. 누군지는 잘 모르지만... 굉장한 어둠을 숨기고 있는... 그런 위압감까지 전해왔던 모양이에요. 더 자세한 건 악몽의 근원에게서 알아내지 못한 것 같지만요.",,"","",""],
["모험가","","","천계를 넘은 곳에 있는 사도...",,"","",""],
["모험가","","","아이리스 님도 마계에 있는 사도들이 아라드로 전이를 시도하고 있다고 했어요. 그럼, 검은 악몽을 막기 위해서, 사도의 전이를 막기 위해서는 마계로 가야하는군요.",,"","",""],

["","","","",,"","",""]];