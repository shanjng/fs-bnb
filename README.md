# FullStack-BnB

This is a online housing marketplace app. I built if off of inspiration from AirBnB's own app and a desire to put what I learned about fullstack coding to the test. There are 3 forms of the app and an API that can be run locally. You may buy, sell, list, and analyze properties as if you were a customer, provider, or on the admin panel. 

### Installation

Enter enter of the app/API directories and use the below command to download all needed dependencies that are listed in package.json and needed to run the apps.

```
$ npm install
```

## Deployment

Run the below command in any of the app directories to get the app running on your localhost running.

```
$ npm start
```

If you are running the consumer/provider/admin app you must first run the API with the above command for full functionality.

All SQL requests are with a local database. Set up the local database using a software like MySQL Workbench and change the configuration details in this file: ```./API/src/data-base/data-base.js```. The SQL conection variable will then be automatically updated throughout the program. 

## Built With

* [Angular](https://angular.io/) - The web framework used
* [Ionic](https://ionicframework.com/) - SDK used on top of Angular
* [Express.js](https://expressjs.com/) - Used to handle API requests and routing


## Acknowledgments

This app was inspired by the AirBnB app and created during my time in Cape Town, South Africa.

## File Structure
| APP                 | COMPONENT          | FILE NAMES                                                                                                                                                                              |
|---------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consumer mobile app | Login              | ix_final_proj\consumer-mobile-app\src\app\pages\login        |
| Consumer mobile app | Registration       | ix_final_proj\consumer-mobile-app\src\app\pages\registration |
| Consumer mobile app | User Profile       | ix_final_proj\consumer-mobile-app\src\app\pages\profile                 |
| Consumer mobile app | List of Properties | ix_final_proj\consumer-mobile-app\src\app\pages\explore     |
| Provider mobile app | Login              | ix_final_proj\provider-mobile-app\src\app\pages\login             |
| Provider mobile app | Registration       | ix_final_proj\provider-mobile-app\src\app\pages\registration |
| Provider mobile app | User Profile       | ix_final_proj\provider-mobile-app\src\app\pages\profile                 |
| Provider mobile app | List of Properties | ix_final_proj\provider-mobile-app\src\app\pages\existing      |
| Provider mobile app | List of Bookings   | ix_final_proj\provider-mobile-app\src\app\pages\bookings?listingId=*id*         |
| Admin Panel         | Users              | ix_final_proj\admin-panel\src\app\components\users                |
| Admin Panel         | Bookings           | ix_final_proj\admin-panel\src\app\components\bookings                                    |
| API                 | Users              | ix_final_proj\API\src\api\user-routes.js                                                                      |
| API                 | Bookings           | ix_final_proj\API\src\api\booking-routes.js                                                      |
