---
layout: default
title: Fb Accounts API
---

# Fb Accounts API

## List all Facebook Ad account for a Facebook account

### GET /api/fb_accounts/:id/ad_accounts



### Request

{% highlight http %}
GET /api/fb_accounts/938/ad_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cx1k3nvq1deuzprg02me60btfn8gr5j
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "pitchtarget.com/api/fb_accounts/938/ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cx1k3nvq1deuzprg02me60btfn8gr5j"
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
ETag: "5c88decb5fcc158956b682ab8e8ad114"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 88a7c324-99a9-40a5-afa7-b69753d39897
X-Runtime: 0.007077
Content-Length: 183
{% endhighlight %}

#### Body

{% highlight json %}
{
  "ad_accounts": [
    {
      "id": 1547,
      "fb_id": "30",
      "name": "AD Account Bar",
      "currency": "EUR",
      "created_at": "2014-03-20T15:21:12.310Z",
      "updated_at": "2014-03-20T15:21:12.310Z",
      "fb_account_id": 938
    }
  ]
}
{% endhighlight %}

