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
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`user_type` (required) | The type of user info provided. It must be one of: email_hash, phone_hash, custom_audience_third_party_id, mobile_advertiser_id |
`file` (required) | A file with the SHA256-hashed users data to be added to the custom audience: one user per line |

### Request

{% highlight http %}
PUT /custom_audiences/465257143575221 HTTP/1.1
Accept: application/json
Authorization: OAuth bk1nbxxdqh8bjf5fae6l9ejo279lmvc
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_ad_account_id`

{% highlight text %}
49
{% endhighlight %}

##### `user_type`

{% highlight text %}
email_hash
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/465257143575221" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth bk1nbxxdqh8bjf5fae6l9ejo279lmvc" \
	-F 'fb_ad_account_id=49' \
	-F 'user_type=email_hash' \
	-F 'file=@spending_users.csv;type=text/plain'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "6b3786b87a04d92d7b27a07be5f789c1"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 6b7d15f5-d60a-45e9-b6cb-cb43b222bc59
X-Runtime: 0.042403
Content-Length: 204
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 1241,
    "name": "Spending users",
    "fb_id": "465257143575221",
    "subtype": "CUSTOM",
    "description": "Users who bought something on my site",
    "opt_out_link": "http://www.myshop.com/opt_out"
  }
}
{% endhighlight %}

