var timerButton = function(t) {
	var n, e = t,
	i = e.enabled,
	a = e.duration,
	r = $('<input class="timer-button" type="button">');
	function o() {
		i = !1,
		r.attr("disabled", "disabled"),
		c(),
		n = window.setInterval(function() {
			a--,
			c(),
			0 === a && u()
		},
		1e3)
	}
	function u() {
		i = !0,
		a = e.duration,
		clearInterval(n),
		c(),
		r.removeAttr("disabled")
	}
	function c() {
		var t = i ? e.text: e.text + " (" + a + " s)";
		r.val(t)
	}
	return $(e.container).append(r),
	e.enabled ? u() : o(),
	r.click(function() {
		r.trigger("timer-button-click"),
		e.enabled && o()
	}),
	r
};