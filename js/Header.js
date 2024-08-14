
function Header() {
  return (
   `<div class="offcanvas offcanvas-start w-sm-50" id="menu">
  
  <div class="offcanvas-body">
    
   <ul class="nav flex-column">
    <li class="nav-item">
      <a class="nav-link" href="webpack.html">webpack</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
  </div>
</div>
`
 );
}

let header = document.querySelector("header");

header.innerHTML = Header();

