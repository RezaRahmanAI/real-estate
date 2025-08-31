import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ProjectsComponent } from './pages/project/project.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './pipes/auth-guard';
import { DashboardHomeComponent } from './features/dashboard/dashboard-home/dashboard-home.component';
import { ProjectsIndexComponent } from './features/projects/projects-index/projects-index.component';
import { ProjectEditComponent } from './features/projects/project-edit/project-edit.component';
import { ProjectFeaturesComponent } from './features/projects/project-features/project-features.component';
import { ProjectGalleryComponent } from './features/projects/project-gallery/project-gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LandownerComponent } from './pages/landowner/landowner.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TeamsIndexComponent } from './features/teams/teams-index/teams-index.component';
import { TestimonialsIndexComponent } from './features/testimonials/testimonials-index/testimonials-index.component';
import { OffersIndexComponent } from './features/offers/offers-index/offers-index.component';
import { AboutUsIndexComponent } from './features/about-us/about-us-index/about-us-index.component';
import { FaqComponent } from './features/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projectdetails/:id', component: ProjectDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'landowner', component: LandownerComponent },
  // { path: 'blogs-events', component: BlogsEventsComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'blogDetails/:id', component: BlogDetailsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'teams', component: TeamsIndexComponent },
      { path: 'blogs', component: BlogComponent },
      { path: 'testimonials', component: TestimonialsIndexComponent },
      { path: 'offers', component: OffersIndexComponent },
      { path: 'about-us', component: AboutUsIndexComponent },
      { path: 'faq', component: FaqComponent },
      {
        path: 'projects',
        children: [
          { path: '', component: ProjectsIndexComponent },
          { path: ':id/edit', component: ProjectEditComponent },
          { path: ':id/features', component: ProjectFeaturesComponent },
          { path: ':id/gallery', component: ProjectGalleryComponent },
        ],
      },
    ],
  },
];
