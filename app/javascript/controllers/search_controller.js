import { Controller } from "@hotwired/stimulus"
import { useDebounce } from "stimulus-use"

export default class extends Controller {
  static targets = ["input", "results"]
  static debounces = ["search"]

  connect() {
    useDebounce(this)
  }

  search() {
    console.log('fetching');
    fetch(`/search?query=${encodeURIComponent(this.inputTarget.value)}`)
        .then(response => response.text())
        .then(html => this.resultsTarget.innerHTML = html)
        .catch(error => console.error(error));
  }
}