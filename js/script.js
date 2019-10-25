// ID Counters
counter = 0;
counter2 = 0;
loopId = "#a" + 0;
loopId2 = "#d" + 0;

heartID = "#b";
arr = [];
$(document).ready(function() {
    //fill countent 1 with my Json in a Loop that makes row and Coloms automatic
    for (let i = 0; i < persons.length; i++) {

        if (i % 4 == 0 && i != 0) {
            counter++;
            loopId = "#a" + counter;
            $(".cont1").append(`<div class = "row" id ="${"a" +counter}"></div>`);
        } else if (i == 0) {
            $(".cont1").append(`<div class = "row" id ="${"a" +counter}"></div>`);
        }
        $(loopId).append(`
            <div class= "col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <img src="${persons[i].img}" id="${"b" +i}" alt="imgSuperhero"  width = "100%" height ="200em">  
              <i class="fa fa-heart like" aria-hidden="true" id ="${"c"+i}"></i>
            <br>
            <p>"${persons[i].disc}"</p>
            </div>`);
        heartID = "#b" + i;

    }

    $(".like").click(function() {
        $(this).toggleClass("heart");
        $(this).css({ color: "red" });
        var obj = persons[this.id.slice(1)];
        console.log(obj);
        arr.push(obj);
        console.log(arr);
        cont2();


    });

    function xy() {
      $(".dislike").click(function() {
      console.log("hallo");
        $(this).toggleClass("heart")
        $(this).css({ color: "#00000030" });
        arr.splice(this.id.slice(1),1);
        cont2();
        // var obj = persons[this.id.slice(1)];
        // console.log(obj);
        // arr.remove(obj);
        // console.log(arr); 
        // cont2();


      });
    }

    function cont2() {
        $("#d0").html("");
        for (let i = 0; i < arr.length; i++) {


            $("#d0").append(`
            <div class= "col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <img src="${arr[i].img}"  alt="imgSuperhero"  width = "100%" height ="400em">  
          
              <i class="fa fa-heart dislike" aria-hidden="true" style="color : red" id="${"e" +i}"></i>
            <br>
            <p>"${arr[i].name}"</p><br>
            <p>"${arr[i].age}"</p><br
            <p>"${arr[i].location}"</p><br>
            <p>"${arr[i].hobbys}"</p><br>
            <p>"${arr[i].music}"</p><br>
            <p>"${arr[i].disc}"</p><br>


            </div>`);
            heartID = "#b" + i;


        }
        xy()
    }



});