function voatmeme(){
	text_to_replace_id = document.getElementById("replace");
	input_id = document.getElementById("input");

	input = input_id.value;
	
	text_to_replace_id.innerHTML = "I can\'t for the life of me understand why this cult is so popular, but it isn't the thing itself that's the problem. And, I\'m sure when used responsibly (better yet, legally) and without pushing it on others, there are no major negative consequences (yes, I know it can\'t kill you). Never used it myself since I\'m straightedge, but I\'m sure if I did, I\'d never want to consider myself a " + input + "er" + ".<br /><br />This is because the culture behind it is absolutely vile to me and I despise it more with every passing day. The pious, arrogant love that " + input + "ers" + " have for that sickening "+input+" is so extreme that it\'s baffling, but what exacerbates the issue is how online, no-one is allowed to have any negative opinion about it. At all. Even if you don\'t use " + input + ", you just have to praise the cult. Yet, from what I\'ve seen online, " + input + "ers" + " do absolutely nothing to make " + input + " look good. Instead, they\'ve utterly killed it. The idiotic culture surrounding it makes me want to stay far, far away from " + input + ". I\'ve always found any kind of " + input + "s" + " unpleasant, but I could at least accept " + input + " if it wasn\'t shoved in my face from every direction.<br /><br />The incessant need for " + input + "ers" + " to defend " + input +"-culture and encourage other people to " + input + " it comes across as profoundly obnoxious (\"" + input +" it faggot!\", \"" + input + " everyday!\", \"Just get " + input + ", bro!\) . Furthermore, many " + input + "ers" + " like to see the " + input + " as a magical force that can unite the world in peace, and yet it is prominent in the very nasty, un-peaceful " + input + " culture. Even as it gets gradually legalised throughout the world, its dark reputation will always linger. It\'s not a \"nice\" subject, it\'s disturbing and lowbrow. Pictures and videos of " + input + "ing" + " are ugly and creepy. " + input + "-related humor is terrible and intelligence-insulting, especially in memes. Songs about it, especially ones promoting it, are almost always complete crap (Miley Cyrus\'s abysmal \"" + input + " It!\" being the absolute nadir). Celebrating the use of it on sites is even worse and comes across as really scummy and pathetic. How exactly am I supposed to NOT see it is disgusting? It\'s uncomfortable and unpleasant to think about.<br /><br />And that\'s why I hate " + input + " culture. The whole thing is endlessly creepy, filthy, obnoxious and moronic. Am I really the only person who feels this way? I can\'t stand it, and I feel so alone in this specific mindset.";
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}