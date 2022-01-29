



const eleminateUnwanted = () => {
	while (input.includes(unwant)) {
		for (let i = 0; i < input.length; i++) {
			if (input.substr(i, unwant.length) === unwant) {
				var rightString = input.substr(i + unwant.length);
				var leftString = input.substr(0, i);
				input = leftString + rightString;
			}
		}
	}

	console.log(input);
}

let input = "daabcbaabcbc";
let unwant = "abc";
eleminateUnwanted();