// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-resume-amp-cv",
          title: "Resume &amp; CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume_cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-atlas-drums",
          title: 'Atlas Drums',
          description: "Atlas playing drums and dancing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/atlas_drums/";
            },},{id: "projects-caltech-wave",
          title: 'Caltech WAVE',
          description: "Design, fabrication, and control of a 2-DOF gimbal system for UAV altimetry sensing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/caltech_wave/";
            },},{id: "projects-end-effector-design",
          title: 'End Effector Design',
          description: "Mechanical design of an end effector.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/end_effector/";
            },},{id: "projects-flyball-tachometer",
          title: 'Flyball Tachometer',
          description: "Flyball tachometer for measuring rotational speed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flyball/";
            },},{id: "projects-thrust-assisted-humanoid",
          title: 'Thrust-Assisted Humanoid',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flying_humanoid/";
            },},{id: "projects-low-cost-dynamics-amp-controls-platform",
          title: 'Low-cost Dynamics &amp;amp; Controls Platform',
          description: "Experimental platforms to provide affordable, simple alternatives to traditional lab equipment, giving students more opportunities in dynamics and control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/low_cost_platform/";
            },},{id: "projects-mit-lincoln-lab",
          title: 'MIT Lincoln Lab',
          description: "Design, fabrication, and control of a low earth orbit (LEO) oriented gimbal system for precision space-to-earth pointing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mitll/";
            },},{id: "projects-nasa-jet-propulsion-lab",
          title: 'NASA Jet Propulsion Lab',
          description: "Mars Perseverance Rover mobility and mechanical design for Robosimian.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nasa_jpl/";
            },},{id: "projects-pibot-on-steroids",
          title: 'PiBot on Steroids',
          description: "Modified differential drive robot with added components. This was to spy on my dog while she was outside!",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pi_bot/";
            },},{id: "projects-pvc-pipe-cutter",
          title: 'PVC Pipe Cutter',
          description: "Design and build of a PVC pipe cutter tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pvc_cutter/";
            },},{id: "projects-raytheon",
          title: 'Raytheon',
          description: "Test and support equipment for aerospace hardware.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/raytheon/";
            },},{id: "projects-rover-rocker-bogie-suspension-simulation",
          title: 'Rover Rocker-Bogie Suspension Simulation',
          description: "Simulation of a rover with rocker-bogie suspension over rough terrain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rover/";
            },},{id: "projects-seti-institute-reu",
          title: 'SETI Institute REU',
          description: "Extracting Water from the Martian Atmosphere",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seti_reu/";
            },},{id: "projects-stanford-surf",
          title: 'Stanford SURF',
          description: "Path planning for ecological surveying using UAV swarms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stanford_surf/";
            },},{id: "projects-humanoid-drone-takeoff",
          title: 'Humanoid-Drone Takeoff',
          description: "First ever drone launch from a humanoid robot.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tii/";
            },},{id: "projects-caltech-trophy",
          title: 'Caltech Trophy',
          description: "Manufacturing a trophy using various machining techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/trophy/";
            },},{id: "projects-metal-truck",
          title: 'Metal Truck',
          description: "Manufacturing a metal truck using casting, welding, and machining.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/truck/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
