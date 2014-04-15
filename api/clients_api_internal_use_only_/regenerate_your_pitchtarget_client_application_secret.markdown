---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Regenerate your PitchTarget client application secret

### PUT /clients/:id/reset_secret



### Request

{% highlight http %}
PUT /clients/4957/reset_secret HTTP/1.1
Accept: application/json
Authorization: OAuth t1izbx0mipdhwc7z7rvvoiop9dee2oj
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/4957/reset_secret" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth t1izbx0mipdhwc7z7rvvoiop9dee2oj" \
	-H "Content-Type: application/x-www-form-urlencoded" -d ''
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "3a23321dd791421e172a353cb70f7aad"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 785e3903-a42b-418f-9b49-70063fab4879
X-Runtime: 0.135713
Content-Length: 175
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 4957,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "7ebx9qz64ybzqjqhgvnfs4lx92s3clh",
    "client_secret": "58lluqtcircv2mfveyleg20xln2o9e"
  }
}
{% endhighlight %}

