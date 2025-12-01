---
layout: page
title: Flyball Tachometer
description: Flyball tachometer for measuring rotational speed.
img: assets/img/flyball/flyball_2_cropped.jpg
importance: 3
category: Coursework
related_publications: false
---

This fly-ball tachometer demonstrates how rotational velocity can be measured using an ultrasonic sensor and a rising platform mechanism. The system includes an AC–DC converter, a DC motor with a Hall-effect encoder, a motor controller, an LCD for displaying RPM, a potentiometer for speed adjustment, an Arduino UNO R3 for interfacing, and an ultrasonic sensor for height measuring. We generated a curve fit by collecting data points relating platform height to encoder-measured RPM, and then used that relationship to estimate shaft angular speed directly from the ultrasonic sensor readings.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flyball/flyball_1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flyball/flyball_2.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Built flyball tachometer showing the flyballs at rest (left) and at speed (right).
</div>
