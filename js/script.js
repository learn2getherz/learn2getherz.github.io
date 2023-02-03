//Lazy Script
function make(elementType) {
    return {
      from: function(id) {
        this.id = id;
        return this;
      },
      injectTo: function(parentElement) {
        this.parentElement = parentElement;
        return this;
      },
      content: function(content) {
        this.content = content;
        return this;
      },
      create: function() {
        let newElement = document.createElement(elementType);
        newElement.id = this.id;
        newElement.innerHTML = this.content;
        let parent = document.querySelector(this.parentElement);
        if (!parent) {
            console.log("Parent element not found!");
            return;
        }
        parent.appendChild(newElement);
      }
    }
}
function id(name) {
    let element = document.getElementById(name);
    return {
      AddClass: function(className) {
        element.classList.add(className);
      },
      RemoveClass: function(className) {
        element.classList.remove(className);
      },
      ToggleClass: function(className) {
        element.classList.toggle(className);
      }
    }
}
function img(src) {
    return {
        id: function(id) {
            this.id = id;
            return this;
        },
        alt: function(alt) {
            this.alt = alt;
            return this;
        },
        to: function(parentElement) {
            let newImg = document.createElement("img");
            newImg.src = src;
            newImg.id = this.id;
            newImg.alt = this.alt;
            let parent = document.querySelector(parentElement);
            if (!parent) {
                console.log("Parent element not found!");
                return;
            }
            parent.appendChild(newImg);
        }
    }
}

//Lazy Variable
class uni_var{
  nav_keys = ["Home"]//, "Reads", "Account"]
}

function all_system(){
  //Declares
  let uv = new uni_var()
  
  //Seed Theme

  //Header
  make("section").from("header").injectTo("body").content("").create()
    
    //Nav Bar
    make("div").from("nav").injectTo("#header").content("").create()
      //Logo
      make("div").from("logo_container").injectTo("#nav").content("").create()
      img("assets/imgs/logo.png").id("logo").alt("Logo").to("#logo_container")

      //Message
      make("div").from("logo_content").injectTo("#logo_container").content("").create()
      make("h3").from("web_name").injectTo("#logo_content").content("Learn With Me!").create()
      make("h4").from("web_subName").injectTo("#logo_content").content("Let our mind Grow, and Expand!").create()

      //Navs Containers
      make("div").from("nav_container").injectTo("#nav").content("").create()
      for(i = 0; i < uv.nav_keys.length; i++){
        make("li").from(uv.nav_keys[i] + "_nav").injectTo("#nav_container").content(uv.nav_keys[i]).create()
        id(uv.nav_keys[i] + "_nav").AddClass("nav_list")
      }
      //Default
      id(uv.nav_keys[0] + "_nav").AddClass("active_nav")
      
  //Body
  make("section").from("content").injectTo("body").content("").create()

  //Footer
  make("section").from("footer").injectTo("body").content("").create()
}

function home_content(){
  //Declare
  let uv = new uni_var()

  for(i = 0; i < uv.nav_keys.length; i++){
    make("div").from(uv.nav_keys[i] + "_page_content").injectTo("#content").content("").create()
    id(uv.nav_keys[i] + "_page_content").AddClass("page")
  }

  make("div").from(uv.nav_keys[0] + "_content").injectTo(uv.nav_keys[0] + "_page_content").content("").create(b)
      //Home
        //What is New!
        //Featured!
        //Random
        //All

      //Read
        //On Progress
        //Finished
        //To Read
      
      //Account
}

//It aranges all the class and function on the JS
function constructor(){
  all_system()
  home_content()
}
//always run
constructor()