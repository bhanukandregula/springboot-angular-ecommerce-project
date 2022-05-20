# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Release 01: Development process
1. Create Angular project
2. Create Angular component for product-list
3. Develop TypeScript class for product
4. Create Angular service to call REST API's
5. Update Angular component to subscribe to data from Angular Service
6. Display the data in an HTML page
7. Add cross origin support to Spring Boot app

### Relsease 02: Development Process

1. Online Shop Template Integration
   1. Download the HTML templates started files
   2. Install Bootstrap CSS styles locally with npm
   3. Add local custom CSS styles to Angular src/styles.css
   4. Integrate template files into Angular App
   5. Add support for icons and logos
   6. Enchance ouir application with product images
   
2. Search for products by Category
   1. Define Routes
   2. Configure Router based on our Routes
   3. Define the Router Outlet
   4. Setup Router Links to pass category ID param
   5. Enchancce ProductListComponment to read category ID param
   6. Modify Springboot App - REST Repositoty needs new method
   7. READ Categories from Database via REST API, they are hardcoded now
      1. Modify Springboot app - expose entity ids
      2. Creata a class: Product Category
      3. Create new component for menu
      4. Enchance Menu component to read data from product service
      5. Udpate product service to call URL on Spring boot app
      6. In HTML, replace hard coded links with menu component
   
3. Search for products by text box
      1. UserFlow:
         1. Users enters Search text
         2. Clicks Search Button
         3. SearchComponent has a click handler method
         4. Read Search text
         5. Route the data to the "search" route
         6. Handled by ProductList component
   1. Modify Springboot app - Add a new search method
   2. Add new Angular route for searching
   3. Create new component for Search
   4. Update search component to send data to search route
   5. Enhance ProductListComponent to search for products with ProductService
   6. Update ProductSerice to call URLew on Springboot App

4. Master/ detail view of products
   1. Create a new component for Product details
   2. Add new angular route for product Details
   3. Add router links to the product-list-grid HTML page
   4. Enhance ProductDetailsComponent to retrive Product from ProductService
   5. Udpate productService  to call URL on Springboot app
   6. Udpate HTML page for the productDetailsComponent to display product details

5. Pagination support for products
6. Add products to shopping cart (CRUD)
7. Shopping cart checkout

### Development commands
1. ng new angular-ecommers
2. ng serve --open
3. ng generate compnent components/product-list
4. ng generate class common/product
5. ng generate service services/product
6. npm install bootstrap
7. npm install @fordawesome/fontawesome-free
8. ng generate class common/product-category
9. ng generate component components/product-category-menu
10. ng generate component components/search
11. ng generate component components/ProductDetails


### Angular Definitions:
##### Order of Routes is Important
1. Router: Main routing service. Enables navigation between views based on user actions
2. Route:  Maps a URL path to a component
3. RouterOutlet:  Acts as a placeholder. Renders the desired component based on route
4. RouterLink: Link to specific routes in your application
5. Activated Route: The current active Route that loaded the component. Useful for accessing route parameters.

#### Challenges to solve.
1. Images are not rendering when we navigate from side caregory panel - Books and Coffee Mugs
2. Unable to click on the image to route to Product Details Component