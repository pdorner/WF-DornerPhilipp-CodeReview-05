// ID Counters
counter = 0;
counter2 = 0;
loopId = "#a" + 0;
loopId2 = "#d" + 0;
arr = [];
$(document).ready(function() {
    //fill countent 1 with my Json in a Loop that makes row and Coloms automatic
    function creat() {
        for (let i = 0; i < persons.length; i++) {

            if (i % 4 == 0 || i == 0) {
                loopId = "#a" + counter;
                $(".cont1").append(`<div class = "row p-3 mx-0" id ="${"a" +counter}"></div>`);
                counter++;
            }

            $(loopId).append(`
            <div class= "col-sm-12 col-md-6 col-lg-6 col-xl-3 card p-2 back grid-sizer">
            <img src="${persons[i].img}" class="rounded mx-auto d-block card-img-top " id="${"b" +i}"  alt="imgSuperhero" width = "100%" height ="300em">  
              <i class="fa fa-heart like puls" aria-hidden="true" id ="${"c"+i}" ></i>
               <figcaption class="figure-caption text-right">${persons[i].disc}"</figcaption>
            </div>`);

        }
        y();
    }

    window.onload = creat();

    function y() {
        $(".like").click(function() {
        //    $(this).off('click');  ----------------> how make it active again??            
        	var c = checkobj(this.id);
        	if (c != "no"){
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

    function xy() {
        $(".dislike").click(function() {
            $(this).toggleClass("heart")
            $(this).css({ color: "red" });
            arr.splice(this.id.slice(1), 1);
            cont2();
        });
    }

    function cont2() {
        $(".cont2").html("");

        counter2 = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 == 0 || i == 0) {
                loopId2 = "#d" + counter2;
                $(".cont2").append(`<div class = "row p-3 mx-0" id ="${"d"+ counter2}"></div>`);
                counter2++;
            }

            $(loopId2).append(`
            <div class= "col-sm-12 col-md-12 col-lg-6 col-xl-6 card">
            <img src="${arr[i].img}" class="rounded mx-auto d-block card-img-top" alt="imgSuperhero"  width = "100%" height ="500em">  
            <i class="fa fa-heart dislike wiggle" aria-hidden="true" id="${"e" +i}"></i>
            <figcaption class="figure-caption text-right">${arr[i].disc}"</figcaption>
            <div class="card-body">
            <h3><span class="badge badge-secondary">"${arr[i].name}"</span></h3>
            <p>Age:"${arr[i].age}"</p>
            <p>Location: "${arr[i].location}"</p>
            <p>Hobbys: "${arr[i].hobbys}"</p>
            <p>Music: "${arr[i].music}"</p>
			</div>
            </div>`);

        }
        xy();
    }

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

});