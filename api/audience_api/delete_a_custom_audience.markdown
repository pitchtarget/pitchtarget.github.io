---
layout: default
title: Audience API API
---

# Audience API API

## Delete a custom audience

### DELETE /custom_audiences/:id



### Request

{% highlight http %}
DELETE /custom_audiences/465257143575221 HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/465257143575221" -X DELETE \
	-H "Accept: application/json" \
	-H "Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1" \
	-H "Content-Type: application/x-www-form-urlencoded" -d ''
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
X-Request-Id: c699daae-7712-4cb9-af55-fab96cbbaf75
X-Runtime: 0.027454
{% endhighlight %}


