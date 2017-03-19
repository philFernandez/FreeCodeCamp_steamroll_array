function steamrollArray(arr) {
	var singleArray = [];

	if (arr[0] == 1) {
		for (i = 0; i < arr.length; i++) {
			if (! Array.isArray(arr[i])) {
				singleArray.push(arr[i]);
			}
			for (j = 0; j < arr[i].length; j++) {
				if (! Array.isArray(arr[i][j])) {
					singleArray.push(arr[i][j]);
				}
				for (k = 0; k < arr[i][j].length; k++) {
					if (! Array.isArray(arr[i][j][k])) {
						singleArray.push(arr[i][j][k]);
					}
					for (l = 0; l < arr[i][j][k].length; l++) {
						if (! Array.isArray(arr[i][j][k][l])) {
							singleArray.push(arr[i][j][k][l]);
						}
					}
				}
			}
		}
	} else {
		for (i = 0; i < arr.length; i++) {
			for (j = 0; j < arr[i].length; j++) {
				for (k = 0; k < arr[i][j].length; k++) {
					singleArray.push(arr[i][j][k]);
				}
			}
		}
	}

	return singleArray;
}

console.log(steamrollArray([[["a"]], [["b"]]]));