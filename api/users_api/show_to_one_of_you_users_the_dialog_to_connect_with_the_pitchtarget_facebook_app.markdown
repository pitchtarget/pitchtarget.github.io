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
GET /facebook/oauth_dialog?redirect_uri=http%3A%2F%2Fbtask.cloudapp.net&amp;oauth_token=146p1jssbflx1bvudow4n0fccn8rqw HTTP/1.1
Accept: application/json
Host: example.org
Cookie: 
redirect_uri: http://btask.cloudapp.net
oauth_token: 146p1jssbflx1bvudow4n0fccn8rqw
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/facebook/oauth_dialog?redirect_uri=http%3A%2F%2Fbtask.cloudapp.net&oauth_token=146p1jssbflx1bvudow4n0fccn8rqw" -X GET \
	-H "Accept: application/json"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 302 Found
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Location: https://www.facebook.com/dialog/oauth?client_id=668664849828937&redirect_uri=http%3A%2F%2Fexample.org%2Ffacebook%2Foauth_code%3Fintegrator_uri%3Dhttp%253A%252F%252Fbtask.cloudapp.net%26oauth_token%3D146p1jssbflx1bvudow4n0fccn8rqw&scope=publish_stream%2Cads_management%2Cmanage_pages
Content-Type: text/html; charset=utf-8
Cache-Control: no-cache
X-Request-Id: 72811e3c-c8ec-4dff-a88c-c1287c1b4424
X-Runtime: 0.008930
Content-Length: 356
{% endhighlight %}

#### Body

{% highlight text %}
<html><body>You are being <a href="https://www.facebook.com/dialog/oauth?client_id=668664849828937&amp;redirect_uri=http%3A%2F%2Fexample.org%2Ffacebook%2Foauth_code%3Fintegrator_uri%3Dhttp%253A%252F%252Fbtask.cloudapp.net%26oauth_token%3D146p1jssbflx1bvudow4n0fccn8rqw&amp;scope=publish_stream%2Cads_management%2Cmanage_pages">redirected</a>.</body></html>
{% endhighlight %}

