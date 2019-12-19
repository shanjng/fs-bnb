# Fullstack-BnB
This is a online housing marketplace app. I built if off of inspiration from AirBnB's own app and a desire to test what I personally knew about fullstack coding to the test. There are 3 forms of the app and an API that can be run locally. You may buy, sell, list, and analyze properties as if you were a customer, provider, or on the admin panel. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## Project File Structure
| PROJECT             | COMPONENT          | FILE NAMES                                                                                                                                                                              |
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
