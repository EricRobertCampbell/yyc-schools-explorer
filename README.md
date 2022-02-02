# YYC Schools Explorer

## Outline

This site is intended to help those in the Calgary area to explore various features of local schools.

## User Stories

This sections includes some ideas of who the user of the site might be and what they might hope to accomplish. They are in no particular order.

1. A new parent whose child is just about to reach school age. They are trying to decide which local school they should send their child to, and are interested in various facets (scholastic, extracurricular, &c.) when making their decision
2. A parent who is moving to Calgary in the near future is going to use school quality (whatever that means) to influence which neighbourhood they would like to move to. They would like a way to account for things like home price when looking at different schools.
3. Someone (perhaps a parent, teacher, or administrator) is looking to compare different metrics for two (or three, or...) different schools. They would like a way to choose the different things to compare and would like to examine each of those things side-by-side in an intelligible manner

## Roadmap

### Backend / Data

-   [ ] Create backend databases and set up some sort of access
-   [ ] Create a list of accredited schools (primary and secondary) in the Calgary area, with (at least) full name and address
-   [ ] Generate the lat / lng coordinates for those schools
-   [ ] Load in various measures of academic school quality (PAT / Diploma scores, AP / IB percentages, Fraser Institute report scores, &c.)
-   [ ] Load in various non-academic measures of school quality (extracurricular, alternative programs, French (&c.) immersion, ...)
-   [ ] Load in demographic information for the schools
-   [ ] Load in the catchment areas

### Frontend

-   [ ] Set up the frontend (rudimentary - it just exists)
-   [ ] Connect to a development database (perhaps Fauna?) populated with fake data with the same shape as the production one
-   [ ] Render a map of the Calgary area with the schools (fake data) populated
-   [ ] Be able to click on the schools to display general information about that school
-   [ ] Add in an `address` field to allow the user to enter their address and select schools within a certain radius. Perhaps have this displayed on the map?
