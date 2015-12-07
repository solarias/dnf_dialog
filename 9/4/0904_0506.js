﻿var front;
var title;
var text;

front = "backF05";//첫 뒷배경 (.jpg 형식)
title = "심층";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["브왕가","back050005","","내가 아간조와 함께 들어온 후 악몽의 근원은 참으로 다양한 환영을 보여주었네. 악몽의 바깥이었다면 내게 그 따위 술은 통하지 않았겠지만 놈의 영역 안에서는 구분하기가 쉽지 않더군.",,"","",""],
["브왕가","","","아무래도 사람의 머릿속을 파헤칠 수 있는 능력이 있는 모양이야. 검은 악몽에 사로잡힌 몬스터들이 사악하게 변하는 것과도 관계가 있는 능력이겠지. 실로 '악몽’에 어울리는 술수가 아닐 수 없어.",,"","",""],
["미쉘","","","모험가님이 보신 환영도 그렇게 만들어진 것이군요... 그럼 제가 잘 모르는 사도의 기운을 찾아간 것도... 악몽의 근원이 그렇게 만든 것이고요...",,"","",""],
["모험가","","","전염병이 돌았던 곳으로 악몽의 근원이 저를 보내었던 것은 귀찮은 추적자가 전염병에 걸려 죽기를 바랐던 거겠죠. 다행히 전에 약을 받아서 걸리지 않았지만요.",,"","",""],
["브왕가","","","생각보다 치밀한 녀석이야. 나와 자네들을 계속 농락하면서 한편으로는 계속 자신의 영역을 넓히고 있으니.",,"","",""],
["브왕가","","","자네들은 아간조와 만났나?",,"","",""],
["모험가","","","브왕가 님을 찾기 바로 전에 만났지만 제대로 말도 못하고 돌아왔어요. 악몽 속의 시란 님과 싸우고 계시던데요...",,"","",""],
["브왕가","","","흠. 아무래도 나와 비슷한 생각을 하고 있나보군.",,"","",""],
["브왕가","back050005","","그럼 우리는 아간조가 확신을 가지고 나타날 때까지 기다립세. 미쉘. 이번에는 악몽의 근원이 가장 깊숙히 숨은 곳으로 안내해주게. 찾기는 힘들겠지만 그곳이 악몽의 근원이 새로이 영역을 넓힌 곳일 테니 놈의 꿍꿍이를 파헤칠 수 있올 거야.",,"","",""],
["","back050600","0","",,"","",""],
["미쉘","back050000","2","제대로… 도착하셨나요? 그곳이 제가 파악할 수 있는 가장 깊은 곳이었어요…",,"","",""],
["미쉘","","1","그럼 이번에도 저 안에 있는 분들의 물건을 부탁드릴게요. 매번 이런 부탁을 드리는 게 죄송하지만...",,"","",""],
["브왕가","","","원래 굉장한 능력을 빌리려면 대가가 필요하지. 그렇지 않나?",,"","",""],
["브왕가","","","미셀 덕분에 자네가 길을 헤매지 않을 수 있었던 것이니 저 안을 둘러보면서 저 악몽과 가장 닮은 느낌이 드는 것을 찾 아보게나.",,"","",""],
["브왕가","","","이번 일은 앞으로 자네가 모험을 하면서 감을 갈고 닦을 수 있는 기회가 될 걸세.",,"","",""],
["미쉘","back050000","2","모험가님이 힘들게 가져와주셨으니 저도 열심히 도울게요…",,"","",""],
["브왕가","back050005","1","자네가 가지고 온 이 단원증 말인데... 실은 예전에 본 적이 있네.",,"","",""],
["브왕가","","","대전이가 일어나기 전에 벨마이어 공국이 골치를 썩히던 악명 높은 도적단이 있었지. 매드니스 도적단이라고 했는데, 겁도 없이 스트루 산맥에 숨겨진 보물을 찾겠다며 우리 반투의 땅에 들어와 한 번 혼풀을 내준 적이 있었어.",,"","",""],
["미쉘","","","브왕가 님... 저어, 한 번 확인해 보지 않으시겠어요?",,"","",""],
["미쉘","","","저 안의 공간이 악몽의 근원이 만든 또 하나의 현실이라면 어쩌면 브왕가 님이 만나셨던 그들일 수도 있지 않을까요?",,"","",""],
["모험가","","","하긴, 저 안의 모습이 다른 차원의 투영이라고 한 것은 악몽의 근원이 만든 편지 내용에 불과했으니까, 정체가 무엇인지 밝히는 것도 중요하겠네요.",,"","",""],
["브왕가","","","다른 차원의 투영이라니 그게 무슨 소린가? 나에게 말해주게.",,"","",""],
["브왕가","","2","악몽의 근원이 오르카의 모습을 만들어내고, 심지어 자네에게 아간조가 쓴 편지인 척하여 혼란시컸단 말인가?",,"","",""],
["브왕가","","1","악몽의 근원이 상대의 머릿속에 들어가 그의 정신을 혼란시킬 수 있다는 것은 모두가 알고 있지.",,"","",""],
["브왕가","","","하지만 어떻게 미쉘이 자네를 인도하여 새로운 악몽으로 이끈다는 것을 알고 있는 것이지?",,"","",""],
["브왕가","","","자네들의 이야기를 들어보면 미쉘이 직점 꿈의 문 너머로 들어간 적은 없었던 것 같은데.",,"","",""],
["모험가","","","제 기억을 파헤쳐서 알아낸 것이 아닐까요? 제 기억을 뒤져서 알아낸 다음에 미쉘을 혼란시켜서...",,"","",""],
["브왕가","","","그게 이상한 점일세. 미쉘을 혼란시키려면 미쉘이 악몽 안에 있어야해. 하지만 들어간 적은 없지 않나?",,"","",""],
["모험가","","","...아...! 뭔가 계속 걸린다 싶었는데 그거예요! 미쉘은 악몽의 근원이 만든 영역에 직접 들어간 적이 없는데 어떻게 '한 번도 보지 못한 사도의 기운’을 느낀 것처럼 현혹시킬 수 있었던 거지요?",,"","",""],
["미쉘","","","그, 그렇네요... 저는 계속 바깥에서 살펴보고 있었을 뿐이라서... 저를 직접적으로 혼란시킬 수는 없었올 텐데... 제가 있는 바깥까지 영향을... 어떻게...",,"","",""],
["브왕가","back050005","","아무래도 검은 악몽과 동조하는 방해자가 있는 듯하네.",,"","",""],
["미쉘","back050000","2","저를 방해하는 사람... 누구인지 감도 잡히지 않아요. 저는 마법사가 아니라서 일반적인 마법으로는 저를 방해할 수 없을텐데...",,"","",""],
["모험가","","","미쉘은 사이퍼라고 했죠. 그럼 사이퍼만이 당신을 방해할 수 있는 건가요?",,"","",""],
["미쉘","","","아, 네... 하지만 사이퍼들은... 많이... 죽었어요... 원래부터 수도 적었지만요...",,"","",""],
["미쉘","","","게다가 각자 사용할 수 있는 능력이 많이 달라요... 저는 염동력이 주특기인데 이건 세계를 이루고 있는 고유의 파장과 파동에 간섭하는 거예요.",,"","",""],
["미쉘","","","만약 저와 비슷한 능력자가 있다면 제가 지금까지 알아차리지 못했을 리가 없어요... 그러니까 꿈의 문 바깥에 있는 사람은 아닐 거예요.",,"","",""],
["모험가","","","(미쉘의 능력은 미쉘 혼자만이 가지고 있는 고유한 능력... 그렇다면 미쉘을 방해하는 사람은 미쉘 장본인...!)",,"","",""],
["미쉘","","1","네? 저를 방해하는 사람의 정체를 알아내셨다고요? 도대체 누구인가요?",,"","",""],
["모험가","","","아직은 추측일 뿐이지만요...",,"","",""],
["미쉘","","","그렇군요. 그렇다면 이번에는 저도 함께 따라가게 해주세요. 제가 가야 그 사람의 방해를 막아낼 수 있을 거예요.",,"","",""],
["모험가","back050000","","아무래도 미셀이 필요할 것 같긴 해요. 하지만 들어가는 건 지금까지처럼 저 혼자예요. 미쉘은 브왕가 님과 함께 바깥에서 보고 있어줘요. 제가 들어가서 찾아볼 테니까.",,"","",""],
["","back050601","0","",,"","",""],
["","back050602","0","",,"","",""],
["미쉘","back050603","1","꺄악?! 저, 저 사람은...!",,"","",""],
["미쉘2","","","찾아올 거라고 생각했어요. 생각보다 늦었지만...",,"","",""],
["미쉘","","","당신은 설마...",,"","",""],
["미쉘2","","","작은 장난만 친 것뿐인데 그토록 당황하다니. 정말 재밌더군요.",,"","",""],
["미쉘2","","","자아, 저와 겨뤄보죠, 다른 차원의 모험가님. 저를 죽이지 않으면 당신은 영원히 미궁을 헤매게 될 거예요.",,"","",""],
["미쉘2","","2","과연... 그 자가 경계할 만도... 하군요...",,"","",""],
["미쉘2","","2","?...왜 저를 죽이지 않는 거죠? 당신들을 방해했는데...",,"","",""],
["모험가","","","그렇긴 하지만... 내가 아는 사람을 죽이고 싶진 않아요.",,"","",""],
["미쉘2","","","...그린 건 기만... 가식일 뿐이에요.",,"","",""],
["미쉘2","","","지금껏 우리에게 다가온 사람들이 모두 그랬죠. 사이퍼의 힘이 필요하다. 우리가 너희를 구해주겠다... 그렇게 말하고 자기 좋을대로 이용하고 우리를 버렸어요.",,"","",""],
["모험가","","","왜 악몽의 근원의 말대로 우리를 방해한 거죠?",,"","",""],
["미쉘2","","","...전에 날 찾아왔었죠. 실수로 내가 있는 곳으로 온 것 같긴 했지만... 당신의 순진한 얼굴을 보고 생각했죠. 나도 죽기 전에 한 번은 남을 방해하고... 괴롭혀보고 싶었어요. 그럼으로써 그들의 마음을 조금은 알고 싶었어요.",,"","",""],
["미쉘2","back050603","","하지만... 조금도 알 수가 없군요. 왜 사람올 괴롭히는 걸까... 나는 정말로 알 수가 없어요...",,"","",""],
["미쉘","back050000","1","저희 사이퍼가... 대전이를 일으킨 주범으로 지목되어서... 오해가 풀렸을 때는 이미 많은 사이퍼들이 죽, 죽었...어요...",,"","",""],
["미쉘","","","저는 다행히 살아남았지만... 세상이 너무 미웠죠. 마법으로도 막을 수 없는 저의 힘으로 모든 것을 파괴하고 싶었어요...",,"","",""],
["미쉘","","","하지만... 변덕으로 작은 아이를 도와주고... 아이의 부모님도 도와주고... 정신을 차려보니 한 마을을 구하고 있었어요. 처음에는 그런 제가 너무 싫었죠...",,"","",""],
["미쉘","","","...그, 그렇지만 그 사람들은 지금껏 저희를 괴롭혔던 사람들과 달랐어요... 끝까지 저를 믿어주고, 고마워해주었죠... 그래서 저도... 마음을 다잡을 수 있었어요. 사이퍼를 인정하지 않는 세상을 인정해 주는 세상으로 바꾸어보겠다고...",,"","",""],
["미쉘","","","그러던 중에 브왕가 님과 아간조 님을 만나면서 정말... 기뻤어요. 저도 도움이 될 수 있어서... 모험가님도 저를 필요로 해주시고...(미쉘이 눈물을 흘리기 시작했다.)",,"","",""],
["미쉘","","","어찌면 저도 저렇게 삐뚤어질 수 있었겠지요. 하지만 지금의 저는 저곳의 미쉘 모나헌과는 달라요... 무엇이 저를 방해하고 현혹시키는지 알았으니까 이제 다시는 실수를 하지 않겠어요.",,"","",""],
["미쉘","","","모험가님. 저를 믿고 다시 악몽의 가장 깊은 곳으로 가주시겠어요? 당신을 도우며 저도... 계속 쓸모있는 사람이 되고 싶어요... 마, 많은 도움은 되지 못하더라도... 부탁드려요...",,"","",""],
["미쉘","","2","모험가님이 가시는 곳을 보면서 계속 주변의 모습을 살펴보았는데... 아무래도 기억에 있는 곳 같아요.",,"","",""],
["미쉘","","1","아무래도 이번에 악몽이 보여주는 곳은 노스마이어 부근인 것 같아요. 대전이로 인하여 파괴되어 멜트다운으로 통칭되고 있는 곳이지요.",,"","",""],
["미쉘","","","모험가님이 찾아가신 악몽 속의 미쉘 모나헌이 얼핏 흘린 말을 들으섰나요? 모험가님을 ‘다른 차원의 모험가'라고 불렀어요.",,"","",""],
["미쉘","","","그 미쉘은 악몽의 근원이 만든 환영이 아니었으니, 본인이 하는 말일 테고... 그렇다면 가짜 아간조 님의 편지에 쓰여있던 '다른 차원의 투영’은 어느 정도 맞는 이야기인 것 같아요.",,"","",""],
["브왕가","","","그 놈이 모두 거짓말을 말하고만 있었던 것은 아니었나보군. 하긴 적당히 사실이 섞여있지 않았더라면 금방 들통이 났을 테니까.",,"","",""],
["미쉘","","","네... 그렇다면 꿈의 문은 차원의 틈새이고, 저 속의 악몽은 다른 차원의 모습...이라는 부분은 옳게 보고 있었던 것 같아요. 다만 저곳이 악몽에 의해 만들어진 허상인지, 아니면... 진짜 다른 차원인지는 좀더 확인해 봐야할 거 같아요.",,"","",""],
["미쉘","","2","모험가님. 가지고 오신 것을 한 번 만져보시겠어요? 저기에서 느꼈던 감촉과 똑같은가요?",,"","",""],
["미쉘","","","제가 느끼기에도 이 물건에서 느껴지는 파장은 비슷해요. 저는 이곳에서 차원을 넘어 보는 거라서 흐릿하게 보이긴 하지만 그래도 기본적인 흔들림...은 비슷하달까...",,"","",""],
["미쉘","","","일단 이번 조사는 알고 있던 사실의 재확인이 되겠군요. 이렇게 이쪽 차원으로 가지고 오실 수 있다는 것만으로도 문 너머의 모습... 차원 너머의 세계는 실존하고 있다는 뜻...",,"","",""],
["미쉘","","","그 미셀 모나헌도 그렇고... 저 너머의 세계는 단순한 투영이 아니라 실존하고 있다는 확신이... 생겼어요.",,"","",""],
["미쉘","","1","그럼 이 다음은......?!",,"","",""],
["모험가","","","(미셀과 나는 동시에 꿈의 문 너머를 쳐다보았다. 브왕가 님도 같은 것을 느꼈는지 매섭게 쏘아보고 계셨다.)",,"","",""],
["브왕가","","","저곳에 뭔가 일이 있는가본데... 악몽의 근원이 무슨 수작을 부리고 있는 것인지도 모르겠군.",,"","",""],
["모험가","back050000","","저쪽도 급한가보군요. 그럼 제가 들어가보죠. 이번엔 뭘 보여 줄지 궁금하네요.",,"","",""],
["모험가","back050604","1","아간조 님?!",,"","",""],
["모험가","back050604","2","웃... 아무리 환영이라는 것을 알고 있어도 실력만큼은 진짜인 것 같은데... 이러다가 당할지도 모르겠어. 일단 여기선 물러나야지...",,"","",""],
["미쉘","back050000","2","모험가님! 괜찮으신가요?",,"","",""],
["브왕가","back050005","1","아간조가 자네를 공격해 왔다고? 악몽이 구현한 환영이었을테니 진짜에 비할 바는 못되었겠지만 용케도 돌아왔군. 하지만 악몽의 근원에게 자네를 막을 수 있는 수단을 떠올린 것 같아 큰일이로군.",,"","",""],
["브왕가","back050005","","미쉘. 자네가 모험가를 다시 인도해야겠네. 악몽의 근원이 필사적으로 막으려고 하는 데에는 이유가 있을 거야. 숨기고 있는 것이 무엇인지 주의깊게 살펴보게.",,"","",""],
["미쉘","back050000","2","머리가 살짝 어지러워졌네요…",,"","",""],
["미쉘","","1","악몽의 근원은 모험가님의 방해룰 막으면서 자신의 영역을 넓히려고 하고 있어요...",,"","",""],
["미쉘","back050000","","가장 새로이 만들어진 곳으로 이끝어드릴게요. 하지만 너무 위험하니까 바로 나오셔야 해요.",,"","",""],
["","back050605","0","",,"","",""],
["미쉘","back050000","2","불길한 씨앗이 있었다니... 악몽의 근원과 나타날 때는 씨앗을 없애면 그곳에 있는 사람들이 사라졌지요. 하지만 이번에는 그런 일은 없었다고요...?",,"","",""],
["브왕가","back050000","","아무래도 그것은 근원의 씨앗 같군.",,"","",""],
["브왕가","back050005","1","근원의 씨앗은 검은 악몽이 있는 곳에 나타나지. 아무래도 악몽의 근원의 목적과 관련이 있는 것 같더군.",,"","",""],
["브왕가","","","근원의 씨앗을 없애면 그 주변에 있는 자들이 모두 사라지는 것은 나도 봤네. 죽거나 없어지는 것은 아닌 것 같고, 단지 그들의 존재가 악몽 속에서 존재감이 약해지는 것 같았어.",,"","",""],
["미쉘","","","저는... 그 씨앗은 악몽의 근원에 있어 아주 중요한 도구라고 생각해요. 저 속에 있는 다른 차원을 자신의 영역 안에 만들 때... 사람이나 몬스터까지 똑같이 가지고 온 것은 어떤 의도가 있었겠지요...",,"","",""],
["미쉘","","","그렇다면 씨앗은 그들을 계속 존재시키기 위한 매개체...였고... 평소에는 숨기고 있어서 보이지 않았다가... 불안정해질 때 제대로 숨기지 못해서 바깥으로 드러나는 게 아닐까요?",,"","",""],
["모험가","","","...지금까지 근원의 씨앗이 나타난 것은... 보통은 악몽의 근원이 저를 방해하려고 나타났을 때... 지금까지는 악용의 근원이 저를 방해하려고 나타난다고 생각했지만...",,"","",""],
["모험가","","","...어쩌면, 방해가 아니라 자신이 만든 세계를 불안정하게 만들었기 때문에 모습을 드러낼 수밖에 없었던 게 아닐까요?",,"","",""],
["미쉘","back050005","","그럼... 이 지경이 되었으니 악몽의 근원은 또다시 나타나겠군요... 자신이 만든 세계를 지키기 위해서...!",,"","",""],
["악몽","back050606","1","이런 위험한 곳에 오면서... 너희는 왜 계속 나를 방해하려는 거지?",,"","",""],
["미쉘","","","그러는 당신이야말로 차원의 틈올 비집고 나가서 무슨 짓을 하려는 거죠? 당신이 하는 모든 행위는 위협적이고 불길하게만 느껴져요...!",,"","",""],
["미쉘","back050606","","또 가버리는 건가요? 당신을 찾아서 반드시... 당신의 목적을 알아내고 말겠어요...!",,"","",""],
["미쉘","back050607","2","당신은 도대체 누구를 위해서 움직이는 건가요? 다른 차원을 불러들이면서까지 하려는 건 무엇이죠?",,"","",""],
["악몽","","","......",,"","",""],
["모험가","","","너... 아니, 악몽의 근원 모두가 하고 있는 일은 전에 말했던 '빛을 하나로' 하기 위해서인가? 빛은 도대체 뭐지?",,"","",""],
["악몽","back050607","","빛...을... 다시 그 분에게...",,"","",""],
["브왕가","back050005","2","악몽의 근원이 나타났던가? 그렇다면 모험가의 추리가 맞았다는 이야기로군.",,"","",""],
["브왕가","","","근원의 씨앗은 이차원의 세계를 불러오기 위한 매개체고, 악몽에게 있어 가장 강력한 힘이자 약점이라는 거지... 그렇다면 근원의 씨앗을 조사한다면 적어도 놈의 영역이 넓어지는 것을 막을 수 있겠어.",,"","",""],
["브왕가","","1","지금껏 많은 일이 있었고 혼란도 있었지만 그에 상응할 만큼 많은 것을 알아내었네.",,"","",""],
["브왕가","","","근원의 씨앗이라면 나도 이 아라드에서 본 적이 있네. 처음에는 그것이 무엇인지 몰랐지만 저 속에서 그것을 봄으로써 검은 악몽과 관련되어 있다는 사실을 알게 되었지.",,"","",""],
["미쉘","back050005","","근원의 씨앗은... 악몽의 근원, 혹은 검은 악몽이 무언가를 불러들이기 위한 매개체...인 것이죠. 그렇다면 아라드에서도 검은 악몽이 무언가를 이동시키려고 했다... 이동... 모험가님...!",,"","",""],
["미쉘","back050000","2","악몽의 근원이 무슨 짓을 하려는 것인지 알았어요... 악몽의 근원은 다른 차원의 세계를 전이시키려고 하는 거예요...!",,"","",""],
["미쉘","","","우리가 알고 있는 전이는 보통 사도가 일으키죠... 검은 악몽은 사도가 만든 것이고 사도가 전이시키는 것이었지만... 그 자체에도 전이를 시킬 수 있는 힘이 있었던 거예요.",,"","",""],
["미쉘","","","이제 알겠어요. 악몽의 근원에게서 왜 탁한 전이결정이 떨어졌던 것인지... 자신이 전이되었기 때문이 아니라, 다른 세계를 자신의 영역 안에 전이시켰기 때문인 거로군요...",,"","",""],
["미쉘","","","그렇다면 꿈의 문 너머 저 곳... 우리가 처음에 몬스터의 악몽이라고 생각했던 저 곳은 단순한 다른 차원의 세계가 아니라, 악몽의 근원에 의해 전이된 다른 세계였던 거예요...",,"","",""],

["","","","",,"","",""]];