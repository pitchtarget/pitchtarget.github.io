---
layout: default_with_nav
title: Mobile App Install Ads
section: Campaigns API
nav: campaigns_api_links.md
---

## Mobile App Install Ads
Use these parameters when you need to drive installs towards a native Mobile App.

Name | Required? | Description |
-----|-----------|-------------|
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
746
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1266
{% endhighlight %}

##### `objective`

{% highlight text %}
MOBILE_APP_INSTALLS
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
1394793024
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
    "name": "FbTarget 4",
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
curl "pitchtarget.com/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk" \
	-F 'fb_account_id=746' \
	-F 'fb_ad_account_id=1266' \
	-F 'objective=MOBILE_APP_INSTALLS' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"ACTIONS":"5000"}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1394793024' \
	-F 'targets=[{"name":"FbTarget 4","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'fb_app_id=177665754284193' \
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
ETag: "41ca45bf808cdf3d955c56482bdf5c72"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 81020b5b-7c5d-40dc-aa2b-db9c8dd05945
X-Runtime: 0.051333
Content-Length: 1007
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 245,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-14T10:30:24.000Z",
    "end_time": null,
    "objective": "MOBILE_APP_INSTALLS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 189,
        "creative_images": [
          {
            "id": 116,
            "image": "/uploads/ad_image/image/139/1200x627.png"
          }
        ],
        "creative_texts": [
          {
            "id": 116,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 153,
        "name": "FbTarget 4",
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
      "id": 1266,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "8"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

