function whetherInclude(stringShort, stringLong){
 	let j = 0;
	if(stringLong.length >= stringShort.length){
		for(i = 0; i < stringLong.length; i ++){			
			if(stringShort[j] === stringLong[i]){
				j ++;
				if(j == stringShort.length){//see if all the charactors of the short string is compared.
					return true;
				}
			} else if(stringLong[i] === stringShort[0]){//one step backward when current charactor of the long string is the same with the first one of the short string.
				i --;
				j = 0;
			} else {
				j = 0;
			}
		}
		return false;
	} else {
		return false;
	}
}

let str1 = "type";
let str2 = "istyptypely";

console.log(whetherInclude(str1, str2));