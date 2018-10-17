var hashedPass = function hashedPass(password) {
	var a = 1, c = 0, h, o;
	if (password) {
	  a = 0;
	  /*jshint plusplus:false bitwise:false*/
	  for (h = password.length - 1; h >= 0; h--) {
		o = password.charCodeAt(h);
		a = (a<<6&268435455) + o + (o<<14);
		c = a & 266338304;
		a = c!==0?a^c>>21:a;
	  }
	}else {
	  // If the password is not valid, we'll throw and error we're able to catch
	  throw new Error("The password supplied is not valid");
	}
	return String(a);
};

console.log(hashedPass("AAAaaa1"))