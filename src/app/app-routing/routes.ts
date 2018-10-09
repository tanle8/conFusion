// We define all the routes we need here.

// Include all the components you want to navigate using route
import { Routes } from "@angular/router";
import { MenuComponent } from "../menu/menu.component";
import { DishdetailComponent } from "../dishdetail/dishdetail.component";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";

// Specify the route:
// - starting with the [path] - which url will include, e.g. www.abc.org/home
// - after that [component] - it the corresponding component, e.g. HomeComponent
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'dishdetail/:id', component: DishdetailComponent},
    // Default route (location) when user navigates to the site without providing
    // specific path, e.g. www.abc.org/. We redirect user to our desired location
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]