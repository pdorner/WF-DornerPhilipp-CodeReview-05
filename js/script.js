	// ID Counters
	counter = 0;
	counter2 = 0;
	loopId = "#a" + 0;
	loopId2 = "#d" + 0;
	arr = [];
	$(document).ready(function() {

	    function creatHeaderandNav() {
	        $("#head").append(`<header class="row  mx-0">
	            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 ml-auto">
	                <h1 class="title">Marvel and DC Dating</h1>
	            </div>
	        </header>
	            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
	                <div class="collapse navbar-collapse" id="navbarSupportedContent">
	                    <ul class="navbar-nav mr-auto">
	                        <li class="nav-item active">
	                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
	                        </li>
	                        <li class="nav-item">
	                            <a class="nav-link" href="#">Favorits <span class="sr-only">(current)</span></a>
	                        </li>
					       
	                    </ul>
	                    <form class="form-inline my-2 my-lg-0">
	                        <li class="nav-item">
						        <select class="custom-select" id="sort">
						         	<option selected>Sort It!</option>
						          	<option value="age">Sort by Age</option>
									<option value="name">Sort by Name</option>
									<option value="favAge">Sort Favorits by Age</option>
									<option value="favName">Sort Favorits by Name</option>
						        </select>
	                    </form>
	                </div>
	            </nav>`);
	    }

	    //fill countent 1 with my Json in a Loop that makes row and Coloms automatic

	    function creatMain(persons) {
	        $(".cont1").html("");
	        for (let i = 0; i < persons.length; i++) {

	            if (i % 4 == 0 || i == 0) {
	                loopId = "#a" + counter;
	                $(".cont1").append(`<div class = "row p-3 mx-0 col" id ="${"a" +counter}"></div>`);
	                counter++;
	            }

	            $(loopId).append(`
	            <div class="ui-state-default col-sm-12 col-md-6 col-lg-6 col-xl-3 card p-2 grid-sizer panel">
	            <img src="${persons[i].img}" class="rounded mx-auto d-block card-img-top " id="${"b" +i}" alt="imgSuperhero" width = "100%" height ="300em">  
	              <i class="fa fa-heart like puls" aria-hidden="true" id ="${"c"+i}" ></i>
	               <p class="text top-left">${persons[i].name}</p>
	               <p class="text bottom-right ">${persons[i].disc}</p>
	            </div>`);

	        }
	        y();
	        sor();
	    }

	    function footer() {
	        $("#foot").append(`<h1 class="title">Marvel and DC Dating</h1>
	        	<p class = "mt-1" id="myName">&copy; Dorner Philipp-CodeFactory 2018</p>`);


	    }


	   

	    //like function for get Person into Cont2 and disable likebutton
	    function y() {
	        $(".like").click(function() {
	            //    $(this).off('click');  ----------------> how make it active again??            
	            var c = checkobj(this.id);
	            if (c != "no") {
	                $(this).toggleClass("heart");
	                $(this).css({ color: "red" });
	                var obj = persons[this.id.slice(1)];
	                arr.push(obj);
	                cont2();
	            } else {
	                console.log("Person can´t be added 2 times")
	            }
	        });
	    }
	    //dislike function for get Person out of  Cont2

	    function xy() {
	        $(".dislike").click(function() {
	            $(this).toggleClass("heart")
	            $(this).css({ color: "red" });
	            arr.splice(this.id.slice(1), 1);
	            cont2();
	        });
	    }
	    //cont 2 get alle Persons from arr into cont2 container
	    function cont2() {
	        $(".cont2").html(`<div class = "row p-3 mx-0 col2" id ="${"d0"}"></div>`);

	        counter2 = 0;
	        for (let i = 0; i < arr.length; i++) {

	        	//rows if i need some
	            // if (i % 2 == 0 || i == 0) {
	            //     loopId2 = "#d" + counter2;
	            //     $(".cont2").append(`<div class = "row p-3 mx-0 col2" id ="${"d"+ counter2}"></div>`);
	            //     counter2++;
	            // }
	            let rand = Math.floor(Math.random() *100 +1);
	            let proz = ""+ rand + "%";
	            $("#d0").append(`
	            <div class= "col-sm-12 col-md-12 col-lg-6 col-xl-6 card col ">
	            <div class="card speech m-3">
	          
	            <p>Age:${arr[i].age}</p>
	            <p>Location: ${arr[i].location}</p>
	            <p>Hobbys: ${arr[i].hobbys}</p>
	            <p>Music: ${arr[i].music}</p>
	          
				</div>
				<div class= "panel2 card">
	            <img src="${arr[i].img}" class=" mx-auto d-block card-img-top" alt="imgSuperhero"  width = "100%" height ="500em">  
	            <i class="fa fa-heart dislike wiggle" aria-hidden="true" id="${"e" +i}"></i>
	            <h2 class="text top-left ">${arr[i].name}</h2>
				<p class="text bottom-right ">${arr[i].disc}</p>

	            </div>
	            <div class="progress">
  				<div class="progress-bar"  role="progressbar" aria-valuenow="70"
  					aria-valuemin="0" aria-valuemax="100" style="width: ${proz}">
  				</div>
				</div>
	            
	            </div>`);

	        }
	        xy();
	    }
	    //dont do something if like is already is true
	    function checkobj(id) {

	        let checkIt = "no";
	        for (let i = 0; i < arr.length; i++) {
	            for (let j = 0; j < persons.length; j++) {
	                if (arr[i].name == persons[id.slice(1)].name) {
	                    return checkIt

	                }
	            }
	        }
	    }

	    //sort my list wiht likes
	    var box = $(".cont1");
	    var box2 = $(".cont2")

	    function sor() {
	        //sort by Age
	        function sortingAge() {
	            var newPerson = persons.sort(function compareNumbers(a, b) {
	                var age1 = (a.age);
	                var age2 = (b.age);
	                return age2 - age1;
	            });
	            box.innerHTML = "";
	            creatMain(newPerson);
	        }
	        //sort by AgeFAv
	        function sortingAge1() {
	            var newPerson = arr.sort(function compareNumbers(a, b) {
	                var age1 = (a.age);
	                var age2 = (b.age);
	                return age2 - age1;
	            });
	            box2.innerHTML = "";
	            cont2();
	        }
	        //sorting by Name
	        function sortingName() {
	            var newPerson = persons.sort(function(a, b) {
	                var name1 = a.name.toLowerCase(); // ignore upper and lowercase
	                var name2 = b.name.toLowerCase();
	                if (name1 < name2) {
	                    return -1;
	                }
	                if (name1 > name2) {
	                    return 1;
	                }
	                return 0; // names equal
	            });
	            box.innerHTML = "";
	            creatMain(newPerson);
	        }

	        function sortingName1() {
	            var newPerson = arr.sort(function(a, b) {
	                var name1 = a.name.toLowerCase(); // ignore upper and lowercase
	                var name2 = b.name.toLowerCase();
	                if (name1 < name2) {
	                    return -1;
	                }
	                if (name1 > name2) {
	                    return 1;
	                }
	                return 0; // names equal
	            });
	            box2.innerHTML = "";
	            cont2();
	        }

	        //call the functions wicht my Droptown menue
	        var sortIt = document.getElementById("sort");
	        sortIt.addEventListener("click", sorting, false);

	        function sorting() {
	            var sortIt = document.getElementById("sort").value;
	            if (sortIt == "age") {
	                return sortingAge();
	            } else if (sortIt == "name") {
	                return sortingName();
	            } else if (sortIt == "favAge") {
	                return sortingAge1();
	            } else if (sortIt == "favName") {
	                return sortingName1();
	            }
	        }

	    }


	    $(function() {
	        $('.cont1').sortable({
	            items: '.card',
	            change: function(e, ui) {
	                // Rearrange your columns between rows here
	            }
	        });
	        $('.cont2').sortable({
	            items: '.col',
	            change: function(e, ui) {
	                // Rearrange your columns between rows here
	            }
	        });
	    });
 creatHeaderandNav();
	    creatMain(persons);
	    footer();
});
