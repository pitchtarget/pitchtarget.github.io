---
layout: default
title: Users API API
---

# Users API API

## Delete a user

### DELETE /users/:id



### Request

{% highlight http %}
DELETE /users/28367 HTTP/1.1
Accept: application/json
Authorization: OAuth 2ky6pj375cooglfhq3zi69og2df3ttl
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/28367" -X DELETE \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 2ky6pj375cooglfhq3zi69og2df3ttl" \
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
X-Request-Id: dcfd12f5-e89d-4108-8a42-0ec3d2108c44
X-Runtime: 0.015287
{% endhighlight %}


