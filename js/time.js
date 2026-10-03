// Game timer: starts with the first move, stops when the game ends and pauses
// while the page is hidden. The time is saved together with the game.
function GameTimer(elementId) {
  this.el = document.getElementById(elementId);
  this.seconds = 0;
  this.running = false;
  this.intervalId = null;
  var self = this;
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) self.tick(false); else if (self.running) self.tick(true);
  });
}

GameTimer.prototype.tick = function (on) {
  var self = this;
  clearInterval(this.intervalId);
  this.intervalId = on ? setInterval(function () { self.seconds++; self.render(); }, 1000) : null;
};

GameTimer.prototype.start = function () {
  if (this.running) return;
  this.running = true;
  if (!document.hidden) this.tick(true);
};

GameTimer.prototype.stop = function () {
  this.running = false;
  this.tick(false);
};

GameTimer.prototype.set = function (seconds) {
  this.seconds = seconds || 0;
  this.render();
};

GameTimer.prototype.render = function () {
  if (!this.el) return;
  var m = Math.floor(this.seconds / 60), s = this.seconds % 60;
  this.el.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
};
