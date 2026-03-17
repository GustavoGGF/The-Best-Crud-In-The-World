import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../pages/home-page/home-page.module").then(
        (m) => m.HomePageModule,
      ),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("../pages/perfil-page/perfil-page.module").then(
        (m) => m.PerfilPageModule,
      ),
  },
  {
    path: "user",
    loadChildren: () =>
      import("../pages/user-page/user-page.module").then(
        (m) => m.UserPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
