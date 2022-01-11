<script>
  import NavItem from "./NavItem.svelte";
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav">
  <ul>
    <NavItem href="/featured">
      Featured 
    </NavItem>
    <NavItem href="/entertainment" >
      Entertainment
    </NavItem>
    <NavItem href="/politics">
      Politics
    </NavItem>
    <NavItem href="/business" >
      Business
    </NavItem>
    <NavItem href="/technology" >
      Technology
    </NavItem>
    <NavItem href="/lifestyle" >
      Lifestyle
    </NavItem>
    <NavItem href="/sports" >
      Sports
    </NavItem>
    <NavItem href="/about" >
      About
    </NavItem>
  </ul>
</nav>