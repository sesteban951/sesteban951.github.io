---
layout: page
title: Low-cost Dynamics & Controls Platform
description: Experimental platforms to provide affordable, simple alternatives to traditional lab equipment, giving students more opportunities in dynamics and control.
img: assets/img/low_cost_platform/platforms.jpg
importance: 2
category: Fun
related_publications: false
---

I wanted to create a low-cost, portable alternative that still lets students learn the same core ideas—system identification, feedback control, and real-world implementation—without a high price tag or hassle of complex setups. By keeping the design simple, affordable, and easy to set up, my goal was to make hands-on control experiments accessible to as many students as possible. Each system was intentionally designed to cost under one hundred dollars to keep it affordable for undergraduate students.

## Inverted Pendulum with Thruster Actuation Platform

This platform is a take on the canonical inverted pendulum but with adjustable positions on the propeller and counter weights along the arm. The goal here is to either perform system identification of the pendulum dynamics or to design a controller to control the pendulum angle using thrust from the propeller.

The plant consists of few electronic elements, 3D printed parts, carbon fiber tubes, and a DC motor and propeller assembly. It can be quickly assembled or disassembled and easily clamped to any table. The plant can be programmed through MATLAB/Simulink, LabVIEW, or Arduino. 

A paper describing the design and implementation of this platform was submitted and accepted to the 2021 ASEE Virtual Annual Conference

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/pendulum_cad.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD model of the inverted pendulum with thrust actuation from a propeller.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/pendulum_top.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/pendulum.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Built hardware of the pendulum platform.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/pendulum_data.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/pendulum_tracking.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example open loop step function using Simulink (left) and PID tracking response using Labview (right).
</div>

## Ball-and-Beam Platform

This platform is primarily geared for studying control design. Specifically, using a resistive strip along the beam, the position of the metal ball can be measured as it rolls along the beam and a servo motor is used to change the slope of the beam to control the position of the ball.

Like the inverted pendulum platform, this plant is made of few electronic elements, 3D printed parts, laser cut parts, and a servo motor. The plant can also be programmed using MATLAB/Simulink, LabView, or Arduino. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/ball_beam_cad.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CAD model of the ball-and-beam platform.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/ball_beam.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Built hardware of the ball-and-beam platform.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/low_cost_platform/ball_beam_simulink.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example closed loop tracking performance with PID control using Simulink. Yellow is the reference signal and blue is the ball position signal.
</div>

