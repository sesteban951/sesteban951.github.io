---
layout: page
title: Atlas Drums
description: Atlas playing drums and dancing.
img: assets/img/atlas_drums/atlas_drums_cropped.png
importance: 1
category: Coursework
related_publications: false
---

This project explored generating arm trajectories for the Atlas humanoid to perform on a virtual drum set in RViz. We developed an algorithm that converts a sequence of desired drum strikes into time-aligned trajectories for Atlas’ arms, ensuring each strike lands on the correct drum at the correct moment. As a secondary objective, we implemented a coordinated “dance” motion to accompany the performance. The project incorporated several concepts from Caltech’s ME 133A: Robotics course, and culminated with Atlas playing along to “Outstanding” by The Gap Band.

<!-- Button to PDF Report -->
<div style="display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;">
  <a href="{{ '/assets/pdf/ME133_Final_Report.pdf' | relative_url }}"
     class="btn btn-light border border-dark shadow-sm mx-2 px-4 py-2"
     target="_blank" rel="noopener">
    📄 Report (PDF)
  </a>
</div>

## Video Demonstration

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Atlas_Robot_Jamming_on_the_Drums.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true %}
    </div>
</div>