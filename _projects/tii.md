---
layout: page
title: Humanoid-Drone Takeoff
description: First ever drone launch from a humanoid robot.
img: assets/img/tii/drone_takeoff.png
importance: 1
category: Research
related_publications: false
---

## Overview

The purpose of this project was to show how a multi-robot team could perform a complex task such as search and rescue. In this case, a humanoid robot would navigate to a location, deploy a drone, and the drone would then take off and survey the area. **My role in this project was in developing the drone deployment maneuver and attachment/detachment mechanism.** This involved trajectory planning, control design, hardware design, and testing.

<!-- Deployment -->
<div class="column">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 80%;">
            {% include figure.liquid 
               path="assets/img/tii/tii_youtube_cropped.webp" 
               class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    The final full successful drone deployment taking off from the humanoid.
</div>

This project was featured in Caltech's front page news: [Caltech and Technology Innovation Institute Demo Multirobot Response Team](https://www.caltech.edu/about/news/caltech-and-technology-innovation-institute-demo-multirobot-response-team).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 100%;">
            {% include video.liquid path="https://www.youtube.com/embed/eC3iuPzKQx8" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

## Control Design

Since the bending-over maneuver significantly shifts the humanoid's center of mass (COM), we designed a model-based controller that carefully controls the COM position to avoid tipping over under disturbances. Briefly, we used inverse kinematics offline to synthesize a whole-body trajectory and used a single rigid body (SRB) MPC to track the trajectory online. We tested the performance of the controller in simulation before deploying it on the real robot.

<!-- Simulation -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 80%;">
            {% include figure.liquid 
                path="assets/img/tii/bending_over_sim.webp" 
                class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Example simulation of the humanoid robot bending over. The blue sphere is the COM of the robot and the red sphere is the projection of the COM onto the ground, which is carefully controlled to avoid tipping over.
</div>

## Humanoid-Drone Interface

For the drone deployment, we designed a custom lightweight backpack that securely holds the drone during locomotion and the bending-over maneuver. The backpack weighs only 0.9 kg and features a servo mechanism to lock and release the drone for flight. The backpack itself consists of a custom PCB that interfaces with a Teensy microcontroller to receive commands from the humanoid's main computer and four servos to lock and release the drone.

<!-- Backpack detachment -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tii/m4_backpack.jpg" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tii/backpack.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Design of the 0.9 kg backpack and its servo lock/unlock mechanism.
</div>

## Testing

We tested the humanoid's bending-over maneuver under various disturbance conditions to ensure robust performance before deploying the drone. Finally, we tested the full system in the Caltech CAST arena before the final deployment.

<!-- Bending Over Test -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tii/bo_no_mass.webp" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tii/bo_disturbance.webp" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/tii/bo_mass.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experiments showcasing disturbance rejection during a bending-over maneuver with no mass and no disturbance (left), with disturbance (middle), and with an added 7 kg mass (right).
</div>

<!-- CAST Testing -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 80%;">
            {% include figure.liquid 
               path="assets/img/tii/bo_experiment_cast.webp" 
               class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Testing before the final deployment using the Caltech CAST arena.
</div>

## Team

Adrian and I led the drone deployment project as part of the larger multi-robot systems effort.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 80%;">
            {% include figure.liquid 
               path="assets/img/tii/team.jpg" 
               class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    The team that led the locomotion and drone deployment for this project. Left to right: Amy, Blake, Ames, Gary, Zach, Adrian, and Sergio (me).
</div>
