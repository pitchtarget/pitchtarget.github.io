---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new MOBILE_APP_ENGAGEMENT campaign

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
`fb_app_id`  | Fb app id |
`object_story_id`  | Object story id |
`url_tags`  | URL tags |
`call_to_action_type`  | Call to action type |
`link_deep_link_url`  | Link deep link URL |
`play_url`  | Play store URL |
`itunes_url`  | iTunes URL |
`mobile_os`  | Mobile OS |
`mobile_device`  | Mobile device |
`mobile_wireless_carrier`  | Mobile wireless carrier |
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
22
{% endhighlight %}

##### `objective`

{% highlight text %}
MOBILE_APP_ENGAGEMENT
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
1396544285
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

##### `fb_app_id`

{% highlight text %}
197838773569384
{% endhighlight %}

##### `object_story_id`

{% highlight text %}
238193529614918_465257143575221
{% endhighlight %}

##### `url_tags`

{% highlight text %}
track=yes&adv=facebook
{% endhighlight %}

##### `call_to_action_type`

{% highlight text %}
SHOP_NOW
{% endhighlight %}

##### `link_deep_link_url`

{% highlight text %}
myapp://shop/new
{% endhighlight %}

##### `play_url`

{% highlight text %}
http://android.example.com
{% endhighlight %}

##### `itunes_url`

{% highlight text %}
http://ios.example.com
{% endhighlight %}

##### `mobile_os`

{% highlight json %}
[
  "Android",
  "iOS"
]
{% endhighlight %}

##### `mobile_device`

{% highlight json %}
[
  "android_smartphone",
  "iphone"
]
{% endhighlight %}

##### `mobile_wireless_carrier`

{% highlight json %}
[
  "Wifi"
]
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
	-F 'fb_ad_account_id=22' \
	-F 'objective=MOBILE_APP_ENGAGEMENT' \
	-F 'name=foo' \
	-F 'bid_type=ABSOLUTE_OCPM' \
	-F 'bid_info={"ACTIONS":100}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1396544285' \
	-F 'targets=[{"name":"Mobile Games fans","specs":{"age_min":18,"age_max":35,"geo_locations":{"countries":["US"]},"interests":[{"name":"Video games","id":6003940339466},{"name":"Browser games","id":6003434373937},{"name":"Casual game","id":6003102728434}]}}]' \
	-F 'fb_app_id=197838773569384' \
	-F 'object_story_id=238193529614918_465257143575221' \
	-F 'url_tags=track=yes&adv=facebook' \
	-F 'call_to_action_type=SHOP_NOW' \
	-F 'link_deep_link_url=myapp://shop/new' \
	-F 'play_url=http://android.example.com' \
	-F 'itunes_url=http://ios.example.com' \
	-F 'mobile_os=["Android","iOS"]' \
	-F 'mobile_device=["android_smartphone","iphone"]' \
	-F 'mobile_wireless_carrier=["Wifi"]' \
	-F 'creative_texts=[{"title":"Awesome Game!","body":"Have fun with our awesome game! Challenge your friends and beat them all!"}]' \
	-F 'creative_images[]=@1200x627.png;type='
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
ETag: "5a096926c6e65e08c4ea0b6dec444dc4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8f41bd30-9630-424d-9a6f-835e8899b792
X-Runtime: 0.154308
Content-Length: 1058
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 315,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "ABSOLUTE_OCPM",
    "max_bid": 100,
    "start_time": "2014-04-03T16:58:05.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 203,
        "creative_images": [
          {
            "id": 81,
            "image": "/uploads/ad_image/image/133/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 81,
            "title": "Awesome Game!",
            "name": null,
            "body": "Have fun with our awesome game! Challenge your friends and beat them all!"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 114,
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
      "id": 1325,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "22"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

