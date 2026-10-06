/* Personal journal data. Edit freely; the app reads these globals. */
/* ---------- who this journal belongs to ---------- */
const PROFILE={
  key:"flightpath",              // prefix for this browser's saved data; keep it once you start
  name:"Rihito", first:"Rihito",
  title:"Rihito's Journal",
  titleWords:["RIHITO’S","JOURNAL"],
  code:"FP29",                   // short code printed on the cards
  currency:"৳",
  start:"2026-10-01", end:"2029-07-31",
  weekStart:1                    // 0 Sunday … 6 Saturday
};

/* ---------- text on the pages (HTML allowed) ---------- */
const TEXT={
  brand:"Rihito", brandSub:"Flight Path",
  coords:"23.81°N 90.41°E · Dhaka",
  kicker:"A field log of everything I build, from a blinking LED to <span>autonomous flight</span>",
  homeLine:"Every build, gate and test flight on the way from Dhaka to a research lab in Japan, logged in one place.",
  capLeft:"23.81°N 90.41°E · <b>Dhaka</b>", capRight:"CSE '29 · <b>Aerial robotics</b>",
  heroName:'<span>Flight</span><span class="o">Path</span>',
  lede:"From a blinking LED in Dhaka to autonomous drones and a research lab in Japan. Every build carries intention, data and a story you don't see in the code.",
  statement:"The 2026 Arduino Uno that started it all. <em>Seven phases, 15 hours a week, one record of things that fly.</em>",
  manifesto:"More than tutorials, more than parts, more than a degree. A public record of things that fly, measured, logged and shared, one gate at a time.",
  applyEyebrow:"Masters abroad · Sep / Oct 2029 entry",
  applyLede:"Japan is the main target, with China and Russia as parallel routes. Dates come from the 2026–27 cycles; check each official page every spring, because they shift slightly each year.",
  footer:"Flight Path 2029<br>Dhaka → Tokyo · 2026–2029",
  communityNote:`<b>If you ever want people in person:</b> Bangladesh Flying Labs in Dhanmondi runs drone workshops and meetups, your university's IEEE student branch may have a Robotics and Automation Society chapter, and in Japan the ROS Japan Users Group and the Robotics Society of Japan hold regular events. Discord invites change often, so join them from each project's official site or forum.`,
  credNote:`<b>Left out on purpose:</b> Coursera, Udemy and other certificates of completion; GRE (not needed for Japan, China or Russia); Linux Foundation LFCS and Python Institute exams (real exams, but low weight for a robotics research Masters). Providers change their programmes, so re-check each page before you pay.`
};

/* ---------- the three gauges on Mission ---------- */
const COUNTDOWNS=[
  {label:"Days to MEXT application",date:"2028-04-15",hard:1},
  {label:"Days to Open Doors",date:"2028-11-02"},
  {label:"Days to graduation",date:"2029-07-31"}
];

/* ---------- the four nodes on the home stage: [label, phase key] ---------- */
const LX=[["Arduino","p1"],["ESP32","p1b"],["ROS 2","p3"],["Drones","p4"]];

/* ---------- daily tracker ---------- */
const DAILY={
  from:"06:00", to:"24:00", slot:30,           // minutes per square
  // target hours per weekday, Sunday first (four evenings, a deep Friday, a Saturday finish ≈ 15 h)
  targets:[2,2,2,2,0,5,2],
  acts:[["Build","#ff2a6d"],["Study","#05d9e8"],["Read","#d8a657"],["Japanese","#3dff9a"],["Review","#b18cff"]],
  // planned blocks per weekday, Sunday first: "HH:MM-HH:MM Activity"
  plan:[["20:00-22:00 Build"],["20:00-21:00 Study","21:00-22:00 Japanese"],["20:00-22:00 Build"],["20:00-21:30 Study","21:30-22:00 Review"],[],["09:00-12:00 Build","15:00-17:00 Read"],["10:00-12:00 Build"]]
};


const STATUS=["Not started","In progress","Done","Skipped"], REVIEW=["Not yet","Day 7 done","Day 30 done"];
const PHASES=[
 {k:"p1",code:"PH 1",name:"Arduino",dates:"Oct 4 – Nov 30, 2026",start:"2026-10-04",end:"2026-11-30",gate:"Rebuild A1–A16 from memory; explain PID and the complementary filter."},
 {k:"p1b",code:"PH 1b",name:"ESP32",dates:"Dec 15, 2026 – Feb 28, 2027",start:"2026-12-15",end:"2027-02-28",gate:"The E8 balance rig holds level when pushed."},
 {k:"p2",code:"PH 2",name:"Raspberry Pi",dates:"Mar – Jun 2027",start:"2027-03-01",end:"2027-06-30",gate:"Mobile Base drives a 1 m square on encoder odometry."},
 {k:"p3",code:"PH 3",name:"ROS 2",dates:"Jul – Dec 2027",start:"2027-07-01",end:"2027-12-14",gate:"Robot maps a room and drives to a goal; thesis supervisor and topic agreed."},
 {k:"p4",code:"PH 4",name:"Drones + MEXT",dates:"Dec 2027 – Jun 2028",start:"2027-12-15",end:"2028-06-30",gate:"MEXT application in (Apr–May 2028); waypoint mission flown from ROS 2.",hard:true},
 {k:"p5",code:"PH 5",name:"Autonomy + apps",dates:"Jul – Dec 2028",start:"2028-07-01",end:"2028-12-31",gate:"Professor letters secured, Open Doors done, preprint on arXiv.",hard:true},
 {k:"p6",code:"PH 6",name:"Thesis + startup",dates:"Jan – Jul 2029",start:"2029-01-01",end:"2029-07-31",gate:"Thesis defended, CSC and backup applications in, an offer accepted."},
 {k:"lang",code:"LANG",name:"Languages",dates:"Ongoing",start:"2026-10-04",end:"2029-07-31",gate:""},
 {k:"cred",code:"CRED",name:"Credentials",dates:"2027 – 2028",start:"2027-01-01",end:"2028-12-31",gate:""},
 {k:"port",code:"PORT",name:"Portfolio",dates:"Ongoing",start:"2026-10-04",end:"2028-11-30",gate:""},
 {k:"skill",code:"SKILL",name:"Side skills",dates:"Just in time",start:"2026-12-01",end:"2029-05-31",gate:""}
];

const I=(id,title,phase,target,due,star,desc)=>({id,title,phase,target,due,star:!!star,desc});
const ITEMS=[
 I("A1","Button-controlled LEDs with debouncing","p1","Wk 1 · Oct 4–10","2026-10-10",1,"Digital I/O, pull-ups, software debounce."),
 I("A2","8-bit binary counter through a 74HC595","p1","Wk 1 · Oct 4–10","2026-10-10",1,"Bitwise operations and shift registers."),
 I("A3","Logic IC tester for your 74HC chips","p1","Wk 2 · Oct 11–17","2026-10-17",0,"Arduino checks truth tables of 74HC00/02/04/08/32/86."),
 I("A4","Morse transmitter from Serial input","p1","Wk 2 · Oct 11–17","2026-10-17",0,"UART, string parsing, timing."),
 I("A5","Keypad lock: state machine, relay, EEPROM password","p1","Wk 3 · Oct 18–24","2026-10-24",1,"State machines and internal EEPROM. Use millis(), not delay(), from here."),
 I("A6","Analog dashboard at a fixed sample rate","p1","Wk 3 · Oct 18–24","2026-10-24",1,"Pot, LDR, thermistor (Steinhart-Hart) to Serial Plotter."),
 I("A7","Smart light with PWM and hysteresis","p1","Wk 4 · Oct 25–31","2026-10-31",0,"LDR sets brightness, pot overrides."),
 I("A8","DHT22 temperature alarm on LCD","p1","Wk 4 · Oct 25–31","2026-10-31",1,"Sensor library, I2C LCD, buzzer threshold."),
 I("A9","Reaction-time game with interrupts","p1","Wk 5 · Nov 1–7","2026-11-07",1,"Interrupts and micros()."),
 I("A10","RPM meter on the N20 encoder","p1","Wk 5 · Nov 1–7","2026-11-07",1,"Encoder interrupts, volatile variables."),
 I("A11","Parking sensor without delay()","p1","Wk 6 · Nov 8–14","2026-11-14",1,"Non-blocking code with HC-SR04."),
 I("A12","One I2C bus: MPU6050 + BMP280 + OLED","p1","Wk 6 · Nov 8–14","2026-11-14",1,"Read MPU6050 registers yourself with Wire; watch the bus on a logic analyser."),
 I("A13","Tilt to servo with a complementary filter","p1","Wk 7 · Nov 15–21","2026-11-21",1,"Sensor fusion, the core of drone attitude estimation."),
 I("A14","SD and EEPROM data logger","p1","Wk 7 · Nov 15–21","2026-11-21",0,"SPI and I2C storage."),
 I("A15","Stepper with acceleration curves","p1","Wk 8 · Nov 22–30","2026-11-30",0,"AccelStepper on the 28BYJ-48."),
 I("A16","PID speed control of the N20 motor","p1","Wk 8 · Nov 22–30","2026-11-30",1,"Tune Kp, Ki, Kd and plot the response. First portfolio-grade project: repo + 60 s video."),
 I("E1","Wi-Fi web dashboard in PlatformIO","p1b","Dec 15–21","2026-12-21",1,"Move to VS Code + PlatformIO."),
 I("E2","MQTT node with a Python logger","p1b","Dec 22–28","2026-12-28",1,"Pub/sub plus a Python plotting script."),
 I("E3","FreeRTOS flight-loop rehearsal in ESP-IDF","p1b","Dec 29 – Jan 10","2027-01-10",1,"IMU at 200 Hz, telemetry at 20 Hz, tasks and queues; measure jitter."),
 I("E4","ESP-NOW three-node network","p1b","Jan 11–24","2027-01-24",1,"Packets and checksums without a router."),
 I("E5","Wireless RC platform with failsafe","p1b","Jan 25 – Feb 7","2027-02-07",0,"Motors stop if the link drops for 300 ms."),
 I("E6","Low-power solar node with OTA","p1b","Feb 8–14","2027-02-14",0,"Deep sleep, LiPo + TP4056 + solar, PIR wake."),
 I("E7","GPS telemetry to a Python plot","p1b","Feb 15–21","2027-02-21",1,"Parse NMEA yourself, add BMP280 altitude."),
 I("E8","Propeller balance rig with cascaded PID","p1b","Feb 22–28","2027-02-28",1,"A one-axis quadcopter. Portfolio centrepiece #1."),
 I("P1","Headless Pi with a systemd logger","p2","Mar 2027","2027-03-14",1,"Also dual-boot Ubuntu on the laptop."),
 I("P2","Pi ↔ ESP32 serial protocol in C++","p2","Mar – Apr 2027","2027-04-07",1,"Framed packets + checksums; the MAVLink pattern."),
 I("P3","OpenCV pan-tilt tracking","p2","Apr 2027","2027-04-21",1,"Colour or ArUco tracking with two servos."),
 I("P4","Mobile Base v1 with odometry","p2","Apr – May 2027","2027-05-21",1,"ESP32 wheel PID + Pi odometry."),
 I("P5","Obstacle avoider with three HC-SR04s","p2","May 2027","2027-05-31",0,"Reactive behaviour."),
 I("P6","ArduPilot SITL with pymavlink","p2","Stretch","2027-06-30",0,"First look at MAVLink."),
 I("R1","ROS 2 core in C++ and Python","p3","Jul 2027","2027-07-31",1,"Nodes, topics, services, actions, launch."),
 I("R2","URDF model in RViz and Gazebo","p3","Aug 2027","2027-08-31",1,"tf2 and simulation."),
 I("R3","Real robot driver node or micro-ROS","p3","Sep 2027","2027-09-30",1,"Wrap the Phase 2 serial link."),
 I("R4","LiDAR map with slam_toolbox","p3","Oct 2027","2027-10-31",1,"2D LiDAR mapping."),
 I("G1","Shortlist labs in Japan, China, Russia","p3","Sep – Oct 2027","2027-10-31",1,"8–12 labs doing aerial robotics; read 2 recent papers from each."),
 I("R5","Autonomous navigation with Nav2","p3","Nov 2027","2027-11-30",1,"Portfolio centrepiece #2."),
 I("R6","EKF fusion with robot_localization","p3","Nov 2027","2027-11-30",0,"Kalman filtering in practice."),
 I("C1","First club competition (ground robot)","p3","Aug – Nov 2027","2027-11-30",0,"National fest or Robocon team."),
 I("T1","Thesis supervisor + topic agreed","p3","Nov 2027","2027-11-30",1,"Moved earlier: the MEXT research plan needs a topic by Feb 2028."),
 I("D1","PX4 SITL with Gazebo and QGroundControl","p4","Dec 2027 break","2027-12-31",1,"Fly missions in sim, read logs."),
 I("D2","ROS 2 offboard control in simulation","p4","Jan 2028","2028-01-31",1,"Take off, square, land via the PX4–ROS 2 bridge."),
 I("D3","Quad dynamics + your own Python simulator","p4","Feb 2028","2028-02-29",1,"Theory-heavy stretch for Ramadan."),
 I("D4","FPV simulator pilot practice","p4","Feb – Mar 2028","2028-03-15",0,"15 min/day with a real transmitter."),
 I("M1","MEXT research plan (2 pages) drafted","p4","Feb – Mar 2028","2028-03-15",1,"Field of study and research programme plan, built on your thesis topic and G1 labs."),
 I("D5","Build and tune a 450 mm quad (or Crazyflie)","p4","Mar – Apr 2028","2028-04-30",1,"A sub-250 g Crazyflie is the legal-easy, lab-standard alternative."),
 I("M2","MEXT embassy application submitted","p4","Apr – May 2028","2028-05-15",1,"Through Bangladesh's Ministry of Education. Timing from the 2027 cycle; confirm in April 2028."),
 I("D6","Companion computer autonomous mission","p4","May 2028","2028-05-31",1,"Portfolio centrepiece #3."),
 I("D7","ESP-Drone rate controller or EKF","p4","Stretch","2028-06-30",0,"Deeper control or estimation."),
 I("M3","MEXT written exams + interview","p5","~Jun – Jul 2028","2028-07-31",1,"English (and Japanese) papers, then interview."),
 I("X1","ArUco precision landing","p5","Jul 2028","2028-07-31",1,"Vision-based control."),
 I("X2","GPS-denied flight with VIO","p5","Aug 2028","2028-08-31",1,"Visual-inertial odometry."),
 I("X3","A* and RRT* with depth avoidance","p5","Sep – Oct 2028","2028-10-31",1,"Planning and perception."),
 I("M4","Provisional acceptance letters from Japanese professors","p5","Aug – Oct 2028","2028-10-31",1,"Needed after MEXT first screening. Email with CV, research plan, project links."),
 I("X4","Thesis first results","p5","Sep – Nov 2028","2028-11-30",1,"Results your applications can cite."),
 I("OD1","Open Doors olympiad (Russia)","p5","Nov – Dec 2028","2028-12-07",1,"Portfolio stage, then a problem-solving final. Winners get free tuition."),
 I("C2","Drone competition or club UAV team","p5","2028","2028-12-31",0,"A UAV event, or a team aiming at SUAS."),
 I("G5","Direct university applications (backups)","p6","Jan – Mar 2029","2029-03-31",0,"Japanese English-taught programmes with October entry; Russian universities outside Open Doors."),
 I("S1","20+ user interviews for a startup idea","p6","Feb – Mar 2029","2029-03-31",0,"Agro, inspection, disaster mapping."),
 I("CS1","China: CSC + university applications","p6","Feb – Apr 2029","2029-04-15",1,"Type A via embassy or Type B via university; September 2029 entry."),
 I("T2","Thesis experiments and writing","p6","Jan – Apr 2029","2029-04-30",1,"Fly and log every test."),
 I("T3","Workshop paper submitted","p6","May 2029","2029-05-31",0,"Built on the arXiv preprint."),
 I("S2","Accept offer, visa, travel","p6","May – Jul 2029","2029-07-31",1,"Then defend and graduate."),
 I("L1","C++: classes, references, STL","lang","Feb 2027","2027-02-28",0,"learncpp.com."),
 I("L2","C++: RAII, smart pointers, move, CMake","lang","Jun 2027","2027-06-30",0,"Needed for rclcpp."),
 I("L3","Python: NumPy and Matplotlib tools","lang","Feb 2027","2027-02-28",0,"Laptop-side tools."),
 I("L4","Python: OpenCV","lang","Jun 2027","2027-06-30",0,"Used from P3."),
 I("J1","Japanese: kana + Genki I chapters 1–6","lang","Jan – Jun 2027","2027-06-30",0,"2 h/week inside your 15. Anki daily."),
 I("J2","Japanese: Genki I complete (≈ JLPT N5)","lang","Jul – Nov 2027","2027-11-30",0,"Then sit N5 if Dhaka offers the December session."),
 I("J3","Japanese: Genki II (≈ JLPT N4)","lang","Jan – Jun 2028","2028-06-30",0,"Helps the MEXT Japanese paper and daily life."),
 I("L5","Rust Book (optional)","lang","Aug 2028","2028-08-31",0,"First thing to cut if behind. Chinese or Russian basics only after you know where you got in."),
 I("CR1","Arduino Fundamentals Certification (optional)","cred","Feb 2027","2027-02-28",0,"36 questions, 75 minutes. Low weight; a quick confidence check."),
 I("CR2","C++ Institute CPA (proctored)","cred","Jul 2027","2027-07-31",0,"Pearson VUE exam. Proves C++ fundamentals."),
 I("CR3","ROS 2 skills certification (The Construct)","cred","Dec 2027","2027-12-14",1,"Final project tested on real remote robots, plus a live presentation."),
 I("CR4","JLPT N5 (December session)","cred","Dec 5, 2027","2027-12-05",0,"If Dhaka holds the session; otherwise N4 in 2028."),
 I("CR5","IELTS Academic 7.0+","cred","Feb – Mar 2028","2028-03-31",1,"Valid 2 years: covers MEXT, CSC and Russian applications."),
 I("CR6","JLPT N4","cred","Jul 2 or Dec 3, 2028","2028-12-03",0,"A Japanese-ability signal for Japanese labs."),
 I("CR7","NVIDIA Jetson AI Specialist","cred","Oct 2028","2028-10-31",0,"Project-based, reviewed by NVIDIA. Reviews can take weeks."),
 I("PF1","GitHub: profile README + repo template","port","Oct 2026","2026-10-31",1,"Pin 6 repos; every project uses the README template on the Portfolio page."),
 I("PF2","LinkedIn: headline, About, Featured","port","Oct 2026","2026-10-31",1,"Then one post per finished phase."),
 I("PF3","YouTube channel + first 60 s demo (A16)","port","Dec 2026","2026-12-31",0,"Short demos for every ★ project."),
 I("PF4","Personal site live (academicpages)","port","Apr 2027","2027-04-30",1,"Projects, CV PDF, blog. Free on GitHub Pages."),
 I("PF5","Research-assistant role with a faculty member","port","2027","2027-09-30",1,"The fastest route to a strong recommendation letter."),
 I("PF6","First merged open-source PR (ROS 2 / PX4)","port","Dec 2027","2027-12-31",0,"Start with docs fixes, then small bugs."),
 I("PF7","Academic CV v1 in Overleaf","port","Jan 2028","2028-01-31",1,"Two pages. Update monthly."),
 I("PF8","Three recommenders confirmed","port","Feb 2028","2028-02-29",1,"Thesis supervisor, RA supervisor, a course professor or club advisor."),
 I("PF9","arXiv preprint of thesis work","port","Nov 2028","2028-11-30",1,"Citable research output before the main application wave.")
];

const TRACKS=[
 {k:"elec",name:"Electronics & Arduino",ph:"p1",lead:"Get comfortable with circuits and microcontroller code before anything else."},
 {k:"rtos",name:"ESP32 & real-time firmware",ph:"p1b",lead:"Multitasking firmware is what a flight controller is made of."},
 {k:"tools",name:"Linux, Git & tools",ph:"p2",lead:"Every robot computer runs Linux; every serious project lives in Git."},
 {k:"cpp",name:"C++ & Python",ph:"lang",lead:"C++ for the robot, Python for everything around it."},
 {k:"vision",name:"Computer vision",ph:"p2",lead:"From camera basics to deep-learning vision."},
 {k:"ros",name:"ROS 2",ph:"p3",lead:"The common language of research and industry robots."},
 {k:"math",name:"Math, control & estimation",ph:"p3",lead:"The theory grad-school interviews and papers assume."},
 {k:"drone",name:"Drones & aerial autonomy",ph:"p4",lead:"Flight stacks, flight dynamics and visual navigation."},
 {k:"research",name:"Research skills",ph:"p5",lead:"Reading, writing and publishing research."},
 {k:"lang",name:"Languages & tests",ph:"lang",lead:"Japanese first; English test by March 2028."}
];
const R=(track,title,by,kind,cost,best,why,url,when)=>({track,title,by,kind,cost,best:!!best,why,url,when});
const RES=[
 R("elec","Arduino lessons (Uno R3 series)","Paul McWhorter · YouTube","Video","Free",1,"Your main teacher for Phase 1. Clear, structured and project-based; better than paid Arduino courses.","https://www.youtube.com/@paulmcwhorter","Oct – Nov 2026"),
 R("elec","Practical Electronics for Inventors","Scherz & Monk","Book","Paid",1,"The reference for the electronics behind your circuits. Scattered free videos don't replace it.","https://openlibrary.org/search?q=Practical+Electronics+for+Inventors","Keep at your desk"),
 R("elec","Modern Embedded Systems Programming","Miro Samek","Video","Free",1,"Bare-metal C on ARM: what happens under Arduino's functions. The best free deep-dive.","https://www.state-machine.com/video-course","Dec 2026 – 2027"),
 R("elec","Arduino reference and guides","Arduino","Docs","Free",0,"The official function reference; check it before searching forums.","https://docs.arduino.cc/","Oct – Nov 2026"),
 R("rtos","ESP-IDF Programming Guide","Espressif","Docs","Free",1,"The official framework docs. More accurate than any paid ESP32 course.","https://docs.espressif.com/projects/esp-idf/en/latest/esp32/","Dec 2026 onward"),
 R("rtos","Introduction to RTOS (12 parts)","Shawn Hymel · DigiKey","Video","Free",1,"FreeRTOS on the ESP32 with exercises and solutions. Better than paid FreeRTOS courses.","https://www.digikey.com/en/videos/d/digi-key-electronics/introduction-to-rtos-part-2-getting-started-with-frertos","Dec 2026 – Jan 2027"),
 R("rtos","Random Nerd Tutorials","Rui & Sara Santos","Tutorials","Free",0,"Reliable ESP32 recipes for sensors and Wi-Fi. Their paid eBooks add little over the free site.","https://randomnerdtutorials.com/","Dec 2026 – Feb 2027"),
 R("rtos","FreeRTOS kernel book and docs","FreeRTOS.org","Book","Free",0,"The official kernel guide, for when the videos raise questions.","https://www.freertos.org/","Jan 2027"),
 R("tools","The Missing Semester of Your CS Education","MIT","Course","Free",1,"Shell, Git, editors, debugging: tools a degree rarely teaches. No paid course matches it.","https://missing.csail.mit.edu/","Mar 2027"),
 R("tools","The Linux Command Line","William Shotts","Book","Free",0,"A complete free book on the shell.","https://linuxcommand.org/tlcl.php","Mar 2027"),
 R("tools","Pro Git","Chacon & Straub","Book","Free",0,"Git properly: branches, rebasing, pull requests.","https://git-scm.com/book/en/v2","Oct 2026 onward"),
 R("cpp","learncpp.com","LearnCpp","Tutorials","Free",1,"The best structured C++ course anywhere, and free. Work through it alongside the ESP32 phase.","https://www.learncpp.com/","Now – Jun 2027"),
 R("cpp","A Tour of C++ (3rd ed.)","Bjarne Stroustrup","Book","Paid",0,"A short modern-C++ overview from the language's creator, after learncpp.","https://openlibrary.org/search?q=A+Tour+of+C%2B%2B+Stroustrup","Jun 2027"),
 R("cpp","Back to Basics talks","CppCon · YouTube","Video","Free",0,"Hour-long talks on one topic each: RAII, move semantics, templates.","https://www.youtube.com/@CppCon","2027"),
 R("cpp","Python tutorial","Python Software Foundation","Docs","Free",1,"Enough Python for robotics; paid bootcamps aren't needed.","https://docs.python.org/3/tutorial/","Nov 2026 – Feb 2027"),
 R("vision","First Principles of Computer Vision","Shree Nayar · Columbia","Video","Free",1,"Image formation, features, stereo and motion from first principles. Better foundations than paid recipe courses.","https://fpcv.cs.columbia.edu/","Apr – Jun 2027"),
 R("vision","PyImageSearch University","Adrian Rosebrock","Course","Paid",0,"Practical OpenCV recipes. Optional once you know the fundamentals.","https://pyimagesearch.com/pyimagesearch-university/","Optional"),
 R("vision","CS231n: Deep Learning for Computer Vision","Stanford","Course","Free",1,"The standard deep-vision course; lectures and assignments are online.","https://cs231n.stanford.edu/","2028"),
 R("ros","ROS 2 documentation and tutorials","Open Robotics","Docs","Free",0,"Start here for every concept. Use the Lyrical Luth (2026 LTS) docs.","https://docs.ros.org/","Jul 2027"),
 R("ros","Articulated Robotics","Josh Newans","Video","Free",1,"Build a real ROS 2 mobile robot step by step: URDF, Gazebo, ros2_control, SLAM, Nav2. The closest match to Phase 3, and better than paid alternatives.","https://articulatedrobotics.xyz/","Jul – Nov 2027"),
 R("ros","A Concise Introduction to Robot Programming with ROS 2 (2nd ed.)","Francisco Martín Rico · CRC Press","Book","Paid",1,"The clearest ROS 2 book, by a long-time ROS 2 navigation contributor.","https://www.routledge.com/A-Concise-Introduction-to-Robot-Programming-with-ROS-2/Rico/p/book/9781032851488","Jul – Sep 2027"),
 R("ros","The Construct ROS 2 courses","The Construct","Course","Paid",0,"Browser-based ROS labs. Worth paying for only if you take their evaluated certification (CR3).","https://www.theconstruct.ai/","Nov – Dec 2027"),
 R("ros","Nav2 documentation","Nav2 project","Docs","Free",0,"Navigation stack concepts and tuning guides.","https://docs.nav2.org/","Nov 2027"),
 R("math","Linear Algebra 18.06","Gilbert Strang · MIT OCW","Course","Free",1,"The linear algebra robotics runs on. No paid course is better.","https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/","2027, alongside uni"),
 R("math","Essence of Linear Algebra","3Blue1Brown","Video","Free",0,"Visual intuition before or alongside Strang.","https://www.3blue1brown.com/topics/linear-algebra","2027"),
 R("math","Modern Robotics (book + lectures)","Lynch & Park · Northwestern","Book","Free",1,"Rigid-body motion, kinematics and dynamics. Free book and videos; audit the Coursera version.","https://hades.mech.northwestern.edu/index.php/Modern_Robotics","Aug 2027 – 2028"),
 R("math","Control System Lectures","Brian Douglas","Video","Free",1,"PID, state space and control intuition, explained better than most paid courses.","https://www.youtube.com/@BrianBDouglas","Nov 2026 onward"),
 R("math","Control Bootcamp","Steve Brunton","Video","Free",0,"Linear control theory with code.","https://www.youtube.com/@Eigensteve","2028"),
 R("math","Feedback Systems","Åström & Murray","Book","Free",0,"A free textbook on feedback control.","https://fbswiki.org/","2028"),
 R("math","Probabilistic Robotics","Thrun, Burgard & Fox","Book","Paid",1,"The classic on Bayes filters, Kalman filters and SLAM. Nothing free covers it as well.","https://robots.stanford.edu/probabilistic-robotics/","Oct 2027 – 2028"),
 R("math","Robotics and SLAM lectures","Cyrill Stachniss · Uni Bonn","Video","Free",1,"Top-tier lectures on state estimation and SLAM; pairs with the book above.","https://www.ipb.uni-bonn.de/teaching/","Oct 2027 – 2028"),
 R("math","Planning Algorithms","Steven LaValle","Book","Free",0,"The free reference for motion planning.","https://lavalle.pl/planning/","Sep 2028"),
 R("math","Underactuated Robotics","Russ Tedrake · MIT","Course","Free",0,"Advanced nonlinear control, for later if control becomes your thesis focus.","https://underactuated.mit.edu/","2029+"),
 R("drone","PX4 User and Developer Guide","PX4 / Dronecode","Docs","Free",1,"The primary source for your flight stack, simulation and ROS 2 bridge.","https://docs.px4.io/","Dec 2027 onward"),
 R("drone","ArduPilot developer docs","ArduPilot","Docs","Free",0,"SITL, MAVLink and the other major open flight stack.","https://ardupilot.org/dev/","P6, 2027"),
 R("drone","Small Unmanned Aircraft: Theory and Practice","Beard & McLain · Princeton","Book","Paid",1,"Flight dynamics, estimation and guidance in one book.","https://press.princeton.edu/books/hardcover/9780691149219/small-unmanned-aircraft","Feb – Jun 2028"),
 R("drone","Visual Navigation for Autonomous Vehicles (16.485)","Luca Carlone · MIT","Course","Free",1,"A graduate course on your exact target topic: visual odometry, VIO and SLAM for drones.","https://vnav.mit.edu/","Jul – Oct 2028"),
 R("drone","Drone Simulation and Control (5 parts)","Brian Douglas · MathWorks","Video","Free",0,"How a quadcopter hovers: sensors, control architecture, flight code, simulation model and PID tuning for six loops.","https://www.mathworks.com/videos/series/drone-simulation-and-control.html","Feb 2028"),
 R("drone","Vision Algorithms for Mobile Robotics","Davide Scaramuzza · UZH","Course","Free",0,"Slides and exercises from a leading drone-vision lab.","https://rpg.ifi.uzh.ch/teaching.html","Aug 2028"),
 R("drone","Crazyflie 2.1 nano-quadcopter","Bitcraze","Hardware","Paid",1,"An open-source research drone used by many labs. Under 250 g, safe indoors, ROS 2 support. More research value than a hobby kit.","https://www.bitcraze.io/","Mar 2028"),
 R("drone","ESP-Drone","Espressif","Docs","Free",0,"Open-source ESP32 mini-quad firmware to read and modify.","https://docs.espressif.com/projects/espressif-esp-drone/en/latest/index.html","Stretch"),
 R("research","How to Read a Paper","S. Keshav","Paper","Free",1,"The three-pass method. Read it before your first lab paper.","http://ccr.sigcomm.org/online/files/p83-keshavA.pdf","Sep 2027"),
 R("research","Overleaf + LaTeX","Overleaf","Tool","Free",0,"Write your CV, research plan and thesis in LaTeX.","https://www.overleaf.com/","Jan 2028"),
 R("research","arXiv cs.RO","arXiv","Papers","Free",0,"Daily robotics preprints; follow your target labs here.","https://arxiv.org/list/cs.RO/recent","From 2027"),
 R("research","Zotero","Zotero","Tool","Free",0,"A reference manager for every paper you read.","https://www.zotero.org/","From 2027"),
 R("lang","Genki I & II textbooks","The Japan Times","Book","Paid",1,"The standard beginner course; more structured than free guides. Use with Anki.","https://genki3.japantimes.co.jp/en/","Jan 2027 – Jun 2028"),
 R("lang","Tae Kim's Guide to Japanese Grammar","Tae Kim","Guide","Free",0,"A free grammar reference alongside Genki.","https://guidetojapanese.org/learn/","2027 – 2028"),
 R("lang","JLPT official site and sample questions","Japan Foundation","Docs","Free",0,"Levels, sample papers and test sites (Dhaka holds limited sessions).","https://www.jlpt.jp/e/","2027"),
 R("lang","IELTS official preparation","IELTS","Course","Free",1,"Official practice tests are the best preparation; paid coaching is optional.","https://ielts.org/","Jan – Mar 2028"),
 R("lang","Anki","Anki","Tool","Free",1,"Spaced-repetition flashcards for everything in this plan.","https://apps.ankiweb.net/","Daily")
];

const CREDS=[
 {tier:"Required",lead:"You can't apply without this.",items:[
  {name:"IELTS Academic (target 7.0+) or TOEFL iBT",by:"IDP / British Council · ETS",how:"Proctored test of listening, reading, writing and speaking.",when:"Feb – Mar 2028 (CR5)",cost:"Roughly ৳25,000–30,000",val:5,why:"Required by English-taught programmes in Japan, China and Russia. Two-year validity from March 2028 covers every deadline to 2029.",url:"https://ielts.org/"}]},
 {tier:"Worth it",lead:"Evaluated by exam or graded project, and read by labs as real skill.",items:[
  {name:"ROS 2 skills certification",by:"The Construct, with Open Robotics",how:"Final project tested on real remote robots, then presented live.",when:"Dec 2027 (CR3)",cost:"Course subscription",val:4,why:"The only ROS credential that tests a working robot rather than course completion.",url:"https://discourse.openrobotics.org/t/new-ros-2-skills-certification-courses/42181"},
  {name:"JLPT N5 → N4",by:"Japan Foundation",how:"Proctored paper exam.",when:"Dec 2027 · Jul or Dec 2028 (CR4, CR6)",cost:"Low",val:4,why:"Shows commitment to Japan and helps with the MEXT Japanese paper and lab life. Dhaka holds limited sessions, so check dates early.",url:"https://www.jlpt.jp/e/"},
  {name:"NVIDIA Jetson AI Specialist",by:"NVIDIA Deep Learning Institute",how:"Open-source Jetson project, reviewed and graded by NVIDIA.",when:"Oct 2028 (CR7)",cost:"Free (needs a Jetson)",val:3,why:"A project-evaluated credential for embedded AI on hardware your drone may carry. Reviews can take weeks.",url:"https://blogs.nvidia.com/blog/jetson-ai-specialists-certification-program"},
  {name:"C++ Certified Associate Programmer (CPA)",by:"C++ Institute · Pearson VUE",how:"Proctored multiple-choice exam.",when:"Jul 2027 (CR2)",cost:"Roughly US$295 with a retake",val:3,why:"Objective proof of C++ skill for an international committee that can't judge your university's grading.",url:"https://cppinstitute.org/certification-exams"}]},
 {tier:"Optional",lead:"Only if time and money allow.",items:[
  {name:"Arduino Fundamentals Certification",by:"Arduino",how:"36 questions in 75 minutes.",when:"Feb 2027 (CR1)",cost:"About US$30–50",val:2,why:"Low weight for grad school; a cheap early confidence check.",url:"https://blog.arduino.cc/?p=21287"},
  {name:"Japan national drone pilot certificate (2nd class)",by:"MLIT · Prometric CBT",how:"Written computer-based test plus a practical test.",when:"After arriving in Japan",cost:"¥8,800 written, plus training",val:2,why:"Useful only once you fly outdoors in Japan for your lab.",url:"https://www.prometric-jp.com/en/examinee/test_list/archives/30"}]}
];


/* ---------- side skills (just-in-time) ---------- */
const L=(t,u,c,best)=>({t,u,c,best:!!best});
const DOMAINS=[
 {k:"mech",name:"Mechanical, airflow & heat",lead:"Why your drone vibrates, overheats, drifts or won't lift: the physics around the code."},
 {k:"elec",name:"Electrical hardware",lead:"Power, noise and boards, so your sensors and motors stop fighting each other."},
 {k:"design",name:"Design, colour & web",lead:"So your site, demo videos and future product look as good as the engineering behind them."},
 {k:"biz",name:"Business & market",lead:"Whether people will actually want, buy and understand what you build."}
];
const SKILLS=[
 {id:"K1",d:"mech",t:"CAD basics in Onshape",when:"Jan 2027 · before E8",why:"Design the E8 bar and motor mounts instead of guessing with cardboard.",learn:["Sketches and constraints, then extrudes","Parts, assemblies and mates","Export STL for printing, DXF for laser cutting"],res:[L("Onshape Learning Center","https://learn.onshape.com/","Free",1),L("Onshape free Education plan","https://www.onshape.com/en/education/","Free"),L("FreeCAD (offline alternative)","https://www.freecad.org/","Free")],ask:"Onshape forum · r/cad"},
 {id:"K2",d:"mech",t:"Design for 3D printing and getting parts made",when:"Apr 2027 · P4 Mobile Base",why:"You don't have a printer, so design parts that print right the first time at a print service or the club.",learn:["Print orientation and layer strength","Wall thickness, tolerances for press-fits","Heat-set inserts instead of screwing into plastic","Send STL + material + infill to a service"],res:[L("CNC Kitchen (strength tests)","https://www.youtube.com/@CNCKitchen","Free",1),L("Printables (ready-made robot parts)","https://www.printables.com/","Free")],ask:"r/3Dprinting · Onshape forum"},
 {id:"K3",d:"mech",t:"Motor, propeller and battery sizing",when:"Feb 2027 · E8 · again Mar 2028 · D5",why:"Pick motors and props from numbers, not from what looks right.",learn:["Thrust-to-weight of at least 2:1","Motor KV vs prop size vs battery cells","Current draw and flight-time estimate","Verify with a home-made thrust stand (kitchen scale)"],res:[L("eCalc xcoptercalc","https://ecalc.ch/xcoptercalc.php","Paid",1),L("UIUC Propeller Database","https://m-selig.ae.illinois.edu/props/volume-1/propDB-volume-1.html","Free"),L("Oscar Liang build guides","https://oscarliang.com/","Free",1)],ask:"r/Multicopter · IntoFPV forum"},
 {id:"K4",d:"mech",t:"Weight distribution and centre of gravity",when:"Apr 2027 · P4 · Mar 2028 · D5",why:"An off-centre battery makes the controller fight itself and drains flight time.",learn:["Keep the CG at the geometric centre","Moment of inertia: heavy parts close to the middle","Balance test before every first flight","Mass budget table for every part"],res:[L("Oscar Liang build guides","https://oscarliang.com/","Free",1),L("PX4 airframe and assembly docs","https://docs.px4.io/","Free")],ask:"ArduPilot Discourse · r/diydrones"},
 {id:"K5",d:"mech",t:"Vibration and IMU noise",when:"Feb 2027 · E8 · Apr 2028 · D5",why:"Vibration is the most common reason a well-tuned controller still flies badly.",learn:["Frame resonance and soft-mounting the flight controller","Balancing props","Reading vibration logs and an FFT","Filtering vs fixing the mechanics"],res:[L("ArduPilot: measuring vibration","https://ardupilot.org/copter/docs/common-measuring-vibration.html","Free",1),L("PX4 log analysis (Flight Review)","https://docs.px4.io/","Free")],ask:"PX4 Discuss · ArduPilot Discourse"},
 {id:"K6",d:"mech",t:"Heat: ESCs, motors and Pi throttling",when:"Apr 2027 · Pi · May 2028 · D6",why:"A Pi that throttles mid-flight or an ESC that cooks itself fails silently.",learn:["Power loss P = I²R and where heat goes","Airflow, heatsinks and placement in prop wash","Watch Pi temperature and throttling flags","Measure motor and ESC temperature after flights"],res:[L("Engineering ToolBox","https://www.engineeringtoolbox.com/","Free"),L("Raspberry Pi documentation","https://www.raspberrypi.com/documentation/","Free",1)],ask:"Electrical Engineering SE · r/raspberry_pi"},
 {id:"K7",d:"mech",t:"Aerodynamics fundamentals",when:"Feb 2028 · D3",why:"Lift, drag and prop behaviour explain what your flight logs show.",learn:["Lift, drag and Reynolds number","Propeller momentum theory and efficiency","Ground effect, prop wash, vortex ring state","Why a quad tilts to move"],res:[L("Introduction to Flight (Anderson)","https://openlibrary.org/search?q=Introduction+to+Flight+Anderson","Paid",1),L("NASA Beginner's Guide to Aeronautics","https://www.grc.nasa.gov/www/k-12/airplane/","Free")],ask:"Aviation SE · Engineering SE"},
 {id:"K8",d:"mech",t:"Intro to CFD and FEA (optional)",when:"2028 · only if your thesis needs it",why:"Simulate airflow or stress before building, when the thesis calls for it.",learn:["Meshing and boundary conditions","Validate against a real measurement","Know when a hand calculation is enough"],res:[L("SimScale (free community plan)","https://www.simscale.com/","Free",1),L("CFD Online","https://www.cfd-online.com/","Free")],ask:"CFD Online forums"},
 {id:"K9",d:"elec",t:"Battery and power safety",when:"Feb 2027 · E8 (first LiPo)",why:"LiPo mistakes cause fires; voltage sag causes crashes.",learn:["C rating, cell count, storage voltage","Balance charging in a fireproof bag","Voltage sag under load","A power budget for every project"],res:[L("Battery University","https://batteryuniversity.com/","Free",1),L("Oscar Liang LiPo guides","https://oscarliang.com/","Free")],ask:"r/Multicopter · EEVblog forum"},
 {id:"K10",d:"elec",t:"Noise, grounding and EMI",when:"Mar 2028 · D5 · or when sensors glitch near motors",why:"Motor noise corrupts I2C, GPS and compass readings in ways that look like software bugs.",learn:["Decoupling capacitors and ground loops","Separating power and signal wiring","Twisting motor wires, keeping I2C short","Compass and GPS placement away from power"],res:[L("Rick Hartley on proper grounding","https://www.youtube.com/results?search_query=Rick+Hartley+proper+grounding","Free",1),L("The Art of Electronics","https://artofelectronics.net/","Paid")],ask:"EEVblog forum · Electrical Engineering SE"},
 {id:"K11",d:"elec",t:"PCB design in KiCad",when:"Jul 2027 · break sprint",why:"Replace Mobile Base's breadboard rat's nest with your own ESP32 carrier board.",learn:["Schematic, symbols and footprints","Routing, ground planes, design-rule checks","Ordering from a fab house","Get a design review before ordering"],res:[L("KiCad","https://www.kicad.org/","Free"),L("Phil's Lab","https://www.youtube.com/@PhilsLab","Free",1)],ask:"r/PrintedCircuitBoard (reviews) · KiCad forum"},
 {id:"K12",d:"elec",t:"Soldering and wiring for flight",when:"Feb 2027 · E8",why:"Bad joints and thin wires fail under vibration and current.",learn:["Wire gauge vs current","XT60 and JST connectors","Heat-shrink and strain relief","Inspecting joints"],res:[L("Joshua Bardwell","https://www.youtube.com/@JoshuaBardwell","Free",1)],ask:"r/fpv · IntoFPV forum"},
 {id:"K13",d:"design",t:"Colour theory for interfaces and brands",when:"Apr 2027 · personal site (PF4)",why:"Colour decides whether your site reads as professional or amateur in the first second.",learn:["Hue, saturation, lightness; tints and shades","One accent, many neutrals; semantic colours","Contrast ratios (WCAG 4.5:1 for text)","Designing light and dark modes"],res:[L("Refactoring UI","https://www.refactoringui.com/","Paid",1),L("Interaction of Color (Albers)","https://openlibrary.org/search?q=Interaction+of+Color+Albers","Paid"),L("Adobe Color","https://color.adobe.com/","Free"),L("WebAIM contrast checker","https://webaim.org/resources/contrastchecker/","Free")],ask:"Graphic Design SE · r/graphic_design"},
 {id:"K14",d:"design",t:"Typography and layout",when:"Apr 2027 · site · Jan 2028 · CV",why:"Your CV, research plan and site are read before your code is.",learn:["Type scale and line length","Pairing two typefaces","Spacing and alignment","Hierarchy: what the eye reads first"],res:[L("Butterick's Practical Typography","https://practicaltypography.com/","Free",1),L("Laws of UX","https://lawsofux.com/","Free")],ask:"User Experience SE"},
 {id:"K15",d:"design",t:"Building web pages",when:"Apr 2027 · site",why:"Enough HTML and CSS to customise your site and, later, a product page.",learn:["Semantic HTML and responsive CSS","Flexbox and grid","Accessibility basics"],res:[L("MDN Learn web development","https://developer.mozilla.org/en-US/docs/Learn","Free",1)],ask:"r/webdev"},
 {id:"K16",d:"design",t:"Demo videos and product photos",when:"Dec 2026 · first demo (PF3)",why:"A 60-second video convinces faster than any README.",learn:["Steady shots, light from the side","Problem, build, it working, in 60–90 s","Captions and on-screen numbers","Editing in DaVinci Resolve"],res:[L("DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve","Free",1)],ask:"r/videography"},
 {id:"K17",d:"biz",t:"Customer interviews",when:"Feb 2029 · S1",why:"People say they love your idea; their past behaviour tells you whether they'd pay.",learn:["Ask about their life, not your idea","Past behaviour over future promises","Commitments as the signal"],res:[L("The Mom Test","https://www.momtestbook.com/","Paid",1),L("YC Startup School","https://www.startupschool.org/","Free",1)],ask:"Indie Hackers · r/startups"},
 {id:"K18",d:"biz",t:"Market research and sizing",when:"Mar 2029",why:"Know whether a drone service in Bangladesh is a business or a hobby.",learn:["Who pays, how often, how much","Competitors and substitutes","Regulation as a cost and a barrier","Rough market size from bottom-up numbers"],res:[L("YC Library","https://www.ycombinator.com/library","Free",1),L("Google Trends","https://trends.google.com/","Free")],ask:"r/startups · Indie Hackers"},
 {id:"K19",d:"biz",t:"Marketing, messaging and \"will this ad work?\"",when:"Apr 2029 · and any product page",why:"Don't ask people whether an ad works; test it with real behaviour.",learn:["One-sentence value proposition","Landing-page structure","Small tests: two versions, measure clicks or sign-ups","Which channels reach your buyers"],res:[L("Traction (Weinberg & Mares)","https://openlibrary.org/search?q=Traction+Weinberg+Mares","Paid",1),L("YC Library","https://www.ycombinator.com/library","Free")],ask:"r/startups · r/marketing"},
 {id:"K20",d:"biz",t:"Pitching and unit economics",when:"May 2029 · demo flight / incubators",why:"Incubators and investors fund numbers and a clear story.",learn:["Cost per unit and per service hour","Price, margin, payback","A 10-slide pitch"],res:[L("YC Startup School","https://www.startupschool.org/","Free",1)],ask:"YC Startup School forum"}
];
SKILLS.forEach(s=>ITEMS.push({id:s.id,title:s.t,phase:"skill",target:s.when,due:({K1:"2027-01-15",K2:"2027-04-30",K3:"2027-02-20",K4:"2028-03-31",K5:"2027-02-28",K6:"2027-04-30",K7:"2028-02-29",K8:"2028-10-31",K9:"2027-02-15",K10:"2028-03-31",K11:"2027-07-15",K12:"2027-02-15",K13:"2027-04-15",K14:"2027-04-15",K15:"2027-04-30",K16:"2026-12-31",K17:"2029-02-28",K18:"2029-03-31",K19:"2029-04-30",K20:"2029-05-31"})[s.id],star:false,desc:s.why}));

const COMM=[
 {k:"Robotics & ROS 2",ph:"p3",list:[["ROS Discourse","Forum","https://discourse.openrobotics.org/","Official ROS 2 announcements and help; maintainers answer here."],["Robotics Stack Exchange","Q&A","https://robotics.stackexchange.com/","Precise ROS and robotics questions with searchable answers."],["r/ROS","Reddit","https://www.reddit.com/r/ROS/","Beginner-friendly ROS help and project sharing."],["r/robotics","Reddit","https://www.reddit.com/r/robotics/","Showcases, news and career questions."],["Gazebo community","Forum","https://community.gazebosim.org/","Simulation problems."]]},
 {k:"Drones & flight control",ph:"p4",list:[["PX4 Discuss","Forum","https://discuss.px4.io/","PX4 developers and users; also links to the Dronecode Discord."],["ArduPilot Discourse","Forum","https://discuss.ardupilot.org/","Very active; experts read your logs if you attach them."],["Bitcraze (Crazyflie) discussions","Forum","https://github.com/orgs/bitcraze/discussions","Research-drone questions answered by the makers."],["r/Multicopter","Reddit","https://www.reddit.com/r/Multicopter/","Motor, prop and build advice."],["r/diydrones","Reddit","https://www.reddit.com/r/diydrones/","Custom autonomous-drone builds."],["IntoFPV forum","Forum","https://intofpv.com/","Hardware troubleshooting, ESCs, power."]]},
 {k:"Electronics, power & PCB",ph:"p1b",list:[["EEVblog forum","Forum","https://www.eevblog.com/forum/","Professional electronics engineers; deep answers."],["Electrical Engineering SE","Q&A","https://electronics.stackexchange.com/","Precise circuit questions."],["r/AskElectronics","Reddit","https://www.reddit.com/r/AskElectronics/","Quick, friendly circuit help."],["r/PrintedCircuitBoard","Reddit","https://www.reddit.com/r/PrintedCircuitBoard/","Post your KiCad design for a free review."],["KiCad forum","Forum","https://forum.kicad.info/","Tool-specific help."]]},
 {k:"Embedded, Arduino & ESP32",ph:"p1",list:[["r/embedded","Reddit","https://www.reddit.com/r/embedded/","Firmware careers and deep embedded topics."],["Arduino Forum","Forum","https://forum.arduino.cc/","Huge archive; search first."],["ESP32 forum","Forum","https://esp32.com/","Espressif engineers answer ESP-IDF questions."],["r/esp32","Reddit","https://www.reddit.com/r/esp32/","Project help and show-and-tell."],["Hackaday.io","Projects","https://hackaday.io/","Publish build logs and get feedback."]]},
 {k:"Mechanical, CAD & aero",ph:"mech",list:[["Onshape forum","Forum","https://forum.onshape.com/","CAD how-to."],["r/3Dprinting","Reddit","https://www.reddit.com/r/3Dprinting/","Design-for-printing advice."],["Engineering SE","Q&A","https://engineering.stackexchange.com/","Mechanics, materials, heat."],["Aviation SE","Q&A","https://aviation.stackexchange.com/","Aerodynamics questions answered by pilots and engineers."],["CFD Online","Forum","https://www.cfd-online.com/Forums/","Simulation specialists."],["r/AerospaceEngineering","Reddit","https://www.reddit.com/r/AerospaceEngineering/","Careers and concepts."]]},
 {k:"Vision & AI",ph:"p2",list:[["OpenCV forum","Forum","https://forum.opencv.org/","OpenCV maintainers and users."],["NVIDIA Jetson forums","Forum","https://forums.developer.nvidia.com/","Jetson setup and deployment."],["r/computervision","Reddit","https://www.reddit.com/r/computervision/","Research and practical CV."]]},
 {k:"Design, colour & web",ph:"design",list:[["Graphic Design SE","Q&A","https://graphicdesign.stackexchange.com/","Colour and type questions."],["User Experience SE","Q&A","https://ux.stackexchange.com/","Interface and usability questions."],["r/graphic_design","Reddit","https://www.reddit.com/r/graphic_design/","Critique of visuals."],["r/webdev","Reddit","https://www.reddit.com/r/webdev/","Building and fixing sites."]]},
 {k:"Startup & market",ph:"biz",list:[["YC Startup School","Course + forum","https://www.startupschool.org/","Founder curriculum, co-founder matching, forum."],["Indie Hackers","Forum","https://www.indiehackers.com/","Founders sharing real numbers."],["r/startups","Reddit","https://www.reddit.com/r/startups/","Feedback on ideas and pitches."]]},
 {k:"Research & grad school",ph:"p5",list:[["Academia SE","Q&A","https://academia.stackexchange.com/","Supervisors, emailing professors, papers."],["r/GradSchool","Reddit","https://www.reddit.com/r/GradSchool/","Applications and student life."],["r/MachineLearning","Reddit","https://www.reddit.com/r/MachineLearning/","Paper discussions."]]}
];

const YT=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const LINKS={
 A1:[["Arduino: Debounce example","https://docs.arduino.cc/built-in-examples/digital/Debounce/"],["Button debounce tutorial","https://arduinogetstarted.com/tutorials/arduino-button-debounce"],["Paul McWhorter lessons","https://www.youtube.com/@paulmcwhorter"]],
 A2:[["Arduino: shiftOut and the 74HC595","https://docs.arduino.cc/tutorials/communication/guide-to-shift-out/"],["Build a binary counter","https://www.instructables.com/Build-a-Simple-Binary-Counter-using-your-Arduino/"],["8-bit LED counter (Arduino Project Hub)","https://projecthub.arduino.cc/crixalis/8bit-led-counter-3344de"]],
 A3:[["Arduino port manipulation","https://docs.arduino.cc/retired/hacking/software/PortManipulation/"],["74HC00 datasheet (TI)","https://www.ti.com/product/SN74HC00"]],
 A4:[["Arduino Morse code transmitter","https://www.instructables.com/Arduino-Morse-Code-Transmitter/"],["Arduino Serial reference","https://docs.arduino.cc/language-reference/en/functions/communication/serial/"]],
 A5:[["Keypad password relay","https://www.instructables.com/Arduino-Keypad-Password-Controlled-LED-Relay/"],["Keypad password lock with solenoid","https://www.circuitschools.com/password-based-solenoid-door-lock-system-using-arduino-and-keypad/"],["Arduino EEPROM library","https://docs.arduino.cc/learn/built-in-libraries/eeprom/"]],
 A6:[["Using a thermistor (Adafruit)","https://learn.adafruit.com/thermistor/using-a-thermistor"],["Potentiometer basics","https://www.makerguides.com/arduino-potentiometer-led-on-off/"],["Serial Plotter guide","https://docs.arduino.cc/software/ide-v2/tutorials/ide-v2-serial-plotter/"]],
 A7:[["Auto-intensity LED with LDR","https://circuitdigest.com/microcontroller-projects/auto-intensity-control-of-power-led-using-arduino"],["LED brightness with a potentiometer","https://roboticsbackend.com/arduino-control-led-brightness-with-a-potentiometer/"]],
 A8:[["DHT22 + LCD tutorial","https://arduinogetstarted.com/tutorials/arduino-dht22-lcd"],["Temperature alarm build","https://arduinointro.com/articles/projects/stay-alerted-building-a-temperature-alarm-with-arduino-dht11"]],
 A9:[["Arduino reaction time game","https://www.hackster.io/BlueJay987/arduino-reaction-time-game-6ee34e"],["attachInterrupt() reference","https://docs.arduino.cc/language-reference/en/functions/external-interrupts/attachInterrupt/"],["Reaction-time mini game (DigiKey)","https://www.digikey.com/en/maker/projects/build-a-reaction-time-mini-game-using-an-arduino/68669aa944ff4f6f8987a940f2025047"]],
 A10:[["Hall sensor with interrupts","https://www.instructables.com/Arduino-Hall-Effect-Sensor-With-Interrupts/"],["RPM tracker project","https://projecthub.arduino.cc/scienceactivitycentre/rpm-tracker-33c819"]],
 A11:[["Ultrasonic sensor tutorial","https://arduinogetstarted.com/tutorials/arduino-ultrasonic-sensor"],["Blink Without Delay","https://docs.arduino.cc/built-in-examples/digital/BlinkWithoutDelay/"]],
 A12:[["Arduino Wire (I2C) reference","https://docs.arduino.cc/language-reference/en/functions/communication/wire/"],["MPU-6000/6050 register map","https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf"]],
 A13:[["Complementary filter videos",YT("complementary filter IMU arduino")],["Brian Douglas: sensor fusion",YT("Brian Douglas sensor fusion")]],
 A14:[["Arduino SD library","https://docs.arduino.cc/libraries/sd/"]],
 A15:[["AccelStepper library docs","https://www.airspayce.com/mikem/arduino/AccelStepper/"]],
 A16:[["Improving the Beginner's PID","http://brettbeauregard.com/blog/2011/04/improving-the-beginners-pid-introduction/"],["Brian Douglas control lectures","https://www.youtube.com/@BrianBDouglas"]],
 E1:[["ESP32 web server","https://randomnerdtutorials.com/esp32-web-server-arduino-ide/"],["PlatformIO docs","https://docs.platformio.org/"]],
 E2:[["ESP32 MQTT publish/subscribe","https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/"],["Mosquitto broker","https://mosquitto.org/"],["paho-mqtt for Python","https://pypi.org/project/paho-mqtt/"]],
 E3:[["Introduction to RTOS (DigiKey)","https://www.digikey.com/en/videos/d/digi-key-electronics/introduction-to-rtos-part-2-getting-started-with-frertos"],["ESP-IDF FreeRTOS reference","https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/freertos.html"]],
 E4:[["ESP-NOW with ESP32","https://randomnerdtutorials.com/esp-now-esp32-arduino-ide/"],["ESP-NOW API (Espressif)","https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_now.html"]],
 E5:[["ESP32 + L298N motor control","https://randomnerdtutorials.com/esp32-dc-motor-l298n-motor-driver-control-speed-direction/"],["ESP-NOW with ESP32","https://randomnerdtutorials.com/esp-now-esp32-arduino-ide/"]],
 E6:[["ESP32 deep sleep and wake-up","https://randomnerdtutorials.com/esp32-deep-sleep-arduino-ide-wake-up-sources/"],["ESP32 OTA updates","https://randomnerdtutorials.com/esp32-over-the-air-ota-programming/"]],
 E7:[["ESP32 + NEO-6M GPS","https://randomnerdtutorials.com/esp32-neo-6m-gps-module-arduino/"]],
 E8:[["Propeller balance rig builds",YT("propeller balance PID seesaw arduino")],["ESP-Drone docs","https://docs.espressif.com/projects/espressif-esp-drone/en/latest/index.html"],["Brian Douglas control lectures","https://www.youtube.com/@BrianBDouglas"]],
 P1:[["Raspberry Pi getting started","https://www.raspberrypi.com/documentation/computers/getting-started.html"],["systemd service files","https://man7.org/linux/man-pages/man5/systemd.service.5.html"],["MIT Missing Semester","https://missing.csail.mit.edu/"]],
 P2:[["Linux serial ports in C/C++","https://blog.mbedded.ninja/programming/operating-systems/linux/linux-serial-ports-using-c-cpp/"],["COBS packet framing","https://en.wikipedia.org/wiki/Consistent_Overhead_Byte_Stuffing"],["CMake tutorial","https://cmake.org/cmake/help/latest/guide/tutorial/index.html"]],
 P3:[["OpenCV tutorials","https://docs.opencv.org/4.x/d9/df8/tutorial_root.html"],["ArUco marker detection","https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html"]],
 P4:[["Articulated Robotics","https://articulatedrobotics.xyz/"],["Modern Robotics (wheeled robots chapter)","https://hades.mech.northwestern.edu/index.php/Modern_Robotics"]],
 P5:[["Ultrasonic sensor tutorial","https://arduinogetstarted.com/tutorials/arduino-ultrasonic-sensor"]],
 P6:[["ArduPilot SITL","https://ardupilot.org/dev/docs/sitl-simulator-software-in-the-loop.html"],["pymavlink guide","https://mavlink.io/en/mavgen_python/"]],
 R1:[["ROS 2 documentation","https://docs.ros.org/"],["Articulated Robotics","https://articulatedrobotics.xyz/"]],
 R2:[["URDF tutorials","https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/URDF-Main.html"],["Gazebo docs","https://gazebosim.org/docs"]],
 R3:[["micro-ROS","https://micro.ros.org/"],["ros2_control","https://control.ros.org/"]],
 R4:[["slam_toolbox","https://github.com/SteveMacenski/slam_toolbox"],["Cyrill Stachniss lectures","https://www.ipb.uni-bonn.de/teaching/"]],
 R5:[["Nav2 docs","https://docs.nav2.org/"]],
 R6:[["robot_localization docs","https://docs.ros.org/en/melodic/api/robot_localization/html/index.html"],["Kalman filter tutorial","https://www.kalmanfilter.net/"]],
 G1:[["Google Scholar","https://scholar.google.com/"],["arXiv cs.RO","https://arxiv.org/list/cs.RO/recent"],["CSRankings (robotics)","https://csrankings.org/"]],
 T1:[["Academia Stack Exchange","https://academia.stackexchange.com/"]],
 D1:[["PX4 Gazebo simulation","https://docs.px4.io/main/en/sim_gazebo_gz/"],["QGroundControl","https://qgroundcontrol.com/"]],
 D2:[["PX4 ROS 2 user guide","https://docs.px4.io/main/en/ros2/user_guide.html"],["PX4 ROS 2 offboard example","https://docs.px4.io/main/en/ros2/offboard_control.html"]],
 D3:[["Small Unmanned Aircraft (Beard & McLain)","https://press.princeton.edu/books/hardcover/9780691149219/small-unmanned-aircraft"],["Drone Simulation and Control (MathWorks)","https://www.mathworks.com/videos/series/drone-simulation-and-control.html"]],
 D4:[["Joshua Bardwell","https://www.youtube.com/@JoshuaBardwell"],["FPV simulators",YT("best FPV drone simulator beginner")]],
 D5:[["PX4 assembly guides","https://docs.px4.io/main/en/assembly/"],["Crazyflie getting started","https://www.bitcraze.io/documentation/start/"],["eCalc xcoptercalc","https://ecalc.ch/xcoptercalc.php"]],
 D6:[["PX4 companion computers","https://docs.px4.io/main/en/companion_computer/"]],
 D7:[["ESP-Drone docs","https://docs.espressif.com/projects/espressif-esp-drone/en/latest/index.html"]],
 M1:[["MEXT research students","https://studyinjapan.go.jp/en/smap-stopj-applications-research.html"]],
 M2:[["Embassy of Japan in Bangladesh: MEXT","https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html"]],
 M3:[["MEXT research students","https://studyinjapan.go.jp/en/smap-stopj-applications-research.html"]],
 M4:[["Academia SE: emailing professors","https://academia.stackexchange.com/"]],
 X1:[["PX4 precision landing","https://docs.px4.io/main/en/advanced_features/precland.html"],["ArUco detection","https://docs.opencv.org/4.x/d5/dae/tutorial_aruco_detection.html"]],
 X2:[["MIT VNAV course","https://vnav.mit.edu/"],["OpenVINS","https://docs.openvins.com/"]],
 X3:[["Planning Algorithms (LaValle)","https://lavalle.pl/planning/"],["OMPL","https://ompl.kavrakilab.org/"]],
 X4:[["Overleaf","https://www.overleaf.com/"]],
 OD1:[["Open Doors at ITMO","https://int.itmo.ru/en/opendoors"]],
 C1:[["ABU Robocon","https://www.aburobocon.net/"],["EWU National Robofest 2026","https://ewubd.edu/news/ewu-national-robofest-2026-opens-grand-ceremony-bringing-together-bangladeshs-brightest-young-innovators"]],
 C2:[["SUAS competition","https://suas-competition.org/"]],
 CS1:[["Campus China (CSC)","https://www.campuschina.org/"]],
 G5:[["Study in Japan","https://www.studyinjapan.go.jp/en/"]],
 T2:[["Overleaf","https://www.overleaf.com/"]],
 T3:[["Submitting to arXiv","https://info.arxiv.org/help/submit/index.html"]],
 S1:[["The Mom Test","https://www.momtestbook.com/"],["YC Startup School","https://www.startupschool.org/"]],
 S2:[["Study in Japan","https://www.studyinjapan.go.jp/en/"]],
 L1:[["learncpp.com","https://www.learncpp.com/"]],
 L2:[["learncpp.com","https://www.learncpp.com/"],["CMake tutorial","https://cmake.org/cmake/help/latest/guide/tutorial/index.html"]],
 L3:[["NumPy learn","https://numpy.org/learn/"],["Matplotlib tutorials","https://matplotlib.org/stable/tutorials/index.html"]],
 L4:[["OpenCV-Python tutorials","https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html"]],
 J1:[["Genki textbooks","https://genki3.japantimes.co.jp/en/"],["Anki","https://apps.ankiweb.net/"]],
 J2:[["Tae Kim's grammar guide","https://guidetojapanese.org/learn/"],["JLPT sample questions","https://www.jlpt.jp/e/samples/forlearners.html"]],
 J3:[["Genki textbooks","https://genki3.japantimes.co.jp/en/"]],
 L5:[["The Rust Book","https://doc.rust-lang.org/book/"]],
 CR1:[["Arduino certification","https://blog.arduino.cc/?p=21287"]],
 CR2:[["C++ Institute exams","https://cppinstitute.org/certification-exams"]],
 CR3:[["ROS 2 skills certification","https://discourse.openrobotics.org/t/new-ros-2-skills-certification-courses/42181"],["The Construct","https://www.theconstruct.ai/"]],
 CR4:[["JLPT official site","https://www.jlpt.jp/e/"]],
 CR5:[["IELTS","https://ielts.org/"]],
 CR6:[["JLPT official site","https://www.jlpt.jp/e/"]],
 CR7:[["Jetson AI Specialist","https://blogs.nvidia.com/blog/jetson-ai-specialists-certification-program"]],
 PF1:[["GitHub profile README","https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"]],
 PF2:[["LinkedIn","https://www.linkedin.com/"]],
 PF3:[["YouTube Studio","https://studio.youtube.com/"],["DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve"]],
 PF4:[["academicpages template","https://academicpages.github.io/"],["GitHub Pages","https://pages.github.com/"]],
 PF5:[["Academia Stack Exchange","https://academia.stackexchange.com/"]],
 PF6:[["Contributing to ROS 2","https://docs.ros.org/en/rolling/The-ROS2-Project/Contributing.html"],["Contributing to PX4","https://docs.px4.io/main/en/contribute/"]],
 PF7:[["Overleaf CV templates","https://www.overleaf.com/latex/templates/tagged/cv"]],
 PF8:[["Academia Stack Exchange","https://academia.stackexchange.com/"]],
 PF9:[["Submitting to arXiv","https://info.arxiv.org/help/submit/index.html"],["ORCID","https://orcid.org/"],["Google Scholar","https://scholar.google.com/"]]
};
SKILLS.forEach(k=>{LINKS[k.id]=k.res.map(r=>[r.t,r.u]);});

const MAIN=PHASES.filter(p=>!["lang","cred","port","skill"].includes(p.k));

const HARD=[["Feb – Mar 2028","IELTS Academic 7.0+","2028-03-31",0,"https://ielts.org/"],["Apr – May 2028","MEXT embassy application","2028-04-15",1,"https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html"],["Aug – Oct 2028","Japanese professor acceptance letters","2028-10-31",0,"https://studyinjapan.go.jp/en/smap-stopj-applications-research.html"],["Nov – Dec 2028","Open Doors olympiad (Russia)","2028-11-02",1,"https://int.itmo.ru/en/opendoors"],["Feb – Apr 2029","China CSC + university applications","2029-02-15",0,"https://www.campuschina.org/"],["Jul 2029","Graduation","2029-07-31",0,""]];
const TOOLS=[["Arduino","p1","PH 1","https://docs.arduino.cc/"],["ESP32 · ESP-IDF","p1b","PH 1b","https://docs.espressif.com/projects/esp-idf/en/latest/esp32/"],["FreeRTOS","p1b","PH 1b","https://www.freertos.org/"],["Raspberry Pi","p2","PH 2","https://www.raspberrypi.com/documentation/"],["OpenCV","p2","PH 2","https://docs.opencv.org/4.x/"],["C++ · Python","lang","Languages","https://www.learncpp.com/"],["ROS 2","p3","PH 3","https://docs.ros.org/"],["Gazebo · Nav2","p3","PH 3","https://docs.nav2.org/"],["PX4 · MAVLink","p4","PH 4","https://docs.px4.io/"],["Crazyflie","p4","PH 4","https://www.bitcraze.io/"],["Visual odometry","p5","PH 5","https://vnav.mit.edu/"],["KiCad · Onshape","skill","Side skills","https://www.kicad.org/"]];
const FLAG=["A16","E8","P4","R5","D6","X1","X2","X3","PF9"];

const PLAN=[
 {id:"how",h:"How the plan works",sub:"Oct 2026 – Jul 2029 · about 1,400 usable hours",body:`<p>Thirty-three months at 12–18 hours a week, minus exam months and a 20% buffer. The earliest hard date is now the <b>MEXT application in April–May 2028</b>, so your thesis topic, research plan and IELTS all move into early 2028.</p><div class="mini-wrap"><table class="mini"><tr><th>Mode</th><th>When</th><th>Hours/wk</th><th>Rule</th></tr><tr><td>Normal</td><td>Most of each term</td><td>12–18</td><td>Follow the phase plan</td></tr><tr><td>Exam</td><td>Dec 1–14, June</td><td>2–3</td><td>Flashcards and one small rebuild</td></tr><tr><td>Sprint</td><td>2-week breaks</td><td>25–30</td><td>Big builds; 3 full days off</td></tr><tr><td>Low</td><td>Ramadan, family events</td><td>8–10</td><td>Theory, reading, Japanese</td></tr></table></div><p><b>Falling behind?</b> Cut in this order: Rust, stretch projects, optional credentials, polish. Never cut the review habit, ★ items or application dates.</p>`},
 {id:"sources",h:"Sources behind this plan",sub:"Where the dates, rules and recommendations come from",body:`<p>Every deadline and requirement here came from these pages. Check each one again when its phase starts, because they can change.</p><ul class="src-list">${[["MEXT research students (Study in Japan)","https://studyinjapan.go.jp/en/smap-stopj-applications-research.html"],["Embassy of Japan in Bangladesh: MEXT","https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html"],["Open Doors at ITMO","https://int.itmo.ru/en/opendoors"],["CSC scholarship guide","https://migaku.com/blog/language-fun/csc-scholarship-guide-studying-in-china-on-a-full-government-ride"],["Campus China","https://www.campuschina.org/"],["Bangladesh drone rules (DFDL)","https://dfdl.com/publication/drones-regulatory-framework-in-bangladesh-top-5-key-qas"],["Draft drone regulations (Daily Star)","https://www.thedailystar.net/tech-startup/news/new-drone-regulations-draft-licence-and-clearance-be-mandatory-3751206"],["ROS 2 Lyrical Luth release","https://docs.ros.org/en/kilted/Releases/Release-Lyrical-Luth.html"],["ROS 2 skills certification","https://discourse.openrobotics.org/t/new-ros-2-skills-certification-courses/42181"],["Jetson AI Specialist","https://blogs.nvidia.com/blog/jetson-ai-specialists-certification-program"],["C++ Institute exams","https://cppinstitute.org/certification-exams"],["Arduino certification (official)","https://www.arduino.cc/education/certification/"],["JLPT test locations","https://www.teamlanguages.com/blogs/jlpt-registration-and-test-locations"],["Japan drone pilot test (Prometric)","https://www.prometric-jp.com/en/examinee/test_list/archives/30"],["Portfolio vs certificates (The Construct)","https://www.theconstruct.ai/?p=49603"],["Spaced retrieval practice","https://learningscientists.org/blog/2022/8/18-1"],["Spaced retrieval in STEM","https://aaas-iuse.org/resource/helping-students-remember-can-spaced-retrieval-practice-improve-stem-course-performance/"],["Robotics communities index","https://thehiveindex.com/topics/robotics/"],["Bangladesh Flying Labs","https://flyinglabs.org/bangladesh"],["Most popular fonts","https://photutorial.com/fonts-statistics"]].map(([t,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t} ↗</a></li>`).join("")}</ul>`},
 {id:"memory",h:"Memory system",sub:"Learn fast, then make it stay",body:`<ul><li><b>Learn it</b> (cramming is fine), then write 3–5 Anki cards.</li><li><b>Day 1:</b> explain it in the project README without looking.</li><li><b>Day 7:</b> rebuild a stripped-down version from a blank file; set Review to <i>Day 7 done</i>.</li><li><b>Day 30:</b> closed-book test on 3 random old projects; set <i>Day 30 done</i>.</li><li><b>Every day:</b> 15 minutes of Anki, Japanese included.</li></ul>`},
 ...MAIN.map(p=>({id:p.k,phase:p.k,h:`${p.code.replace("PH ","Phase ")}: ${p.name}`,sub:p.dates,body:{
  p1:`<p>Two projects a week with parts you own; Paul McWhorter teaches each topic. Set up GitHub and LinkedIn this month (PF1, PF2).</p><p><b>Buy now:</b> LEDs, resistor kit, 100 nF capacitors, an 8-channel logic analyser.</p>`,
  p1b:`<p>Real-time multitasking, wireless links and telemetry. Dec 15–31 is a sprint. Japanese starts in January.</p><p><b>Buy in February:</b> brushless motors, ESCs, props, 3S LiPo and charger for E8.</p>`,
  p2:`<p>The ESP32 for fast control, the Pi for thinking. Your personal site goes live in April. Look for a research-assistant role with faculty.</p><p><b>Buy in March:</b> Raspberry Pi 5 8 GB, Camera Module 3.</p>`,
  p3:`<p>ROS 2 on the ground robot. Shortlist labs (G1) and agree your thesis topic and supervisor by November (T1), because MEXT needs a research plan in early 2028.</p><p><b>Buy in October:</b> a low-cost 2D LiDAR, or borrow one.</p>`,
  p4:`<p>Simulator first, then hardware, then computer control. In parallel: research plan and IELTS (Feb–Mar), MEXT application (Apr–May). Consider a Crazyflie: under 250 g, lab-standard and simple to fly legally.</p><p><b>Drone law:</b> a 2024 draft would require CAAB registration and per-flight authorisation above 250 g. Fly through the university or club with permission.</p>`,
  p5:`<p>Your best drone work plus applications: Japanese professors' acceptance letters (Aug–Oct), Open Doors (Nov–Dec), an arXiv preprint of your thesis work (Nov).</p>`,
  p6:`<p>CSC and backup applications (Feb–Apr), thesis experiments and writing, then offer, visa and graduation.</p>`}[p.k]}))
];

const COV=[["#0D1713","#E1C7A2"],["#4D7F7B","#F2EBE3"],["#986C41","#F7EFE4"],["#E1C7A2","#2a1f16"],["#4F5949","#F2EBE3"],["#5b2fa0","#efe6ff"],["#22508f","#e8f0ff"],["#9c2f2b","#fbe9e7"],["#2f6b45","#e7f5ec"]];
const SHELVES=[["learn","Learn how to learn"],["elec","Electronics & firmware"],["code","Code"],["robo","Robotics core"],["flight","Flight"],["vision","Vision & estimation"],["research","Research & startup"],["lang","Japanese"]];
const B=(id,sh,t,by,pub,cost,ess,when,why,read,url,c)=>({id,sh,t,by,pub,cost,ess:!!ess,when,why,read,url,c});
const BOOKS=[
 B("BK1","learn","Make It Stick","Brown, Roediger & McDaniel","Harvard UP","Paid",1,"Now · Oct 2026","You learn fast and forget fast. This is the research behind the Day 7 and Day 30 reviews in this tracker: retrieval practice, spacing and interleaving. Read it first; it changes how you study everything after it.","Chapters 1–3 and 8. About 100 pages.","https://www.hup.harvard.edu/books/9780674729018",5),
 B("BK2","elec","Practical Electronics for Inventors","Scherz & Monk","McGraw Hill","Paid",1,"At your desk from Oct 2026","The reference for every component you wire. Better than searching forums part by part.","Don't read it cover to cover. Read the section for each new part before you wire it.","https://openlibrary.org/search?q=Practical+Electronics+for+Inventors",6),
 B("BK3","elec","Making Embedded Systems (2nd ed.)","Elecia White","O'Reilly · 2024","Paid",1,"Dec 2026 – Feb 2027 · PH 1b","Turns Arduino sketches into real firmware: architecture, state machines, interrupts, timing, power and debugging. This is the bridge to flight-controller code.","Read it all alongside the ESP32 phase, one chapter per week.","https://www.oreilly.com/library/view/making-embedded-systems/9781098151539/",0),
 B("BK4","code","The Linux Command Line","William Shotts","Free online","Free",0,"Mar 2027 · PH 2","A complete, free book on the shell, for the Raspberry Pi phase.","Parts 1 and 2. Skim the rest when you need it.","https://linuxcommand.org/tlcl.php",4),
 B("BK5","code","Effective Modern C++","Scott Meyers","O'Reilly · 2014","Paid",1,"Jun – Jul 2027 · before ROS 2","42 short items on move semantics, smart pointers, lambdas and auto, which is the C++ ROS 2 code is written in. Read it after learncpp.","Items 1–6, 18–22 (smart pointers), 23–30 (move semantics), 31–34 (lambdas).","https://www.oreilly.com/library/view/effective-modern-c/9781491908419/",7),
 B("BK6","code","A Tour of C++ (3rd ed.)","Bjarne Stroustrup","Addison-Wesley","Paid",0,"Jun 2027","A short overview of modern C++ from the language's creator. Optional if Meyers clicks.","All of it, quickly. About 300 pages.","https://www.stroustrup.com/tour3.html",3),
 B("BK7","code","The Rust Programming Language","Klabnik & Nichols","Free online","Free",0,"2028 · optional","The official Rust book, for your Rust goal. Rust is still niche in robotics, so read it after the core path.","Chapters 1–10, then 15–16 (smart pointers, concurrency).","https://doc.rust-lang.org/book/",2),
 B("BK8","robo","A Concise Introduction to Robot Programming with ROS 2","Francisco Martín Rico","CRC Press","Paid",1,"Jul – Sep 2027 · PH 3","The clearest ROS 2 book, by a long-time navigation contributor. It pairs with Articulated Robotics.","All of it, building each example as you go.","https://www.routledge.com/A-Concise-Introduction-to-Robot-Programming-with-ROS-2/Rico/p/book/9781032851488",1),
 B("BK9","robo","Modern Robotics","Lynch & Park","Free PDF + videos","Free",1,"Aug 2027 – 2028","Rigid-body motion and kinematics, the language every robotics paper uses.","Chapters 2–5 (configuration space, rigid-body motion, kinematics). Chapter 8 (dynamics) later.","https://hades.mech.northwestern.edu/index.php/Modern_Robotics",8),
 B("BK10","robo","Robotics, Vision and Control (3rd ed.)","Peter Corke","Springer · 2023","Paid",0,"Aug 2027 · optional","Every algorithm comes with runnable Python, from poses to visual servoing. The friendliest bridge between theory and code.","Chapters on poses, mobile robots and cameras, as you need them.","https://link.springer.com/book/10.1007/978-3-031-06469-2",6),
 B("BK11","robo","Feedback Systems (2nd ed.)","Åström & Murray","Free PDF","Free",1,"Nov 2026 onward · with E8","The textbook behind PID and state feedback. Drone control is built on it.","The PID, state-feedback and frequency-domain chapters. Use Brian Douglas's videos for intuition first.","https://fbswiki.org/",4),
 B("BK12","robo","Probabilistic Robotics","Thrun, Burgard & Fox","MIT Press","Paid",1,"Oct 2027 – 2028","The classic on Bayes filters, Kalman filters and SLAM. Pair it with Stachniss's lectures.","Chapters 2–3 (Bayes and Gaussian filters), 7 (localization), 10 (EKF SLAM).","https://robots.stanford.edu/probabilistic-robotics/",0),
 B("BK13","robo","Planning Algorithms","Steven LaValle","Free online","Free",0,"Sep 2028 · reference","The free reference for motion planning, if planning becomes part of your thesis.","Chapter 5 (sampling-based planning) only, unless your thesis needs more.","https://lavalle.pl/planning/",3),
 B("BK14","flight","Small Unmanned Aircraft: Theory and Practice","Beard & McLain","Princeton UP","Paid",1,"Feb – Jun 2028 · PH 4","Flight dynamics, sensors, state estimation and guidance in one book, written for the kind of drone you'll build.","Chapters 1–8 (frames to state estimation), then guidance as needed.","https://press.princeton.edu/books/hardcover/9780691149219/small-unmanned-aircraft",2),
 B("BK15","flight","Introduction to Flight","John D. Anderson","McGraw Hill","Paid",0,"Feb 2028 · aero side skill","Lift, drag and propellers, explained for engineers.","Chapters 2 and 4–5 (atmosphere, aerodynamics basics, airfoils).","https://openlibrary.org/search?q=Introduction+to+Flight+Anderson",6),
 B("BK16","vision","Multiple View Geometry in Computer Vision","Hartley & Zisserman","Cambridge UP","Paid",1,"Jul – Oct 2028 · PH 5","The geometry under visual odometry and SLAM. Use it as a reference, not a cover-to-cover read.","Chapter 6 (camera models), 9–12 (two-view geometry, triangulation), 18 (bundle adjustment).","https://www.robots.ox.ac.uk/~vgg/hzbook/",1),
 B("BK17","vision","State Estimation for Robotics (2nd ed.)","Timothy Barfoot","Cambridge UP · free PDF","Free",1,"Aug – Nov 2028 · PH 5","From Kalman filters to batch estimation on matrix Lie groups: the maths in modern VIO papers. The author shares the PDF.","Part I (estimation), then the 3D geometry and pose-estimation chapters.","https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf",5),
 B("BK18","vision","Mathematics for Machine Learning","Deisenroth, Faisal & Ong","Free PDF","Free",0,"Before CS231n · 2028","Fills gaps in linear algebra, calculus and probability before deep learning.","Only the chapters for gaps you find.","https://mml-book.github.io/",8),
 B("BK19","vision","Understanding Deep Learning","Simon Prince","MIT Press · free PDF","Free",0,"2028 · with CS231n","A clear, current deep-learning textbook with notebooks.","Chapters 1–10, then the transformer chapter.","https://udlbook.github.io/udlbook/",7),
 B("BK20","research","The Craft of Research","Booth, Colomb, Williams et al.","U. Chicago Press","Paid",1,"Jan 2028 · before the MEXT plan","How to turn a topic into a question, a claim and evidence. It shapes your MEXT research plan and thesis directly.","Parts I–III. About 150 pages.","https://openlibrary.org/search?q=The+Craft+of+Research+Booth",0),
 B("BK21","research","The Mom Test","Rob Fitzpatrick","Self-published","Paid",1,"Jan – Feb 2029 · before S1","How to interview users without getting lied to. Read it before your 20 startup interviews.","All of it. About 130 pages, one evening.","https://www.momtestbook.com/",3),
 B("BK22","research","Traction","Weinberg & Mares","Portfolio","Paid",0,"2029 · optional","19 ways to find customers, and how to test them cheaply.","The Bullseye framework chapters, then the channels that fit drones.","https://openlibrary.org/search?q=Traction+Weinberg+Mares",2),
 B("BK23","lang","Genki I & II (3rd ed.)","Banno et al.","Japan Times","Paid",1,"From now · JLPT plan","The standard beginner course, paired with its workbook and app. It takes you to about N4.","One lesson every 1–2 weeks, with Anki for vocabulary.","https://genki3.japantimes.co.jp/en/",7)
];

const PCATS=["Boards","Sensors","Displays","Storage","Motors & drivers","Logic ICs & semiconductors","Input & sound","Power","Passives & prototyping","Tools","Drone & flight","Computers & cameras","Other"];
const INV0=[
 ["Arduino Uno R3",2,"Boards",""],["ESP32 dev board",3,"Boards",""],
 ["DHT22 temperature & humidity sensor",1,"Sensors",""],["MPU6050 accelerometer + gyroscope",2,"Sensors",""],["BMP280 pressure sensor",1,"Sensors",""],["LDR (photoresistor)",4,"Sensors",""],["LDR module",1,"Sensors",""],["NTC thermistor 10 kΩ",2,"Sensors",""],["Hall-effect sensor",1,"Sensors",""],["PIR motion sensor",1,"Sensors",""],["GY-GPS6MV2 GPS (NEO-6M)",1,"Sensors",""],["HC-SR04 ultrasonic sensor",3,"Sensors",""],["MQ-2 gas sensor",1,"Sensors",""],["HW-139 touch sensor",1,"Sensors",""],
 ["16×2 LCD",1,"Displays","Check the back for an I2C backpack"],["SSD1306 OLED",1,"Displays",""],["2.4\" TFT colour display",1,"Displays",""],
 ["MicroSD card module",1,"Storage",""],["AT24C256 EEPROM",1,"Storage",""],
 ["SG90 micro servo",4,"Motors & drivers",""],["28BYJ-48 stepper motor",1,"Motors & drivers","12 V version"],["HW-134A stepper driver board",1,"Motors & drivers",""],["JGA12-N20 gear motor with encoder",2,"Motors & drivers",""],["12 V DC motor",1,"Motors & drivers",""],["L298N motor driver",2,"Motors & drivers",""],["1-channel 5 V relay",1,"Motors & drivers",""],
 ["74HC595 shift register",1,"Logic ICs & semiconductors",""],["74HC00 (NAND)",3,"Logic ICs & semiconductors",""],["74HC02 (NOR)",1,"Logic ICs & semiconductors",""],["74HC04 (NOT)",2,"Logic ICs & semiconductors",""],["74HC08 (AND)",1,"Logic ICs & semiconductors",""],["74HC32 (OR)",1,"Logic ICs & semiconductors",""],["74HC86 (XOR)",1,"Logic ICs & semiconductors",""],["CD4017BE decade counter",2,"Logic ICs & semiconductors",""],["2N2222 transistor",6,"Logic ICs & semiconductors",""],["1N4007 diode",12,"Logic ICs & semiconductors",""],
 ["4×4 matrix keypad",1,"Input & sound",""],["Push button",10,"Input & sound",""],["4-pin tactile switch",10,"Input & sound",""],["3-pin switch",2,"Input & sound",""],["10 kΩ potentiometer",2,"Input & sound",""],["Small buzzer",4,"Input & sound",""],["SFM-27 buzzer",2,"Input & sound",""],
 ["3.7 V Li battery, 2000 mAh",2,"Power",""],["3.7 V rechargeable battery",4,"Power",""],["3.7 V battery holder, 2-slot",1,"Power",""],["TP4056 Type-C Li charger",2,"Power",""],["Small solar panel",2,"Power","Marked 8TN24T on your list"],["AA rechargeable battery",12,"Power",""],["AA battery holder, 4-slot",3,"Power",""],["LM2596 step-down module",3,"Power",""],["XL6009E1 step-up module",1,"Power",""],["12 V power adapter",1,"Power",""],["9 V battery",1,"Power",""],["9 V battery snap",1,"Power",""],
 ["10 kΩ resistor",5,"Passives & prototyping",""],["330 Ω resistor",7,"Passives & prototyping","Your list says 350 Ω; 330 Ω is the standard value"],["470 µF capacitor",2,"Passives & prototyping",""],["Full-size breadboard",1,"Passives & prototyping",""],["Half-size breadboard",1,"Passives & prototyping",""],["Jumper wires (M–M and M–F)",1,"Passives & prototyping","Plenty"],
 ["Multimeter",1,"Tools",""],["Wire cutter",1,"Tools",""]
];
const BUY0=[
 ["5 mm LED assortment",100,"A1, A2","2026-10",150,250,"Your list has no LEDs; A1 and A2 need at least 8","Passives & prototyping"],
 ["Resistor kit, ¼ W assorted values",1,"A1 onward","2026-10",300,500,"You only have 10 kΩ and 330 Ω","Passives & prototyping"],
 ["100 nF ceramic capacitors",20,"A2, A3","2026-10",100,200,"Decoupling for every 74HC chip","Passives & prototyping"],
 ["8-channel USB logic analyser (24 MHz)",1,"A3, A4, E3","2026-10",800,1500,"Shows I2C, SPI and UART signals; you'll use it for years","Tools"],
 ["I2C backpack (PCF8574) for the 16×2 LCD",1,"A8","2026-10",150,250,"Skip it if your LCD already has one","Displays"],
 ["Soldering iron kit, solder and flux",1,"A12","2026-11",1000,2500,"Borrow from the club first; needed for module headers","Tools"],
 ["Analog joystick module (KY-023)",1,"E5","2027-01",80,150,"For the second-ESP32 remote","Input & sound"],
 ["Brushless motor 2212 920KV",2,"E8, later D5","2027-02",1600,2400,"They carry over to the drone","Drone & flight"],
 ["30 A ESC",2,"E8, later D5","2027-02",1600,2400,"","Drone & flight"],
 ["1045 propellers (pairs)",4,"E8","2027-02",300,600,"Take them off whenever you only change code","Drone & flight"],
 ["3S 2200 mAh LiPo",1,"E8","2027-02",2500,3500,"","Power"],
 ["LiPo balance charger (B6-class) + LiPo safety bag",1,"E8, K9","2027-02",3000,4000,"Never charge a LiPo unattended","Power"],
 ["XT60 connectors + 14 AWG silicone wire",1,"E8, K12","2027-02",300,500,"","Power"],
 ["Raspberry Pi 5 (8 GB)",1,"P1","2027-03",17000,22000,"The global price rose to $125 in 2026 because of the RAM shortage","Computers & cameras"],
 ["Official 27 W USB-C power supply + 64 GB microSD",1,"P1","2027-03",2300,3200,"","Computers & cameras"],
 ["Pi 5 active cooler",1,"P1, K6","2027-03",700,1000,"The Pi 5 throttles without one","Computers & cameras"],
 ["Raspberry Pi Camera Module 3",1,"P3","2027-04",3500,4500,"","Computers & cameras"],
 ["Pan-tilt bracket for two SG90 servos",1,"P3","2027-04",200,350,"Uses two of your four SG90s","Motors & drivers"],
 ["2WD robot plate, N20 wheels and a caster",1,"P4","2027-04",800,1500,"Reuses your N20 encoder motors and L298N","Motors & drivers"],
 ["5 V 5 A buck converter",1,"P4","2027-04",400,700,"Your LM2596s give 3 A, too little for a Pi 5 on battery","Power"],
 ["2D LiDAR (LD19 or RPLIDAR C1)",1,"R4","2027-10",8000,12000,"Borrow from the club first","Computers & cameras"],
 ["RC transmitter + receiver (ExpressLRS)",1,"D4, then D5","2028-02",10000,14000,"Practise in an FPV simulator before the first real flight","Drone & flight"],
 ["F450 frame + 2 more 2212 motors + 2 more 30 A ESCs",1,"D5","2028-03",5000,7500,"With the motors and ESCs from E8 this makes four","Drone & flight"],
 ["Pixhawk-class flight controller + power module",1,"D5","2028-03",10000,20000,"Runs PX4","Drone & flight"],
 ["GPS with compass (u-blox M8N or M10)",1,"D5","2028-03",2500,4000,"Your NEO-6M is fine for E7; PX4 wants a GPS with a compass","Drone & flight"],
 ["Telemetry radio pair",1,"D5","2028-03",3000,4500,"Check which frequency is legal in Bangladesh before buying","Drone & flight"],
 ["Spare 3S LiPo + spare props",1,"D5","2028-04",3000,4000,"","Drone & flight"],
 ["Crazyflie 2.1+ (optional)",1,"D5 alternative","2028-04",35000,45000,"$240 from Bitcraze before shipping; buy only if outdoor flight permission is refused","Drone & flight"],
 ["Depth or stereo camera (e.g. OAK-D Lite)",1,"X2","2028-07",20000,30000,"Borrow from a lab first","Computers & cameras"],
 ["Jetson Orin Nano Super (optional)",1,"X2, X3","2028-08",55000,65000,"$399 after NVIDIA's July 2026 price rise; borrow first","Computers & cameras"]
];

const DECK=[
 {k:"mission",n:"Mission",ty:"Overview",c:"var(--accent)",holo:1,art:"drone",st:H=>["Days left",H.daysTo("2029-07-31")],
  m:[["Gate check",H=>MAIN.length,"Seven phases, each closed by a test you pass or fail."],["Now playing",H=>H.curPhase().code.replace("PH ","P"),"The phase you're in and the gate that ends it."]],w:["Drift","Busy weeks","5 min"],f:"The map of the whole climb, from a blinking LED to a lab in Japan."},
 {k:"tracker",n:"Tracker",ty:"Progress",c:"var(--blue)",holo:1,art:"check",st:H=>["Items",ITEMS.filter(H.countable).length],
  m:[["Mark it done",H=>ITEMS.filter(H.countable).filter(i=>H.st(i.id)===2).length,"Every project, milestone and deadline, with a status."],["Spaced review",H=>ITEMS.filter(i=>H.rv(i.id)>0).length,"Day 7 and Day 30 rebuilds, so nothing fades."]],w:["Skipped reviews","Forgetting","2 min/day"],f:"Fast learning sticks only when you pull it back out of memory."},
 {k:"daily",n:"Daily",ty:"Habit",c:"var(--good)",art:"cal",st:H=>["Streak",H.streak()+"d"],
  m:[["Today",H=>H.todayPct()+"%","Blocks ticked against today's target."],["This week",H=>H.weekPct()+"%","Hours logged against the weekly plan."]],w:["Blank days","Drift","1 min/day"],f:"Tick the blocks you worked. The line on the graph paper never lies."},
 {k:"inbox",n:"Inbox",ty:"Signals",c:"var(--blue)",art:"mail",st:H=>["New",H.inbox()],
  m:[["Pinned",H=>Object.keys(JSON.parse(localStorage.getItem(PROFILE.key+"-pins")||"{}")).length,"Links you pinned: a mail to answer, a post to read."],["Connected",H=>{try{const c=JSON.parse(localStorage.getItem(PROFILE.key+"-inbox")||"{}"); return ["gh","gm","rd"].filter(k=>c[k]&&c[k].token).length;}catch(e){return 0;}},"GitHub, Gmail and Reddit, only if you switch them on."]],w:["Notification noise","Missed mail","2 min/day"],f:"Only what you starred, pinned or were mentioned in. Nothing else gets through."},
 {k:"board",n:"Board",ty:"Flow",c:"var(--good)",art:"board",st:H=>["Active",ITEMS.filter(i=>H.st(i.id)===1).length],
  m:[["Up next",H=>{const n=H.nextOpen(ITEMS.filter(H.countable)); return n?n.id:"—";},"The next card to pull, by due date."],["Finish first",H=>ITEMS.filter(i=>H.st(i.id)===2).length,"Done beats started. Keep the middle column short."]],w:["Too much at once","Overwhelm","1 min"],f:"Three columns, one rule: finish before you start."},
 {k:"plan",n:"Plan",ty:"Strategy",c:"var(--crit)",art:"plan",st:H=>["Months",H.monthsTo("2029-07-31")],
  m:[["Weekly rhythm",H=>"15h","Four evenings, a deep Friday, a Saturday finish."],["Re-plan",H=>MAIN.length,"Checkpoints where you adjust the next phase only."]],w:["Exam weeks","Guesswork","10 min/mo"],f:"Schedule 80%, keep 20% for the weeks that go wrong."},
 {k:"learn",n:"Learn",ty:"Knowledge",c:"var(--accent)",art:"learn",st:H=>["Sources",RES.length],
  m:[["Best pick",H=>RES.filter(r=>r.best).length,"The one to choose where free and paid overlap."],["Free first",H=>RES.filter(r=>r.cost==="Free").length,"Most of the best material costs nothing."]],w:["Tutorial hopping","Paid hype","3 h/wk"],f:"One good source, finished, beats five half-watched playlists."},
 {k:"books",n:"Books",ty:"Reading",c:"#d8a657",art:"books",st:H=>["Books",BOOKS.length],
  m:[["Essentials",H=>BOOKS.filter(b=>b.ess).length,"The ones to own, with only the chapters you need."],["Finished",H=>BOOKS.filter(b=>H.st(b.id)===2).length,"Mark a book Done after its Day 30 review."]],w:["Cover to cover","Shallow notes","1 h/wk"],f:"Read the chapter the project needs, the week it needs it."},
 {k:"parts",n:"Parts",ty:"Hardware",c:"var(--blue)",holo:1,art:"chip",st:H=>["Owned",H.parts().inv.length],
  m:[["Shopping list",H=>H.parts().buy.length,"Ranked by the month a project needs each part."],["Next buy",H=>{const b=H.sortedBuy()[0]; return b?H.fmtMon(b.by).slice(0,3):"—";},"Buy only when its month comes."]],w:["Impulse buys","Missing parts","5 min"],f:"Sixty-three parts in the drawer. The rest arrives just in time."},
 {k:"cred",n:"Credentials",ty:"Proof",c:"var(--good)",art:"medal",st:H=>["Exams",ITEMS.filter(i=>i.phase==="cred").length],
  m:[["IELTS",H=>H.daysTo("2028-03-31"),"Days until the English score has to be in."],["Proctored",H=>ITEMS.filter(i=>i.phase==="cred"&&H.st(i.id)===2).length,"Only skill-evaluated certificates count here."]],w:["Completion certs","Doubt","Exam day"],f:"A short list on purpose: committees weigh research first."},
 {k:"skills",n:"Skills",ty:"Craft",c:"var(--crit)",art:"gear",st:H=>["Skills",SKILLS.length],
  m:[["Just in time",H=>{const n=H.nextOpen(ITEMS.filter(i=>i.phase==="skill")); return n?n.id:"—";},"The next side skill, timed to the project that needs it."],["Domains",H=>DOMAINS.length,"Mechanical, electrical, design and business."]],w:["Learning too early","Bad builds","As needed"],f:"Heat, weight, airflow and colour, learned the week they matter."},
 {k:"community",n:"Community",ty:"Network",c:"var(--accent)",art:"nodes",st:H=>["Places",COMM.reduce((a,g)=>a+g.list.length,0)],
  m:[["Ask well",H=>COMM.length,"Topic groups: forums, Reddit and Discord."],["Give back",H=>"1/wk","Answer one question a week once you can."]],w:["Lurking","Being stuck","15 min/wk"],f:"Somebody has already crashed the drone you're about to crash."},
 {k:"port",n:"Portfolio",ty:"Showcase",c:"var(--blue)",art:"window",st:H=>["Steps",ITEMS.filter(i=>i.phase==="port").length],
  m:[["Ship it",H=>ITEMS.filter(i=>i.phase==="port"&&H.st(i.id)===2).length,"Repo, video, post and a CV line for every build."],["Next step",H=>{const n=H.nextOpen(ITEMS.filter(i=>i.phase==="port")); return n?n.id:"—";},"The next portfolio milestone due."]],w:["Private repos","Invisibility","30 min/build"],f:"Work nobody can see doesn't get you into a lab."},
 {k:"apply",n:"Apply",ty:"Launch",c:"#e7826b",holo:1,art:"plane",st:H=>["Days",H.daysTo("2028-04-15")],
  m:[["MEXT",H=>H.daysTo("2028-04-15"),"Days to the embassy application window."],["Open Doors",H=>H.daysTo("2028-11-02"),"Days to Russia's olympiad portfolio stage."]],w:["Late documents","Rejection","Deadlines"],f:"Japan first, China and Russia in parallel. Every gate leads here."}
];


const PORT={
links:{GitHub:[["Profile README guide","https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme"],["Pro Git book","https://git-scm.com/book/en/v2"]],LinkedIn:[["LinkedIn","https://www.linkedin.com/"]],YouTube:[["YouTube Studio","https://studio.youtube.com/"],["DaVinci Resolve","https://www.blackmagicdesign.com/products/davinciresolve"]],"Personal website":[["academicpages","https://academicpages.github.io/"],["GitHub Pages","https://pages.github.com/"]],Research:[["arXiv cs.RO","https://arxiv.org/list/cs.RO/recent"],["Google Scholar","https://scholar.google.com/"],["ORCID","https://orcid.org/"],["Contributing to PX4","https://docs.px4.io/main/en/contribute/"]],"Academic CV":[["Overleaf CV templates","https://www.overleaf.com/latex/templates/tagged/cv"]]},
channels:[
   {k:"Start Oct 2026",h:"GitHub",li:["Profile README: one line on who you are, your 3 best projects with GIFs, current focus.","One repo per serious project (A16, E8, P4, R5, D6, X1–X3); one learning-log repo for small exercises.","Pin your 6 best repos. Every README follows the template below.","Commit small and often, with real commit messages. Committees do look."],cad:"Every project, the week it's done."},
   {k:"Start Oct 2026",h:"LinkedIn",li:["Headline: CSE student · Embedded systems → aerial robotics · ROS 2 · PX4.","About: 3 sentences on your goal, what you've built and what you're looking for.","Featured: your best demo videos, then the arXiv preprint.","Licences section: evaluated credentials only.","Follow and engage with the labs on your shortlist."],cad:"One post per finished phase and per competition."},
   {k:"Start Dec 2026",h:"YouTube",li:["A 60–120 s demo for every ★ project: the problem, the build, it working, what broke.","One longer build log per phase (5–10 min).","Titles that say what it does, e.g. \"ESP32 one-axis drone rig holding level with cascaded PID\"."],cad:"About 2 videos a month."},
   {k:"Live Apr 2027",h:"Personal website",li:["academicpages template on GitHub Pages: free and academic-standard.","Pages: About, Projects (video + repo links), Research, CV (PDF), Blog.","Later: Publications with arXiv links, Google Scholar and ORCID."],cad:"Update at each phase gate."},
   {k:"From 2027",h:"Research",li:["A research-assistant role with a faculty member in 2027 (PF5).","Thesis topic and supervisor by Nov 2027 (T1).","arXiv preprint by Nov 2028 (PF9); workshop paper in 2029 (T3).","2–3 merged pull requests to ROS 2 or PX4 projects (PF6)."],cad:"What research committees weigh most."},
   {k:"From Jan 2028",h:"Academic CV",li:["Two pages, LaTeX in Overleaf.","Order: Education, Research experience, Publications, Selected projects (3–5), Competitions and awards, Skills, Test scores.","Each project line: what you built, the method, a measured result, a link."],cad:"Update monthly; tailor per application."}],
readme:`# Project name: one line on what it does

![demo](media/demo.gif)

**Result:** e.g. holds level within ±2° under a push, 200 Hz control loop

## Why
The problem in 2-3 sentences.

## System
Architecture diagram (components, data flow, rates).
Hardware list and wiring photo.

## How it works
The key algorithm (e.g. cascaded PID), with the maths in brief.

## Results
Plots, measurements, video link. What works and what doesn't.

## Run it
Build and flash steps, dependencies, config.

## Lessons
What broke, how you found it, what you'd change.`,
docs:[["Recommendation letters","Three, from people who saw your work: thesis supervisor, RA supervisor, and a course professor or club advisor. Ask 6 weeks ahead with your CV and project links."],["MEXT research plan","Two pages: background, question, method, expected results and why that lab. Draft in Feb 2028 from your thesis topic."],["Professor emails","Short: who you are, one of their papers you read, how your work relates, CV and site links. Send Aug–Oct 2028 for MEXT."],["Statement of purpose","Your path from LED to drones as evidence of persistence, then the research question you want to work on."]]
};

const APPLY={
countries:[
   {n:"Japan",role:"Primary",ph:"p4",li:["<b>MEXT Embassy Recommendation (Research Student):</b> apply through Bangladesh's Ministry of Education around Apr–May 2028 for an Oct 2029 start. Written exams in English and Japanese, then an interview.","After first screening, get provisional acceptance letters from Japanese professors (Aug–Oct 2028).","<b>MEXT University Recommendation</b> and direct admission to English-taught programmes run in parallel, with university-specific deadlines.","Japanese isn't required for English programmes, but JLPT N4 helps."],uni:"English-taught robotics options include the University of Tokyo, Tohoku, Osaka, Nagoya, Kyushu, NAIST and Institute of Science Tokyo.",links:[["MEXT research students","https://studyinjapan.go.jp/en/smap-stopj-applications-research.html"],["Embassy of Japan in Bangladesh","https://www.bd.emb-japan.go.jp/itpr_ja/00_000706.html"]]},
   {n:"China",role:"Parallel",ph:"p5",li:["<b>Chinese Government Scholarship (CSC):</b> Type A through the Chinese embassy, or Type B directly through a university.","Windows run mostly February to late April for September entry: Feb–Apr 2029 for you.","English-taught programmes need IELTS or TOEFL, not HSK."],uni:"Universities strong in robotics and aerospace include Harbin Institute of Technology, Zhejiang, Shanghai Jiao Tong, Tsinghua and Beihang.",links:[["Campus China (CSC portal)","https://www.campuschina.org/"]]},
   {n:"Russia",role:"Parallel",ph:"p6",li:["<b>Open Doors olympiad:</b> an online portfolio stage, then a problem-solving final. The 2026 round ran Nov 2–12 and Nov 17 – Dec 7; expect Nov–Dec 2028 for you.","Winners get free tuition; strong scorers may enrol after an interview.","Final-year students can enter. Choose the Engineering & Technology or AI track."],uni:"Universities with robotics programmes include ITMO, Skoltech, Innopolis and Bauman MSTU. Check current visa, banking and travel conditions before committing.",links:[["Open Doors at ITMO","https://int.itmo.ru/en/opendoors"]]}],
timeline:[["Sep – Oct 2027","Shortlist labs in all three countries","G1","p3",0],["Nov 2027","Thesis topic and supervisor agreed","T1","p3",0],["Jan 2028","Academic CV v1","PF7","p4",0],["Feb – Mar 2028","Research plan + IELTS","M1","p4",0],["Apr – May 2028","MEXT embassy application","M2","p4",1],["Jun – Jul 2028","MEXT exams and interview","M3","p4",0],["Aug – Oct 2028","Professor acceptance letters (Japan)","M4","p5",0],["Nov 2028","arXiv preprint","PF9","p5",0],["Nov – Dec 2028","Open Doors olympiad","OD1","p5",1],["Jan – Mar 2029","Backup applications","G5","p6",0],["Feb – Apr 2029","CSC + Chinese university applications","CS1","p6",1],["May – Jul 2029","Offer, visa, graduation","S2","p6",0]]
};
