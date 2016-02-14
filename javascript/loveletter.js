<<<<<<< HEAD
function write_letter(){
//console.log("started generation of love letter");

var text_to_replace_id = document.getElementById("replace");
var input_id = document.getElementById("input");
var name = input_id.value;
=======
function write(){
console.log("started generation of love letter");
//var text_to_replace_id = document.getElementById("replace");
//var input_id = document.getElementById("input");
//var name = input_id.value;
>>>>>>> origin/master

var name = prompt("enter the name of your love interest","right here you dummy");

var line = [];

line[0]=["My dearest " + name, 
	"My greatest love " + name, 
	"the love of my life " + name,
	"my precious " + name,
	"My soul mate "+ name,
	"My angel, my goddess "+ name,
	"My one and only love "+ name,
	"My supernova "+ name,
	"Oh, " +name+", Aphrodite by another name"];
				
line[1]=["You might not know me but, ",
	"This might be a surprise, ",
	"I've admired you from a distance and ",
	"I think that ",
	"You should know that "];

line[2]=["I've fallen in love with you. ",
	"you're my one and only love. ",
	"my heart beats faster whenever I see you. ",
	"you're the source of all my happiness. ",
	"I really really really like you. ",
	"I'm just perfect for you. ",
	"I  think you should give me a chance. "];
				
line[3]=["The best thing about you is your ",
	"I just so admire your ",
	"I can't resist your ",
	"You've caught me with your ",
	"I envy your ",
	"I really like your "];

line[4]=["beauty. ",
	"superior intellect. ",
	"mystique. ",
	"defiant spirit. ",
	"perfectly formed earlobes. ",
	"long flowing hair. ",
	"big hooters. ",
	"fat ass. ",
	"humour. ",
	"sick abs. ",
	"honesty. ",
	"reliable nature. "];

line[5]=["I fantasize every day about ",
	"I often dream of ",
	"We should try ",
	"I could really see us ",
	"I can already imagine us ",
	"Maybe tomorrow we could try to "];
	
line[6]=["running away together. ",
	"getting wed, having a few kids, taking some pictures, retiring to the south of France, and dying. ",
	"experiencing a night wilder that even our wildest dreams. ",
	"doing something fun with you. ",
	"having lots of cute babies with you. ",
	"doing taxes together. ",
	"being together for ever. "];

line[7]=["Oh yes, "+name+", ",
	"Indeed my love, ",
	"That's why ",
	"I truly believe that ", 
	"I can only hope that ",
	"From time to time I think that "];

line[8]=["we would make the perfect couple. ",
	"we are star-crossed lovers. ",
	"I'll love you for ever and ever and ever and ever.",
	"I'll never grow tired of your nagging",
	"we where made for each other. ",
	"I would go to the ends of the world for you. "];
	
line[9]=["A day without you ",
	"Every night I can't feel you in my arms ",
	"When another second without you passes, it ",
	"I'm so in love that being without you ",
	"I love more than I've ever loved anyone, and you should know that being without you "];
	
line[10]=["feels like the world is ending. ",
	"seems like an eternity in the deepest depths of hell. ",
	"would be worse than anything I could possibly imagine. ",
	"makes me feel so alone that I could not survive it for long. ",
	"makes me fell like offing myself. ",
	""];
	
line[11]=["I beg you please, ",
	"I truly hope that ",
	"maybe ",
	"I would sell my soul and all I've ever possessed so that ",
	"An oracle tells me that "];
	
line[12]=["we could be together forever. ",
	"the two of us should never be apart. ",
	"we will have wonderful children who will look just like you. ",
	"nothing could ever stop us from finding each other. ",
	"I could stay awake for ever so I can always keep an eye on you. "],

line[13]=["What I admire most about you is ",
	"The reason why I love you so is ",
	"You know what's so great about you? of course you do it's ",
	"The greatest thing about you is ",
	"What I like least about you is "];
	
line[14]=["that you don't even know how pretty you are. ",
	"the simple fact that you're so sexy. ",
	"the way you say \"Octagon.\" ",
	"your perfectly symmetrical face. ",
	"your amazing fashion sense. ",
	"how perfectly circular you are. ",
	"that you have an astonishing high body temperature. ",
	"the cute noise you make when you sleep. ",
	"your unyielding loyalty. "];

line[15]=["I can feel myself falling in love with you ",
	"The moment when I feel in love the most is ",
	"I just can't help loving you ",
	"I feel like Satan himself is talking to me ",
	"Even though I love you, I dislike it "];

line[16]=["when you do that thing with your hair. ",
	"every time you say my name like that. ",
	"when the police tells me that I can't go to your neighbourhood any more. ",
	"whenever I hear that voice in my head that tells me I should take more pictures of you. ",
	"when you smile. "];

line[17]=["I promise to never ",
	"I definitely totally wouldn't ",
	"Nothing could tear us apart, I wouldn't ever ",
	"Even if the gods themselves would try to separate us, I would never ",
	"I will always ",
	"Even though I might be tempted I won't "];
	
line[18]=["let my LoL addiction come between us.",
	"eat all the chocolate I meant to give you. ",
	"betray us. ",
	"be a bad, bad, bad kitten. ",
	"watch netflix without you. ",
	"lick your toes at night. ",
	"give you up, <br>never gonna let you down, <br>never gonna run around and desert you, <br>never gonna make you cry, <br>never gonna say goodbye, <br>never gonna tell a lie and hurt you",
	"wear socks in my sandals. ",
	"cheat on you. ",
	"let \"no\" stop me. ",
	"watch you trough your window when you don't know I'm there. "];
	
line[19]=["So I guess I wanted to know. ",
	"I can't hold back any more, I just have to ask you... ",
	"erm, sooooo...., eh... ",
	"I feel like a caged bird, I need to know. ",
	"I must ask you...",
	"I know you always tell me \"no\", but I want to ask you once more. "];
	
line[20]=["Do you love me like I do?",
	"Do you want to go to morgue with me?",
	"Are you secretly Morgan Freeman?",
	"Are you in love with my Runescape avatar, like you should be?",
	"Do you love me?",
	"Do you worship the one and only god, Satan, like a true follower of the morning star?",
	"Could you save me from myself?",
	"Will you go to prom with me?",
	"Do you like butt stuff?",
	"What will we name our first-born? "];
	
var letter = "To: <br>";
var options = 1;

for(i=0; i<line.length; i++){
	options = options * (line[i].length + 1)
	letter = letter + line[i][Math.floor(Math.random()*line[i].length)];
	if(i%2 == 0){
		letter = letter + "<br>";
	}
}
<<<<<<< HEAD
//console.log("finished writing the letter");
//alert(letter);
text_to_replace_id.innerHTML = letter;
//console.log("finished updating the page");
}
=======
console.log("finished writing the letter");
//alert(letter);
//alert(options)
text_to_replace_id.innerHTML = letter;
console.log("finished updating the page");
}write();
>>>>>>> origin/master
