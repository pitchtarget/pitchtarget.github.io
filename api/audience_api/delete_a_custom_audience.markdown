---
layout: default
title: Audience API API
---

# Audience API API

## Delete a custom audience

### DELETE /custom_audiences/:id



### Request

{% highlight http %}
DELETE /custom_audiences/57 HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth 4w8yyeszjwt5vvnvodjaamabfcx0ybp
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/57" -X DELETE \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth 4w8yyeszjwt5vvnvodjaamabfcx0ybp" -d '{}'
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
ETag: "b8b6374bc1168d28442978423860761b"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: ebeb1112-0460-4027-aedd-b68f5e916adc
X-Runtime: 0.330627
Content-Length: 160
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 57,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": null
  }
}
{% endhighlight %}

