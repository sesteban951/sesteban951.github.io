---
layout: page
title: PiBot on Steroids
description: Modified differential drive robot with added components. This was to spy on my dog while she was outside!
img: assets/img/pi_bot/pi_bot_iso_cropped.jpg
importance: 1
category: Fun
related_publications: false
---

The goal of this project was to spy on my dog (Snowflake) while she was outside. 

I equipped a standard PiBot robot with a camera for real-time streaming, replaced the Arduino with a WiFi enabled Raspberry Pi 3B+ running Ubuntu MATE, and designed and 3D-printed custom structural components (hence on steroids). 

I also made custom circuit that handles an upgraded battery system, both motors, and the Raspberry Pi. Using the Robot Operating System (ROS), I integrated mobility control, live camera streaming, and ultrasonic sensing into a unified software framework. The robot is driven using an Xbox controller, with custom Python scripts implemented as ROS nodes.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pi_bot/pi_bot_top.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pi_bot/pi_bot_bottom.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Different views of the modified PiBot robot.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pi_bot/pi_bot_iso.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    One more view!
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pi_bot/camera.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Camera view of the modified PiBot robot through a web browser. My dog Snowflake was up to no good outside! 
</div>
