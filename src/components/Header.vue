<template>
  <nav>
    <ul>
      <li>
        <img class="logo-nav" src="../assets/PigeonLine_Logo.png" alt="logo" />
      </li>
      <router-link to="/" tag="li" active-class="active-link" exact><a>Home</a></router-link>
      <router-link to="/customers" tag="li" active-class="active-link" ><a>Customer DataTable</a></router-link>
      <router-link to="/customers/visualization" tag="li" active-class="active-link" ><a>Customer Data Visualization</a></router-link>
    </ul>
  </nav>
</template>
<style>

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #f8fff6, #8c378d);
  }

  nav li {
    float: left;
  }

  nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 25px 16px;
    text-decoration: none;
  }

  .logo-nav {
    width: 150px;
  }

  nav li a:hover {
    background-color: #8d4a78;
  }

  nav button {
    margin-top: 13px;
  }

  .active-link {
    background-color: #8d5f7e;
  }

</style>
