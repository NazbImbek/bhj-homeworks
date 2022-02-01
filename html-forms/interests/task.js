const checkboxes = Array.from(document.querySelectorAll('.interest__check'));
for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', handle);

    function handle(event) {
      const children = event.target.closest('.interest').querySelectorAll('input');
        if (this.checked === true) {
          for (let child of children) {
            child.checked = true;
          }
        } else {
            for (let child of children) {
              child.checked = false;
            }
          }
    }
}