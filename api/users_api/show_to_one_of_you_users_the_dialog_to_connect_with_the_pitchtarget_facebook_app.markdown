---
layout: default
title: Users API API
---

# Users API API

## Show to one of you users the dialog to connect with the PitchTarget Facebook App

### GET /facebook/oauth_dialog


### Parameters

Name | Description |
-----|-------------|
`redirect_uri` (required) | The URL that you want to redirect the person logging in back to |
`oauth_token` (required) | The PitchTarget access token of the user that needs to connect with the Facebook App |

### Request

{% highlight http %}
GET /facebook/oauth_dialog?redirect_uri=http%3A%2F%2Fbtask.cloudapp.net&amp;oauth_token=240h2cvgonhruhgvxnvvg6pxb7jk312 HTTP/1.1
Accept: application/json
Host: example.org
Cookie: 
redirect_uri: http://btask.cloudapp.net
oauth_token: 240h2cvgonhruhgvxnvvg6pxb7jk312
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/facebook/oauth_dialog?redirect_uri=http%3A%2F%2Fbtask.cloudapp.net&oauth_token=240h2cvgonhruhgvxnvvg6pxb7jk312" -X GET \
	-H "Accept: application/json"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 302 Found
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Location: https://www.facebook.com/dialog/oauth?client_id=668664849828937&redirect_uri=http%3A%2F%2Fexample.org%2Ffacebook%2Foauth_code%3Fintegrator_uri%3Dhttp%253A%252F%252Fbtask.cloudapp.net%26oauth_token%3D240h2cvgonhruhgvxnvvg6pxb7jk312&scope=publish_stream%2Cads_management%2Cmanage_pages
Content-Type: text/html; charset=utf-8
Cache-Control: no-cache
X-Request-Id: 84c468fc-63c3-462f-8f14-dd8eb8bacec5
X-Runtime: 0.009167
Content-Length: 357
{% endhighlight %}

#### Body

{% highlight text %}
<html><body>You are being <a href="https://www.facebook.com/dialog/oauth?client_id=668664849828937&amp;redirect_uri=http%3A%2F%2Fexample.org%2Ffacebook%2Foauth_code%3Fintegrator_uri%3Dhttp%253A%252F%252Fbtask.cloudapp.net%26oauth_token%3D240h2cvgonhruhgvxnvvg6pxb7jk312&amp;scope=publish_stream%2Cads_management%2Cmanage_pages">redirected</a>.</body></html>
{% endhighlight %}

