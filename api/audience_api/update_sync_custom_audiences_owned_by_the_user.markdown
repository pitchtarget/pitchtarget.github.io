---
layout: default
title: Audience API API
---

# Audience API API

## Update (sync) custom audiences owned by the user

### PUT /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |

### Request

{% highlight http %}
PUT /custom_audiences HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
fb_ad_account_id=26
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=26'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 204 No Content
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Cache-Control: no-cache
X-Request-Id: b7da843c-bba6-4037-9a13-4eb020fc1485
X-Runtime: 0.013725
{% endhighlight %}


