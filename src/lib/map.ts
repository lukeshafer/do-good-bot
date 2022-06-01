// Users will be able to add/remove their location on a map
// TODO: determine map (multiple photos, regions, etc?)
//      - North America, South America, Europe, Africa (north/south?), Asia, Australia/New Zealand, Pacific Islands?
// Map will be a static image with a list of people who have added themselves above
// TODO: figure out secure way to store discord user information.
//      - It could just live in the actual discord message and pull from that, so that I'm not holding people's data (and it's extendable)
//        - Will need to be a very user readable format. Maybe YAML
//
// User interaction lifecycle:
//    User sends command /addme Gahanna Ohio
//    User gets a private response asking them to confirm the location on a map (zoomed out)
//    If user didn't give a location, or they didn't like the location, they are asked to re-send the command with example "/addme Los Angeles, California, USA"
//    /addme help sends instructions and is clear that a full address is not needed, just city, state/province where applicable, and country

// Files
// commands/addme.ts
//    Has all the discord interaction stuff
//    Asks user for location, or provides help if needed
//    Once location is received, bot will run it through a function

// lib/map.ts
//    Exports helper functions which addme.ts will use
//  getLocalMap(location:string) => exports an imageURL:string which will be diplayed to the user
//    HELPERS
//    getGeocode(location:string) => returns geocode:object using Mapbox geocode API
//    generateMapURL(coordinates:string) => returns the imageURL:string using the coordinates and other hardcoded info like zoom level and image size
//  updateWorldMap(location:string) => returns pass:boolean (possibly) and updates the corresponding world image
//    HELPERS
//    getGeocode - see above
//    getRegion(geocode object) => using data from the geocoding (most likely country or continent), return region:string for the location
//      alternatively, if mapbox doesn't make this easy, we'll define boundaries based on coordinates
//    addToRegion(region:string, user:??, location:string) => adds
