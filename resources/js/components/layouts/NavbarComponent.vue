<template>

    <div class="position">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100 navigation" id="navbar">
    <div class="container-fluid d-iniline-flex" >
        <v-toolbar
            color="transparent"
        flat class="mt-4">
            <router-link to="/">
                <v-toolbar-title to="/about">
                <img width="130px" src="/images/SEBS-Logo-Prototype-3.jpg" alt="Vaxon." class="img-fluid">
                </v-toolbar-title> </router-link>
            <v-toolbar-title to="/" class="indigo--text text--darken-4"><h2><b>INSTITUTE</b></h2></v-toolbar-title></v-toolbar>

           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main-navbar" >
            <ul class="navbar-nav text-right ml-auto">
              <li class="nav-item dropdown dropdown-slide">
                <router-link to="/about" class="nav-link dropdown-toggle" role="button">
                   About Us
                </router-link>
              </li>
                <!-- Pages -->
              <li class="nav-item dropdown dropdown-slide">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Browse Courses<v-icon
                        left
                        >mdi-chevron-down
                        </v-icon>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
                  <li><router-link to="/writingSkill">General Writing Skill</router-link></li>
                  <li><router-link to="/ielts">IELTS Training</router-link></li>
                  <li><router-link to="/cssSkill">Writing Skills for CSS</router-link></li>
                  <li><router-link to="/englishForAll">Spoken English for All</router-link></li>
                  <li><router-link to="/englishForProfessionals">English for Professionals</router-link></li>
                </ul>
              </li><!-- /Pages -->
               <!-- / Blog -->

              <li class="nav-item dropdown dropdown-slide">
                <router-link to="/#" class="nav-link dropdown-toggle" role="button">
                    Take Online Test
                </router-link>
              </li>
              <li class="nav-item dropdown dropdown-slide">
                <v-btn
                    class="ma-2 hidden-sm-and-down"
                    outlined
                    color="#c8102e">
                    Login
                </v-btn>
              </li>

              <li class="nav-item dropdown dropdown-slide">
                <v-btn
                    class="ma-2 hidden-sm-and-down"
                    outlined
                    color="#012169">
                    Signup
                </v-btn>
              </li>
            </ul>
          </div>



      </div>
        </nav>
    </div>

</template>
<style scoped>

.position{

  position:sticky;


  z-index: 2;
}
a{
  text-decoration: none !important;
}
.navigation .navbar-nav > li {
  padding: 0px 0px;
}

.navigation .navbar-nav > li.active a {
  color: grey;
}

.navigation .navbar-nav > li > a {
  color: grey;
  font-size: 17px;
  padding: 20px 15px;
  text-transform: capitalize;
  -webkit-transition: .2s ease-in-out 0s;
  transition: .2s ease-in-out 0s;
  letter-spacing: .5px;
  font-weight: 600;
}

.navigation .navbar-nav > li > a:hover, .navigation .navbar-nav > li > a:active, .navigation .navbar-nav > li > a:focus {
  background: none !important;
  color: #902110;
}

.nav-link {
  color: rgb(8, 12, 96) !important;
  font-size: 17px !important;
}

.nav-link:hover {
  color: #902110 !important;
}

.navigation .navbar-nav .nav-link span {
  font-size: 8px;
  margin-left: 3px;
}

.navigation .nav .open > a {
  border: 1px solid transparent;
  background-color: transparent;
}

.navigation .dropdown-slide {
  transition: all .35s ease;
  transition: all .35s ease;
}

.dropdown-menu {
  border: none !important;
  display: block !important;
  position: absolute;
  width: 238px !important;
  border-top: 3px solid #902110 !important;
  left: auto !important;
  padding: 10px !important;
  border-radius: 0px;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0px 1px 7px 0px rgba(172, 169, 169, 0.1);
  transition: all .35s ease;
  transition: all .35s ease;

}

.dropdown-menu li a {
  color: #222;
  font-size: 15px !important;
  border: 1px solid transparent;
  display: block;
  padding: 8px 16px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  transition: .3s all;
  transition: .3s all;
}

.dropdown-menu li a:hover {
  background-color: rgb(233, 232, 232) !important;
  color: #902110;
}

.navigation .dropdown-slide .cart-dropdown {
  width: 290px !important;
  padding: 35px 20px;
  right: -40px;
  transform: translateY(25px);
  transform: translateY(25px);
}

.dropdown-toggle::after {
  display: none !important;
}

.menu:hover {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.8, 0, 0.2, 1);
  transition: -webkit-transform 0.3s cubic-bezier(0.8, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0.8, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0.8, 0, 0.2, 1), -webkit-transform 0.3s cubic-bezier(0.8, 0, 0.2, 1);
  -webkit-transform: scale3d(0, 1, 1);
          transform: scale3d(0, 1, 1);
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
  background-color: #fff;
}

.top-menu li {
  position: relative;
}

.top-menu li a {
  color: #000;
}

.top-menu li a i {
  width: 35px;
  height: 35px;
  background: #eee;
  display: inline-block;
  color: #000;
  text-align: center;
  padding-top: 10px;
  border-radius: 100%;
}

.top-menu li span {
  font-weight: 600;
}

.nav-item.dropdown.dropdown-slide:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  margin-top: -5px;
  z-index: 9999;
}

.dropdown.cart-nav.dropdown-slide:hover .cart-dropdown {
  display: block;
  opacity: 1;
  z-index: 9999;
  visibility: visible;
  margin-top: -5px;
}

@media (max-width: 480px) {
  .navigation {
    padding: 15px 25px;
  }
  .navigation .navbar-nav .nav-link {
    border-bottom: 1px solid #dedede;
    padding: 10px 0px;
  }
}

@media (max-width: 400px) {
  .navigation {
    padding: 15px 25px;
  }
  .navigation .navbar-nav .nav-link {
    border-bottom: 1px solid #dedede;
    padding: 10px 0px;
  }
}

@media (max-width: 768px) {
  .navigation {
    padding: 15px 25px;
  }
  .navigation .navbar-nav .nav-link {
    border-bottom: 1px solid #dedede;
    padding: 10px 0px;
  }
}

@media (max-width: 992px) {
  .navigation {
    padding: 15px 25px;
  }
  .navigation .navbar-nav .nav-link {
    border-bottom: 1px solid #dedede;
    padding: 10px 0px;
  }
}

.navbar-nav .nav-link {
  color: #000;
}

.navbar-nav .nav-link:hover {
  color: #fb5c42;
}

.navbar-nav .nav-link span {
  font-size: 8px;
  margin-left: 3px;
}

.navbar-nav .nav-link .nav .open > a {
  border: 1px solid transparent;
  background-color: transparent;
}
</style>
<script>
  export default {
    data: () => ({

    }),
  }
</script>
