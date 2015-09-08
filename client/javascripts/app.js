var peopleData;
var $container;
var $generate;

$(document).ready(function(){

    $container = $("#peopleContainer");
    $generate = $(".generate");

    $generate.on('click', function(){
        $.ajax({
            type: "GET",
            url: "/users/generate",
            success: function(){
                console.log("GENERATED!");
                getData();
            }
        });
    });

    $container.on('click', '.delete', function(){
        var $el = $(this);
        $.ajax({
            type: "DELETE",
            url: "/users/" + $(this).data('id'),
            success: function(data){
                console.log(data);
                $el.parent().remove();
            }
        });
    });

    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url: "/users",
        success: function(data){
            console.log(data);
            peopleData = data;
            appendPeople();
        }
    });
}

function appendPeople(){
    $container.empty();
    for(var i = 0; i < peopleData.length; i++){
        $container.append($("<div>", {class:'col-sm-3 well'}));
        var $el =  $container.children().last();
        $el.append($("<p>", { class: 'lead' }).text(peopleData[i].name));
        $el.append($("<p>").text(peopleData[i].age + ", " + peopleData[i].sex));
        $el.append($("<p>", { class: 'location' }).text(peopleData[i].location));
        $el.append($("<p>", { class:'twitter' }).text(peopleData[i].twitter));
        $el.append($("<button>", { class:'btn btn-danger delete', 'data-id': peopleData[i]._id  }).text('X'));
    }
}