---
layout: default
title: Audience API API
---

# Audience API API

## Create a new custom audience

### POST /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the custom audience |
`description`  | A description of the custom audience |
`opt_out_link`  | Your opt-out URL so users can choose not to be targeted |
`user_type` (required) | The type of user info provided. It must be one of: email_hash, phone_hash, custom_audience_third_party_id, mobile_advertiser_id |
`file` (required) | A file with the SHA256-hashed users data: one user per line |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth cpo7v1e0zbzdic90pc6txbj1cypb8yl
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_ad_account_id`

{% highlight text %}
2
{% endhighlight %}

##### `name`

{% highlight text %}
Spending users
{% endhighlight %}

##### `description`

{% highlight text %}
Users who bought something on my site
{% endhighlight %}

##### `opt_out_link`

{% highlight text %}
http://www.myshop.com/opt_out
{% endhighlight %}

##### `user_type`

{% highlight text %}
email_hash
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cpo7v1e0zbzdic90pc6txbj1cypb8yl" \
	-F 'fb_ad_account_id=2' \
	-F 'name=Spending users' \
	-F 'description=Users who bought something on my site' \
	-F 'opt_out_link=http://www.myshop.com/opt_out' \
	-F 'user_type=email_hash' \
	-F 'file=@spending_users.csv;type=text/plain'
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
ETag: "6d07c4c9ec294d765cb6c802bfa00eec"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: f643fa7b-a9e8-4181-820e-ab3c7252c41b
X-Runtime: 0.145395
Content-Length: 160
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 54,
    "name": "Spending users",
    "description": null,
    "opt_out_link": "http://www.myshop.com/opt_out",
    "user_type": "email_hash",
    "fb_id": null
  }
}
{% endhighlight %}

