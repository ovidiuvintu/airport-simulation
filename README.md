# airport-simulation

## Convert a csv file to a sql lite database
### sqlite3
#### .open C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\flightschedule.db
#### .mode csv
#### .import --skip 2 C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\arrivals.csv arrivals
#### .schema
#### .import --skip 2 C:\Development\airport-simulation\src\AirportSimulation\FlightSchedule.Api\Data\departures.csv departures
#### .schema
#### .quit

