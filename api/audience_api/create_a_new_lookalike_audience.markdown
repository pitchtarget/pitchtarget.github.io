---
layout: default
title: Audience API API
---

# Audience API API

## Create a new lookalike audience

### POST /lookalikeaudiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the lookalike audience |
`origin_audience_id` (required) | The ID of origin custom audience |
`lookalike_spec` (required) | An object that specifies the lookalike audience |

### Request

{% highlight http %}
POST /lookalikeaudiences HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth oped2eq75ispw94u5tpdpu36vji0xz4
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_account_id": "13",
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
curl "api.pitchtarget.com/lookalikeaudiences" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth oped2eq75ispw94u5tpdpu36vji0xz4" -d '{"fb_ad_account_id":"13","name":"Boys Apparel_lookalike_US_Similarity","origin_audience_id":6006164557194,"lookalike_spec":{"type":"similarity","country":"US"}}'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "60669f217459b9091f02a9c0f24942a7"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c3a5c56f-a0d6-4a79-9da1-179963f0122e
X-Runtime: 0.019291
Content-Length: 22
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

