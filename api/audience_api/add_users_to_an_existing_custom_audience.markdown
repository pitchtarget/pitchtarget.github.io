---
layout: default
title: Audience API API
---

# Audience API API

## Add users to an existing custom audience

### PUT /custom_audiences/:id


### Parameters

Name | Description |
-----|-------------|
`file` (required) | A file with the SHA256-hashed users data to be added to the custom audience: one user per line |

### Request

{% highlight http %}
PUT /custom_audiences/55 HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth cpo7v1e0zbzdic90pc6txbj1cypb8yl
Host: example.org
Cookie: 

{% endhighlight %}

#### Body


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/55" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cpo7v1e0zbzdic90pc6txbj1cypb8yl" \
	-F 'file=@spending_users.csv;type=text/plain'
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
ETag: "d583d6c70b3f8456fdd581af88353687"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: ebf7ad91-f21b-42a6-854c-8c7550768169
X-Runtime: 0.019410
Content-Length: 160
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 55,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": null
  }
}
{% endhighlight %}

