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
`subtype` (required) | The subtype for the custom audience |
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the lookalike audience |
`origin_audience_id` (required) | The ID of origin custom audience |
`lookalike_spec` (required) | An object that specifies the lookalike audience |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Authorization: OAuth oqf75nj2y881a50t5j9uczzyk73kfk6
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "subtype": "LOOKALIKE",
  "fb_ad_account_id": "55",
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
	-H "Authorization: OAuth oqf75nj2y881a50t5j9uczzyk73kfk6" \
	-H "Content-Type: application/json" -d '{"subtype":"LOOKALIKE","fb_ad_account_id":"55","name":"Boys Apparel_lookalike_US_Similarity","origin_audience_id":6006164557194,"lookalike_spec":{"type":"similarity","country":"US"}}'
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
ETag: "4504fa784afa8e0d8a38b96312023e95"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 0cdd7641-3a82-4821-91ca-63838ea059ec
X-Runtime: 0.081115
Content-Length: 215
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 1243,
    "name": "Boys Apparel_lookalike_US_Similarity",
    "fb_id": "6006183285954",
    "subtype": "LOOKALIKE",
    "origin_audience_id": 6006164557194,
    "lookalike_spec": {
      "type": "similarity",
      "country": "US"
    }
  }
}
{% endhighlight %}

