---
layout: default
title: Audience API API
---

# Audience API API

## Create a new lookalike audience

### POST /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`type` (required) | Custom audience type |
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the lookalike audience |
`origin_audience_id` (required) | The ID of origin custom audience |
`lookalike_spec` (required) | An object that specifies the lookalike audience |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth jvm9ily5v0khkuf6ptxl0c6qyusalzt
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "type": "lookalike",
  "fb_ad_account_id": "61",
  "name": "Boys Apparel_lookalike_US_Similarity",
  "origin_audience_id": 6006164557194,
  "lookalike_spec": {
    "type": "similarity",
    "country": "US"
  }
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth jvm9ily5v0khkuf6ptxl0c6qyusalzt" -d '{"type":"lookalike","fb_ad_account_id":"61","name":"Boys Apparel_lookalike_US_Similarity","origin_audience_id":6006164557194,"lookalike_spec":{"type":"similarity","country":"US"}}'
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
X-Request-Id: 7eaee2fa-e11d-4410-8f18-33d9839f9ccb
X-Runtime: 0.012544
Content-Length: 22
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

