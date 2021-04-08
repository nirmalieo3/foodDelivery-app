# foodDelivery-app
* app component: nav bar, social icons and footer has been added.
* home component: Mat card in the template, and an array of images in the ts file to create  images in the home.
* resturanti component using shared service got data from a API service and using a mat-card, and ngFor in the template to get data from the ts file.
   also Product interface has been created to get backend data.
* clicking one of the restaurent goes to menu page. and there data comes from a API backend service, using shared service and interface menu got the data to the
   menu component. using ngFor and menuList, products has shown in the template. add to cart , increse, decrese products  function has been created.
   in the menu component shopping cart has created using a mat-card, addItemstoCart function and ngfor with cartItems array used to populate data in the shopping cart. also add,      minus, and delete  functions has created in the shopping cart.
 * When click shopping cart icon it opens shopping cart component.using shared service and setCartItems() in the menu.ts ,getCartItems in the cart component data has sent to 
   the card component.Using ngFor, cartItems and index i in the cart template populated data in the cart component.
 * when click the submit button in the card component riepilogo page will open. in riepilogo.ts using shared service and getCartItems() that already been there got products from 
   the cart item. To get total getCartTotal() has used in the riepilogo.ts. In here db.json file has used to get data and post data. in msgService use postPeople() to post data to    json server and use getPeople() to get data from the json server in local host.also use postDati(), getDati() related to getPeople() and postPeople() in msgService. In        
   ripielogo template used ngModel and input field to get data. to populate json data in the template used ngFor and personList array. Also products is a sub array of the json   
   file, again use ngFor with item.items array to populate product list.
   
   
   
   
