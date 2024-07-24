
#### Function requirements
1. **Map View**: App fetch and show nearby cars
2. **Request Ride**: Rider should be able to request a ride.
3. Driver should be able to accept or deny ride.
4. at the start of app use can choose cash/card etc..
5. **Ride Details**: When ride is accepted, show driver details to user and expected time. 
6. **Communication**: use can chat or call driver if necessary
7. **Ride in Progress**: map should show real-time location.
8. **past/History**: user can see past rides.
9. **End/Cancel**: user or driver should be able to end or cancel the trip.
10. Support chat
11. favorites
12. Scheduling ride in advance

#### Function requirements
1. **Performance**: map should load faster
2. **Mobile Responsive**
3. Error handling and error response
4. a11y
5. Localization

#### Assumption

1. user is already logged into system
2. Bootstrap tour
3. Integrate with existing map services
4. use setDirection from google map to show path from start to end destination.
5. Set language in the header

#### Network Protocol

1. **Server Sent Events**: 
   1. Real Time Movement of the cars
		 EndPoint :- sse/cars
	```js
	interface Irequest{
		zoomLevel: number,
		bounding-box:{
			topleft:{
			lat:, 
			lan:
				},
			bottomRight:{
				lat:, 
				lan:
			}
		}
	}

	interface Iresponse{
		data:[
			cars:{
				id: string,
				type: CarType,
				lat: number,
				lng: number
			}
		]
	}
	```


2. Status Before accepting ride 
		end Point - sse/request-updates/:rideId
		```
		interface Iresponse{
			status: Accepted | Declined
			 driverId: string
			 estimatedTime: Date
		}
		```
3. Live Tracking during ride
		endPoint :- sse/car-tracking/:rideId
```js
	interface Irequest{
		curLat: number,
		curlan: number,
		zoomLevel: number
		

	```

#### WebSocket
1. Driver -user communication
	1. end point - ws/user-chat/:rideId
```js
	interface Iresponse{
		message:{
			id: string,
			timestamp: Date,
			message: string
		}
		

	```