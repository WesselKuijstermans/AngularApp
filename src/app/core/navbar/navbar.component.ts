import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">{{ title }}</a>
        <button
          class="navbar-toggler hidden-sm-up"
          type="button"
          (click)="isNavbarCollapsed = !isNavbarCollapsed"
          data-target="#navbarsDefault"
          aria-controls="navbarsDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div [ngbCollapse]="isNavbarCollapsed" class="collapse navbar-collapse" id="navbarsDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            <li class="nav-item dropdown" ngbDropdown>
              <a class="nav-link dropdown-toggle" id="id01" href="#" ngbDropdownToggle>Files</a>
              <div class="dropdown-menu" aria-labelledby="id01" ngbDropdownMenu>
                <a class="dropdown-item" href="#">Link 1</a>
                <a class="dropdown-item" href="#">Link 2</a>
                <a class="dropdown-item" href="#">Link 3</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  @Input() title: string
  isNavbarCollapsed = true
}
