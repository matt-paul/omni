app.controller('OmniController', [function() {

  var self = this;

  // something like the following
  // self.chords = {
    //
    // }
  self.changeChord = function(note) {
    console.log("New chord is "+ note);
    sound.play(note);
  };

}]);
