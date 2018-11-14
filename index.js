const WTable = { //This table use convert morse to alphabet.
  Upper:{
    '.-':'A',
    '-...':'B',
    '-.-.':'C',
    '-..':'D',
    '.':'E',
    '..-.':'F',
    '--.':'G',
    '....':'H',
    '..':'I',
    '.---':'J',
    '-.-':'K',
    '.-..':'L',
    '--':'M',
    '-.':'N',
    '---':'O',
    '.--.':'P',
    '--.-':'Q',
    '.-.':'R',
    '...':'S',
    '-':'T',
    '..-':'U',
    '...-':'V',
    '.--':'W',
    '-..-':'X',
    '-.--':'Y',
    '--..':'Z',
  },

  Downer:{
    '.-':'a',
    '-...':'b',
    '-.-.':'c',
    '-..':'d',
    '.':'e',
    '..-.':'f',
    '--.':'g',
    '....':'h',
    '..':'i',
    '.---':'j',
    '-.-':'k',
    '.-..':'l',
    '--':'m',
    '-.':'n',
    '---':'o',
    '.--.':'p',
    '--.-':'q',
    '.-.':'r',
    '...':'s',
    '-':'t',
    '..-':'u',
    '...-':'v',
    '.--':'w',
    '-..-':'x',
    '-.--':'y',
    '--..':'z',
  },

  Number:{
    '-----':'0',
    '.----':'1',
    '..---':'2',
    '...--':'3',
    '....-':'4',
    '.....':'5',
    '-....':'6',
    '--...':'7',
    '---..':'8',
    '----.':'9',
  },

  Common:{
    '.-.-.-':'.',
    '--..--':',',
    '---...':':',
    '-.-.--':'!',
    '..--..':'?',
    '.----.':'\'',
    '-....-':'-',
    '-.--.':'(',
    '-.--.-':')',
    '-..-.':'/',
    '-...-':'=',
    '.-.-.':'+',
    '.-..-.':'"',
    '-..-':'*',
    '.--.-.':'@',
  }
}


const JTable = { //This table use convert motse to japanes.
  Hira:{
    '－－・－－':'あ',
    '・－':'い',
    '・・－':'う',
    '－・－－－':'え',
    '・－・・・':'お',
    '・－・・':'か',
    '－・－・・':'き',
    '・・・－':'く',
    '－・－－':'け',
    '－－－－':'こ',
    '－・－・－':'さ',
    '－－・－・':'し',
    '－－－・－':'す',
    '・－－－・':'せ',
    '－－－・':'そ',
    '－・':'た',
    '・・－・':'ち',
    '・－－・':'つ',
    '・－・－－':'て',
    '・・－・・':'と',
    '・－・':'な',
    '－・－・':'に',
    '・・・・':'ぬ',
    '－－・－':'ね',
    '・・－－':'の',
    '－・・・':'は',
    '－－・・－':'ひ',
    '－－・・':'ふ',
    '・':'へ',
    '－・・':'ほ',
    '－・・－':'ま',
    '・・－・－':'み',
    '－':'む',
    '－・・・－':'め',
    '－・・－・':'も',
    '・－－':'や',
    '－・・－－':'ゆ',
    '－－':'よ',
    '・・・':'ら',
    '－－・':'り',
    '－・－－・':'る',
    '－－－':'れ',
    '・－・－':'ろ',
    '－・－':'わ',
    '・－－－':'を',
    '・－・－・':'ん',
    '・－・・　・・':'が',
    '－・－・・　・・':'ぎ',
    '・・・－　・・':'ぐ',
    '－・－－　・・':'げ',
    '－－－－　・・':'ご',
    '－・－・－　・・':'ざ',
    '－－・－・　・・':'じ',
    '－－－・－　・・':'ず',
    '・－－－・　・・':'ぜ',
    '－－－・　・・':'ぞ',
    '－・　・・':'だ',
    '・・－・　・・':'ぢ',
    '・－－・　・・':'づ',
    '・－・－－　・・':'で',
    '・・－・・　・・':'ど',
    '－・・・　・・':'ば',
    '－－・・－　・・':'び',
    '－－・・　・・':'ぶ',
    '・　・・':'べ',
    '－・・　・・':'ぼ',
    '－・・・　・・－－・':'ぱ',
    '－－・・－　・・－－・':'ぴ',
    '－－・・　・・－－・':'ぷ',
    '・　・・－－・':'ぺ',
    '－・・　・・－－・':'ぽ',
    '・－・・　・・－－・':'か゚',
    '－・－・・　・・－－・':'き゚',
    '・・・－　・・－－・':'く゚',
    '－・－－　・・－－・':'け゚',
    '－－－－　・・－－・':'こ゚',
  },

  ZenKata:{
    '－－・－－':'ア',
    '・－':'イ',
    '・・－':'ウ',
    '－・－－－':'エ',
    '・－・・・':'オ',
    '・－・・':'カ',
    '－・－・・':'キ',
    '・・・－':'ク',
    '－・－－':'ケ',
    '－－－－':'コ',
    '－・－・－':'サ',
    '－－・－・':'シ',
    '－－－・－':'ス',
    '・－－－・':'セ',
    '－－－・':'ソ',
    '－・':'タ',
    '・・－・':'チ',
    '・－－・':'ツ',
    '・－・－－':'テ',
    '・・－・・':'ト',
    '・－・':'ナ',
    '－・－・':'ニ',
    '・・・・':'ヌ',
    '－－・－':'ネ',
    '・・－－':'ノ',
    '－・・・':'ハ',
    '－－・・－':'ヒ',
    '－－・・':'フ',
    '・':'ヘ',
    '－・・':'ホ',
    '－・・－':'マ',
    '・・－・－':'ミ',
    '－':'ム',
    '－・・・－':'メ',
    '－・・－・':'モ',
    '・－－':'ヤ',
    '－・・－－':'ユ',
    '－－':'ヨ',
    '・・・':'ラ',
    '－－・':'リ',
    '－・－－・':'ル',
    '－－－':'レ',
    '・－・－':'ロ',
    '－・－':'ワ',
    '・－－－':'ヲ',
    '・－・－・':'ン',
    '・・－　・・':'ヴ',
    '・－・・　・・':'ガ',
    '－・－・・　・・':'ギ',
    '・・・－　・・':'グ',
    '－・－－　・・':'ゲ',
    '－－－－　・・':'ゴ',
    '－・－・－　・・':'ザ',
    '－－・－・　・・':'ジ',
    '－－－・－　・・':'ズ',
    '・－－－・　・・':'ゼ',
    '－－－・　・・':'ゾ',
    '－・　・・':'ダ',
    '・・－・　・・':'ヂ',
    '・－－・　・・':'ヅ',
    '・－・－－　・・':'デ',
    '・・－・・　・・':'ド',
    '－・・・　・・':'バ',
    '－－・・－　・・':'ビ',
    '－－・・　・・':'ブ',
    '・　・・':'ベ',
    '－・・　・・':'ボ',
    '－・・・　・・－－・':'パ',
    '－－・・－　・・－－・':'ピ',
    '－－・・　・・－－・':'プ',
    '・　・・－－・':'ペ',
    '－・・　・・－－・':'ポ',
    '・－・・　・・－－・':'カ゚',
    '－・－・・　・・－－・':'キ゚',
    '・・・－　・・－－・':'ク゚',
    '－・－－　・・－－・':'ケ゚',
    '－－－－　・・－－・':'コ゚',
    '・－－－・　・・－－・':'セ゚',
    '・－－・　・・－－・':'ツ゚',
    '・・－・・　・・－－・':'ト゚',
  },

  HanKata:{
    '－－・－－':'ｱ',
    '・－':'ｲ',
    '・・－':'ｳ',
    '－・－－－':'ｴ',
    '・－・・・':'ｵ',
    '・－・・':'ｶ',
    '－・－・・':'ｷ',
    '・・・－':'ｸ',
    '－・－－':'ｹ',
    '－－－－':'ｺ',
    '－・－・－':'ｻ',
    '－－・－・':'ｼ',
    '－－－・－':'ｽ',
    '・－－－・':'ｾ',
    '－－－・':'ｿ',
    '－・':'ﾀ',
    '・・－・':'ﾁ',
    '・－－・':'ﾂ',
    '・－・－－':'ﾃ',
    '・・－・・':'ﾄ',
    '・－・':'ﾅ',
    '－・－・':'ﾆ',
    '・・・・':'ﾇ',
    '－－・－':'ﾈ',
    '・・－－':'ﾉ',
    '－・・・':'ﾊ',
    '－－・・－':'ﾋ',
    '－－・・':'ﾌ',
    '・':'ﾍ',
    '－・・':'ﾎ',
    '－・・－':'ﾏ',
    '・・－・－':'ﾐ',
    '－':'ﾑ',
    '－・・・－':'ﾒ',
    '－・・－・':'ﾓ',
    '・－－':'ﾔ',
    '－・・－－':'ﾕ',
    '－－':'ﾖ',
    '・・・':'ﾗ',
    '－－・':'ﾘ',
    '－・－－・':'ﾙ',
    '－－－':'ﾚ',
    '・－・－':'ﾛ',
    '－・－':'ﾜ',
    '・－－－':'ｦ',
    '・－・－・':'ﾝ',
    '・・':'ﾞ',
    '・・－－・':'ﾟ',
  },

  ZenSu:{
    '－－－－－':'０',
    '・－－－－':'１',
    '・・－－－':'２',
    '・・・－－':'３',
    '・・・・－':'４',
    '・・・・・':'５',
    '－・・・・':'６',
    '－－・・・':'７',
    '－－－・・':'８',
    '－－－－・':'９',
    '－・－－・－':'（',
    '・－・・－・':'）',
    '・－・－・－':'、',
    '　':'　',
  },
  
  HanSu:{
    '－－－－－':'0',
    '・－－－－':'1',
    '・・－－－':'2',
    '・・・－－':'3',
    '・・・・－':'4',
    '・・・・・':'5',
    '－・・・・':'6',
    '－－・・・':'7',
    '－－－・・':'8',
    '－－－－・':'9',
    '－・－－・－':'(',
    '・－・・－・':')',
    '・－・－・－':',',
    ' ':' ',
  },

  Common:{
    '・－・・－':'ヰ',
    '\t':' ',
    '・・':'゛',
    '・・－－・':'゜',
    '・－－・－':'ー',
    '・－・－・・':'\n',
  }
}


const WToMorseTable = { //This table use convert alphabet to morse.
  A:'.-', 
  B:'-...',
  C:'-.-.',
  D:'-..',
  E:'.',
  F:'..-.',
  G:'--.',
  H:'....',
  I:'..',
  J:'.---',
  K:'-.-',
  L:'.-..',
  M:'--',
  N:'-.',
  O:'---',
  P:'.--.',
  Q:'--.-',
  R:'.-.',
  S:'...',
  T:'-',
  U:'..-',
  V:'...-',
  W:'.--',
  X:'-..-',
  Y:'-.--',
  Z:'--..',
  a:'.-',
  b:'-...',
  c:'-.-.',
  d:'-..',
  e:'.',
  f:'..-.',
  g:'--.',
  h:'....',
  i:'..',
  j:'.---',
  k:'-.-',
  l:'.-..',
  m:'--',
  n:'-.',
  o:'---',
  p:'.--.',
  q:'--.-',
  r:'.-.',
  s:'...',
  t:'-',
  u:'..-',
  v:'...-',
  w:'.---',
  x:'-..-',
  y:'-.--',
  z:'--..',
  0:'-----',
  1:'.----',
  2:'..---',
  3:'...--',
  4:'....-',
  5:'.....',
  6:'-....',
  7:'--...',
  8:'---..',
  9:'----.',
  ' ':' ',
  '.':'.-.-.-',
  ',':'--..--',//－－・・－－
  ':':'---...',//－－－・・・
  '!':'-.-.--',//－・－・－－
  '?':'..--..',//・・－－・・
  '\'':'.----.',//・－－－－
  '-':'-....-',//－・・・・－
  '(':'-.--.',
  ')':'-.--.-',
  '/':'-..-.',
  '=':'-...-',
  '+':'.-.-.',
  '"':'.-..-.',
  '*':'-..-',
  '@':'.--.-.',//・－－・－・
}


const JToMorseTable = { //This table use convert japanes to morse.
  あ:'－－・－－',
  い:'・－',
  う:'・・－',
  え:'－・－－－',
  お:'・－・・・',
  か:'・－・・',
  き:'－・－・・',
  く:'・・・－',
  け:'－・－－',
  こ:'－－－－',
  さ:'－・－・－',
  し:'－－・－・',
  す:'－－－・－',
  せ:'・－－－・',
  そ:'－－－－・',
  た:'－・',
  ち:'・・－・',
  つ:'・－－・',
  て:'・－・－－',
  と:'・・－・・',
  な:'・－・',
  に:'－・－・',
  ぬ:'・・・・',
  ね:'－－・－',
  の:'・・－－',
  は:'－・・・',
  ひ:'－－・・－',
  ふ:'－－・・',
  へ:'・',
  ほ:'－・・',
  ま:'－・・－',
  み:'・・－・－',
  む:'－',
  め:'－・・・－',
  も:'－・・－・',
  や:'・－－',
  ゆ:'－・・－－',
  よ:'－－',
  ら:'・・・',
  り:'－－・',
  る:'－・－－・',
  れ:'－－－',
  ろ:'・－・－',
  わ:'－・－',
  を:'・－－－',
  ん:'・－・－・',
  が:'・－・・　・・',
  ぎ:'－・－・・　・・',
  ぐ:'・・・－　・・',
  げ:'－・－－　・・',
  ご:'－－－－　・・',
  ざ:'－・－・－　・・',
  じ:'－－・－・　・・',
  ず:'－－－・－　・・',
  ぜ:'・－－－・　・・',
  ぞ:'－－－・　・・',
  だ:'－・　・・',
  ぢ:'・・－・　・・',
  づ:'・－－・　・・',
  で:'・－・－－　・・',
  ど:'・・－・・　・・',
  ば:'－・・・　・・',
  び:'－－・・－　・・',
  ぶ:'－－・・　・・',
  べ:'・　・・',
  ぼ:'－・・　・・',
  ぱ:'－・・・　・・－－・',
  ぴ:'－－・・－　・・－－・',
  ぷ:'－－・・　・・－－・',
  ぺ:'・　・・－－・',
  ぽ:'－・・　・・－－・',
  か゚:'・－・・　・・－－・',
  き゚:'－・－・・　・・－－・',
  く゚:'・・・－　・・－－・',
  け゚:'－・－－　・・－－・',
  こ゚:'－－－－　・・－－・',
  ぁ:'－－・－－',
  ぃ:'・－',
  ぅ:'・・－',
  ぇ:'－・－－－',
  ぉ:'・－・・・',
  ゕ:'・－・・',
  ゖ:'－・－－',
  っ:'・－－・',
  ゃ:'・－－',
  ゅ:'－・・－－',
  ょ:'－－',
  ゎ:'－・－',
  ア:'－－・－－',
  イ:'・－',
  ウ:'・・－',
  エ:'－・－－－',
  オ:'・－・・・',
  カ:'・－・・',
  キ:'－・－・・',
  ク:'・・・－',
  ケ:'－・－－',
  コ:'－－－－',
  サ:'－・－・－',
  シ:'－－・－・',
  ス:'－－－・－',
  セ:'・－－－・',
  ソ:'－－－・',
  タ:'－・',
  チ:'・・－・',
  ツ:'・－－・',
  テ:'・－・－－',
  ト:'・・－・・',
  ナ:'・－・',
  ニ:'－・－・',
  ヌ:'・・・・',
  ネ:'－－・－',
  ノ:'・・－－',
  ハ:'－・・・',
  ヒ:'－－・・－',
  フ:'－－・・',
  ヘ:'・',
  ホ:'－・・',
  マ:'－・・－',
  ミ:'・・－・－',
  ム:'－',
  メ:'－・・・－',
  モ:'－・・－・',
  ヤ:'・－－',
  ユ:'－・・－－',
  ヨ:'－－',
  ラ:'・・・',
  リ:'－－・',
  ル:'－・－－・',
  レ:'－－－',
  ロ:'・－・－',
  ワ:'－・－',
  ヲ:'・－－－',
  ン:'・－・－・',
  ヴ:'・・－　・・',
  ガ:'・－・・　・・',
  ギ:'－・－・・　・・',
  グ:'・・・－　・・',
  ゲ:'－・－－　・・',
  ゴ:'－－－－　・・',
  ザ:'－・－・－　・・',
  ジ:'－－・－・　・・',
  ズ:'－－－・－　・・',
  ゼ:'・－－－・　・・',
  ゾ:'－－－・　・・',
  ダ:'－・　・・',
  ヂ:'・・－・　・・',
  ヅ:'・－－・　・・',
  デ:'・－・－－　・・',
  ド:'・・－・・　・・',
  バ:'－・・・　・・',
  ビ:'－－・・－　・・',
  ブ:'－－・・　・・',
  ベ:'・　・・',
  ボ:'－・・　・・',
  パ:'－・・・　・・－－・',
  ピ:'－－・・－　・・－－・',
  プ:'－－・・　・・－－・',
  ペ:'・　・・－－・',
  ポ:'－・・　・・－－・',
  カ゚:'・－・・　・・－－・',
  キ゚:'－・－・・　・・－－・',
  ク゚:'・・・－　・・－－・',
  ケ゚:'－・－－　・・－－・',
  コ゚:'－－－－　・・－－・',
  セ゚:'・－－－・　・・－－・',
  ツ゚:'・－－・　・・－－・',
  ト゚:'・・－・・　・・－－・',
  ァ:'－－・－－',
  ィ:'・－',
  ゥ:'・・－',
  ェ:'－・－－－',
  ォ:'・－・・・',
  ヵ:'・－・・',
  ㇰ:'・・・－',
  ヶ:'－・－－',
  ッ:'・－－・',
  ャ:'・－－',
  ュ:'－・・－－',
  ョ:'－－',
  ヮ:'－・－',
  ｱ:'－－・－－',
  ｲ:'・－',
  ｳ:'・・－',
  ｴ:'－・－－－',
  ｵ:'・－・・・',
  ｶ:'・－・・',
  ｷ:'－・－・・',
  ｸ:'・・・－',
  ｹ:'－・－－',
  ｺ:'－－－－',
  ｻ:'－・－・－',
  ｼ:'－－・－・',
  ｽ:'－－－・－',
  ｾ:'・－－－・',
  ｿ:'－－－・',
  ﾀ:'－・',
  ﾁ:'・・－・',
  ﾂ:'・－－・',
  ﾃ:'・－・－－',
  ﾄ:'・・－・・',
  ﾅ:'・－・',
  ﾆ:'－・－・',
  ﾇ:'・・・・',
  ﾈ:'－－・－',
  ﾉ:'・・－－',
  ﾊ:'－・・・',
  ﾋ:'－－・・－',
  ﾌ:'－－・・',
  ﾍ:'・',
  ﾎ:'－・・',
  ﾏ:'－・・－',
  ﾐ:'・・－・－',
  ﾑ:'－',
  ﾒ:'－・・・－',
  ﾓ:'－・・－・',
  ﾔ:'・－－',
  ﾕ:'－・・－－',
  ﾖ:'－－',
  ﾗ:'・・・',
  ﾘ:'－－・',
  ﾙ:'－・－－・',
  ﾚ:'－－－',
  ﾛ:'・－・－',
  ﾜ:'－・－',
  ｦ:'・－－－',
  ﾝ:'・－・－・',
  'ﾞ':'・・',
  'ﾟ':'・・－－・',
  ｧ:'－－・－－',
  ｨ:'・－',
  ｩ:'・・－',
  ｪ:'－・－－－',
  ｫ:'・－・・・',
  ｯ:'・－－・',
  ｬ:'・－－',
  ｭ:'－・・－－',
  ｮ:'－－',
  '０':'－－－－－',
  '１':'・－－－－',
  '２':'・・－－－',
  '３':'・・・－－',
  '４':'・・・・－',
  '５':'・・・・・',
  '６':'－・・・・',
  '７':'－－・・・',
  '８':'－－－・・',
  '９':'－－－－・',
  '（':'－・－－・－',
  '）':'・－・・－・',
  '、':'・－・－・－',
  '　':'　',
  0:'－－－－－',
  1:'・－－－－',
  2:'・・－－－',
  3:'・・・－－',
  4:'・・・・－',
  5:'・・・・・',
  6:'－・・・・',
  7:'－－・・・',
  8:'－－－・・',
  9:'－－－－・',
  '(':'－・－－・－',
  ')':'・－・・－・',
  ',':'・－・－・－',
  '\s':' ',
  '゛':'・・','˝':'・・','〝':'・・','〟':'・・',
  '゜':'・・－－・',
  '|':'・－－・－',
  'ー':'・－－・－',
  '\n':'・－・－・・',
  'ヰ':'・－・・－',
}


var language = "Japanese";
var translate = "ToMorse";
var jWordLetter = "ZenKata";
var jNumLetter = "ZenSu";
var wLetter = "Upper";
var referenceTable = JTable;
var referenceToMorseTable = JToMorseTable;
var referenceWordTable = JTable.ZenKata;
var referenceNumberTable = JTable.ZenSu;
var referenceCommonTable = JTable.Common;
var space = '　';


function variableConverter() {
  language = document.getElementById("languageSelecter").value;
  translate = document.getElementById("translateSelecter").value;
  jWordLetter = document.getElementById("jWordLetterSelecter").value;
  jNumLetter = document.getElementById("jNumLetterSelecter").value;
  wLetter = document.getElementById("wLetterSelecter").value;

  if(translate == "MorseTo"){
    if(language == "Japanese"){
      jWordLetterSelecter.style.display = "inline";
      jNumLetterSelecter.style.display = "inline";
      wLetterSelecter.style.display = "none";
      document.getElementById("inputBox").placeholder = "－－－－ ・－・－・ －・－・ ・・－・ －・・・ ・－・－・－ －・・－・ ・－－・－ －・－－・ －－－・－";
      document.getElementById("outputBox").placeholder = "こんにちは、モールス";
    }else if(language == "Western"){
      jWordLetterSelecter.style.display = "none";
      jNumLetterSelecter.style.display = "none";
      wLetterSelecter.style.display = "inline";
      document.getElementById("inputBox").placeholder = ".... . .-.. .-.. ---  -- --- .-. ... .";
      document.getElementById("outputBox").placeholder = "HELLO MORSE";
    }
  }else if(translate == "ToMorse"){
    jWordLetterSelecter.style.display = "none";
    jNumLetterSelecter.style.display = "none";
    wLetterSelecter.style.display = "none";
    if(language == "Japanese"){
      document.getElementById("inputBox").placeholder = "こんにちは、モールス";
      document.getElementById("outputBox").placeholder = "－－－－ ・－・－・ －・－・ ・・－・ －・・・ ・－・－・－ －・・－・ ・－－・－ －・－－・ －－－・－";
    }else if(language == "Western"){
      document.getElementById("inputBox").placeholder = "Hello Morse";
      document.getElementById("outputBox").placeholder = ".... . .-.. .-.. ---  -- --- .-. ... .";
    }
  }

  if(language == 'Japanes'){
    referenceTabe = JTable;
    referenceToMorseTable = JToMorseTable;
    space = '　';
    JTableChanger();
  }else if(language == 'Western'){
    referenceTable = WTable;
    referenceToMorseTable = WToMorseTable;
    space = ' ';
    WTableChanger();
  }

  inputConverter();
}


function JTableChanger() {
  
  if(jWordLetter == "ZenKata"){
    referenceWordTable = JTable.ZenKata;
  }else if(jWordLetter == "HanKata"){
    referenceWordTable = JTable.HanKata;
  }else if(jWordLetter == "Hira"){
    referenceWordTable = JTable.Hira;
  }

  if(jNumLetter == "ZenSu"){
    referenceWordTable = JTable.ZenSu;
  }else if(jNumLetter == "HanSu"){
    referenceWordTable = JTable.HanSu;
  }

  referenceCommonTable = JTable.Common;
}


function WTableChanger() {

  if(wLetter == "Upper"){
    referenceWordTable = WTable.Upper;
  }else if(wLetter == "Downer"){
    referenceWordTable = WTable.Downer;
  }

  referenceNumberTable = WTable.Number;
  referenceCommonTable = WTable.Common;
}


function inputConverter() {
  const inputObj = document.getElementById("inputBox");
  const inputLine = inputObj.value;

  if(translate == 'MorseTo'){
    MorseToConverter(inputLine);
  }else if(translate == 'ToMorse'){
    ToMorseConverter(inputLine);
  }
  //inputBoxRender()
}


function ToMorseConverter(inputLine) {
  let answer = '';
  inputLine = inputLine.split('');
  
  for(let word of inputLine){
    if(referenceToMorseTable[word]){
      answer+=referenceToMorseTable[word] + space;
    }else if(word.match(/\s/)){
      answer+=space;
    }else{
      continue;
    }
  }
  document.getElementById('outputBox').innerHTML = answer.slice(0,-1);
  //outputBoxRender()
}


function MorseToConverter(inputLine) {
  if(inputLine == undefined){
    return;
  }
  let answer = '';
  let word = '';
  let spaceCounter = 0;
  inputLine = inputLine.split('');

  for(let l of inputLine){
    if(l.match(/\s/) && spaceCounter >= 1){
      answer+=space;
    }else if(l.match(/\s/)){
      if(referenceWordTable[word]){
        answer+=referenceWordTable[word];
      }else if(referenceNumberTable[word]){
        answer+=referenceNumberTable[word];
      }else if(referenceCommonTable[word]){
        answer+=referenceCommonTable[word];
      }
      spaceCounter+=1;
      word = '';
    }else{
      spaceCounter=0;
      word+=l;
    }
  }

  if(referenceWordTable[word]){
    answer+=referenceWordTable[word];
  }else if(referenceNumberTable[word]){
    answer+=referenceNumberTable[word];
  }else if(referenceCommonTable[word]){
    answer+=referenceCommonTable[word];
  }

  document.getElementById('outputBox').innerHTML = answer;
  //outputBoxRender()
}


function inputBoxRender() {
  const inputObj = document.getElementById("inputBox");
  
  if(inputObj.scrollHeight > inputObj.offsetHeight){
    inputObj.style.height = inputObj.scrollHeight+6+"px";
  }else if(inputObj.scrollHeight > 129 && inputObj.scrollHeight < inputObj.offsetHeight){
    inputObj.style.height = inputObj.scrollHeight-19+"px";
  }
}


function outputBoxRender() {
  const outputObj = document.getElementById("outputBox");

  if(outputObj.scrollHeight > outputObj.offsetHeight){
    outputObj.style.height = outputObj.scrollHeight+6+"px";
  }else if(outputObj.scrollHeight>129 && outputObj.scrollHeight < outputObj.offsetHeight){
    outputObj.style.height = outputObj.scrollHeight-19+"px";
  }
}
