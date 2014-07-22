<meta>
{
	"title": "Filter submit events",
	"subtitle": "",
	"id": "filter_submit_event",
	"index": 2
}
</meta>

You can execute a JavaScript callback when the "Apply" button on the filter has been clicked, by using the {{ linkApi ('js', 'FilterComponent', 'onApplyClick') }} function. This callback gives you all the data in an easy to use form.

~~~
filter_object.onApplyClick (function(params) {
	// params.values contains the values of all the filter items
	console.log ("The parameters are ", params);
});
~~~

The format of `params.values` is similar to what you get when you call {{ linkApi("js", "FilterComponent", "getInputValue") }}, and the format is described in detail at {{ ref("getAllInputValues") }}