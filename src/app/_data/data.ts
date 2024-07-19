import { levelTypes } from "../_components/_types/levelTypes";

export const cardData = [
    {
        id:"22",
        title:"Visual Studio Courses",
        iconUrl:"/courses/page1.jpg",
        imgUrl:"/courses/page1.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"1",
        title:"Unity Courses",
        iconUrl:"/courses/page2.jpg",
        imgUrl:"/courses/page2.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"12",
        title:"Photoshop Courses",
        iconUrl:"/courses/page3.jpg",
        imgUrl:"/courses/page3.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"23",
        title:"VS Code Courses",
        iconUrl:"/courses/page4.jpg",
        imgUrl:"/courses/page4.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"2",
        title:"Blender Courses",
        iconUrl:"/courses/page5.jpg",
        imgUrl:"/courses/page5.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"4",
        title:"Excel Courses",
        iconUrl:"/courses/page6.jpg",
        imgUrl:"/courses/page6.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"3",
        title:"Unreal Engine Courses",
        iconUrl:"/courses/page7.jpg",
        imgUrl:"/courses/page7.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"5",
        title:"Word Courses",
        iconUrl:"/courses/page8.jpg",
        imgUrl:"/courses/page8.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"17",
        title:"PowerPoint Courses",
        iconUrl:"/courses/page9.jpg",
        imgUrl:"/courses/page9.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"18",
        title:"SketchUp Courses",
        iconUrl:"/courses/page10.jpg",
        imgUrl:"/courses/page10.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"19",
        title:"AutoCAD Courses",
        iconUrl:"/courses/page11.jpg",
        imgUrl:"/courses/page11.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"20",
        title:"SolidWorks Courses",
        iconUrl:"/courses/page12.jpg",
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
        iconUrl:"/courses/page14.jpg",
        imgUrl:"/courses/page14.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"7",
        title:"Premiere Pro Courses",
        iconUrl:"/courses/page15.jpg",
        imgUrl:"/courses/page15.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"8",
        title:"HitFilm Courses",
        iconUrl:"/courses/page16.jpg",
        imgUrl:"/courses/page16.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"9",
        title:"Audacity Courses",
        iconUrl:"/courses/page17.jpg",
        imgUrl:"/courses/page17.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"10",
        title:"Ableton Live Courses",
        iconUrl:"/courses/page18.jpg",
        imgUrl:"/courses/page18.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"11",
        title:"Pro Tools Courses",
        iconUrl:"/courses/page19.jpg",
        imgUrl:"/courses/page19.jpg",
        level:levelTypes.beginner,
    },
    {
        id:"13",
        title:"GIMP Courses",
        iconUrl:"/courses/page20.jpg",
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
        iconUrl:"/courses/page23.jpg",
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
        description: "In this course, you will learn to utilize Unity for game development. Covering everything from setting up projects to advanced debugging and deployment strategies.",
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
        description: "In this course, you will learn to utilize Blender for 3D modeling and animation. Covering everything from setting up projects to advanced rendering techniques.",
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
        description: "In this course, you will learn to utilize Unreal Engine for game development. Covering everything from setting up projects to advanced debugging and deployment strategies.",
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
        description: "In this course, you will learn to utilize Excel for data management and analysis. Covering everything from setting up projects to advanced data visualization strategies.",
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
        description: "In this course, you will learn to utilize Word for document creation and management. Covering everything from basic formatting to advanced document features.",
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
        description: "In this course, you will learn to utilize Da Vinci Resolve for video editing and color grading. Covering everything from basic editing to advanced color correction techniques.",
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
        description: "In this course, you will learn to utilize Premiere Pro for professional video editing. Covering everything from basic editing to advanced effects and transitions.",
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
        description: "In this course, you will learn to utilize Hitfilm for video editing and visual effects. Covering everything from basic editing to advanced VFX techniques.",
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
        description: "In this course, you will learn to utilize Audacity for audio recording and editing. Covering everything from basic audio edits to advanced sound manipulation techniques.",
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
        description: "In this course, you will learn to utilize Ableton Live for music production and live performance. Covering everything from basic setup to advanced music creation techniques.",
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
        "description": "In this course, you will learn to use Pro Tools for audio recording, editing, and mixing. Covering everything from initial setup to advanced audio post-production techniques.",
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
        "description": "In this course, you will learn to use GIMP for image editing and graphic design. Covering everything from basic photo manipulation to advanced graphic design techniques.",
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
        "description": "In this course, you will learn to use Illustrator for vector graphic design. Covering everything from basic drawing tools to advanced vector art techniques.",
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
        "description": "In this course, you will learn to use After Effects for motion graphics and visual effects. Covering everything from basic animation to complex effects and compositing techniques.",
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
        "description": "In this course, you will learn to use Lightroom for photo management and editing. Covering everything from importing and organizing photos to advanced color grading and retouching techniques.",
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
        "description": "In this course, you will learn to use PowerPoint for creating impactful presentations. Covering everything from basic slide design to advanced presentation techniques.",
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
        "description": "In this course, you will learn to use SketchUp for 3D modeling and design. Covering everything from basic modeling tools to advanced techniques for architectural and interior design.",
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
        "description": "In this course, you will learn to use AutoCAD for 2D drafting and 3D modeling. Covering everything from basic drawing tools to advanced CAD techniques for professional design.",
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
        "description": "In this course, you will learn to use SolidWorks for 3D CAD design and modeling. Covering everything from basic part creation to advanced assembly and simulation techniques.",
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
        "description": "In this course, you will learn to use Maya for 3D modeling, animation, and rendering. Covering everything from basic modeling tools to advanced animation and rendering techniques.",
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
        "description": "In this course, you will learn to use Visual Studio for software development. Covering everything from initial setup and debugging to advanced features like source control and project management.",
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
        "description": "In this course, you will learn to use Visual Studio Code for lightweight and versatile code editing. Covering everything from installation and basic usage to advanced features and extensions.",
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

