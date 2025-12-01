---
layout: page
title: Caltech WAVE
description: Design, fabrication, and control of a 2-DOF gimbal system for UAV altimetry sensing. 
img: assets/img/caltech_wave/gimbal_final_cropped.jpg
importance: 1
category: R&D
related_publications: false
---

## Two-DOF Gimbal for Altimetry Sensing on UAVs

During my [WAVE Fellowship](https://sfp.caltech.edu/undergraduate-research/programs/wavefellows) at [Caltech](https://www.caltech.edu/), I worked in the [Amber Lab](http://www.bipedalrobotics.com/) where I designed, fabricated, and programmed a two-axis gimbal system to support research on safety-critical control for UAVs. This work was completed under the supervision of Professor [Aaron Ames](https://mce.caltech.edu/people/adames).

The gimbal was mounted on the underside of a UAV platform and was actuated through two servos providing its degrees of freedom. I fabricated the components and integrated a custom PCB with LiDAR, ultrasonic, and barometric sensors for altimetry sensing. On a second PCB, a Teensy 3.2, paired with an IMU, provided real-time servo control. The controller was a simple PD controller that adjusts the gimbal's desired pitch and roll angles to maintain a stable orientation relative to the ground during flight.

<!-- Mounted Gimbal -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/gimbal_mounted.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/cad.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Gimbal mounted on the underside of the UAV. The lidar and ultrasonic sensors aim at the ground to compute distance.
</div>

<!-- Sensors -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/gimbal_v2_1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/gimbal_v2_2.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Right: the white PCB contains a 1D LiDAR, ultrasonic sensor, barometer, and IMU. Left: the red PCB contains the Teensy 3.2 that interfaces with the servos, sensors, and computes the control action.
</div>

<!-- Final -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/gimbal_final.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/caltech_wave/control_design.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The final gimbal design (left) and the control diagram (right) illustrating the simple yet effective state-feedback loop between the sensors and servos.
</div>