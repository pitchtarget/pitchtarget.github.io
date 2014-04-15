---
layout: default
title: Audience API API
---

# Audience API API

## Create a new website custom audience

### POST /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`type` (required) | Custom audience type |
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the website custom audience |
`retention_days` (required) | Number of days to keep the user in this cluster (between 1 and 180 days) |
`rule` (required) | A JSON object representing audience rules to be applied on the referrer URL |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Authorization: OAuth 75y9u886lnf9q0827zdebkmuwhzl1sk
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "type": "website",
  "fb_ad_account_id": "66",
  "name": "Users that put items in the car",
  "retention_days": 15,
  "rule": "{\"url\":{\"i_contains\":\"cart\"}}"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 75y9u886lnf9q0827zdebkmuwhzl1sk" \
	-H "Content-Type: application/json" -d '{"type":"website","fb_ad_account_id":"66","name":"Users that put items in the car","retention_days":15,"rule":"{\"url\":{\"i_contains\":\"cart\"}}"}'
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
ETag: "60669f217459b9091f02a9c0f24942a7"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: aaef618a-79d4-43bb-9f28-b4c94f33ef98
X-Runtime: 0.010479
Content-Length: 22
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

