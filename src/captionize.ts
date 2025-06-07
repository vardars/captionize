//
// vardars
//

// It's good practice to ensure jQuery types are available.
// This is often handled by tsconfig.json and @types/jquery,
// but a triple-slash directive can be explicit if needed.
/// <reference types="jquery" />

interface DefaultValue {
  id: string;
  value: string;
}

// If 'captionize' is meant to be a global object, this approach is problematic in modules.
// For a module, we would typically export functions directly.
// Let's assume we want to export the 'set' function.

export function set(elem: string | JQuery<HTMLElement>): void {
  const defaultvals: DefaultValue[] = [];

  $(elem)
    .each(function () {
      const id = $(this).attr("id");
      const title = $(this).attr("title");
      // Ensure id and title are not undefined before pushing
      if (id !== undefined && title !== undefined) {
        defaultvals.push({
          id: id,
          value: title,
        });
      } else {
        // Optionally log or handle elements missing id or title
        // console.warn("Element missing id or title:", this);
      }
    })
    .on('focus', function () {
      const id = $(this).attr("id");
      if (id === undefined) return; // Or handle error

      const inputdefaultvalue = getdefaultvalue(id);
      if ($(this).val() == inputdefaultvalue) {
        $(this).val("").removeClass("passive");
      }
    })
    .on('blur', function () {
      const id = $(this).attr("id");
      if (id === undefined) return; // Or handle error

      const inputdefaultvalue = getdefaultvalue(id);
      if ($(this).val() == "") {
        $(this).val(inputdefaultvalue).addClass("passive");
      }
    })
    .trigger("blur"); // Trigger blur to set initial state

  function getdefaultvalue(elemid: string): string | undefined {
    for (let i = 0; i < defaultvals.length; i++) {
      if (defaultvals[i].id == elemid) {
        return defaultvals[i].value;
      }
    }
    return undefined; // Explicitly return undefined if not found
  }
}

// To maintain the global `captionize.set` for backward compatibility,
// you might do something like this, but it's generally not recommended for new modules.
// This part should be considered carefully based on how the library is intended to be used.
/*
if (typeof window !== 'undefined') {
  (window as any).captionize = (window as any).captionize || {};
  (window as any).captionize.set = set;
}
*/
