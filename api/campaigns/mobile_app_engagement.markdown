---
layout: default_with_nav
title: Mobile App Engagement Ads
section: Campaigns API
nav: nav_campaigns_api.md
---

## {{page.title}}
Use these parameters when you need to generate engagement towards a native mobile app. You should create this campaign when you need to reactivate stale users, or when you want to drive existing active users to a specific section of your native mobile app.

### Parameters

Name | Description |
-----|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective, in this case, `MOBILE_APP_INSTALL` |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |
`fb_app_id` | Yes | The ID of the Facebook App you are promoting. |
`play_url`  | No | For Android Apps, the URL of the app in the Google Play Store. |
`itunes_url`  | No | For iOS Apps, the URL of the app in the App Store. |
`call_to_action_type`  | Label of the button that will appear in the ad creative. See `call_to_action_type` below for more details. |
`link_deep_link_url`  | An URL to a specific section of the app. This is useful when you want to drive app users to a specific section of your mobile app. See `link_deep_link_url` |
`mobile_os`  | No | Display the ad to people that have the OS you specify. |
`mobile_device`  | No | Display the ad to people that have the device you specify. |
`mobile_wireless_carrier`  | No | Display the ad to people that are browsing from wi-fi or 3G connection. |
`creative_texts`  | No | The body (text) of your creative. If you specify more than one body, Campaigns API will create different ads in your campaign. |
`creative_images`  | No | The image of your creative. If you specify more than one creative, Campaigns API will create different ads in your campaign. |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk
Host: example.org
Cookie:

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
743
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1260
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
OCPM
{% endhighlight %}

##### `bid_info`
Use `bid_info` to establish the value of your objectives for OCPM. When you do so, you are optimising towards some goals. Facebook allows you to specify the value of these goals:

| Goal name | Description |
|-----------|-------------|
| `CLICKS` | Optimise to receive more clicks |
| `REACH` | Optimise to receive more impressions |
| `SOCIAL` | Optimise to deliver the ad to friends of people that are already connected with what you are promoting |
| `ACTIONS` | Optimise to receive more actions or conversions |

For more details, refer to [Optimized CPM](https://developers.facebook.com/docs/reference/ads-api/optimizedcpm/) on Facebook Developers.

In the following example, we will bid USD 5 towards actions. We suggest to bid strongly on `ACTIONS` when you are driving Installs or Engagement to Desktop App Installs.

{% highlight json %}
{
  "CLICKS": 0,
  "REACH": 0,
  "SOCIAL": 0,
  "ACTIONS": 500
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
1394793023
{% endhighlight %}

##### `end_time`

{% highlight text %}
1394997030
{% endhighlight %}

##### `targets`
This fields accepts targeting options based on Facebook's Targeting Specs. For more details on the targeting options available, refer to [Ads API targeting](https://developers.facebook.com/docs/ads-api/targeting) on Facebook Developers.

{% highlight json %}
[
  {
    "name": "FbTarget 1",
    "specs": {
      "age_min": 18,
      "age_max": 25,
      "genders": [
        "2"
      ],
      "geo_locations": {
        "countries": [
          "IT",
          "US"
        ]
      },
      "interests": [
        {
          "id": "1",
          "name": "playstation"
        },
        {
          "id": "2",
          "name": "videogame"
        },
        {
          "id": "3",
          "name": "xbox"
        }
      ],
      "user_adclusters": [
        {
          "id": "1",
          "name": "HTC"
        },
        {
          "id": "2",
          "name": "Motorola"
        },
        {
          "id": "3",
          "name": "Samsung"
        }
      ],
      "languages": [
        "EN"
      ],
      "broad_age": false,
      "interested_in": [
        "2"
      ]
    },
    "favorite": false
  }
]
{% endhighlight %}

##### `fb_app_id`

{% highlight text %}
177665754284193
{% endhighlight %}

##### `call_to_action_type`
Use this parameter to specify the label you want to show for your call to action. This value will change the labels of your Ad header and Call to Action button. Note that the labels are automatically translated into the targeted user's languages.

| Value | Button | Header |
|-------|--------|--------|
| `SHOP_NOW` | Shop Now | Suggested Item |
| `OPEN_LINK` | Open Link | Suggested App Link |
| `BOOK_TRAVEL` | Book Now | Suggested Travel |
| `PLAY_GAME` | Play Game | Suggested App Link |
| `LISTEN_MUSIC` | Listen Now | Suggested Music |
| `WATCH_VIDEO` | Watch Video | Suggested Video |
| `USE_APP` | Use App | Suggested App Link |

Please note that any other value will default to `OPEN_LINK`.

{% highlight text %}
USE_APP
{% endhighlight %}

##### `link_deep_link_url`
In order to get your deep link URL, you can use the Facebook App ID in your protocol.

{% highlight text %}
fb177665754284193://deeplink/url?with=parameters
{% endhighlight %}

##### `play_url`

{% highlight text %}
https://play.google.com/store/apps/details?id=com.example.myapp
{% endhighlight %}

##### `itunes_url`

{% highlight text %}
https://itunes.apple.com/en/app/myapp/id293847292111
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

##### `creative_texts` and `creative_images`
Specify a JSON encoded array of objects. Each object will contain two properties.

| Property | Description |
|----------|-------------|
| `title` | Title of the ad |
| `body` | Body of the ad |

When you specify more than one creative, Campaigns API will prepare different combinations of the ad. For instance, if you specify 3 creative texts and 2 images, Campaigns API will prepare 6 different ads.

Please note that if your `budget_amount` is low, Facebook will give little or no delivery to some ads.

{% highlight json %}
[
  {
    "title": "Behind Abbey Road",
    "body": "Discover the little gems of the album that set a new standard for music."
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "{{site.base_url}}/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk" \
	-F 'fb_account_id=743' \
	-F 'fb_ad_account_id=1260' \
	-F 'objective=MOBILE_APP_ENGAGEMENT' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"ACTIONS":"5000"}' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1394793023' \
	-F 'targets=[{"name":"FbTarget 1","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'fb_app_id=177665754284193' \
	-F 'call_to_action_type=USE_APP' \
	-F 'link_deep_link_url=fb177665754284193://deeplink/url?with=parameters' \
	-F 'play_url=https://play.google.com/store/apps/details?id=com.example.myapp' \
	-F 'itunes_url=https://itunes.apple.com/en/app/myapp/id293847292111' \
	-F 'mobile_os=["Android","iOS"]' \
	-F 'mobile_device=["android_smartphone","iphone"]' \
	-F 'mobile_wireless_carrier=["Wifi"]' \
	-F 'creative_texts=[{"title": "Behind Abbey Road","body": "Discover the little gems of the album that set a new standard for music."}]' \
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
ETag: "3613f9df7637a8f93b6452d44eb540bf"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a35e8155-6d5c-4646-9a1d-a580d7e8ab03
X-Runtime: 0.320903
Content-Length: 1009
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 242,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-14T10:30:23.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 186,
        "creative_images": [
          {
            "id": 114,
            "image": "/uploads/ad_image/image/137/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 114,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 150,
        "name": "FbTarget 1",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "IT",
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": [
          "2"
        ],
        "age_min": 18,
        "age_max": 25,
        "languages": [
          "EN"
        ],
        "interested_in": [
          "2"
        ],
        "broad_age": false,
        "interests": [
          {
            "id": "1",
            "name": "playstation"
          },
          {
            "id": "2",
            "name": "videogame"
          },
          {
            "id": "3",
            "name": "xbox"
          }
        ],
        "user_adclusters": [
          {
            "id": "1",
            "name": "HTC"
          },
          {
            "id": "2",
            "name": "Motorola"
          },
          {
            "id": "3",
            "name": "Samsung"
          }
        ],
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 1260,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "2"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

