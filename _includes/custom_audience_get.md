`GET /customaudiences`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | Facebook ID of the Ad Account for the current user |

#### Request

{% highlight sh %}
curl "{{site.base_url}}/customaudiences?fb_ad_account_id=6" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}

#### Response
{% highlight json %}
[
  {
    "id": "6013451248234",
    "account_id": "10150121399501707",
    "approximate_count": 1332900,
    "description": "My lookalike audience",
    "lookalike_spec": {
      "type": "custom_ratio",
      "ratio": 0.05,
      "country": "IT",
      "origin": [
        {
          "id": "6013433969324",
          "name": "Spending users",
          "type": "custom_audience"
        }
      ]
    },
    "name": "Spending users_Lookalike_IT_Reach",
    "origin_audience_id": 6013433969342,
    "origin_audience_name": "Spending users",
    "parent_audience_id": 0,
    "parent_category": "Custom",
    "status": "ready",
    "run_status": {
      "code": 0,
      "description": "This audience is ready to use."
    },
    "subtype": "LOOKALIKE",
    "type": 4,
    "type_name": "Advertiser Generated",
    "time_updated": 1392808117,
    "data_source": {
      "type": 3,
      "sub_type": 3001
    }
  }
]
{% endhighlight %}
