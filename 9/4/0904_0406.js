﻿var front;
var title;
var text;

front = "backF04";//첫 뒷배경 (.jpg 형식)
title = "광란의 추종자";//던전 명칭┏ 0 : 이미지만 //1 : 아래 고정 //2 : 위 고정┏ number : 상대적 이동 / array : 선택 이동
text = [//이름//뒷배경 (.jpg 형식)//대사위치//대사//이동//선택 1//선택 2//선택 3
["아간조","back040000","","사도는 쓰러뜨렸으니 나는 이만 돌아가겠소. 브왕가 혼자에게 북의 쉼터를 맡겨두고 있었으니 슬슬 도와주러 가야겠소.",,"","",""],
["시란","","","그래. 가는 길에 아이리스 님도 잘 바래다 드리라. 나는 전에 다 못 본 도서관 책이나 좀 보고 갈 테니.",,"","",""],
["모험가","","","...반. 당신이 이곳에 온 건 미들 오션을 조사하기 위해서였죠. 이제 어쩔 건가요?",,"","",""],
["반","","","슬슬 이곳도 지겨워지는 참이라 나도 돌아가고 싶은데 말이야. 아직 보고를 올릴 만한 성과가 없어. 좀더 미들 오션에 대해 조사해 볼까 싶은데 넌 어쩔 거냐?",,"","",""],
["이사도라","back040000","","크, 큰일 났습니다! 아덴바인 님이 배반을 했습니다!",,"","",""],
["이사도라","back040002","2","아덴바인 님은 한 때 차기 교주로 추앙받던 분입니다. 그런데 언제부턴가 혼자 독방에서 골똘히 연구를 하시더니 죽은 로터스의 눈을 빼내어 베히모스의 몸 안으로 들어가버렸습니다.",,"","",""],
["이사도라","","","그곳은 로터스가 나타났을 때 많은 신도들이 희생된 곳입니다. 아덴바인 님은 그곳에서 오필리아 교주님께 정면으로 선전포고를 알려왔습니다.",,"","",""],
["이사도라","","","그 분은 사도가 나타나기 전부터 사악한 힘에 매료되어 있던 분입니다. 분명 로터스의 힘을 자신의 것으로 흡수하려고 하는 것입니다!",,"","",""],
["이사도라","","1","이 일을 교주님께 알려드려야 할까요? 아, 하지만 교주님은 이번 일로 너무 많은 상처를 입으셨습니다.",,"","",""],
["이사도라","","","아무리 뛰어나다고 하더라도 그 분은 아직 소녀입니다. 이렇게 엄청난 일을 연달아 견뎌내실 수 있을지 없을지...",,"","",""],
["모험가","","","선전포고를 알려왔다니... 혼자서 뭘 하겠다는 거죠?",,"","",""],
["이사도라","","","그것이... 그 분은 저희 교단에서 유일하게 금지된 술법의 접근이 허가된 분이셨습니다. 로터스의 신체에 담긴 힘을 이용하여 시체를 일으켜 자신의 병사로 삼을 것입니다.",,"","",""],
["모험가","","","죽은 자를 일으킨다고? 그런 끔찍한! 제가 가서 그 사람을 말리겠어요!",,"","",""],
["이사도라","back040002","","그러시다면 그가 사용하는 사악한 마법진을 정화해 주세요. 정화 작업은 저희 전도사님들께 알려드릴 테니 그 분들을 지켜주시면 됩니다.",,"","",""],
["","back040600","0","",,"","",""],
["이사도라","back040002","2","다행히 반젤리스 님께 용기를 배운 신실한 전도사들과 모험가님이 있어 아덴바인 님의 사술을 깨뜨릴 수 있었군요.",,"","",""],
["이사도라","","","개인의 욕심을 위해 죽은 자의 영면을 방해하는 자는 반드시 벌을 받는다는 것을 그 분은 모르고 계셨던 모양입니다.",,"","",""],
["이사도라","","1","아덴바인 님, 아니 아덴바인이 로터스의 시체에서 눈을 빼내고 금지된 구역으로 들어갈 수 있었던 것은 어리석은 동조자가 있었기 때문입니다.",,"","",""],
["이사도라","","","가레스는 이미 어리석음에 대한 죄로 모습이 바뀌는 형벌을 받았으면서도 아직도 스스로의 과오를 깨닫지 못하고 있습니다.",,"","",""],
["이사도라","","","모험가님. 그의 악행은 더이상 용인될 수 없는 수준입니다. 아덴바인과 동조하여 GBL교를 차지하고 나아가 베히모스를 지배하려 드는 그 어리석은 욕심을 처단하여 주십시오.",,"","",""],
["이사도라","","2","모습이 악하다고 해서 마음까지 악하리란 법은 없습니다. 그러나 가레스는 마음 때문에 모습이 변했는데도 쉽게 뉘우치지 않았습니다. 이것은 그에게 내려진 정당한 벌이겠지요.",,"","",""],
["이사도라","","","차라리 가엾게 여기도록 하지요. 아덴바인을 섬김으로씨 치욕스러운 파멸이 올 줄 몰랐던 어리석은 자의 말로에...",,"","",""],
["모험가","back040002","","(가레스에게서 기묘한 힘이 느껴졌어. 저주는 아니고 검은 악몽도 아니야. 그 힘을 나누어 준 것은 아덴바인인가...)",,"","",""],
["오필리아","back040000","1","이사도라 님. 배반자 아덴바인을 처단하고 계신다고 들었습니다. 저를 아끼시느라 저에게 말씀을 해주지 않으셨더군요.",,"","",""],
["오필리아","","","죄송해하실 것도, 걱정하실 것도 없습니다. 저는... 괜찮습니다. 저는 모자란 몸이나마 GBL교를 이끄는 교주. 만인을 위해 베풀어야 하는 교리를 저속한 술법에 사용한 그를 절대로 용서하지 않을 것입니다.",,"","",""],
["오필리아","","","GBL 신도 여러분. 잘 들으십시오. 한 때 저의 스승이자 신뢰 받는 우리의 동료였던 아덴바인 신시어를 GBL교에서 영구 파문하고 죽음으로 죄를 물을 것을 선포합니다.",,"","",""],
["오필리아","","","이는 저 오필리아 베이그란스의 이름이 아니라, 위대한 GBL교의 이름으로 내리는 엄중한 벌입니다.",,"","",""],
["모험가","back040000","","(이 많은 사람들이 그곳으로 몰려가면 희생이 더 커질 거야. 확인해 블 것도 있으니 내가 다녀오겠다고 말해야겠군.)",,"","",""],
["아덴바인","back040601","2","네놈에게 무슨 권리가 있어서 나를 죽음의 나락으로 빠뜨리느냐!",,"","",""],
["아덴바인","","","나는, 위대한 로터스 님의 뜻을 받은... 자... 네놈들의 어리석음은 결코... 용납되지 않을 것이다...",,"","",""],
["아덴바인","back040601","","이 조각을... 가지고 네놈들을... 처단...",,"","",""],
["오필리아","back040000","2","모험가님. 저희에게 또다시 큰 도움을 주셔서 감사합니다. 이번 일은 저희에게 매우 부끄러운 일이지만, 그래도 도와주신 분이 당신이었음을 감사히 생각합니다.",,"","",""],
["모험가","","","아뇨... 별 말씀을. 많은 일이 있었는데 너무 슬퍼하지 마시고 푹 쉬세요.",,"","",""],
["모험가","","","(아덴바인은 이 차원의 조각을 얻었기에 로터스의 힘을 사술에 사용할 수 있었던 것일까... 애초에 이 조각을 얻지 못했다면 GBL교를 배반하는 일은 일어나지 않았을까?)",,"","",""],
["모험가","","","(나도 이 조각의 힘을 얻은 끝에 나의 뜻대로 주변을 희생시키려 들게 될까? 그런 일은 절대로 일어나지 않겠지만... 하지만...)",,"","",""],

["","","","",,"","",""]];