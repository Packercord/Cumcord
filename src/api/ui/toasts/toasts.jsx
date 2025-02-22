import { ReactDOM } from "commonModules";
import { injectCSS } from "patcher";
import Toast from "./components/Toast.jsx";
import ToastContainer from "./components/ToastContainer.jsx";
import toastStore from "./store.js";

let toastDiv = document.createElement("div");

function initializeToasts() {
  injectCSS(`@keyframes cumcord-fadeIn{0%{opacity:0}100%{opacity:1}}.cumcord-toast-container{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;display:flex;flex-direction:column-reverse;align-items:flex-end;z-index:999999}.cumcord-toast{background-color:var(--background-floating);padding:18px;margin-right:10px;margin-bottom:10px;display:flex;flex-direction:column;justify-content:center;gap:14px;align-content:center;pointer-events:all;border-radius:5px;box-shadow:var(--elevation-high);animation:cumcord-fadeIn .3s;max-width:400px;overflow-wrap:anywhere}.cumcord-toast-title{font-size:22px;line-height:1}`);
  toastDiv.className = "cumcord-toast-container";
  document.getElementById("app-mount").prepend(toastDiv);
  ReactDOM.render(<ToastContainer />, toastDiv);
}

function uninitializeToasts() {
  ReactDOM.unmountComponentAtNode(toastDiv);
  toastDiv.remove();
}

function showToast({title, content, onClick = () => {}, className, duration = 3000}) {
  const toast = () => <Toast onClick={onClick} className={className} title={title} content={content}></Toast>;

  /*
    Nests is built around automatic event-firing when your store is modified.
    Unfortunately, for no apparent reason, a toast being added is not properly firing the event.
    As such, we do all of the modification on the ghost, and fire the event manually.

    This is a hack, and will be fixed in the future.
  */
 
  toastStore.ghost.toasts.push(toast);
  toastStore.update();

  function removeFunc() {
    let index = toastStore.ghost.toasts.indexOf(toast);

    if (index > -1) {
      toastStore.ghost.toasts.splice(index, 1);
      toastStore.update();
    }
  };

  if (duration != Infinity) {
    setTimeout(removeFunc, duration);
  }
  
  return removeFunc;
}

export { initializeToasts, uninitializeToasts, showToast };