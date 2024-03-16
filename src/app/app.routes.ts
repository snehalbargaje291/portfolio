import { Routes } from '@angular/router';
import { HeaderComponent } from './mycomponents/header/header.component';
import { EducationComponent } from './mycomponents/education/education.component';
import { ExperianceComponent } from './mycomponents/experiance/experiance.component';
import { ProjectsComponent } from './mycomponents/projects/projects.component';
import { SkillsComponent } from './mycomponents/skills/skills.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { ContactComponent } from './mycomponents/contact/contact.component';
import { ErrorComponent } from './mycomponents/error/error.component';

export const routes: Routes = [
    {
        path: "",
        component: HeaderComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "education",
        component: EducationComponent
    },
    {
        path: "experiance",
        component: ExperianceComponent
    },
    {
        path: "contact",
        component: ContactComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "skills",
        component: SkillsComponent
    },
    {
        path: "**",
        component: ErrorComponent
    }
];
