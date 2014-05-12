---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Regenerate your PitchTarget client application secret

### PUT /clients/:id/reset_secret



### Request

{% highlight http %}
PUT /clients/376/reset_secret HTTP/1.1
Accept: application/json
Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/376/reset_secret" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav" \
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
ETag: "06feb9c401698e28376610b336f7a029"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9f382fae-0815-4e1f-b4cf-509e2efcf957
X-Runtime: 0.144473
Content-Length: 175
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 376,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "64z5hq2xi3zgpwts3a4208bj40grcf7",
    "client_secret": "3g17b4ye08bk3yjcphpiv7swu6lch4v"
  }
}
{% endhighlight %}

