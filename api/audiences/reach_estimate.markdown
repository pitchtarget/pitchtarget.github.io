---
layout: default_with_nav
title: Reach Estimate
section: Audiences API
nav: nav_audiences_api.md
---

## Reach estimate
When your users are preparing an ad, they should make sure that it will be seen by a target audience.
You can get an estimate of the maximum number of people who can see the ad by using Reach Estimate.

You can also use Reach Estimate to validate a targeting spec.

### Obtain the Reach Estimate for a Targeting Spec
`GET /reachestimate`

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | ID of the user's Ad Account |
`targeting_spec`  | Yes | The targeting spec. This field accepts the same format as Facebook's [Targeting Specs](https://developers.facebook.com/docs/reference/ads-api/targeting-specs/). |

#### Request

{% highlight sh %}
curl "{{site.base_url}}/reachestimate?fb_ad_account_id=7&targeting_spec=%7B%22geo_locations%22%3A%7B%22countries%22%3A%5B%22IT%22%5D%7D%7D" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}

#### Response
{% highlight json %}
{
  "users": 26000000,
  "bid_estimations": [
    {
      "unsupported": false,
      "location": 3,
      "cpa_min": 35,
      "cpa_median": 71,
      "cpa_max": 101,
      "cpc_min": 13,
      "cpc_median": 20,
      "cpc_max": 25,
      "cpm_min": 1,
      "cpm_median": 4,
      "cpm_max": 29
    }
  ],
  "estimate_ready": true,
  "imp_estimates": [

  ],
  "data": {
    "users": 26000000,
    "bid_estimations": [
      {
        "unsupported": false,
        "location": 3,
        "cpa_min": 35,
        "cpa_median": 71,
        "cpa_max": 101,
        "cpc_min": 13,
        "cpc_median": 20,
        "cpc_max": 25,
        "cpm_min": 1,
        "cpm_median": 4,
        "cpm_max": 29
      }
    ],
    "estimate_ready": true,
    "imp_estimates": [

    ]
  }
}
{% endhighlight %}
