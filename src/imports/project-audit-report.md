
## Audit React prototype application stability 

Sometimes we have issues publishing the Prototype on make, this is usually due to console errors, but it is not always clear why it won't publish. This time it did publish but all the displays on the front end is a blank screen with this colour #121212 background. 




I need you to help me write a prompts that is going to audit the code base, especially the config files in the root of the project:

- /vite.config.ts
- /postcss.config.mjs
- /package.json
- /tsconfig.node.json
- /tsconfig.json
- /tsconfig.app.json


Review these files:

- /src/app/App.tsx
- /src/app/routes.ts
- /src/app/types.ts
- /src/main.tsx
- /src/vite-env.d.ts



## Audit state of build optimisation

Review these docs = /docs/BUILD-OPTIMIZATION.md

Identify issues with files that are not being loaded properly or imported properly

Identify orphaned files that could be removed. 

Make sure there are guidelines on how to build new components effectively to meet the optimise requirements so that memory usage doesn't get exceeded. 

I don't entirely understand this area I need you to help me flesh this audit out


## Audit routes and URLs

We need to clear guidelines on how to define routes and what roots are currently defined, you could potentially store this information within the site structure guidelines folder = /guidelines/site-structure/ - unless you have a better idea of where to store the guidelines. 

Make sure that all routes are defined in the routes file - /src/app/routes.ts - and loaded properly in the App.tsx file. 

The guidelines file should explain all of the current routes and their slugs as well as how they will dynamically create the URLs that gets added to links and the URLs that the browser uses.


## Audit Mock Data and Types 

Personally I want to say that all components and front and interfaces that display content should always store that content in mock data files, these mock data files need to always have guidelines describing how they are structured in this folder = /guidelines/data-structure/

I need you to carefully audit the mock data files / folders = /src/app/data/ - We need to ensure that data files don't get too big, I don't know what that means in size but ideally you need to come up with some guidelines around the format and size of data files. But you need to clearly define how to handle when a data file gets too big, how it will be broken up into smaller files and then correctly imported. 

I need you to carefully audit the types.s file / folders = /src/app/types.ts - you need to make sure that the data files reference this types file correctly and that the value values are accurate and up-to-date always aligned with all data files not just some. 



## Audit ts & tsx imports 

Help me to find exactly what we need to check for to make sure that the application is stable, usually imports are an issue, no modules need upgrading. 


## CSS file structure audit

You're going to need to review all of the components and check that they import the style sheets correctly, make sure that the sequence that files are imported is correct, I don't understand the full requirements and how to effectively import style sheets but I'm sure you do, create guide guidelines to define this. 

Also I find that often the CSS files are not imported properly, do not have a proper index.css or global.css. Generally I want to move away from using tailwind.css for everything because the in-line styles that get added to the components cause problems and I would much rather use global styles. To move away from the tailwind.CSS file, we simply make that file reference the other files like this one - /src/styles/tailwind.css - audit this file carefully. 

Here is a list of the CSS files needing 

- /src/styles/index.css
- /src/styles/markdown-prose.css
- /src/styles/theme.css
- /src/styles/fonts.css
- /src/styles/tw.animate.css
- /src/styles/print.css
- /src/styles/fonts.css
- /src/styles/global.css

CSS stylesheet improvements planned for the future, these will be added to expand and break up potentially very large style sheets into smaller more manageable and dedicated css files:

- /src/styles/theme-light.css - light mode styles to be added here
- /src/styles/theme-dark.css - dark mode styles to be added here
- /src/styles/theme-variables.css - presets to be added here

You need to update the guidelines with very clear instructions on how to add new CSS, and I would like you to document all of the current CSS variables in the guidelines under /guidelines/design-tokens/ 


## Protected Files & Filesystem cleanup guidelines 


Add the missing README.md and CHANGELOG.md to the root of the project and update the /guidelines/Guidelines.md to protect files list and prevent these .md from being deleted from root folder during cleanups.

Regarding the changelog file, the structure, format and version numbers need to follow these sites strictly:

- Keep a changelog - https://keepachangelog.com/en/1.1.0/
- Semver - https://semver.org/


Create a folder in the root for /imports/ instead of the current folder /src/imports/ and update the guidelines to reference the correct imports folder. 


Add a new protected folder called /skills/ in the root of the project, whenever new AI agent skills are imported they need to be added to a new subfolder within skills, like this skill we added today - /skills/wordpress-block-pattern-validator/

Always ignore supabase, we never use supabase on this project - /utils/supabase/ - folder cannot be deleted, because it is protected, so I just want you to add a guideline that clearly states that we don't use supabase on this project. 

Always create .md guidelines files in the /guidelines/ folder or an appropriate subfolder. 

Always create .md user facing documentation in the root of the /docs/ folder.

Always create .sh or .py scripts in the root of the /scripts/ folder. 

Always create .md reports in the root of the /reports/ folder and this is one of the few folders where you are allowed to delete and clean out files from the /reports/archived/ folder. I would also like some kind of a guideline that states that reports that have task lists that have been completed should be deleted seven days after the task list is completed. This is one of the checks you need to run on a regular basis to keep the system clean, only ever delete from the archived folder =  /reports/archived/ - you need to describe the process for archiving very carefully. 

Always create .md task lists in the root of the /tasks/ folder and this is one of the few folders where you are allowed to delete and clean out files from the /tasks/archived/ folder. The all purpose task list is here /tasks/task-list.md and should be used for simple one or two checkbox tasks, every time I ask for something you need to update this file with the task unless it is a full on prompt which requires its own dedicated task list. For tracking the status of all task lists in this /tasks/ folder you need to always maintain this file /tasks/master-task-list.md which will not contain actual tasks it will simply reference active task lists, when a task list is archived, then the master task list should be updated with the new reference. You should always link to task list whether they are active or archived, you should also consider linking the related reports to the task list described in that section on the master-task-list.md document. Lastly, you always update the /guidelines/Guidelines.md file with status changes so I'm just mentioning this here I don't exactly know how you manage this and I would like clear guidelines written about it. You need to describe the process for archiving task lists very carefully. 

The prompts folder should be protected, do not delete files in this folder /prompts/ unless expressly stated. 



## Phosphor icons

There have been issues with the React Lucide Icon pack, you must replace the icon pack with the React Phosphor icon pack - https://phosphoricons.com?weight=fill&color=d028c8&size=96

