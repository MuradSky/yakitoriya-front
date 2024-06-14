export const Cookies = {
	// Function to set a cookie
	set: function (name: string, value: string, days?: string | number) {
		var expires = "";

		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + Number(days) * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}

		document.cookie = name + "=" + value + expires + "; path=/";
	},

	// Function to get a cookie value
	get: function (name: string) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');

		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}

		return null;
	},

	// Function to delete a cookie
	delete: function (name: string) {
		this.set(name, "", -1);
	},
};
