import { Controller } from "@hotwired/stimulus"
import { useDebounce } from "stimulus-use"

export default class extends Controller {
  static targets = ["input", "results"]
  static debounces = ["search"]

  connect() {
    useDebounce(this)
  }

  search() {
    if (this.inputTarget.value.trim() === "") {
      this.resultsTarget.innerHTML = `
      <div class="d-flex align-items-center justify-content-center" style="height:200px;">
        <p class="text-muted">Search for prompt</p>
      </div>`;
    } else {
      fetch(`/search?query=${encodeURIComponent(this.inputTarget.value)}`)
          .then(response => response.text())
          .then(html => this.resultsTarget.innerHTML = html)
          .catch(error => console.error(error));
    }
  }
}