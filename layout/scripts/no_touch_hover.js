// Check if the device uses a coarse pointer (like a finger)
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (!isTouchDevice) {
  // Add a helper class to the body if it's a desktop/mouse device
  document.body.classList.add('can-hover');
}
