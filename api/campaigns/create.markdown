---
layout: default
title: Campaigns API
---

# Campaigns API
Campaigns API allows you to create and manage new campaigns, including setting objectives and targeting. These APIs are modeled against Facebook's models and objects, so you can use the same formats and fields that you see in the Facebook API documentation.

When you create a new campaign, you have the ability to create multiple creatives and targets. Currently you can use this feature on selected objectives and placements, but we are working to expand the ability to create multiple creatives and targets across every products.

### POST /api/campaigns
Creates a new campaign.

You can create a new campaigns using a different number of placements and options. In this page, we assume that you are familiar with the Facebook Ads offering. If you need more details, please feel free to contact us.

When you create a campaign, you specify parameters based on your objectives. An objective is a marketing goal that you want to achieve. For more details about objectives, you can refer to the [Objectives reference on Facebook](https://developers.facebook.com/docs/reference/ads-api/new-campaign-structure-faq).
