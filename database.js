var FIREBASE = firebase.initializeApp(config);
var DATABASE = FIREBASE.database();
var HITS;

function getData(ref, callback){
  var hits = firebase.database().ref(ref);
  hits.on('value', function(snapshot) {
    callback(snapshot.val());
  });
}

function updateHits(hits){
  firebase.database().ref('/').set({
      hits: hits,
  });
}

function getHits(callback){
  getData('hits/', function(value){
    HITS = value;
    callback(HITS)
  });
}

function initDatabase(callback){
  getHits(callback);
}
