---
layout: page
title: Thrust-Assisted Biped Robot
description: Locomotion implementation for a biped robot with thrust assistance.
img: assets/img/flying_humanoid/harpy_cropped.png
importance: 2
category: Research
related_publications: false
---

My introduction to bipedal locomotion research began with developing control strategies for a thrust-assisted bipedal robot, specifically the Harpy platform. 

My first objective was to achieve planar walking on hardware, which I pursued by implementing linear inverted pendulum (LIP) walking without relying on thrust assistance. I developed a custom C++ controller and deployed it on a real-time Linux system, and I programmed the ELMO motor controllers to drive the leg actuators using PD control. The ELMO motor control code is available [here](https://github.com/sesteban951/ElmoHardware).

<!-- Hardware -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flying_humanoid/walking.webp" class="img-fluid rounded z-depth-1"%}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/flying_humanoid/knees.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Walking on the Harpy robot without thrust assistance (left) and leg movement using ELMO motor controllers (right).
</div>

<!-- CI-MPC -->
I became interested in applying contact-implicit MPC to thrust-assisted bipedal locomotion, which motivated preliminary investigations into walking and jumping with thrust assistance.

<!-- Simulation -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center;">
        <div style="display: inline-block; width: 50%;">
            {% include figure.liquid 
                path="assets/img/flying_humanoid/drake_sims.webp" 
                class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>
<div class="caption">
    Simulation of walking and jumping with thrust assistance using CI-MPC in <a href="https://drake.mit.edu/">Drake</a>.
</div>