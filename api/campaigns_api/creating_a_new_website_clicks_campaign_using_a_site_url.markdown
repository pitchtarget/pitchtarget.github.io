---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new WEBSITE_CLICKS campaign using a site URL

### POST /campaigns


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | FbAdAccount id |
`objective` (required) | Campaign objective |
`name` (required) | Campaign name |
`bid_type`  | Bid type |
`bid_info`  | Bid info |
`max_bid`  | Max bid |
`budget_type`  | Budget type |
`budget_amount`  | Budget amount |
`start_time`  | Start time |
`end_time`  | End time |
`targets`  | Targets |
`object_url`  | Object URL |
`object_id`  | Object id |
`call_to_action_type`  | Call to action type |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |

### Request

{% highlight http %}
POST /campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth jwn6yukeig4ukaywj4zeaweodwxf7no
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_ad_account_id`

{% highlight text %}
34
{% endhighlight %}

##### `objective`

{% highlight text %}
WEBSITE_CLICKS
{% endhighlight %}

##### `name`

{% highlight text %}
foo
{% endhighlight %}

##### `bid_type`

{% highlight text %}
ABSOLUTE_OCPM
{% endhighlight %}

##### `bid_info`

{% highlight json %}
{
  "ACTIONS": 100
}
{% endhighlight %}

##### `max_bid`

{% highlight text %}
100
{% endhighlight %}

##### `budget_type`

{% highlight text %}
daily
{% endhighlight %}

##### `budget_amount`

{% highlight text %}
100000
{% endhighlight %}

##### `start_time`

{% highlight text %}
1396544286
{% endhighlight %}

##### `targets`

{% highlight json %}
[
  {
    "name": "Mobile Games fans",
    "specs": {
      "age_min": 18,
      "age_max": 35,
      "geo_locations": {
        "countries": [
          "US"
        ]
      },
      "interests": [
        {
          "name": "Video games",
          "id": 6003940339466
        },
        {
          "name": "Browser games",
          "id": 6003434373937
        },
        {
          "name": "Casual game",
          "id": 6003102728434
        }
      ]
    }
  }
]
{% endhighlight %}

##### `object_url`

{% highlight text %}
http://www.example.com
{% endhighlight %}

##### `object_id`

{% highlight text %}
205530782989409
{% endhighlight %}

##### `creative_texts`

{% highlight json %}
[
  {
    "title": "Awesome Game!",
    "body": "Have fun with our awesome game! Challenge your friends and beat them all!"
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth jwn6yukeig4ukaywj4zeaweodwxf7no" \
	-F 'fb_ad_account_id=34' \
	-F 'objective=WEBSITE_CLICKS' \
	-F 'name=foo' \
	-F 'bid_type=ABSOLUTE_OCPM' \
	-F 'bid_info={"ACTIONS":100}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1396544286' \
	-F 'targets=[{"name":"Mobile Games fans","specs":{"age_min":18,"age_max":35,"geo_locations":{"countries":["US"]},"interests":[{"name":"Video games","id":6003940339466},{"name":"Browser games","id":6003434373937},{"name":"Casual game","id":6003102728434}]}}]' \
	-F 'object_url=http://www.example.com' \
	-F 'object_id=205530782989409' \
	-F 'creative_texts=[{"title":"Awesome Game!","body":"Have fun with our awesome game! Challenge your friends and beat them all!"}]' \
	-F 'creative_images[]=@1200x864.jpg;type=text/plain'
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
ETag: "ec3af25fa08eb2075b05fc6dfa45185e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 69f79bef-f756-453d-b55d-9bd53ac290cb
X-Runtime: 0.046380
Content-Length: 1049
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 327,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "ABSOLUTE_OCPM",
    "max_bid": 100,
    "start_time": "2014-04-03T16:58:06.000Z",
    "end_time": null,
    "objective": "WEBSITE_CLICKS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 215,
        "creative_images": [
          {
            "id": 89,
            "image": "/uploads/ad_image/image/141/1200x864.jpg"
          }
        ],
        "creative_texts": [
          {
            "id": 89,
            "title": "Awesome Game!",
            "name": null,
            "body": "Have fun with our awesome game! Challenge your friends and beat them all!"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 126,
        "name": "Mobile Games fans",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": null,
        "age_min": 18,
        "age_max": 35,
        "languages": null,
        "interested_in": null,
        "broad_age": null,
        "interests": [
          {
            "name": "Video games",
            "id": 6003940339466
          },
          {
            "name": "Browser games",
            "id": 6003434373937
          },
          {
            "name": "Casual game",
            "id": 6003102728434
          }
        ],
        "user_adclusters": null,
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 34,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "34"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

