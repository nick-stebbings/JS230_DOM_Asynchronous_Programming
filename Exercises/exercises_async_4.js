// An event listener is created on the image element, which is nested within an anchor element. The event listener is listening on the bubbling phase, since the last argument to the createEventListener method is false.

// When the event fires, it is not propagated because of perventPropagation(); The default behaviour of the anchor is unchanged.

// In order to stop the link from being followed on the click of the image, we can add the listener to the 'a' element and change the inner method call to event.preventDefault();
