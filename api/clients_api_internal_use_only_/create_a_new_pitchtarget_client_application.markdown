---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Create a new PitchTarget client application

### POST /clients


### Parameters

Name | Description |
-----|-------------|
`name` (required) | The name of the new PitchTarget client application |
`redirect_uri` (required) | The URI of your application. This is used to validate redirect_uri when connecting to our Facebook App |

### Request

{% highlight http %}
POST /clients HTTP/1.1
Accept: application/json
Authorization: OAuth coy1a8jd126btls9f08n2nlm2x41b8a
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
name=My+new+client&redirect_uri=http%3A%2F%2Fmy.example.com
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth coy1a8jd126btls9f08n2nlm2x41b8a" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'name=My+new+client&redirect_uri=http%3A%2F%2Fmy.example.com'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "460e6866c29ef6e56848620d89eecd84"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 4638138e-8936-4877-b3b2-697e24f02d46
X-Runtime: 0.136559
Content-Length: 180
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 7545,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "nmwfr9oerbna5ukcya0nwihyvqvwetk",
    "client_secret": "bue6ygtr0madn214oh8aw4e4rpg5glg"
  }
}
{% endhighlight %}

