import { levelTypes } from "../_components/_types/levelTypes";


export const cardData = [
    {
        id:"22",
        title:"Visual Studio Courses",
        iconUrl:"/assets/Visual-Studio-Logo-2019.png",
        imgUrl:"/courses/page1.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"1",
        title:"Unity Courses",
        iconUrl:"/assets/Unity-Symbol.png",
        imgUrl:"/courses/page2.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"12",
        title:"Photoshop Courses",
        iconUrl:"/assets/image 1.svg",
        imgUrl:"/courses/page3.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"23",
        title:"VS Code Courses",
        iconUrl:"/assets/vsc.png",
        imgUrl:"/courses/page4.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"2",
        title:"Blender Courses",
        iconUrl:"/assets/Logo_Blender.svg.png",
        imgUrl:"/courses/page5.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"4",
        title:"Excel Courses",
        iconUrl:"/assets/Excel-logo.png",
        imgUrl:"/courses/page6.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"3",
        title:"Unreal Engine Courses",
        iconUrl:"/assets/unrealengine.svg",
        imgUrl:"/courses/page7.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"5",
        title:"Word Courses",
        iconUrl:"/assets/word.svg",
        imgUrl:"/courses/page8.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"17",
        title:"PowerPoint Courses",
        iconUrl:"/assets/powerpoint.svg",
        imgUrl:"/courses/page9.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"18",
        title:"SketchUp Courses",
        iconUrl:"/assets/sketchup.svg",
        imgUrl:"/courses/page10.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"19",
        title:"AutoCAD Courses",
        iconUrl:"/assets/AutoCad.svg",
        imgUrl:"/courses/page11.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"20",
        title:"SolidWorks Courses",
        iconUrl:"/assets/solidwork.svg",
        imgUrl:"/courses/page12.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"21",
        title:"Maya Courses",
        iconUrl:"/courses/page13.jpg",
        imgUrl:"/courses/page13.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"6",
        title:"Da Vinci Resolve Courses",
        iconUrl:"/assets/davinci.svg",
        imgUrl:"/courses/page14.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"7",
        title:"Premiere Pro Courses",
        iconUrl:"/assets/premier.svg",
        imgUrl:"/courses/page15.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"8",
        title:"HitFilm Courses",
        iconUrl:"/assets/hitfilm.svg",
        imgUrl:"/courses/page16.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"9",
        title:"Audacity Courses",
        iconUrl:"/assets/audacity.svg",
        imgUrl:"/courses/page17.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"10",
        title:"Ableton Live Courses",
        iconUrl:"/assets/abilton.svg",
        imgUrl:"/courses/page18.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"11",
        title:"Pro Tools Courses",
        iconUrl:"/assets/protools.svg",
        imgUrl:"/courses/page19.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"13",
        title:"GIMP Courses",
        iconUrl:"/assets/image 9.svg",
        imgUrl:"/courses/page20.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"14",
        title:"Illustrator Courses",
        iconUrl:"/courses/page21.jpg",
        imgUrl:"/courses/page21.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"15",
        title:"After Effects Courses",
        iconUrl:"/courses/page22.jpg",
        imgUrl:"/courses/page22.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"16",
        title:"Lightroom Courses",
        iconUrl:"/assets/lightroom.svg",
        imgUrl:"/courses/page23.jpg",
        level:levelTypes.beginner,
    }
];



export const imagesUrl = [
    "/assets/image 1.svg",
    "/assets/image 3.svg",
    "/assets/image 4.svg",
    "/assets/image 5.svg",
    "/assets/image 6.svg",
    "/assets/image 7.svg",
    "/assets/image 8.svg",
    "/assets/image 9.svg",
    "/assets/Logo_Blender.svg.png",
    "/assets/Excel-logo.png",
    "/assets/Visual-Studio-Logo-2019.png",
    "/assets/vsc.png",
    "/assets/buffer_logo_icon_170445.webp",
    "/assets/Official_unity_logo.png"
]

export interface ChapterDescription {
    title: string;
    timeline: string;
}

export interface Chapter {
    chapterTitle: string;
    chapterDescription: ChapterDescription[];
}

export interface AppInfo {
    id: string;
    title: string;
    description: string;
    details: Chapter[];
}

export const apps: AppInfo[] = [
    {
        id: "1",
        title: "Unity",
        description: "In this comprehensive course, you will master the utilization of Unity for game development, starting from the foundational steps of setting up projects. You'll delve into the intricacies of designing engaging game mechanics and exploring Unity's robust suite of tools. As you progress, you'll gain proficiency in scripting with C#, enabling you to bring your game concepts to life with interactive and dynamic features. The course also covers advanced debugging techniques to ensure smooth and error-free gameplay. Additionally, you'll learn effective strategies for optimizing performance and preparing your game for deployment across various platforms. By the end of the course, you'll have the skills and confidence to create and publish your own polished games using Unity.",
        details: [
            {
                chapterTitle: "Getting Started with Unity",
                chapterDescription: [
                    { title: "How to create a new project?", timeline: "10:45" },
                    { title: "How to import assets?", timeline: "05:30" },
                    { title: "How to navigate the interface?", timeline: "08:15" },
                    { title: "How to set up your first scene?", timeline: "12:20" },
                    { title: "How to save your project?", timeline: "03:50" },
                ]
            },
            {
                chapterTitle: "Understanding Unity Projects",
                chapterDescription: [
                    { title: "What are Unity projects?", timeline: "02:15" },
                    { title: "How to organize project files?", timeline: "04:50" },
                    { title: "How to manage project settings?", timeline: "07:10" },
                    { title: "How to use version control?", timeline: "05:25" },
                    { title: "How to collaborate with teams?", timeline: "06:35" },
                ]
            },
            {
                chapterTitle: "Coding in Unity",
                chapterDescription: [
                    { title: "How to write scripts?", timeline: "08:40" },
                    { title: "How to debug scripts?", timeline: "10:25" },
                    { title: "How to optimize code?", timeline: "07:55" },
                    { title: "How to use Unity API?", timeline: "09:30" },
                    { title: "How to handle input?", timeline: "06:45" },
                ]
            },
            {
                chapterTitle: "Debugging Techniques",
                chapterDescription: [
                    { title: "How to set breakpoints?", timeline: "04:15" },
                    { title: "How to step through code?", timeline: "03:40" },
                    { title: "How to inspect variables?", timeline: "05:25" },
                    { title: "How to use the profiler?", timeline: "07:10" },
                    { title: "How to log messages?", timeline: "02:55" },
                ]
            },
            {
                chapterTitle: "Version Control Integration",
                chapterDescription: [
                    { title: "How to set up Git?", timeline: "06:30" },
                    { title: "How to commit changes?", timeline: "04:45" },
                    { title: "How to push/pull changes?", timeline: "05:50" },
                    { title: "How to resolve conflicts?", timeline: "07:20" },
                    { title: "How to use branches?", timeline: "08:15" },
                ]
            },
            {
                chapterTitle: "Building and Deploying Applications",
                chapterDescription: [
                    { title: "How to configure build settings?", timeline: "09:00" },
                    { title: "How to build the project?", timeline: "07:35" },
                    { title: "How to deploy to different platforms?", timeline: "10:50" },
                    { title: "How to handle build errors?", timeline: "06:20" },
                    { title: "How to optimize build size?", timeline: "08:45" },
                ]
            },
            {
                chapterTitle: "Extensions and Customizations",
                chapterDescription: [
                    { title: "How to use asset store?", timeline: "05:25" },
                    { title: "How to create custom tools?", timeline: "07:10" },
                    { title: "How to extend the editor?", timeline: "09:30" },
                    { title: "How to use third-party plugins?", timeline: "08:05" },
                    { title: "How to create custom shaders?", timeline: "11:20" },
                ]
            },
            {
                chapterTitle: "Advanced Debugging and Profiling",
                chapterDescription: [
                    { title: "How to use advanced breakpoints?", timeline: "04:50" },
                    { title: "How to analyze performance?", timeline: "06:40" },
                    { title: "How to reduce memory usage?", timeline: "08:10" },
                    { title: "How to use deep profiling?", timeline: "07:25" },
                    { title: "How to optimize rendering?", timeline: "09:55" },
                ]
            },
            {
                chapterTitle: "Collaborating with Teams",
                chapterDescription: [
                    { title: "How to set up project collaboration?", timeline: "06:20" },
                    { title: "How to share project files?", timeline: "04:50" },
                    { title: "How to handle project updates?", timeline: "05:35" },
                    { title: "How to manage team roles?", timeline: "07:40" },
                    { title: "How to review code?", timeline: "08:25" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks for Productivity",
                chapterDescription: [
                    { title: "How to use shortcuts?", timeline: "03:55" },
                    { title: "How to customize the interface?", timeline: "05:20" },
                    { title: "How to manage assets efficiently?", timeline: "07:15" },
                    { title: "How to automate tasks?", timeline: "08:30" },
                    { title: "How to use the package manager?", timeline: "06:45" },
                ]
            },
        ]
    },
    {
        id: "2",
        title: "Blender",
        description: "In this comprehensive course, you will learn to utilize Blender for 3D modeling and animation, starting with the essential steps of setting up your projects. You'll explore Blender's powerful interface and tools, enabling you to create detailed 3D models and bring them to life with animation. As you progress, you'll delve into more complex topics, such as texture mapping and rigging, to add realism and detail to your creations. The course also covers advanced rendering techniques, ensuring your final output is both stunning and efficient. Additionally, you'll learn about lighting and camera work to enhance the visual appeal of your animations. By the end of the course, you'll be equipped with the skills to produce professional-quality 3D models and animations using Blender",
        details: [
            {
                chapterTitle: "Getting Started with Blender",
                chapterDescription: [
                    { title: "How to install Blender?", timeline: "04:22" },
                    { title: "How to create a new file?", timeline: "07:18" },
                    { title: "How to use basic modeling tools?", timeline: "09:55" },
                    { title: "How to apply textures?", timeline: "11:03" },
                    { title: "How to render a scene?", timeline: "15:40" },
                ]
            },
            {
                chapterTitle: "Understanding Blender Projects",
                chapterDescription: [
                    { title: "How to organize projects?", timeline: "03:30" },
                    { title: "How to manage files?", timeline: "04:50" },
                    { title: "How to use the outliner?", timeline: "06:25" },
                    { title: "How to save and load projects?", timeline: "05:40" },
                    { title: "How to link and append assets?", timeline: "07:55" },
                ]
            },
            {
                chapterTitle: "Modeling in Blender",
                chapterDescription: [
                    { title: "How to create basic shapes?", timeline: "08:45" },
                    { title: "How to use modifiers?", timeline: "06:30" },
                    { title: "How to use sculpting tools?", timeline: "10:20" },
                    { title: "How to retopologize models?", timeline: "12:15" },
                    { title: "How to use boolean operations?", timeline: "09:00" },
                ]
            },
            {
                chapterTitle: "Texturing and Shading",
                chapterDescription: [
                    { title: "How to apply textures?", timeline: "07:40" },
                    { title: "How to use UV mapping?", timeline: "09:25" },
                    { title: "How to create shaders?", timeline: "11:10" },
                    { title: "How to use node editor?", timeline: "08:55" },
                    { title: "How to bake textures?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Lighting and Rendering",
                chapterDescription: [
                    { title: "How to set up lighting?", timeline: "05:50" },
                    { title: "How to use different render engines?", timeline: "07:35" },
                    { title: "How to adjust render settings?", timeline: "06:10" },
                    { title: "How to render animations?", timeline: "09:50" },
                    { title: "How to optimize render times?", timeline: "08:25" },
                ]
            },
            {
                chapterTitle: "Animation in Blender",
                chapterDescription: [
                    { title: "How to create keyframes?", timeline: "06:45" },
                    { title: "How to use the graph editor?", timeline: "08:30" },
                    { title: "How to rig characters?", timeline: "11:15" },
                    { title: "How to use shape keys?", timeline: "07:50" },
                    { title: "How to animate objects?", timeline: "05:30" },
                ]
            },
            {
                chapterTitle: "Advanced Modeling Techniques",
                chapterDescription: [
                    { title: "How to use advanced modifiers?", timeline: "10:05" },
                    { title: "How to model complex shapes?", timeline: "08:40" },
                    { title: "How to use sculpting brushes?", timeline: "09:55" },
                    { title: "How to create realistic models?", timeline: "11:20" },
                    { title: "How to use displacement maps?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Compositing in Blender",
                chapterDescription: [
                    { title: "How to use the compositor?", timeline: "05:15" },
                    { title: "How to add post-processing effects?", timeline: "06:40" },
                    { title: "How to use render layers?", timeline: "08:25" },
                    { title: "How to use masks?", timeline: "07:10" },
                    { title: "How to color correct?", timeline: "09:50" },
                ]
            },
            {
                chapterTitle: "Simulations in Blender",
                chapterDescription: [
                    { title: "How to create fluid simulations?", timeline: "11:30" },
                    { title: "How to create smoke and fire?", timeline: "10:15" },
                    { title: "How to use particle systems?", timeline: "08:55" },
                    { title: "How to create cloth simulations?", timeline: "09:40" },
                    { title: "How to use rigid body physics?", timeline: "07:25" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks for Productivity",
                chapterDescription: [
                    { title: "How to use shortcuts?", timeline: "04:20" },
                    { title: "How to customize the interface?", timeline: "05:35" },
                    { title: "How to manage large scenes?", timeline: "06:50" },
                    { title: "How to optimize performance?", timeline: "07:10" },
                    { title: "How to use add-ons?", timeline: "08:25" },
                ]
            },
        ]
    },
    {
        id: "3",
        title: "Unreal Engine",
        description: "In this course, you will learn to utilize Unreal Engine for game development, starting with the basics of setting up projects and navigating the interface. You'll delve into creating immersive environments and designing game mechanics using Unreal Engine's powerful tools. As you advance, you'll gain expertise in scripting with Blueprints and C++, allowing you to add complex interactions and functionality to your games. The course also covers advanced debugging techniques to help you troubleshoot and optimize your game effectively. You'll explore strategies for enhancing performance and ensuring smooth gameplay. Finally, you'll learn how to deploy your game across various platforms, preparing it for release to a wide audience. By the end of the course, you'll have the knowledge and skills to develop and publish professional-quality games using Unreal Engine.",
        details: [
            {
                chapterTitle: "Getting Started with Unreal Engine",
                chapterDescription: [
                    { title: "How to download and install Unreal Engine?", timeline: "12:34" },
                    { title: "How to create a new project?", timeline: "06:50" },
                    { title: "How to import assets?", timeline: "10:12" },
                    { title: "How to navigate the interface?", timeline: "08:45" },
                    { title: "How to save your project?", timeline: "04:15" },
                ]
            },
            {
                chapterTitle: "Understanding Unreal Engine Projects",
                chapterDescription: [
                    { title: "What are Unreal projects?", timeline: "02:20" },
                    { title: "How to organize project files?", timeline: "04:55" },
                    { title: "How to manage project settings?", timeline: "07:05" },
                    { title: "How to use version control?", timeline: "05:30" },
                    { title: "How to collaborate with teams?", timeline: "06:40" },
                ]
            },
            {
                chapterTitle: "Blueprints in Unreal Engine",
                chapterDescription: [
                    { title: "How to create blueprints?", timeline: "08:50" },
                    { title: "How to use blueprint editor?", timeline: "10:35" },
                    { title: "How to debug blueprints?", timeline: "07:45" },
                    { title: "How to use blueprint interfaces?", timeline: "09:20" },
                    { title: "How to optimize blueprints?", timeline: "06:55" },
                ]
            },
            {
                chapterTitle: "Lighting and Rendering",
                chapterDescription: [
                    { title: "How to set up lighting?", timeline: "05:55" },
                    { title: "How to use different render engines?", timeline: "07:30" },
                    { title: "How to adjust render settings?", timeline: "06:15" },
                    { title: "How to render animations?", timeline: "09:55" },
                    { title: "How to optimize render times?", timeline: "08:30" },
                ]
            },
            {
                chapterTitle: "Materials and Textures",
                chapterDescription: [
                    { title: "How to create materials?", timeline: "07:50" },
                    { title: "How to use texture maps?", timeline: "09:35" },
                    { title: "How to apply materials?", timeline: "11:20" },
                    { title: "How to use material editor?", timeline: "08:45" },
                    { title: "How to optimize materials?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Animations and Cinematics",
                chapterDescription: [
                    { title: "How to create animations?", timeline: "06:50" },
                    { title: "How to use animation blueprints?", timeline: "08:35" },
                    { title: "How to set up character rigs?", timeline: "11:10" },
                    { title: "How to use sequencer?", timeline: "07:45" },
                    { title: "How to create cutscenes?", timeline: "05:30" },
                ]
            },
            {
                chapterTitle: "Advanced Scripting with C++",
                chapterDescription: [
                    { title: "How to set up C++ environment?", timeline: "10:05" },
                    { title: "How to create C++ classes?", timeline: "08:40" },
                    { title: "How to debug C++ code?", timeline: "09:55" },
                    { title: "How to use Unreal API?", timeline: "11:20" },
                    { title: "How to optimize C++ code?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "AI and Navigation",
                chapterDescription: [
                    { title: "How to set up navigation mesh?", timeline: "05:20" },
                    { title: "How to create AI controllers?", timeline: "06:45" },
                    { title: "How to use behavior trees?", timeline: "08:30" },
                    { title: "How to use EQS?", timeline: "07:15" },
                    { title: "How to optimize AI?", timeline: "09:50" },
                ]
            },
            {
                chapterTitle: "Multiplayer and Networking",
                chapterDescription: [
                    { title: "How to set up multiplayer?", timeline: "11:30" },
                    { title: "How to use replication?", timeline: "10:15" },
                    { title: "How to use sessions?", timeline: "08:55" },
                    { title: "How to handle lag?", timeline: "09:40" },
                    { title: "How to optimize network performance?", timeline: "07:25" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks for Productivity",
                chapterDescription: [
                    { title: "How to use shortcuts?", timeline: "04:25" },
                    { title: "How to customize the interface?", timeline: "05:35" },
                    { title: "How to manage large scenes?", timeline: "06:50" },
                    { title: "How to optimize performance?", timeline: "07:10" },
                    { title: "How to use plugins?", timeline: "08:30" },
                ]
            },
        ]
    },
    {
        id: "4",
        title: "Excel",
        description: "In this course, you will learn to utilize Excel for data management and analysis, beginning with the basics of setting up and organizing projects. You'll explore essential functions and formulas that streamline data handling and calculations. As you progress, you'll delve into advanced techniques for data analysis, including pivot tables, data validation, and conditional formatting. The course also covers powerful data visualization strategies, teaching you how to create dynamic charts and graphs that effectively communicate your data insights. Additionally, you'll learn to automate tasks using macros and VBA, enhancing your productivity. By the end of the course, you'll be equipped with the skills to manage and analyze data proficiently, transforming raw data into meaningful information using Excel.",
        details: [
            {
                chapterTitle: "Getting Started with Excel",
                chapterDescription: [
                    { title: "How to create a new workbook?", timeline: "03:12" },
                    { title: "How to enter data into cells?", timeline: "02:34" },
                    { title: "How to use basic formulas?", timeline: "05:45" },
                    { title: "How to format cells?", timeline: "04:20" },
                    { title: "How to save your workbook?", timeline: "01:55" },
                ]
            },
            {
                chapterTitle: "Understanding Excel Sheets",
                chapterDescription: [
                    { title: "How to add new sheets?", timeline: "02:30" },
                    { title: "How to rename sheets?", timeline: "01:45" },
                    { title: "How to organize sheets?", timeline: "03:25" },
                    { title: "How to delete sheets?", timeline: "02:50" },
                    { title: "How to copy/move sheets?", timeline: "04:10" },
                ]
            },
            {
                chapterTitle: "Data Analysis in Excel",
                chapterDescription: [
                    { title: "How to use pivot tables?", timeline: "06:15" },
                    { title: "How to use data validation?", timeline: "04:50" },
                    { title: "How to use filters?", timeline: "4:36" },
                    { title: "How to use filters?", timeline: "05:25" },
                    { title: "How to create charts?", timeline: "07:10" },
                    { title: "How to use conditional formatting?", timeline: "06:45" },
                ]
            },
            {
                chapterTitle: "Advanced Formulas and Functions",
                chapterDescription: [
                    { title: "How to use VLOOKUP?", timeline: "07:35" },
                    { title: "How to use INDEX/MATCH?", timeline: "08:20" },
                    { title: "How to use array formulas?", timeline: "09:00" },
                    { title: "How to use IF statements?", timeline: "06:50" },
                    { title: "How to use TEXT functions?", timeline: "07:10" },
                ]
            },
            {
                chapterTitle: "Data Visualization",
                chapterDescription: [
                    { title: "How to create bar charts?", timeline: "06:30" },
                    { title: "How to create line charts?", timeline: "05:15" },
                    { title: "How to create pie charts?", timeline: "04:50" },
                    { title: "How to use sparklines?", timeline: "07:00" },
                    { title: "How to create dashboards?", timeline: "09:10" },
                ]
            },
            {
                chapterTitle: "Automating Tasks with Macros",
                chapterDescription: [
                    { title: "How to record a macro?", timeline: "07:40" },
                    { title: "How to run a macro?", timeline: "05:25" },
                    { title: "How to edit a macro?", timeline: "06:50" },
                    { title: "How to use VBA?", timeline: "08:15" },
                    { title: "How to create custom functions?", timeline: "09:30" },
                ]
            },
            {
                chapterTitle: "Data Management and Cleanup",
                chapterDescription: [
                    { title: "How to remove duplicates?", timeline: "05:35" },
                    { title: "How to split text to columns?", timeline: "06:10" },
                    { title: "How to trim excess spaces?", timeline: "04:50" },
                    { title: "How to consolidate data?", timeline: "07:20" },
                    { title: "How to use data import tools?", timeline: "08:30" },
                ]
            },
            {
                chapterTitle: "Collaboration and Sharing",
                chapterDescription: [
                    { title: "How to share a workbook?", timeline: "04:20" },
                    { title: "How to track changes?", timeline: "05:10" },
                    { title: "How to protect worksheets?", timeline: "06:35" },
                    { title: "How to use comments?", timeline: "03:55" },
                    { title: "How to co-author a workbook?", timeline: "07:00" },
                ]
            },
            {
                chapterTitle: "Integration with Other Applications",
                chapterDescription: [
                    { title: "How to link data with Word?", timeline: "05:45" },
                    { title: "How to export data to PDF?", timeline: "06:30" },
                    { title: "How to use Power Query?", timeline: "07:25" },
                    { title: "How to connect with databases?", timeline: "08:10" },
                    { title: "How to use Office Add-ins?", timeline: "09:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks for Productivity",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:00" },
                    { title: "How to customize the ribbon?", timeline: "05:10" },
                    { title: "How to use named ranges?", timeline: "06:25" },
                    { title: "How to manage large datasets?", timeline: "07:50" },
                    { title: "How to use Excel templates?", timeline: "08:35" },
                ]
            },
        ]
    },
    {
        id: "5",
        title: "Word",
        description: "In this course, you will learn to utilize Microsoft Word for document creation and management, starting with the fundamentals of basic formatting. You'll become proficient in organizing and structuring your documents with styles, headers, and footers. As you advance, you'll explore advanced features such as mail merge, track changes, and comments, which are essential for collaborative work. The course also covers how to insert and format tables, images, and charts to enhance your documents visually. Additionally, you'll learn about advanced document features like creating indexes, table of contents, and using templates to streamline your workflow. By the end of the course, you'll have the skills to create professional, polished documents and manage them efficiently using Microsoft Word.",
        details: [
            {
                chapterTitle: "Getting Started with Word",
                chapterDescription: [
                    { title: "How to create a new document?", timeline: "03:10" },
                    { title: "How to use templates?", timeline: "04:25" },
                    { title: "How to navigate the interface?", timeline: "05:50" },
                    { title: "How to save a document?", timeline: "02:40" },
                    { title: "How to use basic formatting?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Document Formatting",
                chapterDescription: [
                    { title: "How to set up page layout?", timeline: "04:30" },
                    { title: "How to use styles and themes?", timeline: "05:55" },
                    { title: "How to format paragraphs?", timeline: "03:40" },
                    { title: "How to use headers and footers?", timeline: "06:25" },
                    { title: "How to apply page borders?", timeline: "04:10" },
                ]
            },
            {
                chapterTitle: "Using Tables",
                chapterDescription: [
                    { title: "How to create a table?", timeline: "05:15" },
                    { title: "How to format tables?", timeline: "06:30" },
                    { title: "How to use table styles?", timeline: "07:45" },
                    { title: "How to merge and split cells?", timeline: "04:55" },
                    { title: "How to add formulas to tables?", timeline: "08:00" },
                ]
            },
            {
                chapterTitle: "Inserting Graphics",
                chapterDescription: [
                    { title: "How to insert images?", timeline: "05:20" },
                    { title: "How to use SmartArt?", timeline: "06:35" },
                    { title: "How to add shapes?", timeline: "07:50" },
                    { title: "How to use text boxes?", timeline: "05:05" },
                    { title: "How to format graphics?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Creating and Managing References",
                chapterDescription: [
                    { title: "How to insert footnotes and endnotes?", timeline: "06:00" },
                    { title: "How to create a bibliography?", timeline: "07:10" },
                    { title: "How to use citation styles?", timeline: "05:55" },
                    { title: "How to update references?", timeline: "04:45" },
                    { title: "How to manage sources?", timeline: "08:25" },
                ]
            },
            {
                chapterTitle: "Advanced Document Features",
                chapterDescription: [
                    { title: "How to create mail merges?", timeline: "08:10" },
                    { title: "How to track changes?", timeline: "06:25" },
                    { title: "How to use comments?", timeline: "05:50" },
                    { title: "How to protect documents?", timeline: "07:05" },
                    { title: "How to create forms?", timeline: "09:00" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share documents?", timeline: "04:20" },
                    { title: "How to co-author a document?", timeline: "05:35" },
                    { title: "How to use document compare?", timeline: "06:45" },
                    { title: "How to use version history?", timeline: "03:55" },
                    { title: "How to manage document reviews?", timeline: "07:10" },
                ]
            },
            {
                chapterTitle: "Document Templates and Automation",
                chapterDescription: [
                    { title: "How to use built-in templates?", timeline: "05:50" },
                    { title: "How to create custom templates?", timeline: "07:10" },
                    { title: "How to use document properties?", timeline: "04:35" },
                    { title: "How to automate repetitive tasks?", timeline: "06:00" },
                    { title: "How to create macros?", timeline: "08:25" },
                ]
            },
            {
                chapterTitle: "Printing and Exporting Documents",
                chapterDescription: [
                    { title: "How to set print options?", timeline: "05:30" },
                    { title: "How to preview before printing?", timeline: "04:20" },
                    { title: "How to export to PDF?", timeline: "06:10" },
                    { title: "How to print labels?", timeline: "07:45" },
                    { title: "How to manage print settings?", timeline: "08:00" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks for Productivity",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "03:45" },
                    { title: "How to customize the ribbon?", timeline: "04:50" },
                    { title: "How to manage document sections?", timeline: "06:30" },
                    { title: "How to use quick parts?", timeline: "05:15" },
                    { title: "How to navigate long documents?", timeline: "07:00" },
                ]
            },
        ]
    },
    {
        id: "6",
        title: "Da Vinci Resolve",
        description: "In this course, you will learn to utilize Da Vinci Resolve for video editing and color grading, starting with the basics of importing footage and organizing your projects. You'll explore essential editing techniques, including cutting, trimming, and adding transitions to create seamless videos. As you progress, you'll delve into more advanced features, such as working with multiple tracks, applying effects, and enhancing audio. The course also covers comprehensive color grading techniques, teaching you how to adjust exposure, balance colors, and create cinematic looks. You'll gain expertise in using advanced tools like nodes and scopes for precise color correction. By the end of the course, you'll be equipped with the skills to edit and color grade videos professionally, transforming raw footage into polished, visually stunning projects using Da Vinci Resolve.",
        details: [
            {
                chapterTitle: "Getting Started with Da Vinci Resolve",
                chapterDescription: [
                    { title: "How to create a new project?", timeline: "03:10" },
                    { title: "How to import media?", timeline: "04:25" },
                    { title: "How to navigate the interface?", timeline: "05:50" },
                    { title: "How to save a project?", timeline: "02:40" },
                    { title: "How to use basic editing tools?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Editing Basics",
                chapterDescription: [
                    { title: "How to cut and trim clips?", timeline: "04:00" },
                    { title: "How to use transitions?", timeline: "05:20" },
                    { title: "How to adjust clip speed?", timeline: "03:50" },
                    { title: "How to add text overlays?", timeline: "06:05" },
                    { title: "How to use basic color correction?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Advanced Editing Techniques",
                chapterDescription: [
                    { title: "How to use multi-cam editing?", timeline: "06:30" },
                    { title: "How to create dynamic transitions?", timeline: "07:10" },
                    { title: "How to apply effects and filters?", timeline: "05:45" },
                    { title: "How to use keyframing?", timeline: "08:00" },
                    { title: "How to stabilize shaky footage?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Color Grading",
                chapterDescription: [
                    { title: "How to use the color wheels?", timeline: "05:55" },
                    { title: "How to apply LUTs?", timeline: "06:45" },
                    { title: "How to adjust exposure and contrast?", timeline: "07:30" },
                    { title: "How to use curves for grading?", timeline: "06:20" },
                    { title: "How to match shots?", timeline: "08:10" },
                ]
            },
            {
                chapterTitle: "Audio Editing",
                chapterDescription: [
                    { title: "How to adjust audio levels?", timeline: "04:40" },
                    { title: "How to use audio effects?", timeline: "05:55" },
                    { title: "How to synchronize audio and video?", timeline: "06:10" },
                    { title: "How to remove background noise?", timeline: "07:05" },
                    { title: "How to add and edit sound effects?", timeline: "06:35" },
                ]
            },
            {
                chapterTitle: "Working with Effects",
                chapterDescription: [
                    { title: "How to add visual effects?", timeline: "05:25" },
                    { title: "How to use motion graphics?", timeline: "07:00" },
                    { title: "How to apply 3D effects?", timeline: "06:20" },
                    { title: "How to create custom effects?", timeline: "08:15" },
                    { title: "How to use the Fusion page?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Exporting Your Project",
                chapterDescription: [
                    { title: "How to set export settings?", timeline: "05:40" },
                    { title: "How to export for different platforms?", timeline: "06:10" },
                    { title: "How to create proxies?", timeline: "05:20" },
                    { title: "How to manage render queues?", timeline: "07:00" },
                    { title: "How to use render caching?", timeline: "06:55" },
                ]
            },
            {
                chapterTitle: "Project Management",
                chapterDescription: [
                    { title: "How to organize your media?", timeline: "05:15" },
                    { title: "How to use metadata effectively?", timeline: "06:30" },
                    { title: "How to create and manage bins?", timeline: "05:50" },
                    { title: "How to use project settings?", timeline: "04:45" },
                    { title: "How to back up your project?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share projects?", timeline: "05:00" },
                    { title: "How to use collaborative tools?", timeline: "06:20" },
                    { title: "How to review and comment on edits?", timeline: "05:40" },
                    { title: "How to manage multiple versions?", timeline: "06:30" },
                    { title: "How to track changes?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:10" },
                    { title: "How to customize the workspace?", timeline: "05:30" },
                    { title: "How to optimize performance?", timeline: "06:00" },
                    { title: "How to use advanced tools?", timeline: "07:20" },
                    { title: "How to troubleshoot common issues?", timeline: "06:40" },
                ]
            }
        ]
    },
    {
        id: "7",
        title: "Premiere Pro",
        description: "In this course, you will learn to utilize Adobe Premiere Pro for professional video editing, starting with the basics of setting up your projects and importing footage. You'll explore fundamental editing techniques such as cutting, trimming, and organizing clips on the timeline. As you advance, you'll delve into more sophisticated aspects of video production, including working with multiple video and audio tracks, applying transitions, and incorporating advanced effects. The course will also cover color correction and grading to enhance the visual quality of your videos. Additionally, you'll learn how to create dynamic titles and graphics, and explore advanced features like keyframing and motion effects. By the end of the course, you'll be equipped with the skills to edit professional-quality videos using Adobe Premiere Pro, ready to tackle any video production project with confidence.",
        details: [
            {
                chapterTitle: "Getting Started with Premiere Pro",
                chapterDescription: [
                    { title: "How to create a new project?", timeline: "03:10" },
                    { title: "How to import footage?", timeline: "04:25" },
                    { title: "How to navigate the interface?", timeline: "05:50" },
                    { title: "How to save a project?", timeline: "02:40" },
                    { title: "How to use basic editing techniques?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Editing Basics",
                chapterDescription: [
                    { title: "How to cut and trim clips?", timeline: "04:00" },
                    { title: "How to use transitions?", timeline: "05:20" },
                    { title: "How to adjust clip speed?", timeline: "03:50" },
                    { title: "How to add text and titles?", timeline: "06:05" },
                    { title: "How to use basic color correction?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Advanced Editing Techniques",
                chapterDescription: [
                    { title: "How to use multi-cam editing?", timeline: "06:30" },
                    { title: "How to create dynamic transitions?", timeline: "07:10" },
                    { title: "How to apply effects and filters?", timeline: "05:45" },
                    { title: "How to use keyframing?", timeline: "08:00" },
                    { title: "How to stabilize shaky footage?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Audio Editing",
                chapterDescription: [
                    { title: "How to adjust audio levels?", timeline: "04:40" },
                    { title: "How to use audio effects?", timeline: "05:55" },
                    { title: "How to synchronize audio and video?", timeline: "06:10" },
                    { title: "How to remove background noise?", timeline: "07:05" },
                    { title: "How to add and edit sound effects?", timeline: "06:35" },
                ]
            },
            {
                chapterTitle: "Working with Effects",
                chapterDescription: [
                    { title: "How to add visual effects?", timeline: "05:25" },
                    { title: "How to use motion graphics?", timeline: "07:00" },
                    { title: "How to apply 3D effects?", timeline: "06:20" },
                    { title: "How to create custom effects?", timeline: "08:15" },
                    { title: "How to use the Lumetri Color panel?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Exporting Your Project",
                chapterDescription: [
                    { title: "How to set export settings?", timeline: "05:40" },
                    { title: "How to export for different platforms?", timeline: "06:10" },
                    { title: "How to create proxies?", timeline: "05:20" },
                    { title: "How to manage render queues?", timeline: "07:00" },
                    { title: "How to use media encoder?", timeline: "06:55" },
                ]
            },
            {
                chapterTitle: "Project Management",
                chapterDescription: [
                    { title: "How to organize your media?", timeline: "05:15" },
                    { title: "How to use metadata effectively?", timeline: "06:30" },
                    { title: "How to create and manage bins?", timeline: "05:50" },
                    { title: "How to use project settings?", timeline: "04:45" },
                    { title: "How to back up your project?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share projects?", timeline: "05:00" },
                    { title: "How to use collaborative tools?", timeline: "06:20" },
                    { title: "How to review and comment on edits?", timeline: "05:40" },
                    { title: "How to manage multiple versions?", timeline: "06:30" },
                    { title: "How to track changes?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:10" },
                    { title: "How to customize the workspace?", timeline: "05:30" },
                    { title: "How to optimize performance?", timeline: "06:00" },
                    { title: "How to use advanced tools?", timeline: "07:20" },
                    { title: "How to troubleshoot common issues?", timeline: "06:40" },
                ]
            },
            {
                chapterTitle: "Integrations",
                chapterDescription: [
                    { title: "How to use Adobe Creative Cloud integration?", timeline: "04:50" },
                    { title: "How to import files from After Effects?", timeline: "05:40" },
                    { title: "How to use Adobe Stock assets?", timeline: "06:15" },
                    { title: "How to sync projects with Adobe Team Projects?", timeline: "07:00" },
                    { title: "How to integrate with Adobe Sensei?", timeline: "06:30" },
                ]
            }
        ]
    },
    {
        id: "8",
        title: "Hitfilm",
        description: "In this course, you will learn to utilize HitFilm for video editing and visual effects, starting with the basics of setting up projects and importing your footage. You'll explore essential editing techniques such as cutting, trimming, and arranging clips on the timeline. As you progress, you'll delve into advanced VFX techniques, including creating and compositing visual effects, working with green screens, and applying advanced motion graphics. The course will also cover color correction and grading to enhance the visual appeal of your videos. Additionally, you'll learn how to add dynamic titles and 3D effects to your projects. By the end of the course, you'll be equipped with the skills to edit and enhance videos with professional-quality visual effects using HitFilm.",
        details: [
            {
                chapterTitle: "Getting Started with Hitfilm",
                chapterDescription: [
                    { title: "How to create a new project?", timeline: "03:10" },
                    { title: "How to import media?", timeline: "04:25" },
                    { title: "How to navigate the interface?", timeline: "05:50" },
                    { title: "How to save a project?", timeline: "02:40" },
                    { title: "How to use basic editing tools?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Editing Basics",
                chapterDescription: [
                    { title: "How to cut and trim clips?", timeline: "04:00" },
                    { title: "How to use transitions?", timeline: "05:20" },
                    { title: "How to adjust clip speed?", timeline: "03:50" },
                    { title: "How to add text and titles?", timeline: "06:05" },
                    { title: "How to use basic color correction?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Advanced Editing Techniques",
                chapterDescription: [
                    { title: "How to use multi-cam editing?", timeline: "06:30" },
                    { title: "How to create dynamic transitions?", timeline: "07:10" },
                    { title: "How to apply effects and filters?", timeline: "05:45" },
                    { title: "How to use keyframing?", timeline: "08:00" },
                    { title: "How to stabilize shaky footage?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Visual Effects",
                chapterDescription: [
                    { title: "How to add visual effects?", timeline: "05:25" },
                    { title: "How to use particle effects?", timeline: "07:00" },
                    { title: "How to apply 3D effects?", timeline: "06:20" },
                    { title: "How to create custom effects?", timeline: "08:15" },
                    { title: "How to use the compositing tools?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Color Grading",
                chapterDescription: [
                    { title: "How to use the color wheels?", timeline: "05:55" },
                    { title: "How to apply LUTs?", timeline: "06:45" },
                    { title: "How to adjust exposure and contrast?", timeline: "07:30" },
                    { title: "How to use curves for grading?", timeline: "06:20" },
                    { title: "How to match shots?", timeline: "08:10" },
                ]
            },
            {
                chapterTitle: "Audio Editing",
                chapterDescription: [
                    { title: "How to adjust audio levels?", timeline: "04:40" },
                    { title: "How to use audio effects?", timeline: "05:55" },
                    { title: "How to synchronize audio and video?", timeline: "06:10" },
                    { title: "How to remove background noise?", timeline: "07:05" },
                    { title: "How to add and edit sound effects?", timeline: "06:35" },
                ]
            },
            {
                chapterTitle: "Exporting Your Project",
                chapterDescription: [
                    { title: "How to set export settings?", timeline: "05:40" },
                    { title: "How to export for different platforms?", timeline: "06:10" },
                    { title: "How to create proxies?", timeline: "05:20" },
                    { title: "How to manage render queues?", timeline: "07:00" },
                    { title: "How to use render caching?", timeline: "06:55" },
                ]
            },
            {
                chapterTitle: "Project Management",
                chapterDescription: [
                    { title: "How to organize your media?", timeline: "05:15" },
                    { title: "How to use metadata effectively?", timeline: "06:30" },
                    { title: "How to create and manage bins?", timeline: "05:50" },
                    { title: "How to use project settings?", timeline: "04:45" },
                    { title: "How to back up your project?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share projects?", timeline: "05:00" },
                    { title: "How to use collaborative tools?", timeline: "06:20" },
                    { title: "How to review and comment on edits?", timeline: "05:40" },
                    { title: "How to manage multiple versions?", timeline: "06:30" },
                    { title: "How to track changes?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:10" },
                    { title: "How to customize the workspace?", timeline: "05:30" },
                    { title: "How to optimize performance?", timeline: "06:00" },
                    { title: "How to use advanced tools?", timeline: "07:20" },
                    { title: "How to troubleshoot common issues?", timeline: "06:40" },
                ]
            }
        ]
    },
    {
        id: "9",
        title: "Audacity",
        description: "In this course, you will learn to utilize Audacity for audio recording and editing, starting with the basics of setting up your projects and recording audio. You'll explore fundamental editing techniques such as cutting, trimming, and arranging audio clips to create seamless recordings. As you advance, you'll delve into more complex tasks like noise reduction, equalization, and applying effects to enhance sound quality. The course will also cover advanced sound manipulation techniques, including multi-track editing, pitch correction, and time-stretching. Additionally, you'll learn how to mix and master your audio projects to achieve professional-level sound. By the end of the course, you'll be equipped with the skills to record, edit, and manipulate audio effectively using Audacity, ready to produce high-quality audio for any project.",
        details: [
            {
                chapterTitle: "Getting Started with Audacity",
                chapterDescription: [
                    { title: "How to set up Audacity?", timeline: "03:10" },
                    { title: "How to record audio?", timeline: "04:25" },
                    { title: "How to navigate the interface?", timeline: "05:50" },
                    { title: "How to save a project?", timeline: "02:40" },
                    { title: "How to use basic editing tools?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Basic Editing Techniques",
                chapterDescription: [
                    { title: "How to cut and trim audio?", timeline: "04:00" },
                    { title: "How to use fades and transitions?", timeline: "05:20" },
                    { title: "How to adjust audio levels?", timeline: "03:50" },
                    { title: "How to remove noise?", timeline: "06:05" },
                    { title: "How to apply effects?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Advanced Editing Techniques",
                chapterDescription: [
                    { title: "How to use multi-track editing?", timeline: "06:30" },
                    { title: "How to create audio loops?", timeline: "07:10" },
                    { title: "How to use audio plugins?", timeline: "05:45" },
                    { title: "How to apply equalization?", timeline: "08:00" },
                    { title: "How to perform pitch correction?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Audio Effects",
                chapterDescription: [
                    { title: "How to use reverb and delay?", timeline: "05:25" },
                    { title: "How to apply compression?", timeline: "07:00" },
                    { title: "How to use noise gates?", timeline: "06:20" },
                    { title: "How to apply EQ?", timeline: "08:15" },
                    { title: "How to use audio restoration tools?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Exporting and Saving",
                chapterDescription: [
                    { title: "How to set export settings?", timeline: "05:40" },
                    { title: "How to export in different formats?", timeline: "06:10" },
                    { title: "How to create audio backups?", timeline: "05:20" },
                    { title: "How to manage export quality?", timeline: "07:00" },
                    { title: "How to batch export files?", timeline: "06:55" },
                ]
            },
            {
                chapterTitle: "Project Management",
                chapterDescription: [
                    { title: "How to organize your audio files?", timeline: "05:15" },
                    { title: "How to use metadata?", timeline: "06:30" },
                    { title: "How to create and manage projects?", timeline: "05:50" },
                    { title: "How to use project settings?", timeline: "04:45" },
                    { title: "How to back up your audio files?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share audio projects?", timeline: "05:00" },
                    { title: "How to use collaborative tools?", timeline: "06:20" },
                    { title: "How to review and comment on edits?", timeline: "05:40" },
                    { title: "How to manage multiple versions?", timeline: "06:30" },
                    { title: "How to track changes?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:10" },
                    { title: "How to customize the workspace?", timeline: "05:30" },
                    { title: "How to optimize performance?", timeline: "06:00" },
                    { title: "How to use advanced audio tools?", timeline: "07:20" },
                    { title: "How to troubleshoot common issues?", timeline: "06:40" },
                ]
            },
            {
                chapterTitle: "Integration with Other Tools",
                chapterDescription: [
                    { title: "How to import audio from other DAWs?", timeline: "05:00" },
                    { title: "How to export audio to other formats?", timeline: "06:20" },
                    { title: "How to use Audacity with video editors?", timeline: "05:40" },
                    { title: "How to sync audio with video?", timeline: "06:30" },
                    { title: "How to use third-party plugins?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Sound Design",
                chapterDescription: [
                    { title: "How to create sound effects?", timeline: "05:25" },
                    { title: "How to use sound synthesis?", timeline: "07:00" },
                    { title: "How to design custom soundscapes?", timeline: "06:20" },
                    { title: "How to layer sounds?", timeline: "08:15" },
                    { title: "How to use spatial audio techniques?", timeline: "07:35" },
                ]
            }
        ]
    },
    {
        id: "10",
        title: "Ableton Live",
        description: "In this course, you will learn to utilize Ableton Live for music production and live performance, starting with the basics of setting up your projects and navigating the interface. You'll explore fundamental techniques such as creating and arranging beats, and using virtual instruments and audio effects. As you advance, you'll delve into more sophisticated aspects of music production, including advanced sequencing, layering, and sound design. The course will also cover live performance features, teaching you how to set up and trigger clips, and use MIDI controllers for dynamic live sets. Additionally, you'll learn about mixing and mastering your tracks to achieve a polished sound. By the end of the course, you'll have the skills to produce and perform music professionally using Ableton Live, whether in the studio or on stage.",
        details: [
            {
                chapterTitle: "Getting Started with Ableton Live",
                chapterDescription: [
                    { title: "How to set up Ableton Live?", timeline: "03:10" },
                    { title: "How to navigate the interface?", timeline: "04:25" },
                    { title: "How to create a new project?", timeline: "05:50" },
                    { title: "How to save a project?", timeline: "02:40" },
                    { title: "How to use basic tools and features?", timeline: "06:15" },
                ]
            },
            {
                chapterTitle: "Basic Music Production",
                chapterDescription: [
                    { title: "How to create and arrange clips?", timeline: "04:00" },
                    { title: "How to use MIDI and audio tracks?", timeline: "05:20" },
                    { title: "How to apply effects to tracks?", timeline: "03:50" },
                    { title: "How to use automation?", timeline: "06:05" },
                    { title: "How to create beats and loops?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Advanced Music Production Techniques",
                chapterDescription: [
                    { title: "How to use advanced MIDI features?", timeline: "06:30" },
                    { title: "How to create custom instruments?", timeline: "07:10" },
                    { title: "How to design unique sounds?", timeline: "05:45" },
                    { title: "How to use audio warping?", timeline: "08:00" },
                    { title: "How to integrate external hardware?", timeline: "06:20" },
                ]
            },
            {
                chapterTitle: "Live Performance",
                chapterDescription: [
                    { title: "How to set up a live performance session?", timeline: "05:25" },
                    { title: "How to use performance features?", timeline: "07:00" },
                    { title: "How to integrate with other gear?", timeline: "06:20" },
                    { title: "How to use MIDI controllers?", timeline: "08:15" },
                    { title: "How to manage live sets?", timeline: "07:35" },
                ]
            },
            {
                chapterTitle: "Audio Effects and Processing",
                chapterDescription: [
                    { title: "How to use built-in audio effects?", timeline: "05:55" },
                    { title: "How to create custom effect chains?", timeline: "06:45" },
                    { title: "How to use third-party plugins?", timeline: "07:30" },
                    { title: "How to process audio in real-time?", timeline: "06:20" },
                    { title: "How to use side-chaining?", timeline: "08:10" },
                ]
            },
            {
                chapterTitle: "Mixing and Mastering",
                chapterDescription: [
                    { title: "How to mix tracks effectively?", timeline: "04:40" },
                    { title: "How to use EQ and compression?", timeline: "05:55" },
                    { title: "How to master tracks for release?", timeline: "06:10" },
                    { title: "How to use stereo imaging?", timeline: "07:05" },
                    { title: "How to prepare tracks for distribution?", timeline: "06:35" },
                ]
            },
            {
                chapterTitle: "Project Management",
                chapterDescription: [
                    { title: "How to organize your project files?", timeline: "05:15" },
                    { title: "How to use project templates?", timeline: "06:30" },
                    { title: "How to create and manage versions?", timeline: "05:50" },
                    { title: "How to back up your work?", timeline: "04:45" },
                    { title: "How to use metadata and tags?", timeline: "06:10" },
                ]
            },
            {
                chapterTitle: "Collaboration and Review",
                chapterDescription: [
                    { title: "How to share projects with others?", timeline: "05:00" },
                    { title: "How to collaborate in real-time?", timeline: "06:20" },
                    { title: "How to review and comment on work?", timeline: "05:40" },
                    { title: "How to manage feedback?", timeline: "06:30" },
                    { title: "How to track changes?", timeline: "07:15" },
                ]
            },
            {
                chapterTitle: "Tips and Tricks",
                chapterDescription: [
                    { title: "How to use keyboard shortcuts?", timeline: "04:10" },
                    { title: "How to customize the interface?", timeline: "05:30" },
                    { title: "How to optimize performance?", timeline: "06:00" },
                    { title: "How to use advanced features?", timeline: "07:20" },
                    { title: "How to troubleshoot common issues?", timeline: "06:40" },
                ]
            },
            {
                chapterTitle: "Integrations and Extensions",
                chapterDescription: [
                    { title: "How to use Ableton Link?", timeline: "05:00" },
                    { title: "How to integrate with other DAWs?", timeline: "06:20" },
                    { title: "How to use third-party extensions?", timeline: "05:40" },
                    { title: "How to integrate with hardware synths?", timeline: "06:30" },
                    { title: "How to use Max for Live?", timeline: "07:15" },
                ]
            }
        ]
    },
    {
        "id": "11",
        "title": "Pro Tools",
        "description": "In this course, you will learn to use Pro Tools for audio recording, editing, and mixing, beginning with the initial setup and configuration of your projects. You will explore fundamental recording techniques, including setting up tracks, capturing high-quality audio, and managing sessions efficiently. As you progress, you'll delve into advanced editing techniques such as precise cutting, time-stretching, and pitch correction. The course will also cover sophisticated mixing techniques, including the use of EQ, compression, and reverb, to enhance the overall sound. Additionally, you'll learn about advanced audio post-production workflows, including automation, noise reduction, and mastering. By the end of the course, you will be equipped with the expertise to handle complex audio projects and deliver professional-quality results using Pro Tools.",
        "details": [
            {
                "chapterTitle": "Getting Started with Pro Tools",
                "chapterDescription": [
                    { "title": "How to create a new session?", "timeline": "03:15" },
                    { "title": "How to import and organize audio?", "timeline": "04:25" },
                    { "title": "How to navigate the interface?", "timeline": "05:40" },
                    { "title": "How to save and manage sessions?", "timeline": "03:05" },
                    { "title": "How to use basic recording tools?", "timeline": "06:10" }
                ]
            },
            {
                "chapterTitle": "Basic Audio Editing",
                "chapterDescription": [
                    { "title": "How to cut, copy, and paste audio?", "timeline": "04:05" },
                    { "title": "How to use fades and crossfades?", "timeline": "05:15" },
                    { "title": "How to adjust clip gain?", "timeline": "04:50" },
                    { "title": "How to use the Elastic Audio feature?", "timeline": "06:20" },
                    { "title": "How to manage audio tracks?", "timeline": "07:05" }
                ]
            },
            {
                "chapterTitle": "Mixing Techniques",
                "chapterDescription": [
                    { "title": "How to set up a mix session?", "timeline": "05:00" },
                    { "title": "How to use EQ and compression?", "timeline": "06:10" },
                    { "title": "How to use reverb and delay?", "timeline": "06:25" },
                    { "title": "How to automate volume and effects?", "timeline": "07:15" },
                    { "title": "How to create and use buses?", "timeline": "06:45" }
                ]
            },
            {
                "chapterTitle": "Advanced Audio Production",
                "chapterDescription": [
                    { "title": "How to use advanced editing tools?", "timeline": "06:35" },
                    { "title": "How to create custom plug-ins?", "timeline": "07:00" },
                    { "title": "How to use surround sound features?", "timeline": "08:10" },
                    { "title": "How to integrate with other software?", "timeline": "06:55" },
                    { "title": "How to prepare tracks for mastering?", "timeline": "07:30" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize your session files?", "timeline": "05:20" },
                    { "title": "How to use session templates?", "timeline": "06:35" },
                    { "title": "How to manage track folders?", "timeline": "06:05" },
                    { "title": "How to backup and archive sessions?", "timeline": "05:45" },
                    { "title": "How to collaborate on sessions?", "timeline": "06:50" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share sessions?", "timeline": "05:10" },
                    { "title": "How to use collaborative features?", "timeline": "06:25" },
                    { "title": "How to review and comment on mixes?", "timeline": "05:50" },
                    { "title": "How to manage revisions?", "timeline": "06:40" },
                    { "title": "How to track changes?", "timeline": "07:25" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:20" },
                    { "title": "How to customize the workspace?", "timeline": "05:40" },
                    { "title": "How to optimize performance?", "timeline": "06:10" },
                    { "title": "How to use advanced features?", "timeline": "07:30" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:50" }
                ]
            }
        ]
    },
    {
        "id": "12",
        "title": "Photoshop",
        "description": "In this course, you will learn to use Photoshop for image editing and graphic design. Covering everything from basic photo adjustments to advanced retouching and compositing techniques.",
        "details": [
            {
                "chapterTitle": "Getting Started with Photoshop",
                "chapterDescription": [
                    { "title": "How to create a new document?", "timeline": "02:50" },
                    { "title": "How to navigate the interface?", "timeline": "03:45" },
                    { "title": "How to use basic tools?", "timeline": "04:30" },
                    { "title": "How to save and export files?", "timeline": "03:15" },
                    { "title": "How to customize your workspace?", "timeline": "05:00" }
                ]
            },
            {
                "chapterTitle": "Basic Photo Editing",
                "chapterDescription": [
                    { "title": "How to adjust brightness and contrast?", "timeline": "04:15" },
                    { "title": "How to crop and straighten images?", "timeline": "03:50" },
                    { "title": "How to use filters and effects?", "timeline": "05:05" },
                    { "title": "How to retouch photos?", "timeline": "06:20" },
                    { "title": "How to use layer masks?", "timeline": "07:10" }
                ]
            },
            {
                "chapterTitle": "Advanced Techniques",
                "chapterDescription": [
                    { "title": "How to use advanced selection tools?", "timeline": "06:35" },
                    { "title": "How to create composites?", "timeline": "07:00" },
                    { "title": "How to work with adjustment layers?", "timeline": "06:45" },
                    { "title": "How to use the Pen tool?", "timeline": "08:15" },
                    { "title": "How to enhance images with smart filters?", "timeline": "07:25" }
                ]
            },
            {
                "chapterTitle": "Graphic Design Basics",
                "chapterDescription": [
                    { "title": "How to create text effects?", "timeline": "05:30" },
                    { "title": "How to use shapes and paths?", "timeline": "06:10" },
                    { "title": "How to work with vector graphics?", "timeline": "07:20" },
                    { "title": "How to design layouts?", "timeline": "06:55" },
                    { "title": "How to use blending modes?", "timeline": "07:45" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize layers?", "timeline": "05:10" },
                    { "title": "How to use layer groups?", "timeline": "06:25" },
                    { "title": "How to create and manage templates?", "timeline": "05:50" },
                    { "title": "How to prepare files for print and web?", "timeline": "06:15" },
                    { "title": "How to back up your work?", "timeline": "05:45" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share files and projects?", "timeline": "05:20" },
                    { "title": "How to use collaborative features?", "timeline": "06:10" },
                    { "title": "How to review and comment on designs?", "timeline": "05:45" },
                    { "title": "How to manage feedback?", "timeline": "06:30" },
                    { "title": "How to track changes?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:25" },
                    { "title": "How to speed up your workflow?", "timeline": "05:15" },
                    { "title": "How to optimize performance?", "timeline": "06:05" },
                    { "title": "How to use advanced tools?", "timeline": "07:10" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:20" }
                ]
            }
        ]
    },
    {
        "id": "13",
        "title": "GIMP",
        "description": "In this course, you will learn to use GIMP for image editing and graphic design, starting with the basics of setting up the software and performing essential photo manipulation tasks. You’ll explore fundamental techniques such as cropping, resizing, and color correction to enhance your images. As you progress, you'll delve into more advanced skills, including detailed retouching to correct imperfections and smooth out details. The course will also cover sophisticated graphic design techniques, teaching you how to create and manipulate layers, apply filters, and use advanced selection tools. Additionally, you'll learn how to design visually appealing graphics, work with text and shapes, and integrate multiple elements into cohesive designs. By the end of the course, you'll have the expertise to handle a variety of image editing and graphic design projects using GIMP, achieving professional-quality results.",
        "details": [
            {
                "chapterTitle": "Getting Started with GIMP",
                "chapterDescription": [
                    { "title": "How to create a new project?", "timeline": "03:05" },
                    { "title": "How to navigate the interface?", "timeline": "04:00" },
                    { "title": "How to use basic tools?", "timeline": "05:15" },
                    { "title": "How to save and export files?", "timeline": "03:40" },
                    { "title": "How to customize your workspace?", "timeline": "04:50" }
                ]
            },
            {
                "chapterTitle": "Basic Image Editing",
                "chapterDescription": [
                    { "title": "How to adjust color and brightness?", "timeline": "04:30" },
                    { "title": "How to crop and resize images?", "timeline": "03:55" },
                    { "title": "How to use filters and effects?", "timeline": "05:05" },
                    { "title": "How to remove blemishes?", "timeline": "06:10" },
                    { "title": "How to work with layers?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Advanced Editing Techniques",
                "chapterDescription": [
                    { "title": "How to use advanced selection tools?", "timeline": "06:25" },
                    { "title": "How to create and use layer masks?", "timeline": "07:10" },
                    { "title": "How to work with paths and vector graphics?", "timeline": "06:50" },
                    { "title": "How to enhance photos with filters?", "timeline": "07:45" },
                    { "title": "How to create complex compositions?", "timeline": "08:15" }
                ]
            },
            {
                "chapterTitle": "Graphic Design",
                "chapterDescription": [
                    { "title": "How to create text effects?", "timeline": "05:40" },
                    { "title": "How to design layouts and posters?", "timeline": "06:30" },
                    { "title": "How to use shapes and patterns?", "timeline": "07:00" },
                    { "title": "How to work with gradients?", "timeline": "06:55" },
                    { "title": "How to use blending modes?", "timeline": "07:40" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize layers and files?", "timeline": "05:15" },
                    { "title": "How to use templates?", "timeline": "06:00" },
                    { "title": "How to prepare files for print and web?", "timeline": "06:20" },
                    { "title": "How to back up your work?", "timeline": "05:50" },
                    { "title": "How to manage large projects?", "timeline": "06:45" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export projects?", "timeline": "05:05" },
                    { "title": "How to use collaborative features?", "timeline": "06:20" },
                    { "title": "How to review and comment on designs?", "timeline": "05:40" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:30" },
                    { "title": "How to track changes?", "timeline": "07:10" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:15" },
                    { "title": "How to speed up your workflow?", "timeline": "05:20" },
                    { "title": "How to optimize performance?", "timeline": "06:05" },
                    { "title": "How to use advanced tools?", "timeline": "07:10" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:25" }
                ]
            }
        ]
    },
    {
        "id": "14",
        "title": "Illustrator",
        "description": "In this course, you will learn to use Adobe Illustrator for vector graphic design, starting with the basics of the interface and fundamental drawing tools. You’ll explore essential techniques such as creating and manipulating shapes, using the Pen Tool for precision paths, and applying color fills and strokes. As you advance, you'll delve into more sophisticated vector art techniques, including advanced path operations, gradient applications, and complex illustrations. The course will also cover the creation of custom brushes, patterns, and typography for enhanced design versatility. Additionally, you’ll learn about using layers and masks to organize and refine your artwork. By the end of the course, you'll be equipped with the skills to create professional-quality vector graphics and artwork using Illustrator.",
        "details": [
            {
                "chapterTitle": "Getting Started with Illustrator",
                "chapterDescription": [
                    { "title": "How to create a new document?", "timeline": "02:55" },
                    { "title": "How to navigate the workspace?", "timeline": "03:50" },
                    { "title": "How to use basic drawing tools?", "timeline": "04:25" },
                    { "title": "How to save and export files?", "timeline": "03:30" },
                    { "title": "How to customize your workspace?", "timeline": "04:55" }
                ]
            },
            {
                "chapterTitle": "Basic Drawing Techniques",
                "chapterDescription": [
                    { "title": "How to use the Pen tool?", "timeline": "05:10" },
                    { "title": "How to create and edit shapes?", "timeline": "04:55" },
                    { "title": "How to work with paths and anchor points?", "timeline": "06:15" },
                    { "title": "How to use the Shape Builder tool?", "timeline": "07:05" },
                    { "title": "How to create and use gradients?", "timeline": "06:30" }
                ]
            },
            {
                "chapterTitle": "Advanced Vector Art",
                "chapterDescription": [
                    { "title": "How to create complex illustrations?", "timeline": "07:00" },
                    { "title": "How to use brushes and patterns?", "timeline": "06:45" },
                    { "title": "How to create and use symbols?", "timeline": "07:20" },
                    { "title": "How to work with multiple artboards?", "timeline": "06:55" },
                    { "title": "How to use advanced effects?", "timeline": "07:50" }
                ]
            },
            {
                "chapterTitle": "Graphic Design and Layout",
                "chapterDescription": [
                    { "title": "How to design logos and branding?", "timeline": "05:50" },
                    { "title": "How to create posters and flyers?", "timeline": "06:35" },
                    { "title": "How to work with typography?", "timeline": "07:00" },
                    { "title": "How to design web and mobile graphics?", "timeline": "06:40" },
                    { "title": "How to use alignment and spacing tools?", "timeline": "07:15" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize layers and groups?", "timeline": "05:25" },
                    { "title": "How to use artboard templates?", "timeline": "06:05" },
                    { "title": "How to prepare files for print and web?", "timeline": "06:25" },
                    { "title": "How to back up and archive work?", "timeline": "05:50" },
                    { "title": "How to collaborate on projects?", "timeline": "06:40" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export projects?", "timeline": "05:15" },
                    { "title": "How to use collaborative features?", "timeline": "06:25" },
                    { "title": "How to review and comment on designs?", "timeline": "05:45" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:50" },
                    { "title": "How to track changes?", "timeline": "07:10" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:20" },
                    { "title": "How to speed up your workflow?", "timeline": "05:05" },
                    { "title": "How to optimize performance?", "timeline": "06:00" },
                    { "title": "How to use advanced tools?", "timeline": "07:15" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:35" }
                ]
            }
        ]
    },
    {
        "id": "15",
        "title": "After Effects",
        "description": "In this course, you will learn to use Adobe After Effects for motion graphics and visual effects, starting with the basics of creating and animating simple shapes and text. You’ll explore fundamental animation techniques such as keyframing, easing, and using motion presets to bring your designs to life. As you advance, you'll delve into complex effects and compositing techniques, including layering multiple elements, applying advanced visual effects, and integrating 3D assets. The course will also cover creating dynamic transitions, using tracking and masking for precise effect application, and refining animations with expressions for added complexity. Additionally, you’ll learn about rendering and exporting your projects for various platforms. By the end of the course, you’ll be equipped with the skills to produce high-quality motion graphics and visual effects using After Effects.",
        "details": [
            {
                "chapterTitle": "Getting Started with After Effects",
                "chapterDescription": [
                    { "title": "How to create a new composition?", "timeline": "03:20" },
                    { "title": "How to navigate the interface?", "timeline": "04:15" },
                    { "title": "How to use basic animation tools?", "timeline": "05:30" },
                    { "title": "How to save and export projects?", "timeline": "03:50" },
                    { "title": "How to customize your workspace?", "timeline": "05:00" }
                ]
            },
            {
                "chapterTitle": "Basic Animation Techniques",
                "chapterDescription": [
                    { "title": "How to use keyframes?", "timeline": "05:00" },
                    { "title": "How to animate text and shapes?", "timeline": "06:10" },
                    { "title": "How to use effects and presets?", "timeline": "05:50" },
                    { "title": "How to create motion graphics?", "timeline": "06:40" },
                    { "title": "How to use the graph editor?", "timeline": "07:25" }
                ]
            },
            {
                "chapterTitle": "Advanced Effects and Compositing",
                "chapterDescription": [
                    { "title": "How to use advanced effects?", "timeline": "06:35" },
                    { "title": "How to create and use masks?", "timeline": "07:10" },
                    { "title": "How to work with 3D layers?", "timeline": "07:50" },
                    { "title": "How to use motion tracking?", "timeline": "08:15" },
                    { "title": "How to integrate with other Adobe apps?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize layers and assets?", "timeline": "05:25" },
                    { "title": "How to use templates and presets?", "timeline": "06:10" },
                    { "title": "How to prepare files for rendering?", "timeline": "06:35" },
                    { "title": "How to back up your work?", "timeline": "05:55" },
                    { "title": "How to collaborate on projects?", "timeline": "06:40" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export projects?", "timeline": "05:20" },
                    { "title": "How to use collaborative features?", "timeline": "06:15" },
                    { "title": "How to review and comment on animations?", "timeline": "05:55" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:30" },
                    { "title": "How to track changes?", "timeline": "07:10" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:30" },
                    { "title": "How to speed up your workflow?", "timeline": "05:25" },
                    { "title": "How to optimize performance?", "timeline": "06:10" },
                    { "title": "How to use advanced tools?", "timeline": "07:05" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:20" }
                ]
            }
        ]
    },
    {
        "id": "16",
        "title": "Lightroom",
        "description": "In this course, you will learn to use Adobe Lightroom for photo management and editing, starting with the basics of importing and organizing your photo library. You'll explore fundamental techniques such as sorting, tagging, and creating collections to keep your images well-organized. As you progress, you’ll delve into advanced editing techniques, including precise color grading, exposure adjustments, and applying custom presets to enhance your photos. The course will also cover sophisticated retouching methods, such as removing blemishes, smoothing skin, and correcting lens distortions. Additionally, you'll learn how to use Lightroom's local adjustment tools for targeted edits and create stunning visual effects with gradients and brushes. By the end of the course, you'll be proficient in managing and editing photos to achieve professional-quality results using Lightroom.",
        "details": [
            {
                "chapterTitle": "Getting Started with Lightroom",
                "chapterDescription": [
                    { "title": "How to create a new catalog?", "timeline": "03:10" },
                    { "title": "How to import and organize photos?", "timeline": "04:00" },
                    { "title": "How to navigate the interface?", "timeline": "05:00" },
                    { "title": "How to use basic editing tools?", "timeline": "06:15" },
                    { "title": "How to save and export photos?", "timeline": "03:50" }
                ]
            },
            {
                "chapterTitle": "Basic Photo Editing",
                "chapterDescription": [
                    { "title": "How to adjust exposure and contrast?", "timeline": "04:45" },
                    { "title": "How to crop and straighten images?", "timeline": "04:00" },
                    { "title": "How to use color correction tools?", "timeline": "05:30" },
                    { "title": "How to retouch photos?", "timeline": "06:20" },
                    { "title": "How to use presets?", "timeline": "05:55" }
                ]
            },
            {
                "chapterTitle": "Advanced Editing and Grading",
                "chapterDescription": [
                    { "title": "How to use advanced color grading tools?", "timeline": "06:30" },
                    { "title": "How to create and use custom presets?", "timeline": "07:10" },
                    { "title": "How to work with the Develop module?", "timeline": "06:45" },
                    { "title": "How to create HDR images?", "timeline": "07:25" },
                    { "title": "How to manage and edit large collections?", "timeline": "06:50" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize your photo library?", "timeline": "05:00" },
                    { "title": "How to use collections and keywords?", "timeline": "06:10" },
                    { "title": "How to prepare photos for print and web?", "timeline": "06:25" },
                    { "title": "How to back up and sync your work?", "timeline": "05:45" },
                    { "title": "How to collaborate on photo projects?", "timeline": "06:35" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export photos?", "timeline": "05:20" },
                    { "title": "How to use collaborative features?", "timeline": "06:15" },
                    { "title": "How to review and comment on edits?", "timeline": "05:55" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:30" },
                    { "title": "How to track changes?", "timeline": "07:05" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:20" },
                    { "title": "How to speed up your workflow?", "timeline": "05:10" },
                    { "title": "How to optimize performance?", "timeline": "06:05" },
                    { "title": "How to use advanced tools?", "timeline": "07:00" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:15" }
                ]
            }
        ]
    },
    {
        "id": "17",
        "title": "PowerPoint",
        "description": "In this course, you will learn to use Microsoft PowerPoint for creating impactful presentations, starting with the basics of designing and structuring your slides. You'll explore essential techniques such as choosing templates, adding text and images, and using built-in design tools to create visually appealing slides. As you advance, you'll delve into more sophisticated presentation techniques, including customizing slide layouts, incorporating multimedia elements like videos and audio, and utilizing advanced transitions and animations to enhance your presentation. The course will also cover strategies for effective storytelling, organizing content for maximum impact, and designing for different audiences. Additionally, you'll learn how to rehearse and deliver your presentation confidently using PowerPoint’s presenter tools. By the end of the course, you'll be equipped with the skills to create and deliver professional, engaging presentations that captivate your audience..",
        "details": [
            {
                "chapterTitle": "Getting Started with PowerPoint",
                "chapterDescription": [
                    { "title": "How to create a new presentation?", "timeline": "02:45" },
                    { "title": "How to navigate the interface?", "timeline": "03:20" },
                    { "title": "How to use basic slide layouts?", "timeline": "04:10" },
                    { "title": "How to save and export presentations?", "timeline": "03:35" },
                    { "title": "How to customize the ribbon and toolbar?", "timeline": "04:00" }
                ]
            },
            {
                "chapterTitle": "Slide Design and Content",
                "chapterDescription": [
                    { "title": "How to design effective slides?", "timeline": "05:00" },
                    { "title": "How to add and format text?", "timeline": "04:45" },
                    { "title": "How to insert and format images?", "timeline": "05:20" },
                    { "title": "How to use SmartArt and charts?", "timeline": "06:10" },
                    { "title": "How to apply slide transitions?", "timeline": "05:30" }
                ]
            },
            {
                "chapterTitle": "Advanced Presentation Techniques",
                "chapterDescription": [
                    { "title": "How to create and use animations?", "timeline": "06:25" },
                    { "title": "How to set up and use Presenter View?", "timeline": "05:55" },
                    { "title": "How to integrate multimedia elements?", "timeline": "06:40" },
                    { "title": "How to create interactive presentations?", "timeline": "07:10" },
                    { "title": "How to use custom slide layouts?", "timeline": "06:50" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize slides and sections?", "timeline": "05:15" },
                    { "title": "How to use templates and themes?", "timeline": "05:45" },
                    { "title": "How to prepare presentations for different formats?", "timeline": "06:20" },
                    { "title": "How to collaborate on presentations?", "timeline": "06:00" },
                    { "title": "How to back up your work?", "timeline": "05:50" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and review presentations?", "timeline": "05:00" },
                    { "title": "How to manage comments and feedback?", "timeline": "06:10" },
                    { "title": "How to track changes in presentations?", "timeline": "05:30" },
                    { "title": "How to incorporate feedback into revisions?", "timeline": "06:25" },
                    { "title": "How to use version control?", "timeline": "06:40" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:10" },
                    { "title": "How to speed up your workflow?", "timeline": "05:00" },
                    { "title": "How to optimize presentation performance?", "timeline": "05:45" },
                    { "title": "How to use advanced features?", "timeline": "06:20" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:05" }
                ]
            }
        ]
    },
    {
        "id": "18",
        "title": "SketchUp",
        "description": "In this course, you will learn to use SketchUp for 3D modeling and design, starting with the basics of setting up your workspace and navigating the interface. You’ll explore fundamental modeling tools such as drawing shapes, pushing and pulling surfaces, and creating basic geometries. As you advance, you'll delve into more advanced techniques for architectural and interior design, including detailed modeling of complex structures, applying textures, and using components and groups to streamline your workflow. The course will also cover advanced features like importing and exporting models, creating detailed floor plans, and rendering your designs with realistic lighting and materials. Additionally, you’ll learn about integrating SketchUp with other design tools and plugins for enhanced functionality. By the end of the course, you'll have the skills to create intricate 3D models and detailed designs for architectural and interior projects using SketchUp.",
        "details": [
            {
                "chapterTitle": "Getting Started with SketchUp",
                "chapterDescription": [
                    { "title": "How to create a new model?", "timeline": "03:00" },
                    { "title": "How to navigate the 3D workspace?", "timeline": "04:10" },
                    { "title": "How to use basic drawing tools?", "timeline": "05:00" },
                    { "title": "How to save and export models?", "timeline": "03:45" },
                    { "title": "How to customize toolbars and preferences?", "timeline": "04:20" }
                ]
            },
            {
                "chapterTitle": "Basic Modeling Techniques",
                "chapterDescription": [
                    { "title": "How to create and modify shapes?", "timeline": "05:10" },
                    { "title": "How to use the Push/Pull tool?", "timeline": "04:55" },
                    { "title": "How to work with components and groups?", "timeline": "06:05" },
                    { "title": "How to apply materials and textures?", "timeline": "05:40" },
                    { "title": "How to use the Orbit and Pan tools?", "timeline": "05:15" }
                ]
            },
            {
                "chapterTitle": "Advanced Modeling Techniques",
                "chapterDescription": [
                    { "title": "How to create complex shapes and structures?", "timeline": "06:30" },
                    { "title": "How to use advanced tools and plugins?", "timeline": "07:05" },
                    { "title": "How to create custom components?", "timeline": "06:50" },
                    { "title": "How to work with groups and layers?", "timeline": "07:20" },
                    { "title": "How to create realistic renderings?", "timeline": "07:40" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage your models?", "timeline": "05:30" },
                    { "title": "How to use templates and styles?", "timeline": "06:00" },
                    { "title": "How to prepare models for presentation?", "timeline": "06:25" },
                    { "title": "How to back up and archive models?", "timeline": "05:55" },
                    { "title": "How to collaborate on design projects?", "timeline": "06:15" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export models?", "timeline": "05:20" },
                    { "title": "How to use collaborative features?", "timeline": "06:10" },
                    { "title": "How to review and comment on models?", "timeline": "05:40" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:25" },
                    { "title": "How to track changes in models?", "timeline": "06:50" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:15" },
                    { "title": "How to speed up your modeling workflow?", "timeline": "05:05" },
                    { "title": "How to optimize rendering performance?", "timeline": "06:00" },
                    { "title": "How to use advanced plugins and extensions?", "timeline": "07:10" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:25" }
                ]
            }
        ]
    },
    {
        "id": "19",
        "title": "AutoCAD",
        "description": "In this course, you will learn to use AutoCAD for 2D drafting and 3D modeling, beginning with the fundamentals of setting up your workspace and familiarizing yourself with the interface. You’ll explore basic drawing tools and techniques, including creating and modifying geometric shapes, using layers, and applying dimensions to your drawings. As you progress, you'll delve into advanced CAD techniques, such as creating complex 2D layouts, working with blocks and attributes, and utilizing dynamic blocks for efficient design. The course will also cover 3D modeling techniques, including building and editing 3D objects, applying materials and textures, and rendering your models for realistic visualizations. Additionally, you'll learn about advanced features like creating and managing drawing templates, using external references (Xrefs), and customizing AutoCAD for enhanced productivity. By the end of the course, you'll be equipped with the skills to handle both 2D drafting and 3D modeling projects with professionalism and precision using AutoCAD.",
        "details": [
            {
                "chapterTitle": "Getting Started with AutoCAD",
                "chapterDescription": [
                    { "title": "How to create a new drawing?", "timeline": "02:55" },
                    { "title": "How to navigate the AutoCAD interface?", "timeline": "03:40" },
                    { "title": "How to use basic drawing tools?", "timeline": "04:30" },
                    { "title": "How to save and export drawings?", "timeline": "03:55" },
                    { "title": "How to customize the workspace?", "timeline": "04:20" }
                ]
            },
            {
                "chapterTitle": "Basic Drawing and Editing",
                "chapterDescription": [
                    { "title": "How to draw and modify lines and shapes?", "timeline": "05:15" },
                    { "title": "How to use layers and line types?", "timeline": "05:00" },
                    { "title": "How to use dimensioning tools?", "timeline": "06:05" },
                    { "title": "How to apply and manage blocks?", "timeline": "05:50" },
                    { "title": "How to use hatching and gradients?", "timeline": "05:30" }
                ]
            },
            {
                "chapterTitle": "Advanced Drawing and Modeling",
                "chapterDescription": [
                    { "title": "How to create and manage 3D models?", "timeline": "06:40" },
                    { "title": "How to use advanced modeling tools?", "timeline": "07:10" },
                    { "title": "How to work with 3D solids and surfaces?", "timeline": "07:30" },
                    { "title": "How to apply materials and textures?", "timeline": "06:55" },
                    { "title": "How to render and visualize models?", "timeline": "07:20" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage drawing files?", "timeline": "05:25" },
                    { "title": "How to use templates and standards?", "timeline": "05:50" },
                    { "title": "How to prepare drawings for printing?", "timeline": "06:30" },
                    { "title": "How to back up and archive projects?", "timeline": "05:40" },
                    { "title": "How to collaborate on design projects?", "timeline": "06:10" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export drawings?", "timeline": "05:15" },
                    { "title": "How to use collaborative features?", "timeline": "06:00" },
                    { "title": "How to review and comment on drawings?", "timeline": "05:50" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:40" },
                    { "title": "How to track changes in drawings?", "timeline": "06:55" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:25" },
                    { "title": "How to speed up your drafting workflow?", "timeline": "05:20" },
                    { "title": "How to optimize performance and file size?", "timeline": "06:10" },
                    { "title": "How to use advanced tools and features?", "timeline": "07:05" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:00" }
                ]
            }
        ]
    },
    {
        "id": "20",
        "title": "SolidWorks",
        "description": "In this course, you will learn to use SolidWorks for 3D CAD design and modeling, starting with the fundamentals of setting up your projects and navigating the interface. You'll explore basic part creation techniques, including sketching, extruding, and cutting to develop fundamental 3D shapes. As you advance, you'll delve into more complex modeling tasks such as creating assemblies, applying and managing constraints, and using advanced features like surface modeling and sheet metal design. The course will also cover detailed assembly techniques, including how to fit and align parts accurately, and the use of advanced tools for motion analysis and interference checking. Additionally, you'll learn about simulation techniques, such as stress analysis and thermal simulations, to test and validate your designs under real-world conditions. By the end of the course, you'll be equipped with the skills to create, assemble, and analyze detailed 3D models using SolidWorks, ready to tackle professional CAD design challenges.",
        "details": [
            {
                "chapterTitle": "Getting Started with SolidWorks",
                "chapterDescription": [
                    { "title": "How to create a new part or assembly?", "timeline": "03:10" },
                    { "title": "How to navigate the SolidWorks interface?", "timeline": "04:00" },
                    { "title": "How to use basic sketching tools?", "timeline": "05:15" },
                    { "title": "How to save and export models?", "timeline": "04:05" },
                    { "title": "How to customize toolbars and settings?", "timeline": "04:30" }
                ]
            },
            {
                "chapterTitle": "Basic Modeling Techniques",
                "chapterDescription": [
                    { "title": "How to create and modify parts?", "timeline": "06:00" },
                    { "title": "How to use features like extrude and revolve?", "timeline": "05:45" },
                    { "title": "How to apply materials and appearances?", "timeline": "06:15" },
                    { "title": "How to create and manage assemblies?", "timeline": "07:00" },
                    { "title": "How to use basic motion analysis?", "timeline": "06:30" }
                ]
            },
            {
                "chapterTitle": "Advanced Modeling and Simulation",
                "chapterDescription": [
                    { "title": "How to use advanced features and tools?", "timeline": "07:20" },
                    { "title": "How to perform stress and strain analysis?", "timeline": "07:10" },
                    { "title": "How to use complex assemblies and subassemblies?", "timeline": "07:45" },
                    { "title": "How to create detailed drawings and documentation?", "timeline": "06:55" },
                    { "title": "How to use advanced simulation tools?", "timeline": "07:30" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage projects?", "timeline": "05:35" },
                    { "title": "How to use templates and standards?", "timeline": "05:55" },
                    { "title": "How to prepare models for manufacturing?", "timeline": "06:25" },
                    { "title": "How to back up and version control models?", "timeline": "06:00" },
                    { "title": "How to collaborate on design projects?", "timeline": "06:40" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export models and drawings?", "timeline": "05:20" },
                    { "title": "How to use collaborative features?", "timeline": "06:10" },
                    { "title": "How to review and comment on designs?", "timeline": "05:55" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:35" },
                    { "title": "How to track changes in models?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:20" },
                    { "title": "How to speed up your design workflow?", "timeline": "05:15" },
                    { "title": "How to optimize performance and file size?", "timeline": "06:05" },
                    { "title": "How to use advanced tools and techniques?", "timeline": "07:10" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:30" }
                ]
            }
        ]
    },
    {
        "id": "21",
        "title": "Maya",
        "description": "In this course, you will learn to use Autodesk Maya for 3D modeling, animation, and rendering, starting with the fundamentals of the interface and basic modeling tools. You’ll explore essential techniques such as creating and manipulating geometric shapes, using extrusion and subdivision methods to build complex models. As you progress, you'll delve into advanced modeling techniques, including sculpting detailed textures and working with advanced shaders.The course will also cover animation fundamentals, teaching you how to create and refine animations using keyframes, rigging, and character animation techniques. You'll learn about the principles of motion, including easing, timing, and synchronization to bring your animations to life.Additionally, you'll explore advanced rendering techniques, including setting up lighting, camera angles, and materials to produce high-quality, photorealistic images. You'll learn to use Maya’s rendering engines, such as Arnold, to optimize your final renders for both quality and efficiency.By the end of the course, you'll have the skills to create detailed 3D models, produce dynamic animations, and render high-quality visuals using Maya, preparing you for professional work in 3D design and animation.",
        "details": [
            {
                "chapterTitle": "Getting Started with Maya",
                "chapterDescription": [
                    { "title": "How to create a new scene?", "timeline": "03:20" },
                    { "title": "How to navigate the Maya interface?", "timeline": "04:00" },
                    { "title": "How to use basic modeling tools?", "timeline": "05:10" },
                    { "title": "How to save and export scenes?", "timeline": "03:45" },
                    { "title": "How to customize the workspace?", "timeline": "04:30" }
                ]
            },
            {
                "chapterTitle": "Basic Modeling and Texturing",
                "chapterDescription": [
                    { "title": "How to create and modify 3D models?", "timeline": "06:20" },
                    { "title": "How to use UV mapping and texturing?", "timeline": "06:00" },
                    { "title": "How to apply and manage materials?", "timeline": "06:30" },
                    { "title": "How to create and use shaders?", "timeline": "06:50" },
                    { "title": "How to use lighting and cameras?", "timeline": "07:15" }
                ]
            },
            {
                "chapterTitle": "Animation and Rigging",
                "chapterDescription": [
                    { "title": "How to create and manage animations?", "timeline": "07:10" },
                    { "title": "How to use keyframes and animation curves?", "timeline": "07:25" },
                    { "title": "How to rig characters and objects?", "timeline": "08:00" },
                    { "title": "How to use inverse kinematics?", "timeline": "07:45" },
                    { "title": "How to create and use animation controls?", "timeline": "07:55" }
                ]
            },
            {
                "chapterTitle": "Rendering and Finalizing",
                "chapterDescription": [
                    { "title": "How to set up and use render settings?", "timeline": "06:30" },
                    { "title": "How to create high-quality renders?", "timeline": "07:05" },
                    { "title": "How to use mental ray and Arnold?", "timeline": "07:20" },
                    { "title": "How to render for different platforms?", "timeline": "06:45" },
                    { "title": "How to finalize and export animations?", "timeline": "07:35" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage scenes and assets?", "timeline": "05:40" },
                    { "title": "How to use project folders and files?", "timeline": "06:00" },
                    { "title": "How to prepare models for rendering and export?", "timeline": "06:25" },
                    { "title": "How to back up and version control projects?", "timeline": "06:10" },
                    { "title": "How to collaborate on animation projects?", "timeline": "06:35" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Review",
                "chapterDescription": [
                    { "title": "How to share and export scenes and animations?", "timeline": "05:25" },
                    { "title": "How to use collaborative features?", "timeline": "06:15" },
                    { "title": "How to review and comment on animations?", "timeline": "06:05" },
                    { "title": "How to manage feedback and revisions?", "timeline": "06:40" },
                    { "title": "How to track changes in scenes?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts?", "timeline": "04:30" },
                    { "title": "How to speed up your modeling and animation workflow?", "timeline": "05:25" },
                    { "title": "How to optimize render performance?", "timeline": "06:10" },
                    { "title": "How to use advanced tools and features?", "timeline": "07:20" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:35" }
                ]
            }
        ]
    },
    {
        "id": "22",
        "title": "Visual Studio",
        "description": "In this course, you will learn to use Visual Studio for software development, starting with the initial setup and configuration of your development environment. You'll explore fundamental features such as creating and managing projects, writing and editing code, and utilizing the integrated development tools. As you progress, you'll delve into debugging techniques, including setting breakpoints, stepping through code, and using the diagnostic tools to identify and resolve issues efficiently.The course will also cover advanced features like source control integration, teaching you how to use Git and other version control systems within Visual Studio for effective collaboration and code management. You’ll learn about project management tools, including task tracking, code reviews, and continuous integration setups, to streamline your development workflow.Additionally, you'll explore extensions and customization options to enhance your development environment and improve productivity. By the end of the course, you'll have the skills to develop, debug, and manage software projects effectively using Visual Studio, preparing you for a range of software development tasks and environments.",
        "details": [
            {
                "chapterTitle": "Getting Started with Visual Studio",
                "chapterDescription": [
                    { "title": "How to install and set up Visual Studio?", "timeline": "04:10" },
                    { "title": "How to navigate the Visual Studio interface?", "timeline": "05:00" },
                    { "title": "How to create a new project?", "timeline": "04:45" },
                    { "title": "How to use the Solution Explorer?", "timeline": "05:20" },
                    { "title": "How to customize the IDE?", "timeline": "04:55" }
                ]
            },
            {
                "chapterTitle": "Basic Coding and Debugging",
                "chapterDescription": [
                    { "title": "How to write and run a simple application?", "timeline": "06:00" },
                    { "title": "How to use breakpoints and watch windows?", "timeline": "06:20" },
                    { "title": "How to use the debugger effectively?", "timeline": "06:45" },
                    { "title": "How to handle exceptions and errors?", "timeline": "06:10" },
                    { "title": "How to use code refactoring tools?", "timeline": "05:50" }
                ]
            },
            {
                "chapterTitle": "Advanced Features",
                "chapterDescription": [
                    { "title": "How to use Git and version control?", "timeline": "07:15" },
                    { "title": "How to manage project dependencies?", "timeline": "06:50" },
                    { "title": "How to use unit testing and code analysis?", "timeline": "07:05" },
                    { "title": "How to work with different languages and frameworks?", "timeline": "06:30" },
                    { "title": "How to create and manage custom extensions?", "timeline": "07:00" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage large projects?", "timeline": "05:45" },
                    { "title": "How to use project templates and scaffolding?", "timeline": "05:55" },
                    { "title": "How to manage build configurations and deployments?", "timeline": "06:20" },
                    { "title": "How to collaborate with team members?", "timeline": "06:00" },
                    { "title": "How to track and manage tasks and bugs?", "timeline": "06:35" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Integration",
                "chapterDescription": [
                    { "title": "How to use collaboration tools in Visual Studio?", "timeline": "05:10" },
                    { "title": "How to integrate with cloud services?", "timeline": "06:15" },
                    { "title": "How to work with external tools and services?", "timeline": "05:50" },
                    { "title": "How to set up continuous integration and delivery?", "timeline": "06:30" },
                    { "title": "How to handle merge conflicts and code reviews?", "timeline": "06:50" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts effectively?", "timeline": "04:25" },
                    { "title": "How to optimize your development workflow?", "timeline": "05:30" },
                    { "title": "How to use advanced debugging techniques?", "timeline": "06:15" },
                    { "title": "How to manage performance and memory usage?", "timeline": "06:00" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:20" }
                ]
            }
        ]
    },
    {
        "id": "23",
        "title": "Visual Studio Code",
        "description": "In this course, you will learn to use Visual Studio Code (VS Code) for lightweight and versatile code editing, starting with the installation process and basic setup of your development environment. You'll explore essential features such as the integrated terminal, basic text editing, and navigating the codebase efficiently.As you progress, you'll delve into more advanced usage, including customizing the editor with settings and themes to suit your workflow. You'll learn how to leverage VS Code’s powerful debugging tools to identify and fix issues in your code, as well as how to manage multiple files and projects using workspaces.The course will also cover advanced features and extensions that enhance functionality, such as version control integration with Git, code linting, and auto-completion. You'll explore how to install and configure extensions to support various programming languages and frameworks, improving your productivity and development efficiency.",
        "details": [
            {
                "chapterTitle": "Getting Started with Visual Studio Code",
                "chapterDescription": [
                    { "title": "How to install and set up Visual Studio Code?", "timeline": "03:50" },
                    { "title": "How to navigate the Visual Studio Code interface?", "timeline": "04:30" },
                    { "title": "How to create and open files and projects?", "timeline": "04:15" },
                    { "title": "How to use the integrated terminal?", "timeline": "04:55" },
                    { "title": "How to customize settings and preferences?", "timeline": "04:40" }
                ]
            },
            {
                "chapterTitle": "Basic Coding and Editing",
                "chapterDescription": [
                    { "title": "How to write and edit code efficiently?", "timeline": "05:30" },
                    { "title": "How to use code snippets and auto-completion?", "timeline": "05:45" },
                    { "title": "How to navigate and refactor code?", "timeline": "05:20" },
                    { "title": "How to use debugging features?", "timeline": "06:00" },
                    { "title": "How to handle version control with Git?", "timeline": "05:55" }
                ]
            },
            {
                "chapterTitle": "Advanced Features and Extensions",
                "chapterDescription": [
                    { "title": "How to install and manage extensions?", "timeline": "06:10" },
                    { "title": "How to use integrated tools and debuggers?", "timeline": "06:30" },
                    { "title": "How to configure custom workflows?", "timeline": "06:00" },
                    { "title": "How to use workspace settings and configurations?", "timeline": "06:20" },
                    { "title": "How to integrate with external services?", "timeline": "06:40" }
                ]
            },
            {
                "chapterTitle": "Project Management",
                "chapterDescription": [
                    { "title": "How to organize and manage projects in VS Code?", "timeline": "05:25" },
                    { "title": "How to use tasks and build systems?", "timeline": "05:55" },
                    { "title": "How to configure and use launch configurations?", "timeline": "06:10" },
                    { "title": "How to collaborate with others using Live Share?", "timeline": "06:35" },
                    { "title": "How to manage project dependencies?", "timeline": "06:20" }
                ]
            },
            {
                "chapterTitle": "Collaboration and Integration",
                "chapterDescription": [
                    { "title": "How to use collaboration features in VS Code?", "timeline": "05:15" },
                    { "title": "How to integrate with cloud services and APIs?", "timeline": "06:05" },
                    { "title": "How to use containerization and remote development?", "timeline": "06:20" },
                    { "title": "How to work with different version control systems?", "timeline": "06:10" },
                    { "title": "How to handle merge conflicts and pull requests?", "timeline": "06:45" }
                ]
            },
            {
                "chapterTitle": "Tips and Tricks",
                "chapterDescription": [
                    { "title": "How to use keyboard shortcuts and commands?", "timeline": "04:30" },
                    { "title": "How to optimize your coding workflow?", "timeline": "05:20" },
                    { "title": "How to use advanced features and extensions?", "timeline": "06:00" },
                    { "title": "How to manage performance and memory usage?", "timeline": "05:50" },
                    { "title": "How to troubleshoot common issues?", "timeline": "06:10" }
                ]
            }
        ]
    }
];

