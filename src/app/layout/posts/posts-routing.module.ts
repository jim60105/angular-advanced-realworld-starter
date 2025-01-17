import { AuthGuard } from './../../auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'post', redirectTo: 'posts' },
  { path: 'post/:id', component: PostComponent },
  { path: 'create', component: CreateComponent , canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
