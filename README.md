# airport-simulation

## Convert a csv file to a sql lite table
### sqlite3
#### Open or create the database
##### .open C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\flightschedule.db
##### .mode csv
#### Create the arrivals table
##### .import C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\arrivals.csv arrivals
##### .schema
#### Create the departures table
##### .import  C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\departures.csv departures
##### .schema
##### .quit

#### dotnet ef migrations add --startup-project C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api --context FlightsDbContext Initial

#### Access the api with scalar https://localhost:32808/scalar/

#### npm run build, npm start dev

