---
layout: page
title: Stanford SURF
description: Path planning for ecological surveying using UAV swarms.
img: assets/img/stanford_surf/drone_flight_prep_cropped.jpg
importance: 2
category: R&D
related_publications: false
---

## Path Planning for Ecological Surveying with UAV Swarms

During my [SURF Fellowship](https://engineering.stanford.edu/SURF) at [Stanford University](https://www.stanford.edu/), I worked in the [Multi-Robot Systems (MSL) Lab](https://msl.stanford.edu/) where I helped develop path planning algorithms for UAV swarms to conduct ecological surveys. This work was completed under the supervision of Professor [Mac Schwager](https://web.stanford.edu/~schwager/).

I validated the waypoint-following algorithms using quadcopters in an OptiTrack motion-capture lab, integrating the system with ROS for real-time feedback and control. To ensure reliability, I also flew the quadcopters manually to confirm that all hardware systems were functioning as expected.

Field experiments used DJI Matrice 100 drones with gimbal-mounted cameras to execute the surveys. Waypoints were generated as trajectories and images were collected of toy penguins to evaluate tracking performance and data quality. Field experiments were conducted at a local park near Stanford University.

<!-- Drone Prep -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/drone_fixing.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/drone_flight_prep.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/drone_flight.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Preparing drones to verify waypoint-following algorithms using an OptiTrack motion-capture system.
</div>

<!-- Field Experiments -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/drone_grass.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/planning.png" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/toy_penguin_cropped.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The experimental platform included DJI Matrice 100 drones (left) which flew pre-planned trajectories (middle) to capture images of toy penguins (right). The field experiment was conducted at a local park near Stanford University.
</div>

## Video Demonstration

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 100%;">
            {% include video.liquid path="https://www.youtube.com/embed/l3pHSmIutEo" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

## Poster Presentation and Award

This research was presented at the Stanford SURF Research Poster Symposium, where my poster received second place out of forty participating scholars.

<!-- Poster and Award -->
<div class="column">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/poster.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0" style="max-width: 60%; margin-left: auto; margin-right: auto;">
        {% include figure.liquid loading="eager" path="assets/img/stanford_surf/award.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    My SURF research poster (top) and the award I received for second place at the Stanford SURF Research Poster Symposium (bottom).
</div>