if (annyang) {
    var commands = {

      "play video": function () {
        document.getElementById('myVideo').click(function(){this.paused?this.play():this.pause();});      
    },

      "pause video": function () {
        document.getElementById('myVideo').pause();
      },

      "dark mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#000';
      
      },

      "light mode": function(){
        document.getElementById('videodiv').style.backgroundColor= '#fff';
        console.log("day mode");
        
      },


      'write name *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("name").value=variable;
        }

        else
        {
          let uname = document.getElementById("uname");
          uname.value=variable;
        }
          
      },

      'write email *tag':function(variable){
        if($('#loginbox').is(':visible'))
        {
          document.getElementById("email").value=variable;
        }

        else
        {
          let emailadd = document.getElementById("emailadd");
          emailadd.value=variable.split(" ").join("");
        }
          
      },

      'write phone number *tag':function(variable){
          let mobnum = document.getElementById("telnum");
          mobnum.value=variable;
      },

      'write query *tag':function(variable){
          let mymessage = document.getElementById("mymessage");
          mymessage.value=variable;
      },

      "submit *tag": function(tag){
        if(tag=="details")
        { 
          var name=document.getElementById('name').value;
          document.getElementById('modaluser').innerHTML="Hi "+name+"!!";
          $('#loginbox').modal("hide");
          $('#greetoverlay').modal("show");

          setTimeout(function() {
          $('#greetoverlay').modal("hide");
          }, 5000); 
        }
        else if (tag=="query")
        {
          let myform = document.getElementById("myform");  
          let formareainner = document.querySelector('.form-area-inner');  
          let formheading = document.querySelector('.form-area-inner h2'); 
          myform.remove();
          formheading.innerHTML = 'Your Form is successfully submitted'
          let html = '';
          html += `<p>Thanks for submitting your query. We  will shortly contact you.</p>`;
          formareainner.innerHTML += html;
        }
        
      },

      'Go to *tag': function(tag){
        var url = 'https://www.'+tag;
        $.getJSON(url);
        window.open(url +'.com','website');
        console.log(url);
    },

    'Search for *search': function(tag) {
        var url = 'https://www.google.com/search?q=' + tag;
        window.open(url,'website');
        console.log(url);
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            contentType: "application/json",
            dataType: 'jsonp'
        });
        console.log(tag);
    },      
        'login':function()
        {
          var login = new Howl({
            src: ['../sound/openinglogin.mp3'],
            volume: 0.8
          });
          
          login.play();
          $('#exampleModal').modal("show");
          $('#exampleModal2').modal("hide");                 
        }, 
        'register':function()
        {
          var register = new Howl({
            src: ['../sound/openingregister.mp3'],
            volume: 0.8
          });
          
          register.play();
          $('#exampleModal2').modal("show");
          $('#exampleModal').modal("hide");          
        },  
        'scroll up (little)': function () {
          var scroll = new Howl({
            src: ['../sound/scrollingup.mp3'],
            volume: 0.8
          });
          
          scroll.play();
          window.scrollBy(0, -300);
        },
        'scroll down (little)': function () {
          var scroll = new Howl({
            src: ['../sound/scrollingdown.mp3'],
            volume: 0.8
          });
          
          scroll.play();
          window.scrollBy(0, 300);
        },
        'scroll to top': function () {
          var scroll = new Howl({
            src: ['../sound/scrolltotop.mp3'],
            volume: 0.8
          });
          
          scroll.play();
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
        'scroll to bottom': function () {
          var scroll = new Howl({
            src: ['../sound/scrolltobottom.mp3'],
            volume: 0.8
          });
          
          scroll.play();
          $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
        },
        'home': function()
        {
          var home = new Howl({
            src: ['../sound/home.mp3'],
            volume: 0.8
          });
          
          home.play();
          document.getElementById("home").click();
          document.getElementById("hometab").click(); 
          
       },
        'Electronics': function()
        {
          var Electronics = new Howl({
            src: ['../sound/Electronics.mp3'],
            volume: 0.8,
            html:true
          });
          
          Electronics.play();
          document.getElementById("Electronicstab").click(); 
        },
        'Appliances': function()
        {
          var Appliances = new Howl({
            src: ['../sound/Appliances.mp3']
          });
          
          Appliances.play();
          document.getElementById("Appliancestab").click(); 
        },
        'About Us': function()
        {
          var AboutUs = new Howl({        
            src: ['../sound/about.mp3']
          });
          // const player = new Tone.Player("../sound/about.mp3").toDestination();
          // Tone.loaded().then(() => {
          //   player.start();
          // });
          document.getElementById("AboutUstab").click(
            function () {
              AboutUs.play();
            }
          ); 
          
        },
        'New Arrivals': function()
        {
          var NewArrival = new Howl({
            src: ['../sound/NewArrival.mp3']
          });
          
          NewArrival.play();
          document.getElementById("NewArrivaltab").click(); 
        },
        'Pages': function()
        {
          var Pages = new Howl({
            src: ['../sound/Pages.mp3']
          });
          
          Pages.play();
          document.getElementById("Pagestab").click(); 
          console.log("156");
        },
        'Contact Us': function()
        {
          var ContactUs = new Howl({
            src: ['../sound/ContactUs.mp3']
          });
          
          ContactUs.play();
          document.getElementById("Contacttab").click(); 
        },
        'close': function()
        {
          var close = new Howl({
            src: ['../sound/close.mp3'],
            volume: 0.8
          });
          
          close.play();
          //Register Close
          $('#exampleModal').modal("hide");
          //Login Close
          $('#exampleModal2').modal("hide");
        },
        
    };
    annyang.addCommands(commands);
    annyang.start();
  }



  


