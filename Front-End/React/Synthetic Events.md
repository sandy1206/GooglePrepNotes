Synthetic event is just a wrapper around native browser events, It allows react to provide constant API to handle events and font need to implement event for individual browser type.

#### Benefits

1. [[Event Delegation]]:  rather than adding event on each DOM element react will try to use event delegation so to reduce number of events added and increased performance.
2. User do not have to care abut different browser events, React provide one API to Handle all.
3. [[Event Polling]]: React reuse event object for performance reason. If we need this event object we need to specifically ask react opt-out from event polling by stating
	```js
	event.presist()
```

