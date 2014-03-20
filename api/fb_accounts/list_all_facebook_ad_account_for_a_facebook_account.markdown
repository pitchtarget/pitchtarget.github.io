---
layout: default
title: Fb Accounts API
---

# Fb Accounts API

## List all Facebook Ad account for a Facebook account

### GET /fb_accounts/:id/ad_accounts



### Request

{% highlight http %}
GET /fb_accounts/913/ad_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_accounts/913/ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "c8de67bd5c1302f36f3aeac00a469039"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c0d9f926-797e-48cf-8ecd-8a6305cc6290
X-Runtime: 0.008316
Content-Length: 183
{% endhighlight %}

#### Body

{% highlight json %}
{
  "ad_accounts": [
    {
      "id": 1494,
      "fb_id": "10",
      "name": "AD Account Bar",
      "currency": "EUR",
      "created_at": "2014-03-20T17:39:11.744Z",
      "updated_at": "2014-03-20T17:39:11.744Z",
      "fb_account_id": 913
    }
  ]
}
{% endhighlight %}

