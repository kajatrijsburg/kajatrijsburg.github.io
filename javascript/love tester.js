function test_love{
	name1 = prompt("Enter the first name");
	name2 = prompt("Enter the second name");
	rnd1 = Math.round(Math.random() * 100);
	rnd2 = Math.round(Math.random() * 100);
	alert(name1 + " is %" + rnd1 + " in love with " + name2);
	alert(name2 + " is %" + rnd2 + " in love with " + name1);

	function shipname(x, y) {
		return x.substring(0, Math.round(x.length / 2)) + y.substring(Math.round(y.length / 2), y.length);
	}

	if (rnd1 < 20) {
		if (rnd2 < 20) {
			alert(name1 + " and " + name2 + " don't love each other at all");
		}
		alert("It seems that " + name1 + " doesn't love " + name2)
		if (rnd2 > 60) {
			alert("Give it up " + name2 + " this will never work out...");
		}
		if (rnd2 < 20) {
			alert("you could still be friends");
		}
	}

	if (rnd1 > 20 && rnd1 < 40) {
		alert(name1 + " loves " + name2 + " somewhat");
		if (rnd2 > 20) {
			alert("Love is in the air, this could become something ( ;");
		}
		if (rnd2 > 40 && rnd2 < 70) {
			alert("It seems that " + name2 + " has quite the crush on " + name1);
		}
	}

	if (rnd1 > 40 && rnd1 < 70) {
		alert(name1 + " likes " + name2 + " quite a lot.");
		if (rnd2 < 20) {
			alert("Give it up " + name1 + " this will never work out...");
		}
		if (rnd2 > 20 && rnd2 < 40) {
			alert(name1 + " try as hard as you can, you have a chance");
		}
		if (rnd2 > 40) {
			alert("you realy love eachother!! If you're not official yet, you should be!!");
			alert("I totaly ship you guys!! Your shipname would be " + shipname(name1, name2));
		}
	}

	if (rnd1 > 70) {
		alert(name1 + " is truely in love with " + name2);
		if (rnd2 < 20) {
			alert("ouch... this is going to hurt " + name1 + "!!");
			if (rnd2 > 20 && rnd2 < 40) {
				alert("this could be a thing, " + name1 + " just has to try to win " + name2 + "'s heart...");
			}
		}
		if (rnd2 > 40 && rnd2 < 70) {
			alert("you two should get a room");
			alert("your shipname would be: " + shipname(name1, name2));
		}
		if (rnd2 > 70) {
			alert(name1 + " and " + name2 + " ARE THE PERFECT COUPLE!");
			alert("I totaly ship " +shipname(name1, name2)+" !! !");
		}
	}
}